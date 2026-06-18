// @ts-check

import node from '@astrojs/node';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import indexnow from 'astro-indexnow';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';
import { markdownGenerator } from './src/integrations/markdown-generator';

// IndexNow pinga i motori a ogni build: lo attiviamo SOLO quando esplicitamente
// richiesto (deploy/produzione, build con INDEXNOW=on), per non notificare URL
// durante i build locali.
const enableIndexNow = process.env.INDEXNOW === 'on';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.enricomorano.it',
    output: 'server',

    // Shiki dual-theme: i code block espongono --shiki-light/--shiki-dark,
    // agganciati a [data-theme] nel CSS di ArticleLayout (seguono dark/light).
    markdown: {
        shikiConfig: {
            themes: { light: 'github-light', dark: 'github-dark' },
            defaultColor: false,
        },
        // Outlink (solo domini esterni) aperti in nuova scheda + rel sicuro.
        // I link interni relativi non hanno protocollo e restano in-tab;
        // il test esclude anche eventuali link assoluti al nostro dominio.
        rehypePlugins: [
            [
                rehypeExternalLinks,
                {
                    target: '_blank',
                    rel: ['noopener', 'noreferrer'],
                    test: (el) =>
                        !/^https?:\/\/(www\.)?enricomorano\.it(\/|$)/i.test(
                            String(el.properties?.href ?? ''),
                        ),
                },
            ],
        ],
    },

    adapter: node({
        mode: 'standalone',
    }),

    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [
        vue({
            appEntrypoint: '/src/plugins/vue',
            vueCompilerOptions: {
                isCustomElement: (tag) => ['ClientRouter'].includes(tag),
            },
        }),
        mdx(),
        sitemap({
            filter: (page) =>
                !['/projects', '/skills', '/about-me', '/404'].some(
                    (path) =>
                        new URL(page).pathname.replace(/\/$/, '') === path,
                ),
            serialize(item) {
                const priorities = {
                    '/': { priority: 1.0, changefreq: 'weekly' },
                    '/assistenza-prestashop': { priority: 0.9, changefreq: 'monthly' },
                    '/progetti': { priority: 0.8, changefreq: 'monthly' },
                    '/competenze': { priority: 0.8, changefreq: 'monthly' },
                    '/chi-sono': { priority: 0.7, changefreq: 'monthly' },
                };
                const path =
                    new URL(item.url).pathname.replace(/\/$/, '') || '/';
                const meta = priorities[path] ?? {
                    priority: 0.5,
                    changefreq: 'monthly',
                };
                item.priority = meta.priority;
                item.changefreq = meta.changefreq;
                item.lastmod = new Date().toISOString();
                item.url = item.url.replace(/\/+$/, '') || item.url;
                return item;
            },
        }),
        ...(enableIndexNow
            ? [
                  indexnow({
                      key: 'dcc96a5514364379899ca9f9b46e61ca',
                  }),
              ]
            : []),
        markdownGenerator({
            exclude: ['404', '_astro'],
        }),
    ],
});
