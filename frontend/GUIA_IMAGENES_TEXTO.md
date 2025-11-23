# Guía: Implementar imágenes y texto dinámico

## Paso 1: Verificar estructura de carpetas

Tu estructura debe verse así:
```
frontend/
├── public/
│   └── ENFERMEDADES INTELIGENCIA ARTIFICIAL/
│       ├── shigellosis.jpg
│       ├── shigellosis-2.jpg
│       ├── roseola.jpg
│       └── ... (más imágenes)
└── lib/
    └── diseases-data.ts
```

## Paso 2: Generar mapeo automático de imágenes (opcional)

Si tienes muchas imágenes, ejecuta:
```bash
cd frontend
node scripts/generate-image-mapping.js
```

Esto generará `lib/image-mapping.json` con un mapeo automático.

## Paso 3: Actualizar `diseases-data.ts` con imágenes y texto

Para cada enfermedad, añade los campos:

```typescript
{
  name: "Shigellosis (Disentería Bacilar)",
  category: "Enfermedades infecciosas",
  symptoms: [ ... ],
  
  // ✅ NUEVO: Imágenes (relativas a public/)
  images: [
    "/ENFERMEDADES INTELIGENCIA ARTIFICIAL/shigellosis.jpg",
    "/ENFERMEDADES INTELIGENCIA ARTIFICIAL/shigellosis-2.jpg",
  ],
  
  // ✅ NUEVO: Descripción (texto largo)
  description: "La Shigellosis es una infección bacteriana...",
  
  // ✅ NUEVO: Tratamiento (recomendaciones)
  treatment: "El tratamiento incluye hidratación adecuada...",
  
  // ✅ NUEVO: Link externo (opcional)
  moreInfoUrl: "https://es.wikipedia.org/wiki/Shigella",
}
```

### Donde obtener el texto:

**Opción A: Manual (rápido para pocos datos)**
- Escribe las descripciones directamente en `diseases-data.ts`
- Edita y guarda los cambios

**Opción B: Desde CMS/APIs (escalable)**
- Crea un archivo `lib/diseases-content.json`:
  ```json
  {
    "shigellosis": {
      "description": "...",
      "treatment": "..."
    }
  }
  ```
- Importa en `diseases-data.ts`:
  ```typescript
  import diseaseContent from './diseases-content.json'
  ```

**Opción C: Desde API remota (producción)**
- Endpoint backend: `/api/enfermedad/[nombre]/content`
- Carga dinámicamente en la página

## Paso 4: Pruebar localmente

```bash
cd frontend
npm run dev
```

Abre: `http://localhost:3000/diagnostico`
- Selecciona síntomas de Shigellosis (diarrea, fiebre, dolor abdominal)
- Ve a la página de detalle
- **Deberías ver:**
  - Imagen de Shigellosis cargada
  - Descripción y tratamiento
  - Link a Wikipedia

## Paso 5: Para Azure Blob (producción)

Si quieres usar imágenes desde Blob Storage:

1. Sube imágenes a Azure:
   ```bash
   az storage blob upload-batch \
     --account-name <tuaccount> \
     --destination images \
     --source ./public/ENFERMEDADES\ INTELIGENCIA\ ARTIFICIAL
   ```

2. Obtén la URL pública:
   ```
   https://<tuaccount>.blob.core.windows.net/images/shigellosis.jpg
   ```

3. Actualiza `diseases-data.ts` para producción:
   ```typescript
   const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_BLOB_URL || '/ENFERMEDADES INTELIGENCIA ARTIFICIAL'
   
   images: [
     `${IMAGE_BASE_URL}/shigellosis.jpg`,
     `${IMAGE_BASE_URL}/shigellosis-2.jpg`,
   ]
   ```

4. En `next.config.js` añade el dominio:
   ```javascript
   images: {
     domains: ['<tuaccount>.blob.core.windows.net'],
   }
   ```

## Checklist

- [ ] Imágenes en `public/ENFERMEDADES INTELIGENCIA ARTIFICIAL/`
- [ ] `diseases-data.ts` actualizado con campos `images`, `description`, `treatment`
- [ ] Página detalle mostrando imágenes
- [ ] Descripción y tratamiento visibles
- [ ] Fallback si imagen no carga (se oculta gracefully)
- [ ] Links externos funcionan (moreInfoUrl)
- [ ] Prueba local OK
- [ ] (Opcional) Variables `.env` para URLs remotas en producción

## Solucionar problemas

**Imágenes no carga:**
- Verifica ruta exacta: `/ENFERMEDADES INTELIGENCIA ARTIFICIAL/nombre-archivo.jpg`
- Abre DevTools (F12) → Console para ver errores
- Verifica que el archivo existe en `public/`

**Texto no aparece:**
- Revisa que el campo `description` o `treatment` no sea `undefined`
- Verifica sintaxis JSON en `diseases-data.ts`

**Lentitud en carga:**
- Optimiza imágenes: usa `next/image` en lugar de `<img>`
- Comprime JPG a < 100KB
- Considera usar WebP
