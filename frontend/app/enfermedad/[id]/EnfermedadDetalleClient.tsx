// app/enfermedad/[id]/EnfermedadDetalleClient.tsx
// app/enfermedad/[id]/EnfermedadDetalleClient.tsx
"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertCircle, Info, Brain, TrendingUp, Loader2 } from "lucide-react"
import { diseasesDatabase, getSeverityColor, severityToNumber, normalizeDiseaseName, getImageUrl } from "@/lib/diseases-data"

interface AIPrediction {
  disease: string
  confidence: number
}

interface AIDiagnosisResponse {
  predictions: AIPrediction[]
  processed_symptoms: string[]
  total_symptoms: number
}

interface Props {
  diseaseId: string
}

export default function EnfermedadDetalleClient({ diseaseId }: Props) {
  const router = useRouter()
  const [aiData, setAiData] = useState<AIDiagnosisResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const diseaseName = decodeURIComponent(diseaseId)
  const disease = diseasesDatabase.find(d => d.name === diseaseName)

  useEffect(() => {
    if (!disease) return

    const fetchAIData = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const symptomsDict: Record<string, number> = {}
        disease.symptoms.forEach(symptom => {
          symptomsDict[symptom.name] = severityToNumber(symptom.severity)
        })

        const response = await fetch("/api/diagnostico", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sintomas: symptomsDict }),
        })

        if (!response.ok) throw new Error(`Error del servidor: ${response.status}`)
        const data: AIDiagnosisResponse = await response.json()
        setAiData(data)
      } catch (err) {
        console.error("Error obteniendo datos del AI:", err)
        setError("No se pudo obtener el análisis del modelo de AI")
      } finally {
        setLoading(false)
      }
    }

    fetchAIData()
  }, [disease])

  const diseaseMatch = aiData?.predictions.find(
    p => normalizeDiseaseName(p.disease) === normalizeDiseaseName(diseaseName)
  ) || null
  const diseaseConfidence = diseaseMatch?.confidence || null
  const topPredictions = aiData?.predictions.slice(0, 5).sort((a, b) => b.confidence - a.confidence) || []

  if (!disease) {
    return (
      <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center">
        <Card className="bg-neutral-900/80 border-neutral-700 p-8 max-w-md">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-center mb-2">Enfermedad no encontrada</h1>
          <p className="text-neutral-400 text-center mb-6">No se pudo encontrar información sobre esta enfermedad.</p>
          <Button onClick={() => router.back()} className="w-full bg-white text-black hover:bg-neutral-200">
            Volver
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <Button onClick={() => router.back()} variant="ghost" className="mb-6 text-neutral-400 hover:text-white hover:bg-white/5">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al diagnóstico
        </Button>

        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4">{disease.name}</h1>
          <div className="flex items-center gap-2 text-neutral-400">
            <Info className="w-5 h-5" />
            <p>Información detallada sobre la enfermedad</p>
          </div>

          {/* Sección: Galería de imágenes + Descripción + Tratamiento */}
          {(disease.images || disease.description || disease.treatment) && (
            <div className="grid md:grid-cols-3 gap-6 mt-6 mb-8">
            {/* Galería de Imágenes */}
            {disease.images && disease.images.length > 0 && (
            <Card className="bg-neutral-900/80 border-neutral-700 p-6 mb-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Info className="w-6 h-6 text-blue-400" />
                Imágenes de Referencia
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {disease.images.map((img, idx) => (
                    <div key={idx} className="relative rounded-lg border border-neutral-700 overflow-hidden aspect-[4/3]">
                    <img
                        src={getImageUrl(img)}
                        alt={`${disease.name} - imagen ${idx + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                        const el = e.currentTarget.parentElement
                        if (el) el.style.display = "none"
                        }}
                    />
                    </div>
                ))}
                </div>
                <p className="text-neutral-500 text-xs mt-3">⚠️ Las imágenes son solo de referencia educativa</p>
            </Card>
            )}



              {/* Descripción y Tratamiento */}
              <div className="md:col-span-2 space-y-4">
                {disease.description && (
                  <Card className="bg-neutral-900/80 border-neutral-700 p-4">
                    <h3 className="font-semibold text-white mb-2 text-lg">Descripción</h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">{disease.description}</p>
                  </Card>
                )}

                {disease.treatment && (
                  <Card className="bg-neutral-900/80 border-neutral-700 p-4">
                    <h3 className="font-semibold text-white mb-2 text-lg">Tratamiento recomendado</h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">{disease.treatment}</p>
                  </Card>
                )}

                {disease.moreInfoUrl && (
                  <div className="pt-2">
                    <a
                      href={disease.moreInfoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      Más información externa
                      <span>↗</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Análisis del Modelo de AI */}
          {loading && (
            <Card className="bg-neutral-900/80 border-neutral-700 p-4 mt-4 backdrop-blur-sm">
              <div className="flex items-center gap-3 text-neutral-300">
                <Loader2 className="w-5 h-5 animate-spin" />
                <p>Analizando con el modelo de AI...</p>
              </div>
            </Card>
          )}

          {error && (
            <Card className="bg-red-900/20 border-red-700 p-4 mt-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-red-300">
                <AlertCircle className="w-5 h-5" />
                <p>{error}</p>
              </div>
            </Card>
          )}

          {aiData && !loading && (
            <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-700 p-6 mt-4 backdrop-blur-sm">
              <div className="flex items-start gap-3 mb-4">
                <Brain className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    Análisis del Modelo de AI
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                  </h2>
                  
                  {diseaseConfidence !== null ? (
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-neutral-300">Nivel de confianza para esta enfermedad:</span>
                        <span className={`text-2xl font-bold ${
                          diseaseConfidence >= 70 ? 'text-green-400' :
                          diseaseConfidence >= 50 ? 'text-yellow-400' : 'text-orange-400'
                        }`}>
                          {diseaseConfidence.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-neutral-700 rounded-full h-3 overflow-hidden">
                        <div className="h-full transition-all bg-gradient-to-r from-purple-500 to-blue-500" style={{ width: `${diseaseConfidence}%` }} />
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4 p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                      <p className="text-yellow-200 text-sm mb-1">
                        ⚠️ <strong>Enfermedad no identificada directamente por el modelo</strong>
                      </p>
                      <p className="text-neutral-300 text-xs">
                        El modelo procesó los síntomas pero no identificó esta enfermedad específica en las predicciones principales.
                      </p>
                    </div>
                  )}

                  {aiData.processed_symptoms && aiData.processed_symptoms.length > 0 && (
                    <div className="mb-4">
                      <p className="text-neutral-300 text-sm mb-2">
                        Síntomas reconocidos por el modelo ({aiData.processed_symptoms.length}):
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {aiData.processed_symptoms.slice(0, 8).map((symptom, idx) => (
                          <span key={idx} className="px-2 py-1 bg-purple-900/40 border border-purple-700 rounded text-xs text-purple-200">
                            {symptom}
                          </span>
                        ))}
                        {aiData.processed_symptoms.length > 8 && (
                          <span className="px-2 py-1 text-xs text-neutral-400">+{aiData.processed_symptoms.length - 8} más</span>
                        )}
                      </div>
                    </div>
                  )}

                  {topPredictions.length > 0 && (
                    <div>
                      <p className="text-neutral-300 text-sm mb-2">Enfermedades predichas por el modelo:</p>
                      <div className="space-y-2">
                        {topPredictions.map((pred, idx) => {
                          const isMatch = normalizeDiseaseName(pred.disease) === normalizeDiseaseName(diseaseName)
                          return (
                            <div key={idx} className={`flex justify-between items-center p-2 rounded ${isMatch ? 'bg-purple-900/50 border border-purple-600' : 'bg-neutral-800/50'}`}>
                              <span className="text-sm text-neutral-200">
                                {pred.disease}
                                {isMatch && <span className="ml-2 text-xs text-purple-400">← Coincide</span>}
                              </span>
                              <span className="text-sm font-semibold text-purple-300">{pred.confidence.toFixed(1)}%</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Card de síntomas */}
        <Card className="bg-neutral-900/80 border-neutral-700 p-6 mb-6 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            Síntomas Principales
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {disease.symptoms.map((symptom, index) => {
              const severityValue = severityToNumber(symptom.severity)
              return (
                <div key={index} className="bg-neutral-800/50 p-4 rounded-lg border border-neutral-700 hover:border-neutral-600 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-white">{symptom.name}</h3>
                    <span className="text-xs font-mono px-2 py-1 rounded-full font-semibold" style={{ color: getSeverityColor(severityValue), backgroundColor: "rgba(255, 255, 255, 0.15)" }}>
                      {symptom.severity}
                    </span>
                  </div>
                  <div className="w-full bg-neutral-700 rounded-full h-2 overflow-hidden">
                    <div className="h-full transition-all" style={{ width: `${(severityValue / 10) * 100}%`, backgroundColor: getSeverityColor(severityValue) }} />
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Información adicional */}
        <Card className="bg-neutral-900/80 border-neutral-700 p-6 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4">Información Adicional</h2>
          <div className="space-y-4 text-neutral-300">
            <div>
              <h3 className="font-semibold text-white mb-2">Categoría:</h3>
              <p>{disease.category}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-2">Total de síntomas:</h3>
              <p>{disease.symptoms.length} síntomas registrados</p>
            </div>

            {aiData && (
              <div>
                <h3 className="font-semibold text-white mb-2">Análisis del modelo:</h3>
                <p className="text-sm">
                  {diseaseConfidence !== null
                    ? `El modelo de AI identificó esta enfermedad con un ${diseaseConfidence.toFixed(1)}% de confianza basado en los síntomas proporcionados.`
                    : `El modelo procesó ${aiData.total_symptoms} síntomas para generar predicciones.`}
                </p>
              </div>
            )}
            
            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-yellow-200 text-sm">
                ⚠️ <strong>Importante:</strong> Esta información es solo de carácter informativo. 
                Siempre consulta con un profesional médico para un diagnóstico preciso y tratamiento adecuado.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}