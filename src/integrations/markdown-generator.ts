import type { AstroIntegration } from 'astro';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';

interface Options {
    contentSelector?: string;
    exclude?: string[];
    stripTags?: string[];
}

export function markdownGenerator(options: Options = {}): AstroIntegration {
    const {
        contentSelector = 'main#main-content',
        exclude = ['404'],
        stripTags = ['script', 'style', 'svg', 'noscript', 'astro-island', 'astro-slot'],
    } = options;

    return {
        name: 'markdown-generator',
        hooks: {
            'astro:build:done': async ({ dir, logger }) => {
                const clientDir = fileURLToPath(dir);
                const htmlFiles = await findHtmlFiles(clientDir);

                const turndown = new TurndownService({
                    headingStyle: 'atx',
                    codeBlockStyle: 'fenced',
                    bulletListMarker: '-',
                    emDelimiter: '*',
                });

                let generated = 0;
                for (const htmlPath of htmlFiles) {
                    const relPath = relative(clientDir, htmlPath);
                    if (exclude.some((ex) => relPath.includes(ex))) continue;

                    const html = await readFile(htmlPath, 'utf-8');
                    const $ = cheerio.load(html);

                    for (const tag of stripTags) {
                        $(tag).remove();
                    }

                    const content = $(contentSelector).html();
                    if (!content) {
                        logger.warn(`No content matched ${contentSelector} in ${relPath}`);
                        continue;
                    }

                    const title = $('title').text().trim();
                    const description = $('meta[name="description"]').attr('content')?.trim() ?? '';

                    const bodyMd = turndown.turndown(content).trim();
                    const md = buildMarkdown(title, description, bodyMd);

                    const mdPath = computeMarkdownPath(relPath, clientDir);
                    await writeFile(mdPath, md, 'utf-8');
                    generated++;
                }

                logger.info(`Generated ${generated} markdown files`);
            },
        },
    };
}

async function findHtmlFiles(dir: string): Promise<string[]> {
    const entries = await readdir(dir, { withFileTypes: true });
    const files: string[] = [];
    for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            if (entry.name.startsWith('_') || entry.name === '.prerender') continue;
            files.push(...(await findHtmlFiles(fullPath)));
        } else if (entry.name.endsWith('.html')) {
            files.push(fullPath);
        }
    }
    return files;
}

function computeMarkdownPath(relPath: string, clientDir: string): string {
    if (relPath === 'index.html') {
        return join(clientDir, 'index.md');
    }
    const cleanPath = relPath.replace(/\/index\.html$/, '');
    return join(clientDir, `${cleanPath}.md`);
}

function buildMarkdown(title: string, description: string, body: string): string {
    const header = [`# ${title}`];
    if (description) header.push(`\n> ${description}`);
    return `${header.join('\n')}\n\n${body}\n`;
}
