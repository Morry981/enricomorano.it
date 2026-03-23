export const personSchema = (siteUrl: string) => ({
    '@context': 'https://schema.org/',
    '@type': 'Person',
    name: 'Enrico Morano',
    url: siteUrl,
    image: `${siteUrl}/images/foto-profilo.jpg`,
    jobTitle: 'Full Stack Developer',
    description: 'Sviluppatore full stack specializzato in e-commerce PrestaShop, Vue.js, Astro e infrastrutture VPS.',
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
    description: 'Sviluppo e-commerce, automazione processi e consulenza digitale per PMI italiane.',
    founder: {
        '@type': 'Person',
        name: 'Enrico Morano',
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
