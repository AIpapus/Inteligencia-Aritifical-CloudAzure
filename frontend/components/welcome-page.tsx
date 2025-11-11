"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Activity, Shield, Brain } from "lucide-react"

interface WelcomePageProps {
  onStart: () => void
}

export function WelcomePage({ onStart }: WelcomePageProps) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="breathing-glow breathing-glow-1" />
        <div className="breathing-glow breathing-glow-2" />
        <div className="breathing-glow breathing-glow-3" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main title with fade-in animation */}
        <div className="mb-8 fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-white/10 backdrop-blur-sm breathing-scale">
            <Activity className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight text-balance">
            Diagnóstico de
            <span className="block text-gradient">Enfermedades</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto text-pretty">
            Sistema inteligente de evaluación de síntomas para enfermedades infecciosas
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="feature-card">
            <div className="w-12 h-12 mb-4 rounded-lg bg-green-500/20 flex items-center justify-center breathing-scale">
              <Brain className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Análisis Preciso</h3>
            <p className="text-sm text-neutral-400">
              Algoritmo avanzado que evalúa múltiples síntomas y sus intensidades
            </p>
          </div>

          <div className="feature-card" style={{ animationDelay: "0.1s" }}>
            <div
              className="w-12 h-12 mb-4 rounded-lg bg-blue-500/20 flex items-center justify-center breathing-scale"
              style={{ animationDelay: "0.5s" }}
            >
              <Activity className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">16 Síntomas</h3>
            <p className="text-sm text-neutral-400">Evaluación completa con escala de intensidad del 0 al 10</p>
          </div>

          <div className="feature-card" style={{ animationDelay: "0.2s" }}>
            <div
              className="w-12 h-12 mb-4 rounded-lg bg-red-500/20 flex items-center justify-center breathing-scale"
              style={{ animationDelay: "1s" }}
            >
              <Shield className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Base de Datos Médica</h3>
            <p className="text-sm text-neutral-400">Información detallada de enfermedades infecciosas comunes</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            onClick={onStart}
            size="lg"
            className="bg-white text-black hover:bg-neutral-200 font-semibold px-8 py-6 text-lg group transition-all duration-300 hover:scale-105"
          >
            Comenzar Evaluación
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="mt-8 text-sm text-neutral-500 max-w-xl mx-auto">
            <span className="text-yellow-500">⚠️</span> Esta herramienta es únicamente informativa y educativa. No
            reemplaza el diagnóstico de un profesional médico. Consulta a tu médico ante cualquier síntoma preocupante.
          </p>
        </div>
      </div>
    </div>
  )
}
