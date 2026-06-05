import type { Project } from '../types';

export const projects: Project[] = [
    {
        slug: 'chatbot-telegram-ai-ordini-b2b',
        title: 'Chatbot Telegram con AI - Ordini B2B Ortofrutta',
        description:
            "Bot Telegram pilotato da AI conversazionale per la raccolta ordini B2B nel settore ortofrutta: ristoranti, rivenditori e mercati ordinano in chat in linguaggio naturale, il bot estrae la struttura dell'ordine (prodotti, quantita, consegna) e attiva in automatico recap al fornitore, notifica interna al titolare e stampa fisica opzionale. Stack Laravel + telegram-bot-sdk in polling + integrazione Claude API per la conversazione, SQLite per lo stato. Demo live consegnata in poche ore di sessione.",
        category: 'Automazione',
        tags: ['Laravel', 'Telegram Bot', 'AI', 'Claude API'],
        image: '/images/projects/chatbot-telegram-ai-ordini-b2b-opt.jpg',
        featured: true,
        date: '2026-06',
        role: 'Full Stack Developer',
        note: {
            text: 'Ordinare diventa una chat. Il bot capisce, struttura e smista: il fornitore riceve il recap pronto, il titolare la notifica, il cliente la conferma.',
        },
    },
    {
        slug: 'gestionale-noleggio-flotta-mezzi',
        title: 'Gestionale Noleggio Flotta Mezzi',
        description:
            "Gestionale custom per azienda di noleggio attrezzature e mezzi (~100 unita in flotta). Sostituisce i moduli cartacei di noleggio con form mobile-friendly compilabili in meno di 3 minuti: anagrafica cliente on-demand, listino mezzi con sigle e foto, stato pre e post noleggio, firma cliente su tablet o smartphone, lifecycle foto con cancellazione automatica dopo 5 mesi. Memo recap automatico al rientro mezzo via mail e WhatsApp. Stack Laravel + FilamentPHP per continuita con altri gestionali interni.",
        category: 'Web App',
        tags: ['Laravel', 'FilamentPHP', 'Mobile-first', 'Firma Digitale'],
        image: '/images/projects/gestionale-noleggio-flotta-mezzi-opt.jpg',
        featured: true,
        date: '2026-06',
        role: 'Full Stack Developer',
        note: {
            text: 'La carta sparisce, il flusso resta. Form compilabile in cantiere, firma sul posto, recap automatico: niente passaggi a mano sul gestionale a fine giornata.',
        },
    },
    {
        slug: 'rilancio-vetrina-wordpress-pmi',
        title: 'Rilancio Sito Vetrina WordPress - Energy Setting',
        description:
            "Sito vetrina WordPress di Energy Setting (Angioj) fermo in maintenance mode probabilmente da circa due anni, sbloccato e pubblicato in poche sessioni. Recupero accessi (RSS + WP admin), audit tecnico tema The7, riempimento contenuti minimi sintetizzando i canali Facebook e Instagram aziendali, sezione recensioni reali, pagina progetti realizzati estratti dai social. Rimosso maintenance mode e portato live insieme alla configurazione GSC e ping SEO iniziale. Approccio pragmatico: pubblicare con i materiali esistenti e iterare, invece di rincorrere il 'template finito' che teneva il sito offline da troppo.",
        category: 'Frontend',
        tags: ['WordPress', 'Contenuti', 'Go-live', 'SEO Tecnica'],
        image: '/images/projects/rilancio-vetrina-wordpress-pmi-opt.jpg',
        url: 'https://energysetting.it/',
        featured: true,
        date: '2026-05',
        role: 'WordPress Developer + Content',
        note: {
            text: "Probabilmente due anni fermi in maintenance per 'template non finito': contenuti tirati fuori dai social e dalle recensioni esistenti, sito pubblicato senza altri rinvii. Si itera live, non a porte chiuse.",
        },
    },
    {
        slug: 'vetrina-ottimizzazione-seo-gmb',
        title: 'Sito Vetrina + SEO Tecnica + Google Business',
        description:
            "Sito vetrina su misura per struttura ricettiva delle Langhe: dominio proprio, hosting curato, design responsive con palette su misura, schema.org LodgingBusiness con aggregateRating reale da recensioni multi-piattaforma, tagline coerente tra hero/meta/footer, integrazione widget Google Business Profile. Stack Astro SSR + Vue 3 + Tailwind 4 + TypeScript strict, build verde a ogni stage. Obiettivo: avere un canale diretto proprio accanto agli intermediari, intercettando prenotazioni via SEO locale e GMB ottimizzato.",
        category: 'Frontend',
        tags: ['Astro', 'Vue.js', 'SEO Tecnica', 'Google Business'],
        image: '/images/projects/vetrina-ottimizzazione-seo-gmb-opt.jpg',
        url: 'https://www.ninascasadilanga.it',
        featured: true,
        date: '2026-05',
        role: 'Full Stack Developer + SEO',
        note: {
            text: 'Vetrina propria + SEO locale + GMB curato = prenotazioni dirette al posto del passaggio dagli intermediari.',
        },
    },
    {
        slug: 'todos-ai',
        title: 'Todos - Supervisione Progetti con AI',
        description:
            "Vault integrato con TODO list organizzato, conoscenza base personale e LLM che monitora scadenze, genera riassunti e segnala priorità. Tiene in parallelo più clienti e progetti senza confonderne i contesti, partendo da una struttura precisa e chiara del mio modo di operare, mantiene inoltre tutti i sistemi di integrazione e best practice dei progetti. L'AI suggerisce collegamenti tra note di progetti diversi facendo crescere le connessioni, ed estrae pattern ricorrenti dai lavori chiusi per riproporli sui nuovi: ogni cliente eredita la conoscenza accumulata sui precedenti. Lo uso ogni giorno per alimentare una memoria di lavoro che torna utile a tutti.",
        category: 'Automazione',
        tags: ['AI', 'LLM', 'Productivity', 'Obsidian'],
        image: '/images/projects/grafo-progetto-ai-todos-analisi-progetti-clienti-ottimizzato-opt.jpg',
        featured: true,
        date: '2026-04',
        role: 'Personal Tooling / R&D',
        note: {
            text: "Una mente unica sopra a tutti i progetti significa non lasciare niente in sospeso o indietro. L'AI legge e sistema come un segretario, io decido le priorità e il flusso operativo.",
        },
    },
    {
        slug: 'gestionale-termoidraulica-angioj',
        title: 'Gestionale Magazzino Termoidraulica',
        description:
            "Gestionale magazzino e automazione ordini sviluppato su misura per azienda termoidraulica. Software web in Laravel e FilamentPHP con estensione Chrome dedicata e integrazione Fatture in Cloud, pensato per sostituire Excel e inserimenti manuali sui portali fornitori. Risparmio stimato di oltre 5 ore al mese e rientro dell'investimento in circa 6 mesi. Architettura modulare che cresce con l'azienda: gestione furgoni e manutenzione attrezzatura, commesse e rapportini (anche con AI), manutenzioni programmate e notifiche calendario, indici di produttività e compilazione automatica sui portali esterni.",
        category: 'Web App',
        tags: [
            'Laravel',
            'FilamentPHP',
            'Chrome Extension',
            'Fatture in Cloud',
        ],
        image: '/images/projects/pannello-amministrativo-termoidraulica-angioj-opt.jpg',
        featured: true,
        date: '2026-03',
        role: 'Full Stack Developer',
        note: {
            text: 'Excel e inserimenti manuali sostituiti in 6 mesi. Scrivimi se vuoi vedere come.',
        },
    },
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
            text: 'Il budget Ads senza dati puliti e tracking affidabile è budget sprecato. Prima i fondamentali, poi le campagne.',
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
            text: "L'AI funziona solo se integrata nei flussi reali. Automatizzare senza capire il processo è controproducente.",
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
            text: 'Le uniche criticità emerse riguardavano corrieri e spedizioni, fattori esterni non sempre controllabili, ma ugualmente risolti.',
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
            text: 'Configurazione errata del consent mode = dati inutilizzabili. La privacy non è un ostacolo, è un vincolo da progettare.',
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
            text: 'Reinventare la ruota è inefficiente, ma insegna come funziona. Nessun framework sostituisce le basi.',
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
