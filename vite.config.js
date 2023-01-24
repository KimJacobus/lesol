import { resolve } from 'path'
import { defineConfig } from 'vite'
const path = require('path')


export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
        menu: resolve(__dirname, './src/fotf_MENU.html'),
        about: resolve(__dirname, './src/fotf_ABOUT.html'),
        contact: resolve(__dirname, './src/fotf_CONTACT.html'),
      },
    },
  },

});