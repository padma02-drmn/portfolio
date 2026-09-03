import { useState } from "react"
import { Calculator, Hotel, DollarSign, Percent, TrendingUp, RefreshCw } from "lucide-react"

export function MetricsSimulator() {
  // State Input Hotel
  const [totalRooms, setTotalRooms] = useState(50)
  const [occupiedRooms, setOccupiedRooms] = useState(38)
  const [roomRate, setRoomRate] = useState(650000)
  const [fbRevenue, setFbRevenue] = useState(8500000)

  // Perhitungan Hospitality Metrics
  const occ = totalRooms > 0 ? ((occupiedRooms / totalRooms) * 100) : 0
  const roomRevenue = occupiedRooms * roomRate
  const adr = occupiedRooms > 0 ? (roomRevenue / occupiedRooms) : 0
  const revPar = totalRooms > 0 ? (roomRevenue / totalRooms) : 0
  const totalRev = roomRevenue + fbRevenue
  const tRevPar = totalRooms > 0 ? (totalRev / totalRooms) : 0

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num)
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 mb-1 font-bold">
            <Hotel className="size-3.5 text-black" />
            <span>INTERACTIVE ENGINE // USALI STANDARDS</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-black">
            Hospitality &amp; Hotel Metrics Simulator
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-0.5">
            Geser parameter operasional untuk melihat kalkulasi OCC, ADR, RevPAR, dan TRevPAR secara real-time.
          </p>
        </div>

        <button
          onClick={() => {
            setTotalRooms(50)
            setOccupiedRooms(38)
            setRoomRate(650000)
            setFbRevenue(8500000)
          }}
          className="inline-flex items-center gap-1.5 self-start font-mono text-xs text-neutral-500 hover:text-black border border-black/10 rounded px-2.5 py-1.5 bg-neutral-50 transition-colors"
        >
          <RefreshCw className="size-3" /> Reset Nilai
        </button>
      </div>

      <div className="mt-6 grid lg:grid-cols-12 gap-8 items-start">
        {/* Kontrol Slider */}
        <div className="lg:col-span-6 space-y-5 font-mono text-xs">
          <div>
            <div className="flex justify-between text-neutral-700 font-bold mb-1.5">
              <span>Total Kapasitas Kamar (Total Rooms):</span>
              <span className="text-black font-bold">{totalRooms} Kamar</span>
            </div>
            <input
              type="range"
              min="10"
              max="200"
              step="5"
              value={totalRooms}
              onChange={(e) => {
                const val = Number(e.target.value)
                setTotalRooms(val)
                if (occupiedRooms > val) setOccupiedRooms(val)
              }}
              className="w-full accent-black cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-neutral-700 font-bold mb-1.5">
              <span>Kamar Terjual / Terisi (Occupied):</span>
              <span className="text-black font-bold">{occupiedRooms} Kamar</span>
            </div>
            <input
              type="range"
              min="0"
              max={totalRooms}
              step="1"
              value={occupiedRooms}
              onChange={(e) => setOccupiedRooms(Number(e.target.value))}
              className="w-full accent-black cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-neutral-700 font-bold mb-1.5">
              <span>Harga Kamar Rata-rata (Room Rate):</span>
              <span className="text-black font-bold">{formatIDR(roomRate)}</span>
            </div>
            <input
              type="range"
              min="200000"
              max="3500000"
              step="50000"
              value={roomRate}
              onChange={(e) => setRoomRate(Number(e.target.value))}
              className="w-full accent-black cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-neutral-700 font-bold mb-1.5">
              <span>Pendapatan F&amp;B &amp; Fasilitas Lain:</span>
              <span className="text-black font-bold">{formatIDR(fbRevenue)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="30000000"
              step="500000"
              value={fbRevenue}
              onChange={(e) => setFbRevenue(Number(e.target.value))}
              className="w-full accent-black cursor-pointer"
            />
          </div>
        </div>

        {/* Display Hasil Kalkulasi */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-3">
          {/* OCC */}
          <div className="p-4 rounded-xl border border-black/10 bg-neutral-50 flex flex-col justify-between">
            <span className="font-mono text-[11px] text-neutral-500 uppercase flex items-center justify-between">
              OCC (Occupancy)
              <Percent className="size-3 text-neutral-400" />
            </span>
            <div className="my-2">
              <span className="font-display text-2xl sm:text-3xl font-bold text-black">
                {occ.toFixed(1)}%
              </span>
            </div>
            <span className="font-mono text-[10px] text-neutral-500">
              {occupiedRooms} dari {totalRooms} unit terisi
            </span>
          </div>

          {/* ADR */}
          <div className="p-4 rounded-xl border border-black/10 bg-neutral-50 flex flex-col justify-between">
            <span className="font-mono text-[11px] text-neutral-500 uppercase flex items-center justify-between">
              ADR (Avg Daily Rate)
              <DollarSign className="size-3 text-neutral-400" />
            </span>
            <div className="my-2">
              <span className="font-display text-lg sm:text-xl font-bold text-black">
                {formatIDR(adr)}
              </span>
            </div>
            <span className="font-mono text-[10px] text-neutral-500">
              Rata-rata pendapatan per kamar laku
            </span>
          </div>

          {/* RevPAR */}
          <div className="p-4 rounded-xl border border-black/10 bg-black text-white flex flex-col justify-between">
            <span className="font-mono text-[11px] text-neutral-400 uppercase flex items-center justify-between">
              RevPAR (Room Efficiency)
              <TrendingUp className="size-3 text-emerald-400" />
            </span>
            <div className="my-2">
              <span className="font-display text-lg sm:text-xl font-bold text-white">
                {formatIDR(revPar)}
              </span>
            </div>
            <span className="font-mono text-[10px] text-neutral-400">
              Kamar Terjual × ADR ÷ Total Kamar
            </span>
          </div>

          {/* TRevPAR */}
          <div className="p-4 rounded-xl border border-black/10 bg-neutral-50 flex flex-col justify-between">
            <span className="font-mono text-[11px] text-neutral-500 uppercase flex items-center justify-between">
              TRevPAR (Total Rev / Room)
              <Calculator className="size-3 text-neutral-400" />
            </span>
            <div className="my-2">
              <span className="font-display text-lg sm:text-xl font-bold text-black">
                {formatIDR(tRevPar)}
              </span>
            </div>
            <span className="font-mono text-[10px] text-neutral-500">
              Total Kamar + F&amp;B per inventory
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-black/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-neutral-600">
        <div>
          <span className="font-bold text-black">Total Omzet Harian (Room + F&amp;B):</span>{" "}
          <span className="text-emerald-700 font-bold">{formatIDR(totalRev)}</span>
        </div>
        <span className="text-[11px] text-neutral-500">
          Formula deterministik · Standar USALI &amp; Akuntansi Perhotelan
        </span>
      </div>
    </div>
  )
}
