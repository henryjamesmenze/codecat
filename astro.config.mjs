// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Descomenta y configura si usas un subdirectorio
  // site: 'https://tu-dominio.com',
  // base: '/codecat',
  
  vite: {
    plugins: [tailwindcss()]
  },
  
  // Optimizaciones para producción
  build: {
    inlineStylesheets: 'auto',
  },
  
  // Compresión de assets
  compressHTML: true,
});