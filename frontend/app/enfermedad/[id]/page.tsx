"use client"

import { useParams, useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertCircle, Info } from "lucide-react"
import { diseasesDatabase, getSeverityColor } from "@/lib/diseases-data"

export default function EnfermedadDetalle() {
const params = useParams()
const router = useRouter()
const diseaseId = params.id as string

  // Buscar la enfermedad por nombre (convertido desde URL)
const diseaseName = decodeURIComponent(diseaseId)
const disease = diseasesDatabase.find(d => d.name === diseaseName)

if (!disease) {
    return (
    <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center">
        <Card className="bg-neutral-900/80 border-neutral-700 p-8 max-w-md">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-center mb-2">Enfermedad no encontrada</h1>
        <p className="text-neutral-400 text-center mb-6">No se pudo encontrar información sobre esta enfermedad.</p>
        <Button 
            onClick={() => router.back()} 
            className="w-full bg-white text-black hover:bg-neutral-200"
        >
            Volver
        </Button>
        </Card>
    </div>
    )
}

return (
    <div className="min-h-screen bg-black text-white p-6">
    <div className="max-w-4xl mx-auto">
        {/* Header con botón de regreso */}
        <Button
        onClick={() => router.back()}
        variant="ghost"
        className="mb-6 text-neutral-400 hover:text-white hover:bg-white/5"
        >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver al diagnóstico
        </Button>

        {/* Título de la enfermedad */}
        <div className="mb-8">
        <h1 className="text-5xl font-bold mb-4">{disease.name}</h1>
        <div className="flex items-center gap-2 text-neutral-400">
            <Info className="w-5 h-5" />
            <p>Información detallada sobre la enfermedad</p>
        </div>
        </div>

        {/* Card de síntomas */}
        <Card className="bg-neutral-900/80 border-neutral-700 p-6 mb-6 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            Síntomas Principales
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
            {disease.symptoms.map((symptom, index) => {
            const severityValue = 
                symptom.severity === "poco" ? 3 :
                symptom.severity === "medio" ? 5 :
                symptom.severity === "considerable" ? 7 : 10
            
            return (
                <div 
                key={index} 
                className="bg-neutral-800/50 p-4 rounded-lg border border-neutral-700 hover:border-neutral-600 transition-all"
                >
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-white">{symptom.name}</h3>
                    <span
                    className="text-xs font-mono px-2 py-1 rounded-full font-semibold"
                    style={{
                        color: getSeverityColor(severityValue),
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                    }}
                    >
                    {symptom.severity}
                    </span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-2 overflow-hidden">
                    <div
                    className="h-full transition-all"
                    style={{
                        width: `${(severityValue / 10) * 100}%`,
                        backgroundColor: getSeverityColor(severityValue),
                    }}
                    />
                </div>
                </div>
            )
            })}
        </div>
        </Card>

        {/* Información adicional (puedes expandir esto) */}
        <Card className="bg-neutral-900/80 border-neutral-700 p-6 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold mb-4">Información Adicional</h2>
        <div className="space-y-4 text-neutral-300">
            <div>
            <h3 className="font-semibold text-white mb-2">Total de síntomas:</h3>
            <p>{disease.symptoms.length} síntomas registrados</p>
            </div>
            
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