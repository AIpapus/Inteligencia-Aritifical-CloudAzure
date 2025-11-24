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
  images?: string[]           // Rutas relativas a public/
  description?: string        // Descripción breve de la enfermedad
  treatment?: string          // Recomendaciones de tratamiento
  moreInfoUrl?: string        // URL externa para más información
}

// ============================================
// CONFIGURACIÓN DE URLs PARA IMÁGENES
// ============================================
// En desarrollo: http://localhost:5000/imagenes
// En producción: https://papupruebas.blob.core.windows.net/enfermedades
const BLOB_STORAGE_URL = "https://papupruebas.blob.core.windows.net/enfermedades"

/**
 * Obtiene la URL completa de una imagen
 */
export function getImageUrl(filename: string): string {
  // Si ya es una URL completa, devolverla tal cual
  if (filename.startsWith('http')) {
    return filename
  }
  
  // Limpieza defensiva: Si el nombre viene con barra inicial, la quitamos
  const cleanName = filename.startsWith('/') ? filename.slice(1) : filename;
  
  // Si tiene path complejo, extraer solo el nombre del archivo (seguridad extra)
  const finalName = cleanName.split('/').pop() || cleanName
  
  return `${BLOB_STORAGE_URL}/${encodeURIComponent(finalName)}`
}

// ============================================
// BASE DE DATOS DE ENFERMEDADES
// ============================================
// Nota: Las imágenes ahora son solo nombres de archivo


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
    images: [
      "sarampion-1.jpg",
      "sarampion-2.jpg",
      "sarampion-3.jpg",
    ],
    description: "Enfermedad viral muy contagiosa que causa fiebre alta, tos, secreción nasal, ojos rojos y, lo más distintivo, una erupción maculopapular (manchas planas y elevadas) en todo el cuerpo. La prevención es por vacunación (Triple Vírica, SRP).",
    treatment: "No hay un tratamiento específico. El manejo se centra en el alivio de síntomas: reposo, líquidos y acetaminofén o ibuprofeno para la fiebre y el malestar. La suplementación con vitamina A puede ayudar en algunos casos.",
    moreInfoUrl: "https://www.cigna.com/es-us/knowledge-center/hw/sarampin-stm159343",
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
      images: [
      "resfriado-comun-1.jpg",
      "resfriado-comun-2.jpg",
      "resfriado-comun-3.jpg",
    ],
    description: "Infección viral leve y muy frecuente de las vías respiratorias superiores (nariz y garganta), causada principalmente por rinovirus. Provoca síntomas como secreción nasal, congestión, dolor de garganta y tos.",
    treatment: "No hay cura. El tratamiento es paliativo: descanso, líquidos abundantes (agua, caldos), gárgaras con agua salada y medicamentos de venta libre como analgésicos y descongestionantes para aliviar los síntomas.",
    moreInfoUrl: "https://www.mayoclinic.org/es/diseases-conditions/common-cold/diagnosis-treatment/drc-20351611",
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
    images: [
      "conjuntivitis-1.jpg",
      "conjuntivitis-2.jpg",
      "conjuntivitis-3.jpg",
    ],
    description: "Inflamación de la conjuntiva (membrana que recubre el párpado y parte del globo ocular), a menudo llamada ojo rosado. Puede ser causada por virus, bacterias o alergias. Provoca enrojecimiento, picazón, sensación de arena y secreción.",
    treatment: "El tratamiento se centra en el alivio de síntomas: lágrimas artificiales, limpieza de párpados y compresas frías o tibias. Para la conjuntivitis bacteriana se pueden usar antibióticos (gotas u ungüentos); la viral solo requiere tiempo, y la alérgica, antihistamínicos y evitar el alérgeno.",
    moreInfoUrl: "https://www.mayoclinic.org/es/diseases-conditions/pink-eye/diagnosis-treatment/drc-20376360",
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
    images: [
      "shigelosis-1.jpg",
      "shigelosis-2.jpg",
      "shigelosis-3.jpg",
    ],
    description: "La Shigellosis es una infección bacteriana del intestino causada por bacterias del género Shigella. Se transmite principalmente a través del agua o alimentos contaminados y es común en países con saneamiento deficiente. (NO SE AGREGARAN IMAGENES DEBIDO A LA SENSIBILIDAD)",
    treatment: "El tratamiento incluye hidratación adecuada, reposo y en casos severos antibióticos específicos bajo prescripción médica. Es importante prevenir la deshidratación en pacientes pediátricos.",
    moreInfoUrl: "https://es.wikipedia.org/wiki/Shigella",
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
    images: [
      "tos-ferina-1.jpg",
      "tos-ferina-2.jpg",
      "tos-ferina-3.jpg",
    ],
    description: "Infección bacteriana respiratoria altamente contagiosa causada por Bordetella pertussis. Se caracteriza por episodios de tos intensa y violenta, a menudo seguidos de un sonido de silbido al inhalar. Es muy peligrosa en bebés. La prevención es por vacunación (DPT/Tdap).",
    treatment: "El tratamiento es con antibióticos macrólidos (como azitromicina o eritromicina) para acortar la duración del contagio. Los lactantes gravemente enfermos suelen requerir hospitalización con succión de mucosidad y, a veces, oxígeno.",
    moreInfoUrl: "https://www.msdmanuals.com/es/professional/enfermedades-infecciosas/bacilos-gramnegativos/tos-ferina",
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
    images: [
      "infeccion-por-norovirus-1.jpg",
      "infeccion-por-norovirus-2.jpg",
      "infeccion-por-norovirus-3.jpg",
    ],
    description: "Virus altamente contagioso que es una causa frecuente de gastroenteritis (inflamación del estómago e intestinos), a menudo causando brotes. Los síntomas principales son vómitos, cólicos abdominales y diarrea.",
    treatment: "No existe un tratamiento específico, es un tratamiento de soporte centrado en evitar la deshidratación mediante el reemplazo de líquidos con soluciones orales o, en casos graves, líquidos intravenosos (IV). Se deben evitar los antidiarreicos en niños.",
    moreInfoUrl: "https://www.msdmanuals.com/es/professional/trastornos-gastrointestinales/gastroenteritis/gastroenteritis-por-norovirus",
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
    images: [
      "roseola-1.jpg",
      "roseola-2.jpg",
      "roseola-3.jpg",
    ],
    description: "Infección viral leve que afecta principalmente a bebés y niños pequeños, causada por el virus del herpes humano tipo 6 (VHH-6). Se caracteriza por una fiebre alta que dura unos días, seguida de una erupción rosada después de que la fiebre baja.",
    treatment: "No hay tratamiento específico. El manejo se centra en el control de la fiebre alta con antipiréticos (acetaminofén o ibuprofeno), asegurar mucho descanso y líquidos para evitar la deshidratación.",
    moreInfoUrl: "https://www.mayoclinic.org/es/diseases-conditions/roseola/diagnosis-treatment/drc-20377289",
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
    images: [
      "rubeola-1.jpg",
      "rubeola-2.jpg",
      "rubeola-3.jpg",
    ],
    description: "Infección viral también conocida como sarampión alemán. Generalmente es leve en niños, causando una erupción cutánea roja, fiebre baja y ganglios linfáticos inflamados. Es grave en mujeres embarazadas debido al riesgo de síndrome de rubéola congénita. La prevención es por vacunación (Triple Vírica, SRP).",
    treatment: "No existe un tratamiento para la enfermedad en sí. Se puede usar acetaminofén para reducir la fiebre. El enfoque principal es la prevención a través de la vacuna.",
    moreInfoUrl: "https://medlineplus.gov/spanish/ency/article/001574.htm",
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
    images: [
      "paperas-1.jpg",
      "paperas-2.jpg",
      "paperas-3.jpg",
    ],
    description: "Enfermedad viral muy contagiosa causada por el virus de la parotiditis. Se caracteriza por la inflamación dolorosa de las glándulas salivales parótidas (cerca de la mandíbula y debajo de las orejas). La prevención es por vacunación (Triple Vírica, SRP).",
    treatment: "No existe un tratamiento antiviral específico. El tratamiento es de soporte: analgésicos y antipiréticos para el dolor y la fiebre, reposo, hidratación y aplicación de frío local en caso de inflamación testicular (orquitis).",
    moreInfoUrl: "https://www.guia-abe.es/temas-clinicos-parotiditis-aguda",
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
    images: [
      "escarlatina-1.jpg",
      "escarlatina-2.jpg",
      "escarlatina-3.jpg",
    ],
    description: "Erupción cutánea causada por la toxina de la bacteria Streptococcus pyogenes (estreptococo del grupo A), la misma que causa la faringitis estreptocócica. Se caracteriza por un sarpullido rojo, áspero como papel de lija, y lengua con aspecto de fresa.",
    treatment: "El tratamiento es con antibióticos (como penicilina o amoxicilina) durante 10 días para prevenir complicaciones serias como la fiebre reumática. También se usan antipiréticos para el control de la fiebre.",
    moreInfoUrl: "https://www.imss.gob.mx/sites/all/statics/guiasclinicas/466GRR.pdf",
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
    images: [
      "farengitis-estreptococica-1.jpg",
      "farengitis-estreptococica-2.jpg",
      "farengitis-estreptococica-3.jpg",
    ],
    description: "Infección bacteriana de la garganta y las amígdalas causada por Streptococcus pyogenes (estreptococo del grupo A). Causa dolor de garganta repentino, dificultad para tragar, fiebre, amígdalas rojas e inflamadas y, a veces, manchas rojas o blancas en la garganta.",
    treatment: "Se trata con un ciclo completo de antibióticos recetados por un médico para aliviar los síntomas y prevenir complicaciones graves. Reposo, líquidos abundantes y analgésicos para el dolor también son recomendados.",
    moreInfoUrl: "https://kidshealth.org/es/parents/strep-throat.html",
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
    images: [
      "impetigo-1.jpg",
      "impetigo-2.jpg",
      "impetigo-3.jpg",
    ],
    description: "Infección cutánea superficial y muy contagiosa causada por bacterias (Streptococcus o Staphylococcus). Se manifiesta con llagas rojas que se abren, supuran líquido y forman una costra de color miel.",
    treatment: "Se trata con antibióticos, que pueden ser en forma de pomada tópica (para pocas llagas) o por vía oral (para más llagas o casos más graves). Es importante seguir las indicaciones médicas y cubrir las llagas.",
    moreInfoUrl: "https://www.cdc.gov/group-a-strep/es/about/acerca-del-impetigo.html",
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
    images: [
      "candidiasis-oral-1.jpg",
      "candidiasis-oral-2.jpg",
      "candidiasis-oral-3.jpg",
    ],
    description: "Infección fúngica (por hongos, generalmente Candida albicans) que afecta la boca. Se manifiesta con lesiones blancas cremosas, generalmente en la lengua o mejillas internas. Es común en bebés, personas con prótesis dentales o sistemas inmunitarios debilitados.",
    treatment: "Se trata con medicamentos antimicóticos (líquidos, pastillas para chupar o tabletas) aplicados localmente o por vía oral. También se recomiendan enjuagues con agua salada tibia y una higiene bucal rigurosa.",
    moreInfoUrl: "https://www.mayoclinic.org/es/diseases-conditions/oral-thrush/diagnosis-treatment/drc-20353539",
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
    images: [
      "enfermedad-de-manos-pies-y-boca-1.jpg",
      "enfermedad-de-manos-pies-y-boca-2.jpg",
      "enfermedad-de-manos-pies-y-boca-3.jpg",
    ],
    description: "Infección viral común (generalmente por Coxsackievirus) que causa fiebre y llagas dolorosas en la boca, seguidas de una erupción cutánea con ampollas en manos y pies, y a veces en los glúteos. Afecta principalmente a niños pequeños.",
    treatment: "No hay un medicamento específico; el tratamiento es de soporte para aliviar la fiebre y el dolor con acetaminofén o ibuprofeno. Es crucial asegurar una ingesta adecuada de líquidos para evitar la deshidratación.",
    moreInfoUrl: "https://kidshealth.org/es/parents/hfm.html",
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
    images: [
      "quinta-enfermedad-1.jpg",
      "quinta-enfermedad-2.jpg",
      "quinta-enfermedad-3.jpg",
    ],
    description: "Infección viral común (causada por el parvovirus B19) que se presenta con síntomas leves parecidos a un resfriado y, posteriormente, una erupción característica en la cara (mejillas abofeteadas) y un sarpullido en el cuerpo.",
    treatment: "No hay un tratamiento específico ya que suele ser una enfermedad leve que desaparece por sí sola. El tratamiento se centra en el alivio de síntomas, como descansar y tomar acetaminofén para la fiebre y el dolor.",
    moreInfoUrl: "https://medlineplus.gov/spanish/fifthdisease.html",
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
    images: [
      "infestacion-de-piojos-1.jpg",
      "infestacion-de-piojos-2.jpg",
      "infestacion-de-piojos-3.jpg",
    ],
    description: "Infestación parasitaria de la cabeza, cuerpo o área púbica, causada por pequeños insectos que se alimentan de sangre humana. Causa picazón intensa y se detecta por la presencia de piojos adultos y liendres (huevos) adheridos al cabello.",
    treatment: "Se trata con champús, cremas o lociones antiparasitarias de venta libre o recetadas. También se requiere la eliminación manual de liendres. El tratamiento a menudo se repite a los 7 o 10 días. Es vital la descontaminación de ropa y ropa de cama.",
    moreInfoUrl: "https://www.msdmanuals.com/es/hogar/trastornos-de-la-piel/infecciones-cut%C3%A1neas-parasitarias/infestaci%C3%B3n-por-piojos",
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

// Función para convertir nombre de enfermedad a slug para buscar imágenes
// Ej: "Shigellosis (Disentería Bacilar)" -> "shigellosis-disenteriacutea-bacilar"
export function diseaseNameToImageSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")  // Remover acentos
    .replace(/[^\w\s-]/g, "")         // Remover caracteres especiales
    .replace(/\s+/g, "-")             // Espacios a guiones
    .replace(/-+/g, "-")              // Guiones múltiples a uno
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
