"""
Módulo para procesamiento y normalización de síntomas.
Extraído y adaptado del notebook de entrenamiento.
"""
import re
from typing import List


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


def process_symptoms(symptoms: dict) -> List[str]:
    """
    Procesa un diccionario de síntomas con sus severidades
    y los convierte en una lista de síntomas normalizados.
    
    Args:
        symptoms: Diccionario con formato {sintoma: severidad (0-10)}
        
    Returns:
        Lista de síntomas normalizados con severidad > 0
    """
    processed = []
    
    for symptom, severity in symptoms.items():
        if severity and severity > 0:
            normalized = normalize_symptom(symptom)
            if normalized:
                processed.append(normalized)
    
    # Eliminar duplicados manteniendo el orden
    seen = set()
    unique = []
    for item in processed:
        if item not in seen:
            seen.add(item)
            unique.append(item)
    
    return unique

