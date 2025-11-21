from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # ✅ Importante

@app.route('/api/message')
def get_message():
    return jsonify({"message": "¡Hola desde Flask!"})

@app.route('/api/diagnostico', methods=['POST'])
def diagnostico():
    try:
        data = request.json or {}
        sintomas = data.get("sintomas", {})
        
        resultado = {
            "predictions": [
                {"disease": "Gripe", "confidence": 78},
                {"disease": "Resfriado", "confidence": 45}
            ],
            "received": {
                "count": len(sintomas),
                "sintomas": sintomas
            }
        }
        return jsonify(resultado), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)