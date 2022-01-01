import { defineConfig } from 'vite';

import { resolve, dirname } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { viteSingleFile } from 'vite-plugin-singlefile';

import { minifyHtml } from 'vite-plugin-html';

import { fileURLToPath } from 'url';
const ___filename = fileURLToPath(import.meta.url);
const ___dirname = dirname(___filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), viteSingleFile(), minifyHtml()],
  build: {
    target: 'es2015',
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
      input: {
        pure: resolve(___dirname, 'pure/index.html'),
        simple: resolve(___dirname, 'simple/index.html'),
      },
      output: {
        manualChunks: () => 'everything.js',
      },
    },
  },
});
