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
  SiCloudflare,
  SiLinux,
  SiUbuntu,
  SiGithub,
  SiPhp,
  SiDrizzle,
} from "@icons-pack/react-simple-icons"
import { Terminal, Calculator, Layers } from "lucide-react"

export function TechIcon({ name, className = "size-3.5" }: { name: string; className?: string }) {
  const norm = name.toLowerCase()

  // 1. PostgreSQL
  if (norm.includes("postgres")) {
    return <SiPostgresql className={className} />
  }

  // 2. MySQL
  if (norm.includes("mysql")) {
    return <SiMysql className={className} />
  }

  // 3. n8n
  if (norm.includes("n8n")) {
    return <SiN8n className={className} />
  }

  // 4. Docker & Dokploy
  if (norm.includes("docker") || norm.includes("dokploy")) {
    return <SiDocker className={className} />
  }

  // 5. Bun
  if (norm.includes("bun")) {
    return <SiBun className={className} />
  }

  // 6. React
  if (norm.includes("react")) {
    return <SiReact className={className} />
  }

  // 7. Vue
  if (norm.includes("vue")) {
    return <SiVuedotjs className={className} />
  }

  // 8. Laravel & PHP
  if (norm.includes("laravel")) {
    return <SiLaravel className={className} />
  }
  if (norm.includes("php")) {
    return <SiPhp className={className} />
  }

  // 9. TypeScript & JavaScript
  if (norm.includes("typescript")) {
    return <SiTypescript className={className} />
  }
  if (norm.includes("javascript")) {
    return <SiJavascript className={className} />
  }

  // 10. Tailwind CSS & Vite
  if (norm.includes("tailwind")) {
    return <SiTailwindcss className={className} />
  }
  if (norm.includes("vite")) {
    return <SiVite className={className} />
  }

  // 11. AI / Gemini
  if (norm.includes("gemini") || norm.includes("ai") || norm.includes("llm") || norm.includes("agent")) {
    return <SiGooglegemini className={className} />
  }

  // 12. Drizzle ORM
  if (norm.includes("drizzle")) {
    return <SiDrizzle className={className} />
  }

  // 13. Cloudflare & Infra
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

  // 14. Akuntansi, Finansial, Ledger
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

  // Fallback
  return <Terminal className={className} />
}
