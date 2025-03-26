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
      },
      extensions: ['.js', '.jsx', '.json']
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'router-vendor': ['react-router-dom']
          }
        }
      },
      assetsDir: 'assets'
    },
    server: {
      headers: {
        'Content-Type': 'application/javascript'
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom']
    },
    esbuild: {
      loader: 'jsx',
      include: /src\/.*\.[jt]sx?$/,
      exclude: []
    }
  }
})
