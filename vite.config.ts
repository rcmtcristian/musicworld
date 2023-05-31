import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePluginFonts } from 'vite-plugin-fonts'
import { createHtmlPlugin } from 'vite-plugin-html'
import viteImagemin from 'vite-plugin-imagemin'
import 'tailwindcss-animate' // Changed to static import

import config from './config.js'
import postcss from './postcss.config.js'

const { imagemin } = config

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin(imagemin),
    createHtmlPlugin({
      minify: true,
      entry: '/client/src/main.tsx'
    }),
    VitePluginFonts({
      // Custom fonts
      custom: {
        families: [
          {
            name: 'CascadiaCodePL',
            src: './client/src/assets/fonts/*.woff2'
          },
          {
            name: 'Gilroy',
            src: './client/src/assets/fonts/*.woff2'
          },
          {
            name: 'FHGiselle',
            src: './client/src/assets/fonts/*.woff2'
          }
        ],
        display: 'swap',
        preload: true,
        prefetch: false,
        injectTo: 'head-prepend'
      }
    })
  ],
  css: {
    postcss
  },
  resolve: {
    alias: [
      { find: '@/', replacement: '/client/src' },
      { find: '@/Public', replacement: '/public' },
      { find: '@/Images', replacement: '/client/src/assets/images' },
      { find: '@/Fonts', replacement: '/public/fonts' },
      { find: '@/scenes', replacement: '/public/scenes' },
      { find: '@/Components', replacement: '/client/src/components' }
    ]
  }
})
