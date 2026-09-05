import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className="fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full border border-black/15 bg-white/95 text-black shadow-lg backdrop-blur-sm transition-all hover:bg-black hover:text-white hover:border-black active:scale-95"
    >
      <ArrowUp className="size-4" />
    </button>
  )
}
