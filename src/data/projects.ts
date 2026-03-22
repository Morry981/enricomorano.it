import type { Project } from '../types';

export const projects: Project[] = [
    {
        slug: 'ecommerce-prestashop',
        title: 'E-commerce Completo',
        description:
            'E-commerce complesso gestito end-to-end: caricamento prodotti automatizzato, marketplace, customer care + automatizzazioni AI, Ads, mail marketing e SEO tecnica.',
        category: 'E-commerce',
        tags: ['PrestaShop', 'PHP', 'MySQL', 'SEO'],
        featured: true,
    },
    {
        slug: 'gestionale-ordini',
        title: 'Gestionale Ordini',
        description:
            'Applicazione web per la gestione interna degli ordini, con dashboard in tempo reale e reportistica avanzata.',
        category: 'Web App',
        tags: ['Vue.js', 'Node.js', 'TypeScript'],
        featured: true,
    },
    {
        slug: 'portfolio-personale',
        title: 'Portfolio Personale',
        description:
            'Questo sito. Astro v5, Vue 3, Tailwind CSS v4. SSR, View Transitions e design system custom.',
        category: 'Frontend',
        tags: ['Astro', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
        repo: 'https://github.com/Morry981',
        featured: true,
    },
    {
        slug: 'app-mobile-ios-android',
        title: 'App Mobile Cross-Platform',
        description:
            'Applicazione mobile nativa per iOS e Android con sincronizzazione cloud e notifiche push.',
        category: 'Mobile',
        tags: ['iOS', 'Android', 'Cross-platform'],
    },
    {
        slug: 'ottimizzazione-vps',
        title: 'Infrastruttura VPS Apache',
        description:
            'Configurazione, hardening e tuning di server VPS con Apache per garantire uptime elevato e performance ottimali.',
        category: 'DevOps',
        tags: ['VPS', 'Apache', 'Linux', 'DevOps'],
    },
    {
        slug: 'seo-tecnica-tracking',
        title: 'SEO Tecnica & Tracking',
        description:
            'Audit SEO, structured data, GTM e GA4 per e-commerce. Applicato sia in agenzia che sul mio progetto principale.',
        category: 'Marketing Tecnico',
        tags: ['SEO', 'GA4', 'GTM', 'Schema.org'],
    },
];
