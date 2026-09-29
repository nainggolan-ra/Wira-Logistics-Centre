import React, { useState } from 'react';
import { Eye, X, ZoomIn } from 'lucide-react';
import { ASSET_IMAGES } from '../data/warehouseData';

export const WarehouseGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'exterior' | 'interior' | 'dock' | 'aerial'>('all');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; category: string } | null>(null);

  const galleryItems = [
    {
      id: 'g1',
      title: 'Fasade Eksterior Gudang Modern & Apron Aspal Rigid',
      category: 'exterior',
      categoryLabel: 'Eksterior',
      image: ASSET_IMAGES.hero,
      aspect: 'aspect-[16/9]'
    },
    {
      id: 'g2',
      title: 'Interior High-Bay: Clear Ceiling 9 Meter & Lantai Floor Hardener',
      category: 'interior',
      categoryLabel: 'Interior Racking',
      image: ASSET_IMAGES.interior,
      aspect: 'aspect-[4/3]'
    },
    {
      id: 'g3',
      title: 'Dermaga Bongkar Muat (Loading Dock) Kontainer 40 ft',
      category: 'dock',
      categoryLabel: 'Loading Dock',
      image: ASSET_IMAGES.loadingDock,
      aspect: 'aspect-[4/3]'
    },
    {
      id: 'g4',
      title: 'Tampak Udara Masterplan Klaster & Jalan Utama ROW 16 Meter',
      category: 'aerial',
      categoryLabel: 'Aerial Masterplan',
      image: ASSET_IMAGES.aerial,
      aspect: 'aspect-[16/9]'
    }
  ];

  const filtered = galleryItems.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
              Dokumentasi Visual Kawasan
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight mt-2 text-balance">
              Galeri Properti Fisik & Standar Lapangan
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Foto riil dari fasilitas, tampak bangunan, area manuver armada, dan ruang penyimpanan interior Wiraland Gudang.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-lg overflow-x-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Semua Foto
            </button>
            <button
              onClick={() => setActiveTab('exterior')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'exterior'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Eksterior
            </button>
            <button
              onClick={() => setActiveTab('interior')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'interior'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Interior
            </button>
            <button
              onClick={() => setActiveTab('dock')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'dock'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Loading Dock
            </button>
            <button
              onClick={() => setActiveTab('aerial')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'aerial'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Aerial View
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage({ src: item.image, title: item.title, category: item.categoryLabel })}
              className="group relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 hover:border-slate-300 hover:shadow-xl cursor-pointer aspect-video transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 left-4">
                <span className="text-xs font-mono font-bold text-slate-900 bg-white/95 backdrop-blur-sm border border-slate-200 px-2.5 py-1 rounded shadow-xs">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors drop-shadow-xs">
                    {item.title}
                  </h4>
                  <span className="text-xs text-slate-300 mt-1 block">Klik untuk memperbesar</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-900 shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-xs">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50">
                <span className="text-xs font-mono text-amber-700 font-bold">{lightboxImage.category}</span>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-1.5 text-slate-500 hover:text-slate-950 rounded-md cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-3 bg-slate-900 max-h-[75vh] flex items-center justify-center">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="max-h-[70vh] w-auto object-contain rounded"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 bg-white border-t border-slate-200">
                <p className="text-sm font-bold text-slate-950">{lightboxImage.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">Dokumentasi resmi infrastruktur Wiraland Gudang.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
