import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500 * 1024,
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './index.html', // modify to match the path to your index.html file
      },
    },
  },
  publicDir: 'public', // modify to match the path to your additional files directory
});
