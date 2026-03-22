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
        sitemap(),
    ],
});
