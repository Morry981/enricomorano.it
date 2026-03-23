// @ts-check

import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';

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
                isCustomElement: (tag) => ['ClientRouter', 'ViewTransitions'].includes(tag),
            },
        }),
        sitemap({
            serialize(item) {
                const priorities = {
                    '/': { priority: 1.0, changefreq: 'weekly' },
                    '/progetti': { priority: 0.8, changefreq: 'monthly' },
                    '/competenze': { priority: 0.8, changefreq: 'monthly' },
                    '/chi-sono': { priority: 0.7, changefreq: 'monthly' },
                };
                const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
                const meta = priorities[path] ?? { priority: 0.5, changefreq: 'monthly' };
                item.priority = meta.priority;
                item.changefreq = meta.changefreq;
                item.lastmod = new Date().toISOString();
                return item;
            },
        }),
    ],
});
