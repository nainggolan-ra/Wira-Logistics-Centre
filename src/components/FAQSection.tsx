import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS } from '../data/warehouseData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-600 tracking-wider uppercase inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tanya Jawab B2B (FAQ)</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight mt-2 text-balance">
            Pertanyaan yang Sering Diajukan Calon Tenant & Investor
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Informasi komprehensif mengenai aspek legalitas, teknis bangunan, aksesibilitas logistik, dan prosedur kepemilikan.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-slate-50/70 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-slate-950 hover:text-amber-600 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-200/80 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Sales Support Callout */}
        <div className="mt-12 p-6 rounded-xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-950">Memiliki Pertanyaan Teknis Lain?</h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Hubungi Sales Representative khusus Industrial Wiraland untuk konsultasi kebutuhan spesifik Anda.
            </p>
          </div>
          <a
            href="https://wa.me/628116558899?text=Halo%20Wiraland%20Gudang,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20gudang%20perusahaan%20kami."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors flex items-center gap-2 shrink-0 cursor-pointer shadow-xs"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Chat WhatsApp Sales</span>
          </a>
        </div>
      </div>
    </section>
  );
};
