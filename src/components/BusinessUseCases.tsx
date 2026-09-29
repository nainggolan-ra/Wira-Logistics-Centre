import React from 'react';
import { Package, Truck, ShoppingCart, Snowflake, Cpu, Wrench } from 'lucide-react';
import { BUSINESS_USE_CASES } from '../data/warehouseData';

export const BusinessUseCases: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return Truck;
      case 1: return ShoppingCart;
      case 2: return Package;
      case 3: return Snowflake;
      case 4: return Cpu;
      case 5: return Wrench;
      default: return Package;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
            Sektor Usaha & Industri Sasaran
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight mt-2 text-balance">
            Kesesuaian Penggunaan Berdasarkan Karakteristik Properti
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Setiap sektor bisnis memerlukan parameter teknis spesifik. Fasilitas Wira Logistics Centre telah dirancang dan diuji kelayakannya untuk menunjang aktivitas pergudangan intensif.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_USE_CASES.map((useCase, index) => {
            const Icon = getIcon(index);
            return (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-md bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5 text-amber-600 group-hover:text-slate-950 transition-colors" />
                    </div>
                    <span className="text-xs font-mono font-medium text-amber-800 bg-amber-100/70 border border-amber-200 px-2 py-0.5 rounded">
                      Ideal Untuk
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-950 mb-2">
                    {useCase.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Kelebihan Operasional</span>
                  <span className="text-xs font-bold text-slate-900 font-mono">
                    {useCase.stats}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
