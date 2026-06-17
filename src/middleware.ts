import { defineMiddleware } from 'astro:middleware';

// Astro node standalone + LiteSpeed (lsnode) non iniettano il .env nel processo: lo carico io
// in process.env all'avvio del server (nativo node 22, zero dipendenze), così l'endpoint
// /api/contatti vede SMTP_HOST/USER/PASS a runtime. Gira una volta, all'import del modulo.
try {
    (process as typeof process & { loadEnvFile?: (path?: string) => void }).loadEnvFile?.();
} catch {
    /* .env assente (build/CI): le PUBLIC_ restano da import.meta.env */
}

const publicDirs = ['/images', '/fonts'];

const redirects: Record<string, string> = {
    '/projects': '/progetti',
    '/skills': '/competenze',
    '/about-me': '/chi-sono',
};

const securityHeaders: Record<string, string> = {
    'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https:",
        "connect-src 'self' https://api-eu.mixpanel.com",
        "font-src 'self'",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'",
    ].join('; '),
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

const SITE_ORIGIN = 'https://www.enricomorano.it';

function applySecurityHeaders(response: Response): Response {
    for (const [key, value] of Object.entries(securityHeaders)) {
        response.headers.set(key, value);
    }
    return response;
}

function applyCanonicalLinkHeader(path: string) {
    return (response: Response): Response => {
        const canonical = path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
        response.headers.set('Link', `<${canonical}>; rel="canonical"`);
        return response;
    };
}

const isDev = import.meta.env.DEV;

export const onRequest = defineMiddleware(({ url }, next) => {
    const path = url.pathname.replace(/\/+$/, '') || '/';

    if (publicDirs.includes(path)) {
        return new Response(null, {
            status: 301,
            headers: { Location: '/' },
        });
    }

    const target = redirects[path];
    if (target) {
        return new Response(null, {
            status: 301,
            headers: { Location: target + url.search },
        });
    }

    const withCanonical = next().then(applyCanonicalLinkHeader(path));
    return isDev ? withCanonical : withCanonical.then(applySecurityHeaders);
});
