import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';

  return {
    base: isProduction ? '/' : '/',
    plugins: [
      vue(),
      viteStaticCopy({
        targets: [
          {
            src: path.resolve(__dirname, 'robots.txt'),
            dest: '' 
          },
          {
            src: path.resolve(__dirname, 'sitemap.xml'),
            dest: '' 
          }
        ]
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), 
      },
    },
    build: {
      rollupOptions: {
        output: {
          
          chunkFileNames: isProduction ? '[name].[hash].js' : '[name].js',
          entryFileNames: isProduction ? '[name].[hash].js' : '[name].js',
          assetFileNames: '[name].[ext]',
        }
      }
    }
  };
});
