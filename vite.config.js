import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    fs: {
      // Permitir servir archivos desde el directorio del proyecto
      strict: false,
    },
  },
});
