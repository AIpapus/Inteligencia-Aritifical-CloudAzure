
# upload_images_to_azure.py
# Script para subir imágenes a Azure Blob Storage desde PowerShell/Windows.
# Requisitos:
#   pip install azure-storage-blob
#   Definir variable de entorno AZURE_STORAGE_CONNECTION_STRING
# Uso (PowerShell):
#   python .\upload_images_to_azure.py --container imagenes --folder "C:\\ruta\\a\\imagenes" --public off
#   python .\upload_images_to_azure.py --container imagenes --folder "C:\\ruta\\a\\imagenes" --public blob

import os
import sys
import argparse
from typing import Dict, Tuple

try:
    from azure.storage.blob import BlobServiceClient, ContentSettings, PublicAccess
except Exception as e:
    print("ERROR: Falta el paquete 'azure-storage-blob'. Instala con: pip install azure-storage-blob")
    raise

CONTENT_TYPES: Dict[str, str] = {
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'webp': 'image/webp',
    'gif': 'image/gif',
    'bmp': 'image/bmp',
    'tif': 'image/tiff',
    'tiff': 'image/tiff'
}
VALID_EXTENSIONS = tuple(f".{ext}" for ext in CONTENT_TYPES.keys())


def ensure_env_connection_string() -> str:
    conn = os.environ.get("AZURE_STORAGE_CONNECTION_STRING")
    if not conn:
        raise RuntimeError(
            "AZURE_STORAGE_CONNECTION_STRING no está definido en tu entorno.\n"
            "En PowerShell, ejecuta:\n"
            "  $env:AZURE_STORAGE_CONNECTION_STRING = (az storage account show-connection-string --name medicai --resource-group rg-medical-ai --query connectionString --output tsv)\n"
        )
    return conn


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Sube imágenes a Azure Blob Storage")
    parser.add_argument("--container", default="imagenes", help="Nombre del contenedor destino (por defecto: imagenes)")
    parser.add_argument("--folder", required=True, help="Carpeta local con imágenes a subir")
    parser.add_argument("--public", choices=["off", "blob"], default="off",
                        help="Nivel de acceso público del contenedor: off (privado) o blob (lectura pública de blobs). Por defecto: off")
    parser.add_argument("--overwrite", action="store_true", help="Sobrescribe blobs si ya existen")
    return parser.parse_args()


def get_public_access(mode: str):
    if mode == "blob":
        return PublicAccess.Blob
    # 'off' -> None
    return None


def run():
    args = parse_args()

    folder = os.path.abspath(args.folder)
    if not os.path.isdir(folder):
        raise FileNotFoundError(f"La carpeta local no existe: {folder}")

    conn = ensure_env_connection_string()
    service = BlobServiceClient.from_connection_string(conn)
    container_client = service.get_container_client(args.container)

    # Crear contenedor si no existe
    try:
        container_client.create_container()
        if args.public == "blob":
            container_client.set_container_access_policy(public_access=get_public_access(args.public))
        print(f"Container '{args.container}' creado")
    except Exception:
        # Ya existe o no se puede crear; seguimos intentando subir
        pass

    uploaded = 0
    failed = 0
    for root, _, files in os.walk(folder):
        for filename in files:
            lower = filename.lower()
            if not lower.endswith(VALID_EXTENSIONS):
                continue
            file_path = os.path.join(root, filename)
            ext = lower.split('.')[-1]
            content_type = CONTENT_TYPES.get(ext, 'application/octet-stream')

            # Blob path relativo a la carpeta base, con separador tipo URL
            rel_path = os.path.relpath(file_path, folder).replace("\\", "/")
            blob_client = container_client.get_blob_client(rel_path)

            try:
                with open(file_path, "rb") as data:
                    blob_client.upload_blob(
                        data,
                        overwrite=args.overwrite,
                        content_settings=ContentSettings(content_type=content_type)
                    )
                print(f"✓ Subido: {rel_path}")
                uploaded += 1
            except Exception as e:
                print(f"✗ Error al subir {rel_path}: {e}")
                failed += 1

    base_url = f"https://{service.account_name}.blob.core.windows.net/{args.container}/"
    print("\n==== Resumen ====")
    print(f"Subidos OK: {uploaded}")
    print(f"Fallidos: {failed}")
    print(f"URL base del contenedor: {base_url}")


if __name__ == "__main__":
    try:
        run()
    except Exception as exc:
        print(f"ERROR: {exc}")
        sys.exit(1)
