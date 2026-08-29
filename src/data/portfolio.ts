export const profile = {
  name: "Kadek Padma Darmawan",
  role: "AI Application Engineer / Full-Stack Developer",
  location: "Singaraja, Bali",
  email: "padmadarmawan351@gmail.com",
  github: "https://github.com/padma02-drmn",
  phone: "0899-3766-775",
  summary:
    "Membangun sistem ERP production-grade terintegrasi LLM (Gemini, OpenAI-compatible), multi-agent workflow, dan automation pipeline dengan n8n, MCP tools, dan Docker. Paham akuntansi bisnis nyata — double-entry, HPP FIFO, piutang/utang — jadi AI yang dibangun benar-benar berguna untuk operasional, bukan eksperimen.",
}

export type Project = {
  name: string
  tagline: string
  period: string
  stack: string[]
  highlights: string[]
  live?: string
  repo?: string
  accent?: string
}

export const projects: Project[] = [
  {
    name: "CAREDI ERP",
    tagline: "Sistem manajemen distributor FMCG — live di production",
    period: "2025–2026",
    stack: ["Laravel 13", "Vue 3", "TypeScript", "PostgreSQL", "Gemini AI", "n8n", "Docker", "Dokploy"],
    highlights: [
      "AI decision support in-app: Gemini function-calling memanggil 7 laporan tools (margin, piutang jatuh tempo, laba rugi) — read-only whitelist, aman untuk bisnis",
      "WhatsApp automation multi-agent: WAHA → n8n → Gemini extract item natural language → Laravel match DB → draft pesanan → auto-reply konfirmasi",
      "MCP integration: Claude Code deploy via Dokploy MCP, query DB via Supabase MCP, trigger workflow via n8n MCP",
      "Akuntansi double-entry append-only, HPP FIFO, multi-approval, cetak nota ESC-P dot matrix 3 rangkap",
      "62/62 feature tests passing, live di Hetzner VPS",
    ],
    live: "https://caredi-48-193-41-194.sslip.io",
    repo: "https://github.com/padma02-drmn/CAREDI",
    accent: "from-orange-500/20 to-transparent",
  },
  {
    name: "ERP Resto & Coffee Shop",
    tagline: "Multi-tenant, offline-first POS + akuntansi penuh untuk F&B",
    period: "2026",
    stack: ["React 19", "Vite 8", "Tailwind v4", "shadcn/ui", "Hono", "Drizzle", "PostgreSQL + RLS", "Capacitor", "Bun"],
    highlights: [
      "Tiga buku besar sebagai kontrak antar modul: stock ledger, value ledger, document — modul tidak boleh saling memanggil",
      "35 Architecture Decision Records: offline-first wajib, uang sebagai integer rupiah, RLS sebagai jaring pengaman, UUIDv7 client-generated, tax engine pure function",
      "Tiga lapis pertahanan: constraint DB (keras) → test integrasi Testcontainers (transaksional) → validasi + audit (penjaga kewajaran)",
      "POS offline-first dengan SQLite lokal — kasir tidak berhenti saat internet mati",
      "Tax engine PBJT/PB1 sebagai pure function, cost guard, FEFO selektif, moving average dari ledger",
    ],
    repo: "https://github.com/padma02-drmn/erp-resto-coffe",
    accent: "from-emerald-500/20 to-transparent",
  },
  {
    name: "SIMASET",
    tagline: "Sistem manajemen aset RSUD Buleleng + SIDDENI",
    period: "2026",
    stack: ["Laravel", "MySQL", "RBAC", "spatie", "rappasoft"],
    highlights: [
      "RBAC granular: teknisi = maintenance.execute, pengelola = manage + execute",
      "Notifikasi due-date: DB + mail + WhatsApp (Fonnte)",
      "Log aktivitas spatie + datatable rappasoft",
    ],
    repo: "https://github.com/padma02-drmn/simaset-enterprise",
    accent: "from-blue-500/20 to-transparent",
  },
]

export const adrHighlights = [
  {
    id: "ADR-0005",
    title: "Tiga buku besar sebagai kontrak antar modul",
    decision:
      "Modul tidak boleh saling memanggil. Semua modul hanya menulis ke dan membaca dari tiga buku universal: stock ledger, value ledger, document. Sambungan via source_doc_type + source_doc_id.",
    why: "POS tidak perlu tahu inventori itu apa. Inventori tidak perlu tahu akuntansi. Itu yang membuat modul bisa dirakit terpisah dan tier gratis bisa tanpa akuntansi tanpa POS rusak.",
  },
  {
    id: "ADR-0024",
    title: "Uang sebagai integer rupiah",
    decision:
      "Semua nilai uang disimpan sebagai bigint integer rupiah, kuantitas sebagai numeric(18,6) dalam base UOM. Float dilarang keras untuk uang.",
    why: "Floating point error di akuntansi = angka laporan salah secara diam-diam. Sistem menolak salah diam-diam.",
  },
  {
    id: "ADR-0003",
    title: "Offline-first wajib",
    decision:
      "POS berjalan penuh dengan SQLite lokal di device (Capacitor), sync satu arah ke server saat online.",
    why: "Kasir tidak boleh berhenti. Internet mati bukan alasan berhenti jualan — prinsip produk nomor satu.",
  },
  {
    id: "ADR-0010",
    title: "RLS sebagai jaring pengaman",
    decision:
      "Row Level Security di PostgreSQL dengan SET LOCAL untuk tenant context — bukan SET biasa.",
    why: "Bug di aplikasi layer tidak boleh bocorkan data lintas tenant. DB adalah lapisan pertahanan terakhir.",
  },
]

export const invariantHighlights = [
  {
    id: "A1",
    rule: "Σ debit = Σ kredit pada tiap journal entry",
    enforced: "trigger deferred",
  },
  {
    id: "A2",
    rule: "Journal posted tidak bisa di-UPDATE / DELETE",
    enforced: "trigger blokir",
  },
  {
    id: "A3",
    rule: "Σ qty semua stock_move per item = 0 (double-entry lokasi)",
    enforced: "job harian",
  },
  {
    id: "B5",
    rule: "Jika qty ≤ 0, moving average dibekukan — jangan pernah dibagi",
    enforced: "kode",
  },
  {
    id: "B9",
    rule: "base_uom item tidak boleh diubah setelah ada stock_move",
    enforced: "trigger",
  },
]

export const skillGroups = [
  {
    group: "AI & LLM Integration",
    items: [
      "Gemini function-calling / tool-use",
      "Multi-step agent loop + whitelisted read-only tools",
      "MCP: Dokploy, Supabase, n8n",
      "n8n workflow + WAHA WhatsApp automation",
    ],
  },
  {
    group: "Backend & Database",
    items: [
      "Laravel 13, PHP 8.3, REST API",
      "PostgreSQL 17: RLS, constraint, trigger, cursor pagination",
      "Akuntansi: double-entry, HPP FIFO, AR/AP, laporan SAK",
      "Nomor dokumen atomic, append-only ledger",
    ],
  },
  {
    group: "Frontend",
    items: [
      "Vue 3 + TypeScript + Inertia.js",
      "React 19 + Vite + Tailwind v4 + shadcn/ui",
      "Real-time chat UI, multi-approval workflow",
      "ESC-P dot matrix printing",
    ],
  },
  {
    group: "DevOps & Deployment",
    items: [
      "VPS Ubuntu: Azure, Hetzner — setup dari nol",
      "Docker, Dokploy (Swarm + Traefik)",
      "Cloudflare: DNS, proxy, R2 backup",
      "GitHub webhook CI/CD",
    ],
  },
]

export const principles = [
  "Kasir tidak boleh berhenti — internet mati bukan alasan berhenti jualan",
  "Angka yang salah harus berisik — sistem menolak diam-diam salah",
  "Akurasi yang bisa dijalankan mengalahkan akurasi teoretis",
  "Approval tidak boleh memblokir kasir",
]
