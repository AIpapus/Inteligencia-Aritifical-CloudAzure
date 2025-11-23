# Guía de Despliegue en Azure

Esta guía detalla el proceso completo para desplegar el backend en Azure App Service con los modelos almacenados en Azure Blob Storage.

## Prerequisitos

- Azure CLI instalado y configurado (`az login`)
- Archivos del modelo descargados de Google Colab:
  - `health_nn_model.keras`
  - `symptom_vocab.json`
  - `class_names.json`
- Cuenta de Azure con permisos para crear recursos

## Paso 1: Configurar Azure Blob Storage

### 1.1 Crear Storage Account

```bash
# Variables de configuración (ajusta según tus necesidades)
RESOURCE_GROUP="disease-diagnosis-rg"
STORAGE_ACCOUNT="diseasediagstorage$(date +%s)"  # Nombre único
LOCATION="eastus"
CONTAINER_NAME="models"

# Crear Resource Group
az group create --name $RESOURCE_GROUP --location $LOCATION

# Crear Storage Account
az storage account create \
  --resource-group $RESOURCE_GROUP \
  --name $STORAGE_ACCOUNT \
  --location $LOCATION \
  --sku Standard_LRS

echo "Storage Account creado: $STORAGE_ACCOUNT"
```

### 1.2 Obtener Clave de Acceso

```bash
# Obtener la clave de acceso (guarda esta clave de forma segura)
STORAGE_KEY=$(az storage account keys list \
  --resource-group $RESOURCE_GROUP \
  --account-name $STORAGE_ACCOUNT \
  --query '[0].value' \
  --output tsv)

echo "Clave de acceso obtenida (guárdala de forma segura)"
```

### 1.3 Crear Container para Modelos

```bash
# Crear container
az storage container create \
  --account-name $STORAGE_ACCOUNT \
  --name $CONTAINER_NAME \
  --auth-mode key \
  --account-key $STORAGE_KEY

echo "Container '$CONTAINER_NAME' creado"
```

### 1.4 Subir Archivos del Modelo

**Asegúrate de tener los archivos en `backend/models/` primero**

```bash
cd backend

# Configurar variables de entorno temporalmente
export AZURE_STORAGE_ACCOUNT_NAME=$STORAGE_ACCOUNT
export AZURE_STORAGE_ACCOUNT_KEY=$STORAGE_KEY
export AZURE_STORAGE_CONTAINER_NAME=$CONTAINER_NAME

# Subir archivos usando el script
python deploy_to_azure.py

# O subir manualmente usando Azure CLI
az storage blob upload \
  --account-name $STORAGE_ACCOUNT \
  --container-name $CONTAINER_NAME \
  --name health_nn_model.keras \
  --file models/health_nn_model.keras \
  --auth-mode key \
  --account-key $STORAGE_KEY

az storage blob upload \
  --account-name $STORAGE_ACCOUNT \
  --container-name $CONTAINER_NAME \
  --name symptom_vocab.json \
  --file models/symptom_vocab.json \
  --auth-mode key \
  --account-key $STORAGE_KEY

az storage blob upload \
  --account-name $STORAGE_ACCOUNT \
  --container-name $CONTAINER_NAME \
  --name class_names.json \
  --file models/class_names.json \
  --auth-mode key \
  --account-key $STORAGE_KEY

echo "Archivos del modelo subidos a Blob Storage"
```

### 1.5 Verificar Archivos en Blob Storage

```bash
az storage blob list \
  --account-name $STORAGE_ACCOUNT \
  --container-name $CONTAINER_NAME \
  --auth-mode key \
  --account-key $STORAGE_KEY \
  --output table
```

## Paso 2: Desplegar a Azure App Service

### 2.1 Crear App Service Plan

```bash
APP_SERVICE_PLAN="disease-diagnosis-plan"
APP_NAME="disease-diagnosis-api-$(date +%s)"  # Nombre único

# Crear App Service Plan
az appservice plan create \
  --name $APP_SERVICE_PLAN \
  --resource-group $RESOURCE_GROUP \
  --sku B1 \
  --is-linux

echo "App Service Plan creado: $APP_SERVICE_PLAN"
```

### 2.2 Crear Web App

```bash
# Crear Web App
az webapp create \
  --resource-group $RESOURCE_GROUP \
  --plan $APP_SERVICE_PLAN \
  --name $APP_NAME \
  --runtime "PYTHON:3.11"

echo "Web App creada: $APP_NAME"
echo "URL: https://$APP_NAME.azurewebsites.net"
```

### 2.3 Configurar Variables de Entorno

```bash
# Configurar variables de entorno
az webapp config appsettings set \
  --resource-group $RESOURCE_GROUP \
  --name $APP_NAME \
  --settings \
    USE_BLOB_STORAGE=true \
    AZURE_STORAGE_ACCOUNT_NAME=$STORAGE_ACCOUNT \
    AZURE_STORAGE_ACCOUNT_KEY=$STORAGE_KEY \
    AZURE_STORAGE_CONTAINER_NAME=$CONTAINER_NAME \
    FLASK_DEBUG=false \
    FLASK_HOST=0.0.0.0 \
    PORT=8000 \
    TOP_K_PREDICTIONS=5 \
    MIN_CONFIDENCE=0.01

echo "Variables de entorno configuradas"
```

### 2.4 Configurar Startup Command

```bash
# Configurar comando de inicio
az webapp config set \
  --resource-group $RESOURCE_GROUP \
  --name $APP_NAME \
  --startup-file "gunicorn --bind 0.0.0.0:8000 --workers 2 --timeout 120 app:app"

echo "Comando de inicio configurado"
```

### 2.5 Desplegar Código

**Opción A: Deploy desde ZIP**

```bash
cd backend

# Crear archivo ZIP (excluyendo modelos y venv)
zip -r ../deploy.zip . \
  -x "models/*" \
  -x "venv/*" \
  -x "__pycache__/*" \
  -x "*.pyc" \
  -x ".git/*"

# Desplegar
az webapp deployment source config-zip \
  --resource-group $RESOURCE_GROUP \
  --name $APP_NAME \
  --src ../deploy.zip

echo "Código desplegado"
```

**Opción B: Deploy desde Git**

```bash
# Configurar deployment desde GitHub (ejemplo)
az webapp deployment source config \
  --name $APP_NAME \
  --resource-group $RESOURCE_GROUP \
  --repo-url https://github.com/tu-usuario/tu-repo \
  --branch main \
  --manual-integration
```

## Paso 3: Verificar Despliegue

### 3.1 Ver Logs

```bash
# Ver logs en tiempo real
az webapp log tail \
  --resource-group $RESOURCE_GROUP \
  --name $APP_NAME

# O descargar logs
az webapp log download \
  --resource-group $RESOURCE_GROUP \
  --name $APP_NAME \
  --log-file app-logs.zip
```

### 3.2 Probar Endpoints

```bash
# Health check
curl https://$APP_NAME.azurewebsites.net/health

# Info del modelo
curl https://$APP_NAME.azurewebsites.net/api/model/info

# Test de diagnóstico
curl -X POST https://$APP_NAME.azurewebsites.net/api/diagnostico \
  -H "Content-Type: application/json" \
  -d '{
    "sintomas": {
      "Fiebre": 7,
      "Tos": 5
    }
  }'
```

## Paso 4: Configurar CORS para Frontend

Si tu frontend está en Azure Static Web Apps:

```bash
FRONTEND_URL="https://tu-frontend.azurestaticapps.net"

az webapp config appsettings set \
  --resource-group $RESOURCE_GROUP \
  --name $APP_NAME \
  --settings CORS_ORIGINS=$FRONTEND_URL
```

## Resumen de Recursos Creados

Guarda esta información de forma segura:

```bash
echo "=== RESUMEN DE RECURSOS ==="
echo "Resource Group: $RESOURCE_GROUP"
echo "Storage Account: $STORAGE_ACCOUNT"
echo "Storage Key: [GUARDADA DE FORMA SEGURA]"
echo "Container: $CONTAINER_NAME"
echo "App Service: $APP_NAME"
echo "URL: https://$APP_NAME.azurewebsites.net"
echo "=========================="
```

## Actualizar Modelo sin Redesplegar

Cuando tengas un nuevo modelo entrenado:

1. Sube los nuevos archivos a Blob Storage (reemplazando los existentes)
2. Reinicia el App Service:
   ```bash
   az webapp restart --resource-group $RESOURCE_GROUP --name $APP_NAME
   ```
3. El modelo se descargará automáticamente al reiniciar

¡Listo! Tu backend está desplegado en Azure App Service con los modelos en Blob Storage.



