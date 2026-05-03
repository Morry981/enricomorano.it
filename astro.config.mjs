// @ts-check

import node from '@astrojs/node';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import indexnow from "astro-indexnow";

// https://astro.build/config
export default defineConfig({
    site: 'https://www.enricomorano.it',
    output: 'server',

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
                isCustomElement: (tag) =>
                    ['ClientRouter'].includes(tag),
            },
        }),
        sitemap({
            filter: (page) =>
                !['/projects', '/skills', '/about-me', '/404'].some(
                    (path) =>
                        new URL(page).pathname.replace(/\/$/, '') === path,
                ),
            serialize(item) {
                const priorities = {
                    '/': { priority: 1.0, changefreq: 'weekly' },
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
        indexnow({
            key: "dcc96a5514364379899ca9f9b46e61ca",
        }),
    ],
});
