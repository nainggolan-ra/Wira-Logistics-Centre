import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Profile (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-slate-950">
              <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center font-black text-slate-950 text-xs">
                WLC
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-black tracking-tight text-slate-950">
                  WIRA <span className="text-amber-500 font-extrabold">LOGISTICS</span> CENTRE
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                  WIRALAND PROPERTY GROUP
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed pr-6">
              Wira Logistics Centre (WLC) adalah kawasan pergudangan dan logistik modern seluas 16 Hektar di Jl. Raya Medan - Tanjung Morawa KM 21. Mengusung konsep 9-in-1 dengan infrastruktur jalan utama ROW 24 meter, One Gate System 24/7, dan kepastian legalitas SHGB Murni untuk mendukung pertumbuhan bisnis dan distribusi Anda.
            </p>

            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              PENGEMBANG: PT. BIMASAKTI MAHAWIRA / WIRALAND PROPERTY GROUP
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wider font-mono">
              Navigasi Properti
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#tentang" className="hover:text-amber-600 transition-colors">Tentang WLC</a>
              </li>
              <li>
                <a href="#konsep-9in1" className="hover:text-amber-600 transition-colors">Konsep 9-in-1</a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-amber-600 transition-colors">Katalog Unit Gudang</a>
              </li>
              <li>
                <a href="#spesifikasi" className="hover:text-amber-600 transition-colors">Spesifikasi Konstruksi</a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-amber-600 transition-colors">Akses Tol KM 21</a>
              </li>
              <li>
                <a href="#masterplan" className="hover:text-amber-600 transition-colors">Master Plan 16 Ha</a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-amber-600 transition-colors">Fasilitas Kawasan</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-600 transition-colors">FAQ & Tanya Jawab</a>
              </li>
            </ul>
          </div>

          {/* Warehouse Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wider font-mono">
              Pilihan Unit & Kavling
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#katalog" className="hover:text-amber-600 transition-colors">Prime Logistics Hub (1.200 m²)</a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-amber-600 transition-colors">Standard Distribution (720 m²)</a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-amber-600 transition-colors">Compact 9-in-1 (12x34m)</a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-amber-600 transition-colors">Kavling Industri (450m² - 6.000m²)</a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-amber-600 transition-colors">Skema Beli & Jual SHGB Murni</a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-amber-600 transition-colors">Sewa Fleksibel Tahunan/Bulanan</a>
              </li>
            </ul>
          </div>

          {/* Direct Office & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wider font-mono">
              Lokasi & Kontak Resmi
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Lokasi Proyek:</strong> Jl. Raya Medan - Tanjung Morawa KM 21, Deli Serdang, Sumut
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Kantor Pusat:</strong> Jl. T. Amir Hamzah No. 1A, Helvetia Timur, Medan 20114
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-mono text-slate-800 font-semibold">+62 812-6330-0500</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-mono text-slate-800 font-semibold">(061) 80025888</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>customercare@wiraland.com</span>
              </li>
              <li className="pt-1 text-[11px] text-slate-500">
                Layanan Sales & Survey: Senin - Sabtu (08.30 - 18.00 WIB)
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Wira Logistics Centre by Wiraland Property Group. Seluruh Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-slate-800 transition-colors">Kebijakan Privasi</a>
            <a href="#faq" className="hover:text-slate-800 transition-colors">Syarat & Ketentuan</a>
            <a href="#tentang" className="hover:text-slate-800 transition-colors">Legalitas Properti</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
