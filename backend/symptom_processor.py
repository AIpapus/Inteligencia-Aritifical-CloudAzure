"""
Módulo para procesamiento y normalización de síntomas.
Extraído y adaptado del notebook de entrenamiento.
Incluye mapeo de síntomas nuevos a equivalentes del vocabulario del modelo.
"""
import json
import logging
import re
from pathlib import Path
from typing import List, Optional, Set

from config import SYMPTOM_VOCAB_PATH

logger = logging.getLogger(__name__)

# Cache para el vocabulario de síntomas válidos
_valid_symptoms: Optional[Set[str]] = None


def load_vocab() -> Set[str]:
    """
    Carga el vocabulario de síntomas válidos desde el archivo JSON.
    
    Returns:
        Conjunto de síntomas válidos normalizados
    """
    global _valid_symptoms
    
    if _valid_symptoms is not None:
        return _valid_symptoms
    
    try:
        vocab_path = Path(SYMPTOM_VOCAB_PATH)
        if not vocab_path.exists():
            logger.warning(f"Archivo de vocabulario no encontrado: {vocab_path}")
            logger.warning("Se usará mapeo básico sin validación de vocabulario")
            _valid_symptoms = set()
            return _valid_symptoms
        
        with open(vocab_path, 'r', encoding='utf-8') as f:
            symptom_vocab = json.load(f)
        
        # Normalizar todos los síntomas del vocabulario
        _valid_symptoms = {normalize_symptom(s) for s in symptom_vocab if s}
        logger.info(f"Vocabulario cargado: {len(_valid_symptoms)} síntomas válidos")
        
        return _valid_symptoms
        
    except Exception as e:
        logger.error(f"Error cargando vocabulario: {str(e)}")
        logger.warning("Se usará mapeo básico sin validación de vocabulario")
        _valid_symptoms = set()
        return _valid_symptoms


def normalize_symptom(s: str) -> str:
    """
    Normaliza un síntoma eliminando espacios, caracteres especiales
    y aplicando mapeos estándar.
    
    Args:
        s: Síntoma en formato texto
        
    Returns:
        Síntoma normalizado en minúsculas
    """
    if not isinstance(s, str) or not s.strip():
        return ''
    
    s = s.strip().strip(')"(')
    s = s.replace(r'\-', '-')
    s = re.sub(r'\s+', ' ', s)
    s = s.lower()

    # Mapeo de variaciones comunes
    mapping = {
        'rashes': 'rash',
        'running nose': 'runny nose',
        'headache and body aches': 'body aches',
    }
    
    if s in mapping:
        s = mapping[s]
    
    return s


def map_unknown_symptom(symptom: str) -> Optional[str]:
    """
    Mapea un síntoma desconocido a un síntoma equivalente del vocabulario.
    Esta función incluye mapeos para TODOS los síntomas del frontend.
    
    Args:
        symptom: Síntoma normalizado que no está en el vocabulario
        
    Returns:
        Síntoma equivalente del vocabulario o None si no hay equivalente
    """
    symptom_mapping = {
        # Síntomas que ya están en el vocabulario (se retornan directamente)
        'fiebre': 'fiebre',
        'dolor de cabeza': 'dolor de cabeza',
        'fatiga': 'fatiga',
        'tos seca': 'tos seca',
        'tos': 'tos',
        'náuseas': 'náuseas',
        'dolor abdominal': 'dolor abdominal',
        'dificultad para tragar': 'dificultad para tragar',
        'escalofríos': 'escalofríos',
        'deshidratación': 'deshidratación',
        'dolor en las articulaciones': 'dolor en las articulaciones',
        'dolores musculares': 'dolores musculares',
        'ganglios linfáticos inflamados': 'ganglios linfáticos inflamados',
        
        # Mapeos de síntomas similares
        'fiebre alta': 'fiebre alta',
        'fiebre prolongada': 'fiebre',
        'dolor articular': 'dolor en las articulaciones',
        'dolor muscular': 'dolores musculares',
        'calambres musculares': 'dolores musculares',
        'rigidez muscular': 'dolores musculares',
        'rigidez de cuello': 'dolores musculares',
        'espasmos': 'dolores musculares',  # Espasmos musculares
        
        'erupción cutánea': 'erupción',
        'sarpullido': 'erupción',
        'rash': 'erupción',
        'erupciones': 'erupción',
        
        'tos persistente': 'tos',
        'tos crónica': 'tos',
        'ataques de tos severos': 'tos',
        
        'ganglios inflamados': 'ganglios linfáticos inflamados',
        'glándulas inflamadas': 'ganglios linfáticos inflamados',
        
        'sudor nocturno': 'sudoración',
        'sudores nocturnos': 'sudoración',
        'sudoración excesiva': 'sudoración',
        
        'diarrea acuosa': 'diarrea',
        
        'fotofobia': 'sensibilidad a la luz',
        
        'conjuntivitis': 'ojo rosado',
        'ojos rojos': 'ojo rosado',
        'dolor detrás de los ojos': 'ardor en los ojos',
        
        'manchas de koplik': 'pequeñas manchas blancas en las mejillas',
        
        'agitación': 'irritabilidad',
        
        'hemorragias': 'heces con sangre',  # Aproximado - sangrado
        
        'estreñimiento': 'dolor abdominal',  # Aproximado - problema digestivo
        
        # Síntomas sin equivalente exacto - mapeamos a síntomas genéricos relacionados
        'ictericia': 'malestar general',  # Color amarillo -> malestar general
        'orina oscura': 'malestar general',  # Síntoma hepático -> malestar general
        'pérdida de olfato': 'malestar general',  # Síntoma neurológico -> malestar general
        'pérdida de peso': 'malestar general',  # Síntoma sistémico -> malestar general
        'pérdida de apetito': 'malestar general',  # Síntoma digestivo -> malestar general
        'hidrofobia': 'irritabilidad',  # Miedo al agua -> irritabilidad/agitación
        'salivación excesiva': 'malestar',  # Síntoma neurológico -> malestar
        'insuficiencia renal': 'malestar general',  # Síntoma grave -> malestar general
        
        # Variaciones adicionales
        'cansancio': 'fatiga',
        'agotamiento': 'fatiga',
        'fatiga leve': 'fatiga',
        'malestar': 'malestar general',
    }
    
    return symptom_mapping.get(symptom)


def find_fallback_symptom(original_symptoms: List[str]) -> Optional[str]:
    """
    Encuentra un síntoma de respaldo genérico cuando ningún síntoma puede mapearse.
    Esto asegura que siempre haya al menos un síntoma válido.
    
    Args:
        original_symptoms: Lista de síntomas originales que fallaron
        
    Returns:
        Un síntoma genérico del vocabulario que siempre existe
    """
    # Síntomas genéricos que probablemente están en el vocabulario
    fallback_candidates = [
        'malestar general',
        'malestar',
        'fiebre',
        'fatiga',
        'dolor',
        'náuseas',
    ]
    
    valid_symptoms = load_vocab()
    
    # Buscar el primer fallback que esté en el vocabulario
    for fallback in fallback_candidates:
        if fallback in valid_symptoms:
            logger.info(f"Usando síntoma de respaldo: '{fallback}' para síntomas originales: {original_symptoms[:3]}")
            return fallback
    
    # Si ningún fallback está disponible, intentar usar el primer síntoma del vocabulario
    if valid_symptoms:
        fallback = list(valid_symptoms)[0]
        logger.warning(f"Usando primer síntoma del vocabulario como respaldo: '{fallback}'")
        return fallback
    
    return None


def validate_and_map_symptom(symptom: str) -> Optional[str]:
    if not symptom:
        return None
    
    valid_symptoms = load_vocab()
    
    # Si no hay vocabulario cargado, usar mapeo básico sin validación estricta el del Edgar
    if not valid_symptoms:
        mapped = map_unknown_symptom(symptom)
        if mapped:
            logger.info(f"Síntoma '{symptom}' mapeado a '{mapped}' (vocabulario no disponible)")
            return mapped
        else:
            logger.debug(f"Síntoma '{symptom}' sin mapeo disponible (vocabulario no disponible)")
            return None
    
    # Si el síntoma ya está en el vocabulario, retornarlo directamente
    if symptom in valid_symptoms:
        return symptom
    
    # Si no está en el vocabulario, intentar mapearlo
    mapped = map_unknown_symptom(symptom)
    
    if mapped is None:
        logger.debug(f"Síntoma '{symptom}' sin mapeo directo en diccionario")
        return None
    
    # Verificar que el síntoma mapeado esté en el vocabulario
    if mapped in valid_symptoms:
        logger.info(f"Síntoma '{symptom}' mapeado a '{mapped}'")
        return mapped
    else:
        logger.warning(f"Síntoma '{symptom}' mapeado a '{mapped}' pero este tampoco está en el vocabulario")
        return None


def process_symptoms(symptoms: dict) -> List[str]:
    """
    Procesa un diccionario de síntomas con sus severidades
    y los convierte en una lista de síntomas normalizados y válidos.
    
    Solo incluye síntomas que están en el vocabulario del modelo o
    que pueden ser mapeados a síntomas válidos.
    
    IMPORTANTE: Esta función garantiza que SIEMPRE haya al menos un síntoma válido,
    incluso si todos los síntomas originales fallan (usando un síntoma de respaldo).
    
    Args:
        symptoms: Diccionario con formato {sintoma: severidad (0-10)}
        
    Returns:
        Lista de síntomas normalizados y válidos con severidad > 0
    """
    processed = []
    failed_symptoms = []  # Para tracking de síntomas que fallaron
    
    for symptom, severity in symptoms.items():
        if severity and severity > 0:
            # Normalizar el síntoma
            normalized = normalize_symptom(symptom)
            
            if not normalized:
                continue
            
            # Validar y mapear si es necesario
            valid_symptom = validate_and_map_symptom(normalized)
            
            if valid_symptom:
                processed.append(valid_symptom)
            else:
                failed_symptoms.append(normalized)
    
    seen = set()
    unique = []
    for item in processed:
        if item not in seen:
            seen.add(item)
            unique.append(item)
    
    # GARANTIZAR que siempre haya al menos un síntoma válido
    if not unique and failed_symptoms:
        logger.warning(f"No se encontraron síntomas válidos después del procesamiento. Síntomas fallidos: {failed_symptoms}")
        fallback = find_fallback_symptom(failed_symptoms)
        if fallback:
            unique.append(fallback)
            logger.info(f"Se agregó síntoma de respaldo para garantizar al menos un síntoma válido: '{fallback}'")
        else:
            logger.error("No se pudo encontrar ningún síntoma de respaldo. El modelo puede fallar.")
    elif not unique:
        logger.warning("No se encontraron síntomas con severidad > 0")
    
    if unique:
        logger.info(f"Procesados {len(unique)} síntomas válidos: {unique}")
    
    return unique


def initialize():
    """
    Inicializa el procesador de síntomas cargando el vocabulario.
    Esta función debe llamarse al inicio del servidor para validar
    que el vocabulario esté disponible.
    """
    try:
        vocab = load_vocab()
        if vocab:
            logger.info(f"Procesador de síntomas inicializado: {len(vocab)} síntomas en vocabulario")
        else:
            logger.warning("Procesador de síntomas inicializado sin vocabulario (usará mapeo básico)")
    except Exception as e:
        logger.error(f"Error inicializando procesador de síntomas: {str(e)}")
        logger.warning("El procesador funcionará con capacidades limitadas")
