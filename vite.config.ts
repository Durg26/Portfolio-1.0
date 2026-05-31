import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'

export default defineConfig({
  base: '/portfolio-1.0/',
  plugins: [
    mdx({ remarkPlugins: [remarkFrontmatter] }),
    react(),
  ],
  build: {
    target: 'es2020',
  },
})
