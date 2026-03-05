import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
    proxy: {
      '/movie': {
        target: 'https://ai-movie-insight-builder-backend-t2bh.onrender.com',
        changeOrigin: true,
      },
      '/reviews': {
        target: 'https://ai-movie-insight-builder-backend-t2bh.onrender.com',
        changeOrigin: true,
      }
    }
  },

  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173,
    allowedHosts: [
      'ai-movie-insight-builder-frontend.onrender.com'
    ]
  }
})