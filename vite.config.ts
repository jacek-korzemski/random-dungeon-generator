import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {},
  },
  base: '/tools/random-generators/',
  build: {},
  optimizeDeps: {},
  assetsInclude: ['**/*.csv'],
});