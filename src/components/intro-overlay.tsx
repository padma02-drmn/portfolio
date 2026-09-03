import { useEffect, useState } from "react"

export default function IntroOverlay() {
  const [phase, setPhase] = useState<"show" | "hide" | "gone">("show")
  const [textIndex, setTextIndex] = useState(0)

  const greetings = [
    { text: "Hello", lang: "EN" },
    { text: "Om Swastyastu", lang: "BALI" },
    { text: "Halo, saya Padma", lang: "ID" },
  ]

  useEffect(() => {
    // Jalankan pergantian kata sapaan pembuka
    const interval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < greetings.length - 1) return prev + 1
        return prev
      })
    }, 600)

    const t1 = setTimeout(() => setPhase("hide"), 2100)
    const t2 = setTimeout(() => {
      setPhase("gone")
      document.documentElement.style.overflow = ""
    }, 2800)

    document.documentElement.style.overflow = "hidden"

    return () => {
      clearInterval(interval)
      clearTimeout(t1)
      clearTimeout(t2)
      document.documentElement.style.overflow = ""
    }
  }, [])

  if (phase === "gone") return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fafafa] text-[#111111] transition-all duration-700 ease-in-out ${
        phase === "hide" ? "pointer-events-none -translate-y-full opacity-0" : ""
      }`}
    >
      <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-4">
        <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
        <span>SYS.INIT // {greetings[textIndex].lang}</span>
      </div>

      <h1 className="font-display text-4xl sm:text-7xl font-bold tracking-tight text-black transition-all duration-300">
        {greetings[textIndex].text}
      </h1>

      <p className="mt-4 font-mono text-xs sm:text-sm text-neutral-500 tracking-wider">
        KADEK PADMA DARMAWAN — SYSTEMS & AI
      </p>

      <div className="mt-10 h-0.5 w-48 overflow-hidden rounded-full bg-neutral-200">
        <div className="h-full bg-black animate-[intro-bar_2s_ease-in-out_infinite]" />
      </div>

      <style>{`
        @keyframes intro-bar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}
