export type SeverityLevel = "poco" | "medio" | "considerable" | "demasiado"

export interface Symptom {
  name: string
  severity: SeverityLevel
  description: string
}

export interface Disease {
  name: string
  category: string
  symptoms: Symptom[]
}

// Base de datos SOLO con enfermedades que están en el modelo de AI (class_names.json)
// Esto garantiza que siempre haya coincidencia exacta entre frontend y modelo
export const diseasesDatabase: Disease[] = [
  {
    name: "Sarampión",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Erupción", severity: "demasiado", description: "Erupción roja en el cuerpo" },
      { name: "Tos", severity: "medio", description: "Síntoma respiratorio" },
      { name: "Fiebre alta", severity: "considerable", description: "Elevación de temperatura" },
      { name: "Pequeñas manchas blancas en las mejillas", severity: "medio", description: "Manchas de Koplik" },
    ],
  },
  {
    name: "Resfriado común",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Fiebre", severity: "medio", description: "Elevación moderada de temperatura" },
      { name: "Dolor de cabeza", severity: "poco", description: "Cefalea leve" },
      { name: "Fatiga", severity: "considerable", description: "Cansancio general" },
      { name: "Tos seca", severity: "medio", description: "Tos irritativa" },
      { name: "Secreción nasal", severity: "medio", description: "Nariz tapada o secreción" },
      { name: "Estornudos", severity: "poco", description: "Estornudos frecuentes" },
    ],
  },
  {
    name: "Conjuntivitis",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Ojo rosado", severity: "medio", description: "Inflamación del ojo" },
      { name: "Ojos rojos", severity: "considerable", description: "Enrojecimiento del ojo" },
      { name: "Secreción ocular", severity: "medio", description: "Secreción en los ojos" },
      { name: "Ojos llorosos", severity: "poco", description: "Lagrimeo excesivo" },
      { name: "Picazón", severity: "poco", description: "Sensación de picazón" },
    ],
  },
  {
    name: "Shigellosis (Disentería Bacilar)",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Diarrea", severity: "demasiado", description: "Diarrea acuosa o con sangre" },
      { name: "Dolor abdominal", severity: "considerable", description: "Dolor o calambres abdominales" },
      { name: "Fiebre", severity: "medio", description: "Elevación de temperatura" },
      { name: "Heces con sangre", severity: "demasiado", description: "Sangre en las heces" },
      { name: "Náuseas", severity: "medio", description: "Sensación de náusea" },
    ],
  },
  {
    name: "Tos ferina (Pertussis)",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Ataques de tos severos", severity: "demasiado", description: "Tos paroxística" },
      { name: "Tos ferina", severity: "considerable", description: "Tos característica" },
      { name: "Fiebre", severity: "medio", description: "Elevación moderada de temperatura" },
      { name: "Vómitos después de toser", severity: "medio", description: "Vómitos post-tos" },
      { name: "Secreción nasal", severity: "poco", description: "Nariz tapada" },
    ],
  },
  {
    name: "Infección por Norovirus",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Diarrea", severity: "considerable", description: "Diarrea acuosa" },
      { name: "Vómitos", severity: "medio", description: "Náuseas o vómitos" },
      { name: "Dolor abdominal", severity: "medio", description: "Dolor o calambres abdominales" },
      { name: "Fiebre leve", severity: "poco", description: "Fiebre baja" },
      { name: "Dolores musculares", severity: "poco", description: "Malestar general" },
    ],
  },
  {
    name: "Roséola",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Fiebre alta", severity: "demasiado", description: "Fiebre alta repentina" },
      { name: "Erupción", severity: "medio", description: "Erupción después de la fiebre" },
      { name: "Ganglios linfáticos inflamados", severity: "poco", description: "Ganglios inflamados" },
      { name: "Irritabilidad", severity: "medio", description: "Irritabilidad en niños" },
    ],
  },
  {
    name: "Rubéola",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Erupción roja en el cuerpo", severity: "considerable", description: "Erupción característica" },
      { name: "Fiebre", severity: "medio", description: "Fiebre leve" },
      { name: "Ganglios linfáticos inflamados", severity: "medio", description: "Ganglios inflamados" },
      { name: "Dolor en las articulaciones", severity: "poco", description: "Dolores articulares" },
    ],
  },
  {
    name: "Paperas",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Glándulas salivales inflamadas y dolorosas", severity: "demasiado", description: "Hinchazón de las glándulas parótidas" },
      { name: "Fiebre", severity: "medio", description: "Elevación de temperatura" },
      { name: "Dolor al masticar o tragar", severity: "considerable", description: "Dificultad al tragar" },
      { name: "Dolores musculares", severity: "poco", description: "Malestar general" },
      { name: "Cansancio", severity: "medio", description: "Fatiga" },
    ],
  },
  {
    name: "Escarlatina",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Garganta roja y dolorida con parches", severity: "demasiado", description: "Dolor de garganta intenso" },
      { name: "Fiebre alta", severity: "considerable", description: "Elevación extrema de temperatura" },
      { name: "Erupción", severity: "medio", description: "Erupción roja característica" },
      { name: "Lengua de fresa", severity: "medio", description: "Lengua característica" },
      { name: "Dolor de cabeza", severity: "poco", description: "Cefalea" },
    ],
  },
  {
    name: "Faringitis estreptocócica",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Dolor de garganta", severity: "demasiado", description: "Garganta roja y dolorida" },
      { name: "Fiebre", severity: "considerable", description: "Elevación de temperatura" },
      { name: "Amígdalas rojas e inflamadas", severity: "medio", description: "Amígdalas inflamadas" },
      { name: "Ganglios linfáticos inflamados", severity: "medio", description: "Ganglios inflamados" },
      { name: "Dolor de cabeza", severity: "poco", description: "Cefalea" },
    ],
  },
  {
    name: "Impétigo",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Llagas agrupadas", severity: "considerable", description: "Lesiones en la piel" },
      { name: "Costra amarilla", severity: "medio", description: "Costras características" },
      { name: "Picazón", severity: "medio", description: "Picazón en las lesiones" },
      { name: "Enrojecimiento", severity: "poco", description: "Zonas enrojecidas" },
    ],
  },
  {
    name: "Candidiasis oral",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Parches blancos en las amígdalas", severity: "medio", description: "Manchas blancas" },
      { name: "Dolor o ardor en la boca", severity: "considerable", description: "Malestar bucal" },
      { name: "Sensación de algodón en la boca", severity: "poco", description: "Sensación característica" },
      { name: "Pérdida del gusto", severity: "poco", description: "Alteración del gusto" },
    ],
  },
  {
    name: "Enfermedad de manos, pies y boca",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Erupción en manos y pies", severity: "considerable", description: "Erupción característica" },
      { name: "Llagas en la boca", severity: "medio", description: "Lesiones bucales" },
      { name: "Fiebre", severity: "medio", description: "Elevación de temperatura" },
      { name: "Dolor de garganta", severity: "poco", description: "Malestar de garganta" },
    ],
  },
  {
    name: "Quinta enfermedad",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Erupción en la cara", severity: "considerable", description: "Mejillas enrojecidas" },
      { name: "Fiebre", severity: "medio", description: "Fiebre leve" },
      { name: "Dolores corporales", severity: "poco", description: "Malestar general" },
      { name: "Dolor de cabeza", severity: "poco", description: "Cefalea leve" },
    ],
  },
  {
    name: "Infestación de piojos",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Piojos visibles en el cuero cabelludo", severity: "demasiado", description: "Presencia de piojos" },
      { name: "Picazón en cuero cabelludo/cuello/orejas", severity: "considerable", description: "Picazón intensa" },
      { name: "Cosquilleo en el cabello", severity: "medio", description: "Sensación de movimiento" },
      { name: "Llagas en el cuero cabelludo", severity: "poco", description: "Por rascarse" },
    ],
  },
]

// Función auxiliar para normalizar nombres de enfermedades (para búsqueda flexible)
export function normalizeDiseaseName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remover acentos
    .trim()
}

// Función para obtener el nombre del modelo de AI para una enfermedad
// Como ahora todas las enfermedades están en el modelo, siempre retorna el mismo nombre
export function getAIModelName(diseaseName: string): string {
  return diseaseName
}

export const severityToNumber = (severity: SeverityLevel): number => {
  const mapping = {
    poco: 3,
    medio: 5,
    considerable: 7,
    demasiado: 10,
  }
  return mapping[severity]
}

export const numberToSeverity = (num: number): SeverityLevel => {
  if (num <= 3) return "poco"
  if (num <= 5) return "medio"
  if (num <= 7) return "considerable"
  return "demasiado"
}

export const getSeverityColor = (value: number): string => {
  if (value === 0) return "transparent"
  if (value <= 3) return "#22c55e" // green
  if (value <= 5) return "#eab308" // yellow
  if (value <= 7) return "#f97316" // orange
  return "#ef4444" // red
}
