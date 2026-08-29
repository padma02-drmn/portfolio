import { useEffect, useState } from "react"
import { profile } from "@/data/portfolio"

// ponytail: animasi CSS murni, tanpa lib. Naik framer-motion kalau butuh orkestrasi kompleks.
export default function IntroOverlay() {
  const [phase, setPhase] = useState<"hide" | "show" | "gone">("show")

  useEffect(() => {
    // main sekali per session — biar navigasi balik nggak nunggu lagi
    if (sessionStorage.getItem("intro-seen")) {
      setPhase("gone")
      return
    }
    document.documentElement.style.overflow = "hidden"
    const t1 = setTimeout(() => setPhase("hide"), 2100)
    const t2 = setTimeout(() => {
      setPhase("gone")
      sessionStorage.setItem("intro-seen", "1")
      document.documentElement.style.overflow = ""
    }, 2900)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      document.documentElement.style.overflow = ""
    }
  }, [])

  if (phase === "gone") return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-700 ease-in-out ${
        phase === "hide" ? "pointer-events-none -translate-y-full opacity-0" : ""
      }`}
    >
      <p className="animate-[intro-fade_0.8s_ease-out_both] font-mono text-xs tracking-widest text-primary uppercase">
        Portfolio — 2026
      </p>
      <h1 className="animate-[intro-up_0.9s_ease-out_0.25s_both] mt-4 px-6 text-center text-4xl font-bold tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      <p className="animate-[intro-up_0.9s_ease-out_0.5s_both] mt-3 text-center text-sm text-muted-foreground sm:text-lg">
        {profile.role}
      </p>
      <div className="mt-10 h-0.5 w-40 overflow-hidden rounded-full bg-muted">
        <div className="animate-[intro-bar_1.6s_ease-in-out_0.3s_both] h-full bg-primary" />
      </div>
      <style>{`
        @keyframes intro-fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes intro-up { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes intro-bar { from { transform: translateX(-100%) } to { transform: translateX(0) } }
      `}</style>
    </div>
  )
}
