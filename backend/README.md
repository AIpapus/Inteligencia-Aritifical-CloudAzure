# Backend API - Diagnóstico de Enfermedades con AI

Backend Flask con modelo de Deep Learning (TensorFlow) para diagnóstico de enfermedades basado en síntomas.

## Estructura del Proyecto

```
backend/
├── app.py                  # Aplicación Flask principal
├── model_loader.py         # Carga y gestión del modelo TensorFlow
├── symptom_processor.py    # Procesamiento y normalización de síntomas
├── config.py               # Configuración y variables de entorno
├── requirements.txt        # Dependencias de Python
├── Dockerfile              # Imagen Docker para producción
├── .dockerignore          # Archivos excluidos del build Docker
├── models/                 # Carpeta para archivos del modelo
│   ├── health_nn_model.keras
│   ├── symptom_vocab.json
│   └── class_names.json
└── README.md              # Este archivo
```

## Configuración Inicial

### 1. Archivos del Modelo

#### Para Desarrollo Local:

Descarga los siguientes archivos de Google Colab y colócalos en la carpeta `backend/models/`:

- `health_nn_model.keras` - Modelo de TensorFlow entrenado
- `symptom_vocab.json` - Vocabulario de síntomas
- `class_names.json` - Nombres de las enfermedades/clases

**Nota:** Asegúrate de que estos archivos estén en `backend/models/` antes de ejecutar el servidor localmente.

#### Para Producción en Azure (Recomendado):

Los archivos del modelo se almacenan en **Azure Blob Storage**, NO en el código. 

**Ventajas:**
- No necesitas incluir archivos grandes en el despliegue
- Puedes actualizar el modelo sin redesplegar el App Service
- Más económico para almacenar archivos grandes

Ver la sección **"Despliegue en Azure (App Service + Blob Storage)"** más abajo para instrucciones detalladas.

### 2. Instalar Dependencias

```bash
cd backend
pip install -r requirements.txt
```

O usando un entorno virtual:

```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Configurar Variables de Entorno (Opcional)

Crea un archivo `.env` en la carpeta `backend/` basado en `.env.example`:

```env
FLASK_HOST=0.0.0.0
FLASK_PORT=5000
FLASK_DEBUG=False
TOP_K_PREDICTIONS=5
MIN_CONFIDENCE=0.01
CORS_ORIGINS=*
```

## Ejecutar el Servidor

### Desarrollo Local

```bash
python app.py
```

El servidor estará disponible en `http://localhost:5000`

### Producción con Gunicorn

```bash
gunicorn --bind 0.0.0.0:5000 --workers 2 --timeout 120 app:app
```

## Endpoints de la API

### 1. Health Check

```bash
GET /health
```

Retorna el estado del servidor y si el modelo está cargado.

**Respuesta:**
```json
{
  "status": "healthy",
  "model_loaded": true,
  "service": "disease-diagnosis-api"
}
```

### 2. Información del Modelo

```bash
GET /api/model/info
```

Retorna información sobre el modelo cargado.

### 3. Diagnóstico (Endpoint Principal)

```bash
POST /api/diagnostico
Content-Type: application/json

{
  "sintomas": {
    "Fiebre": 7,
    "Tos": 5,
    "Dolor de cabeza": 3
  }
}
```

**Respuesta:**
```json
{
  "predictions": [
    {
      "disease": "Infección por Norovirus",
      "confidence": 85.5
    },
    {
      "disease": "Roséola",
      "confidence": 12.3
    }
  ],
  "processed_symptoms": ["fiebre", "tos", "dolor de cabeza"],
  "total_symptoms": 3
}
```

**Nota:** Los síntomas deben ser un diccionario donde las claves son los nombres de los síntomas y los valores son números del 0-10 representando la severidad. Solo los síntomas con severidad > 0 se procesarán.

## Construcción de Imagen Docker

```bash
cd backend
docker build -t disease-diagnosis-api .
```

## Ejecutar Contenedor Docker

```bash
docker run -p 5000:5000 \
  -v $(pwd)/models:/app/models \
  disease-diagnosis-api
```

O si los modelos están dentro de la imagen:

```bash
docker run -p 5000:5000 disease-diagnosis-api
```

## Despliegue en Azure (App Service + Blob Storage)

### Arquitectura Recomendada

Este proyecto está optimizado para la siguiente arquitectura en Azure:

- **Azure App Service** - Para el backend API (Python/Flask)
- **Azure Blob Storage** - Para almacenar los archivos del modelo (.keras, .json)
- **Azure Static Web Apps** - Para el frontend (Next.js)

**Ventajas:**
- Los archivos del modelo NO se incluyen en el código del App Service
- Puedes actualizar el modelo sin redesplegar el App Service
- Blob Storage es más económico para archivos grandes
- Separación clara de responsabilidades

### 1. Configurar Azure Blob Storage

#### 1.1 Crear Storage Account

```bash
# Login a Azure
az login

# Crear Resource Group (si no existe)
az group create --name myResourceGroup --location eastus

# Crear Storage Account
az storage account create \
  --resource-group myResourceGroup \
  --name mystorageaccount \
  --location eastus \
  --sku Standard_LRS

# Obtener las claves de acceso
az storage account keys list \
  --resource-group myResourceGroup \
  --account-name mystorageaccount
```

#### 1.2 Crear Container para Modelos

```bash
# Crear container llamado "models"
az storage container create \
  --account-name mystorageaccount \
  --name models \
  --auth-mode login
```

#### 1.3 Subir Archivos del Modelo a Blob Storage

**Opción A: Usando Azure Portal**
1. Ve a tu Storage Account en Azure Portal
2. Navega a Containers > models
3. Sube los archivos: `health_nn_model.keras`, `symptom_vocab.json`, `class_names.json`

**Opción B: Usando Azure CLI**

```bash
# Desde la carpeta donde están tus archivos del modelo
az storage blob upload \
  --account-name mystorageaccount \
  --container-name models \
  --name health_nn_model.keras \
  --file backend/models/health_nn_model.keras \
  --auth-mode login

az storage blob upload \
  --account-name mystorageaccount \
  --container-name models \
  --name symptom_vocab.json \
  --file backend/models/symptom_vocab.json \
  --auth-mode login

az storage blob upload \
  --account-name mystorageaccount \
  --container-name models \
  --name class_names.json \
  --file backend/models/class_names.json \
  --auth-mode login
```

**Opción C: Usando el script Python (Recomendado)**

```bash
cd backend
python deploy_to_azure.py
```

Asegúrate de configurar las variables de entorno antes:
```bash
export AZURE_STORAGE_ACCOUNT_NAME=mystorageaccount
export AZURE_STORAGE_ACCOUNT_KEY=<tu-clave-de-acceso>
export AZURE_STORAGE_CONTAINER_NAME=models
```

### 2. Desplegar a Azure App Service

#### 2.1 Crear App Service Plan

```bash
az appservice plan create \
  --name myAppServicePlan \
  --resource-group myResourceGroup \
  --sku B1 \
  --is-linux
```

#### 2.2 Crear Web App

```bash
az webapp create \
  --resource-group myResourceGroup \
  --plan myAppServicePlan \
  --name disease-diagnosis-api \
  --runtime "PYTHON:3.11"
```

#### 2.3 Configurar Variables de Entorno

```bash
# Habilitar Blob Storage
az webapp config appsettings set \
  --resource-group myResourceGroup \
  --name disease-diagnosis-api \
  --settings \
    USE_BLOB_STORAGE=true \
    AZURE_STORAGE_ACCOUNT_NAME=mystorageaccount \
    AZURE_STORAGE_ACCOUNT_KEY=<tu-clave-de-acceso> \
    AZURE_STORAGE_CONTAINER_NAME=models \
    FLASK_DEBUG=false \
    PORT=8000

# Configurar puerto (Azure App Service usa el puerto definido en PORT)
az webapp config set \
  --resource-group myResourceGroup \
  --name disease-diagnosis-api \
  --startup-file "gunicorn --bind 0.0.0.0:8000 --workers 2 --timeout 120 app:app"
```

#### 2.4 Desplegar Código

**Opción A: Deploy desde Git (Recomendado)**

```bash
# Configurar deployment source
az webapp deployment source config \
  --name disease-diagnosis-api \
  --resource-group myResourceGroup \
  --repo-url <tu-repo-url> \
  --branch main \
  --manual-integration
```

**Opción B: Deploy usando Azure CLI**

```bash
cd backend
az webapp up \
  --resource-group myResourceGroup \
  --name disease-diagnosis-api \
  --runtime "PYTHON:3.11"
```

**Opción C: Deploy usando ZIP**

```bash
# Crear archivo ZIP con el código (sin models/)
cd backend
zip -r ../deploy.zip . -x "models/*" -x "venv/*" -x "__pycache__/*"

# Desplegar
az webapp deployment source config-zip \
  --resource-group myResourceGroup \
  --name disease-diagnosis-api \
  --src ../deploy.zip
```

### 3. Verificar Despliegue

```bash
# Ver logs en tiempo real
az webapp log tail \
  --resource-group myResourceGroup \
  --name disease-diagnosis-api

# Verificar health check
curl https://disease-diagnosis-api.azurewebsites.net/health

# Ver información del modelo
curl https://disease-diagnosis-api.azurewebsites.net/api/model/info
```

### 4. Configurar CORS para Static Web Apps

Si tu frontend está en Azure Static Web Apps, actualiza la variable de entorno:

```bash
az webapp config appsettings set \
  --resource-group myResourceGroup \
  --name disease-diagnosis-api \
  --settings CORS_ORIGINS="https://<tu-static-web-app>.azurestaticapps.net"
```

## Solución de Problemas

### El modelo no carga

- Verifica que los archivos del modelo estén en `backend/models/`
- Verifica que los nombres de los archivos coincidan con los especificados en `config.py`
- Revisa los logs del servidor para ver errores específicos

### Error al hacer predicciones

- Asegúrate de que el formato de los síntomas sea correcto
- Verifica que al menos un síntoma tenga severidad > 0
- Revisa que los síntomas estén normalizados correctamente

### Problemas con Docker

- Asegúrate de que los archivos del modelo estén incluidos en el contexto de Docker
- Verifica que el Dockerfile copia correctamente los archivos del modelo
- Revisa los logs del contenedor: `docker logs <container-id>`

## Notas Importantes

- El modelo se carga una sola vez al iniciar el servidor (singleton pattern)
- La primera carga del modelo puede tardar varios segundos
- El modelo requiere memoria suficiente (recomendado: al menos 2GB RAM)
- TensorFlow puede ser pesado; considera usar la versión CPU-only si no necesitas GPU

## Licencia

Este proyecto es parte de un sistema de diagnóstico de enfermedades con fines educativos.

