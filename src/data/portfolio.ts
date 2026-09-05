export const profile = {
  name: "Kadek Padma Darmawan",
  role: "AI Application Engineer / Full-Stack Developer",
  location: "Singaraja, Bali",
  email: "padmadarmawan351@gmail.com",
  github: "https://github.com/padma02-drmn",
  phone: "0899-3766-775",
  summary:
    "Membangun sistem ERP production-grade terintegrasi LLM (Gemini, OpenAI-compatible), multi-agent workflow, dan automation pipeline dengan n8n, MCP tools, dan Docker. Paham akuntansi bisnis nyata — double-entry, HPP FIFO, piutang/utang — jadi AI yang dibangun benar-benar berguna untuk operasional, bukan eksperimen.",
  bio: {
    origin: "Singaraja, Buleleng, Bali",
    birth: "24 Januari 2002",
    education: "SMA IPA (Lulus 2020)",
    story: [
      "Perjalanan saya di dunia rekayasa perangkat lunak berakar dari pengalaman lapangan langsung. Sebelum mendalami integrasi AI dan arsitektur enterprise, saya bekerja di garda depan operasional bisnis mikro dan ritel: mengelola kasir & inventori di toko ritel listrik, hingga terjun langsung sebagai surveyor dan kolektor lapangan di BUMDes Bulian, Bali.",
      "Interaksi langsung dengan para pemilik toko dan pembukuan manual mengajarkan saya satu hal krusial: perangkat lunak yang baik bukanlah yang paling rumit, melainkan yang paling tahan banting terhadap kegagalan operasional nyata. Ketika kasir kehilangan sinyal internet, bisnis tidak boleh terhenti. Ketika laporan laba rugi dihitung, tidak boleh ada selisih akibat pembulatan floating point.",
      "Fondasi operasional dan akuntansi nyata inilah yang kini saya terapkan dalam merancang sistem ERP production-grade, integrasi AI Agent (function-calling terisolasi read-only), dan automasi multi-agent WhatsApp yang benar-benar memecahkan masalah efisiensi bisnis harian.",
    ],
    milestones: [
      {
        year: "2025–2026",
        role: "Independen AI & Software Developer",
        desc: "Membangun CAREDI ERP (distributor FMCG terintegrasi Gemini LLM & n8n) dan arsitektur ERP Resto & Coffee Shop dengan 35 Architecture Decision Records (ADR).",
      },
      {
        year: "2025",
        role: "Surveyor & Kolektor — BUMDes Bulian",
        desc: "Survei kelayakan kredit calon peminjam, penjemputan dana tabungan nasabah, dan penagihan piutang jatuh tempo — fondasi pemahaman mendalam modul piutang (AR/AP).",
      },
      {
        year: "2024–2025",
        role: "Pengelola Toko — Toko Listrik Singaraja",
        desc: "Operasional harian kasir & pembukuan akurat tanpa selisih, manajemen stok masuk/keluar, dan customer relations.",
      },
      {
        year: "2020",
        role: "SMA IPA Singaraja",
        desc: "Menyelesaikan pendidikan menengah dengan fokus sains dan logika matematika.",
      },
    ],
  },
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
    tagline: "Sistem Manajemen Distributor FMCG & Logistik Minuman — Production",
    period: "2025–2026",
    stack: ["Laravel 13", "Vue 3", "TypeScript", "PostgreSQL", "Gemini AI", "Docker", "Dokploy"],
    problem:
      "Distributor FMCG & minuman di Bali menghadapi kompleksitas operasional tinggi: dual-mode penjualan (POS Kasir Langsung vs Taking Order / Delivery), piutang macet tanpa kontrol umur jatuh tempo (aging), serta kebocoran aset kemasan/botol kosong bernilai tinggi (embalase) yang dititipkan ke pelanggan.",
    solutions: [
      "Manajemen Embalase & Botol Bekas: Perlakuan botol kosong/krat sebagai aset persediaan (bukan beban lepas). Pembelian botol bekas dari pelanggan otomatis memotong nilai faktur penjualan (potong nota) atau langsung mengurangi saldo piutang berjalan (AR deduction).",
      "Penjualan Fleksibel Dual-Channel: POS Kasir Langsung (instant invoice & kas) terintegrasi dengan modul Taking Order (TO) Delivery (muat armada, surat jalan delivery, serah terima botol, dan validasi retur penerimaan).",
      "Manajemen Umur Piutang (AR Aging): Pelacakan jatuh tempo otomatis, pembatasan kredit limit per outlet, dan penjadwalan reminder penagihan berbasis aging schedule (0–30, 31–60, 61–90+ hari).",
      "Valuasi Persediaan FIFO & Audit Log: Penentuan HPP dengan metode FIFO murni pada pergerakan batch gudang, audit trail mutasi stok, serta penanganan write-off kerugian barang bekas rusak yang ditolak principal.",
      "AI Decision Support In-App: Gemini LLM terisolasi dengan pola function-calling (read-only 7 tools laporan) untuk analisis performa margin merek, tren penjualan harian, dan proyeksi piutang tanpa risiko mutasi data transaksi.",
      "Infrastruktur & Reliability: Akuntansi double-entry append-only, multi-approval workflow, cetak nota dot matrix ESC-P, deployed via Docker & Dokploy di Hetzner VPS dengan 62/62 feature tests passing.",
    ],
    live: "https://caredi-48-193-41-194.sslip.io",
    repo: "https://github.com/padma02-drmn/CAREDI",
    accent: "from-orange-500/20 to-transparent",
    gallery: ["/projects/caredi/caredi-overview.jpeg"],
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
    name: "SIMASET & SIDDENI",
    tagline: "Sistem Manajemen Aset Rumah Sakit & Pemeliharaan Alat Medis (RSUD Buleleng)",
    period: "2026",
    stack: ["Laravel 12", "React 19", "Inertia.js", "MySQL 8", "RBAC", "spatie", "Fonnte WA"],
    problem:
      "Sistem inventaris lama RSUD masih berbasis aplikasi desktop offline terisolasi: perpindahan aset antar-ruangan, antar-poli, atau antar-gedung sangat sulit dilacak secara real-time, jadwal pemeliharaan alat medis sering terlewat tanpa reminder, dan petugas kesulitan memverifikasi daftar fisik inventori di tiap ruangan.",
    solutions: [
      "Pelacakan Mutasi Aset Antar-Gedung & Poli: Alur mutasi inventaris terpusat secara online dengan histori transfer lengkap (asal ruangan, tujuan gedung, tanggal serah terima, dan penanggung jawab).",
      "QR Code Ruangan & Audit Inventori Sekali Scan: Menempelkan QR Code di setiap pintu ruangan/poli; petugas cukup memindai QR untuk langsung melihat seluruh daftar inventori di ruangan tersebut, status kondisi, serta riwayat perpindahan aset tanpa bongkar berkas.",
      "Otomasi Penjadwalan & Kalibrasi Elektromedis (SIDDENI): Permintaan pemeliharaan dari kepala ruangan otomatis diteruskan ke tim elektromedis/IPSRS untuk kalibrasi alat medis berjadwal, lengkap dengan SOP resmi.",
      "Notifikasi Multi-Channel H-30 / H-7 / Overdue: Pengingat jatuh tempo otomatis via WhatsApp (Fonnte), email, dan in-app database notification langsung ke teknisi dan penanggung jawab ruangan terkait.",
      "RBAC Granular & Jejak Audit (Activity Log): Pemisahan wewenang ketat (teknisi = eksekusi pemeliharaan; kepala ruangan/IPSRS = otorisasi & verifikasi), disertai pencatatan audit trail menyeluruh menggunakan Spatie Activitylog dan Rappasoft Login Log.",
    ],
    repo: "https://github.com/padma02-drmn/simaset-enterprise",
    accent: "from-blue-500/20 to-transparent",
    gallery: ["/projects/siddeni/siddeni-overview.jpeg"],
  },
  {
    name: "Balimart",
    tagline: "ERP Minimarket Full-Stack TypeScript — Multi-Outlet & POS",
    period: "2025–2026",
    stack: ["Hono", "Drizzle ORM", "better-auth", "React 19", "TanStack", "PostgreSQL", "Azure"],
    problem:
      "Operasional ritel modern dan minimarket membutuhkan kecepatan pencatatan POS instan tanpa latensi, akuntansi otomatis, manajemen multi-outlet, dan kepastian akurasi stok (FIFO costing + HPP lock).",
    solutions: [
      "Modul operasional lengkap: POS / Kasir kilat, Manajemen Pembelian, Kartu Stok Otomatis (FIFO Costing + HPP Lock)",
      "Akuntansi terintegrasi otomatis: Penjualan langsung menjurnal kas/piutang dan persediaan ke buku besar",
      "Manajemen aset tetap, pencatatan payroll karyawan, dan audit log perubahan data",
      "Arsitektur terpisah: REST API performa tinggi berbasis Hono + Drizzle ORM dengan frontend React SPA interaktif, dideploy di Microsoft Azure",
    ],
    live: "https://yellow-bay-0c4553900.7.azurestaticapps.net",
    repo: "https://github.com/padma02-drmn/balimart-erp",
    accent: "from-purple-500/20 to-transparent",
    gallery: ["/projects/balimart/balimart-overview.jpeg"],
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

export const accountingDomain = {
  title: "Rekayasa Akuntansi & Sistem Finansial Deterministik",
  subtitle:
    "Saya tidak hanya menulis kode backend, tetapi menguasai logika matematis dan pembukuan finansial standar PSAK/SAK. Seluruh aturan akuntansi ditegakkan langsung pada level skema database.",
  coreConcepts: [
    {
      concept: "Chart of Accounts (COA) & Multi-tier Ledger",
      desc: "Struktur hirarki COA 5 kategori utama (Aset, Kewajiban, Ekuitas, Pendapatan, Beban) dengan parent-child akun, normal balance enforcement (Debit vs Kredit), dan isolasi multi-outlet / multi-cabang.",
      implementation: "Diimplementasikan di CAREDI & ERP Resto dengan validasi integritas akun real-time.",
    },
    {
      concept: "Double-Entry Bookkeeping & Append-Only Ledger",
      desc: "Setiap transaksi finansial wajib menghasilkan minimal 2 baris jurnal balance (Σ Debit = Σ Kredit). Jurnal yang sudah berstatus 'Posted' tidak boleh diedit atau dihapus; koreksi hanya sah via Reversal Entry berpasangan.",
      implementation: "Ditegakkan via PostgreSQL deferred trigger dan append-only transaction logs.",
    },
    {
      concept: "HPP FIFO & Periodic/Perpetual Valuation",
      desc: "Metode First-In, First-Out murni pada pergerakan batch barang. Barang yang masuk gudang pertama kali dijadikan acuan harga pokok penjualan saat stok keluar, mencegah distorsi valuasi saat inflasi harga bahan baku.",
      implementation: "Layer kalkulasi FIFO otomatis pada modul inventori distributor CAREDI & stock-ledger.",
    },
    {
      concept: "Bill of Materials (BOM) & Biaya Produksi F&B",
      desc: "Konversi bahan mentah menjadi produk jadi (resep/komposit). Setiap penjualan 1 porsi menu secara otomatis memicu jurnal konsumsi bahan baku sesuai standar porsi gramatur (BOM) dan mendebit akun HPP serta mengkredit akun Persediaan Bahan Baku.",
      implementation: "Modul Cost Guard dan kalkulasi otomatis resep pada ERP Resto & Coffee Shop.",
    },
    {
      concept: "Manajemen Piutang & Utang (AR / AP + Aging)",
      desc: "Pencatatan termin kredit pelanggan, jadwal jatuh tempo faktur, aging schedule report (0-30, 31-60, 61-90, >90 hari), serta rekonsiliasi penerimaan kas/bank terhadap nomor faktur tertagih.",
      implementation: "Diambil langsung dari pengalaman lapangan BUMDes dan diotomasi pada dashboard CAREDI.",
    },
    {
      concept: "Laporan Keuangan Otomatis (SAK Compliant)",
      desc: "Generasi otomatis Neraca Saldo (Trial Balance), Buku Besar (General Ledger), Laporan Laba Rugi (Profit & Loss), dan Neraca Keuangan (Balance Sheet) yang selalu seimbang dan akurat hingga digit satuan.",
      implementation: "Semua angka disimpan sebagai bigint integer rupiah untuk eliminasi floating-point error.",
    },
  ],
}

export const skillGroups = [
  {
    group: "Akuntansi & Domain Finansial",
    items: [
      "Chart of Accounts (COA) & General Ledger",
      "Double-Entry (Σ Debit = Σ Kredit, Append-only)",
      "HPP FIFO, Moving Average & Valuasi Stok",
      "Bill of Materials (BOM) & Resep Produksi F&B",
      "Piutang/Utang (AR/AP) & Aging Report",
      "Laporan Keuangan: Neraca, Laba Rugi, Cashflow",
    ],
  },
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
      "Nomor dokumen atomic, append-only ledger",
      "Integer bigint rupiah (Zero-float financial math)",
    ],
  },
  {
    group: "Frontend & DevOps",
    items: [
      "Vue 3 + TypeScript + Inertia.js",
      "React 19 + Vite + Tailwind v4 + shadcn/ui",
      "Docker, Dokploy (Swarm + Traefik), VPS Ubuntu",
      "Cloudflare: DNS, proxy, R2 backup, CI/CD",
    ],
  },
  {
    group: "AI Agentic Development Tools",
    items: [
      "Claude Code (CLI Agentic Workflow)",
      "OpenAI Codex (Automated Feature & PR)",
      "Antigravity CLI (Agentic Coding & Review)",
      "Hermes Agent (Autonomous Multi-Agent Fleet)",
    ],
  },
]

export const principles = [
  "Kasir tidak boleh berhenti — internet mati bukan alasan berhenti jualan",
  "Angka yang salah harus berisik — sistem menolak diam-diam salah",
  "Akurasi yang bisa dijalankan mengalahkan akurasi teoretis",
  "Approval tidak boleh memblokir kasir",
]
