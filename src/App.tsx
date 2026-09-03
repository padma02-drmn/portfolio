import { useState } from "react"
import { 
  Mail, 
  MapPin, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Layers, 
  Terminal, 
  CheckCircle2,
  Copy,
  Check
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { GithubMark } from "@/components/github-mark"
import IntroOverlay from "@/components/intro-overlay"
import { ProjectDialog } from "@/components/project-dialog"
import {
  adrHighlights,
  invariantHighlights,
  principles,
  profile,
  projects,
  skillGroups,
  type Project,
} from "@/data/portfolio"

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080808]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-white/90 group-hover:text-white">
            padma<span className="text-white/40">.sys</span>
          </span>
        </a>
        <nav className="flex items-center gap-5 font-mono text-xs text-white/60">
          <a href="#projects" className="hover:text-white transition-colors">01.PROYEK</a>
          <a href="#architecture" className="hover:text-white transition-colors">02.ARSITEKTUR</a>
          <a href="#skills" className="hover:text-white transition-colors">03.SKILLS</a>
          <a href="#contact" className="hover:text-white transition-colors">04.KONTAK</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 tech-grid">
      <div className="relative mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-white/80">
          <Terminal className="size-3 text-white/60" />
          <span>PRODUCTION-READY SYSTEMS & AI AGENTS</span>
        </div>

        <h1 className="mt-8 text-4xl sm:text-6xl font-bold tracking-tight text-white font-display uppercase leading-[1.08]">
          KADEK PADMA<br />
          <span className="text-white/40">DARMAWAN.</span>
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs text-white/70">
          <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded border border-white/10">
            <Cpu className="size-3.5" /> AI Application Engineer
          </span>
          <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded border border-white/5">
            <Layers className="size-3.5" /> Full-Stack Architecture
          </span>
          <span className="flex items-center gap-1.5 text-white/50">
            <MapPin className="size-3.5" /> {profile.location}
          </span>
        </div>

        <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-300 font-sans font-normal">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button 
            onClick={() => (window.location.href = `mailto:${profile.email}`)}
            className="bg-white text-black hover:bg-neutral-200 font-mono text-xs font-semibold uppercase tracking-wider px-5 py-6 rounded"
          >
            <Mail className="size-4 mr-2" /> Hubungi via Email
          </Button>

          <Button 
            variant="outline" 
            onClick={copyEmail}
            className="border-white/20 bg-black/40 hover:bg-white/10 text-white font-mono text-xs rounded py-6"
          >
            {copied ? <Check className="size-4 mr-2 text-emerald-400" /> : <Copy className="size-4 mr-2" />}
            {copied ? "Email Tersalin" : "Copy Email"}
          </Button>

          <Button 
            variant="outline" 
            onClick={() => window.open(profile.github, "_blank")}
            className="border-white/20 bg-black/40 hover:bg-white/10 text-white font-mono text-xs rounded py-6"
          >
            <GithubMark className="size-4 mr-2" /> GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const cover = project.gallery?.[0]
  return (
    <div className="group relative rounded-lg border border-white/10 bg-[#0d0d0d] p-6 transition-all duration-200 hover:border-white/40 hover:bg-[#121212]">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">
              {project.name}
            </h3>
            <span className="font-mono text-xs text-white/40 border border-white/10 px-2 py-0.5 rounded">
              {project.period}
            </span>
          </div>
          <p className="mt-1 text-sm text-neutral-400 font-medium">
            {project.tagline}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded bg-white text-black px-3 py-1.5 font-mono text-xs font-semibold hover:bg-neutral-200 transition-colors"
            >
              Demo <ExternalLink className="size-3" />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded border border-white/20 bg-white/5 px-3 py-1.5 font-mono text-xs text-white hover:bg-white/15 transition-colors"
            >
              <GithubMark className="size-3" /> Repo
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm text-neutral-300 leading-relaxed font-sans">
        {project.problem}
      </p>

      <div className="mt-6 border-t border-white/10 pt-4">
        <span className="font-mono text-xs text-white/40 uppercase tracking-wider block mb-2">
          Solusi &amp; Inovasi Sistem:
        </span>
        <ul className="space-y-2 text-sm text-neutral-300 font-sans">
          {project.solutions.slice(0, 3).map((s, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-white/40 font-mono text-xs mt-0.5">0{i+1}.</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <span
            key={t}
            className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-white/70"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 pt-3 border-t border-white/5 flex justify-end">
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-1 font-mono text-xs text-white/70 hover:text-white hover:underline transition-colors"
        >
          Lihat arsitektur lengkap &amp; preview <ArrowUpRight className="size-3" />
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <IntroOverlay />
      <Header />

      <main>
        <Hero />

        {/* Section 01: Projects */}
        <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-20 border-b border-white/10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest block">
                01 / Portfolio
              </span>
              <h2 className="font-display text-3xl font-bold text-white tracking-tight mt-1">
                Sistem &amp; Aplikasi Produksi
              </h2>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-white/40">
              3 SISTEM TERVALIDASI
            </span>
          </div>

          <div className="space-y-8">
            {projects.map((p) => (
              <ProjectCard
                key={p.name}
                project={p}
                onOpen={() => setSelectedProject(p)}
              />
            ))}
          </div>
        </section>

        {/* Section 02: Architecture & Decision Records */}
        <section id="architecture" className="mx-auto w-full max-w-5xl px-6 py-20 border-b border-white/10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest block">
                02 / Arsitektur
              </span>
              <h2 className="font-display text-3xl font-bold text-white tracking-tight mt-1">
                Engineering Invariants &amp; ADR
              </h2>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-white/40">
              KONTRAK DATA SISTEM
            </span>
          </div>

          <p className="text-neutral-400 max-w-2xl text-sm leading-relaxed mb-8">
            Sistem akuntansi dan ERP tidak boleh gagal secara diam-diam. Kualitas sistem dibuktikan melalui Architecture Decision Records (ADR) dan invariansi matematis yang ditegakkan di level database.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {adrHighlights.map((adr) => (
              <div 
                key={adr.id}
                className="rounded-lg border border-white/10 bg-[#0d0d0d] p-5 hover:border-white/25 transition-colors"
              >
                <div className="flex items-center justify-between font-mono text-xs text-white/50 mb-2">
                  <span className="text-white font-semibold">{adr.id}</span>
                  <ShieldCheck className="size-3.5 text-white/60" />
                </div>
                <h4 className="font-display text-base font-bold text-white mb-2">
                  {adr.title}
                </h4>
                <p className="text-xs text-neutral-300 mb-3 font-sans leading-relaxed">
                  {adr.decision}
                </p>
                <div className="border-t border-white/10 pt-2 font-mono text-[11px] text-white/50">
                  <span className="text-white/40 font-semibold uppercase">Alasan: </span>
                  {adr.why}
                </div>
              </div>
            ))}
          </div>

          {/* Invariant Matrix */}
          <div className="mt-8 rounded-lg border border-white/10 bg-[#0d0d0d] p-5">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/60 mb-4 flex items-center gap-2">
              <Terminal className="size-3.5" /> Invariant Database yang Ditegakkan
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-white/40 pb-2">
                    <th className="py-2 pr-4 font-normal">KODE</th>
                    <th className="py-2 pr-4 font-normal">ATURAN INVARIAN</th>
                    <th className="py-2 font-normal">MEKANISME PENEGAKAN</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300">
                  {invariantHighlights.map((inv) => (
                    <tr key={inv.id}>
                      <td className="py-2.5 pr-4 text-white font-bold">{inv.id}</td>
                      <td className="py-2.5 pr-4 text-neutral-300">{inv.rule}</td>
                      <td className="py-2.5 text-white/50">{inv.enforced}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 03: Skills Matrix */}
        <section id="skills" className="mx-auto w-full max-w-5xl px-6 py-20 border-b border-white/10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest block">
                03 / Kapabilitas
              </span>
              <h2 className="font-display text-3xl font-bold text-white tracking-tight mt-1">
                Tech Stack &amp; Domain Knowledge
              </h2>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((grp) => (
              <div
                key={grp.group}
                className="rounded-lg border border-white/10 bg-[#0d0d0d] p-6 hover:border-white/20 transition-colors"
              >
                <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-white" />
                  {grp.group}
                </h3>
                <ul className="space-y-2.5">
                  {grp.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-neutral-300 font-sans">
                      <span className="size-1 bg-white/40 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Principles */}
          <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-6">
            <h4 className="font-mono text-xs text-white/50 uppercase tracking-widest mb-3">
              Prinsip Rekayasa Sistem
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((pr, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-white/40 mt-0.5">#{idx + 1}</span>
                  <p className="text-sm text-neutral-300 font-sans">{pr}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 04: Contact */}
        <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="rounded-xl border border-white/15 bg-[#0e0e0e] p-8 sm:p-12 text-center relative overflow-hidden tech-grid">
            <div className="max-w-xl mx-auto">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
                SIAP BERKONTRIBUSI SEGERA
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Mari Bangun Sistem yang Tangguh Bersama.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans">
                Terbuka untuk posisi full-time, contract, atau proyek arsitektur AI / ERP backend &amp; full-stack.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  onClick={() => (window.location.href = `mailto:${profile.email}`)}
                  className="bg-white text-black hover:bg-neutral-200 font-mono text-xs font-bold uppercase tracking-wider px-6 py-6"
                >
                  <Mail className="size-4 mr-2" /> {profile.email}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(profile.github, "_blank")}
                  className="border-white/20 bg-white/5 hover:bg-white/15 text-white font-mono text-xs py-6"
                >
                  <GithubMark className="size-4 mr-2" /> padma02-drmn
                </Button>
              </div>

              <div className="mt-8 font-mono text-xs text-neutral-500">
                Lokasi: {profile.location} · Telepon: {profile.phone}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 font-mono text-xs text-center text-white/40">
        © 2026 Kadek Padma Darmawan. Built with Vite, React 19, Tailwind CSS. No AI-slop design.
      </footer>

      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}
