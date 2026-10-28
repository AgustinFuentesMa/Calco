/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cuando sumen fotos reales de producto/planta, agreguen acá el dominio
    // si las sirven desde un CMS externo. Mientras tanto usamos /public.
    remotePatterns: [],
  },
};

export default nextConfig;
