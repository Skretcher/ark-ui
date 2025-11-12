import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ArkUIVue',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['vue', '@ark-ui/core', '@ark-ui/css'],
      output: {
        globals: {
          vue: 'Vue',
          '@ark-ui/core': 'ArkUICore',
          '@ark-ui/css': 'ArkUICSS',
        },
      },
    },
  },
});
