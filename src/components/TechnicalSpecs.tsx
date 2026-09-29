import React from 'react';
import { Building2, Layers, Maximize2, Truck, Navigation, Zap, Sun, ShieldCheck } from 'lucide-react';
import { TECHNICAL_SPECIFICATIONS } from '../data/warehouseData';

export const TechnicalSpecs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2': return Building2;
      case 'Layers': return Layers;
      case 'Maximize2': return Maximize2;
      case 'Truck': return Truck;
      case 'Navigation': return Navigation;
      case 'Zap': return Zap;
      case 'Sun': return Sun;
      case 'ShieldCheck': return ShieldCheck;
      default: return Building2;
    }
  };

  return (
    <section id="spesifikasi" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
            Spesifikasi Teknik & Rekayasa Bangunan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight mt-2 text-balance">
            Standar Konstruksi Presisi untuk Keamanan & Beban Operasional Tinggi
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Informasi teknis disajikan secara terperinci tanpa klaim berlebihan. Seluruh struktur mengacu pada standar SNI guna menjamin ketahanan jangka panjang bagi kegiatan industri dan logistik.
          </p>
        </div>

        {/* 8-parameter structured grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNICAL_SPECIFICATIONS.map((spec, index) => {
            const Icon = getIcon(spec.iconName);
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-medium text-slate-500">
                      {spec.category}
                    </span>
                    <div className="w-8 h-8 rounded bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-slate-800">
                    {spec.title}
                  </h3>

                  <p className="text-lg font-bold text-slate-950 font-mono mt-1 mb-3">
                    {spec.value}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {spec.detail}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Sertifikasi Fisik</span>
                  <span className="text-slate-800 font-medium">Terverifikasi QA/QC</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Technical Assurance Note */}
        <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-950">Membutuhkan Modifikasi Spesifikasi Khusus?</h4>
            <p className="text-xs text-slate-600">
              Kami memfasilitasi penyesuaian daya listrik trafo hingga 197 kVA, instalasi insulasi cold storage, serta dermaga loading dock hydraulic leveler khusus.
            </p>
          </div>
          <a
            href="#inquiry"
            className="px-5 py-2.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shadow-xs"
          >
            Konsultasi Engineering
          </a>
        </div>
      </div>
    </section>
  );
};
