// app/enfermedad/[id]/page.tsx
import { diseasesDatabase } from "@/lib/diseases-data"
import EnfermedadDetalleClient from "./EnfermedadDetalleClient"

// Genera las rutas estáticas para todas las enfermedades
export function generateStaticParams() {
return diseasesDatabase.map((disease) => ({
    id: encodeURIComponent(disease.name),
  }))
}

// Next.js 15: params es una Promise
export default async function EnfermedadDetallePage({ 
params 
}: { 
params: Promise<{ id: string }> 
}) {
const { id } = await params
return <EnfermedadDetalleClient diseaseId={id} />
}