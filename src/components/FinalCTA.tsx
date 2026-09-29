import React from 'react';
import { ArrowRight, Calendar, PhoneCall, ShieldCheck } from 'lucide-react';
import { ASSET_IMAGES } from '../data/warehouseData';

interface FinalCTAProps {
  onScheduleSurvey: () => void;
  onInquireNow: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onScheduleSurvey,
  onInquireNow,
}) => {
  return (
    <section className="relative py-24 bg-white overflow-hidden border-b border-slate-200">
      {/* Background Graphic with Soft Light Scrim */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src={ASSET_IMAGES.interior}
          alt="Interior Highbay Wiraland Gudang"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold text-amber-600 tracking-wider uppercase inline-flex items-center gap-1.5 mb-4 bg-amber-50 border border-amber-200 px-3 py-1 rounded-md">
          <ShieldCheck className="w-4 h-4 text-amber-600" />
          <span>Solusi Rantai Pasok Terpercaya</span>
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight text-balance mb-6">
          Kembangkan Bisnis Anda di Wira Logistics Centre.
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Diskusikan kebutuhan luas lantai, konsep 9-in-1, kapasitas racking, kavling industri matang, dan skema sewa maupun beli bersama tim konsultan komersial Wiraland.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onInquireNow}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Hubungi Sales Representative</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onScheduleSurvey}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <Calendar className="w-4 h-4 text-amber-500" />
            <span>Jadwalkan Survey Lokasi Fisik</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="text-slate-950 font-bold block font-mono text-sm">100% SHGB Murni</span>
            <span className="text-slate-500">Legalitas Clear & Siap AJB</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="text-slate-950 font-bold block font-mono text-sm">ROW 24m Rigid</span>
            <span className="text-slate-500">Akses Kontainer 40 ft</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="text-slate-950 font-bold block font-mono text-sm">Kawasan 16 Ha</span>
            <span className="text-slate-500">KM 21 Medan - Tj. Morawa</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="text-slate-950 font-bold block font-mono text-sm">Resmi Wiraland</span>
            <span className="text-slate-500">Bebas Pungli & Kuli Liar</span>
          </div>
        </div>
      </div>
    </section>
  );
};
