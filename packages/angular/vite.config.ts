import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ArkUIAngular',
      formats: ['es', 'cjs'],
      fileName: (format: string) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['@angular/core', '@angular/common', '@ark-ui/core', '@ark-ui/css'],
      output: {
        globals: {
          '@angular/core': 'ng.core',
          '@angular/common': 'ng.common',
          '@ark-ui/core': 'ArkUICore',
          '@ark-ui/css': 'ArkUICSS',
        },
      },
    },
  },
});
