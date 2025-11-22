"""
Módulo para descargar archivos del modelo desde Azure Blob Storage.
Permite cargar el modelo desde Blob Storage en producción y usar archivos locales en desarrollo.
"""
import logging
import os
from io import BytesIO
from pathlib import Path
from typing import Optional

# Intentar importar Azure Storage SDK
try:
    from azure.storage.blob import BlobServiceClient, BlobClient
    AZURE_STORAGE_AVAILABLE = True
except ImportError:
    AZURE_STORAGE_AVAILABLE = False
    BlobServiceClient = None
    BlobClient = None

from config import (
    AZURE_STORAGE_ACCOUNT_NAME,
    AZURE_STORAGE_ACCOUNT_KEY,
    AZURE_STORAGE_CONTAINER_NAME,
    USE_BLOB_STORAGE
)

logger = logging.getLogger(__name__)

# Cliente global para Blob Storage (se inicializa una vez)
_blob_service_client = None


def _get_blob_service_client() -> Optional[BlobServiceClient]:
    """
    Obtiene el cliente de Blob Storage (singleton).
    
    Returns:
        BlobServiceClient o None si no está configurado
    """
    global _blob_service_client
    
    if _blob_service_client is not None:
        return _blob_service_client
    
    if not AZURE_STORAGE_AVAILABLE:
        logger.warning("Azure Storage SDK no está instalado. Instala con: pip install azure-storage-blob")
        return None
    
    if not AZURE_STORAGE_ACCOUNT_NAME or not AZURE_STORAGE_ACCOUNT_KEY:
        logger.warning("Credenciales de Azure Storage no configuradas")
        return None
    
    try:
        connection_string = (
            f"DefaultEndpointsProtocol=https;"
            f"AccountName={AZURE_STORAGE_ACCOUNT_NAME};"
            f"AccountKey={AZURE_STORAGE_ACCOUNT_KEY};"
            f"EndpointSuffix=core.windows.net"
        )
        _blob_service_client = BlobServiceClient.from_connection_string(connection_string)
        logger.info(f"Cliente de Blob Storage inicializado para cuenta: {AZURE_STORAGE_ACCOUNT_NAME}")
        return _blob_service_client
    except Exception as e:
        logger.error(f"Error al inicializar cliente de Blob Storage: {str(e)}")
        return None


def download_from_blob_storage(blob_name: str, local_path: Optional[Path] = None) -> Optional[bytes]:
    """
    Descarga un archivo desde Azure Blob Storage.
    
    Args:
        blob_name: Nombre del blob en el contenedor
        local_path: Ruta local opcional para guardar el archivo (si es None, solo retorna bytes)
        
    Returns:
        Bytes del archivo descargado, o None si hubo error
        
    Raises:
        Exception: Si no se puede descargar el archivo
    """
    if not USE_BLOB_STORAGE:
        return None
    
    client = _get_blob_service_client()
    if client is None:
        return None
    
    try:
        logger.info(f"Descargando {blob_name} desde Blob Storage...")
        blob_client = client.get_blob_client(
            container=AZURE_STORAGE_CONTAINER_NAME,
            blob=blob_name
        )
        
        # Descargar como bytes
        blob_data = blob_client.download_blob().readall()
        logger.info(f"Archivo {blob_name} descargado exitosamente ({len(blob_data)} bytes)")
        
        # Si se especifica una ruta local, guardar el archivo
        if local_path:
            local_path.parent.mkdir(parents=True, exist_ok=True)
            with open(local_path, 'wb') as f:
                f.write(blob_data)
            logger.info(f"Archivo guardado en {local_path}")
        
        return blob_data
        
    except Exception as e:
        logger.error(f"Error descargando {blob_name} desde Blob Storage: {str(e)}")
        raise


def upload_to_blob_storage(local_path: Path, blob_name: str) -> bool:
    """
    Sube un archivo local a Azure Blob Storage (útil para scripts de despliegue).
    
    Args:
        local_path: Ruta del archivo local
        blob_name: Nombre que tendrá el blob en el contenedor
        
    Returns:
        True si se subió exitosamente, False en caso contrario
    """
    client = _get_blob_service_client()
    if client is None:
        return False
    
    try:
        if not local_path.exists():
            logger.error(f"Archivo local no existe: {local_path}")
            return False
        
        logger.info(f"Subiendo {local_path} a Blob Storage como {blob_name}...")
        blob_client = client.get_blob_client(
            container=AZURE_STORAGE_CONTAINER_NAME,
            blob=blob_name
        )
        
        with open(local_path, 'rb') as data:
            blob_client.upload_blob(data, overwrite=True)
        
        logger.info(f"Archivo {blob_name} subido exitosamente")
        return True
        
    except Exception as e:
        logger.error(f"Error subiendo {blob_name} a Blob Storage: {str(e)}")
        return False


def list_blobs_in_container() -> list:
    """
    Lista todos los blobs en el contenedor configurado.
    
    Returns:
        Lista de nombres de blobs
    """
    client = _get_blob_service_client()
    if client is None:
        return []
    
    try:
        container_client = client.get_container_client(AZURE_STORAGE_CONTAINER_NAME)
        blobs = [blob.name for blob in container_client.list_blobs()]
        logger.info(f"Encontrados {len(blobs)} blobs en el contenedor {AZURE_STORAGE_CONTAINER_NAME}")
        return blobs
    except Exception as e:
        logger.error(f"Error listando blobs: {str(e)}")
        return []
