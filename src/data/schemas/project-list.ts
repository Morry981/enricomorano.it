import type { Project } from '../../types';

export const projectListSchema = (siteUrl: string, projects: Project[]) => ({
    '@context': 'https://schema.org/',
    '@type': 'ItemList',
    name: 'Progetti di Enrico Morano',
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.title,
        description: p.description,
        url: p.url ?? `${siteUrl}/progetti`,
    })),
});
