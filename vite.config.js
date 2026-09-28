import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    babel({
      presets: [
        // Ensure you have babel-plugin-react-compiler installed
        ['babel-plugin-react-compiler', {}]
      ]
    }),
    react()
  ],
})