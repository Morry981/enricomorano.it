export const personSchema = (siteUrl: string) => ({
    '@context': 'https://schema.org/',
    '@type': 'Person',
    name: 'Enrico Morano',
    url: siteUrl,
    image: `${siteUrl}/images/foto-profilo.jpg`,
    jobTitle: 'Full Stack Developer',
    description: 'Sviluppatore full stack specializzato in e-commerce PrestaShop, Vue.js, Astro e infrastrutture VPS.',
    disambiguatingDescription: "Sviluppatore freelance full stack specializzato in e-commerce PrestaShop e automazione per PMI italiane, con sede a Fossano (CN). Da non confondere con l'omonimo filologo e iranista Enrico Morano, ne' con il politico Enrico Morando.",
    knowsAbout: [
        'PrestaShop', 'PHP', 'Vue.js', 'Astro', 'TypeScript',
        'Node.js', 'Tailwind CSS', 'SEO Tecnica', 'DevOps', 'Apache',
    ],
    sameAs: [
        'https://github.com/Morry981',
        'https://www.linkedin.com/in/enrico-morano/',
        'https://www.instagram.com/enrico_morry98_morano/',
    ],
});

export const professionalServiceSchema = (siteUrl: string) => ({
    '@context': 'https://schema.org/',
    '@type': 'ProfessionalService',
    name: 'Enrico Morano - Sviluppatore Freelance',
    url: siteUrl,
    image: `${siteUrl}/images/foto-profilo.jpg`,
    description: 'Sviluppo e-commerce PrestaShop, applicazioni web, automazione processi e consulenza digitale per PMI italiane.',
    telephone: import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '',
    priceRange: '150-10000 EUR',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Fossano',
        addressLocality: 'Cuneo',
        postalCode: '12045',
        addressRegion: 'Piemonte',
        addressCountry: 'IT',
    },
    areaServed: {
        '@type': 'Country',
        name: 'Italia',
    },
    founder: {
        '@type': 'Person',
        name: 'Enrico Morano',
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servizi',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: 'Sviluppo E-commerce PrestaShop', description: 'Moduli custom, catalogo, marketplace, automazione ordini.' },
            },
            {
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: 'Sviluppo Web Full Stack', description: 'Applicazioni web con Vue.js, Astro, TypeScript, PHP.' },
            },
            {
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: 'SEO Tecnica & Tracking', description: 'Audit tecnici, Core Web Vitals, Schema.org, GA4, GTM.' },
            },
            {
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: 'Automazione Processi', description: 'Script, estensioni browser, integrazioni tra sistemi.' },
            },
            {
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: 'Consulenza e Formazione', description: 'Scelta tecnologica, onboarding personale, guide operative.' },
            },
        ],
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        bestRating: '5',
        ratingCount: '2',
    },
    review: [
        {
            '@type': 'Review',
            author: { '@type': 'Organization', name: 'Abc Arredamenti' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Enrico non è solo un ottimo sviluppatore, ma anche un partner strategico. La sua capacità di tradurre le esigenze di business in soluzioni tecniche è stata fondamentale per il successo del nostro progetto.',
        },
        {
            '@type': 'Review',
            author: { '@type': 'Organization', name: 'Dinamitek' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Ho apprezzato la proattività e la curiosità di Enrico. È sempre pronto a esplorare nuove tecnologie per trovare la soluzione migliore, senza mai perdere di vista gli obiettivi.',
        },
    ],
});
