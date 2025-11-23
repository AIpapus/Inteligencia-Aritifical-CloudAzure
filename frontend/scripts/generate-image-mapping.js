const fs = require('fs')
const path = require('path')

const IMAGES_DIR = path.join(__dirname, '../public/ENFERMEDADES INTELIGENCIA ARTIFICIAL')
const OUTPUT_FILE = path.join(__dirname, '../lib/image-mapping.json')

// Función para normalizar nombres (igual a la del frontend)
function diseaseNameToImageSlug(name) {
return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')  // Remover acentos
    .replace(/[^\w\s-]/g, '')         // Remover caracteres especiales
    .replace(/\s+/g, '-')             // Espacios a guiones
    .replace(/-+/g, '-')              // Guiones múltiples a uno
    .trim()
}

function main() {
if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Carpeta no encontrada: ${IMAGES_DIR}`)
    process.exit(1)
}

try {
    const files = fs.readdirSync(IMAGES_DIR)
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
    
    // Filtrar archivos de imagen
    const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase()
    return imageExtensions.includes(ext)
    })

    if (imageFiles.length === 0) {
    console.warn('No se encontraron imágenes en la carpeta')
    process.exit(0)
    }

    // Crear mapeo: slug de enfermedad -> lista de imágenes
    const imageMapping = {}
    
    imageFiles.forEach(file => {
      // Extraer nombre base sin extensión
    const nameWithoutExt = path.basename(file, path.extname(file))
    
      // Intentar mapear el archivo a una enfermedad
      // Estrategia: si el archivo comienza con un slug conocido, agruparlo
      const slug = nameWithoutExt.toLowerCase().split('-')[0] // Primera parte antes del primer guion
    
    const imagePath = `/ENFERMEDADES INTELIGENCIA ARTIFICIAL/${file}`
    
    if (!imageMapping[slug]) {
        imageMapping[slug] = []
    }
    imageMapping[slug].push(imagePath)
    })

    // Mostrar resultado
    console.log('\nMapeo de imágenes detectadas:')
    Object.entries(imageMapping).forEach(([slug, images]) => {
    console.log(`  ${slug}: ${images.length} imagen(es)`)
    images.forEach(img => console.log(`    - ${img}`))
    })

    // Guardar en archivo JSON
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(imageMapping, null, 2))
    console.log(`\nMapeo guardado en: ${OUTPUT_FILE}`)
    console.log('\nAhora puedes usar este mapeo en diseases-data.ts')
    console.log('   Ejemplo: const imageMapping = require("./image-mapping.json")')

} catch (err) {
    console.error(`Error: ${err.message}`)
    process.exit(1)
}
}

main()
