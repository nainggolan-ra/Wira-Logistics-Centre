import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { WAREHOUSE_UNITS } from '../data/warehouseData';
import { WarehouseUnit } from '../types/warehouse';

interface ScheduleSurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetUnit?: WarehouseUnit | null;
}

export const ScheduleSurveyModal: React.FC<ScheduleSurveyModalProps> = ({
  isOpen,
  onClose,
  presetUnit,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedUnitId, setSelectedUnitId] = useState(
    presetUnit ? presetUnit.id : 'type-prime-logistics'
  );
  const [surveyDate, setSurveyDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Pagi (09.30 - 11.30 WIB)');
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    if (presetUnit) {
      setSelectedUnitId(presetUnit.id);
    }
  }, [presetUnit]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !surveyDate) return;

    const unit = WAREHOUSE_UNITS.find((u) => u.id === selectedUnitId);
    const unitTitle = unit ? unit.name : 'Unit Pergudangan';

    const waMsg = `Halo Tim Wira Logistics Centre (Wiraland),%0A%0ASaya ingin mengonfirmasi jadwal survey lokasi fisik:%0A- Nama: ${encodeURIComponent(name)}%0A- Perusahaan: ${encodeURIComponent(company)}%0A- No. HP: ${encodeURIComponent(phone)}%0A- Unit Dituju: ${encodeURIComponent(unitTitle)}%0A- Tanggal Survey: ${encodeURIComponent(surveyDate)}%0A- Sesi Waktu: ${encodeURIComponent(timeSlot)}%0A%0AMohon disiapkan tim pendamping lapangan di KM 21. Terima kasih.`;

    window.open(`https://wa.me/6281263300500?text=${waMsg}`, '_blank', 'noopener,noreferrer');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div
        className="relative bg-white border border-slate-200 w-full max-w-lg rounded-xl shadow-2xl overflow-hidden text-slate-900"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-500" />
            <h3 className="text-base sm:text-lg font-bold text-slate-950">
              Jadwalkan Survey Lokasi Fisik WLC
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-950 rounded-md cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-2xs">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-950">Jadwal Survey Terdaftar</h4>
              <p className="text-xs text-slate-600">
                Pesan konfirmasi telah dikirim via WhatsApp ke tim Estate Management Wira Logistics Centre. Tim kami akan menyambut Anda di gerbang utama KM 21 pada tanggal yang dipilih.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-500 rounded-md hover:bg-amber-400"
              >
                Selesai
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Titik Kumpul: Pos Estate Management Main Gate Wira Logistics Centre (Jl. Raya Medan - Tanjung Morawa KM 21). Didampingi Marketing & Senior Engineer.
                </span>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Nama Peninjau *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Lengkap Anda"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-xs sm:text-sm text-slate-900 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    Perusahaan *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="PT / CV..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-xs sm:text-sm text-slate-900 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    No. WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0812xxxxxxxx"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-xs sm:text-sm text-slate-900 focus:border-amber-500 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Unit yang Ingin Dilihat *
                </label>
                <select
                  value={selectedUnitId}
                  onChange={(e) => setSelectedUnitId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-xs sm:text-sm text-slate-900 focus:border-amber-500 focus:outline-none"
                >
                  {WAREHOUSE_UNITS.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.name} (LB: {u.buildingArea} m²)
                    </option>
                  ))}
                  <option value="all-clusters">Seluruh Kawasan & Masterplan</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    Pilih Tanggal *
                  </label>
                  <input
                    type="date"
                    required
                    value={surveyDate}
                    onChange={(e) => setSurveyDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-xs sm:text-sm text-slate-900 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    Sesi Waktu *
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-xs sm:text-sm text-slate-900 focus:border-amber-500 focus:outline-none"
                  >
                    <option value="Pagi (09.30 - 11.30 WIB)">Pagi (09.30 - 11.30 WIB)</option>
                    <option value="Siang (13.30 - 15.30 WIB)">Siang (13.30 - 15.30 WIB)</option>
                    <option value="Sore (15.30 - 17.30 WIB)">Sore (15.30 - 17.30 WIB)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs sm:text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2"
              >
                <span>Konfirmasi Jadwal Survey & Buka WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
