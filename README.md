# Calco Argentina — sitio nuevo (Next.js)

Estructura inicial del sitio, armada a partir del prototipo aprobado.

## Cómo correrlo

Necesitás Node.js 18 o más nuevo instalado.

```bash
npm install
npm run dev
```

Después abrí http://localhost:3000

## Formulario de contacto

El formulario envía las consultas con Resend. Copiá `.env.example` como `.env.local` y configurá `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (remitente autorizado) y `CONTACT_TO_EMAIL` (casilla que recibe las consultas). No compartas ni subas `.env.local`: contiene la clave privada. Reiniciá el servidor al cambiar estas variables y configurá las mismas variables en el alojamiento cuando corresponda. Las respuestas van al correo ingresado por el visitante mediante Reply-To.

Para probar con `onboarding@resend.dev`, Resend limita los destinatarios de prueba al correo de la cuenta. Para usar la casilla de la empresa, verificá primero un dominio propio en Resend y configurá el remitente autorizado y el destinatario empresarial. Al configurar DNS, conservá los registros existentes del correo de la empresa y coordiná los cambios con quien administre el dominio.

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
  Contacto.tsx           → sección de contacto y teléfonos
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
- **Contacto** (`/contacto`) — la home incluye una sección de contacto con teléfonos; se puede crear una página propia o integrar un formulario.

Cuando quieran, seguimos con esas.

