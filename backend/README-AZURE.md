# Guía de Despliegue en Azure

Esta guía explica cómo desplegar el backend en Azure usando **App Service** y **Blob Storage** para los archivos del modelo.

## Arquitectura en Azure

- **Azure App Service**: Backend Flask con modelo AI
- **Azure Blob Storage**: Almacenamiento de archivos del modelo (.keras, .json)
- **Azure Static Web Apps**: Frontend (Next.js)

## Ventajas de esta Arquitectura

✅ **No necesitas subir los archivos del modelo al repositorio** - Los archivos pesados están en Blob Storage  
✅ **Actualizar el modelo sin redeploy** - Solo actualiza los archivos en Blob Storage  
✅ **Mejor rendimiento** - Los modelos se descargan una vez al inicio  
✅ **Separación de responsabilidades** - Código vs. Datos  

## Paso 1: Crear Azure Blob Storage

### 1.1 Crear Storage Account

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
  --sku Standard_LRS \
  --kind StorageV2
```

### 1.2 Crear Container para Modelos

```bash
# Crear container para modelos
az storage container create \
  --account-name mystorageaccount \
  --name models \
  --public-access off  # Privado por defecto
```

### 1.3 Subir Archivos del Modelo

```bash
# Subir archivo del modelo (.keras)
az storage blob upload \
  --account-name mystorageaccount \
  --container-name models \
  --name health_nn_model.keras \
  --file ./health_nn_model.keras \
  --overwrite

# Subir vocabulario de síntomas (.json)
az storage blob upload \
  --account-name mystorageaccount \
  --container-name models \
  --name symptom_vocab.json \
  --file ./symptom_vocab.json \
  --overwrite

# Subir nombres de clases (.json)
az storage blob upload \
  --account-name mystorageaccount \
  --container-name models \
  --name class_names.json \
  --file ./class_names.json \
  --overwrite
```

### 1.4 Obtener Clave de Acceso

```bash
# Obtener clave de acceso primaria
az storage account keys list \
  --resource-group myResourceGroup \
  --account-name mystorageaccount \
  --query "[0].value" \
  --output tsv
```

**Guarda esta clave** - La necesitarás para configurar App Service.

## Paso 2: Crear Azure App Service

### 2.1 Crear App Service Plan

```bash
# Crear App Service Plan (Linux, Python)
az appservice plan create \
  --name myAppServicePlan \
  --resource-group myResourceGroup \
  --sku B1 \
  --is-linux
```

### 2.2 Crear Web App

```bash
# Crear Web App
az webapp create \
  --resource-group myResourceGroup \
  --plan myAppServicePlan \
  --name mydisease-diagnosis-api \
  --runtime "PYTHON|3.11"
```

### 2.3 Configurar Variables de Entorno

Configura las siguientes variables de entorno en Azure App Service:

```bash
# Configurar variables de entorno
az webapp config appsettings set \
  --resource-group myResourceGroup \
  --name mydisease-diagnosis-api \
  --settings \
    USE_BLOB_STORAGE=true \
    AZURE_STORAGE_ACCOUNT_NAME=mystorageaccount \
    AZURE_STORAGE_CONTAINER_NAME=models \
    AZURE_STORAGE_ACCOUNT_KEY="<TU_CLAVE_AQUI>" \
    MODEL_FILE=health_nn_model.keras \
    SYMPTOM_VOCAB_FILE=symptom_vocab.json \
    CLASS_NAMES_FILE=class_names.json \
    FLASK_DEBUG=false \
    TOP_K_PREDICTIONS=5 \
    MIN_CONFIDENCE=0.01 \
    CORS_ORIGINS="*"
```

### 2.4 Configurar Startup Command

Configura el comando de inicio para usar Gunicorn:

```bash
az webapp config set \
  --resource-group myResourceGroup \
  --name mydisease-diagnosis-api \
  --startup-file "gunicorn --bind 0.0.0.0:8000 --timeout 120 --workers 2 app:app"
```

**Nota:** Azure App Service usa el puerto `8000` por defecto para aplicaciones Python.

## Paso 3: Desplegar Código a App Service

### Opción A: Desplegar desde GitHub (Recomendado)

1. Conecta tu repositorio a Azure App Service:
   - En Azure Portal → Tu Web App → Deployment Center
   - Selecciona "GitHub" o "Local Git"
   - Conecta tu repositorio

2. Azure desplegará automáticamente cuando hagas push

### Opción B: Desplegar desde Local

```bash
# Instalar Azure CLI extension para Web Apps
az extension add --name webapp

# Desplegar código local
az webapp up \
  --resource-group myResourceGroup \
  --name mydisease-diagnosis-api \
  --runtime "PYTHON|3.11"
```

### Opción C: Usar ZIP Deploy

```bash
# Crear ZIP del código (sin venv ni __pycache__)
cd backend
zip -r ../app.zip . -x "venv/*" "__pycache__/*" "*.pyc" "models/*"

# Desplegar ZIP
az webapp deployment source config-zip \
  --resource-group myResourceGroup \
  --name mydisease-diagnosis-api \
  --src ../app.zip
```

## Paso 4: Usar Identidad Gestionada (Opcional pero Recomendado)

En lugar de usar claves de cuenta, puedes usar **Managed Identity** para mayor seguridad:

### 4.1 Habilitar Managed Identity

```bash
az webapp identity assign \
  --resource-group myResourceGroup \
  --name mydisease-diagnosis-api
```

### 4.2 Asignar Permisos a Storage Account

```bash
# Obtener principal ID
PRINCIPAL_ID=$(az webapp identity show \
  --resource-group myResourceGroup \
  --name mydisease-diagnosis-api \
  --query principalId \
  --output tsv)

# Obtener Storage Account Resource ID
STORAGE_ID=$(az storage account show \
  --resource-group myResourceGroup \
  --name mystorageaccount \
  --query id \
  --output tsv)

# Asignar rol "Storage Blob Data Reader"
az role assignment create \
  --assignee $PRINCIPAL_ID \
  --role "Storage Blob Data Reader" \
  --scope $STORAGE_ID
```

### 4.3 Actualizar Variables de Entorno

Si usas Managed Identity, **NO necesitas** `AZURE_STORAGE_ACCOUNT_KEY`. Solo necesitas:

```bash
az webapp config appsettings set \
  --resource-group myResourceGroup \
  --name mydisease-diagnosis-api \
  --settings \
    USE_BLOB_STORAGE=true \
    AZURE_STORAGE_ACCOUNT_NAME=mystorageaccount \
    AZURE_STORAGE_CONTAINER_NAME=models
```

El código automáticamente usará `DefaultAzureCredential()` que detectará la Managed Identity.

## Paso 5: Verificar Despliegue

### 5.1 Ver Logs

```bash
# Ver logs en tiempo real
az webapp log tail \
  --resource-group myResourceGroup \
  --name mydisease-diagnosis-api
```

### 5.2 Probar Health Check

```bash
# Probar endpoint de health
curl https://mydisease-diagnosis-api.azurewebsites.net/health
```

Deberías ver:
```json
{
  "status": "healthy",
  "model_loaded": true,
  "service": "disease-diagnosis-api"
}
```

### 5.3 Probar Endpoint de Diagnóstico

```bash
curl -X POST https://mydisease-diagnosis-api.azurewebsites.net/api/diagnostico \
  -H "Content-Type: application/json" \
  -d '{
    "sintomas": {
      "Fiebre": 7,
      "Tos": 5,
      "Dolor de cabeza": 3
    }
  }'
```

## Desarrollo Local (sin Blob Storage)

Para desarrollo local, puedes usar archivos locales en lugar de Blob Storage:

1. Coloca los archivos en `backend/models/`:
   - `health_nn_model.keras`
   - `symptom_vocab.json`
   - `class_names.json`

2. Asegúrate de que `USE_BLOB_STORAGE=false` (o no configurar la variable)

3. Ejecuta localmente:
   ```bash
   python app.py
   ```

## Actualizar Modelo

Para actualizar el modelo sin redeployar el código:

1. Sube los nuevos archivos a Blob Storage:
   ```bash
   az storage blob upload \
     --account-name mystorageaccount \
     --container-name models \
     --name health_nn_model.keras \
     --file ./nuevo_modelo.keras \
     --overwrite
   ```

2. Reinicia el App Service:
   ```bash
   az webapp restart \
     --resource-group myResourceGroup \
     --name mydisease-diagnosis-api
   ```

El modelo se descargará automáticamente en el próximo inicio.

## Troubleshooting

### El modelo no carga

- Verifica que los archivos existan en Blob Storage
- Revisa las variables de entorno (especialmente `AZURE_STORAGE_ACCOUNT_NAME`)
- Revisa los logs: `az webapp log tail ...`

### Error de autenticación

- Si usas Managed Identity, verifica que el rol esté asignado correctamente
- Si usas clave, verifica que `AZURE_STORAGE_ACCOUNT_KEY` sea correcta

### Timeout al cargar modelo

- Aumenta el timeout de Gunicorn en startup command
- Verifica que el App Service Plan tenga suficiente memoria
- Considera usar un plan con más recursos (S1 o superior)

## Costos Estimados

- **App Service B1**: ~$13/mes (1GB RAM, 1 vCPU)
- **Storage Account**: ~$0.01/GB/mes
- **Blob Storage**: ~$0.0004/GB para operaciones

Total estimado: **~$13-15/mes** para un proyecto pequeño.

## Referencias

- [Azure App Service Docs](https://docs.microsoft.com/azure/app-service/)
- [Azure Blob Storage Docs](https://docs.microsoft.com/azure/storage/blobs/)
- [Managed Identity para App Service](https://docs.microsoft.com/azure/app-service/overview-managed-identity)

