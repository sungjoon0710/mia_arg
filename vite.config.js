import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

export default defineConfig(({ mode }) => {
  // Use /mia_arg/ in production (GitHub Pages), use / in development
  const base = mode === 'production' ? '/mia_arg/' : '/'

  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', '@radix-ui/react-slot'],
      exclude: ['tailwindcss', 'postcss', 'autoprefixer']
    },
    build: {
      commonjsOptions: {
        include: [/tailwindcss/, /postcss/, /autoprefixer/]
      },
      rollupOptions: {
        external: ['react/jsx-runtime'],
        output: {
          globals: {
            'react/jsx-runtime': 'jsxRuntime'
          }
        }
      }
    }
  }
})
