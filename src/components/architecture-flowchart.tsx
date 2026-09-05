import { CheckCircle2, Truck } from "lucide-react"
import { useLang } from "@/context/language-context"

export function ArchitectureFlowchart() {
  const { lang, t } = useLang()

  const steps = [
    {
      step: "01",
      title: {
        id: "Taking Order & POS",
        en: "Taking Order & POS",
      },
      actor: {
        id: "Sales / Kasir",
        en: "Sales / Cashier",
      },
      tech: {
        id: "Dual-Channel Sales",
        en: "Dual-Channel Engine",
      },
      desc: {
        id: "Transaksi kasir langsung di outlet atau pesanan sales kanvas keliling (Taking Order / TO) via smartphone.",
        en: "Instant counter transactions at retail branches alongside field Taking Order (TO) van-sales via mobile.",
      },
    },
    {
      step: "02",
      title: {
        id: "Pencatatan Embalase",
        en: "Embalase & Bottle Tracking",
      },
      actor: {
        id: "Gudang & Logistik",
        en: "Warehouse & Fleet",
      },
      tech: {
        id: "Aset Botol & Krat",
        en: "Packaging Inventory Asset",
      },
      desc: {
        id: "Penerimaan botol kosong & krat titipan dari outlet/pelanggan, langsung dicatat ke stok sebagai aset persediaan.",
        en: "Custody verification of returned crates and glass bottles, recognized as strict inventory assets on the balance sheet.",
      },
    },
    {
      step: "03",
      title: {
        id: "Potong Nota & Piutang",
        en: "Auto Credit & AR Deduction",
      },
      actor: {
        id: "Billing Engine",
        en: "Billing Engine",
      },
      tech: {
        id: "Auto AR Deduction",
        en: "Automated AR Offsets",
      },
      desc: {
        id: "Nilai botol bekas otomatis memotong nilai faktur penjualan berjalan atau mengurangi saldo piutang tertagih pelanggan.",
        en: "Returned bottle valuations instantly deduct active invoice totals or offset outstanding accounts receivable (AR).",
      },
    },
    {
      step: "04",
      title: {
        id: "FIFO Batch & Delivery",
        en: "FIFO Batching & Dispatch",
      },
      actor: {
        id: "Inventory System",
        en: "Warehouse System",
      },
      tech: {
        id: "PostgreSQL FIFO Costing",
        en: "Postgres FIFO Ledger",
      },
      desc: {
        id: "Penetapan HPP produk keluar berbasis batch tertua (FIFO), penerbitan surat jalan armada, dan muat barang.",
        en: "Cost of goods allocation based on oldest inbound batches (FIFO), automated delivery manifests, and fleet loading.",
      },
    },
    {
      step: "05",
      title: {
        id: "Aging Piutang & Jurnal",
        en: "AR Aging & Ledger Lock",
      },
      actor: {
        id: "Accounting Core",
        en: "Accounting Core",
      },
      tech: {
        id: "Double-Entry & Aging",
        en: "Immutable Double-Entry",
      },
      desc: {
        id: "Penjurnalan otomatis append-only tanpa float, monitoring umur piutang (0–30, 31–60, 61–90+ hari), dan laporan laba rugi.",
        en: "Automated zero-float journal entries, active credit term monitoring (0-30, 31-60, 61-90+ days), and balanced P&L reporting.",
      },
    },
  ]

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
      <div className="border-b border-black/10 pb-4 mb-6">
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 mb-1 font-bold">
          <Truck className="size-3.5 text-black" />
          <span>REAL LOGISTICS &amp; FINANCE // CAREDI DISTRIBUTION PIPELINE</span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-black">
          {t(
            "Alur Penjualan TO / POS, Embalase Botol Bekas, & Kontrol Piutang",
            "Taking Order (TO) / POS Logistics, Returnable Embalase, & AR Aging Pipeline"
          )}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-0.5">
          {t(
            "Siklus operasional distributor FMCG: dari pemesanan Taking Order (TO), pencatatan fisik botol kosong pengurang nota, kalkulasi HPP FIFO, hingga manajemen umur piutang (aging schedule).",
            "FMCG operational lifecycle: van-sales Taking Order (TO), returnable empty packaging balance offsets, FIFO batch costing, and structured AR aging."
          )}
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
                  {lang === "en" ? s.actor.en : s.actor.id}
                </span>
              </div>
              <h4 className="font-display text-sm font-bold text-black mb-1">
                {lang === "en" ? s.title.en : s.title.id}
              </h4>
              <span className="font-mono text-[10px] text-emerald-700 font-semibold block mb-2">
                {lang === "en" ? s.tech.en : s.tech.id}
              </span>
              <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                {lang === "en" ? s.desc.en : s.desc.id}
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
