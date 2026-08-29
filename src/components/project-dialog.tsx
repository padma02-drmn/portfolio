import { useEffect, useState } from "react"
import { X, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GithubMark } from "@/components/github-mark"
import type { Project } from "@/data/portfolio"
import { cn } from "@/lib/utils"

// ponytail: dialog hand-rolled tanpa Radix — satu use case, ESC + overlay click cukup.
export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    setActiveImg(0)
  }, [project])

  useEffect(() => {
    if (!project) return
    document.documentElement.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => {
      document.documentElement.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [project, onClose])

  if (!project) return null

  const gallery = project.gallery ?? []

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        className="bg-background animate-in fade-in slide-in-from-bottom-4 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/95 px-5 py-3 backdrop-blur">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{project.name}</h3>
            <span className="font-mono text-xs text-muted-foreground">{project.period}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} aria-label="Tutup">
            <X />
          </Button>
        </div>

        <div className="p-5">
          {gallery.length > 0 ? (
            <div>
              <div className="overflow-hidden rounded-xl border bg-muted">
                <img
                  src={gallery[activeImg]}
                  alt={`${project.name} — screenshot ${activeImg + 1}`}
                  loading="lazy"
                  className="aspect-video w-full object-cover object-top"
                />
              </div>
              {gallery.length > 1 ? (
                <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
                  {gallery.map((g, i) => (
                    <button
                      key={g}
                      onClick={() => setActiveImg(i)}
                      aria-label={`Lihat screenshot ${i + 1}`}
                      className={cn(
                        "shrink-0 overflow-hidden rounded-md border transition-opacity",
                        i === activeImg ? "border-primary ring-1 ring-primary" : "opacity-60 hover:opacity-100",
                      )}
                    >
                      <img src={g} alt="" loading="lazy" className="h-14 w-24 object-cover object-top" />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <div className={cn("flex aspect-video w-full items-center justify-center rounded-xl border bg-gradient-to-br", project.accent ?? "from-muted to-transparent")}>
              <span className="font-mono text-sm text-muted-foreground">Screenshot menyusul</span>
            </div>
          )}

          <p className="text-muted-foreground mt-5 text-sm leading-relaxed">{project.tagline}</p>

          <div className="mt-5">
            <h4 className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">Masalah</h4>
            <p className="mt-2 text-sm leading-relaxed">{project.problem}</p>
          </div>

          <div className="mt-5">
            <h4 className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">Penyelesaian</h4>
            <ul className="mt-2 space-y-2">
              {project.solutions.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h4 className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">Stack</h4>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <Badge key={s} variant="secondary" className="font-mono text-[11px]">
                  {s}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            {project.live ? (
              <Button onClick={() => window.open(project.live, "_blank")}>
                <ExternalLink /> Live
              </Button>
            ) : null}
            {project.repo ? (
              <Button variant="outline" onClick={() => window.open(project.repo, "_blank")}>
                <GithubMark className="size-4" /> Source
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
