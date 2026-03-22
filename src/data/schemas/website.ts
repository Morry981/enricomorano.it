export const websiteSchema = (siteUrl: string) => ({
    '@context': 'https://schema.org/',
    '@type': 'WebSite',
    name: 'Enrico Morano',
    url: siteUrl,
    description: 'Portfolio di Enrico Morano - sviluppatore full stack specializzato in e-commerce, Vue.js, Astro e infrastrutture VPS.',
    inLanguage: 'it',
    author: { '@type': 'Person', name: 'Enrico Morano' },
});
