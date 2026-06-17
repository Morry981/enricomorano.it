import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

const PROJECT_TYPES = new Set([
    'Nuovo e-commerce o sito vetrina',
    'Migrazione / aggiornamento PrestaShop',
    'Assistenza / problema sullo shop',
    'Automazione / integrazione',
    'Gestionale / ERP',
    'SEO tecnica',
    'Ottimizzazione GMB',
    'Altro',
]);

// Rate-limit naive in-memory: il modulo persiste tra le richieste con l'adapter node.
const hits = new Map<string, number[]>();
const RL_WINDOW = 60_000;
const RL_MAX = 4;
const RL_MAX_KEYS = 5000; // oltre questa soglia faccio sweep, così la mappa non cresce all'infinito

function rateLimited(ip: string): boolean {
    const now = Date.now();
    if (hits.size > RL_MAX_KEYS) {
        for (const [k, ts] of hits) {
            const live = ts.filter((t) => now - t < RL_WINDOW);
            if (live.length) hits.set(k, live);
            else hits.delete(k);
        }
    }
    const recent = (hits.get(ip) ?? []).filter((t) => now - t < RL_WINDOW);
    recent.push(now);
    hits.set(ip, recent);
    return recent.length > RL_MAX;
}

async function readBody(request: Request): Promise<Record<string, string>> {
    const ct = request.headers.get('content-type') ?? '';
    if (ct.includes('application/json')) {
        const json = await request.json().catch(() => ({}));
        return Object.fromEntries(
            Object.entries(json as Record<string, unknown>).map(([k, v]) => [k, String(v ?? '')]),
        );
    }
    const fd = await request.formData();
    return Object.fromEntries([...fd.entries()].map(([k, v]) => [k, String(v)]));
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export const POST: APIRoute = async ({ request, clientAddress, redirect }) => {
    const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
    const fail = (status: number, message: string) =>
        wantsJson
            ? new Response(JSON.stringify({ ok: false, message }), {
                  status,
                  headers: { 'content-type': 'application/json' },
              })
            : redirect('/contatti?error=1', 303);
    const success = () =>
        wantsJson
            ? new Response(JSON.stringify({ ok: true }), {
                  status: 200,
                  headers: { 'content-type': 'application/json' },
              })
            : redirect('/contatti?ok=1', 303);

    // same-origin best-effort
    const origin = request.headers.get('origin');
    if (origin) {
        try {
            if (new URL(origin).host !== new URL(request.url).host) {
                return fail(403, 'Origine non valida.');
            }
        } catch {
            /* origin malformato: lascio passare alla validazione */
        }
    }

    // cap dimensione richiesta: evita payload multi-MB (memoria + email enormi)
    if (Number(request.headers.get('content-length') || 0) > 64_000) {
        return fail(413, 'Richiesta troppo grande.');
    }

    const data = await readBody(request);

    // honeypot: se compilato fingo successo, così non istruisco il bot
    if ((data.azienda_extra ?? '').trim() !== '') return success();

    const nome = (data.nome ?? '').trim();
    const email = (data.email ?? '').trim();
    const telefono = (data.telefono ?? '').trim();
    const messaggio = (data.messaggio ?? '').trim();
    const tipo = (data.tipo_progetto ?? '').trim();
    const sito = (data.sito ?? '').trim();
    const budget = (data.budget ?? '').trim() || 'Non lo so ancora';
    const privacy = ['on', 'true', '1', 'yes'].includes((data.privacy ?? '').toLowerCase());

    // cap lunghezze: blocca campi abnormi (anti-abuso, email contenute)
    if (
        nome.length > 200 || email.length > 254 || telefono.length > 50 ||
        sito.length > 300 || tipo.length > 80 || budget.length > 60 ||
        messaggio.length > 5000
    ) {
        return fail(422, 'Uno dei campi supera la lunghezza massima.');
    }

    // contatto: almeno uno tra email (valida) e telefono (>= 6 cifre).
    const emailOk = email !== '' && EMAIL_RE.test(email);
    const telOk = telefono.replace(/[\s\-().]/g, '').length >= 6;

    if (
        nome.length < 2 ||
        (!emailOk && !telOk) ||
        (email !== '' && !emailOk) ||
        messaggio.length < 10 ||
        !privacy ||
        (tipo !== '' && !PROJECT_TYPES.has(tipo))
    ) {
        return fail(422, 'Controlla i campi: nome, almeno email o telefono, messaggio e privacy.');
    }

    // primo IP di X-Forwarded-For (client reale) invece dell'header intero come chiave
    const xff = (request.headers.get('x-forwarded-for') ?? '').split(',')[0].trim();
    const ip = clientAddress || xff || 'unknown';
    if (rateLimited(ip)) {
        return fail(429, 'Troppe richieste. Riprova tra un minuto.');
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || 'web@enricomorano.it';

    if (!host || !user || !pass) {
        console.error('[contatti] SMTP non configurato: impostare SMTP_HOST/SMTP_USER/SMTP_PASS.');
        return fail(500, 'Servizio email non configurato. Scrivimi direttamente a web@enricomorano.it');
    }

    try {
        const secure = (process.env.SMTP_SECURE || 'true') !== 'false';
        const transport = nodemailer.createTransport({
            host,
            port: Number(process.env.SMTP_PORT || 465),
            secure,
            requireTLS: !secure, // 587 = STARTTLS: forza TLS, niente fallback in chiaro
            auth: { user, pass },
        });

        await transport.sendMail({
            from: `"Sito enricomorano.it" <${process.env.CONTACT_FROM || user}>`,
            to,
            replyTo: emailOk ? email : undefined,
            subject: `Nuovo contatto dal sito - ${tipo || 'richiesta'}`,
            text: [
                `Nome / ruolo: ${nome}`,
                `Email: ${email || '-'}`,
                `Telefono: ${telefono || '-'}`,
                `Sito / azienda: ${sito || '-'}`,
                `Tipo: ${tipo || '-'}`,
                `Budget: ${budget}`,
                '',
                'Messaggio:',
                messaggio,
            ].join('\n'),
        });
    } catch (err) {
        console.error('[contatti] invio fallito:', err);
        return fail(502, 'Invio non riuscito. Riprova o scrivimi a web@enricomorano.it');
    }

    return success();
};

export const GET: APIRoute = () => new Response('Method Not Allowed', { status: 405 });
