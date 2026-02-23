// @ts-check

import node from '@astrojs/node';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  adapter: node({
      mode: 'standalone',
	}),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [vue({
    vueCompilerOptions: {
        isCustomElement: (tag) => ['ClientRouter', 'ViewTransitions'].includes(tag),
    },
  })],
});
