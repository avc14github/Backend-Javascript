import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api' : 'https://curly-goggles-jq5644vgq49254qw-4000.app.github.dev/'
    },
  },
  plugins: [react()],
})
