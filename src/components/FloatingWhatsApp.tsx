import React, { useState } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultWaMessage =
    'Halo Wira Logistics Centre (Wiraland), saya ingin konsultasi ketersediaan unit gudang/kavling di KM 21 Medan - Tanjung Morawa dan jadwal survey lokasi.';
  const waUrl = `https://wa.me/6281263300500?text=${encodeURIComponent(defaultWaMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Tooltip badge on hover or initial state */}
      {showTooltip && (
        <div className="bg-white border border-slate-200 text-slate-900 text-xs py-2.5 px-3.5 rounded-lg shadow-xl max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-150 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-800 p-0.5 cursor-pointer"
            aria-label="Tutup tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-bold text-slate-950 pr-4">WhatsApp Sales WLC</p>
          <p className="text-[11px] text-slate-600 mt-0.5">Respon cepat dari Sales Executive Wiraland</p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white cursor-pointer"
        aria-label="Hubungi Sales Wira Logistics Centre via WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-slate-950 text-slate-950" />
      </a>
    </div>
  );
};
