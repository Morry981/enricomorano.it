import { describe, it, expect } from 'vitest';
import { personSchema, serviceSchema, websiteSchema, breadcrumbSchema, projectListSchema } from '../data/schemas';
import { projects } from '../data/projects';

const siteUrl = 'https://www.enricomorano.it';

describe('JSON-LD schemas', () => {
    describe('personSchema', () => {
        const schema = personSchema(siteUrl);

        it('ha tipo Person', () => {
            expect(schema['@type']).toBe('Person');
        });

        it('contiene i social in sameAs', () => {
            expect(schema.sameAs).toContain('https://github.com/Morry981');
            expect(schema.sameAs).toContain('https://www.linkedin.com/in/enrico-morano/');
            expect(schema.sameAs).toContain('https://www.instagram.com/enrico_morry98_morano/');
        });

        it('ha almeno una review', () => {
            expect(schema.review.length).toBeGreaterThan(0);
            schema.review.forEach((r: any) => {
                expect(r['@type']).toBe('Review');
                expect(r.reviewBody).toBeTruthy();
            });
        });

        it('ha aggregateRating', () => {
            expect(schema.aggregateRating['@type']).toBe('AggregateRating');
        });
    });

    describe('serviceSchema', () => {
        const schema = serviceSchema(siteUrl);

        it('ha tipo ProfessionalService', () => {
            expect(schema['@type']).toBe('ProfessionalService');
        });

        it('ha un catalogo servizi con almeno 3 offerte', () => {
            expect(schema.hasOfferCatalog.itemListElement.length).toBeGreaterThanOrEqual(3);
        });

        it('area servita e\' Italia', () => {
            expect(schema.areaServed.name).toBe('Italia');
        });
    });

    describe('websiteSchema', () => {
        const schema = websiteSchema(siteUrl);

        it('ha tipo WebSite e lingua it', () => {
            expect(schema['@type']).toBe('WebSite');
            expect(schema.inLanguage).toBe('it');
        });
    });

    describe('breadcrumbSchema', () => {
        it('genera le posizioni corrette', () => {
            const schema = breadcrumbSchema(siteUrl, [
                { name: 'Home', url: '/' },
                { name: 'Progetti', url: '/progetti' },
            ]);
            expect(schema['@type']).toBe('BreadcrumbList');
            expect(schema.itemListElement).toHaveLength(2);
            expect(schema.itemListElement[0].position).toBe(1);
            expect(schema.itemListElement[1].position).toBe(2);
            expect(schema.itemListElement[1].item).toBe(`${siteUrl}/progetti`);
        });
    });

    describe('projectListSchema', () => {
        const schema = projectListSchema(siteUrl, projects);

        it('ha tipo ItemList', () => {
            expect(schema['@type']).toBe('ItemList');
        });

        it('ha lo stesso numero di progetti', () => {
            expect(schema.numberOfItems).toBe(projects.length);
            expect(schema.itemListElement).toHaveLength(projects.length);
        });
    });
});
