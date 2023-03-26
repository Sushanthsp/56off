import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500 * 1024, // set limit to 1 MiB,
    outDir: 'build' // change the output directory to "build"
  },
},
) 

