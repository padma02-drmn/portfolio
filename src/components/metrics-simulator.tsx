import { useState } from "react"
import { Calculator, Hotel, DollarSign, Percent, TrendingUp, RefreshCw, Utensils, AlertTriangle, CheckCircle2 } from "lucide-react"
import { useLang } from "@/context/language-context"

export function MetricsSimulator() {
  const { t } = useLang()
  const [activeTab, setActiveTab] = useState<"hotel" | "fnb">("hotel")

  // State Input Hotel
  const [totalRooms, setTotalRooms] = useState(50)
  const [occupiedRooms, setOccupiedRooms] = useState(38)
  const [roomRate, setRoomRate] = useState(650000)
  const [fbRevenue, setFbRevenue] = useState(8500000)

  // Perhitungan Hospitality Metrics
  const occ = totalRooms > 0 ? (occupiedRooms / totalRooms) * 100 : 0
  const roomRevenue = occupiedRooms * roomRate
  const adr = occupiedRooms > 0 ? roomRevenue / occupiedRooms : 0
  const revPar = totalRooms > 0 ? roomRevenue / totalRooms : 0
  const totalRev = roomRevenue + fbRevenue
  const tRevPar = totalRooms > 0 ? totalRev / totalRooms : 0

  // State Input F&B Cost Guard
  const [menuSellingPrice, setMenuSellingPrice] = useState(45000)
  const [rawFoodCost, setRawFoodCost] = useState(13500)
  const [dailyPortions, setDailyPortions] = useState(120)

  // Perhitungan F&B Metrics
  const foodCostPercent = menuSellingPrice > 0 ? (rawFoodCost / menuSellingPrice) * 100 : 0
  const grossMarginPerPortion = menuSellingPrice - rawFoodCost
  const dailyFnbGrossRevenue = menuSellingPrice * dailyPortions
  const dailyFnbProfit = grossMarginPerPortion * dailyPortions

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num)
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 mb-1 font-bold">
            <Calculator className="size-3.5 text-black" />
            <span>INTERACTIVE FINANCIAL ENGINE // DETERMINISTIC MATH</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-black">
            {t("Simulator Finansial & Operasional Bisnis", "Financial & Operational Business Simulator")}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-0.5">
            {activeTab === "hotel"
              ? t(
                  "Kalkulasi metrik perhotelan standar USALI: OCC, ADR, RevPAR, dan TRevPAR.",
                  "USALI-standard hospitality metrics: live OCC, ADR, RevPAR, and TRevPAR."
                )
              : t(
                  "Kalkulasi Food Cost % (BOM), margin porsi, dan ambang batas kewajaran F&B.",
                  "F&B recipe Bill of Materials (BOM) costing, contribution margin, and threshold safety."
                )}
          </p>
        </div>

        {/* Tab Switcher & Reset */}
        <div className="flex items-center gap-2 self-start">
          <div className="flex rounded-lg border border-black/10 bg-neutral-50 p-1 font-mono text-xs">
            <button
              onClick={() => setActiveTab("hotel")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-semibold transition-all ${
                activeTab === "hotel" ? "bg-white text-black shadow-xs" : "text-neutral-500 hover:text-black"
              }`}
            >
              <Hotel className="size-3.5" />
              <span>Hotel (USALI)</span>
            </button>
            <button
              onClick={() => setActiveTab("fnb")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-semibold transition-all ${
                activeTab === "fnb" ? "bg-white text-black shadow-xs" : "text-neutral-500 hover:text-black"
              }`}
            >
              <Utensils className="size-3.5" />
              <span>F&amp;B Cost Guard</span>
            </button>
          </div>

          <button
            onClick={() => {
              if (activeTab === "hotel") {
                setTotalRooms(50)
                setOccupiedRooms(38)
                setRoomRate(650000)
                setFbRevenue(8500000)
              } else {
                setMenuSellingPrice(45000)
                setRawFoodCost(13500)
                setDailyPortions(120)
              }
            }}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-500 hover:text-black border border-black/10 rounded px-2.5 py-1.5 bg-neutral-50 transition-colors"
          >
            <RefreshCw className="size-3" />
          </button>
        </div>
      </div>

      {/* TAB 1: HOTEL METRICS */}
      {activeTab === "hotel" ? (
        <div className="mt-6 grid lg:grid-cols-12 gap-8 items-start">
          {/* Kontrol Slider Hotel */}
          <div className="lg:col-span-6 space-y-5 font-mono text-xs">
            <div>
              <div className="flex justify-between text-neutral-700 font-bold mb-1.5">
                <span>{t("Total Kapasitas Kamar (Total Rooms):", "Total Inventory (Available Rooms):")}</span>
                <span className="text-black font-bold">{totalRooms} {t("Kamar", "Rooms")}</span>
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
                <span>{t("Kamar Terjual / Terisi (Occupied):", "Occupied Rooms (Sold):")}</span>
                <span className="text-black font-bold">{occupiedRooms} {t("Kamar", "Rooms")}</span>
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
                <span>{t("Harga Kamar Rata-rata (Room Rate):", "Average Daily Rate (ADR):")}</span>
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
                <span>{t("Pendapatan F&B & Fasilitas Lain:", "F&B & Amenities Revenue:")}</span>
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

          {/* Display Hasil Kalkulasi Hotel */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3">
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
                {occupiedRooms} {t("dari", "of")} {totalRooms} {t("unit terisi", "rooms occupied")}
              </span>
            </div>

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
                {t("Rata-rata pendapatan per kamar laku", "Average realized rate per sold room")}
              </span>
            </div>

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
                {t("Kamar Terjual × ADR ÷ Total Kamar", "Sold Rooms × ADR ÷ Total Rooms")}
              </span>
            </div>

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
                {t("Total Kamar + F&B per inventory", "Rooms + F&B gross per inventory")}
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* TAB 2: F&B COST GUARD & BOM */
        <div className="mt-6 grid lg:grid-cols-12 gap-8 items-start">
          {/* Kontrol Slider F&B */}
          <div className="lg:col-span-6 space-y-5 font-mono text-xs">
            <div>
              <div className="flex justify-between text-neutral-700 font-bold mb-1.5">
                <span>{t("Harga Jual Menu (Selling Price):", "Menu Selling Price:")}</span>
                <span className="text-black font-bold">{formatIDR(menuSellingPrice)}</span>
              </div>
              <input
                type="range"
                min="15000"
                max="150000"
                step="2500"
                value={menuSellingPrice}
                onChange={(e) => setMenuSellingPrice(Number(e.target.value))}
                className="w-full accent-black cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-neutral-700 font-bold mb-1.5">
                <span>{t("Biaya Bahan Baku (Raw BOM Food Cost):", "Raw Food Cost (BOM Grammage):")}</span>
                <span className="text-black font-bold">{formatIDR(rawFoodCost)}</span>
              </div>
              <input
                type="range"
                min="3000"
                max={menuSellingPrice}
                step="500"
                value={rawFoodCost}
                onChange={(e) => setRawFoodCost(Number(e.target.value))}
                className="w-full accent-black cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-neutral-700 font-bold mb-1.5">
                <span>{t("Estimasi Penjualan Harian (Porsi):", "Daily Volume (Portions Sold):")}</span>
                <span className="text-black font-bold">{dailyPortions} {t("Porsi", "Portions")}</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={dailyPortions}
                onChange={(e) => setDailyPortions(Number(e.target.value))}
                className="w-full accent-black cursor-pointer"
              />
            </div>

            <div className="p-3 rounded-lg border border-black/5 bg-neutral-50 text-[11px] text-neutral-600 space-y-1">
              <span className="font-bold text-black block">{t("Ambang Batas Industri F&B:", "F&B Industry Benchmarks:")}</span>
              <p>• <strong>28% - 32%</strong>: {t("Target ideal Food Cost sehat", "Healthy target food cost")}</p>
              <p>• <strong>&gt; 35%</strong>: {t("Peringatan kebocoran resep / porsi berlebih", "Recipe leakage / over-portion alert")}</p>
            </div>
          </div>

          {/* Display Hasil Kalkulasi F&B */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3">
            {/* Food Cost % */}
            <div className={`p-4 rounded-xl border flex flex-col justify-between ${
              foodCostPercent > 35 
                ? "border-amber-400 bg-amber-50/50" 
                : "border-black/10 bg-neutral-50"
            }`}>
              <span className="font-mono text-[11px] text-neutral-500 uppercase flex items-center justify-between">
                Food Cost %
                {foodCostPercent > 35 ? (
                  <AlertTriangle className="size-3 text-amber-600" />
                ) : (
                  <CheckCircle2 className="size-3 text-emerald-600" />
                )}
              </span>
              <div className="my-2">
                <span className={`font-display text-2xl sm:text-3xl font-bold ${
                  foodCostPercent > 35 ? "text-amber-700" : "text-black"
                }`}>
                  {foodCostPercent.toFixed(1)}%
                </span>
              </div>
              <span className="font-mono text-[10px] text-neutral-500">
                {foodCostPercent <= 32 
                  ? t("Status: Optimal & Sehat", "Status: Optimal & Healthy") 
                  : t("Status: Waspada Margin Tipis", "Status: Alert - Thin Margin")}
              </span>
            </div>

            {/* Margin per Porsi */}
            <div className="p-4 rounded-xl border border-black/10 bg-neutral-50 flex flex-col justify-between">
              <span className="font-mono text-[11px] text-neutral-500 uppercase flex items-center justify-between">
                {t("Margin / Porsi", "Contribution / Item")}
                <DollarSign className="size-3 text-neutral-400" />
              </span>
              <div className="my-2">
                <span className="font-display text-lg sm:text-xl font-bold text-black">
                  {formatIDR(grossMarginPerPortion)}
                </span>
              </div>
              <span className="font-mono text-[10px] text-neutral-500">
                {(100 - foodCostPercent).toFixed(1)}% {t("margin kotor per menu", "gross margin per item")}
              </span>
            </div>

            {/* Proyeksi Omzet F&B */}
            <div className="p-4 rounded-xl border border-black/10 bg-neutral-50 flex flex-col justify-between">
              <span className="font-mono text-[11px] text-neutral-500 uppercase flex items-center justify-between">
                {t("Omzet Harian Menu", "Gross Revenue / Day")}
                <TrendingUp className="size-3 text-neutral-400" />
              </span>
              <div className="my-2">
                <span className="font-display text-lg sm:text-xl font-bold text-black">
                  {formatIDR(dailyFnbGrossRevenue)}
                </span>
              </div>
              <span className="font-mono text-[10px] text-neutral-500">
                {dailyPortions} {t("porsi terjual harian", "portions sold per day")}
              </span>
            </div>

            {/* Laba Kotor F&B */}
            <div className="p-4 rounded-xl border border-black/10 bg-black text-white flex flex-col justify-between">
              <span className="font-mono text-[11px] text-neutral-400 uppercase flex items-center justify-between">
                {t("Laba Kotor Bahan / Hari", "Gross Profit / Day")}
                <TrendingUp className="size-3 text-emerald-400" />
              </span>
              <div className="my-2">
                <span className="font-display text-lg sm:text-xl font-bold text-white">
                  {formatIDR(dailyFnbProfit)}
                </span>
              </div>
              <span className="font-mono text-[10px] text-neutral-400">
                {t("Omzet - HPP Bahan Baku", "Revenue - Raw Ingredient COGS")}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Footer Summary */}
      <div className="mt-6 border-t border-black/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-neutral-600">
        <div>
          <span className="font-bold text-black">
            {activeTab === "hotel"
              ? t("Total Omzet Harian (Room + F&B):", "Total Daily Gross (Room + F&B):")
              : t("Proyeksi Laba Kotor Bahan Harian:", "Projected Daily Ingredient Profit:")}
          </span>{" "}
          <span className="text-emerald-700 font-bold">
            {activeTab === "hotel" ? formatIDR(totalRev) : formatIDR(dailyFnbProfit)}
          </span>
        </div>
        <span className="text-[11px] text-neutral-500">
          {activeTab === "hotel"
            ? t("Formula deterministik · Standar USALI Perhotelan", "Deterministic logic · USALI Hospitality Standards")
            : t("Formula akuntansi persediaan FIFO & BOM F&B", "FIFO stock inventory & F&B BOM recipe logic")}
        </span>
      </div>
    </div>
  )
}
