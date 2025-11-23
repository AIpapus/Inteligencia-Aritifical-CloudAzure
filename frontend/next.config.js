/** @type {import('next').NextConfig} */
const nextConfig = {
  // CAMBIO 1: Usa 'standalone' en lugar de 'export'.
  // Esto permite que tus APIs funcionen y el servidor arranque rápido.
  output: 'standalone',

  // CAMBIO 2: Comenta o borra esta línea.
  // Deja que Next.js use su carpeta por defecto (.next) para evitar errores de ruta en Azure.
  // distDir: 'build',

  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
