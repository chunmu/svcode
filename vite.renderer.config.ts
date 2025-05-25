import { defineConfig } from 'vite';
import path from 'node:path';

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@workbench': path.resolve(__dirname, 'src/workbench'),
      '@i18n': path.resolve(__dirname, 'src/i18n'),
    },
  },
  define: {
    MAIN_WINDOW_VITE_NAME: JSON.stringify("workbench"),
  },
});
