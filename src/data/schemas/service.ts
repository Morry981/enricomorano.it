export const serviceSchema = (siteUrl: string) => ({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Enrico Morano - Sviluppatore Full Stack',
    url: siteUrl,
    image: `${siteUrl}/images/foto-profilo.jpg`,
    description: 'Sviluppo e-commerce PrestaShop, applicazioni web, automazione processi e consulenza digitale per PMI italiane.',
    founder: { '@type': 'Person', name: 'Enrico Morano' },
    areaServed: {
        '@type': 'Country',
        name: 'Italia',
    },
    priceRange: '€€',
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
});
