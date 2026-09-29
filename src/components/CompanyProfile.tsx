import React from 'react';
import { Building2, CheckCircle2, ShieldAlert, Award } from 'lucide-react';
import { ASSET_IMAGES } from '../data/warehouseData';

export const CompanyProfile: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Asset with Estate Overview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-md bg-white aspect-[4/3]">
              <img
                src={ASSET_IMAGES.aerial}
                alt="Masterplan Kawasan Pergudangan Wiraland Gudang"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-sm border border-slate-200 rounded shadow-sm">
                <p className="text-xs font-bold text-amber-600">Master-Planned Industrial Estate</p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Desain terpadu dengan zonasi logistik, drainase independen, dan pos sekuriti terpusat.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Introduction Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
                Tentang Wira Logistics Centre (WLC)
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight text-balance">
                Kawasan Pergudangan Modern 16 Hektar Terintegrasi di Jalur Arteri Logistik Sumatera Utara.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              <strong className="text-slate-950 font-semibold">Wira Logistics Centre (WLC)</strong> merupakan kawasan properti industrial dan pergudangan modern seluas <strong className="text-slate-950 font-semibold">16 Hektar</strong> yang dikembangkan oleh <strong className="text-slate-950 font-semibold">Wiraland Property Group</strong> di <strong className="text-slate-950 font-semibold">Jl. Raya Medan - Tanjung Morawa KM 21</strong>, Deli Serdang.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Dirancang dengan standar industri kelas atas, WLC mengusung inovasi <strong className="text-slate-950 font-semibold">Konsep 9-in-1</strong> yang mengakomodasi aneka ragam kebutuhan B2B—mulai dari gudang penyimpanan, bengkel perawatan, showroom, kantor mezzanine representatif, pusat distribusi kargo, hingga kavling industri siap bangun (Build-to-Suit). Didukung jalan utama <strong className="text-slate-950 font-semibold">ROW 24 Meter</strong> dan lokasi hanya 5 menit dari Gerbang Tol Kemiri, WLC menjamin efisiensi rantai pasok dan mobilitas armada 24 jam non-stop.
            </p>

            {/* Core Commitments Pillar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-950">Kepastian Hukum & SHGB Murni</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Sertifikat telah dipecah per kavling, siap proses AJB, dan berizin PBG Industri resmi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200/80 shadow-2xs">
                <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-950">Bebas Pungli & Kuli Liar</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Dikelola profesional di bawah Estate Management Wiraland dengan One Gate System 24 Jam.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200/80 shadow-2xs">
                <Building2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-950">Jalan ROW 24 Meter & Baja SNI</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Perkerasan jalan rigid beton untuk kontainer 40ft & struktur baja WF bentang bebas tiang.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200/80 shadow-2xs">
                <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-950">Skema Beli & Sewa Fleksibel</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Pilihan kepemilikan aset maupun sewa bulanan / tahunan negotiable untuk efisiensi modal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
