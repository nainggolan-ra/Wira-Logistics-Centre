import React, { useState } from 'react';
import { Layers, CheckCircle2, Info, ArrowUpRight } from 'lucide-react';
import { SITE_PLAN_ZONES } from '../data/warehouseData';
import { SitePlanZone } from '../types/warehouse';

interface SitePlanViewerProps {
  onInquireZone: (zoneName: string) => void;
}

export const SitePlanViewer: React.FC<SitePlanViewerProps> = ({ onInquireZone }) => {
  const [selectedZone, setSelectedZone] = useState<SitePlanZone>(SITE_PLAN_ZONES[1]); // default to Block A

  return (
    <section id="masterplan" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
            Tata Letak Kawasan (Site Master Plan)
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight mt-2 text-balance">
            Master Plan Kawasan 16 Hektar dengan ROW 24 Meter
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Kawasan Wira Logistics Centre dirancang terpadu dengan jalan arteri utama ROW 24 meter, jalan klaster ROW 14-16 meter, zonasi pergudangan efisien, serta sistem drainase terpadu bebas banjir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Site Plan Schematic Map */}
          <div className="lg:col-span-8 bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-700">KLIK KLASTER ATAU FASILITAS PADA MASTER PLAN:</span>
              <span className="text-xs font-mono text-amber-700 font-bold bg-amber-100/70 border border-amber-200 px-2 py-0.5 rounded">
                Master Plan 16 Hektar
              </span>
            </div>

            {/* Interactive SVG Site Plan Layout (Crisp Light Theme) */}
            <div className="relative bg-white rounded-lg border border-slate-300 overflow-hidden p-3 aspect-[16/10] shadow-xs">
              <svg viewBox="0 0 1000 620" className="w-full h-full" fill="none">
                {/* Estate Perimeter Border */}
                <rect x="20" y="20" width="960" height="580" rx="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />

                {/* Main Arterial Road (ROW 24m) running horizontally */}
                <rect x="30" y="270" width="940" height="75" fill="#334155" />
                <line x1="30" y1="307" x2="970" y2="307" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="14 10" />
                <text x="500" y="312" fill="#ffffff" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  JALAN UTAMA KAWASAN — ROW 24 METER RIGID PAVEMENT K-350
                </text>

                {/* Internal Access Roads (ROW 14m) */}
                <rect x="460" y="30" width="60" height="240" fill="#475569" />
                <rect x="710" y="30" width="55" height="240" fill="#475569" />
                <rect x="460" y="345" width="60" height="245" fill="#475569" />

                {/* GATEHOUSE (Pintu Gerbang Utama) */}
                <g
                  onClick={() => setSelectedZone(SITE_PLAN_ZONES[0])}
                  className="cursor-pointer group"
                >
                  <rect
                    x="35"
                    y="250"
                    width="120"
                    height="115"
                    rx="6"
                    fill={selectedZone.id === 'gate' ? '#f59e0b' : '#fef3c7'}
                    stroke="#d97706"
                    strokeWidth={selectedZone.id === 'gate' ? 3 : 1.5}
                    className="transition-colors"
                  />
                  <text x="95" y="305" fill={selectedZone.id === 'gate' ? '#0f172a' : '#92400e'} fontSize="12" fontWeight="bold" textAnchor="middle">
                    MAIN GATE
                  </text>
                  <text x="95" y="322" fill={selectedZone.id === 'gate' ? '#1e293b' : '#b45309'} fontSize="10" fontWeight="medium" textAnchor="middle">
                    Pos Satpam & CCTV
                  </text>
                </g>

                {/* BLOK A - PRIME LOGISTICS HUB */}
                <g
                  onClick={() => setSelectedZone(SITE_PLAN_ZONES[1])}
                  className="cursor-pointer group"
                >
                  <rect
                    x="180"
                    y="45"
                    width="260"
                    height="205"
                    rx="8"
                    fill={selectedZone.id === 'block-a' ? '#dbeafe' : '#eff6ff'}
                    stroke={selectedZone.id === 'block-a' ? '#1d4ed8' : '#3b82f6'}
                    strokeWidth={selectedZone.id === 'block-a' ? 3 : 1.5}
                    className="transition-colors"
                  />
                  <rect x="200" y="65" width="220" height="130" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
                  <text x="310" y="125" fill="#1e3a8a" fontSize="14" fontWeight="bold" textAnchor="middle">
                    BLOK A
                  </text>
                  <text x="310" y="145" fill="#1d4ed8" fontSize="11" fontWeight="semibold" textAnchor="middle">
                    Type Prime Logistics (1.200 m²)
                  </text>
                  <text x="310" y="170" fill="#2563eb" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    6 Unit · Loading Dock Direct
                  </text>
                  <rect x="200" y="200" width="220" height="40" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
                  <text x="310" y="224" fill="#334155" fontSize="10" fontWeight="medium" textAnchor="middle">
                    Apron Parkir Kontainer 40ft
                  </text>
                </g>

                {/* BLOK B - STANDARD DISTRIBUTION */}
                <g
                  onClick={() => setSelectedZone(SITE_PLAN_ZONES[2])}
                  className="cursor-pointer group"
                >
                  <rect
                    x="535"
                    y="45"
                    width="160"
                    height="205"
                    rx="8"
                    fill={selectedZone.id === 'block-b' ? '#d1fae5' : '#ecfdf5'}
                    stroke={selectedZone.id === 'block-b' ? '#047857' : '#10b981'}
                    strokeWidth={selectedZone.id === 'block-b' ? 3 : 1.5}
                    className="transition-colors"
                  />
                  <rect x="545" y="65" width="140" height="130" fill="#ffffff" stroke="#a7f3d0" strokeWidth="1.5" />
                  <text x="615" y="125" fill="#064e3b" fontSize="14" fontWeight="bold" textAnchor="middle">
                    BLOK B
                  </text>
                  <text x="615" y="145" fill="#047857" fontSize="11" fontWeight="semibold" textAnchor="middle">
                    Type Standard (720 m²)
                  </text>
                  <text x="615" y="170" fill="#059669" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    10 Unit Gudang Siap Pakai
                  </text>
                </g>

                {/* BLOK C - COMPACT FULFILLMENT */}
                <g
                  onClick={() => setSelectedZone(SITE_PLAN_ZONES[3])}
                  className="cursor-pointer group"
                >
                  <rect
                    x="780"
                    y="45"
                    width="180"
                    height="205"
                    rx="8"
                    fill={selectedZone.id === 'block-c' ? '#fef3c7' : '#fffbeb'}
                    stroke={selectedZone.id === 'block-c' ? '#b45309' : '#f59e0b'}
                    strokeWidth={selectedZone.id === 'block-c' ? 3 : 1.5}
                    className="transition-colors"
                  />
                  <rect x="795" y="65" width="150" height="130" fill="#ffffff" stroke="#fde68a" strokeWidth="1.5" />
                  <text x="870" y="125" fill="#78350f" fontSize="14" fontWeight="bold" textAnchor="middle">
                    BLOK C
                  </text>
                  <text x="870" y="145" fill="#b45309" fontSize="11" fontWeight="semibold" textAnchor="middle">
                    Type Compact (450 m²)
                  </text>
                  <text x="870" y="170" fill="#d97706" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    12 Unit Gudang Fleksibel
                  </text>
                </g>

                {/* BLOK D - KAVLING INDUSTRI MATANG */}
                <g
                  onClick={() => setSelectedZone(SITE_PLAN_ZONES[4])}
                  className="cursor-pointer group"
                >
                  <rect
                    x="180"
                    y="360"
                    width="440"
                    height="225"
                    rx="8"
                    fill={selectedZone.id === 'block-d' ? '#e0e7ff' : '#eef2ff'}
                    stroke={selectedZone.id === 'block-d' ? '#4338ca' : '#6366f1'}
                    strokeWidth={selectedZone.id === 'block-d' ? 3 : 1.5}
                    className="transition-colors"
                  />
                  <text x="400" y="460" fill="#312e81" fontSize="16" fontWeight="bold" textAnchor="middle">
                    BLOK D — KAVLING INDUSTRI MATANG (BUILD-TO-SUIT)
                  </text>
                  <text x="400" y="485" fill="#4338ca" fontSize="12" fontWeight="medium" textAnchor="middle">
                    Lahan Siap Bangun 2.500 m² s/d 10.000 m² untuk Pabrik Ringan & Mega Hub
                  </text>
                  <text x="400" y="510" fill="#4f46e5" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    ROW Depan 16m · IMB Industri Siap Terbit
                  </text>
                </g>

                {/* ESTATE OFFICE & TRUCK STAGING YARD */}
                <g
                  onClick={() => setSelectedZone(SITE_PLAN_ZONES[5])}
                  className="cursor-pointer group"
                >
                  <rect
                    x="650"
                    y="360"
                    width="310"
                    height="225"
                    rx="8"
                    fill={selectedZone.id === 'facility-zone' ? '#e2e8f0' : '#f1f5f9'}
                    stroke={selectedZone.id === 'facility-zone' ? '#475569' : '#94a3b8'}
                    strokeWidth={selectedZone.id === 'facility-zone' ? 3 : 1.5}
                    className="transition-colors"
                  />
                  <text x="805" y="460" fill="#0f172a" fontSize="13" fontWeight="bold" textAnchor="middle">
                    ESTATE OFFICE & LOGISTICS YARD
                  </text>
                  <text x="805" y="482" fill="#334155" fontSize="11" fontWeight="medium" textAnchor="middle">
                    Kantor Pengelola, Trafo PLN & Parkir Armada
                  </text>
                  <text x="805" y="505" fill="#64748b" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    Kapasitas Parkir 15 Truk Kontainer
                  </text>
                </g>
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 mt-4 px-1 gap-2 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                Blok A (Prime Logistics)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                Blok B (Standard Distribution)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                Blok C (Compact Fulfillment)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" />
                Blok D (Kavling Build-to-Suit)
              </span>
            </div>
          </div>

          {/* Right Column: Selected Zone Detail Inspector */}
          <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 mb-1">
                <Info className="w-3.5 h-3.5" />
                <span>INSPEKTOR KLASTER TERPILIH</span>
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                {selectedZone.name}
              </h3>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3">
              <div>
                <span className="text-xs text-slate-500 block">Karakteristik & Spesifikasi Klaster</span>
                <p className="text-sm font-semibold text-slate-900 font-mono mt-0.5">
                  {selectedZone.specs}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <span className="text-xs text-slate-500 block mb-1">Deskripsi Fungsional</span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedZone.description}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Fasilitas Koridor Terhubung:
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>Jalur drainase tertutup terhubung kolam retensi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>Penerangan Jalan Umum (PJU) LED 24 Jam</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>Jaringan hidran kebakaran mandiri per klaster</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onInquireZone(selectedZone.name)}
              className="w-full py-3 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Inquire Klaster Ini</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
