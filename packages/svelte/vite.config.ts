import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
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
