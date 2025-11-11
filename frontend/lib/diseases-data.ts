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

export const diseasesDatabase: Disease[] = [
  {
    name: "Gripe",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Fiebre", severity: "medio", description: "Elevación moderada de temperatura" },
      { name: "Dolor de cabeza", severity: "poco", description: "Cefalea leve por inflamación" },
      { name: "Fatiga", severity: "considerable", description: "Cansancio general" },
    ],
  },
  {
    name: "COVID-19",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Fiebre", severity: "considerable", description: "Elevación considerable de temperatura" },
      { name: "Tos seca", severity: "medio", description: "Irritación respiratoria" },
      { name: "Pérdida de olfato", severity: "demasiado", description: "Alteración neurológica" },
    ],
  },
  {
    name: "Tuberculosis",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Tos persistente", severity: "demasiado", description: "Tos crónica con flema" },
      { name: "Sudores nocturnos", severity: "medio", description: "Síntoma sistémico" },
      { name: "Pérdida de peso", severity: "poco", description: "Pérdida de peso gradual" },
    ],
  },
  {
    name: "Dengue",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Dolor articular", severity: "considerable", description: "Dolor intenso en articulaciones" },
      { name: "Dolor detrás de los ojos", severity: "medio", description: "Característico del dengue" },
      { name: "Sarpullido", severity: "poco", description: "Lesiones cutáneas leves" },
    ],
  },
  {
    name: "Cólera",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Diarrea acuosa", severity: "demasiado", description: "Pérdida rápida de líquidos" },
      { name: "Calambres musculares", severity: "medio", description: "Contracciones musculares" },
      { name: "Deshidratación", severity: "considerable", description: "Pérdida severa de líquidos" },
    ],
  },
  {
    name: "Sarampión",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Erupción cutánea", severity: "demasiado", description: "Lesiones rojas en piel" },
      { name: "Tos", severity: "poco", description: "Síntoma respiratorio" },
      { name: "Manchas de Koplik", severity: "medio", description: "Lesiones en mucosa oral" },
    ],
  },
  {
    name: "Malaria",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Escalofríos", severity: "considerable", description: "Escalofríos intensos" },
      { name: "Sudoración excesiva", severity: "medio", description: "Tras episodios febriles" },
      { name: "Dolor abdominal", severity: "poco", description: "Dolor abdominal leve" },
    ],
  },
  {
    name: "Hepatitis A",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Ictericia", severity: "demasiado", description: "Color amarillo en piel y ojos" },
      { name: "Náuseas", severity: "medio", description: "Alteración digestiva" },
      { name: "Orina oscura", severity: "poco", description: "Orina de color oscuro" },
    ],
  },
  {
    name: "Fiebre Tifoidea",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Dolor abdominal", severity: "considerable", description: "Inflamación intestinal" },
      { name: "Estreñimiento", severity: "poco", description: "Alteración digestiva" },
      { name: "Fiebre prolongada", severity: "demasiado", description: "Persistente por infección" },
    ],
  },
  {
    name: "VIH (fase aguda)",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Ganglios inflamados", severity: "medio", description: "Adenopatías" },
      { name: "Dolor muscular", severity: "poco", description: "Síntoma inespecífico" },
      { name: "Sudor nocturno", severity: "considerable", description: "Común en fase inicial" },
    ],
  },
  {
    name: "Tétanos",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Rigidez muscular", severity: "demasiado", description: "Contracciones dolorosas" },
      { name: "Espasmos", severity: "considerable", description: "Movimientos involuntarios" },
      { name: "Dificultad para tragar", severity: "medio", description: "Dificultad para tragar" },
    ],
  },
  {
    name: "Zika",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Conjuntivitis", severity: "poco", description: "Inflamación ocular" },
      { name: "Dolor muscular", severity: "medio", description: "Dolor generalizado" },
      { name: "Erupción cutánea", severity: "considerable", description: "Lesiones en piel" },
    ],
  },
  {
    name: "Ébola",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Hemorragias", severity: "demasiado", description: "Sangrado interno y externo" },
      { name: "Fiebre alta", severity: "demasiado", description: "Elevación extrema de temperatura" },
      { name: "Dolor abdominal", severity: "considerable", description: "Dolor abdominal severo" },
    ],
  },
  {
    name: "Rabia",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Hidrofobia", severity: "demasiado", description: "Miedo al agua por espasmos" },
      { name: "Agitación", severity: "considerable", description: "Alteración neurológica" },
      { name: "Salivación excesiva", severity: "medio", description: "Hipersalivación" },
    ],
  },
  {
    name: "Leptospirosis",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Dolor muscular", severity: "considerable", description: "Dolor intenso" },
      { name: "Ictericia", severity: "medio", description: "Afectación hepática" },
      { name: "Insuficiencia renal", severity: "demasiado", description: "Daño renal severo" },
    ],
  },
  {
    name: "Meningitis",
    category: "Enfermedades infecciosas",
    symptoms: [
      { name: "Rigidez de cuello", severity: "demasiado", description: "Signo clásico" },
      { name: "Fotofobia", severity: "considerable", description: "Sensibilidad a la luz" },
      { name: "Dolor de cabeza", severity: "medio", description: "Cefalea intensa" },
    ],
  },
]

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
