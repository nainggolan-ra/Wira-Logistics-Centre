import React, { useState } from 'react';
import { 
  Warehouse, 
  Wrench, 
  Store, 
  Briefcase, 
  Cpu, 
  ShoppingBag, 
  Truck, 
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { NINE_IN_ONE_CONCEPTS } from '../data/warehouseData';
import { NineInOneConcept } from '../types/warehouse';

interface NineInOneSectionProps {
  onInquireConcept?: (concept: NineInOneConcept) => void;
}

export const NineInOneSection: React.FC<NineInOneSectionProps> = ({ onInquireConcept }) => {
  const [activeConceptId, setActiveConceptId] = useState<string>('01');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Warehouse':
        return <Warehouse className="w-5 h-5 text-amber-500" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-500" />;
      case 'Store':
        return <Store className="w-5 h-5 text-amber-500" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-amber-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-500" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-amber-500" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-amber-500" />;
      default:
        return <Layers className="w-5 h-5 text-amber-500" />;
    }
  };

  const activeConcept = NINE_IN_ONE_CONCEPTS.find((c) => c.id === activeConceptId) || NINE_IN_ONE_CONCEPTS[0];

  return (
    <section id="konsep-9in1" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-800 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Keunggulan Utama WLC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight text-balance">
            Fleksibilitas Tanpa Batas dengan Konsep 9-in-1
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed text-balance">
            Satu unit multifungsi yang dapat disesuaikan secara adaptif untuk 9 fungsi operasional bisnis sekaligus, menghemat biaya investasi dan meningkatkan efisiensi operasional harian Anda.
          </p>
        </div>

        {/* 9-in-1 Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-10">
          {NINE_IN_ONE_CONCEPTS.map((concept) => {
            const isSelected = activeConceptId === concept.id;
            return (
              <div
                key={concept.id}
                onClick={() => setActiveConceptId(concept.id)}
                className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer text-left relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-500/10 border-amber-400 shadow-sm ring-1 ring-amber-400'
                    : 'bg-slate-50/70 hover:bg-slate-100/70 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {concept.id}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {concept.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 bg-white rounded-md border border-slate-200 shadow-2xs">
                      {getIcon(concept.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-950 leading-snug">
                        {concept.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-500">
                        {concept.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mt-2.5">
                    {concept.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-amber-800' : 'text-slate-500'}>
                    {isSelected ? 'Sedang Dipilih' : 'Klik untuk Detail'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-amber-700' : 'text-slate-400'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Concept Deep Dive Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-amber-500 text-slate-950 font-black text-xs rounded">
                  FUNGSI #{activeConcept.id}
                </span>
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  {activeConcept.subtitle}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Bagaimana WLC Mengakomodasi Kebutuhan <span className="text-amber-400">{activeConcept.title}</span>?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                {activeConcept.description} Setiap unit di Wira Logistics Centre dibangun dengan struktur baja WF tanpa tiang tengah, lantai tahan beban 3.5 - 5 ton/m², dan jalan masuk lebar ROW 24m yang sepenuhnya kompatibel dengan konfigurasi fungsi ini.
              </p>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Dukungan Listrik 3-Phase</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>ROW Jalan 24 Meter Bebas Hambatan</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Legalitas SHGB & PBG Resmi</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
              <a
                href="#katalog"
                className="w-full sm:w-auto px-5 py-3 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors text-center shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Lihat Unit Cocok untuk {activeConcept.title.split('/')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#inquiry"
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors text-center cursor-pointer"
              >
                Konsultasikan Kebutuhan Unit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
