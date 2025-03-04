import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // https://stackoverflow.com/questions/74625283/vue3-vite-hot-reload-hmr-no-working-in-the-browser
  server: {
    watch: {
      usePolling: true,
    },
  },
})
