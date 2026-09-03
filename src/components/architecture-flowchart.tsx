import { MessageSquare, Bot, ArrowRight, Database, CheckCircle2, ShieldCheck } from "lucide-react"

export function ArchitectureFlowchart() {
  const steps = [
    {
      step: "01",
      title: "Inbound WA Chat",
      actor: "Customer",
      tech: "WhatsApp API / WAHA",
      desc: "Pesan pesanan bebas dalam bahasa alami (misal: 'Pagi bos, mau pesan teh botol 5 kerat dan kopi 2 karton kirim sore ya').",
    },
    {
      step: "02",
      title: "Orchestration & Queue",
      actor: "Event Pipeline",
      tech: "n8n Webhook + Retry 5x",
      desc: "Menangkap payload webhook secara asinkron, memvalidasi nomor pengirim, dan mempersiapkan konteks sistem.",
    },
    {
      step: "03",
      title: "Deterministic AI Extraction",
      actor: "LLM Agent",
      tech: "Gemini Function-Calling",
      desc: "Mengekstrak entitas produk, kuantitas satuan, dan instruksi pengiriman menjadi structured JSON strictly validated.",
    },
    {
      step: "04",
      title: "DB Match & Inventory Check",
      actor: "Backend Core",
      tech: "Laravel 13 + PostgreSQL",
      desc: "Pencocokan master barang, kalkulasi harga berjenjang, validasi limit piutang, dan penyiapan Draft Sales Order.",
    },
    {
      step: "05",
      title: "Double-Entry Verification",
      actor: "Approval Engine",
      tech: "Audit & Ledger Lock",
      desc: "Notifikasi otomatis ke WhatsApp owner untuk approval satu klik sebelum mutasi stok dan jurnal otomatis terbit.",
    },
  ]

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
      <div className="border-b border-black/10 pb-4 mb-6">
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 mb-1 font-bold">
          <Bot className="size-3.5 text-black" />
          <span>REAL ARCHITECTURE // CAREDI MULTI-AGENT PIPELINE</span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-black">
          Alur Data Multi-Agent WhatsApp ke ERP Production
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-0.5">
          Dari pesan teks bahasa alami pelanggan hingga menjadi Sales Order dan jurnal akuntansi terverifikasi tanpa intervensi manual.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
        {steps.map((s, idx) => (
          <div 
            key={s.step} 
            className="p-4 rounded-xl border border-black/10 bg-neutral-50 flex flex-col justify-between hover:border-black/30 transition-all shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-2">
                <span className="font-bold text-black">STEP {s.step}</span>
                <span className="text-[10px] bg-white border border-black/10 px-1.5 py-0.5 rounded text-neutral-600">
                  {s.actor}
                </span>
              </div>
              <h4 className="font-display text-sm font-bold text-black mb-1">
                {s.title}
              </h4>
              <span className="font-mono text-[10px] text-emerald-700 font-semibold block mb-2">
                {s.tech}
              </span>
              <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                {s.desc}
              </p>
            </div>
            
            <div className="mt-4 pt-2 border-t border-black/5 flex items-center justify-between font-mono text-[10px] text-neutral-400">
              <span>Status</span>
              <span className="flex items-center gap-1 text-emerald-600 font-bold">
                <CheckCircle2 className="size-3" /> Live Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
