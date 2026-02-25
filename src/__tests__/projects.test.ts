import { describe, it, expect } from 'vitest';
import { projects } from '../data/projects';
import type { Project } from '../types';

describe('projects data', () => {
    it('contiene almeno un progetto', () => {
        expect(projects.length).toBeGreaterThan(0);
    });

    it('ogni progetto ha i campi obbligatori valorizzati', () => {
        projects.forEach((project: Project) => {
            expect(project.slug).toBeTruthy();
            expect(project.title).toBeTruthy();
            expect(project.description).toBeTruthy();
            expect(project.category).toBeTruthy();
            expect(Array.isArray(project.tags)).toBe(true);
            expect(project.tags.length).toBeGreaterThan(0);
        });
    });

    it('gli slug sono unici', () => {
        const slugs = projects.map((p) => p.slug);
        const unique = new Set(slugs);
        expect(unique.size).toBe(slugs.length);
    });

    it('i link esterni hanno il protocollo corretto', () => {
        projects.forEach((project: Project) => {
            if (project.url) {
                expect(project.url).toMatch(/^https?:\/\//);
            }
            if (project.repo) {
                expect(project.repo).toMatch(/^https?:\/\//);
            }
        });
    });
});
