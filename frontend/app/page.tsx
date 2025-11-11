"use client"

import { useState } from "react"
import { WelcomePage } from "@/components/welcome-page"
import { SymptomChecker } from "@/components/symptom-checker"

export default function Home() {
  const [showChecker, setShowChecker] = useState(false)

  if (showChecker) {
    return <SymptomChecker onBack={() => setShowChecker(false)} />
  }

  return <WelcomePage onStart={() => setShowChecker(true)} />
}
