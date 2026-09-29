import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Shield, Clock } from 'lucide-react';
import { WAREHOUSE_UNITS } from '../data/warehouseData';
import { WarehouseUnit } from '../types/warehouse';

interface LeadInquirySectionProps {
  selectedUnitForInquiry?: WarehouseUnit | null;
}

export const LeadInquirySection: React.FC<LeadInquirySectionProps> = ({
  selectedUnitForInquiry,
}) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [phoneWhatsapp, setPhoneWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [interestedUnit, setInterestedUnit] = useState(
    selectedUnitForInquiry ? selectedUnitForInquiry.id : 'type-prime-logistics'
  );
  const [intentType, setIntentType] = useState('Beli Properti');
  const [plannedSurveyDate, setPlannedSurveyDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitReference, setSubmitReference] = useState('');

  // Update interestedUnit if prop changes
  React.useEffect(() => {
    if (selectedUnitForInquiry) {
      setInterestedUnit(selectedUnitForInquiry.id);
    }
  }, [selectedUnitForInquiry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !phoneWhatsapp || !email || !companyName) {
      return;
    }

    const ref = 'WLC-' + Math.floor(100000 + Math.random() * 900000);
    setSubmitReference(ref);
    setIsSubmitted(true);

    // Prepare pre-filled WhatsApp message
    const selectedUnitObj = WAREHOUSE_UNITS.find((u) => u.id === interestedUnit);
    const unitName = selectedUnitObj ? selectedUnitObj.name : interestedUnit;

    const message = `Halo Wira Logistics Centre (Wiraland),%0A%0ASaya ingin mengajukan permohonan informasi/proposal pergudangan:%0A- No. Ref: ${ref}%0A- Nama: ${encodeURIComponent(fullName)}%0A- Perusahaan: ${encodeURIComponent(companyName)} (${encodeURIComponent(jobTitle || 'Manajemen')})%0A- Email: ${encodeURIComponent(email)}%0A- No. HP: ${encodeURIComponent(phoneWhatsapp)}%0A- Minat Unit: ${encodeURIComponent(unitName)}%0A- Rencana Kebutuhan: ${encodeURIComponent(intentType)}${plannedSurveyDate ? `%0A- Rencana Survey: ${encodeURIComponent(plannedSurveyDate)}` : ''}${notes ? `%0A- Catatan: ${encodeURIComponent(notes)}` : ''}%0A%0AMohon dihubungi oleh Sales Executive WLC. Terima kasih.`;

    // Trigger WhatsApp in new tab
    const waUrl = `https://wa.me/6281263300500?text=${message}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="inquiry" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: B2B Trust & Direct Sales Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
                Formulir Penawaran & Permintaan Proposal
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight mt-2 text-balance">
                Diskusikan Kebutuhan Gudang Bisnis Anda Bersama Wira Logistics Centre
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Kirimkan formulir ini untuk menerima lembar spesifikasi detail, penawaran harga jual/sewa resmi, simulasi kebutuhan luas ruang, atau konfirmasi survey lokasi bersama Sales Engineer kami.
              </p>
            </div>

            {/* Direct Trust Credentials */}
            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-950">Respon Cepat Dalam 1 Jam Kerja</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Proposal resmi dikirim via WhatsApp & Email resmi perusahaan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-950">Kerahasiaan Data Terjamin</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Informasi ekspansi dan logistik perusahaan Anda dilindungi standar kerahasiaan korporat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-950">Hotline Sales & WhatsApp Resmi</h4>
                  <p className="text-xs font-mono text-amber-600 font-bold mt-0.5">
                    +62 812-6330-0500 / (061) 80025888
                  </p>
                  <p className="text-[11px] text-slate-500">Senin - Sabtu: 08.30 - 18.00 WIB (Kawasan Aktif 24 Jam)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-md">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-2xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  Permintaan Proposal Berhasil Dikirim
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Terima kasih, <strong className="text-slate-900">{fullName}</strong> dari <strong className="text-slate-900">{companyName}</strong>. Referensi permohonan Anda:
                </p>
                <div className="p-3 bg-amber-50 rounded border border-amber-200 inline-block font-mono text-amber-800 text-sm font-bold">
                  NO. REF: {submitReference}
                </div>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Chat WhatsApp otomatis telah terbuka di tab baru untuk terhubung langsung dengan Account Executive kami.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 border border-slate-300 hover:bg-slate-50 rounded-md transition-colors shadow-2xs"
                >
                  Kirim Permintaan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md text-xs sm:text-sm text-slate-900 placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      Nama Perusahaan *
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Contoh: PT Surya Logistik Mandiri"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md text-xs sm:text-sm text-slate-900 placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      Jabatan / Divisi
                    </label>
                    <input
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      placeholder="Contoh: Logistics Manager"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md text-xs sm:text-sm text-slate-900 placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      No. WhatsApp / HP *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneWhatsapp}
                      onChange={(e) => setPhoneWhatsapp(e.target.value)}
                      placeholder="0812xxxxxxxx"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md text-xs sm:text-sm text-slate-900 placeholder-slate-400 font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      Email Bisnis *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@perusahaan.co.id"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md text-xs sm:text-sm text-slate-900 placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      Tipe Properti yang Diminati *
                    </label>
                    <select
                      value={interestedUnit}
                      onChange={(e) => setInterestedUnit(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md text-xs sm:text-sm text-slate-900"
                    >
                      {WAREHOUSE_UNITS.map((u) => (
                        <option key={u.id} value={u.id}>
                          {u.name} ({u.buildingArea} m²)
                        </option>
                      ))}
                      <option value="custom-inquiry">Konsultasi Umum / Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      Skema Kepemilikan
                    </label>
                    <select
                      value={intentType}
                      onChange={(e) => setIntentType(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md text-xs sm:text-sm text-slate-900"
                    >
                      <option value="Beli Properti (SHGB Murni)">Beli Properti (SHGB Murni)</option>
                      <option value="Sewa Tahunan (1 - 5 Tahun)">Sewa Tahunan (1 - 5 Tahun)</option>
                      <option value="Kavling Industri (Build-to-Suit)">Kavling Industri (Build-to-Suit)</option>
                      <option value="Konsultasi Kebutuhan Awal">Konsultasi Kebutuhan Awal</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    Rencana Tanggal Survey Lokasi (Opsional)
                  </label>
                  <input
                    type="date"
                    value={plannedSurveyDate}
                    onChange={(e) => setPlannedSurveyDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md text-xs sm:text-sm text-slate-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    Spesifikasi Khusus / Catatan Kebutuhan
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Misal: estimasi kapasitas pallet yang dibutuhkan, kebutuhan penambahan trafo listrik 66 kVA, atau instalasi cold storage..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-md text-xs sm:text-sm text-slate-900 placeholder-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Permintaan & Terhubung ke WhatsApp Sales</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Dengan mengirim formulir, Anda menyetujui dihubungi oleh tim representatif Wiraland Gudang untuk keperluan proposal properti.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
