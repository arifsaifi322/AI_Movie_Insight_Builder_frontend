import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
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
  }
})
