import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import path from "path"
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "@assets": path.resolve(__dirname, './src/shared/assets'),
    }
  },
  plugins: [react(),svgr()],
  build: {
    target: 'esnext', // Поддержка top-level await
  },
  esbuild: {
    target: 'esnext',
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    },
  }
})
