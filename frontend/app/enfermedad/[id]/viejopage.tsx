// app/enfermedad/[id]/EnfermedadDetalleClient.tsx
"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertCircle, Info, Brain, TrendingUp, Loader2, Stethoscope, Shield, Clock, Pill, BookOpen } from "lucide-react"
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

interface DiseaseInfo {
  descripcion: string
  tratamiento: string[]
  prevencion: string[]
  cuando_consultar: string[]
  duracion_tipica: string
  contagio: string
  grupos_riesgo: string[]
}

interface Props {
  diseaseId: string
}

export default function EnfermedadDetalleClient({ diseaseId }: Props) {
  const router = useRouter()
  const [aiData, setAiData] = useState<AIDiagnosisResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const [diseaseInfo, setDiseaseInfo] = useState<DiseaseInfo | null>(null)
  const [infoLoading, setInfoLoading] = useState(true)
  const [infoError, setInfoError] = useState<string | null>(null)

  const diseaseName = decodeURIComponent(diseaseId)
  const disease = diseasesDatabase.find(d => d.name === diseaseName)

  useEffect(() => {
    if (!disease) return

    const fetchDiseaseInfo = async () => {
      setInfoLoading(true)
      setInfoError(null)
      
      try {
        const symptomsText = disease.symptoms.map(s => s.name).join(", ")
        
        const response = await fetch("/api/disease-info", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            disease: disease.name,
            category: disease.category,
            symptoms: symptomsText
          }),
        })

        if (!response.ok) throw new Error(`Error: ${response.status}`)
        const data = await response.json()
        setDiseaseInfo(data)
      } catch (err) {
        console.error("Error obteniendo info:", err)
        setInfoError("No se pudo obtener información adicional")
      } finally {
        setInfoLoading(false)
      }
    }

    fetchDiseaseInfo()
  }, [disease])

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

        if (!response.ok) throw new Error(`Error: ${response.status}`)
        const data: AIDiagnosisResponse = await response.json()
        setAiData(data)
      } catch (err) {
        console.error("Error AI:", err)
        setError("No se pudo obtener el análisis del modelo")
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
          <p className="text-neutral-400 text-center mb-6">No se pudo encontrar información.</p>
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
                        <span className="text-neutral-300">Nivel de confianza:</span>
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
                      <p className="text-yellow-200 text-sm">⚠️ Enfermedad no identificada directamente por el modelo</p>
                    </div>
                  )}

                  {topPredictions.length > 0 && (
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
                  )}
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Galería de Imágenes */}
        {disease.images && disease.images.length > 0 && (
          <Card className="bg-neutral-900/80 border-neutral-700 p-6 mb-6 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Info className="w-6 h-6 text-blue-400" />
              Imágenes de Referencia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {disease.images.map((img, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-lg border border-neutral-700">
                  <img
                    src={getImageUrl(img)}
                    alt={`${disease.name} - imagen ${idx + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      target.parentElement!.style.display = 'none'
                    }}
                  />
                </div>
              ))}
            </div>
            <p className="text-neutral-500 text-xs mt-3">⚠️ Las imágenes son solo de referencia educativa</p>
          </Card>
        )}

        {/* Síntomas */}
        <Card className="bg-neutral-900/80 border-neutral-700 p-6 mb-6 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            Síntomas Principales
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {disease.symptoms.map((symptom, index) => {
              const severityValue = severityToNumber(symptom.severity)
              return (
                <div key={index} className="bg-neutral-800/50 p-4 rounded-lg border border-neutral-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-white">{symptom.name}</h3>
                    <span className="text-xs font-mono px-2 py-1 rounded-full font-semibold" style={{ color: getSeverityColor(severityValue), backgroundColor: "rgba(255,255,255,0.15)" }}>
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

        {/* Info Dinámica */}
        {infoLoading && (
          <Card className="bg-neutral-900/80 border-neutral-700 p-6 mb-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-neutral-300">
              <Loader2 className="w-6 h-6 animate-spin" />
              <p>Obteniendo información médica...</p>
            </div>
          </Card>
        )}

        {diseaseInfo && !infoLoading && (
          <>
            <Card className="bg-neutral-900/80 border-neutral-700 p-6 mb-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-400" />
                Descripción
              </h2>
              <p className="text-neutral-300 leading-relaxed">{diseaseInfo.descripcion}</p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-neutral-800/50 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-neutral-400 mb-1">Duración típica</h4>
                  <p className="text-white">{diseaseInfo.duracion_tipica}</p>
                </div>
                <div className="bg-neutral-800/50 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-neutral-400 mb-1">Contagio</h4>
                  <p className="text-white">{diseaseInfo.contagio}</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-700/50 p-6 mb-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Pill className="w-6 h-6 text-green-400" />
                Tratamiento Recomendado
              </h2>
              <ul className="space-y-3">
                {diseaseInfo.tratamiento.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-blue-700/50 p-6 mb-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-400" />
                Medidas de Prevención
              </h2>
              <ul className="space-y-3">
                {diseaseInfo.prevencion.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border-orange-700/50 p-6 backdrop-blur-sm">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-orange-400" />
                  Cuándo Consultar
                </h2>
                <ul className="space-y-2">
                  {diseaseInfo.cuando_consultar.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-neutral-300 text-sm">
                      <span className="text-orange-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-700/50 p-6 backdrop-blur-sm">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-400" />
                  Grupos de Riesgo
                </h2>
                <ul className="space-y-2">
                  {diseaseInfo.grupos_riesgo.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-neutral-300 text-sm">
                      <span className="text-purple-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </>
        )}

        <Card className="bg-yellow-500/10 border border-yellow-500/30 p-6 backdrop-blur-sm">
          <p className="text-yellow-200 text-sm">
            ⚠️ <strong>Importante:</strong> Esta información es solo de carácter informativo. 
            Siempre consulta con un profesional médico para un diagnóstico preciso y tratamiento adecuado.
          </p>
        </Card>
      </div>
    </div>
  )
}