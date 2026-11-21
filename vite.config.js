import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const root = fileURLToPath(new URL('.', import.meta.url))

const input = Object.fromEntries(
  readdirSync(root)
    .filter((file) => file.endsWith('.html'))
    .map((file) => [file.replace(/\.html$/, ''), resolve(root, file)])
)

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input,
    },
  },
})
