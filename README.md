# CodeCat

Sitio web corporativo para CodeCat.

## Descripción

CodeCat es una plataforma web moderna que ofrece servicios de desarrollo web, diseño profesional y asesoría tecnológica. El sitio está construido con las tecnologías más actuales para garantizar rendimiento, SEO y experiencia de usuario óptimas.

## Stack Tecnológico

### Framework Principal
- **[Astro 5.16.6](https://astro.build)** - Framework web moderno para sitios rápidos y optimizados
  - Generación de sitios estáticos (SSG)
  - Routing basado en archivos
  - Componentes Astro (.astro)
  - Hidratación parcial para mejor rendimiento

### Estilos
- **[Tailwind CSS 4.1.18](https://tailwindcss.com)** - Framework CSS utility-first
- **[@tailwindcss/vite 4.1.18](https://tailwindcss.com/docs/installation/using-vite)** - Integración con Vite
- **[Animate.css 4.1.1](https://animate.style)** - Biblioteca de animaciones CSS
- **[Google Fonts (Merriweather)](https://fonts.google.com)** - Tipografía principal

### Iconos
- **[Bootstrap Icons 1.11.3](https://icons.getbootstrap.com)** - Biblioteca de iconos
- **[Devicon](https://devicon.dev)** - Iconos de tecnologías y lenguajes

### Lenguajes
- **TypeScript** - Tipado estático para JavaScript
- **HTML5** - Estructura semántica
- **CSS3/PostCSS** - Estilos y procesamiento

### Herramientas de Desarrollo
- **Vite** - Build tool rápido (incluido en Astro)
- **Node.js** - Entorno de ejecución
- **npm** - Gestor de paquetes

## Estructura del Proyecto

```
codecat/
├── public/                    # Archivos estáticos servidos directamente
│   ├── logo.png              # Logo de CodeCat
│   ├── cat.png               # Mascota principal
│   ├── asesor.png            # Imagen de servicios
│   ├── calculadora.png       # Imagen de servicios
│   ├── ecommerce.png         # Imagen de servicios
│   ├── grafico.png           # Imagen de servicios
│   ├── security.png          # Imagen de servicios
│   └── web.png               # Imagen de servicios
│
├── src/
│   ├── assets/               # Assets procesados por Astro
│   │
│   ├── components/           # Componentes reutilizables
│   │   └── Navbar.astro      # Barra de navegación con menú responsive
│   │
│   ├── layouts/              # Plantillas de diseño
│   │   └── Layout.astro      # Layout principal con SEO y meta tags
│   │
│   ├── pages/                # Páginas (routing automático)
│   │   ├── index.astro       # Página de inicio
│   │   ├── quienes-somos.astro  # Página sobre nosotros
│   │   ├── proyectos.astro   # Portafolio de proyectos
│   │   └── 404.astro         # Página de error
│   │
│   └── styles/               # Estilos globales
│       └── main.css          # CSS principal con Tailwind
│
├── .astro/                   # Archivos generados por Astro (cache)
├── dist/                     # Build de producción (generado)
├── node_modules/             # Dependencias (generado)
│
├── astro.config.mjs          # Configuración de Astro
├── package.json              # Dependencias y scripts
├── tsconfig.json             # Configuración de TypeScript
├── vercel.json               # Configuración para Vercel
├── .gitignore                # Archivos ignorados por Git
└── README.md                 # Este archivo
```

## Características del Proyecto

### Páginas Implementadas
- **Inicio** (`/`) - Hero section, servicios y llamados a la acción
- **Quiénes Somos** (`/quienes-somos`) - Información sobre la empresa
- **Proyectos** (`/proyectos`) - Portafolio de trabajos realizados
- **404** - Página de error personalizada

### Funcionalidades
Diseño responsive (mobile-first)  
Navegación sticky con menú hamburguesa  
Animaciones CSS con Animate.css  
SEO optimizado con meta tags  
Open Graph para redes sociales  
Accesibilidad (ARIA labels, alt text)  
Integración con WhatsApp  
Smooth scrolling  
Lazy loading de imágenes  
Favicon personalizado  

### Paleta de Colores
- **Primario:** `#e398b7` (Rosa)
- **Secundario:** `#150f40` (Azul oscuro)
- **Fondo:** `#101010` (Negro)
- **Texto:** `#ffffff` (Blanco)

### Tipografía
- **Fuente principal:** Merriweather (Google Fonts)
- **Pesos:** 300, 400, 700, 900

## Despliegue a Producción

### Build de Producción

```bash
npm run build
```

Esto genera una carpeta `dist/` con:
- HTML estático optimizado
- CSS minificado y purgado
- JavaScript minificado
- Imágenes optimizadas
- Assets con hash para cache

## Optimizaciones Implementadas

### Rendimiento
- Inlining automático de estilos críticos
- Compresión HTML
- Lazy loading de imágenes
- Preconnect a Google Fonts
- Minificación de assets

### SEO
- Meta descriptions dinámicas
- Open Graph tags
- Twitter cards
- Sitemap automático
- URLs semánticas
- Estructura HTML semántica

### Accesibilidad
- ARIA labels en navegación
- Alt text en imágenes
- Contraste de colores WCAG AA
- Navegación por teclado
- Responsive design

## Integración con Servicios Externos

- **WhatsApp Business:** Botón de contacto directo
- **Google Fonts:** Tipografía Merriweather
- **Bootstrap Icons:** Iconografía
- **Devicon:** Iconos de tecnologías
- **Animate.css:** Animaciones predefinidas

## Seguridad

- Sin dependencias con vulnerabilidades conocidas
- HTTPS enforced en producción
- CSP headers configurables
- Sanitización de HTML

## Compatibilidad

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- iOS Safari
- Chrome Android

## Licencia

Este proyecto es propiedad de CodeCat. Todos los derechos reservados.

## Contacto

- **WhatsApp:** [+57 302 840 0610](https://wa.me/573028400610)
- **Website:** En desarrollo

---

Desarrollado con ❤️ por CodeCat | Última actualización: Enero 2026
