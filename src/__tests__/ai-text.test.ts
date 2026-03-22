import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const AI_CHARS_RE = /[\u2013\u2014\u2018\u2019\u201C\u201D]/g;

const charName = (ch: string) => {
    const map: Record<string, string> = {
        '\u2013': 'en-dash (–)',
        '\u2014': 'em-dash (—)',
        '\u2018': 'left single quote (\u2018)',
        '\u2019': 'right single quote (\u2019)',
        '\u201C': 'left double quote (\u201C)',
        '\u201D': 'right double quote (\u201D)',
    };
    return map[ch] ?? ch;
};

const contentFiles = [
    'src/data/projects.ts',
    'src/data/skills.ts',
    'src/data/schemas/person.ts',
    'src/data/schemas/service.ts',
    'src/pages/index.astro',
    'src/pages/projects.astro',
    'src/pages/skills.astro',
    'src/pages/about-me.astro',
    'src/components/FaqSection.astro',
];

const root = resolve(__dirname, '../..');

describe('no caratteri tipici AI nei testi', () => {
    for (const file of contentFiles) {
        it(`${file} non contiene trattini lunghi o apici curvi`, () => {
            const content = readFileSync(resolve(root, file), 'utf-8');
            const matches = [...content.matchAll(AI_CHARS_RE)];
            if (matches.length > 0) {
                const details = matches.map((m) => {
                    const line = content.substring(0, m.index).split('\n').length;
                    return `  riga ${line}: ${charName(m[0])} in "...${content.substring(m.index! - 15, m.index! + 15).replace(/\n/g, '\\n')}..."`;
                });
                expect.fail(
                    `Trovati ${matches.length} caratteri AI:\n${details.join('\n')}`,
                );
            }
        });
    }
});
