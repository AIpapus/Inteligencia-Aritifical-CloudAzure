"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { diseasesDatabase, getSeverityColor } from "@/lib/diseases-data"
import { ArrowLeft } from "lucide-react"

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

  const calculateDiagnosis = () => {
    const results: DiagnosisResult[] = []

    diseasesDatabase.forEach((disease) => {
      let matchScore = 0
      let matchedSymptoms = 0

      disease.symptoms.forEach((symptom) => {
        const userValue = symptomSelections[symptom.name] || 0
        if (userValue > 0) {
          matchedSymptoms++
          // Calculate how close the user's value is to the disease symptom severity
          const diseaseValue =
            symptom.severity === "poco"
              ? 3
              : symptom.severity === "medio"
                ? 5
                : symptom.severity === "considerable"
                  ? 7
                  : 10
          const difference = Math.abs(userValue - diseaseValue)
          const similarityScore = Math.max(0, 10 - difference)
          matchScore += similarityScore
        }
      })

      if (matchedSymptoms > 0) {
        const confidence = (matchScore / (disease.symptoms.length * 10)) * 100
        results.push({
          disease: disease.name,
          confidence: Math.round(confidence),
          matchedSymptoms,
          totalSymptoms: disease.symptoms.length,
        })
      }
    })

    results.sort((a, b) => b.confidence - a.confidence)
    setDiagnosis(results.slice(0, 5))
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
                      className="bg-neutral-800/90 border-neutral-600 p-4 hover:bg-neutral-750 hover:border-neutral-500 transition-all hover:scale-[1.02]"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg text-white">{result.disease}</h3>
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
