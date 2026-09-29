import React, { useState } from 'react';
import { ArrowUpRight, Check, Maximize2, ShieldCheck, Truck, Zap, Filter } from 'lucide-react';
import { WAREHOUSE_UNITS } from '../data/warehouseData';
import { WarehouseUnit } from '../types/warehouse';

interface WarehouseCatalogProps {
  onSelectUnit: (unit: WarehouseUnit) => void;
  onInquireUnit: (unit: WarehouseUnit) => void;
}

export const WarehouseCatalog: React.FC<WarehouseCatalogProps> = ({
  onSelectUnit,
  onInquireUnit,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'logistics' | 'standard' | 'compact' | 'land'>('all');

  const filteredUnits = WAREHOUSE_UNITS.filter((u) => {
    if (activeFilter === 'all') return true;
    return u.typeCategory === activeFilter;
  });

  return (
    <section id="katalog" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
              Katalog Properti Industri
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight mt-2 text-balance">
              Pilihan Unit Gudang Siap Operasional & Kavling Industri
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Setiap unit dirancang dengan spesifikasi teknis transparan untuk menjamin efisiensi ruang simpan, sirkulasi forklift, dan kenyamanan operasional staf.
            </p>
          </div>

          {/* Functional Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg overflow-x-auto max-w-full shadow-2xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Semua Unit ({WAREHOUSE_UNITS.length})
            </button>
            <button
              onClick={() => setActiveFilter('logistics')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'logistics'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Logistics Hub (≥1.000m²)
            </button>
            <button
              onClick={() => setActiveFilter('standard')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'standard'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Standard (500 - 900m²)
            </button>
            <button
              onClick={() => setActiveFilter('compact')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'compact'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Compact (&lt;500m²)
            </button>
            <button
              onClick={() => setActiveFilter('land')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'land'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Kavling Tanah
            </button>
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredUnits.map((unit) => (
            <article
              key={unit.id}
              className="bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl rounded-xl overflow-hidden transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Image Carrier with Status Banner */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={unit.image}
                    alt={unit.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                  
                  {/* Status & Code overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold bg-white/95 text-slate-900 border border-slate-200 px-2.5 py-1 rounded shadow-xs">
                      {unit.code}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded backdrop-blur-sm border shadow-xs ${
                        unit.availabilityStatus === 'Ready / Siap Pakai'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          : unit.availabilityStatus === 'Indent Terbatas'
                          ? 'bg-amber-50 text-amber-800 border-amber-300'
                          : 'bg-blue-50 text-blue-800 border-blue-300'
                      }`}
                    >
                      {unit.availabilityStatus}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 text-xs font-medium text-white/90">
                    {unit.badgeLabel}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  {/* Metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
                    <span>Industrial Warehouse</span>
                    <span aria-hidden="true">·</span>
                    <span>{unit.certificateType.split(' ')[0]} Murni</span>
                    <span aria-hidden="true">·</span>
                    <span>Ready AJB</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-amber-600 transition-colors">
                    {unit.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {unit.description}
                  </p>

                  {/* Dimension Grid Metric Badges */}
                  <div className="grid grid-cols-3 gap-2 my-5 p-3 sm:p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-center sm:text-left">
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">Luas Tanah</span>
                      <span className="text-sm sm:text-base font-bold text-slate-950 font-mono tabular-nums block truncate">
                        {unit.landArea.toLocaleString('id-ID')} m²
                      </span>
                    </div>

                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">Luas Bangunan</span>
                      <span className="text-sm sm:text-base font-bold text-amber-600 font-mono tabular-nums block truncate">
                        {unit.buildingArea.toLocaleString('id-ID')} m²
                      </span>
                    </div>

                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">Clear Ceiling</span>
                      <span className="text-sm sm:text-base font-bold text-slate-950 font-mono tabular-nums block truncate">
                        {unit.ceilingHeight} Meter
                      </span>
                    </div>
                  </div>

                  {/* Key Tech Specs Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 mb-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">Beban Lantai {unit.floorLoadCapacity} Ton/m²</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">{unit.loadingBays} Loading Bay Direct</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">{unit.electricalCapacity.split(' ')[0]} Listrik</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">Kantor {unit.officeArea} m² Mezzanine</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Price & CTA Actions */}
              <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-slate-500 block">Mulai Dari (Jual / Sewa)</span>
                  <span className="text-base sm:text-lg font-bold text-slate-950 font-mono">
                    {unit.priceStartingFrom}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectUnit(unit)}
                    className="px-3.5 py-2 text-xs font-semibold text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-white rounded-md transition-colors cursor-pointer bg-white shadow-2xs"
                  >
                    Lihat Detail
                  </button>
                  <button
                    onClick={() => onInquireUnit(unit)}
                    className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Pesan Unit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
