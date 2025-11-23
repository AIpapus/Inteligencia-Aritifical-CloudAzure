
# upload_models_to_azure.py
# Script para subir archivos de modelo (ONNX/PyTorch/PKL/etc.) a Azure Blob Storage.
# Requisitos:
#   pip install azure-storage-blob
#   Definir variable de entorno AZURE_STORAGE_CONNECTION_STRING
# Uso (PowerShell):
#   python .\upload_models_to_azure.py --container modelosai --models-dir .\backend\models --files mi_modelo.onnx vocab.json class_names.json
#   python .\upload_models_to_azure.py --container modelosai --models-dir .\backend\models   # (sube todos los archivos con extensiones conocidas)

import os
import sys
import argparse
from typing import List

try:
    from azure.storage.blob import BlobServiceClient
except Exception as e:
    print("ERROR: Falta el paquete 'azure-storage-blob'. Instala con: pip install azure-storage-blob")
    raise

SUPPORTED_EXTS = (".onnx", ".pt", ".pkl", ".joblib", ".pb", ".h5", ".tflite", ".keras", ".json")


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
    parser = argparse.ArgumentParser(description="Sube archivos de modelo a Azure Blob Storage")
    parser.add_argument("--container", default="modelosai", help="Nombre del contenedor destino (por defecto: modelosai)")
    parser.add_argument("--models-dir", default=os.path.join(".", "backend", "models"),
                        help="Carpeta local donde están los archivos del modelo (por defecto: .\\backend\\models)")
    parser.add_argument("--files", nargs="*", help="Lista de archivos exactos a subir (opcional). Si no se especifica, se suben todos los archivos con extensiones conocidas.")
    parser.add_argument("--overwrite", action="store_true", help="Sobrescribe blobs si ya existen")
    return parser.parse_args()


def collect_files(models_dir: str, files_cli: List[str]) -> List[str]:
    if files_cli:
        resolved = []
        for f in files_cli:
            path = os.path.join(models_dir, f) if not os.path.isabs(f) else f
            if os.path.isfile(path):
                resolved.append(path)
            else:
                print(f"ADVERTENCIA: No existe el archivo especificado: {path}")
        return resolved
    # Recorrer carpeta y tomar extensiones soportadas
    collected = []
    for root, _, files in os.walk(models_dir):
        for name in files:
            if name.lower().endswith(SUPPORTED_EXTS):
                collected.append(os.path.join(root, name))
    return collected


def run():
    args = parse_args()
    models_dir = os.path.abspath(args.models_dir)
    if not os.path.isdir(models_dir):
        raise FileNotFoundError(f"La carpeta de modelos no existe: {models_dir}")

    conn = ensure_env_connection_string()
    service = BlobServiceClient.from_connection_string(conn)
    container_client = service.get_container_client(args.container)

    # Crear contenedor si no existe
    try:
        container_client.create_container()
        print(f"Container '{args.container}' creado")
    except Exception:
        pass

    files = collect_files(models_dir, args.files)
    if not files:
        raise RuntimeError("No se encontraron archivos para subir en la carpeta especificada.")

    uploaded = 0
    failed = 0
    for path in files:
        # Subir conservando estructura relativa al directorio de modelos
        rel = os.path.relpath(path, models_dir).replace("\\", "/")
        try:
            with open(path, "rb") as data:
                container_client.upload_blob(name=rel, data=data, overwrite=args.overwrite)
            print(f"✓ Subido: {rel}")
            uploaded += 1
        except Exception as e:
            print(f"✗ Error al subir {rel}: {e}")
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
