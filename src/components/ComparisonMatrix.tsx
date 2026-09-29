import React from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { WAREHOUSE_UNITS } from '../data/warehouseData';
import { WarehouseUnit } from '../types/warehouse';

interface ComparisonMatrixProps {
  onInquireUnit: (unit: WarehouseUnit) => void;
  onSelectUnit: (unit: WarehouseUnit) => void;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({
  onInquireUnit,
  onSelectUnit,
}) => {
  return (
    <section id="komparasi" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
            Matriks Perbandingan Teknis
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight mt-2 text-balance">
            Bandingkan Seluruh Tipe Unit Wira Logistics Centre
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Tinjau perbedaan dimensi, daya dukung struktur, dan fasilitas penunjang untuk menentukan tipe yang paling optimal bagi kebutuhan anggaran dan operasional Anda.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100 text-xs font-mono">
                <th className="py-4 px-6 text-slate-600 font-bold w-1/5">PARAMETER TEKNIS</th>
                {WAREHOUSE_UNITS.map((u) => (
                  <th key={u.id} className="py-4 px-6 text-slate-950 font-bold w-1/5">
                    <span className="text-amber-700 block text-[11px] font-bold">{u.code}</span>
                    <span className="text-sm font-bold text-slate-950">{u.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-6 font-semibold text-slate-600">Luas Tanah (LT)</td>
                {WAREHOUSE_UNITS.map((u) => (
                  <td key={u.id} className="py-3.5 px-6 font-mono text-slate-950 font-bold">
                    {u.landArea.toLocaleString('id-ID')} m²
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-6 font-semibold text-slate-600">Luas Bangunan (LB)</td>
                {WAREHOUSE_UNITS.map((u) => (
                  <td key={u.id} className="py-3.5 px-6 font-mono text-amber-600 font-bold">
                    {u.buildingArea.toLocaleString('id-ID')} m²
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-6 font-semibold text-slate-600">Luas Kantor Mezzanine</td>
                {WAREHOUSE_UNITS.map((u) => (
                  <td key={u.id} className="py-3.5 px-6 font-mono text-slate-800">
                    {u.officeArea} m²
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-6 font-semibold text-slate-600">Clear Ceiling Height</td>
                {WAREHOUSE_UNITS.map((u) => (
                  <td key={u.id} className="py-3.5 px-6 font-mono text-slate-950 font-semibold">
                    {u.ceilingHeight} Meter
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-6 font-semibold text-slate-600">Floor Load Capacity</td>
                {WAREHOUSE_UNITS.map((u) => (
                  <td key={u.id} className="py-3.5 px-6 font-mono text-slate-800">
                    {u.floorLoadCapacity} Ton / m²
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-6 font-semibold text-slate-600">Kapasitas Listrik Standar</td>
                {WAREHOUSE_UNITS.map((u) => (
                  <td key={u.id} className="py-3.5 px-6 font-mono text-slate-800">
                    {u.electricalCapacity.split(' ')[0]} {u.electricalCapacity.split(' ')[1]}
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-6 font-semibold text-slate-600">Loading Bay & Pintu</td>
                {WAREHOUSE_UNITS.map((u) => (
                  <td key={u.id} className="py-3.5 px-6 text-slate-800">
                    {u.loadingBays} Bay · {u.doorDimension.split(' ')[0]}
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-6 font-semibold text-slate-600">Akses Truk Kontainer</td>
                {WAREHOUSE_UNITS.map((u) => (
                  <td key={u.id} className="py-3.5 px-6 text-emerald-700 font-bold font-mono">
                    Kontainer 40 ft Direct
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-6 font-semibold text-slate-600">Status Legalitas</td>
                {WAREHOUSE_UNITS.map((u) => (
                  <td key={u.id} className="py-3.5 px-6 text-slate-800">
                    {u.certificateType.split('(')[0]}
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-slate-50/80 bg-slate-50/50">
                <td className="py-4 px-6 font-bold text-slate-950">Mulai Dari (Jual)</td>
                {WAREHOUSE_UNITS.map((u) => (
                  <td key={u.id} className="py-4 px-6 font-mono text-base font-bold text-slate-950">
                    {u.priceStartingFrom}
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-slate-50/80">
                <td className="py-4 px-6 font-semibold text-slate-600">Opsi Sewa Tahunan</td>
                {WAREHOUSE_UNITS.map((u) => (
                  <td key={u.id} className="py-4 px-6 font-mono text-xs text-slate-700 font-medium">
                    {u.rentStartingFrom}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-4 px-6 font-semibold text-slate-600">Aksi Pembelian/Sewa</td>
                {WAREHOUSE_UNITS.map((u) => (
                  <td key={u.id} className="py-4 px-6">
                    <button
                      onClick={() => onInquireUnit(u)}
                      className="w-full py-2 px-3 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors text-center cursor-pointer flex items-center justify-center gap-1 shadow-2xs"
                    >
                      <span>Inquire Unit</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile & Tablet Card View */}
        <div className="lg:hidden space-y-6">
          {WAREHOUSE_UNITS.map((unit) => (
            <div
              key={unit.id}
              className="p-5 rounded-xl bg-white border border-slate-200 space-y-4 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono text-amber-700 font-bold">{unit.code}</span>
                  <h3 className="text-base font-bold text-slate-950">{unit.name}</h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  {unit.availabilityStatus}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs border-y border-slate-100 py-3">
                <div>
                  <span className="text-slate-500 block text-[11px]">Luas Tanah (LT)</span>
                  <span className="font-bold text-slate-950 font-mono">{unit.landArea} m²</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Luas Bangunan (LB)</span>
                  <span className="font-bold text-amber-600 font-mono">{unit.buildingArea} m²</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Clear Ceiling</span>
                  <span className="font-bold text-slate-950 font-mono">{unit.ceilingHeight}m</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Floor Load</span>
                  <span className="font-bold text-slate-950 font-mono">{unit.floorLoadCapacity} Ton/m²</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Kantor Mezzanine</span>
                  <span className="font-bold text-slate-700 font-mono">{unit.officeArea} m²</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Akses Truk</span>
                  <span className="font-bold text-emerald-700 font-mono">Kontainer 40 ft</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 block">Harga Mulai</span>
                  <span className="text-sm font-bold text-slate-950 font-mono">{unit.priceStartingFrom}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => onSelectUnit(unit)}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-300 rounded hover:bg-slate-50"
                  >
                    Detail
                  </button>
                  <button
                    onClick={() => onInquireUnit(unit)}
                    className="px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-amber-500 rounded hover:bg-amber-400"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
