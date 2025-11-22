/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Genera un sitio estático que Azure puede servir
  distDir: 'build',  // Cambia .next a build (lo que espera el workflow)
  images: {
    unoptimized: true, // Necesario para export estático
  },
  // Si usas rutas dinámicas, configúralas aquí
  // trailingSlash: true, // Opcional: añade / al final de las URLs
}

module.exports = nextConfig
