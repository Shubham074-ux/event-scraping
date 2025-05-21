import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://event-scraping-service.onrender.com', // 👈 backend running on 3000
    },
  },
})
