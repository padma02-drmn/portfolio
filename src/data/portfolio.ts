export type LocalizedString = {
  id: string
  en: string
}

export type LocalizedProject = {
  name: string
  tagline: LocalizedString
  period: string
  stack: string[]
  problem: LocalizedString
  solutions: {
    id: string[]
    en: string[]
  }
  live?: string
  repo?: string
  accent?: string
  gallery?: string[]
}

export const profile = {
  name: "Kadek Padma Darmawan",
  role: {
    id: "AI Application Engineer / Full-Stack Developer",
    en: "AI Application Engineer / Full-Stack Developer",
  },
  location: {
    id: "Singaraja, Bali, Indonesia",
    en: "Singaraja, Bali, Indonesia",
  },
  email: "padmadarmawan351@gmail.com",
  github: "https://github.com/padma02-drmn",
  linkedin: "https://www.linkedin.com/in/kadek-padma-darmawan",
  phone: "0899-3766-775",
  summary: {
    id: "Membangun sistem ERP production-grade terintegrasi LLM (Gemini, OpenAI-compatible), multi-agent workflow, dan automation pipeline dengan Docker. Paham akuntansi bisnis nyata — double-entry, HPP FIFO, piutang/utang — jadi AI yang dibangun benar-benar berguna untuk operasional nyata, bukan sekadar eksperimen.",
    en: "Building production-grade ERP systems integrated with LLMs (Gemini, OpenAI-compatible), multi-agent workflows, and Docker automation pipelines. Grounded in real-world business accounting — double-entry ledger, FIFO costing, AR/AP aging — ensuring deployed AI delivers tangible operational impact, not just demos.",
  },
  bio: {
    origin: {
      id: "Singaraja, Buleleng, Bali",
      en: "Singaraja, Buleleng, Bali, Indonesia",
    },
    birth: {
      id: "24 Januari 2002",
      en: "January 24, 2002",
    },
    education: {
      id: "SMA IPA (Lulus 2020)",
      en: "High School (Natural Sciences, 2020)",
    },
    story: {
      id: [
        "Perjalanan saya di dunia rekayasa perangkat lunak berakar dari pengalaman lapangan langsung. Sebelum mendalami integrasi AI dan arsitektur enterprise, saya bekerja di garda depan operasional bisnis mikro dan ritel: mengelola kasir & inventori di toko ritel listrik, hingga terjun langsung sebagai surveyor dan kolektor lapangan di BUMDes Bulian, Bali.",
        "Interaksi langsung dengan para pemilik toko dan pembukuan manual mengajarkan saya satu hal krusial: perangkat lunak yang baik bukanlah yang paling rumit, melainkan yang paling tahan banting terhadap kegagalan operasional nyata. Ketika kasir kehilangan sinyal internet, bisnis tidak boleh terhenti. Ketika laporan laba rugi dihitung, tidak boleh ada selisih akibat pembulatan floating point.",
        "Fondasi operasional dan akuntansi nyata inilah yang kini saya terapkan dalam merancang sistem ERP production-grade, integrasi AI Agent (function-calling terisolasi read-only), dan automasi penagihan piutang serta embalase botol yang memecahkan masalah efisiensi bisnis harian.",
      ],
      en: [
        "My journey in software engineering stems directly from real-world operations. Before diving deep into enterprise architectures and AI integrations, I worked on the frontlines of micro-business operations: managing cashier desks & inventory in a retail electrical shop, and serving as a field surveyor & debt collector at BUMDes Bulian in Bali.",
        "Direct interactions with merchant store owners and manual ledgers taught me a crucial truth: great software isn't about unnecessary complexity; it's about resilience against real operational failure. When internet connections drop, checkout POS cannot halt. When P&L statements are generated, floating-point rounding errors cannot silently skew financial figures.",
        "This very foundation of operational accounting and field realities drives how I architect production ERPs, isolated read-only LLM Agents (tool-use function-calling), and automated logistics workflows that deliver deterministic business efficiency.",
      ],
    },
    milestones: [
      {
        year: "2025–2026",
        role: {
          id: "Independen AI & Software Developer",
          en: "Independent AI & Systems Developer",
        },
        desc: {
          id: "Membangun CAREDI ERP (distributor FMCG terintegrasi Gemini LLM & Taking Order) dan arsitektur ERP Resto & Coffee Shop dengan 35 Architecture Decision Records (ADR).",
          en: "Architected CAREDI ERP (FMCG distribution with Gemini LLM & Taking Order workflow) and ERP Resto & Coffee Shop guided by 35 Architecture Decision Records (ADRs).",
        },
      },
      {
        year: "2025",
        role: {
          id: "Surveyor & Kolektor — BUMDes Bulian",
          en: "Field Surveyor & Collector — BUMDes Bulian",
        },
        desc: {
          id: "Survei kelayakan kredit calon peminjam, penjemputan dana tabungan nasabah, dan penagihan piutang jatuh tempo — fondasi pemahaman mendalam modul piutang (AR/AP).",
          en: "Assessed micro-loan credit worthiness, daily door-to-door deposit collection, and delinquent account recovery — the direct genesis of my AR/AP aging modules.",
        },
      },
      {
        year: "2024–2025",
        role: {
          id: "Pengelola Toko — Toko Listrik Singaraja",
          en: "Store Manager — Electrical Retail Shop",
        },
        desc: {
          id: "Operasional harian kasir & pembukuan akurat tanpa selisih, manajemen stok masuk/keluar, dan customer relations.",
          en: "Daily cashier operations, zero-variance reconciliation, inbound/outbound stock monitoring, and customer accounts management.",
        },
      },
      {
        year: "2020",
        role: {
          id: "SMA IPA Singaraja",
          en: "High School (Science & Mathematics)",
        },
        desc: {
          id: "Menyelesaikan pendidikan menengah dengan fokus sains dan logika matematika.",
          en: "Completed secondary education with honors in analytical mathematics and sciences.",
        },
      },
    ],
  },
}

export const projects: LocalizedProject[] = [
  {
    name: "CAREDI ERP",
    tagline: {
      id: "Sistem Manajemen Distributor FMCG & Logistik Minuman — Production",
      en: "FMCG Beverage Distribution & Inventory Logistics ERP — Production",
    },
    period: "2025–2026",
    stack: ["Laravel 13", "Vue 3", "TypeScript", "PostgreSQL", "Gemini AI", "Docker", "Dokploy"],
    problem: {
      id: "Distributor FMCG & minuman di Bali menghadapi kompleksitas operasional tinggi: dual-mode penjualan (POS Kasir Langsung vs Taking Order / Delivery), piutang macet tanpa kontrol umur jatuh tempo (aging), serta kebocoran aset kemasan/botol kosong bernilai tinggi (embalase) yang dititipkan ke pelanggan.",
      en: "Beverage FMCG distributors in Bali navigate complex logistical hurdles: dual sales channels (counter POS vs van-sales Taking Order/Delivery), uncontrolled overdue receivables, and severe asset leakages in returnable bottle crates (embalase) loaned to retail outlets.",
    },
    solutions: {
      id: [
        "Manajemen Embalase & Botol Bekas: Perlakuan botol kosong/krat sebagai aset persediaan (bukan beban lepas). Pembelian botol bekas dari pelanggan otomatis memotong nilai faktur penjualan (potong nota) atau langsung mengurangi saldo piutang berjalan (AR deduction).",
        "Penjualan Fleksibel Dual-Channel: POS Kasir Langsung (instant invoice & kas) terintegrasi dengan modul Taking Order (TO) Delivery (muat armada, surat jalan delivery, serah terima botol, dan validasi retur penerimaan).",
        "Manajemen Umur Piutang (AR Aging): Pelacakan jatuh tempo otomatis, pembatasan kredit limit per outlet, dan penjadwalan reminder penagihan berbasis aging schedule (0–30, 31–60, 61–90+ hari).",
        "Valuasi Persediaan FIFO & Audit Log: Penentuan HPP dengan metode FIFO murni pada pergerakan batch gudang, audit trail mutasi stok, serta penanganan write-off kerugian barang bekas rusak yang ditolak principal.",
        "AI Decision Support In-App: Gemini LLM terisolasi dengan pola function-calling (read-only 7 tools laporan) untuk analisis performa margin merek, tren penjualan harian, dan proyeksi piutang tanpa risiko mutasi data transaksi.",
        "Infrastruktur & Reliability: Akuntansi double-entry append-only, multi-approval workflow, cetak nota dot matrix ESC-P, deployed via Docker & Dokploy di Hetzner VPS dengan 62/62 feature tests passing.",
      ],
      en: [
        "Returnable Packaging & Embalase Asset Tracking: Bottles and crates are classified as strict balance-sheet inventory assets. Returned empty bottles automatically generate credit memos deducting invoice totals or offsetting outstanding customer AR accounts.",
        "Dual-Channel Commercial Engine: Counter Direct POS for instant OTC transactions alongside field van Taking Order (TO) Delivery modules (fleet load sheets, delivery manifests, empty bottle handovers, and return validations).",
        "Deterministic AR Aging Control: Real-time maturity tracking, customer credit limit lockdowns, and proactive collection schedules categorized by standard aging tiers (0-30, 31-60, 61-90+ days).",
        "Strict FIFO Inventory Costing & Waste Write-offs: Real-time COGS allocation on physical batch movements, immutable audit trails, and automated accounting write-offs for damaged bottles rejected by principals.",
        "In-App AI Decision Support: Sandboxed Gemini LLM utilizing function-calling (whitelisted read-only access across 7 analytics tools) for margin calculations and daily revenue summaries with zero mutation risks.",
        "Production Reliability: Immutable double-entry journal logs, multi-tier approvals, ESC-P dot-matrix multi-ply invoice printing, deployed via Docker/Dokploy on Hetzner VPS with 62/62 passing tests.",
      ],
    },
    live: "https://caredi-48-193-41-194.sslip.io",
    repo: "https://github.com/padma02-drmn/CAREDI",
    accent: "from-orange-500/20 to-transparent",
    gallery: ["/projects/caredi/caredi-overview.jpeg"],
  },
  {
    name: "ERP Resto & Coffee Shop",
    tagline: {
      id: "Multi-tenant, offline-first POS + akuntansi penuh untuk F&B",
      en: "Multi-tenant, Offline-first POS + Full Financial Accounting for F&B",
    },
    period: "2026",
    stack: ["React 19", "Vite 8", "Tailwind v4", "shadcn/ui", "Hono", "Drizzle", "PostgreSQL + RLS", "Capacitor", "Bun"],
    problem: {
      id: "Usaha F&B kecil–menengah jalankan operasi dengan alat terpisah: POS satu vendor, stok di spreadsheet, pembukuan di buku tulis. Food cost sebenarnya baru tahu berbulan-bulan kemudian, kebocoran (porsi berlebih, void nakal) tidak pernah terdeteksi, PB1 sering salah hitung.",
      en: "F&B venues often operate on fragmented tools: proprietary POS, spreadsheet stock trackers, and handwritten ledgers. Actual food costs remain hidden for months, ingredient over-portioning and unauthorized voids go undetected, and local hospitality taxes (PB1) are frequently miscalculated.",
    },
    solutions: {
      id: [
        "Tiga buku besar sebagai kontrak antar modul: stock ledger, value ledger, document — modul tidak boleh saling memanggil, hanya menulis/membaca ke buku (ADR-0005)",
        "35 Architecture Decision Records terdokumentasi: offline-first wajib, uang sebagai integer rupiah (ADR-0024), RLS sebagai jaring pengaman, UUIDv7 client-generated, tax engine pure function",
        "Tiga lapis pertahanan: constraint DB (keras) → test integrasi Testcontainers dengan Postgres asli (transaksional) → validasi + audit (penjaga kewajaran)",
        "POS offline-first dengan SQLite lokal di device (Capacitor) — kasir tidak berhenti saat internet mati, sync satu arah saat online",
        "Tax engine PBJT/PB1 pure function, cost guard dengan alasan wajib, FEFO selektif, moving average dari ledger",
        "6 permukaan aplikasi: POS, backoffice, KDS, menu QR, website, admin — React 19 + Hono + Drizzle",
      ],
      en: [
        "Three Immutable Universal Ledgers: stock ledger, value ledger, and documents act as decoupled boundaries—modules never invoke each other directly (ADR-0005).",
        "35 Rigorous ADRs: Mandatory offline-first, money strictly stored as bigint rupiah integers (ADR-0024), Postgres Row Level Security, client-generated UUIDv7, and pure functional tax engines.",
        "Three Defense Layers: Strict DB check constraints → full Testcontainers integration tests on live PostgreSQL → application-level invariant validators.",
        "Local SQLite Offline-First Engine: Embedded on-device database ensuring counter cashiers never stop during network drops, with idempotent background sync.",
        "F&B Production Cost Guard: Real-time recipe Bill of Materials (BOM) deduction, mandatory void rationales, and moving average valuations.",
        "6 Unified Surfaces: Cashier POS, Backoffice, Kitchen Display System (KDS), Customer QR Ordering, Brand Website, and Super-Admin.",
      ],
    },
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
    tagline: {
      id: "Sistem Manajemen Aset Rumah Sakit & Pemeliharaan Alat Medis (RSUD Buleleng)",
      en: "Hospital Asset Management & Medical Equipment Calibration (RSUD Buleleng)",
    },
    period: "2026",
    stack: ["Laravel 12", "React 19", "Inertia.js", "MySQL 8", "RBAC", "spatie", "Fonnte WA"],
    problem: {
      id: "Sistem inventaris lama RSUD masih berbasis aplikasi desktop offline terisolasi: perpindahan aset antar-ruangan, antar-poli, atau antar-gedung sangat sulit dilacak secara real-time, jadwal pemeliharaan alat medis sering terlewat tanpa reminder, dan petugas kesulitan memverifikasi daftar fisik inventori di tiap ruangan.",
      en: "The regional hospital's legacy inventory was siloed in an offline desktop application: asset relocations between clinics and hospital wings were untracked in real time, periodic medical device calibration schedules lapsed without alerts, and physical room verification required tedious paper audits.",
    },
    solutions: {
      id: [
        "Pelacakan Mutasi Aset Antar-Gedung & Poli: Alur mutasi inventaris terpusat secara online dengan histori transfer lengkap (asal ruangan, tujuan gedung, tanggal serah terima, dan penanggung jawab).",
        "QR Code Ruangan & Audit Inventori Sekali Scan: Menempelkan QR Code di setiap pintu ruangan/poli; petugas cukup memindai QR untuk langsung melihat seluruh daftar inventori di ruangan tersebut, status kondisi, serta riwayat perpindahan aset tanpa bongkar berkas.",
        "Otomasi Penjadwalan & Kalibrasi Elektromedis (SIDDENI): Permintaan pemeliharaan dari kepala ruangan otomatis diteruskan ke tim elektromedis/IPSRS untuk kalibrasi alat medis berjadwal, lengkap dengan SOP resmi.",
        "Notifikasi Multi-Channel H-30 / H-7 / Overdue: Pengingat jatuh tempo otomatis via WhatsApp (Fonnte), email, dan in-app database notification langsung ke teknisi dan penanggung jawab ruangan terkait.",
        "RBAC Granular & Jejak Audit (Activity Log): Pemisahan wewenang ketat (teknisi = eksekusi pemeliharaan; kepala ruangan/IPSRS = otorisasi & verifikasi), disertai pencatatan audit trail menyeluruh menggunakan Spatie Activitylog dan Rappasoft Login Log.",
      ],
      en: [
        "Cross-Wing & Clinic Asset Mutation Tracking: Web-based central transfer system recording origin room, destination wing, custody handover dates, and accountable officers.",
        "Single-Scan Room QR Code Audit: Door-mounted QR codes allow auditors to scan and instantaneously pull the complete live inventory list, calibration status, and physical location logs.",
        "Automated Electromedical Calibration (SIDDENI): Clinic maintenance requests route directly into specialized bio-medical engineering queues under strict hospital SOPs.",
        "Multi-Channel Automated Escalation (H-30, H-7, Overdue): Scheduled dispatch via WhatsApp (Fonnte), email, and persistent database notifications to assigned technicians.",
        "Granular RBAC & Security Audit Trail: Strict privilege separation (technicians execute; clinic chiefs authorize) backed by Spatie Activitylog and Rappasoft authentication tracking.",
      ],
    },
    repo: "https://github.com/padma02-drmn/simaset-enterprise",
    accent: "from-blue-500/20 to-transparent",
    gallery: ["/projects/siddeni/siddeni-overview.jpeg"],
  },
  {
    name: "Balimart",
    tagline: {
      id: "ERP Minimarket Full-Stack TypeScript — Multi-Outlet & POS",
      en: "Full-Stack TypeScript Minimarket ERP — Multi-Outlet & High-Speed POS",
    },
    period: "2025–2026",
    stack: ["Hono", "Drizzle ORM", "better-auth", "React 19", "TanStack", "PostgreSQL", "Azure"],
    problem: {
      id: "Operasional ritel modern dan minimarket membutuhkan kecepatan pencatatan POS instan tanpa latensi, akuntansi otomatis, manajemen multi-outlet, dan kepastian akurasi stok (FIFO costing + HPP lock).",
      en: "Modern convenience stores and multi-branch retail chains demand ultra-low latency checkout POS, automated transaction journalizing, and strict inventory valuation via FIFO costing.",
    },
    solutions: {
      id: [
        "Modul operasional lengkap: POS / Kasir kilat, Manajemen Pembelian, Kartu Stok Otomatis (FIFO Costing + HPP Lock)",
        "Akuntansi terintegrasi otomatis: Penjualan langsung menjurnal kas/piutang dan persediaan ke buku besar",
        "Manajemen aset tetap, pencatatan payroll karyawan, dan audit log perubahan data",
        "Arsitektur terpisah: REST API performa tinggi berbasis Hono + Drizzle ORM dengan frontend React SPA interaktif, dideploy di Microsoft Azure",
      ],
      en: [
        "High-Performance Retail Operations: Zero-latency checkout POS, Purchase Order cycles, and automated FIFO stock costing cards.",
        "Automated Bookkeeping Integration: Every register sale instantly writes balanced debit/credit entries to cash, AR, inventory, and revenue ledgers.",
        "Fixed Asset Schedules, Staff Payroll, and Comprehensive Modification Audit Logs.",
        "Decoupled Microservice Architecture: High-throughput Hono REST API + Drizzle ORM paired with a reactive React SPA, hosted on Microsoft Azure.",
      ],
    },
    live: "https://yellow-bay-0c4553900.7.azurestaticapps.net",
    repo: "https://github.com/padma02-drmn/balimart-erp",
    accent: "from-purple-500/20 to-transparent",
    gallery: ["/projects/balimart/balimart-overview.jpeg"],
  },
]

export const adrHighlights = [
  {
    id: "ADR-0005",
    title: {
      id: "Tiga buku besar sebagai kontrak antar modul",
      en: "Three Immutable Ledgers as Cross-Module Contracts",
    },
    decision: {
      id: "Modul tidak boleh saling memanggil. Semua modul hanya menulis ke dan membaca dari tiga buku universal: stock ledger, value ledger, document. Sambungan via source_doc_type + source_doc_id.",
      en: "Modules are strictly forbidden from calling each other. All subsystems only read and append to three universal ledgers: stock ledger, value ledger, and documents.",
    },
    why: {
      id: "POS tidak perlu tahu inventori itu apa. Inventori tidak perlu tahu akuntansi. Modul bisa dirakit terpisah tanpa merusak integritas sistem.",
      en: "The POS does not need to know inventory internals, and inventory doesn't need to know accounting. Modules can be deployed independently without systemic risk.",
    },
  },
  {
    id: "ADR-0024",
    title: {
      id: "Uang sebagai integer rupiah",
      en: "Money Strictly Stored as Bigint Integers",
    },
    decision: {
      id: "Semua nilai uang disimpan sebagai bigint integer rupiah, kuantitas sebagai numeric(18,6) dalam base UOM. Float dilarang keras untuk uang.",
      en: "All monetary values are stored as bigint integer rupiah; quantities as numeric(18,6). Floats are strictly prohibited in financial tables.",
    },
    why: {
      id: "Floating point error di akuntansi = angka laporan salah secara diam-diam. Sistem menolak salah diam-diam.",
      en: "Floating-point errors in accounting create silent balance discrepancies. Our system refuses to fail silently.",
    },
  },
  {
    id: "ADR-0003",
    title: {
      id: "Offline-first wajib",
      en: "Mandatory Offline-First Architecture",
    },
    decision: {
      id: "POS berjalan penuh dengan SQLite lokal di device (Capacitor), sync satu arah ke server saat online.",
      en: "POS runs natively with on-device SQLite (Capacitor), performing idempotent one-way background synchronization when connectivity restores.",
    },
    why: {
      id: "Kasir tidak boleh berhenti. Internet mati bukan alasan berhenti jualan — prinsip produk nomor satu.",
      en: "Registers cannot stop. Network outage is never an acceptable reason to halt sales—core product tenet #1.",
    },
  },
  {
    id: "ADR-0010",
    title: {
      id: "RLS sebagai jaring pengaman",
      en: "Row Level Security as the Last Safety Net",
    },
    decision: {
      id: "Row Level Security di PostgreSQL dengan SET LOCAL untuk tenant context — bukan SET biasa.",
      en: "PostgreSQL Row Level Security utilizing SET LOCAL for strict per-transaction tenant contextualization.",
    },
    why: {
      id: "Bug di aplikasi layer tidak boleh bocorkan data lintas tenant. DB adalah lapisan pertahanan terakhir.",
      en: "Application-level bugs must never leak cross-tenant data. The database itself is the final line of defense.",
    },
  },
]

export const invariantHighlights = [
  {
    id: "A1",
    rule: {
      id: "Σ debit = Σ kredit pada tiap journal entry",
      en: "Σ Debit = Σ Credit on every journal entry",
    },
    enforced: {
      id: "trigger deferred",
      en: "deferred trigger",
    },
  },
  {
    id: "A2",
    rule: {
      id: "Journal posted tidak bisa di-UPDATE / DELETE",
      en: "Posted journals cannot be UPDATED or DELETED",
    },
    enforced: {
      id: "trigger blokir",
      en: "immutable trigger",
    },
  },
  {
    id: "A3",
    rule: {
      id: "Σ qty semua stock_move per item = 0 (double-entry lokasi)",
      en: "Σ qty of all stock_move per item = 0 (location double-entry)",
    },
    enforced: {
      id: "job harian",
      en: "daily reconciliation",
    },
  },
  {
    id: "B5",
    rule: {
      id: "Jika qty ≤ 0, moving average dibekukan — jangan pernah dibagi",
      en: "If qty ≤ 0, moving average freezes — never divide by zero",
    },
    enforced: {
      id: "kode domain",
      en: "domain layer",
    },
  },
  {
    id: "B9",
    rule: {
      id: "base_uom item tidak boleh diubah setelah ada stock_move",
      en: "Item base_uom immutable once stock_move exists",
    },
    enforced: {
      id: "db trigger",
      en: "db trigger",
    },
  },
]

export const accountingDomain = {
  title: {
    id: "Rekayasa Akuntansi & Sistem Finansial Deterministik",
    en: "Deterministic Accounting & Financial Engineering",
  },
  subtitle: {
    id: "Saya menguasai logika matematis dan pembukuan finansial standar PSAK/SAK/USALI. Seluruh aturan akuntansi ditegakkan langsung pada level skema database.",
    en: "Deep expertise in mathematical financial ledgers complying with PSAK/SAK and USALI standards. Core financial invariants are enforced directly at the database engine level.",
  },
  coreConcepts: [
    {
      concept: {
        id: "Chart of Accounts (COA) & Multi-tier Ledger",
        en: "Chart of Accounts (COA) & Multi-Tier Ledgers",
      },
      desc: {
        id: "Struktur hirarki COA 5 kategori utama (Aset, Kewajiban, Ekuitas, Pendapatan, Beban) dengan parent-child akun, normal balance enforcement (Debit vs Kredit), dan isolasi multi-cabang.",
        en: "Hierarchical 5-category COA structure (Assets, Liabilities, Equity, Revenue, Expenses) with parent-child accounts, normal balance enforcement, and multi-branch partitioning.",
      },
      implementation: {
        id: "Diimplementasikan di CAREDI & ERP Resto dengan validasi integritas akun real-time.",
        en: "Implemented in CAREDI & ERP Resto with real-time relational integrity checks.",
      },
    },
    {
      concept: {
        id: "Double-Entry Bookkeeping & Append-Only Ledger",
        en: "Double-Entry Bookkeeping & Append-Only Ledgers",
      },
      desc: {
        id: "Setiap transaksi finansial wajib balance (Σ Debit = Σ Kredit). Jurnal 'Posted' tidak boleh diedit atau dihapus; koreksi hanya sah via Reversal Entry berpasangan.",
        en: "Every transaction strictly balances (Σ Debit = Σ Credit). Posted entries are immutable; corrections only occur via dual Reversal Entries.",
      },
      implementation: {
        id: "Ditegakkan via PostgreSQL deferred trigger dan append-only transaction logs.",
        en: "Enforced via PostgreSQL deferred triggers and append-only audit logs.",
      },
    },
    {
      concept: {
        id: "HPP FIFO & Valuasi Persediaan Gudang",
        en: "FIFO Costing & Inventory Batch Valuations",
      },
      desc: {
        id: "Metode First-In, First-Out murni pada pergerakan batch barang. Barang yang masuk gudang pertama kali dijadikan acuan harga pokok penjualan saat stok keluar.",
        en: "Strict First-In, First-Out costing across inventory batches, preventing distorted gross profit figures during price fluctuations.",
      },
      implementation: {
        id: "Layer kalkulasi FIFO otomatis pada modul inventori distributor CAREDI & stock-ledger.",
        en: "Automated FIFO costing layer deployed inside CAREDI and Balimart stock ledgers.",
      },
    },
    {
      concept: {
        id: "Bill of Materials (BOM) & Biaya Produksi F&B",
        en: "Bill of Materials (BOM) & Food Costing",
      },
      desc: {
        id: "Konversi bahan mentah menjadi produk jadi (resep/komposit). Setiap penjualan 1 porsi menu secara otomatis memicu konsumsi bahan baku dan penjurnalan HPP.",
        en: "Automated conversion of raw ingredients to composite finished goods. Register sales trigger automatic grammage deductions and COGS journalizing.",
      },
      implementation: {
        id: "Modul Cost Guard dan kalkulasi otomatis resep pada ERP Resto & Coffee Shop.",
        en: "Cost Guard module and recipe engine in ERP Resto & Coffee Shop.",
      },
    },
    {
      concept: {
        id: "Manajemen Piutang & Utang (AR / AP + Aging)",
        en: "Accounts Receivable & Payable (AR/AP + Aging)",
      },
      desc: {
        id: "Pencatatan termin kredit pelanggan, jadwal jatuh tempo faktur, aging schedule report (0-30, 31-60, 61-90, >90 hari), serta rekonsiliasi penerimaan kas/bank.",
        en: "Customer credit terms, invoice maturity schedules, aging reports (0-30, 31-60, 61-90+ days), and bank payment reconciliations.",
      },
      implementation: {
        id: "Diambil langsung dari pengalaman lapangan BUMDes dan diotomasi pada dashboard CAREDI.",
        en: "Grounded in real BUMDes debt recovery experience and automated in CAREDI.",
      },
    },
    {
      concept: {
        id: "Laporan Keuangan Otomatis (SAK & USALI Compliant)",
        en: "Automated Financial Statements (SAK & USALI)",
      },
      desc: {
        id: "Generasi otomatis Neraca Saldo (Trial Balance), Buku Besar (General Ledger), Laba Rugi (P&L), dan Neraca Keuangan yang selalu seimbang dan akurat hingga digit satuan.",
        en: "Automated generation of Trial Balance, General Ledger, Profit & Loss, and Balance Sheets with zero floating-point math deviation.",
      },
      implementation: {
        id: "Semua angka disimpan sebagai bigint integer rupiah untuk eliminasi floating-point error.",
        en: "All figures stored as bigint integer rupiah, eliminating floating-point errors.",
      },
    },
  ],
}

export const skillGroups = [
  {
    group: {
      id: "Akuntansi & Domain Finansial",
      en: "Accounting & Financial Domain",
    },
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
    group: {
      id: "AI & LLM Integration",
      en: "AI & LLM Systems Integration",
    },
    items: [
      "Gemini function-calling / tool-use",
      "Multi-step agent loop + whitelisted read-only tools",
      "MCP: Dokploy, Supabase, n8n",
      "n8n workflow + WhatsApp automation",
    ],
  },
  {
    group: {
      id: "Backend & Database",
      en: "Backend & Database Engineering",
    },
    items: [
      "Laravel 13, PHP 8.3, REST API",
      "PostgreSQL 17: RLS, constraint, trigger, cursor pagination",
      "Nomor dokumen atomic, append-only ledger",
      "Integer bigint rupiah (Zero-float financial math)",
    ],
  },
  {
    group: {
      id: "Frontend & DevOps",
      en: "Frontend & DevOps Architecture",
    },
    items: [
      "Vue 3 + TypeScript + Inertia.js",
      "React 19 + Vite + Tailwind v4 + shadcn/ui",
      "Docker, Dokploy (Swarm + Traefik), VPS Ubuntu",
      "Cloudflare: DNS, proxy, R2 backup, CI/CD",
    ],
  },
  {
    group: {
      id: "AI Agentic Development Tools",
      en: "AI Agentic Development Toolchain",
    },
    items: [
      "Claude Code (CLI Agentic Workflow)",
      "OpenAI Codex (Automated Feature & PR)",
      "Antigravity CLI (Agentic Coding & Review)",
      "Hermes Agent (Autonomous Multi-Agent Fleet)",
    ],
  },
]

export const principles = [
  {
    id: "Kasir tidak boleh berhenti — internet mati bukan alasan berhenti jualan",
    en: "Registers cannot stop — network outage is never an excuse to halt sales",
  },
  {
    id: "Angka yang salah harus berisik — sistem menolak diam-diam salah",
    en: "Wrong numbers must scream — our system strictly refuses to fail silently",
  },
  {
    id: "Akurasi yang bisa dijalankan mengalahkan akurasi teoretis",
    en: "Executable operational precision beats theoretical purity",
  },
  {
    id: "Approval tidak boleh memblokir kasir",
    en: "Managerial approvals must never block customer checkouts",
  },
]
