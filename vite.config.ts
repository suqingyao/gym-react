import react from '@vitejs/plugin-react'
import path from 'path'
import UnoCss from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCss(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
