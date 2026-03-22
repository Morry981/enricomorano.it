import type { Project } from '../types';

export const projects: Project[] = [
    {
        slug: 'portfolio-personale',
        title: 'Sito Portfolio',
        description:
            'Questo sito. Astro v5, Vue 3, Tailwind CSS v4, TypeScript strict. SSR, View Transitions, design system custom e JSON-LD.',
        category: 'Frontend',
        tags: ['Astro', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
        image: '/images/projects/portfolio-personale-enrico-morano-opt.jpg',
        featured: true,
        date: '2026-01',
        role: 'Full Stack Developer',
        note: {
            text: 'Codice open source. Performance e accessibilita al primo posto, zero dipendenze superflue.',
            url: 'https://github.com/Morry981/enricomorano.it',
        },
    },
    {
        slug: 'lab-nuove-tecnologie',
        title: 'Lab & Nuove Tecnologie',
        description:
            'Sperimentazione continua su AI, nuovi framework e tool di sviluppo. Ogni tecnologia viene testata in progetti interni prima di essere proposta ai clienti.',
        category: 'Formazione',
        tags: ['AI', 'Sperimentazione', 'Prototipi', 'Aggiornamento'],
        image: '/images/projects/ai-per-formazione-e-ottimizzazione-processi-opt.jpg',
        featured: true,
        date: '2025-09',
        role: 'R&D / Continuous Learner',
        note: {
            text: 'Non propongo mai una tecnologia che non ho testato in prima persona.',
        },
    },
    {
        slug: 'ads-optimization',
        title: 'Ads Optimization',
        description:
            'Ottimizzazione campagne Google Ads e Meta Ads per e-commerce. A/B testing, audience segmentation e monitoraggio ROAS.',
        category: 'Marketing Tecnico',
        tags: ['Google Ads', 'Meta Ads', 'Analytics', 'A/B Testing'],
        image: '/images/projects/creazione-ottimizzazione-campagne-performance-max-e-commerce-opt.jpg',
        featured: true,
        date: '2025-04',
        role: 'Digital Ads Specialist',
        note: {
            text: "Il budget Ads senza dati puliti e tracking affidabile e' budget sprecato. Prima i fondamentali, poi le campagne.",
        },
    },
    {
        slug: 'ecommerce-ricostruzione',
        title: 'Ricostruzione E-commerce',
        description:
            'Ricostruzione da zero di un e-commerce PrestaShop: migrazione dati, nuovo catalogo, checkout ottimizzato e integrazioni marketplace.',
        category: 'E-commerce',
        tags: ['PrestaShop', 'PHP', 'MySQL', 'Migrazione'],
        image: '/images/projects/ricostruzione-da-zero-ecommerce-prestashop-miglioramenti-stabilita-opt.jpg',
        featured: true,
        date: '2025-02',
        role: 'E-commerce Developer',
        note: {
            text: 'Ripartire da zero ha permesso di eliminare anni di debito tecnico e costruire su basi solide con PrestaShop 8.',
        },
    },
    {
        slug: 'automazioni-ai',
        title: 'Automazioni + AI',
        description:
            'Automazione dei flussi di lavoro e-commerce con integrazioni AI: generazione schede prodotto, classificazione ordini e reportistica automatica.',
        category: 'Automazione',
        tags: ['AI', 'Node.js', 'API', 'PrestaShop'],
        image: '/images/projects/automazioni-chat-ai-e-commerce-opt.jpg',
        featured: true,
        date: '2025-07',
        role: 'Automation Developer',
        note: {
            text: "L'AI funziona solo se integrata nei flussi reali. Automatizzare senza capire il processo e' controproducente.",
        },
    },
    {
        slug: 'recensioni-customer-care',
        title: 'Recensioni Clienti & Customer Care',
        description:
            'Clienti soddisfatti per qualita dei prodotti, descrizioni fedeli e consegne rapide. Customer care completo: assistenza pre e post vendita, gestione resi, risoluzione problemi e fidelizzazione.',
        category: 'E-commerce',
        tags: ['Customer Care', 'Recensioni', 'Fidelizzazione', 'Supporto'],
        image: '/images/projects/customer-care-recensioni-clienti-finali-2024-2025-opt.jpg',
        date: '2024-02',
        role: 'Customer Care Manager',
        note: {
            text: 'Le uniche criticita emerse riguardavano corrieri e spedizioni, fattori esterni non sempre controllabili, ma ugualmente risolti.',
        },
    },
    {
        slug: 'gestione-ecommerce',
        title: 'Gestione Completa E-commerce',
        description:
            'Presa in carico della gestione tecnica e operativa di un e-commerce: catalogo, ordini, customer care, marketplace e strategia di crescita. Andamento stagionale con picchi nei periodi promozionali e nel Q4.',
        category: 'E-commerce',
        tags: ['PrestaShop', 'Marketplace', 'CRM', 'Strategia'],
        image: '/images/projects/miglioramenti-concreti-e-commerce-gestito-autonomamente-opt.jpg',
        date: '2023-09',
        role: 'E-commerce Manager & Developer',
        note: {
            text: '"Le pageview vengono calcolate escludendo dal conteggio le visite generate dai bot e dai crawler." - iubenda',
            url: 'https://www.iubenda.com/it/help/3007-come-vengono-calcolate-le-pageview-della-cookie-solution/',
        },
    },
    {
        slug: 'cookie-privacy-gtm',
        title: 'Cookie, Privacy & GTM',
        description:
            'Configurazione GDPR-compliant: consent mode, cookie banner, setup Google Tag Manager e tracciamento server-side.',
        category: 'Marketing Tecnico',
        tags: ['GTM', 'GDPR', 'Cookie', 'Privacy'],
        image: '/images/projects/valentino-mea-formazione-google-analytics-opt.jpg',
        date: '2022-01',
        role: 'Tracking & Privacy Specialist',
        note: {
            text: "Configurazione errata del consent mode = dati inutilizzabili. La privacy non e' un ostacolo, e' un vincolo da progettare.",
        },
    },
    {
        slug: 'analytics-seo-tecnica',
        title: 'Analytics & SEO Tecnica',
        description:
            'Implementazione Google Analytics, audit SEO tecnica, structured data e ottimizzazione crawl budget per e-commerce.',
        category: 'Marketing Tecnico',
        tags: ['GA4', 'SEO', 'Schema.org', 'Core Web Vitals'],
        image: '/images/projects/analisi-miglioramenti-seo-tecnica-opt.jpg',
        date: '2020-12',
        role: 'SEO & Analytics Specialist',
        note: {
            text: 'Senza dati non si decide, si indovina. Analytics e SEO tecnica sono la base di qualsiasi strategia digitale.',
        },
    },
    {
        slug: 'laravel-full-cycle',
        title: 'Progetto Laravel Full Cycle',
        description:
            "Applicazione web completa in Laravel: sviluppo, testing, deploy e ottimizzazione prestazioni. Progetto gestito dall'inizio alla messa in produzione. Laravel e la sua filosofia hanno segnato una svolta nel mio modo di sviluppare.",
        category: 'Web App',
        tags: ['Laravel', 'PHP', 'MySQL', 'Testing'],
        image: '/images/projects/laracon-laravel-best-full-cycle-tool-opt.jpg',
        date: '2020-03',
        role: 'Full Stack Developer',
        note: {
            text: 'Laravel ha cambiato tutto: struttura, testing, convention over configuration. Da qui in poi un altro modo di scrivere codice.',
        },
    },
    {
        slug: 'formazione-backend',
        title: 'Formazione & Stack Backend',
        description:
            'Studio e pratica su mail server, API REST, PrestaShop, configurazione server. Periodo di formazione intensa e primi progetti autonomi.',
        category: 'DevOps',
        tags: ['API', 'Mail Server', 'PrestaShop', 'Linux'],
        image: '/images/projects/studio-esperimenti-automazioni-backend-opt.jpg',
        date: '2019-01',
        role: 'Junior Developer',
        note: {
            text: 'Il periodo piu formativo: configurare tutto a mano insegna a capire cosa succede davvero sotto il cofano.',
        },
    },
    {
        slug: 'siti-web-completi',
        title: 'Siti Web Completi',
        description:
            'Primi siti costruiti da zero, senza framework: HTML, CSS, JavaScript, PHP. Reinventare la ruota per capire come funziona tutto.',
        category: 'Frontend',
        tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        image: '/images/projects/50-siti-vetrina-e-commerce-opt.jpg',
        date: '2018-01',
        role: 'Web Developer',
        note: {
            text: "Reinventare la ruota e' inefficiente, ma insegna come funziona. Nessun framework sostituisce le basi.",
        },
    },
    {
        slug: 'inizio-agenzia',
        title: 'Inizio Lavori in Agenzia',
        description:
            'Primo impiego in agenzia grafico pubblicitaria. Formazione su e-commerce, grafica web e gestione clienti in team.',
        category: 'Formazione',
        tags: ['Agenzia', 'E-commerce', 'Grafica', 'Team'],
        image: '/images/projects/lavoro-agenzia-grafico-pubblicitaria-opt.jpg',
        date: '2017-08',
        role: 'Junior Web Developer',
        note: {
            text: 'Lavorare in team con grafici, copywriter e account insegna a comunicare prima ancora che a programmare.',
        },
    },
];
