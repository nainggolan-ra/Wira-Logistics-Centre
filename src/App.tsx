import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyProfile } from './components/CompanyProfile';
import { NineInOneSection } from './components/NineInOneSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WarehouseCatalog } from './components/WarehouseCatalog';
import { TechnicalSpecs } from './components/TechnicalSpecs';
import { WarehouseEstimator } from './components/WarehouseEstimator';
import { BusinessUseCases } from './components/BusinessUseCases';
import { LocationConnectivity } from './components/LocationConnectivity';
import { SitePlanViewer } from './components/SitePlanViewer';
import { EstateFacilities } from './components/EstateFacilities';
import { WarehouseGallery } from './components/WarehouseGallery';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { FAQSection } from './components/FAQSection';
import { LeadInquirySection } from './components/LeadInquirySection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WarehouseDetailModal } from './components/WarehouseDetailModal';
import { ScheduleSurveyModal } from './components/ScheduleSurveyModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WarehouseUnit } from './types/warehouse';
import { WAREHOUSE_UNITS } from './data/warehouseData';

export default function App() {
  const [selectedUnitForModal, setSelectedUnitForModal] = useState<WarehouseUnit | null>(null);
  const [selectedUnitForInquiry, setSelectedUnitForInquiry] = useState<WarehouseUnit | null>(null);
  const [isSurveyModalOpen, setIsSurveyModalOpen] = useState(false);
  const [surveyPresetUnit, setSurveyPresetUnit] = useState<WarehouseUnit | null>(null);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDetailModal = (unit: WarehouseUnit) => {
    setSelectedUnitForModal(unit);
  };

  const handleInquireUnit = (unit: WarehouseUnit) => {
    setSelectedUnitForInquiry(unit);
    scrollToSection('inquiry');
  };

  const handleScheduleSurveyForUnit = (unit?: WarehouseUnit | null) => {
    setSurveyPresetUnit(unit || null);
    setIsSurveyModalOpen(true);
  };

  const handleInquireFromSitePlan = (zoneName: string) => {
    // Check if zone matches a known unit
    const matched = WAREHOUSE_UNITS.find((u) => zoneName.includes(u.name) || zoneName.includes(u.code));
    if (matched) {
      setSelectedUnitForInquiry(matched);
    }
    scrollToSection('inquiry');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* 01: Top Navigation Bar */}
      <Navbar
        onScheduleSurvey={() => handleScheduleSurveyForUnit(null)}
        onInquireNow={() => scrollToSection('inquiry')}
      />

      <main className="flex-grow">
        {/* 02: Hero Section */}
        <Hero
          onExploreCatalog={() => scrollToSection('katalog')}
          onScheduleSurvey={() => handleScheduleSurveyForUnit(null)}
          onInquireNow={() => scrollToSection('inquiry')}
        />

        {/* 03: Company Introduction */}
        <CompanyProfile />

        {/* 04: Signature 9-in-1 Concept */}
        <NineInOneSection />

        {/* 05: Why Wira Logistics Centre (Value Propositions) */}
        <WhyChooseUs />

        {/* 05: Featured Warehouse Catalog */}
        <WarehouseCatalog
          onSelectUnit={handleOpenDetailModal}
          onInquireUnit={handleInquireUnit}
        />

        {/* 06: Technical Engineering Specifications */}
        <TechnicalSpecs />

        {/* Interactive B2B Tool: Pallet & Space Estimator */}
        <WarehouseEstimator
          onSelectUnit={handleOpenDetailModal}
          onInquireUnit={handleInquireUnit}
        />

        {/* 07: Business Use Cases */}
        <BusinessUseCases />

        {/* 08: Strategic Location & Access */}
        <LocationConnectivity />

        {/* 09: Site Plan & Master Layout */}
        <SitePlanViewer onInquireZone={handleInquireFromSitePlan} />

        {/* 10: Facilities & Industrial Infrastructure */}
        <EstateFacilities />

        {/* 11: High-Definition Gallery */}
        <WarehouseGallery />

        {/* 12: Property Comparison Matrix */}
        <ComparisonMatrix
          onSelectUnit={handleOpenDetailModal}
          onInquireUnit={handleInquireUnit}
        />

        {/* 13: B2B FAQ */}
        <FAQSection />

        {/* 14: Lead Form & Direct Inquiry */}
        <LeadInquirySection selectedUnitForInquiry={selectedUnitForInquiry} />

        {/* 15: Final CTA */}
        <FinalCTA
          onScheduleSurvey={() => handleScheduleSurveyForUnit(null)}
          onInquireNow={() => scrollToSection('inquiry')}
        />
      </main>

      {/* 16: Corporate Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <WarehouseDetailModal
        unit={selectedUnitForModal}
        onClose={() => setSelectedUnitForModal(null)}
        onInquire={(unit) => handleInquireUnit(unit)}
        onScheduleSurvey={(unit) => handleScheduleSurveyForUnit(unit)}
      />

      <ScheduleSurveyModal
        isOpen={isSurveyModalOpen}
        onClose={() => setIsSurveyModalOpen(false)}
        presetUnit={surveyPresetUnit}
      />
    </div>
  );
}
