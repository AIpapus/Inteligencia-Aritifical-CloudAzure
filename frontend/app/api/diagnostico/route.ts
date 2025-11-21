import { NextResponse } from "next/server"

const FLASK_URL = process.env.FLASK_URL || "http://127.0.0.1:5000"

export async function POST(request: Request) {
try {
    const payload = await request.json()

    // Validar que sintomas exista
    if (!payload.sintomas) {
    return NextResponse.json(
        { error: "Falta el campo 'sintomas'" },
        { status: 400 }
    )
    }

    // Reenviar a Flask
    const resp = await fetch(`${FLASK_URL}/api/diagnostico`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    })

    const text = await resp.text()
    try {
    const data = JSON.parse(text)
    return NextResponse.json(data, { status: resp.status })
    } catch {
    return new NextResponse(text, { status: resp.status })
    }
} catch (err) {
    console.error("Error en API proxy:", err)
    return NextResponse.json(
    { error: "Error interno en el proxy", details: String(err) },
    { status: 500 }
    )
}
}