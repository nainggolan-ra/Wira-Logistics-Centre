import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Compass } from 'lucide-react';
import { STRATEGIC_LOCATIONS } from '../data/warehouseData';

export const LocationConnectivity: React.FC = () => {
  return (
    <section id="lokasi" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
              Aksesibilitas & Konektivitas Prima
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight mt-2 text-balance">
              Lokasi Strategis KM 21: Terhubung Langsung ke Tol & Simpul Logistik
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Terletak di koridor industri utama <strong className="text-slate-950 font-semibold">Jl. Raya Medan - Tanjung Morawa KM 21</strong>, hanya 5 menit dari Gerbang Tol Kemiri / Lubuk Pakam dan 10 menit dari Gerbang Tol Tanjung Morawa. Bebas pembatasan jam operasional truk perkotaan.
            </p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Road Network Schematic */}
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-bold text-slate-950">Peta Skematik Konektivitas Logistik WLC</span>
              </div>
              <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Akses 24 Jam Non-Stop
              </span>
            </div>

            {/* Custom SVG Logistics Network Map (Clean Light Blueprint) */}
            <div className="relative rounded-lg overflow-hidden bg-slate-50 border border-slate-200 p-4">
              <svg viewBox="0 0 700 380" className="w-full h-auto text-slate-600" fill="none">
                {/* Background grid */}
                <pattern id="grid-light" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </pattern>
                <rect width="700" height="380" fill="url(#grid-light)" />

                {/* Major Highway / Toll Road (Gold Thick Route) */}
                <path d="M 40 190 Q 250 170 380 180 T 660 120" stroke="#f59e0b" strokeWidth="7" strokeLinecap="round" />
                <path d="M 40 190 Q 250 170 380 180 T 660 120" stroke="#ffffff" strokeWidth="2" strokeDasharray="8 6" />

                {/* Arterial Connecting Road */}
                <path d="M 380 180 L 380 300 L 520 300" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
                
                {/* Secondary Arteri to Port */}
                <path d="M 660 120 L 640 40" stroke="#0284c7" strokeWidth="3" strokeDasharray="5 3" />

                {/* Route to Airport */}
                <path d="M 40 190 L 90 90" stroke="#16a34a" strokeWidth="3" strokeDasharray="5 3" />

                {/* Node: Wira Logistics Centre (The Core Hub) */}
                <circle cx="380" cy="300" r="16" fill="#f59e0b" stroke="#ffffff" strokeWidth="3" />
                <circle cx="380" cy="300" r="28" fill="#f59e0b" opacity="0.25" />
                <rect x="270" y="325" width="220" height="44" rx="6" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
                <text x="380" y="342" fill="#0f172a" fontSize="12" fontWeight="bold" textAnchor="middle">WIRA LOGISTICS CENTRE</text>
                <text x="380" y="358" fill="#d97706" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">KM 21 MEDAN - TJ. MORAWA</text>

                {/* Node: Gerbang Tol Kemiri & Tanjung Morawa */}
                <circle cx="380" cy="180" r="10" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
                <rect x="270" y="132" width="220" height="38" rx="4" fill="#ffffff" stroke="#0284c7" strokeWidth="1.5" />
                <text x="380" y="148" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">Tol Kemiri & Tj. Morawa</text>
                <text x="380" y="162" fill="#0284c7" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">5 - 10 Menit ke Tol Trans-Sumatera</text>

                {/* Node: Pelabuhan Peti Kemas Belawan */}
                <circle cx="640" cy="40" r="8" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
                <rect x="500" y="24" width="150" height="32" rx="4" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
                <text x="575" y="44" fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">Pelabuhan Belawan (30m)</text>

                {/* Node: Bandara Kualanamu */}
                <circle cx="90" cy="90" r="8" fill="#16a34a" stroke="#ffffff" strokeWidth="2" />
                <rect x="25" y="54" width="145" height="32" rx="4" fill="#ffffff" stroke="#16a34a" strokeWidth="1.5" />
                <text x="97" y="74" fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">Bandara Kualanamu (15m)</text>
              </svg>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-600 px-1 pt-2">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                Jalur Tol Bebas Hambatan
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-600 inline-block" />
                Jalur Arteri ROW Lebar
              </span>
            </div>
          </div>

          {/* Right Column: Distance & Time Breakdown Cards */}
          <div className="lg:col-span-5 space-y-4">
            {STRATEGIC_LOCATIONS.map((loc, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono text-amber-700 font-bold block mb-1">
                      {loc.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-950">
                      {loc.destination}
                    </h3>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold text-amber-600 font-mono block">
                      {loc.travelTimeMin}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {loc.distanceKm}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mt-2.5 pt-2.5 border-t border-slate-100 leading-relaxed">
                  {loc.routeHighlight}
                </p>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium">Lokasi telah terbukti aman dari riwayat banjir regional 50 tahunan.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
