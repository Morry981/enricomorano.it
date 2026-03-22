import { describe, it, expect } from 'vitest';
import { skills } from '../data/skills';

describe('skills data', () => {
    it('contiene almeno una competenza', () => {
        expect(skills.length).toBeGreaterThan(0);
    });

    it('ogni skill ha i campi obbligatori valorizzati', () => {
        skills.forEach((skill) => {
            expect(skill.id).toBeTruthy();
            expect(skill.labelLong).toBeTruthy();
            expect(skill.labelShort).toBeTruthy();
            expect(skill.description).toBeTruthy();
            expect(skill.icon).toBeTruthy();
            expect(skill.color).toBeTruthy();
        });
    });

    it('gli id sono unici', () => {
        const ids = skills.map((s) => s.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it('i colori sono tra quelli supportati', () => {
        const validColors = ['cyan', 'pink', 'amber', 'purple', 'blue', 'green', 'indigo'];
        skills.forEach((skill) => {
            expect(validColors).toContain(skill.color);
        });
    });
});
