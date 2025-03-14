import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  // If we're building for production, use "/mia_arg/"
  // Otherwise, on localhost (dev), use "/"
  const base = mode === 'production' ? '/mia_arg/' : '/'

  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
