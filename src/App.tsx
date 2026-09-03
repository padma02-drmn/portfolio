import { useState } from "react"
import { 
  Mail, 
  MapPin, 
  ExternalLink, 
  ArrowUpRight, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Terminal, 
  Copy,
  Check,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubMark } from "@/components/github-mark"
import IntroOverlay from "@/components/intro-overlay"
import { ProjectDialog } from "@/components/project-dialog"
import { TechIcon } from "@/components/tech-icon"
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
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#fafafa]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="flex size-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="font-mono text-xs font-bold tracking-wider uppercase text-black">
            padma<span className="text-neutral-400">.sys</span>
          </span>
        </a>
        <nav className="flex items-center gap-6 font-mono text-xs text-neutral-500">
          <a href="#about" className="hover:text-black transition-colors">01.BIOGRAFI</a>
          <a href="#projects" className="hover:text-black transition-colors">02.PROYEK</a>
          <a href="#architecture" className="hover:text-black transition-colors">03.ARSITEKTUR</a>
          <a href="#skills" className="hover:text-black transition-colors">04.SKILLS</a>
          <a href="#contact" className="hover:text-black transition-colors">05.KONTAK</a>
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
    <section id="top" className="relative overflow-hidden border-b border-black/10 tech-grid bg-white">
      <div className="relative mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-10">
          
          {/* Text Hero */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-neutral-100 px-3 py-1 font-mono text-xs text-neutral-800">
              <Terminal className="size-3 text-black" />
              <span>PRODUCTION-GRADE ERP & AI AGENT ARCHITECTURE</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-black font-display uppercase leading-[1.08]">
              KADEK PADMA<br />
              <span className="text-neutral-400">DARMAWAN.</span>
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-2.5 font-mono text-xs text-neutral-700">
              <span className="flex items-center gap-1.5 bg-neutral-100 px-2.5 py-1 rounded border border-black/5">
                <Cpu className="size-3.5 text-black" /> AI Application Engineer
              </span>
              <span className="flex items-center gap-1.5 bg-neutral-100 px-2.5 py-1 rounded border border-black/5">
                <Layers className="size-3.5 text-black" /> Full-Stack Architecture
              </span>
              <span className="flex items-center gap-1.5 text-neutral-500">
                <MapPin className="size-3.5" /> {profile.location}
              </span>
            </div>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-neutral-700 font-sans">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button 
                onClick={() => (window.location.href = `mailto:${profile.email}`)}
                className="bg-black text-white hover:bg-neutral-800 font-mono text-xs font-semibold uppercase tracking-wider px-5 py-5 rounded shadow-sm"
              >
                <Mail className="size-4 mr-2" /> Hubungi via Email
              </Button>

              <Button 
                variant="outline" 
                onClick={copyEmail}
                className="border-black/15 bg-white hover:bg-neutral-100 text-black font-mono text-xs rounded py-5"
              >
                {copied ? <Check className="size-4 mr-2 text-emerald-600" /> : <Copy className="size-4 mr-2" />}
                {copied ? "Email Tersalin" : "Salin Email"}
              </Button>

              <Button 
                variant="outline" 
                onClick={() => window.open(profile.github, "_blank")}
                className="border-black/15 bg-white hover:bg-neutral-100 text-black font-mono text-xs rounded py-5"
              >
                <GithubMark className="size-4 mr-2" /> GitHub
              </Button>
            </div>
          </div>

          {/* User Photo Avatar Card */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative p-2 rounded-2xl border border-black/10 bg-[#fafafa] shadow-md">
              <div className="relative size-44 sm:size-52 overflow-hidden rounded-xl border border-black/10 bg-neutral-100">
                <img
                  src="/avatar.jpg"
                  alt="Kadek Padma Darmawan"
                  className="size-full object-cover object-top grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mt-2.5 text-center font-mono text-[11px] text-neutral-500 flex items-center justify-center gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                <span>ONLINE // BALI, ID</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <div className="group relative rounded-xl border border-black/10 bg-white p-6 transition-all duration-200 hover:border-black/30 hover:shadow-lg">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-display text-2xl font-bold text-black tracking-tight">
              {project.name}
            </h3>
            <span className="font-mono text-xs text-neutral-500 border border-black/10 px-2 py-0.5 rounded bg-neutral-50">
              {project.period}
            </span>
          </div>
          <p className="mt-1 text-sm text-neutral-600 font-medium">
            {project.tagline}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded bg-black text-white px-3.5 py-1.5 font-mono text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-sm"
            >
              Live Demo <ExternalLink className="size-3" />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded border border-black/15 bg-neutral-50 px-3 py-1.5 font-mono text-xs text-black hover:bg-neutral-100 transition-colors"
            >
              <GithubMark className="size-3" /> Source
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm text-neutral-700 leading-relaxed font-sans">
        {project.problem}
      </p>

      {/* Horizontal Scrollable Screenshots Carousel */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
              Preview Layar ({project.gallery.length} tangkapan layar — geser horizontal):
            </span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-3 pt-1 custom-scrollbar snap-x">
            {project.gallery.map((img, idx) => (
              <div 
                key={idx} 
                onClick={onOpen}
                className="flex-shrink-0 w-64 sm:w-80 aspect-[16/10] overflow-hidden rounded-lg border border-black/10 bg-neutral-100 cursor-pointer group/img snap-start relative hover:border-black transition-all"
              >
                <img
                  src={img}
                  alt={`${project.name} preview ${idx + 1}`}
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover/img:opacity-100 bg-white/95 text-black font-mono text-[11px] px-2.5 py-1 rounded shadow transition-opacity">
                    Perbesar
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key solutions */}
      <div className="mt-5 border-t border-black/10 pt-4">
        <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider block mb-2 font-semibold">
          Solusi &amp; Inovasi Arsitektur:
        </span>
        <ul className="space-y-2 text-sm text-neutral-800 font-sans">
          {project.solutions.slice(0, 3).map((s, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-neutral-400 font-mono text-xs mt-0.5 font-bold">0{i+1}.</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Stack with Tech Icons */}
      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1.5 rounded border border-black/10 bg-neutral-100 px-2.5 py-1 font-mono text-[11px] text-neutral-800"
          >
            <TechIcon name={t} className="size-3 text-neutral-600" />
            <span>{t}</span>
          </span>
        ))}
      </div>

      <div className="mt-5 pt-3 border-t border-black/5 flex justify-end">
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-1 font-mono text-xs text-black font-semibold hover:underline transition-colors"
        >
          Lihat dokumentasi lengkap &amp; test spec <ArrowUpRight className="size-3" />
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111111]">
      <IntroOverlay />
      <Header />

      <main>
        <Hero />

        {/* Section: Biografi Lengkap & Background */}
        <section id="about" className="mx-auto w-full max-w-5xl px-6 py-20 border-b border-black/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block font-semibold">
                01 / Profil &amp; Latar Belakang
              </span>
              <h2 className="font-display text-3xl font-bold text-black tracking-tight mt-1">
                Biografi &amp; Filosofi Rekayasa
              </h2>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-neutral-500">
              PRINSIP OPERASIONAL
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed font-sans">
              {profile.bio.story.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Facts Card */}
            <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm space-y-4 font-mono text-xs">
              <div className="border-b border-black/10 pb-3">
                <span className="text-neutral-400 block mb-1">DOMISILI ASLI</span>
                <span className="text-black font-bold text-sm">{profile.bio.origin}</span>
              </div>
              <div className="border-b border-black/10 pb-3">
                <span className="text-neutral-400 block mb-1">KELAHIRAN</span>
                <span className="text-black font-bold">{profile.bio.birth}</span>
              </div>
              <div className="border-b border-black/10 pb-3">
                <span className="text-neutral-400 block mb-1">PENDIDIKAN</span>
                <span className="text-black font-bold">{profile.bio.education}</span>
              </div>
              <div>
                <span className="text-neutral-400 block mb-1">SPECIAL FOCUS</span>
                <span className="text-neutral-800 leading-normal block">
                  Deterministic ERP, LLM Agents (Tool-use), Double-entry Accounting, Offline-first POS.
                </span>
              </div>
            </div>
          </div>

          {/* Timeline Milestones */}
          <div className="mt-12 pt-8 border-t border-black/10">
            <h3 className="font-mono text-xs text-neutral-500 uppercase tracking-wider mb-6 font-bold">
              Jejak Pengalaman Lapangan &amp; Pengembangan
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {profile.bio.milestones.map((m, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-white border border-black/10 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block mb-2">
                      {m.year}
                    </span>
                    <h4 className="font-display text-sm font-bold text-black mb-2">
                      {m.role}
                    </h4>
                    <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 02: Projects */}
        <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-20 border-b border-black/10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block font-semibold">
                02 / Portfolio Proyek
              </span>
              <h2 className="font-display text-3xl font-bold text-black tracking-tight mt-1">
                Sistem &amp; Aplikasi Produksi
              </h2>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-neutral-500">
              3 SISTEM TERVALIDASI
            </span>
          </div>

          <div className="space-y-10">
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
        <section id="architecture" className="mx-auto w-full max-w-5xl px-6 py-20 border-b border-black/10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block font-semibold">
                02 / Arsitektur
              </span>
              <h2 className="font-display text-3xl font-bold text-black tracking-tight mt-1">
                Engineering Invariants &amp; ADR
              </h2>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-neutral-500">
              KONTRAK DETERMINISTIK
            </span>
          </div>

          <p className="text-neutral-600 max-w-2xl text-sm sm:text-base leading-relaxed mb-8">
            Sistem akuntansi dan ERP tidak boleh gagal secara diam-diam. Kualitas sistem dibuktikan melalui Architecture Decision Records (ADR) dan invariansi matematis yang ditegakkan di level database.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {adrHighlights.map((adr) => (
              <div 
                key={adr.id}
                className="rounded-xl border border-black/10 bg-white p-6 hover:border-black/25 transition-all shadow-sm"
              >
                <div className="flex items-center justify-between font-mono text-xs text-neutral-500 mb-2">
                  <span className="text-black font-bold">{adr.id}</span>
                  <ShieldCheck className="size-4 text-emerald-600" />
                </div>
                <h4 className="font-display text-base font-bold text-black mb-2">
                  {adr.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 mb-4 font-sans leading-relaxed">
                  {adr.decision}
                </p>
                <div className="border-t border-black/10 pt-3 font-mono text-[11px] text-neutral-600">
                  <span className="text-black font-bold uppercase">Mengapa: </span>
                  {adr.why}
                </div>
              </div>
            ))}
          </div>

          {/* Invariant Matrix */}
          <div className="mt-8 rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-600 mb-4 flex items-center gap-2 font-bold">
              <Terminal className="size-3.5 text-black" /> Invariant Database yang Ditegakkan
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-black/10 text-neutral-500 pb-2">
                    <th className="py-2.5 pr-4 font-bold">KODE</th>
                    <th className="py-2.5 pr-4 font-bold">ATURAN INVARIAN</th>
                    <th className="py-2.5 font-bold">PENEGAKAN</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-neutral-800">
                  {invariantHighlights.map((inv) => (
                    <tr key={inv.id}>
                      <td className="py-3 pr-4 text-black font-bold">{inv.id}</td>
                      <td className="py-3 pr-4 text-neutral-700 font-sans">{inv.rule}</td>
                      <td className="py-3 font-mono text-neutral-600 bg-neutral-50 px-2 rounded">{inv.enforced}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 03: Skills Matrix */}
        <section id="skills" className="mx-auto w-full max-w-5xl px-6 py-20 border-b border-black/10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block font-semibold">
                03 / Kapabilitas
              </span>
              <h2 className="font-display text-3xl font-bold text-black tracking-tight mt-1">
                Tech Stack &amp; Domain Knowledge
              </h2>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((grp) => (
              <div
                key={grp.group}
                className="rounded-xl border border-black/10 bg-white p-6 shadow-sm hover:border-black/25 transition-all"
              >
                <h3 className="font-display text-lg font-bold text-black mb-4 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-black" />
                  {grp.group}
                </h3>
                <ul className="space-y-3">
                  {grp.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-neutral-700 font-sans">
                      <TechIcon name={item} className="size-4 text-neutral-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Principles */}
          <div className="mt-8 rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4 font-bold">
              Prinsip Rekayasa Sistem
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((pr, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded bg-neutral-50 border border-black/5">
                  <span className="font-mono text-xs text-neutral-400 mt-0.5 font-bold">0{idx + 1}</span>
                  <p className="text-sm text-neutral-800 font-sans">{pr}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 04: Contact */}
        <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="rounded-2xl border border-black/10 bg-white p-8 sm:p-14 text-center relative overflow-hidden tech-grid shadow-md">
            <div className="max-w-xl mx-auto">
              <span className="font-mono text-xs text-emerald-700 uppercase tracking-widest font-bold">
                SIAP BERKONTRIBUSI SEGERA
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-black tracking-tight">
                Mari Bangun Sistem yang Tangguh Bersama.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-600 font-sans">
                Terbuka untuk posisi full-time, remote contract, atau proyek arsitektur AI / ERP backend &amp; full-stack.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  onClick={() => (window.location.href = `mailto:${profile.email}`)}
                  className="bg-black text-white hover:bg-neutral-800 font-mono text-xs font-bold uppercase tracking-wider px-6 py-5 shadow"
                >
                  <Mail className="size-4 mr-2" /> {profile.email}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(profile.github, "_blank")}
                  className="border-black/15 bg-white hover:bg-neutral-100 text-black font-mono text-xs py-5"
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

      <footer className="border-t border-black/10 py-8 font-mono text-xs text-center text-neutral-500 bg-white">
        © 2026 Kadek Padma Darmawan. Built with React 19, Tailwind CSS, Space Grotesk.
      </footer>

      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}
