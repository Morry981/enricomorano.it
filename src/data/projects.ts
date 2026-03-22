import type { Project } from '../types';

export const projects: Project[] = [
    {
        slug: 'portfolio-personale',
        title: 'Sito Portfolio',
        description:
            'Questo sito. Astro v5, Vue 3, Tailwind CSS v4, TypeScript strict. SSR, View Transitions, design system custom e JSON-LD.',
        category: 'Frontend',
        tags: ['Astro', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
        repo: 'https://github.com/Morry981/enricomorano.it',
        featured: true,
        date: '2026-01',
        role: 'Full Stack Developer',
    },
    {
        slug: 'lab-nuove-tecnologie',
        title: 'Lab & Nuove Tecnologie',
        description:
            'Sperimentazione continua su AI, nuovi framework e tool di sviluppo. Ogni tecnologia viene testata in progetti interni prima di essere proposta ai clienti.',
        category: 'Formazione',
        tags: ['AI', 'Sperimentazione', 'Prototipi', 'Aggiornamento'],
        featured: true,
        date: '2026-01',
        role: 'R&D / Continuous Learner',
    },
    {
        slug: 'ads-optimization',
        title: 'Ads Optimization',
        description:
            'Ottimizzazione campagne Google Ads e Meta Ads per e-commerce. A/B testing, audience segmentation e monitoraggio ROAS.',
        category: 'Marketing Tecnico',
        tags: ['Google Ads', 'Meta Ads', 'Analytics', 'A/B Testing'],
        featured: true,
        date: '2025-07',
        role: 'Digital Ads Specialist',
    },
    {
        slug: 'ecommerce-ricostruzione',
        title: 'Ricostruzione E-commerce',
        description:
            'Ricostruzione da zero di un e-commerce PrestaShop: migrazione dati, nuovo catalogo, checkout ottimizzato e integrazioni marketplace.',
        category: 'E-commerce',
        tags: ['PrestaShop', 'PHP', 'MySQL', 'Migrazione'],
        featured: true,
        date: '2025-02',
        role: 'E-commerce Developer',
    },
    {
        slug: 'automazioni-ai',
        title: 'Automazioni + AI',
        description:
            'Automazione dei flussi di lavoro e-commerce con integrazioni AI: generazione schede prodotto, classificazione ordini e reportistica automatica.',
        category: 'Automazione',
        tags: ['AI', 'Node.js', 'API', 'PrestaShop'],
        featured: true,
        date: '2024-04',
        role: 'Automation Developer',
    },
    {
        slug: 'gestione-ecommerce',
        title: 'Gestione Completa E-commerce',
        description:
            'Presa in carico della gestione tecnica e operativa di un e-commerce: catalogo, ordini, customer care, marketplace e strategia di crescita.',
        category: 'E-commerce',
        tags: ['PrestaShop', 'Marketplace', 'CRM', 'Strategia'],
        date: '2023-09',
        role: 'E-commerce Manager & Developer',
    },
    {
        slug: 'cookie-privacy-gtm',
        title: 'Cookie, Privacy & GTM',
        description:
            'Configurazione GDPR-compliant: consent mode, cookie banner, setup Google Tag Manager e tracciamento server-side.',
        category: 'Marketing Tecnico',
        tags: ['GTM', 'GDPR', 'Cookie', 'Privacy'],
        date: '2022-01',
        role: 'Tracking & Privacy Specialist',
    },
    {
        slug: 'analytics-seo-tecnica',
        title: 'Analytics & SEO Tecnica',
        description:
            'Implementazione Google Analytics, audit SEO tecnica, structured data e ottimizzazione crawl budget per e-commerce.',
        category: 'Marketing Tecnico',
        tags: ['GA4', 'SEO', 'Schema.org', 'Core Web Vitals'],
        date: '2020-12',
        role: 'SEO & Analytics Specialist',
    },
    {
        slug: 'laravel-full-cycle',
        title: 'Progetto Laravel Full Cycle',
        description:
            'Applicazione web completa in Laravel: sviluppo, testing, deploy e ottimizzazione prestazioni. Progetto gestito dall\'inizio alla messa in produzione.',
        category: 'Web App',
        tags: ['Laravel', 'PHP', 'MySQL', 'Testing'],
        date: '2020-03',
        role: 'Full Stack Developer',
    },
    {
        slug: 'formazione-backend',
        title: 'Formazione & Stack Backend',
        description:
            'Studio e pratica su mail server, API REST, PrestaShop, configurazione server. Periodo di formazione intensa e primi progetti autonomi.',
        category: 'DevOps',
        tags: ['API', 'Mail Server', 'PrestaShop', 'Linux'],
        date: '2019-01',
        role: 'Junior Developer',
    },
    {
        slug: 'siti-web-completi',
        title: 'Siti Web Completi',
        description:
            'Primi siti costruiti da zero, senza framework: HTML, CSS, JavaScript, PHP. Reinventare la ruota per capire come funziona tutto.',
        category: 'Frontend',
        tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        date: '2018-01',
        role: 'Web Developer',
    },
    {
        slug: 'inizio-agenzia',
        title: 'Inizio Lavori in Agenzia',
        description:
            'Primo impiego in agenzia grafico pubblicitaria. Formazione su e-commerce, grafica web e gestione clienti in team.',
        category: 'Formazione',
        tags: ['Agenzia', 'E-commerce', 'Grafica', 'Team'],
        date: '2017-08',
        role: 'Junior Web Developer',
    },
];
