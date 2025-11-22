import logging
from flask import Flask, jsonify, request
from flask_cors import CORS

from config import (
    FLASK_HOST, FLASK_PORT, FLASK_DEBUG,
    TOP_K_PREDICTIONS, MIN_CONFIDENCE, CORS_ORIGINS
)
from model_loader import load_model, predict, get_model_info, initialize as initialize_model
from symptom_processor import process_symptoms, initialize as initialize_symptom_processor

# Configurar logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Crear aplicación Flask
app = Flask(__name__)

# Configurar CORS
cors_origins = CORS_ORIGINS.split(",") if "," in CORS_ORIGINS else [CORS_ORIGINS]
CORS(app, resources={r"/api/*": {"origins": cors_origins}})

# Inicializar modelo y procesador de síntomas al iniciar el servidor
logger.info("Inicializando servidor...")
try:
    initialize_model()
    initialize_symptom_processor()
    logger.info("Servidor inicializado correctamente")
except Exception as e:
    logger.error(f"Error al inicializar: {str(e)}")


@app.route('/health', methods=['GET'])
def health_check():
    """Endpoint de health check para Azure."""
    model_info = get_model_info()
    
    return jsonify({
        "status": "healthy" if model_info.get("loaded") else "degraded",
        "model_loaded": model_info.get("loaded", False),
        "service": "disease-diagnosis-api"
    }), 200


@app.route('/api/model/info', methods=['GET'])
def model_info():
    """Endpoint para obtener información del modelo."""
    try:
        info = get_model_info()
        return jsonify(info), 200
    except Exception as e:
        logger.error(f"Error obteniendo información del modelo: {str(e)}")
        return jsonify({"error": str(e)}), 500


@app.route('/api/message', methods=['GET'])
def get_message():
    """Endpoint de prueba simple."""
    return jsonify({"message": "API de diagnóstico de enfermedades funcionando correctamente"})


@app.route('/api/diagnostico', methods=['POST'])
def diagnostico():
    """
    Endpoint principal para diagnóstico de enfermedades.
    
    Espera un JSON con formato:
    {
        "sintomas": {
            "Fiebre": 7,
            "Tos": 5,
            ...
        }
    }
    
    Retorna:
    {
        "predictions": [
            {"disease": "Nombre", "confidence": 85.5},
            ...
        ],
        "processed_symptoms": ["sintoma1", "sintoma2", ...]
    }
    """
    try:
        # Validar entrada
        if not request.is_json:
            return jsonify({
                "error": "Content-Type debe ser application/json"
            }), 400
        
        data = request.get_json() or {}
        sintomas = data.get("sintomas", {})
        
        if not sintomas:
            return jsonify({
                "error": "El campo 'sintomas' es requerido y no puede estar vacío"
            }), 400
        
        # Validar que sintomas sea un diccionario
        if not isinstance(sintomas, dict):
            return jsonify({
                "error": "El campo 'sintomas' debe ser un objeto/diccionario"
            }), 400
        
        # Procesar síntomas
        processed_symptoms = process_symptoms(sintomas)
        
        if not processed_symptoms:
            return jsonify({
                "error": "No se encontraron síntomas válidos con severidad > 0",
                "predictions": []
            }), 200
        
        # Asegurar que el modelo esté cargado
        try:
            load_model()
        except Exception as e:
            logger.error(f"Error cargando modelo: {str(e)}")
            return jsonify({
                "error": "Error interno: el modelo no pudo ser cargado",
                "details": str(e)
            }), 500
        
        # Realizar predicción
        predictions = predict(
            symptoms=processed_symptoms,
            top_k=TOP_K_PREDICTIONS,
            min_confidence=MIN_CONFIDENCE
        )
        
        # Preparar respuesta
        resultado = {
            "predictions": predictions,
            "processed_symptoms": processed_symptoms,
            "total_symptoms": len(processed_symptoms)
        }
        
        logger.info(f"Predicción exitosa: {len(predictions)} resultados")
        return jsonify(resultado), 200
        
    except ValueError as e:
        logger.warning(f"Error de validación: {str(e)}")
        return jsonify({"error": f"Error de validación: {str(e)}"}), 400
        
    except Exception as e:
        logger.error(f"Error procesando diagnóstico: {str(e)}", exc_info=True)
        return jsonify({
            "error": "Error interno del servidor",
            "details": str(e)
        }), 500


@app.errorhandler(404)
def not_found(error):
    """Manejo de rutas no encontradas."""
    return jsonify({"error": "Endpoint no encontrado"}), 404


@app.errorhandler(500)
def internal_error(error):
    """Manejo de errores internos."""
    logger.error(f"Error interno: {str(error)}", exc_info=True)
    return jsonify({"error": "Error interno del servidor"}), 500


if __name__ == '__main__':
    logger.info(f"Iniciando servidor en http://{FLASK_HOST}:{FLASK_PORT}")
    app.run(host=FLASK_HOST, port=FLASK_PORT, debug=FLASK_DEBUG)


