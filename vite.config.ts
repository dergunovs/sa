import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  server: { port: 8080 },

  build: { target: 'es2022' },

  plugins: [vue(), svgLoader()],
});
