import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImportPlugin from 'unplugin-auto-import/vite';

function createAutoImportPlugin() {
  return autoImportPlugin({
    dirs: [],
    eslintrc: {
      enabled: true,
    },
    imports: [
      // presets
      'vue',
    ],
    vueTemplate: true,
  });
}

function createPlugins() {
  return [
    createAutoImportPlugin(),
  ];
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      ...createPlugins()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
