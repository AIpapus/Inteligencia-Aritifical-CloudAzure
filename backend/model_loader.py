"""
Módulo para cargar y gestionar el modelo TensorFlow y sus transformadores.
Carga el modelo una sola vez al inicio del servidor (singleton pattern).
"""
import json
import logging
from pathlib import Path
from typing import List, Tuple, Optional
import numpy as np
from sklearn.preprocessing import MultiLabelBinarizer, LabelEncoder
import tensorflow as tf
from tensorflow import keras

from config import (
    MODEL_PATH, SYMPTOM_VOCAB_PATH, CLASS_NAMES_PATH,
    USE_BLOB_STORAGE, MODEL_FILE, SYMPTOM_VOCAB_FILE, CLASS_NAMES_FILE,
    MODELS_DIR
)
try:
    from blob_storage import download_from_blob_storage, AZURE_STORAGE_AVAILABLE
except ImportError:
    AZURE_STORAGE_AVAILABLE = False
    def download_from_blob_storage(*args, **kwargs):
        return None

logger = logging.getLogger(__name__)

# Variables globales para el singleton
_model = None
_mlb = None
_class_names = None
_model_loaded = False


def load_model() -> Tuple[keras.Model, MultiLabelBinarizer, List[str]]:
    """
    Carga el modelo TensorFlow, el MultiLabelBinarizer y las clases.
    Implementa patrón singleton - solo carga una vez.
    
    Returns:
        Tupla con (modelo, mlb, class_names)
        
    Raises:
        FileNotFoundError: Si no se encuentran los archivos del modelo
        Exception: Si hay error al cargar el modelo
    """
    global _model, _mlb, _class_names, _model_loaded
    
    if _model_loaded:
        logger.info("Modelo ya cargado, reutilizando instancia")
        return _model, _mlb, _class_names
    
    try:
        # Determinar si usar Blob Storage o archivos locales
        use_blob = USE_BLOB_STORAGE and AZURE_STORAGE_AVAILABLE
        
        if use_blob:
            logger.info("Cargando modelo desde Azure Blob Storage...")
            
            # Crear directorio temporal para archivos descargados
            temp_dir = MODELS_DIR / "temp"
            temp_dir.mkdir(parents=True, exist_ok=True)
            
            # Descargar archivos desde Blob Storage a directorio temporal
            model_temp_path = temp_dir / MODEL_FILE
            symptom_vocab_temp_path = temp_dir / SYMPTOM_VOCAB_FILE
            class_names_temp_path = temp_dir / CLASS_NAMES_FILE
            
            logger.info(f"Descargando {MODEL_FILE} desde Blob Storage...")
            download_from_blob_storage(MODEL_FILE, model_temp_path)
            
            logger.info(f"Descargando {SYMPTOM_VOCAB_FILE} desde Blob Storage...")
            download_from_blob_storage(SYMPTOM_VOCAB_FILE, symptom_vocab_temp_path)
            
            logger.info(f"Descargando {CLASS_NAMES_FILE} desde Blob Storage...")
            download_from_blob_storage(CLASS_NAMES_FILE, class_names_temp_path)
            
            # Verificar que los archivos se descargaron correctamente
            if not model_temp_path.exists():
                raise FileNotFoundError(f"Error descargando {MODEL_FILE} desde Blob Storage")
            if not symptom_vocab_temp_path.exists():
                raise FileNotFoundError(f"Error descargando {SYMPTOM_VOCAB_FILE} desde Blob Storage")
            if not class_names_temp_path.exists():
                raise FileNotFoundError(f"Error descargando {CLASS_NAMES_FILE} desde Blob Storage")
            
            logger.info("Archivos descargados exitosamente desde Blob Storage")
            
            model_path = model_temp_path
            symptom_vocab_path = symptom_vocab_temp_path
            class_names_path = class_names_temp_path
        else:
            logger.info(f"Cargando modelo desde archivos locales ({MODEL_PATH})")
            
            # Verificar que existan los archivos locales
            if not MODEL_PATH.exists():
                raise FileNotFoundError(f"Archivo del modelo no encontrado: {MODEL_PATH}")
            if not SYMPTOM_VOCAB_PATH.exists():
                raise FileNotFoundError(f"Archivo de vocabulario no encontrado: {SYMPTOM_VOCAB_PATH}")
            if not CLASS_NAMES_PATH.exists():
                raise FileNotFoundError(f"Archivo de clases no encontrado: {CLASS_NAMES_PATH}")
            
            model_path = MODEL_PATH
            symptom_vocab_path = SYMPTOM_VOCAB_PATH
            class_names_path = CLASS_NAMES_PATH
        
        # Cargar modelo TensorFlow
        logger.info("Cargando modelo TensorFlow...")
        _model = keras.models.load_model(str(model_path))
        logger.info("Modelo TensorFlow cargado exitosamente")
        
        # Cargar vocabulario de síntomas
        logger.info("Cargando vocabulario de síntomas...")
        with open(symptom_vocab_path, 'r', encoding='utf-8') as f:
            symptom_vocab = json.load(f)
        
        # Recrear MultiLabelBinarizer con el vocabulario
        # El symptom_vocab es una lista de strings que representan todos los síntomas únicos
        # Para recrear el MLB correctamente, debemos ajustarlo con todas las clases
        # El MLB.fit() espera una lista de listas, donde cada lista interna son los síntomas de un caso
        # Creamos una lista donde cada síntoma aparece individualmente para asegurar que todas las clases estén presentes
        _mlb = MultiLabelBinarizer()
        # Ajustar con el vocabulario completo como una lista de listas
        # Esto asegura que todas las clases estén presentes y en el orden correcto
        _mlb.fit([[symptom] for symptom in symptom_vocab])
        
        # Verificar que las clases coinciden con el vocabulario guardado
        if not np.array_equal(_mlb.classes_, np.array(symptom_vocab)):
            logger.warning(f"Advertencia: Las clases del MLB no coinciden exactamente con el vocabulario guardado")
            logger.info(f"MLB tiene {len(_mlb.classes_)} clases, vocabulario tiene {len(symptom_vocab)} síntomas")
        
        logger.info(f"Vocabulario cargado: {len(symptom_vocab)} síntomas")
        
        # Cargar nombres de clases
        logger.info("Cargando nombres de clases...")
        with open(class_names_path, 'r', encoding='utf-8') as f:
            _class_names = json.load(f)
        logger.info(f"Clases cargadas: {len(_class_names)} enfermedades")
        
        _model_loaded = True
        logger.info("Modelo y transformadores cargados exitosamente")
        
        return _model, _mlb, _class_names
        
    except Exception as e:
        logger.error(f"Error al cargar el modelo: {str(e)}", exc_info=True)
        raise


def predict(
    symptoms: List[str],
    top_k: int = 5,
    min_confidence: float = 0.01
) -> List[dict]:
    """
    Realiza predicción de enfermedades basada en síntomas.
    
    Args:
        symptoms: Lista de síntomas normalizados
        top_k: Número de predicciones top a retornar
        min_confidence: Confianza mínima para incluir predicción
        
    Returns:
        Lista de diccionarios con formato:
        [{"disease": str, "confidence": float}, ...]
        
    Raises:
        RuntimeError: Si el modelo no está cargado
    """
    global _model, _mlb, _class_names
    
    if not _model_loaded:
        raise RuntimeError("El modelo no está cargado. Llama a load_model() primero.")
    
    try:
        # Transformar síntomas a vector binario
        X = _mlb.transform([symptoms])
        
        # Realizar predicción
        predictions = _model.predict(X, verbose=0)[0]
        
        # Obtener top K predicciones
        top_indices = predictions.argsort()[::-1][:top_k]
        
        results = []
        for idx in top_indices:
            confidence = float(predictions[idx])
            if confidence >= min_confidence:
                results.append({
                    "disease": _class_names[idx],
                    "confidence": round(confidence * 100, 2)  # Convertir a porcentaje
                })
        
        return results
        
    except Exception as e:
        logger.error(f"Error durante la predicción: {str(e)}", exc_info=True)
        raise


def get_model_info() -> dict:
    """
    Retorna información sobre el modelo cargado.
    
    Returns:
        Diccionario con información del modelo
    """
    if not _model_loaded:
        return {"loaded": False}
    
    source = "Azure Blob Storage" if USE_BLOB_STORAGE and AZURE_STORAGE_AVAILABLE else "Local files"
    return {
        "loaded": True,
        "source": source,
        "model_file": MODEL_FILE,
        "num_symptoms": len(_mlb.classes_) if _mlb else 0,
        "num_classes": len(_class_names) if _class_names else 0,
        "classes": _class_names if _class_names else []
    }


# Función auxiliar para inicializar el modelo al importar
def initialize():
    """Inicializa el modelo al inicio del servidor."""
    try:
        load_model()
    except Exception as e:
        logger.warning(f"No se pudo cargar el modelo al inicializar: {str(e)}")
        logger.warning("El modelo se intentará cargar en la primera predicción")

