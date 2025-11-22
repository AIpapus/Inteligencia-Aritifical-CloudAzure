"""
Configuración y variables de entorno del backend.
"""
import os
from pathlib import Path
from dotenv import load_dotenv

# Cargar variables de entorno desde .env
load_dotenv()

# Directorio base del proyecto
BASE_DIR = Path(__file__).parent

# Configuración de Azure Blob Storage (para producción)
AZURE_STORAGE_ACCOUNT_NAME = os.getenv("AZURE_STORAGE_ACCOUNT_NAME", "")
AZURE_STORAGE_ACCOUNT_KEY = os.getenv("AZURE_STORAGE_ACCOUNT_KEY", "")
AZURE_STORAGE_CONTAINER_NAME = os.getenv("AZURE_STORAGE_CONTAINER_NAME", "models")
USE_BLOB_STORAGE = os.getenv("USE_BLOB_STORAGE", "false").lower() == "true"

# Si USE_BLOB_STORAGE es True, se usará Blob Storage; si es False, se buscarán archivos locales

# Directorio de modelos (para desarrollo local)
MODELS_DIR = BASE_DIR / "models"

# Archivos del modelo
MODEL_FILE = os.getenv("MODEL_FILE", "health_nn_model.keras")
SYMPTOM_VOCAB_FILE = os.getenv("SYMPTOM_VOCAB_FILE", "symptom_vocab.json")
CLASS_NAMES_FILE = os.getenv("CLASS_NAMES_FILE", "class_names.json")

# Rutas completas (para desarrollo local)
MODEL_PATH = MODELS_DIR / MODEL_FILE
SYMPTOM_VOCAB_PATH = MODELS_DIR / SYMPTOM_VOCAB_FILE
CLASS_NAMES_PATH = MODELS_DIR / CLASS_NAMES_FILE

# Configuración de Flask
FLASK_HOST = os.getenv("FLASK_HOST", "0.0.0.0")
FLASK_PORT = int(os.getenv("FLASK_PORT", "5000"))
FLASK_DEBUG = os.getenv("FLASK_DEBUG", "False").lower() == "true"

# Configuración de predicción
TOP_K_PREDICTIONS = int(os.getenv("TOP_K_PREDICTIONS", "5"))
MIN_CONFIDENCE = float(os.getenv("MIN_CONFIDENCE", "0.01"))

CORS_ORIGINS = os.getenv("CORS_ORIGINS", "*")

