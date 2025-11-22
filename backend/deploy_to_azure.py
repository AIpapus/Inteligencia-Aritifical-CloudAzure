"""
Script auxiliar para subir archivos del modelo a Azure Blob Storage.
Ejecuta este script después de entrenar el modelo para subirlo a Blob Storage.
"""
import sys
from pathlib import Path
from blob_storage import upload_to_blob_storage, list_blobs_in_container
from config import MODEL_FILE, SYMPTOM_VOCAB_FILE, CLASS_NAMES_FILE, MODELS_DIR
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def main():
    """Función principal para subir archivos del modelo a Blob Storage."""
    # Verificar que los archivos locales existan
    model_path = MODELS_DIR / MODEL_FILE
    vocab_path = MODELS_DIR / SYMPTOM_VOCAB_FILE
    classes_path = MODELS_DIR / CLASS_NAMES_FILE
    
    files_to_upload = [
        (model_path, MODEL_FILE),
        (vocab_path, SYMPTOM_VOCAB_FILE),
        (classes_path, CLASS_NAMES_FILE)
    ]
    
    logger.info("Iniciando subida de archivos del modelo a Azure Blob Storage...")
    logger.info(f"Container: {MODELS_DIR}")
    
    # Verificar que los archivos existan
    missing_files = []
    for local_path, _ in files_to_upload:
        if not local_path.exists():
            missing_files.append(str(local_path))
    
    if missing_files:
        logger.error("Los siguientes archivos no se encontraron:")
        for file in missing_files:
            logger.error(f"  - {file}")
        logger.error("\nAsegúrate de colocar los archivos del modelo en backend/models/")
        sys.exit(1)
    
    # Subir cada archivo
    success_count = 0
    for local_path, blob_name in files_to_upload:
        logger.info(f"\nSubiendo {local_path.name}...")
        if upload_to_blob_storage(local_path, blob_name):
            success_count += 1
            logger.info(f"✓ {blob_name} subido exitosamente")
        else:
            logger.error(f"✗ Error al subir {blob_name}")
    
    # Mostrar resumen
    logger.info(f"\n{'='*50}")
    logger.info(f"Resumen: {success_count}/{len(files_to_upload)} archivos subidos exitosamente")
    
    if success_count == len(files_to_upload):
        logger.info("✓ Todos los archivos se subieron correctamente")
        
        # Listar blobs en el contenedor
        logger.info("\nArchivos en el contenedor:")
        blobs = list_blobs_in_container()
        for blob in blobs:
            logger.info(f"  - {blob}")
    else:
        logger.error("✗ Algunos archivos no se pudieron subir")
        sys.exit(1)


if __name__ == "__main__":
    main()



