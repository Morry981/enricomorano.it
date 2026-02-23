// @ts-check

import node from '@astrojs/node';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import tailwindcssCornerShape from '@toolwind/corner-shape'; // Re-aggiunto l'import
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  adapter: node({
      mode: 'standalone',
	}),

  vite: {
    plugins: [tailwindcss({
      // Configurazione di Tailwind
      tailwindConfig: {
        plugins: [tailwindcssCornerShape], // Re-aggiunto il plugin
      },
    })],
  },

  integrations: [vue({
    vueCompilerOptions: {
              isCustomElement: (tag) => ['ClientRouter'].includes(tag),    },
  })],
});
