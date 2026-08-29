import { useState } from "react"
import { Mail, MapPin, Phone, ExternalLink, FileText, Shield, Sparkles, ArrowUpRight } from "lucide-react"
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
          padma<span className="text-primary">.dev</span>
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
    <section id="top" className="relative overflow-hidden border-b">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.696_0.17_162.48/0.08),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <Badge variant="outline" className="animate-[intro-fade_0.8s_ease-out_both] font-mono">
          <Sparkles className="mr-1 size-3 text-primary" /> Open to work
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
            <GithubMark className="size-4" /> GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const cover = project.gallery?.[0]
  return (
    <button
      onClick={onOpen}
      className="group relative block w-full overflow-hidden rounded-xl border text-left transition-colors hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      aria-label={`Buka detail ${project.name}`}
    >
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-muted">
        {cover ? (
          <img
            src={cover}
            alt={`${project.name} — tampilan utama`}
            loading="lazy"
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className={`flex size-full items-center justify-center bg-gradient-to-br ${project.accent ?? "from-muted to-transparent"}`}>
            <span className="font-mono text-sm text-muted-foreground">{project.name}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute right-4 top-4 rounded-full bg-background/80 p-2 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </div>
      </div>
      <div className="relative -mt-14 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <CardTitle className="text-lg">{project.name}</CardTitle>
          <span className="font-mono text-xs text-muted-foreground">{project.period}</span>
          {project.live ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-medium text-primary">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" /> LIVE
            </span>
          ) : null}
        </div>
        <CardDescription className="mt-1.5">{project.tagline}</CardDescription>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 6).map((s) => (
            <Badge key={s} variant="secondary" className="font-mono text-[11px]">
              {s}
            </Badge>
          ))}
          {project.stack.length > 6 ? (
            <Badge variant="outline" className="font-mono text-[11px]">
              +{project.stack.length - 6}
            </Badge>
          ) : null}
        </div>
      </div>
    </button>
  )
}

function Projects({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Sistem ERP production-grade dengan integrasi AI — klik untuk lihat masalah, penyelesaian, stack, dan screenshot."
    >
      <div className="flex flex-col gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} onOpen={() => onOpen(p)} />
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
                <FileText className="size-4 text-primary" />
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
            <Shield className="size-4 text-primary" />
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
            <span className="mt-0.5 font-mono text-primary">→</span>
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
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
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
            <Mail className="size-4 text-primary" /> {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:underline">
            <GithubMark className="size-4 text-primary" /> github.com/padma02-drmn
          </a>
          <span className="flex items-center gap-3">
            <Phone className="size-4 text-primary" /> {profile.phone}
          </span>
          <span className="flex items-center gap-3">
            <MapPin className="size-4 text-primary" /> {profile.location}
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
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <div className="min-h-svh">
      <IntroOverlay />
      <Header />
      <main>
        <Hero />
        <Projects onOpen={setSelected} />
        <Engineering />
        <Skills />
      </main>
      <Contact />
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
