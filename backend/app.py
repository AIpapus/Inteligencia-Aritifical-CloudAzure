import logging
import os
from flask import Flask, jsonify, request, send_from_directory
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

# Configurar CORS - agregar la ruta de imágenes
cors_origins = CORS_ORIGINS.split(",") if "," in CORS_ORIGINS else [CORS_ORIGINS]
CORS(app, resources={
    r"/api/*": {"origins": cors_origins},
    r"/imagenes/*": {"origins": cors_origins}
})

# Inicializar modelo y procesador de síntomas al iniciar el servidor
logger.info("Inicializando servidor...")
try:
    initialize_model()
    initialize_symptom_processor()
    logger.info("Servidor inicializado correctamente")
except Exception as e:
    logger.error(f"Error al inicializar: {str(e)}")


# =============================================
# NUEVA RUTA PARA SERVIR IMÁGENES
# =============================================
@app.route('/imagenes/<path:filename>')
def serve_disease_images(filename):
    """Sirve imágenes de enfermedades desde la carpeta public."""
    images_folder = os.path.join(
        app.root_path,
        'public',
        'ENFERMEDADES INTELIGENCIA ARTIFICIAL'
    )
    logger.info(f"Sirviendo imagen: {filename} desde {images_folder}")
    return send_from_directory(images_folder, filename)


@app.route('/test-imagenes')
def test_images():
    """Endpoint de prueba para verificar que las imágenes están accesibles."""
    images_folder = os.path.join(
        app.root_path,
        'public',
        'ENFERMEDADES INTELIGENCIA ARTIFICIAL'
    )
    
    if os.path.exists(images_folder):
        files = [f for f in os.listdir(images_folder) if f.endswith(('.jpg', '.jpeg', '.png', '.webp'))]
        return jsonify({
            "status": "ok",
            "folder": images_folder,
            "images_found": len(files),
            "files": files[:20],  # Mostrar solo las primeras 20
            "example_url": f"http://localhost:{FLASK_PORT}/imagenes/{files[0]}" if files else None
        })
    
    return jsonify({
        "status": "error",
        "folder": images_folder,
        "message": "Carpeta no encontrada"
    }), 404
# =============================================


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
    """Endpoint principal para diagnóstico de enfermedades."""
    try:
        if not request.is_json:
            return jsonify({"error": "Content-Type debe ser application/json"}), 400
        
        data = request.get_json() or {}
        sintomas = data.get("sintomas", {})
        
        if not sintomas:
            return jsonify({"error": "El campo 'sintomas' es requerido y no puede estar vacío"}), 400
        
        if not isinstance(sintomas, dict):
            return jsonify({"error": "El campo 'sintomas' debe ser un objeto/diccionario"}), 400
        
        processed_symptoms = process_symptoms(sintomas)
        
        if not processed_symptoms:
            return jsonify({
                "error": "No se encontraron síntomas válidos con severidad > 0",
                "predictions": []
            }), 200
        
        try:
            load_model()
        except Exception as e:
            logger.error(f"Error cargando modelo: {str(e)}")
            return jsonify({
                "error": "Error interno: el modelo no pudo ser cargado",
                "details": str(e)
            }), 500
        
        predictions = predict(
            symptoms=processed_symptoms,
            top_k=TOP_K_PREDICTIONS,
            min_confidence=MIN_CONFIDENCE
        )
        
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
        return jsonify({"error": "Error interno del servidor", "details": str(e)}), 500


@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Endpoint no encontrado"}), 404


@app.errorhandler(500)
def internal_error(error):
    logger.error(f"Error interno: {str(error)}", exc_info=True)
    return jsonify({"error": "Error interno del servidor"}), 500


if __name__ == '__main__':
    logger.info(f"Iniciando servidor en http://{FLASK_HOST}:{FLASK_PORT}")
    app.run(host=FLASK_HOST, port=FLASK_PORT, debug=FLASK_DEBUG)

