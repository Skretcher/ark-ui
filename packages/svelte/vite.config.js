import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: resolve(fileURLToPath(new URL('.', import.meta.url)), 'src/index.ts'),
      name: 'ArkUISvelte',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['svelte', '@ark-ui/core', '@ark-ui/css'],
      output: {
        globals: {
          svelte: 'Svelte',
          '@ark-ui/core': 'ArkUICore',
          '@ark-ui/css': 'ArkUICSS',
        },
      },
    },
  },
});
