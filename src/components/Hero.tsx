import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Maximize2, FileCheck2, Calendar } from 'lucide-react';
import { ASSET_IMAGES } from '../data/warehouseData';

interface HeroProps {
  onExploreCatalog: () => void;
  onScheduleSurvey: () => void;
  onInquireNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCatalog,
  onScheduleSurvey,
  onInquireNow,
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white border-b border-slate-200">
      {/* Background Image Carrier with Measured Crisp Light Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.hero}
          alt="Modern Industrial Logistics Warehouse Wiraland Gudang"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured light overlay scrim for high contrast typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/60 sm:to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />
        {/* Subtle engineering grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          {/* Unboxed editorial category indicator */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-amber-600 tracking-wider uppercase mb-4">
            <span className="bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded text-[11px] font-extrabold tracking-wide">
              Kawasan 16 Hektar
            </span>
            <span>Jl. Raya Medan - Tanjung Morawa KM 21</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-600 font-semibold">Wiraland Property Group</span>
          </div>

          {/* Headline - Primary Focal Point */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15] mb-6 text-balance">
            WIRA LOGISTICS CENTRE Pusat Pergudangan & Logistik Modern
          </h1>

          {/* Value proposition subtext */}
          <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed mb-8 max-w-2xl">
            Solusi properti pergudangan dan kavling industri siap bangun di koridor logistik paling strategis Sumatera Utara. Didukung jalan utama <strong className="text-slate-950 font-semibold">ROW 24 Meter</strong>, akses <strong className="text-slate-950 font-semibold">5 Menit Tol Kemiri</strong>, konstruksi baja heavy-duty, dan opsi fleksibel <strong className="text-slate-950 font-semibold">Beli maupun Sewa</strong>.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12">
            <button
              onClick={onExploreCatalog}
              className="px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors shadow-sm flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>Lihat Unit & Kavling</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onScheduleSurvey}
              className="px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs rounded-md transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>Jadwalkan Survey Lokasi</span>
            </button>

            <button
              onClick={onInquireNow}
              className="px-5 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/70 rounded-md transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>Hubungi Marketing</span>
            </button>
          </div>

          {/* Quantitative Rigor: Key Engineering Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-200">
            <div className="min-w-0 space-y-1 bg-white/85 backdrop-blur-xs p-3 sm:p-3.5 rounded-lg border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <Truck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="truncate">Akses Utama</span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-slate-950 font-mono tabular-nums leading-tight">
                ROW 24 Meter
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 truncate">Rigid Kontainer 40ft</p>
            </div>

            <div className="min-w-0 space-y-1 bg-white/85 backdrop-blur-xs p-3 sm:p-3.5 rounded-lg border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <Maximize2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="truncate">Luas Kawasan</span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-slate-950 font-mono tabular-nums leading-tight">
                16 Hektar
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 truncate">Gudang & Kavling</p>
            </div>

            <div className="min-w-0 space-y-1 bg-white/85 backdrop-blur-xs p-3 sm:p-3.5 rounded-lg border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="truncate">Akses Jalan Tol</span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-slate-950 font-mono tabular-nums leading-tight">
                5 Menit Tol
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 truncate">Gerbang Tol Kemiri</p>
            </div>

            <div className="min-w-0 space-y-1 bg-white/85 backdrop-blur-xs p-3 sm:p-3.5 rounded-lg border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <FileCheck2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="truncate">Konsep & Legal</span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-slate-950 font-mono tabular-nums leading-tight">
                Konsep 9-in-1
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 truncate">SHGB Murni & PBG</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
