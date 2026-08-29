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
  problem: string
  solutions: string[]
  live?: string
  repo?: string
  accent?: string
  gallery?: string[]
}

export const projects: Project[] = [
  {
    name: "CAREDI ERP",
    tagline: "Sistem manajemen distributor FMCG — live di production",
    period: "2025–2026",
    stack: ["Laravel 13", "Vue 3", "TypeScript", "PostgreSQL", "Gemini AI", "n8n", "Docker", "Dokploy"],
    problem:
      "Distributor minuman di Bali masih pakai catatan manual: order via WhatsApp, stok di kepala, piutang di buku tulis. Order masuk sebagai chat bebas yang harus diterjemahkan manual, dan pemilik tidak punya laporan real-time.",
    solutions: [
      "AI decision support in-app: Gemini function-calling memanggil 7 laporan tools (ringkasan harian, margin produk/merek, piutang jatuh tempo, laba rugi) otomatis — read-only whitelist, AI tidak bisa mengubah transaksi",
      "WhatsApp automation multi-agent: WAHA terima chat → n8n webhook → Gemini ekstrak item natural language jadi JSON → Laravel cocokkan produk/pelanggan dari DB → draft pesanan → auto-reply konfirmasi, retry 5x",
      "Akuntansi double-entry append-only: HPP FIFO, jurnal posted tidak bisa diedit, koreksi lewat reversal",
      "MCP integration: Claude Code deploy via Dokploy, query DB via Supabase, trigger workflow via n8n — tanpa buka dashboard",
      "Multi-approval workflow, piutang + aging report, cetak nota ESC-P dot matrix 3 rangkap",
      "Deploy: Docker + Dokploy di Hetzner VPS, Cloudflare proxy — 62/62 feature tests passing",
    ],
    live: "https://caredi-48-193-41-194.sslip.io",
    repo: "https://github.com/padma02-drmn/CAREDI",
    accent: "from-orange-500/20 to-transparent",
    gallery: ["/projects/shot-caredi.png"],
  },
  {
    name: "ERP Resto & Coffee Shop",
    tagline: "Multi-tenant, offline-first POS + akuntansi penuh untuk F&B",
    period: "2026",
    stack: ["React 19", "Vite 8", "Tailwind v4", "shadcn/ui", "Hono", "Drizzle", "PostgreSQL + RLS", "Capacitor", "Bun"],
    problem:
      "Usaha F&B kecil–menengah jalankan operasi dengan alat terpisah: POS satu vendor, stok di spreadsheet, pembukuan di buku tulis. Food cost sebenarnya baru tahu berbulan-bulan kemudian, kebocoran (porsi berlebih, void nakal) tidak pernah terdeteksi, PB1 sering salah hitung.",
    solutions: [
      "Tiga buku besar sebagai kontrak antar modul: stock ledger, value ledger, document — modul tidak boleh saling memanggil, hanya menulis/membaca ke buku (ADR-0005)",
      "35 Architecture Decision Records terdokumentasi: offline-first wajib, uang sebagai integer rupiah (ADR-0024), RLS sebagai jaring pengaman, UUIDv7 client-generated, tax engine pure function",
      "Tiga lapis pertahanan: constraint DB (keras) → test integrasi Testcontainers dengan Postgres asli (transaksional) → validasi + audit (penjaga kewajaran)",
      "POS offline-first dengan SQLite lokal di device (Capacitor) — kasir tidak berhenti saat internet mati, sync satu arah saat online",
      "Tax engine PBJT/PB1 pure function, cost guard dengan alasan wajib, FEFO selektif, moving average dari ledger",
      "6 permukaan aplikasi: POS, backoffice, KDS, menu QR, website, admin — React 19 + Hono + Drizzle",
    ],
    repo: "https://github.com/padma02-drmn/erp-resto-coffe",
    accent: "from-emerald-500/20 to-transparent",
    gallery: [
      "/projects/erp-resto/dashboard.png",
      "/projects/erp-resto/laporan-penjualan.png",
      "/projects/erp-resto/buku-besar.png",
      "/projects/erp-resto/menu-qr-katalog.png",
      "/projects/erp-resto/grn-costguard.png",
      "/projects/erp-resto/landing-web.png",
    ],
  },
  {
    name: "SIMASET",
    tagline: "Sistem manajemen aset RSUD Buleleng + SIDDENI",
    period: "2026",
    stack: ["Laravel", "MySQL", "RBAC", "spatie", "rappasoft"],
    problem:
      "Aset rumah sakit (ratusan unit peralatan) dilacak di ledger manual. Jadwal maintenance tidak ada pengingat, teknisi tidak tahu tugas mana yang due, pengelola tidak punya riwayat audit.",
    solutions: [
      "RBAC granular: teknisi = maintenance.execute, pengelola = manage + execute — kapabilitas per aksi, bukan per role",
      "Notifikasi due-date otomatis: database notification + mail + WhatsApp (Fonnte)",
      "Log aktivitas spatie + datatable rappasoft untuk audit trail",
    ],
    repo: "https://github.com/padma02-drmn/simaset-enterprise",
    accent: "from-blue-500/20 to-transparent",
    gallery: ["/projects/simaset/login-preview.png"],
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
  { id: "A1", rule: "Σ debit = Σ kredit pada tiap journal entry", enforced: "trigger deferred" },
  { id: "A2", rule: "Journal posted tidak bisa di-UPDATE / DELETE", enforced: "trigger blokir" },
  { id: "A3", rule: "Σ qty semua stock_move per item = 0 (double-entry lokasi)", enforced: "job harian" },
  { id: "B5", rule: "Jika qty ≤ 0, moving average dibekukan — jangan pernah dibagi", enforced: "kode" },
  { id: "B9", rule: "base_uom item tidak boleh diubah setelah ada stock_move", enforced: "trigger" },
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
