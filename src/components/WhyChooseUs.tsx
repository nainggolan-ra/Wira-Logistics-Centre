import React from 'react';
import { MapPin, Truck, Wrench, Zap, SlidersHorizontal } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Lokasi Strategis KM 21 Medan - Tanjung Morawa',
      description: 'Hanya 5 menit ke Gerbang Tol Kemiri dan 10 menit ke Gerbang Tol Tanjung Morawa. Menghubungkan langsung rantai logistik ke Bandara Kualanamu dan Pelabuhan Peti Kemas Belawan tanpa terkena pembatasan jam kendaraan perkotaan.',
      icon: MapPin,
      proof: '5 Menit ke Gerbang Tol Kemiri'
    },
    {
      number: '02',
      title: 'Jalan Utama ROW 24 Meter Bebas Manuver',
      description: 'Infrastruktur jalan rigid beton terlebar di kelasnya dengan ROW 24 meter. Radius tikungan dihitung presisi untuk kelancaran manuver trailer kontainer 40 ft dan truk tronton bermuatan penuh tanpa hambatan.',
      icon: Truck,
      proof: 'ROW 24m Rigid Pavement'
    },
    {
      number: '03',
      title: 'Konsep Inovatif 9-in-1 Multifungsi',
      description: 'Fleksibilitas satu atap untuk gudang, workshop armada, showroom produk, studio kantor mezzanine, home industry, ritel, hingga depo transit. Solusi efisiensi modal dan penyatuan operasional bisnis Anda.',
      icon: SlidersHorizontal,
      proof: '9-in-1 Versatile Concept'
    },
    {
      number: '04',
      title: 'Spesifikasi Konstruksi Heavy-Duty & Efisien',
      description: 'Lantai cor bertulang tebal dengan Floor Hardener tahan beban 3.5 - 5.0 ton/m². Clear ceiling hingga 9 meter untuk penataan 5 tingkat racking, plus atap skylight peredam panas hemat energi listrik.',
      icon: Wrench,
      proof: 'Floor Load 3.5 - 5.0 Ton/m²'
    },
    {
      number: '05',
      title: 'Estate Management Resmi & 100% Bebas Pungli',
      description: 'Keamanan 24 jam dengan One Gate System, CCTV pengawasan kawasan terpadu, dan pengelolaan profesional oleh Wiraland Property Group yang menjamin 100% bebas dari premanisme dan kuli bongkar liar.',
      icon: Zap,
      proof: 'Bebas Pungli & Kuli Liar'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
            Keunggulan Kawasan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight mt-2 text-balance">
            Mengapa Pelaku Bisnis Memilih Wira Logistics Centre
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Setiap parameter kawasan dikembangkan untuk menjawab kebutuhan riil korporasi: aksesibilitas armada kontainer yang lancar, keamanan total, fleksibilitas pemanfaatan ruang, dan efisiensi biaya logistik.
          </p>
        </div>

        {/* Asymmetric 5-card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            const isWide = index === 0 || index === 3;
            return (
              <div
                key={item.number}
                className={`p-6 sm:p-8 rounded-xl bg-white border border-slate-200 hover:border-amber-500/80 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group ${
                  isWide ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100/70 border border-amber-200 px-2.5 py-1 rounded">
                      {item.number}.
                    </span>
                    <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5 text-amber-600 group-hover:text-slate-950 transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Parameter Verifikasi</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.proof}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
