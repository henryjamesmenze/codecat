# CodeCat

Proyecto web desarrollado con Astro y Tailwind CSS.

## Estructura del Proyecto

```
codecat/
├── public/              # Archivos estáticos (imágenes, fuentes, etc.)
├── src/
│   ├── assets/         # Assets procesados por Astro
│   ├── components/     # Componentes reutilizables (.astro)
│   ├── layouts/        # Plantillas de diseño
│   ├── pages/          # Páginas del sitio (routing automático)
│   └── styles/         # Estilos globales
├── astro.config.mjs    # Configuración de Astro
├── package.json        # Dependencias del proyecto
└── tsconfig.json       # Configuración de TypeScript

```

## Comandos

| Comando                | Acción                                      |
|:-----------------------|:--------------------------------------------|
| `npm install`          | Instala las dependencias                    |
| `npm run dev`          | Inicia el servidor de desarrollo            |
| `npm run build`        | Construye el sitio para producción en `dist/` |
| `npm run preview`      | Previsualiza la build local antes de desplegar |

## Despliegue a Producción

### Estructura de Build

Al ejecutar `npm run build`, Astro genera una carpeta `dist/` con:
- HTML estático optimizado
- CSS y JavaScript minificados
- Assets optimizados

### Opciones de Despliegue

#### 1. Vercel (Recomendado)
```bash
# Instala Vercel CLI
npm i -g vercel

# Despliega
vercel
```

#### 2. Netlify
```bash
# Instala Netlify CLI
npm i -g netlify-cli

# Despliega
netlify deploy --prod
```

#### 3. GitHub Pages
Agrega en `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://tu-usuario.github.io',
  base: '/codecat',
  // ... resto de la configuración
});
```

#### 4. Servidor Propio
```bash
# Construye el proyecto
npm run build

# Sube la carpeta dist/ a tu servidor
# Configura tu servidor web (Apache/Nginx) para servir desde dist/
```

### Variables de Entorno

Crea un archivo `.env` para desarrollo:
```
PUBLIC_API_URL=https://api.ejemplo.com
```

Para producción, configura las variables en tu plataforma de hosting.

## Optimizaciones para Producción

- Minificación automática de CSS/JS
- Optimización de imágenes
- Generación de sitemap
- Compilación de TypeScript
- Tailwind CSS optimizado

## Notas

- La carpeta `dist/` se genera automáticamente y no debe subirse a git
- Los archivos en `public/` se copian tal cual a la raíz de `dist/`
- Las páginas en `src/pages/` generan rutas automáticamente
