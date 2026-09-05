import { ShoppingCart, PackageCheck, ArrowRight, Database, CheckCircle2, ShieldCheck, Layers, Truck } from "lucide-react"

export function ArchitectureFlowchart() {
  const steps = [
    {
      step: "01",
      title: "Taking Order & POS",
      actor: "Sales / Kasir",
      tech: "Dual-Channel Sales",
      desc: "Transaksi kasir langsung di outlet atau pesanan sales kanvas keliling (Taking Order / TO) via smartphone.",
    },
    {
      step: "02",
      title: "Pencatatan Embalase",
      actor: "Gudang & Logistik",
      tech: "Aset Botol & Krat",
      desc: "Penerimaan botol kosong & krat titipan dari outlet/pelanggan, langsung dicatat ke stok sebagai aset persediaan.",
    },
    {
      step: "03",
      title: "Potong Nota & Piutang",
      actor: "Billing Engine",
      tech: "Auto AR Deduction",
      desc: "Nilai botol bekas otomatis memotong nilai faktur penjualan berjalan atau mengurangi saldo piutang tertagih pelanggan.",
    },
    {
      step: "04",
      title: "FIFO Batch & Delivery",
      actor: "Inventory System",
      tech: "PostgreSQL FIFO Costing",
      desc: "Penetapan HPP produk keluar berbasis batch tertua (FIFO), penerbitan surat jalan armada, dan muat barang.",
    },
    {
      step: "05",
      title: "Aging Piutang & Jurnal",
      actor: "Accounting Core",
      tech: "Double-Entry & Aging Report",
      desc: "Penjurnalan otomatis append-only tanpa float, monitoring umur piutang (0–30, 31–60, 61–90+ hari), dan laporan laba rugi.",
    },
  ]

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
      <div className="border-b border-black/10 pb-4 mb-6">
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 mb-1 font-bold">
          <Truck className="size-3.5 text-black" />
          <span>REAL LOGISTICS & FINANCE // CAREDI DISTRIBUTION PIPELINE</span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-black">
          Alur Penjualan TO / POS, Embalase Botol Bekas, &amp; Kontrol Piutang
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-0.5">
          Siklus operasional distributor FMCG: dari pemesanan Taking Order (TO), pencatatan fisik botol kosong pengurang nota, kalkulasi HPP FIFO, hingga manajemen umur piutang (aging schedule).
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
