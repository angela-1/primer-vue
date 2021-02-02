import { defineConfig } from 'vite';
import vitePluginVuedoc, { vueDocFiles } from 'vite-plugin-vuedoc';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

export default defineConfig({
  plugins: [
    vitePluginVuedoc({
      highlight: {
        theme: 'one-light'
      }
    }),
    vue({
      include: [...vueDocFiles]
    })
  ],
  server: {
    port: 8080,
    hmr: {
      port: 10080
    }
  },
  build: {
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue',
          dayjs: 'dayjs'
        }
      },
      external: ['vue', 'dayjs']
    },
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'primer-vue',
      formats: ['es']
    }
  }
});
