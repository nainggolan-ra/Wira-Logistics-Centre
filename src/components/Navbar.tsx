import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, Calendar, MessageSquare, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onScheduleSurvey: () => void;
  onInquireNow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScheduleSurvey, onInquireNow }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Primary navigation items for desktop
  const desktopLinks = [
    { label: 'Tentang WLC', href: '#tentang' },
    { label: 'Konsep 9-in-1', href: '#konsep-9in1' },
    { label: 'Katalog Unit', href: '#katalog' },
    { label: 'Spesifikasi', href: '#spesifikasi' },
    { label: 'Lokasi KM 21', href: '#lokasi' },
    { label: 'Master Plan', href: '#masterplan' },
    { label: 'Fasilitas', href: '#fasilitas' },
  ];

  // Comprehensive navigation items for mobile/tablet drawer
  const allNavLinks = [
    { label: 'Tentang WLC', href: '#tentang', desc: 'Profil kawasan 16 Ha & pengembang Wiraland' },
    { label: 'Konsep 9-in-1', href: '#konsep-9in1', desc: 'Fleksibilitas fungsi gudang, workshop & kantor' },
    { label: 'Katalog Unit', href: '#katalog', desc: 'Tipe Prime, Standard, Compact & Kavling' },
    { label: 'Spesifikasi Teknik', href: '#spesifikasi', desc: 'Konstruksi baja WF, lantai K-350 & ceiling 9m' },
    { label: 'Kalkulator Ruang', href: '#kalkulator', desc: 'Estimasi kapasitas pallet & luas lantai' },
    { label: 'Lokasi & Akses Tol', href: '#lokasi', desc: '5 Menit Tol Kemiri KM 21 Medan - Tj. Morawa' },
    { label: 'Site Master Plan', href: '#masterplan', desc: 'Denah tata letak klaster & ROW 24m' },
    { label: 'Fasilitas Kawasan', href: '#fasilitas', desc: 'One Gate, CCTV 24 Jam & bebas pungli' },
    { label: 'Tabel Komparasi', href: '#komparasi', desc: 'Bandingkan dimensi dan spesifikasi unit' },
    { label: 'FAQ', href: '#faq', desc: 'Pertanyaan seputar legalitas, sewa & beli' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 shadow-sm'
          : 'bg-white/90 backdrop-blur-md py-3.5 border-b border-slate-100 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark with WLC Badge */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 text-slate-900 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded shrink-0"
            aria-label="Wira Logistics Centre Beranda"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-amber-500 flex items-center justify-center font-black text-slate-950 tracking-tighter text-xs sm:text-sm shadow-xs group-hover:bg-amber-400 transition-colors shrink-0">
              WLC
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm sm:text-base font-black tracking-tight text-slate-950 flex items-center gap-1">
                WIRA <span className="text-amber-500 font-black">LOGISTICS</span> CENTRE
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-slate-500 uppercase mt-0.5">
                by WIRALAND PROPERTY GROUP
              </span>
            </div>
          </a>

          {/* Zone 2: Desktop Navigation Links (Clean & Well-Spaced) */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 text-xs 2xl:text-sm font-semibold text-slate-700">
            {desktopLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-600 transition-colors py-1 whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Responsive Breakpoints) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Quick Contact Button */}
            <button
              onClick={onScheduleSurvey}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>Jadwal Survey</span>
            </button>

            {/* Primary CTA: Hubungi Sales */}
            <button
              onClick={onInquireNow}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              <span>Hubungi Sales</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Call / WA Quick Action */}
            <a
              href="https://wa.me/6281263300500"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-2.5 py-1.5 text-xs font-bold text-slate-950 bg-amber-500 rounded flex items-center gap-1 shadow-2xs"
              aria-label="WhatsApp Sales"
            >
              <Phone className="w-3 h-3" />
              <span>Sales</span>
            </a>

            {/* Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Full Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[57px] sm:top-[65px] bottom-0 bg-slate-950/40 backdrop-blur-xs z-50 animate-in fade-in duration-150">
          <div className="bg-white border-b border-slate-200 max-h-[85vh] overflow-y-auto px-4 py-5 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
                  Menu Kawasan WLC
                </span>
                <span className="text-[11px] text-slate-500">
                  Jl. Raya KM 21 Medan - Tj. Morawa
                </span>
              </div>

              {/* Navigation Grid for Tablet/Mobile */}
              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                {allNavLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200"
                  >
                    <div>
                      <span className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors block">
                        {link.label}
                      </span>
                      <span className="text-[11px] text-slate-500 block leading-tight">
                        {link.desc}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors shrink-0 ml-2" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-4 mt-4 border-t border-slate-200 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onScheduleSurvey();
                  }}
                  className="w-full py-2.5 text-xs font-semibold text-slate-800 border border-slate-300 bg-slate-50 hover:bg-slate-100 rounded-md text-center flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span>Jadwal Survey</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onInquireNow();
                  }}
                  className="w-full py-2.5 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md text-center flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Minta Penawaran</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-mono font-semibold text-slate-900">+62 812-6330-0500</span>
                </div>
                <a
                  href="https://wa.me/6281263300500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-bold hover:underline flex items-center gap-1 text-[11px]"
                >
                  <MessageSquare className="w-3 h-3 text-emerald-600" />
                  <span>Chat WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
