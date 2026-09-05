import { useEffect, useState } from "react"
import { X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubMark } from "@/components/github-mark"
import type { LocalizedProject } from "@/data/portfolio"
import { cn } from "@/lib/utils"
import { useLang } from "@/context/language-context"

export function ProjectDialog({
  project,
  onClose,
}: {
  project: LocalizedProject | null
  onClose: () => void
}) {
  const { lang, t } = useLang()
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
        className="bg-white text-black animate-in fade-in slide-in-from-bottom-4 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-black/10 shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white/95 px-6 py-4 backdrop-blur">
          <div className="flex items-center gap-2.5">
            <h3 className="font-display font-bold text-lg text-black">{project.name}</h3>
            <span className="font-mono text-xs text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded border border-black/5">
              {project.period}
            </span>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} aria-label={t("Tutup", "Close")} className="text-neutral-500 hover:text-black">
            <X className="size-4" />
          </Button>
        </div>

        <div className="p-6">
          {gallery.length > 0 ? (
            <div>
              <div className="overflow-hidden rounded-xl border border-black/10 bg-neutral-100">
                <img
                  src={gallery[activeImg]}
                  alt={`${project.name} — screenshot ${activeImg + 1}`}
                  loading="lazy"
                  className="aspect-video w-full object-cover object-top"
                />
              </div>
              {gallery.length > 1 ? (
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                  {gallery.map((g, i) => (
                    <button
                      key={g}
                      onClick={() => setActiveImg(i)}
                      aria-label={`Screenshot ${i + 1}`}
                      className={cn(
                        "shrink-0 overflow-hidden rounded-lg border border-black/10 transition-opacity",
                        i === activeImg ? "border-black ring-2 ring-black" : "opacity-60 hover:opacity-100",
                      )}
                    >
                      <img src={g} alt="" loading="lazy" className="h-14 w-24 object-cover object-top" />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          <p className="text-neutral-600 mt-5 text-sm sm:text-base leading-relaxed font-medium">
            {t(project.tagline.id, project.tagline.en)}
          </p>

          <div className="mt-6 border-t border-black/10 pt-4">
            <h4 className="font-mono text-xs font-bold tracking-wider text-black uppercase mb-2">
              {t("Masalah Operasional", "The Problem")}
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed font-sans">
              {t(project.problem.id, project.problem.en)}
            </p>
          </div>

          <div className="mt-6 border-t border-black/10 pt-4">
            <h4 className="font-mono text-xs font-bold tracking-wider text-black uppercase mb-3">
              {t("Penyelesaian & Arsitektur Sistem", "Engineered Solutions")}
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-700 font-sans">
              {(lang === "en" ? project.solutions.en : project.solutions.id).map((s, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-neutral-400 font-mono text-xs mt-0.5 font-bold">0{i+1}.</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((st) => (
                <span key={st} className="rounded border border-black/10 bg-neutral-100 px-2 py-0.5 font-mono text-xs text-neutral-800">
                  {st}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-700 hover:text-black border border-black/15 bg-white px-3 py-1.5 rounded"
                >
                  <GithubMark className="size-3.5" /> Source Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-white bg-black hover:bg-neutral-800 px-3.5 py-1.5 rounded"
                >
                  Live Demo <ExternalLink className="size-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
