import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    assetsInclude: ['**/*.gltf','**/*.bin', '**/*.glsl', '**/*.png'],
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            nested: resolve(__dirname, 'apps/campfire.html'),
          },
        },
      },
})