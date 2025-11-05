import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ArkUIReact',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@ark-ui/core', '@ark-ui/css'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@ark-ui/core': 'ArkUICore',
          '@ark-ui/css': 'ArkUICSS',
        },
      },
    },
  },
});
