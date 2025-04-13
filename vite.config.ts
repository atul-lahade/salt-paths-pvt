import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: 'https://saltpaths.com/',
  css: {
    postcss: {
      plugins: [],
    },
  },
  plugins: [
    tailwindcss(),
    tsconfigPaths(), 
    react(),
  ],
  build: {
    outDir: 'dist', 
    sourcemap: false, 
    minify: 'esbuild', 
    chunkSizeWarningLimit: 500
  },
})
