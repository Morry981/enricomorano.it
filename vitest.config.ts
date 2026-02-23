import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom', // Simula l'ambiente DOM del browser
    globals: true, // Rende disponibili le API di testing globalmente (es. describe, it)
    include: ['src/**/*.test.ts', 'src/**/*.test.js'], // Cerca i file di test
  },
});
