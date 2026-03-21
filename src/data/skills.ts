export interface Skill {
    id: string;
    labelLong: string;
    labelShort: string;
    description: string;
    icon: string;
    color: 'cyan' | 'pink' | 'amber' | 'purple' | 'blue' | 'green' | 'indigo';
}

export const skills: Skill[] = [
    {
        id: 'ecommerce',
        labelLong: 'E-commerce & PrestaShop',
        labelShort: 'E-commerce',
        description:
            'Progettazione, gestione e manutenzione di piattaforme e-commerce. Esperienza PrestaShop, integrazioni marketplace, ottimizzazione flussi ordini.',
        icon: 'ShoppingCart',
        color: 'cyan',
    },
    {
        id: 'webdev',
        labelLong: 'Sviluppo Web Full Stack',
        labelShort: 'Web Dev',
        description:
            'Backend con PHP/Laravel, frontend con TypeScript, Vue 3, Alpine.js. Vite, build chain moderno, SSR con Astro.',
        icon: 'Code',
        color: 'blue',
    },
    {
        id: 'automation',
        labelLong: 'Automazione Processi',
        labelShort: 'Automation',
        description:
            "Integrazioni custom, estensioni browser, script di import/export. Riduco l'attrito manuale nei flussi aziendali.",
        icon: 'Zap',
        color: 'amber',
    },
    {
        id: 'seo',
        labelLong: 'SEO Tecnica & Performance',
        labelShort: 'SEO & Perf',
        description:
            'Ottimizzazione Core Web Vitals, schema markup, privacy by design. Audit tecnici e implementazione best practice.',
        icon: 'TrendingUp',
        color: 'pink',
    },
    {
        id: 'proactive',
        labelLong: 'Gestione Proattiva',
        labelShort: 'Proactive Care',
        description:
            'Monitoraggio continuità operativa, aggiornamenti preventivi, gestione bug in produzione. Supporto 24/7 dedicato.',
        icon: 'Shield',
        color: 'green',
    },
    {
        id: 'strategy',
        labelLong: 'Consulenza Strategica',
        labelShort: 'Strategy',
        description:
            'Analisi ROI canali digitali, scelte architetturali per PMI, roadmap tecnologico, alignment business-tech.',
        icon: 'Compass',
        color: 'purple',
    },
    {
        id: 'training',
        labelLong: 'Formazione',
        labelShort: 'Training',
        description:
            'Onboarding team interni, sessioni di aggiornamento, guide documentate, supporto operativo hands-on.',
        icon: 'BookOpen',
        color: 'indigo',
    },
];

export const skillsForHero = skills.slice(0, 4); // Top 4 competenze per sezione Hero
