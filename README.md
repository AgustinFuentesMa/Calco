# Calco Argentina — sitio nuevo (Next.js)

Estructura inicial del sitio, armada a partir del prototipo aprobado.

## Cómo correrlo

Necesitás Node.js 18 o más nuevo instalado.

```bash
npm install
npm run dev
```

Después abrí http://localhost:3000

## Estructura

```
app/
  layout.tsx      → fuentes (Roboto Slab, Inter, JetBrains Mono) y metadata
  globals.css      → sistema de diseño: colores, tipografía, todas las clases
  page.tsx         → arma la home juntando las secciones
components/
  Header.tsx        → nav con efecto de scroll
  Hero.tsx           → sección principal
  SiloSkyline.tsx     → silueta SVG decorativa del hero
  Marcas.tsx           → sellos de Campo Lindo / Don Apiro / Super Omega
  Productos.tsx        → grilla de granos
  QuienesSomos.tsx      → sección institucional + dato del 100%
  Footer.tsx             → dirección, teléfonos, redes
  icons/GrainIcons.tsx    → set de íconos propios (uno por grano)
data/
  marcas.ts        → contenido de las 3 marcas (fácil de editar sin tocar componentes)
  productos.ts      → lista de los 10 tipos de grano
```

## Cómo sumar imágenes reales más adelante

Cada dato en `data/marcas.ts` y `data/productos.ts` ya tiene un comentario
marcando dónde va la ruta de la imagen cuando la tengan. El flujo va a ser:

1. Poner las fotos en `public/images/marcas/` y `public/images/productos/`.
2. Agregar el campo `logo` / `imagenes` correspondiente en el archivo de datos.
3. En `Marcas.tsx` / `Productos.tsx`, reemplazar el ícono SVG por
   `<Image src={...} alt={...} width={...} height={...} />` (el componente
   `Image` de Next.js optimiza el peso automáticamente).

No hace falta tocar el resto del sitio para eso.

## Páginas que todavía faltan

El prototipo cubre la home. Quedan pendientes como páginas propias:

- **Quiénes somos** (`/quienes-somos`) — hoy solo hay una sección teaser en la home.
- **Recetas** (`/recetas`) — en el sitio viejo esta sección no tenía contenido propio.
- **Contacto** (`/contacto`) — hoy es un footer; se puede armar como página con formulario.

Cuando quieran, seguimos con esas.

## Configuración de contacto

Para habilitar el formulario de correo, copiá `.env.example` a `.env.local` y completá `NEXT_PUBLIC_CONTACT_EMAIL` con el correo de la empresa. El formulario abre la aplicación de correo de quien consulta con el mensaje preparado; no envía mensajes desde el servidor. Es necesario reiniciar el servidor de desarrollo después de cambiar la variable. Confirmá que ambos números de la sección de contacto estén habilitados en WhatsApp antes de publicar.
