import { fileURLToPath, URL } from 'node:url'

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

import dts from 'vite-plugin-dts'
import path from 'path'

// https://vitejs.dev/config/

//@ts-ignore
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    cssInjectedByJsPlugin(),
    svgLoader(),
    dts({
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  build: {
    lib: {
      entry: {
        bundle: resolve(__dirname, './index.ts'),
     
      },
      name: 'Can I Helpu - Design System'
    },
    rollupOptions: {
      external: ['vue'],

      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    emptyOutDir: false
  }
})
