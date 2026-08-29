import { Mail, MapPin, Phone, ExternalLink, FileText, Shield, Sparkles } from "lucide-react"

function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.2.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}
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
import {
  adrHighlights,
  invariantHighlights,
  principles,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio"

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle ? (
        <p className="text-muted-foreground mt-2 max-w-2xl text-sm sm:text-base">
          {subtitle}
        </p>
      ) : null}
      <div className="mt-8">{children}</div>
    </section>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-semibold">
          padma<span className="text-muted-foreground">.dev</span>
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
          <a href="#engineering" className="text-muted-foreground hover:text-foreground transition-colors">Engineering</a>
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="border-b">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <Badge variant="outline" className="font-mono">
          <Sparkles className="mr-1 size-3" /> Open to work
        </Badge>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
          {profile.role} — {profile.location}
        </p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed sm:text-lg">
          {profile.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={() => (window.location.href = `mailto:${profile.email}`)}>
            <Mail /> Hubungi saya
          </Button>
          <Button variant="outline" onClick={() => window.open(profile.github, "_blank")}>
            <GithubMark /> GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Sistem ERP production-grade dengan integrasi AI — bukan demo, sistem yang dipakai."
    >
      <div className="flex flex-col gap-6">
        {projects.map((p) => (
          <Card key={p.name} className="relative overflow-hidden">
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${p.accent ?? ""}`} />
            <CardHeader className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <CardTitle className="text-lg">{p.name}</CardTitle>
                <span className="text-muted-foreground text-xs font-mono">{p.period}</span>
              </div>
              <CardDescription>{p.tagline}</CardDescription>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {p.stack.map((s) => (
                  <Badge key={s} variant="secondary" className="font-mono text-[11px]">
                    {s}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="relative">
              <ul className="list-inside list-disc space-y-1.5 text-sm">
                {p.highlights.map((h) => (
                  <li key={h} className="text-muted-foreground leading-relaxed">
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-4 text-sm">
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-medium hover:underline"
                  >
                    Live <ExternalLink className="size-3.5" />
                  </a>
                ) : null}
                {p.repo ? (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-medium hover:underline"
                  >
                    <GithubMark className="size-3.5" /> Source
                  </a>
                ) : null}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

function Engineering() {
  return (
    <Section
      id="engineering"
      title="Engineering Docs"
      subtitle="Cara saya mikir tentang arsitektur — ADR (Architecture Decision Records) dan invariant tests dari ERP Resto & Coffee Shop. Kode bisa dibaca sendiri; alasan di balik keputusan ada di dokumen."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {adrHighlights.map((adr) => (
          <Card key={adr.id}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="size-4 text-muted-foreground" />
                <span className="font-mono text-xs text-muted-foreground">{adr.id}</span>
              </div>
              <CardTitle className="text-base">{adr.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="leading-relaxed">{adr.decision}</p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Kenapa: </span>
                {adr.why}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="size-4 text-muted-foreground" />
            <CardTitle className="text-base">Invariant tests — aturan yang tidak boleh dilanggar</CardTitle>
          </div>
          <CardDescription>
            Setiap invarian wajib punya satu test integrasi bernama sama dengan ID-nya, dijalankan dengan Postgres asli (Testcontainers), bukan mock.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="pb-2 pr-4 font-medium">ID</th>
                  <th className="pb-2 pr-4 font-medium">Aturan</th>
                  <th className="pb-2 font-medium">Penegakan</th>
                </tr>
              </thead>
              <tbody>
                {invariantHighlights.map((inv) => (
                  <tr key={inv.id} className="border-b last:border-0">
                    <td className="py-2.5 pr-4 font-mono text-xs">{inv.id}</td>
                    <td className="py-2.5 pr-4">{inv.rule}</td>
                    <td className="py-2.5 font-mono text-xs text-muted-foreground">{inv.enforced}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        {principles.map((pr) => (
          <div key={pr} className="flex items-start gap-2 rounded-lg border p-4 text-sm">
            <span className="mt-0.5 font-mono text-muted-foreground">→</span>
            <span className="leading-relaxed">{pr}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <Card key={g.group}>
            <CardHeader>
              <CardTitle className="text-base">{g.group}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm">
                {g.items.map((item) => (
                  <li key={item} className="text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 size-1 rounded-full bg-foreground/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <section id="contact" className="border-t">
      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Contact</h2>
        <p className="text-muted-foreground mt-2">
          Terbuka untuk posisi full-stack / AI application engineer — remote atau di Bali.
        </p>
        <Separator className="my-8" />
        <div className="grid gap-4 text-sm sm:grid-cols-2">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:underline">
            <Mail className="size-4 text-muted-foreground" /> {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:underline">
            <GithubMark className="size-4 text-muted-foreground" /> github.com/padma02-drmn
          </a>
          <span className="flex items-center gap-3">
            <Phone className="size-4 text-muted-foreground" /> {profile.phone}
          </span>
          <span className="flex items-center gap-3">
            <MapPin className="size-4 text-muted-foreground" /> {profile.location}
          </span>
        </div>
        <p className="text-muted-foreground mt-12 font-mono text-xs">
          © 2026 {profile.name} — dibangun dengan React + Vite + shadcn/ui
        </p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-svh">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Engineering />
        <Skills />
      </main>
      <Contact />
    </div>
  )
}
