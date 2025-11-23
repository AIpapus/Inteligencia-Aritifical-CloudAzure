"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { diseasesDatabase, getSeverityColor } from "@/lib/diseases-data"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface SymptomSelection {
  [key: string]: number
}

interface DiagnosisResult {
  disease: string
  confidence: number
  matchedSymptoms: number
  totalSymptoms: number
}

interface SymptomCheckerProps {
  onBack?: () => void
}

export function SymptomChecker({ onBack }: SymptomCheckerProps) {
  const router = useRouter()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [symptomSelections, setSymptomSelections] = useState<SymptomSelection>({})
  const [diagnosis, setDiagnosis] = useState<DiagnosisResult[]>([])

  // Extract all unique symptoms
  const allSymptoms = Array.from(
    new Set(diseasesDatabase.flatMap((disease) => disease.symptoms.map((s) => s.name))),
  ).sort()

  // Calculate average severity for cursor glow
  const calculateAverageSeverity = () => {
    const values = Object.values(symptomSelections).filter((v) => v > 0)
    if (values.length === 0) return 0
    return values.reduce((a, b) => a + b, 0) / values.length
  }

  const averageSeverity = calculateAverageSeverity()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleSymptomChange = (symptom: string, value: number[]) => {
    setSymptomSelections((prev) => ({
      ...prev,
      [symptom]: value[0],
    }))
  }

const calculateDiagnosis = async () => {
  try {
    // Llamar al backend para obtener predicciones del modelo de AI
    const res = await fetch("/api/diagnostico", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sintomas: symptomSelections }),
    })
    
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    
    const aiResponse = await res.json()
    
    // Convertir predicciones del modelo de AI al formato DiagnosisResult
    const results: DiagnosisResult[] = aiResponse.predictions.map((prediction: { disease: string; confidence: number }) => {
      // Buscar la enfermedad en diseasesDatabase para obtener información adicional
      const disease = diseasesDatabase.find(d => d.name === prediction.disease)
      
      // Calcular síntomas coincidentes (síntomas de la enfermedad que el usuario seleccionó)
      let matchedSymptoms = 0
      if (disease) {
        disease.symptoms.forEach((symptom) => {
          const userValue = symptomSelections[symptom.name] || 0
          if (userValue > 0) {
            matchedSymptoms++
          }
        })
      }
      
      return {
        disease: prediction.disease,
        confidence: Math.round(prediction.confidence), // Confianza del modelo de AI
        matchedSymptoms: matchedSymptoms,
        totalSymptoms: disease?.symptoms.length || 0,
      }
    })
    
    // Ordenar por confianza (ya viene ordenado del backend, pero por si acaso)
    results.sort((a, b) => b.confidence - a.confidence)
    
    // Mostrar solo las top 5 predicciones
    setDiagnosis(results.slice(0, 5))
    
  } catch (err) {
    console.error("Error obteniendo diagnóstico del modelo de AI:", err)
    alert("Error al procesar diagnóstico. Por favor, intenta nuevamente.")
  }
}

  // Nueva función para navegar a los detalles de la enfermedad
  const handleDiseaseClick = (diseaseName: string) => {
    router.push(`/enfermedad/${encodeURIComponent(diseaseName)}`)
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 relative">
      {/* Cursor glow effect */}
      <div
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          background: getSeverityColor(averageSeverity),
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-12">
          {onBack && (
            <Button
              onClick={onBack}
              variant="ghost"
              className="mb-4 text-neutral-400 hover:text-white hover:bg-white/5 transition-all breathing-scale"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          )}
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-3 tracking-tight">Diagnóstico de Enfermedades</h1>
            <p className="text-lg text-neutral-400">Selecciona tus síntomas y ajusta su intensidad del 0 al 10</p>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Symptoms Selection Panel */}
          <div className="fade-in-up">
            <Card className="bg-neutral-900/80 border-neutral-700 p-6 backdrop-blur-sm hover:border-neutral-600 transition-colors">
              <h2 className="text-2xl font-semibold mb-6 text-white">Síntomas</h2>
              <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {allSymptoms.map((symptom) => (
                  <div key={symptom} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-white">{symptom}</label>
                      <span
                        className="text-sm font-mono px-3 py-1 rounded-full font-semibold"
                        style={{
                          color: getSeverityColor(symptomSelections[symptom] || 0),
                          backgroundColor: "rgba(255, 255, 255, 0.15)",
                        }}
                      >
                        {symptomSelections[symptom] || 0}/10
                      </span>
                    </div>
                    <Slider
                      value={[symptomSelections[symptom] || 0]}
                      onValueChange={(value) => handleSymptomChange(symptom, value)}
                      max={10}
                      step={1}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </Card>

            <Button
              onClick={calculateDiagnosis}
              className="w-full mt-4 bg-white text-black hover:bg-neutral-200 font-semibold py-6 text-lg breathing-scale hover:scale-105 transition-all"
            >
              Analizar Síntomas
            </Button>
          </div>

          {/* Diagnosis Results Panel */}
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-neutral-900/80 border-neutral-700 p-6 backdrop-blur-sm hover:border-neutral-600 transition-colors">
              <h2 className="text-2xl font-semibold mb-6 text-white">Posibles Diagnósticos</h2>
              {diagnosis.length === 0 ? (
                <div className="text-center py-12 text-neutral-500">
                  <p className="text-lg">Ajusta los síntomas y presiona "Analizar Síntomas"</p>
                  <p className="text-sm mt-2">para ver posibles diagnósticos</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  {diagnosis.map((result, index) => (
                    <Card
                      key={result.disease}
                      onClick={() => handleDiseaseClick(result.disease)}
                      className="bg-neutral-800/90 border-neutral-600 p-4 hover:bg-neutral-750 hover:border-neutral-500 transition-all hover:scale-[1.02] cursor-pointer group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">
                              {result.disease}
                            </h3>
                            <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                          </div>
                          <p className="text-sm text-neutral-400">
                            {result.matchedSymptoms} de {result.totalSymptoms} síntomas coinciden
                          </p>
                        </div>
                        <span
                          className="text-2xl font-bold"
                          style={{ color: getSeverityColor(result.confidence / 10) }}
                        >
                          {result.confidence}%
                        </span>
                      </div>
                      <div className="w-full bg-neutral-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full transition-all duration-500"
                          style={{
                            width: `${result.confidence}%`,
                            backgroundColor: getSeverityColor(result.confidence / 10),
                          }}
                        />
                      </div>
                      <p className="text-xs text-neutral-500 mt-2 group-hover:text-neutral-400 transition-colors">
                        Haz click para ver más información
                      </p>
                    </Card>
                  ))}
                </div>
              )}
            </Card>

            {/* Legend */}
            <Card className="bg-neutral-900/80 border-neutral-700 p-4 mt-4 backdrop-blur-sm">
              <h3 className="text-sm font-semibold mb-3 text-white">Escala de Severidad</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: "#22c55e" }} />
                  <span className="text-xs text-neutral-300">Poco (1-3)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: "#eab308" }} />
                  <span className="text-xs text-neutral-300">Medio (4-5)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: "#f97316" }} />
                  <span className="text-xs text-neutral-300">Considerable (6-7)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: "#ef4444" }} />
                  <span className="text-xs text-neutral-300">Demasiado (8-10)</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <footer className="mt-12 text-center text-neutral-500 text-sm">
          <p>⚠️ Esta herramienta es solo informativa. Consulta a un profesional médico para un diagnóstico preciso.</p>
        </footer>
      </div>
    </div>
  )
}
