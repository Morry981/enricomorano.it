export interface ArticleSchemaInput {
    title: string;
    description: string;
    slug: string; // path relativo, es. /blog/mio-post
    datePublished: string; // ISO 8601, es. 2026-06-16
    dateModified?: string;
    image?: string;
    keywords?: string[];
}

export const articleSchema = (siteUrl: string, a: ArticleSchemaInput) => ({
    '@context': 'https://schema.org/',
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.description,
    url: `${siteUrl}${a.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}${a.slug}` },
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    inLanguage: 'it',
    image: a.image
        ? a.image.startsWith('http')
            ? a.image
            : `${siteUrl}${a.image}`
        : `${siteUrl}/og-image.png`,
    author: { '@type': 'Person', name: 'Enrico Morano', url: siteUrl },
    publisher: { '@type': 'Person', name: 'Enrico Morano', url: siteUrl },
    ...(a.keywords?.length ? { keywords: a.keywords.join(', ') } : {}),
});
