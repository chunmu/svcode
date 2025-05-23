import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  define: {
    MAIN_WINDOW_VITE_NAME: JSON.stringify("workbench"),
  },
});
