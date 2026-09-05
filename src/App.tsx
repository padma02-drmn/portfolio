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
  Download,
  Activity,
  Code2,
  FileCheck,
  Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubMark } from "@/components/github-mark"
import IntroOverlay from "@/components/intro-overlay"
import { ProjectDialog } from "@/components/project-dialog"
import { TechIcon } from "@/components/tech-icon"
import { MetricsSimulator } from "@/components/metrics-simulator"
import { ArchitectureFlowchart } from "@/components/architecture-flowchart"
import {
  accountingDomain,
  adrHighlights,
  invariantHighlights,
  principles,
  profile,
  projects,
  skillGroups,
  type LocalizedProject,
} from "@/data/portfolio"
import { useLang } from "@/context/language-context"

function Header() {
  const { lang, setLang, t } = useLang()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#fafafa]/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="flex size-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="font-mono text-xs font-bold tracking-wider uppercase text-black">
            padma<span className="text-neutral-400">.sys</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-neutral-500">
          <a href="#about" className="hover:text-black transition-colors">{t("01.BIOGRAFI", "01.ABOUT")}</a>
          <a href="#projects" className="hover:text-black transition-colors">{t("02.PROYEK", "02.PROJECTS")}</a>
          <a href="#accounting" className="hover:text-black transition-colors">{t("03.AKUNTANSI", "03.ACCOUNTING")}</a>
          <a href="#architecture" className="hover:text-black transition-colors">{t("04.ARSITEKTUR", "04.ARCHITECTURE")}</a>
          <a href="#skills" className="hover:text-black transition-colors">{t("05.SKILLS", "05.SKILLS")}</a>
          <a href="#contact" className="hover:text-black transition-colors">{t("06.KONTAK", "06.CONTACT")}</a>
        </nav>

        {/* Language Switcher & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg border border-black/10 bg-white p-0.5 font-mono text-xs">
            <button
              onClick={() => setLang("id")}
              className={`px-2 py-1 rounded font-bold transition-all ${
                lang === "id" ? "bg-black text-white shadow-xs" : "text-neutral-500 hover:text-black"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded font-bold transition-all ${
                lang === "en" ? "bg-black text-white shadow-xs" : "text-neutral-500 hover:text-black"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded border border-black/10 text-neutral-700 hover:text-black"
            aria-label="Toggle Navigation Menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              {mobileMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-black/10 bg-white px-6 py-4 space-y-3 font-mono text-xs">
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-neutral-700 hover:text-black font-semibold border-b border-black/5"
          >
            {t("01. BIOGRAFI", "01. ABOUT")}
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-neutral-700 hover:text-black font-semibold border-b border-black/5"
          >
            {t("02. PROYEK", "02. PROJECTS")}
          </a>
          <a 
            href="#accounting" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-neutral-700 hover:text-black font-semibold border-b border-black/5"
          >
            {t("03. AKUNTANSI", "03. ACCOUNTING")}
          </a>
          <a 
            href="#architecture" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-neutral-700 hover:text-black font-semibold border-b border-black/5"
          >
            {t("04. ARSITEKTUR", "04. ARCHITECTURE")}
          </a>
          <a 
            href="#skills" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-neutral-700 hover:text-black font-semibold border-b border-black/5"
          >
            {t("05. SKILLS", "05. SKILLS")}
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-neutral-700 hover:text-black font-semibold"
          >
            {t("06. KONTAK", "06. CONTACT")}
          </a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  const { lang, t } = useLang()
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
              <span>{t("PRODUCTION-GRADE ERP & AI AGENT ARCHITECTURE", "PRODUCTION-GRADE ERP & AI AGENT ARCHITECTURE")}</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-black font-display uppercase leading-[1.08]">
              KADEK PADMA<br />
              <span className="text-neutral-400">DARMAWAN.</span>
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-2.5 font-mono text-xs text-neutral-700">
              <span className="flex items-center gap-1.5 bg-neutral-100 px-2.5 py-1 rounded border border-black/5">
                <Cpu className="size-3.5 text-black" /> {t(profile.role.id, profile.role.en)}
              </span>
              <span className="flex items-center gap-1.5 bg-neutral-100 px-2.5 py-1 rounded border border-black/5">
                <Layers className="size-3.5 text-black" /> {t("Full-Stack Arsitektur", "Full-Stack Architecture")}
              </span>
              <span className="flex items-center gap-1.5 text-neutral-500">
                <MapPin className="size-3.5" /> {t(profile.location.id, profile.location.en)}
              </span>
            </div>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-neutral-700 font-sans">
              {t(profile.summary.id, profile.summary.en)}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button 
                onClick={() => (window.location.href = `mailto:${profile.email}`)}
                className="bg-black text-white hover:bg-neutral-800 font-mono text-xs font-semibold uppercase tracking-wider px-5 py-5 rounded shadow-sm"
              >
                <Mail className="size-4 mr-2" /> {t("Hubungi via Email", "Contact via Email")}
              </Button>

              <Button 
                onClick={() => window.open("/cv-padma.pdf", "_blank")}
                className="bg-emerald-700 text-white hover:bg-emerald-800 font-mono text-xs font-semibold uppercase tracking-wider px-5 py-5 rounded shadow-sm"
              >
                <Download className="size-4 mr-2" /> {t("Unduh CV (PDF)", "Download CV (PDF)")}
              </Button>

              <Button 
                variant="outline" 
                onClick={copyEmail}
                className="border-black/15 bg-white hover:bg-neutral-100 text-black font-mono text-xs rounded py-5"
              >
                {copied ? <Check className="size-4 mr-2 text-emerald-600" /> : <Copy className="size-4 mr-2" />}
                {copied ? t("Email Tersalin", "Email Copied") : t("Salin Email", "Copy Email")}
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

      {/* Metrics Impact Bar */}
      <div className="border-t border-black/10 bg-neutral-50/70">
        <div className="mx-auto max-w-5xl px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs divide-y sm:divide-y-0 sm:divide-x divide-black/10">
          <div className="flex items-center gap-3 pt-2 sm:pt-0">
            <Activity className="size-4 text-emerald-700 flex-shrink-0" />
            <div>
              <span className="text-black font-bold text-sm sm:text-base block leading-none">62/62 (100%)</span>
              <span className="text-neutral-500 text-[11px]">{t("Feature Tests Pass", "Feature Tests Pass")}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pl-4">
            <FileCheck className="size-4 text-black flex-shrink-0" />
            <div>
              <span className="text-black font-bold text-sm sm:text-base block leading-none">35+ ADR</span>
              <span className="text-neutral-500 text-[11px]">{t("Architecture Records", "Architecture Decisions")}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pl-4">
            <Code2 className="size-4 text-black flex-shrink-0" />
            <div>
              <span className="text-black font-bold text-sm sm:text-base block leading-none">0.00% Float Error</span>
              <span className="text-neutral-500 text-[11px]">{t("Integer Bigint Math", "Integer Bigint Math")}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pl-4">
            <ShieldCheck className="size-4 text-emerald-700 flex-shrink-0" />
            <div>
              <span className="text-black font-bold text-sm sm:text-base block leading-none">4 Deployed Apps</span>
              <span className="text-neutral-500 text-[11px]">{t("Production Verified", "Production Verified")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, onOpen }: { project: LocalizedProject; onOpen: () => void }) {
  const { lang, t } = useLang()

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
            {t(project.tagline.id, project.tagline.en)}
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
        {t(project.problem.id, project.problem.en)}
      </p>

      {/* Horizontal Scrollable Screenshots Carousel */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
              {t("Tangkapan Layar & Arsitektur Visual:", "Screenshots & System Overview:")}
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
                    {t("Perbesar", "Enlarge")}
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
          {t("Solusi & Inovasi Arsitektur:", "Key Engineered Solutions:")}
        </span>
        <ul className="space-y-2 text-sm text-neutral-800 font-sans">
          {(lang === "en" ? project.solutions.en : project.solutions.id).slice(0, 3).map((s, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-neutral-400 font-mono text-xs mt-0.5 font-bold">0{i+1}.</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Stack with Tech Icons */}
      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((tItem) => (
          <span
            key={tItem}
            className="inline-flex items-center gap-1.5 rounded border border-black/10 bg-neutral-100 px-2.5 py-1 font-mono text-[11px] text-neutral-800"
          >
            <TechIcon name={tItem} className="size-3 text-neutral-600" />
            <span>{tItem}</span>
          </span>
        ))}
      </div>

      <div className="mt-5 pt-3 border-t border-black/5 flex justify-end">
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-1 font-mono text-xs text-black font-semibold hover:underline transition-colors"
        >
          {t("Lihat dokumentasi lengkap & test spec", "View complete spec & test evidence")}{" "}
          <ArrowUpRight className="size-3" />
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const { lang, t } = useLang()
  const [selectedProject, setSelectedProject] = useState<LocalizedProject | null>(null)

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
                {t("01 / Profil & Latar Belakang", "01 / Background & Narrative")}
              </span>
              <h2 className="font-display text-3xl font-bold text-black tracking-tight mt-1">
                {t("Biografi & Filosofi Rekayasa", "Biography & Engineering Philosophy")}
              </h2>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-neutral-500">
              {t("PRINSIP OPERASIONAL", "OPERATIONAL REALITIES")}
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed font-sans">
              {(lang === "en" ? profile.bio.story.en : profile.bio.story.id).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Facts Card */}
            <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm space-y-4 font-mono text-xs">
              <div className="border-b border-black/10 pb-3">
                <span className="text-neutral-400 block mb-1">{t("DOMISILI ASLI", "LOCATION")}</span>
                <span className="text-black font-bold text-sm">{t(profile.bio.origin.id, profile.bio.origin.en)}</span>
              </div>
              <div className="border-b border-black/10 pb-3">
                <span className="text-neutral-400 block mb-1">{t("KELAHIRAN", "BORN")}</span>
                <span className="text-black font-bold">{t(profile.bio.birth.id, profile.bio.birth.en)}</span>
              </div>
              <div className="border-b border-black/10 pb-3">
                <span className="text-neutral-400 block mb-1">{t("PENDIDIKAN", "EDUCATION")}</span>
                <span className="text-black font-bold">{t(profile.bio.education.id, profile.bio.education.en)}</span>
              </div>
              <div>
                <span className="text-neutral-400 block mb-1">CORE FOCUS</span>
                <span className="text-neutral-800 leading-normal block">
                  Deterministic ERP, Sandboxed LLM Agents, Double-entry Accounting, Offline-first POS.
                </span>
              </div>
            </div>
          </div>

          {/* Timeline Milestones */}
          <div className="mt-12 pt-8 border-t border-black/10">
            <h3 className="font-mono text-xs text-neutral-500 uppercase tracking-wider mb-6 font-bold">
              {t("Jejak Pengalaman Lapangan & Pengembangan", "Operational & Engineering Milestones")}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {profile.bio.milestones.map((m, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-white border border-black/10 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block mb-2">
                      {m.year}
                    </span>
                    <h4 className="font-display text-sm font-bold text-black mb-2">
                      {t(m.role.id, m.role.en)}
                    </h4>
                    <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                      {t(m.desc.id, m.desc.en)}
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
                {t("02 / Portfolio Proyek", "02 / Systems Portfolio")}
              </span>
              <h2 className="font-display text-3xl font-bold text-black tracking-tight mt-1">
                {t("Sistem & Aplikasi Produksi", "Production-Grade Systems")}
              </h2>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-neutral-500">
              {t("4 SISTEM TERVALIDASI", "4 VERIFIED PRODUCTION SYSTEMS")}
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

          {/* Visual Architecture Flowchart */}
          <div className="mt-12">
            <ArchitectureFlowchart />
          </div>
        </section>

        {/* Section 03: Accounting Engineering & Domain Expertise */}
        <section id="accounting" className="mx-auto w-full max-w-5xl px-6 py-20 border-b border-black/10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block font-semibold">
                {t("03 / Domain Bisnis & Finansial", "03 / Business & Accounting Domain")}
              </span>
              <h2 className="font-display text-3xl font-bold text-black tracking-tight mt-1">
                {t(accountingDomain.title.id, accountingDomain.title.en)}
              </h2>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-neutral-500">
              DOUBLE-ENTRY &amp; SAK COMPLIANT
            </span>
          </div>

          <p className="text-neutral-600 max-w-3xl text-sm sm:text-base leading-relaxed mb-10">
            {t(accountingDomain.subtitle.id, accountingDomain.subtitle.en)}
          </p>

          {/* Interactive Hotel Simulator */}
          <div className="mb-10">
            <MetricsSimulator />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {accountingDomain.coreConcepts.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-xl border border-black/10 bg-white p-6 shadow-sm hover:border-black/30 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 mb-2 font-semibold">
                    <span>DOM-0{idx + 1}</span>
                    <span>//</span>
                    <span className="text-emerald-700 font-bold">CORE PRINCIPLE</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-black mb-3">
                    {t(item.concept.id, item.concept.en)}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4 font-sans">
                    {t(item.desc.id, item.desc.en)}
                  </p>
                </div>

                <div className="border-t border-black/10 pt-3 bg-neutral-50 -mx-6 -mb-6 p-4 rounded-b-xl border-dashed">
                  <span className="font-mono text-[11px] text-neutral-500 block uppercase font-bold mb-0.5">
                    {t("Penerapan Nyata di Kode:", "Production Implementation:")}
                  </span>
                  <p className="font-mono text-xs text-neutral-800">
                    {t(item.implementation.id, item.implementation.en)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Architecture & Decision Records */}
        <section id="architecture" className="mx-auto w-full max-w-5xl px-6 py-20 border-b border-black/10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block font-semibold">
                {t("04 / Arsitektur", "04 / System Architecture")}
              </span>
              <h2 className="font-display text-3xl font-bold text-black tracking-tight mt-1">
                Engineering Invariants &amp; ADR
              </h2>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-neutral-500">
              {t("KONTRAK DETERMINISTIK", "DETERMINISTIC CONTRACTS")}
            </span>
          </div>

          <p className="text-neutral-600 max-w-2xl text-sm sm:text-base leading-relaxed mb-8">
            {t(
              "Sistem akuntansi dan ERP tidak boleh gagal secara diam-diam. Kualitas sistem dibuktikan melalui Architecture Decision Records (ADR) dan invariansi matematis yang ditegakkan di level database.",
              "Accounting and ERP systems must never fail silently. True software robustness is evidenced through Architecture Decision Records (ADRs) and mathematical invariants enforced at the database layer."
            )}
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
                  {t(adr.title.id, adr.title.en)}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 mb-4 font-sans leading-relaxed">
                  {t(adr.decision.id, adr.decision.en)}
                </p>
                <div className="border-t border-black/10 pt-3 font-mono text-[11px] text-neutral-600">
                  <span className="text-black font-bold uppercase">{t("Mengapa: ", "Rationale: ")}</span>
                  {t(adr.why.id, adr.why.en)}
                </div>
              </div>
            ))}
          </div>

          {/* Invariant Matrix */}
          <div className="mt-8 rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-600 mb-4 flex items-center gap-2 font-bold">
              <Terminal className="size-3.5 text-black" /> {t("Invariant Database yang Ditegakkan", "Enforced Database Invariants")}
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-black/10 text-neutral-500 pb-2">
                    <th className="py-2.5 pr-4 font-bold">{t("KODE", "CODE")}</th>
                    <th className="py-2.5 pr-4 font-bold">{t("ATURAN INVARIAN", "INVARIANT RULE")}</th>
                    <th className="py-2.5 font-bold">{t("PENEGAKAN", "ENFORCEMENT")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-neutral-800">
                  {invariantHighlights.map((inv) => (
                    <tr key={inv.id}>
                      <td className="py-3 pr-4 text-black font-bold">{inv.id}</td>
                      <td className="py-3 pr-4 text-neutral-700 font-sans">{t(inv.rule.id, inv.rule.en)}</td>
                      <td className="py-3 font-mono text-neutral-600 bg-neutral-50 px-2 rounded">{t(inv.enforced.id, inv.enforced.en)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 05: Skills Matrix */}
        <section id="skills" className="mx-auto w-full max-w-5xl px-6 py-20 border-b border-black/10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block font-semibold">
                {t("05 / Kapabilitas & Tools", "05 / Capabilities & Toolchain")}
              </span>
              <h2 className="font-display text-3xl font-bold text-black tracking-tight mt-1">
                Tech Stack &amp; Domain Knowledge
              </h2>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-neutral-500">
              MODERN AGENTIC TOOLCHAIN
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((grp) => (
              <div
                key={grp.group.id}
                className="rounded-xl border border-black/10 bg-white p-6 shadow-sm hover:border-black/25 transition-all"
              >
                <h3 className="font-display text-lg font-bold text-black mb-4 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-black" />
                  {t(grp.group.id, grp.group.en)}
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
              {t("Prinsip Rekayasa Sistem", "Core Engineering Tenets")}
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((pr, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded bg-neutral-50 border border-black/5">
                  <span className="font-mono text-xs text-neutral-400 mt-0.5 font-bold">0{idx + 1}</span>
                  <p className="text-sm text-neutral-800 font-sans">{t(pr.id, pr.en)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 06: Contact */}
        <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="rounded-2xl border border-black/10 bg-white p-8 sm:p-14 text-center relative overflow-hidden tech-grid shadow-md">
            <div className="max-w-xl mx-auto">
              <span className="font-mono text-xs text-emerald-700 uppercase tracking-widest font-bold">
                {t("SIAP BERKONTRIBUSI SEGERA", "OPEN FOR OPPORTUNITIES")}
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-black tracking-tight">
                {t("Mari Bangun Sistem yang Tangguh Bersama.", "Let's Engineer Resilient Systems Together.")}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-600 font-sans">
                {t(
                  "Terbuka untuk posisi full-time, remote contract, atau proyek arsitektur AI / ERP backend & full-stack.",
                  "Available for full-time roles, remote contracts, or enterprise AI / ERP backend consulting."
                )}
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
                {t("Lokasi:", "Location:")} {t(profile.location.id, profile.location.en)} · {t("Telepon:", "Phone:")} {profile.phone}
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
