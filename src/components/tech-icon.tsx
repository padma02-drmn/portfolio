import React from "react"
import {
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiN8n,
  SiBun,
  SiReact,
  SiVuedotjs,
  SiLaravel,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiGooglegemini,
  SiClaudecode,
  SiCloudflare,
  SiLinux,
  SiUbuntu,
  SiGithub,
  SiPhp,
  SiDrizzle,
} from "@icons-pack/react-simple-icons"
import { Terminal, Calculator, Bot, Sparkles, Cpu, Orbit } from "lucide-react"

export function TechIcon({ name, className = "size-3.5" }: { name: string; className?: string }) {
  const norm = name.toLowerCase()

  // 1. Claude Code
  if (norm.includes("claude")) {
    return <SiClaudecode className={className} />
  }

  // 2. OpenAI Codex
  if (norm.includes("codex")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.737a4.485 4.485 0 0 1 2.366-1.973V12.6a.766.766 0 0 0 .388.677l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 8.737zm15.827 3.843l-5.83-3.368 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.674 8.105v-5.682a.79.79 0 0 0-.417-.678zm2.253-3.877l-.142-.084-4.779-2.763a.776.776 0 0 0-.785 0L8.87 9.225V6.893a.076.076 0 0 1 .033-.062l4.84-2.796a4.5 4.5 0 0 1 6.677 4.631zm-11.87 3.327l2.67-1.542 2.67 1.542v3.085l-2.67 1.543-2.67-1.543z" />
      </svg>
    )
  }

  // 3. Antigravity CLI (Gravitational Orbit System)
  if (norm.includes("antigravity")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <path d="M12 2a10 10 0 0 0-9.54 13.06A10 10 0 0 0 12 22a10 10 0 0 0 9.54-6.94A10 10 0 0 0 12 2z" />
        <path d="m4.93 4.93 4.24 4.24" />
        <path d="m14.83 14.83 4.24 4.24" />
        <path d="m14.83 9.17 4.24-4.24" />
        <path d="m4.93 19.07 4.24-4.24" />
      </svg>
    )
  }

  // 4. Hermes Agent (Nous Research Fleet Terminal)
  if (norm.includes("hermes")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  }

  // 5. PostgreSQL
  if (norm.includes("postgres")) {
    return <SiPostgresql className={className} />
  }

  // 6. MySQL
  if (norm.includes("mysql")) {
    return <SiMysql className={className} />
  }

  // 7. n8n
  if (norm.includes("n8n")) {
    return <SiN8n className={className} />
  }

  // 8. Docker & Dokploy
  if (norm.includes("docker") || norm.includes("dokploy")) {
    return <SiDocker className={className} />
  }

  // 9. Bun
  if (norm.includes("bun")) {
    return <SiBun className={className} />
  }

  // 10. React
  if (norm.includes("react")) {
    return <SiReact className={className} />
  }

  // 11. Vue
  if (norm.includes("vue")) {
    return <SiVuedotjs className={className} />
  }

  // 12. Laravel & PHP
  if (norm.includes("laravel")) {
    return <SiLaravel className={className} />
  }
  if (norm.includes("php")) {
    return <SiPhp className={className} />
  }

  // 13. TypeScript & JavaScript
  if (norm.includes("typescript")) {
    return <SiTypescript className={className} />
  }
  if (norm.includes("javascript")) {
    return <SiJavascript className={className} />
  }

  // 14. Tailwind CSS & Vite
  if (norm.includes("tailwind")) {
    return <SiTailwindcss className={className} />
  }
  if (norm.includes("vite")) {
    return <SiVite className={className} />
  }

  // 15. AI / Gemini
  if (norm.includes("gemini")) {
    return <SiGooglegemini className={className} />
  }
  if (norm.includes("agent") || norm.includes("ai") || norm.includes("llm")) {
    return <Bot className={className} />
  }

  // 16. Drizzle ORM
  if (norm.includes("drizzle")) {
    return <SiDrizzle className={className} />
  }

  // 17. Cloudflare & Infra
  if (norm.includes("cloudflare")) {
    return <SiCloudflare className={className} />
  }
  if (norm.includes("ubuntu")) {
    return <SiUbuntu className={className} />
  }
  if (norm.includes("linux") || norm.includes("vps")) {
    return <SiLinux className={className} />
  }
  if (norm.includes("github")) {
    return <SiGithub className={className} />
  }

  // 18. Akuntansi, Finansial, Ledger
  if (
    norm.includes("akuntansi") ||
    norm.includes("coa") ||
    norm.includes("jurnal") ||
    norm.includes("fifo") ||
    norm.includes("bom") ||
    norm.includes("double-entry") ||
    norm.includes("rupiah") ||
    norm.includes("ar/ap")
  ) {
    return <Calculator className={className} />
  }

  // Fallback default
  return <Terminal className={className} />
}
