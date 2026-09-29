import React from 'react';
import { Shield, Camera, Compass, UserCheck, Flame, Droplet, Lightbulb, Coffee } from 'lucide-react';
import { ESTATE_FACILITIES } from '../data/warehouseData';

export const EstateFacilities: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Shield': return Shield;
      case 'Camera': return Camera;
      case 'Compass': return Compass;
      case 'UserCheck': return UserCheck;
      case 'Flame': return Flame;
      case 'Droplet': return Droplet;
      case 'Lightbulb': return Lightbulb;
      case 'Coffee': return Coffee;
      default: return Shield;
    }
  };

  return (
    <section id="fasilitas" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
            Infrastruktur Kawasan Industri
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight mt-2 text-balance">
            Fasilitas Komprehensif untuk Kelancaran Operasi Harian
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Dikelola secara terpusat oleh manajemen kawasan Wiraland guna memastikan lingkungan kerja yang aman, tertib, bebas hambatan eksternal, dan siap mendukung produktivitas rantai pasok Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ESTATE_FACILITIES.map((fac, idx) => {
            const Icon = getIcon(fac.iconName);
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-5 h-5 text-amber-600 group-hover:text-slate-950 transition-colors" />
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-2">
                    {fac.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {fac.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] text-slate-500 font-mono">
                  Standard Wiraland Estate
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
