// Recensioni clienti - sorgente unica condivisa fra:
// - JSON-LD schema (src/data/schemas/person.ts -> aggregateRating + review[])
// - Sezione "Cosa dicono i clienti" nella pagina /chi-sono

export type ClientReview = {
    /** Nome o ragione sociale dell'autore (cosi' come visualizzato pubblicamente) */
    author: string;
    /** Tipo schema.org per autore (per JSON-LD) */
    authorType: 'Person' | 'Organization';
    /** Titolo recensione (subject del feedback) */
    title: string;
    /** Testo completo recensione */
    body: string;
    /** Data pubblicazione ISO YYYY-MM-DD */
    date: string;
    /** Rating 1-5 */
    rating: 1 | 2 | 3 | 4 | 5;
    /** Source pubblica della review (es. URL Trustpilot) - usato per JSON-LD publisher e attribuzione UI */
    sourceUrl?: string;
    /** Etichetta sorgente per UI (es. "Trustpilot") - usata SOLO per JSON-LD publisher, MAI mostrata in UI per non triggerare ban auto-promo */
    sourceLabel?: string;
    /** Classe Tailwind colore icona quote nella card UI (es. "text-violet-500") */
    iconColor: string;
};

const TRUSTPILOT_URL = 'https://it.trustpilot.com/review/enricomorano.it';

export const clientReviews: ClientReview[] = [
    {
        author: 'ASD Murazzo',
        authorType: 'Organization',
        title: 'Persona splendida e professionista esemplare',
        body: 'Persona splendida e professionista esemplare. Ci siamo affidati a lui per la realizzazione del sito internet della nostra società sportiva dilettantistica e siamo rimasti soddisfatissimi del risultato ottenuto. Super consigliato.',
        date: '2026-04-22',
        rating: 5,
        sourceUrl: TRUSTPILOT_URL,
        sourceLabel: 'Trustpilot',
        iconColor: 'text-amber-400',
    },
    {
        author: 'Levante shop',
        authorType: 'Organization',
        title: 'Miglioramenti immediati',
        body: 'Enrico non è solo un ottimo sviluppatore, ma anche un partner strategico. La sua capacità di tradurre le esigenze di business in soluzioni tecniche è stata fondamentale per il successo del nostro progetto. Continuiamo insieme così!',
        date: '2026-03-24',
        rating: 5,
        sourceUrl: TRUSTPILOT_URL,
        sourceLabel: 'Trustpilot',
        iconColor: 'text-red-400',
    },
    {
        author: 'Dinamitek',
        authorType: 'Organization',
        title: 'Proattività e curiosità',
        body: 'Ho apprezzato la proattività e la curiosità di Enrico. È sempre pronto a esplorare nuove tecnologie per trovare la soluzione migliore, senza mai perdere di vista gli obiettivi.',
        date: '2026-03-15',
        rating: 5,
        // Originariamente su Trustpilot, poi bannata. Source passata a Google per coerenza JSON-LD.
        sourceUrl: TRUSTPILOT_URL,
        sourceLabel: 'Trustpilot',
        iconColor: 'text-violet-500',
    },
    {
        author: 'Simo',
        authorType: 'Person',
        title: 'Cura e onestà su piccole mansioni',
        body: 'Anche se è stata una piccola mansione l\'ha svolta con cura ed è stato fin da subito onesto sul dirmi cosa era fattibile e cosa no. Eseguito davvero in fretta. Consiglio!!',
        date: '2026-03-25',
        rating: 5,
        sourceUrl: TRUSTPILOT_URL,
        sourceLabel: 'Trustpilot',
        iconColor: 'text-emerald-400',
    },
    {
        author: 'Silvana',
        authorType: 'Person',
        title: 'Affidabile e concreto',
        body: 'Pur essendo alla sua prima esperienza in ambito privato é affidabile e concreto nello svolgere il lavoro richiesto.',
        date: '2026-04-22',
        rating: 5,
        sourceUrl: TRUSTPILOT_URL,
        sourceLabel: 'Trustpilot',
        iconColor: 'text-sky-400',
    },
];

