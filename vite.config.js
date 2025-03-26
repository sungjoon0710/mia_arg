import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    exclude: ['tailwindcss', 'postcss', 'autoprefixer']
  },
  build: {
    commonjsOptions: {
      include: [/tailwindcss/, /postcss/, /autoprefixer/]
    }
  }
})
