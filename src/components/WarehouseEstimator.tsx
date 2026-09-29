import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Box } from 'lucide-react';
import { WAREHOUSE_UNITS } from '../data/warehouseData';
import { WarehouseUnit } from '../types/warehouse';

interface WarehouseEstimatorProps {
  onSelectUnit: (unit: WarehouseUnit) => void;
  onInquireUnit: (unit: WarehouseUnit) => void;
}

export const WarehouseEstimator: React.FC<WarehouseEstimatorProps> = ({
  onSelectUnit,
  onInquireUnit,
}) => {
  const [palletCount, setPalletCount] = useState<number>(600);
  const [rackingTiers, setRackingTiers] = useState<number>(4);
  const [operationType, setOperationType] = useState<string>('distribution');

  // Realistic logistics calculation:
  const effectiveFootprintPerPallet = 2.0;
  const groundPalletPositions = Math.ceil(palletCount / rackingTiers);
  const estimatedFloorRequired = Math.round(groundPalletPositions * effectiveFootprintPerPallet + 80);

  // Find best fitting unit
  let recommendedUnit = WAREHOUSE_UNITS[0];
  if (estimatedFloorRequired <= 400) {
    recommendedUnit = WAREHOUSE_UNITS[2]; // CF-450
  } else if (estimatedFloorRequired <= 600) {
    recommendedUnit = WAREHOUSE_UNITS[1]; // SD-720
  } else if (estimatedFloorRequired <= 1000) {
    recommendedUnit = WAREHOUSE_UNITS[0]; // PL-1200
  } else {
    recommendedUnit = WAREHOUSE_UNITS[3]; // IL-2500
  }

  return (
    <section id="kalkulator" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-amber-600 tracking-wider uppercase flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator Kebutuhan Ruang & Pallet B2B</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight mt-2 text-balance">
            Estimasi Kapasitas Simpan & Rekomendasi Tipe Gudang
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Gunakan simulasi ini untuk memperkirakan luasan lantai gudang dan jumlah tingkat racking yang paling efisien untuk volume barang bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Input Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <label className="text-xs font-bold text-slate-800 block mb-2">
                1. Karakteristik Operasional Bisnis
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setOperationType('distribution')}
                  className={`px-3 py-2 text-xs font-semibold rounded-md border text-center transition-colors cursor-pointer ${
                    operationType === 'distribution'
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  Distribusi / FMCG
                </button>
                <button
                  type="button"
                  onClick={() => setOperationType('ecommerce')}
                  className={`px-3 py-2 text-xs font-semibold rounded-md border text-center transition-colors cursor-pointer ${
                    operationType === 'ecommerce'
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  E-Commerce Hub
                </button>
                <button
                  type="button"
                  onClick={() => setOperationType('bulk')}
                  className={`px-3 py-2 text-xs font-semibold rounded-md border text-center transition-colors cursor-pointer ${
                    operationType === 'bulk'
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  Barang Berat
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-xs font-bold text-slate-800">
                  2. Estimasi Target Kapasitas Pallet
                </label>
                <span className="text-sm font-bold font-mono text-amber-600">
                  {palletCount.toLocaleString('id-ID')} Pallet
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="2500"
                step="50"
                value={palletCount}
                onChange={(e) => setPalletCount(Number(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>100 Pallet</span>
                <span>1.000 Pallet</span>
                <span>2.500+ Pallet</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-xs font-bold text-slate-800">
                  3. Rencana Susunan Racking Vertikal
                </label>
                <span className="text-sm font-bold font-mono text-amber-600">
                  {rackingTiers} Tingkat (Beam Levels)
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[2, 3, 4, 5].map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setRackingTiers(tier)}
                    className={`py-2 text-xs font-mono font-bold rounded-md border transition-colors cursor-pointer ${
                      rackingTiers === tier
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                  >
                    {tier} Tier ({tier * 1.6 + 1.2}m)
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                *Tinggi bebas ceiling Wiraland Gudang (7.5m - 9.0m) aman untuk stacking 4 hingga 5 tier.
              </p>
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>Hasil Kalkulasi Logistik</span>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 mb-6">
                <div>
                  <span className="text-xs text-slate-500 block">Kebutuhan Luas Bangunan</span>
                  <p className="text-2xl font-bold text-slate-950 font-mono tabular-nums mt-0.5">
                    ± {estimatedFloorRequired.toLocaleString('id-ID')} m²
                  </p>
                  <span className="text-[11px] text-slate-500">Termasuk staging & kantor</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Posisi Pallet di Lantai</span>
                  <p className="text-2xl font-bold text-amber-600 font-mono tabular-nums mt-0.5">
                    {groundPalletPositions.toLocaleString('id-ID')} Slot
                  </p>
                  <span className="text-[11px] text-slate-500">Forklift aisle compliant</span>
                </div>
              </div>

              {/* Recommended Unit Match Box */}
              <div className="p-5 rounded-lg bg-amber-50/70 border border-amber-300 relative">
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span>Unit Paling Sesuai:</span>
                  <span className="font-mono text-amber-700 font-bold">{recommendedUnit.code}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-950">
                  {recommendedUnit.name}
                </h4>
                <p className="text-xs text-slate-700 mt-1 line-clamp-2">
                  {recommendedUnit.description}
                </p>

                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-amber-200 text-xs font-mono">
                  <div>
                    <span className="text-slate-500 text-[10px] block">Luas Bangunan</span>
                    <span className="font-bold text-slate-950">{recommendedUnit.buildingArea} m²</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block">Clear Ceiling</span>
                    <span className="font-bold text-slate-950">{recommendedUnit.ceilingHeight} Meter</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block">Estimasi Beli</span>
                    <span className="font-bold text-amber-700">{recommendedUnit.priceStartingFrom.split(' ')[0]} {recommendedUnit.priceStartingFrom.split(' ')[1]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions for calculated result */}
            <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-3">
              <button
                type="button"
                onClick={() => onSelectUnit(recommendedUnit)}
                className="flex-1 py-2.5 text-xs font-semibold text-slate-700 border border-slate-300 hover:bg-slate-50 rounded-md transition-colors text-center cursor-pointer shadow-2xs"
              >
                Lihat Spesifikasi {recommendedUnit.code}
              </button>
              <button
                type="button"
                onClick={() => onInquireUnit(recommendedUnit)}
                className="flex-1 py-2.5 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Minta Proposal Unit Ini</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
