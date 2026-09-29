import React from 'react';
import { X, Check, Building2, Truck, Maximize2, ShieldCheck, Zap, Printer, ArrowRight, Calendar } from 'lucide-react';
import { WarehouseUnit } from '../types/warehouse';

interface WarehouseDetailModalProps {
  unit: WarehouseUnit | null;
  onClose: () => void;
  onInquire: (unit: WarehouseUnit) => void;
  onScheduleSurvey: (unit: WarehouseUnit) => void;
}

export const WarehouseDetailModal: React.FC<WarehouseDetailModalProps> = ({
  unit,
  onClose,
  onInquire,
  onScheduleSurvey,
}) => {
  if (!unit) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white border border-slate-200 w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden my-6 text-slate-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-700 font-bold">
              <span>KODE PROPERTI: {unit.code}</span>
              <span aria-hidden="true" className="text-slate-400">|</span>
              <span className="text-slate-600">{unit.badgeLabel}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mt-0.5">
              {unit.name}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Cetak Spesifikasi"
              className="p-2 text-slate-600 hover:text-slate-950 hover:bg-slate-200 rounded-md transition-colors cursor-pointer hidden sm:flex items-center gap-1.5 text-xs font-semibold"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-950 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
              aria-label="Tutup Detail"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-8">
          {/* Main Visual & Key Metric Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 rounded-lg overflow-hidden border border-slate-200 relative aspect-video bg-slate-100 shadow-xs">
              <img
                src={unit.image}
                alt={unit.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-slate-200 px-2.5 py-1 rounded text-xs font-bold text-slate-900 shadow-xs">
                Status: {unit.availabilityStatus}
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-xs text-slate-500">Luas Tanah (LT)</span>
                <p className="text-xl font-bold text-slate-950 font-mono tabular-nums mt-0.5">
                  {unit.landArea.toLocaleString('id-ID')} m²
                </p>
                <span className="text-[11px] text-slate-500">Kavling Matang</span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-xs text-slate-500">Luas Bangunan (LB)</span>
                <p className="text-xl font-bold text-amber-600 font-mono tabular-nums mt-0.5">
                  {unit.buildingArea.toLocaleString('id-ID')} m²
                </p>
                <span className="text-[11px] text-slate-500">Termasuk Kantor</span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-xs text-slate-500">Clear Ceiling</span>
                <p className="text-xl font-bold text-slate-950 font-mono tabular-nums mt-0.5">
                  {unit.ceilingHeight} Meter
                </p>
                <span className="text-[11px] text-slate-500">Tinggi Bebas</span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-xs text-slate-500">Floor Load</span>
                <p className="text-xl font-bold text-slate-950 font-mono tabular-nums mt-0.5">
                  {unit.floorLoadCapacity} Ton/m²
                </p>
                <span className="text-[11px] text-slate-500">K-350 Hardener</span>
              </div>

              <div className="col-span-2 p-3.5 bg-amber-50 rounded-lg border border-amber-300">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-xs text-amber-800 font-semibold">Estimasi Pembelian</span>
                    <p className="text-lg font-bold text-slate-950 font-mono">{unit.priceStartingFrom}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-amber-800 font-semibold">Opsi Sewa</span>
                    <p className="text-sm font-bold text-slate-800 font-mono">{unit.rentStartingFrom}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Architectural Cross-Section Schematic (Light Theme SVG) */}
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-slate-950 flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-amber-600" />
                <span>Skema Potongan Arsitektur & Ketinggian Bebas</span>
              </h4>
              <span className="text-xs font-mono text-slate-600 font-medium">Dimensi: {unit.dimension}</span>
            </div>

            <div className="w-full bg-white rounded border border-slate-200 p-4 shadow-2xs">
              <svg viewBox="0 0 800 240" className="w-full h-auto text-slate-600" fill="none">
                {/* Ground Line */}
                <line x1="20" y1="210" x2="780" y2="210" stroke="#64748b" strokeWidth="3" />
                <text x="30" y="230" fill="#475569" fontSize="12" fontFamily="monospace" fontWeight="bold">Elevasi Tanah +0.00 (Rigid Pavement K-350)</text>

                {/* Warehouse Main Structure */}
                <rect x="180" y="70" width="460" height="140" fill="#eff6ff" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 2" />
                <path d="M 180 70 L 410 30 L 640 70" stroke="#f59e0b" strokeWidth="3" fill="none" />

                {/* Clear Height Dimension Line */}
                <line x1="410" y1="30" x2="410" y2="210" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4 2" />
                <text x="420" y="110" fill="#0284c7" fontSize="12" fontWeight="bold" fontFamily="monospace">
                  Puncak Atap: {unit.ceilingHeight}m
                </text>

                {/* Wall Height */}
                <line x1="160" y1="70" x2="160" y2="210" stroke="#16a34a" strokeWidth="1.5" />
                <line x1="150" y1="70" x2="170" y2="70" stroke="#16a34a" strokeWidth="1.5" />
                <line x1="150" y1="210" x2="170" y2="210" stroke="#16a34a" strokeWidth="1.5" />
                <text x="70" y="145" fill="#16a34a" fontSize="12" fontWeight="bold" fontFamily="monospace">
                  Dinding: 7.5m
                </text>

                {/* Mezzanine Office Block */}
                <rect x="190" y="130" width="110" height="80" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
                <text x="200" y="175" fill="#0f172a" fontSize="11" fontWeight="bold">Office: {unit.officeArea} m²</text>

                {/* Loading Door */}
                <rect x="530" y="125" width="80" height="85" fill="#f8fafc" stroke="#f59e0b" strokeWidth="2" />
                <text x="540" y="170" fill="#b45309" fontSize="11" fontWeight="bold">Pintu: {unit.doorDimension.split(' ')[0]}</text>

                {/* Truck Apron Zone */}
                <line x1="640" y1="210" x2="770" y2="210" stroke="#f59e0b" strokeWidth="4" />
                <text x="650" y="195" fill="#475569" fontSize="11" fontWeight="bold">Apron Loading Dock</text>
              </svg>
            </div>
          </div>

          {/* Complete Specification Table */}
          <div>
            <h4 className="text-sm font-bold text-slate-950 mb-3">Lembar Spesifikasi Teknis Bangunan</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs border-y border-slate-200 py-3">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Dimensi Lahan & Bangunan</span>
                <span className="font-semibold text-slate-950 font-mono">{unit.dimension}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Status Legalitas Sertifikat</span>
                <span className="font-semibold text-emerald-700">{unit.certificateType}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Luas Kantor Terpasang</span>
                <span className="font-semibold text-slate-950 font-mono">{unit.officeArea} m² (Mezzanine 2 Lantai)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Kapasitas Daya Listrik</span>
                <span className="font-semibold text-slate-950 font-mono">{unit.electricalCapacity}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Dimensi Pintu Gudang</span>
                <span className="font-semibold text-slate-950 font-mono">{unit.doorDimension}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Jumlah Loading Bay</span>
                <span className="font-semibold text-slate-950 font-mono">{unit.loadingBays} Dedicated Bay</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Sumber Suplai Air</span>
                <span className="font-semibold text-slate-950">{unit.waterSupply}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Akses Armada Utama</span>
                <span className="font-bold text-amber-700 font-mono">Tronton & Kontainer 40 ft Direct</span>
              </div>
            </div>
          </div>

          {/* Features & Ideal Use Cases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-bold text-slate-950 mb-2.5">Fitur Unggulan Unit</h4>
              <ul className="space-y-2">
                {unit.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-950 mb-2.5">Ideal Untuk Penggunaan Bisnis</h4>
              <ul className="space-y-2">
                {unit.idealFor.map((use, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Konsultasi langsung dengan tim properti komersial Wiraland.
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onScheduleSurvey(unit);
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-semibold text-slate-700 border border-slate-300 hover:bg-slate-100 rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>Jadwalkan Survey</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onInquire(unit);
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Minta Penawaran Resmi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
