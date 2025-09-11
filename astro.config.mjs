// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        server: {
            fs: {
                // Permitir servir archivos desde el directorio del proyecto
                strict: false,
            },
        },
    },
    // Configuración para servir archivos estáticos desde la carpeta public
    publicDir: './public',
    // Configuración para incluir archivos estáticos en la compilación
    build: {
        assets: 'assets',
    },
});
