export interface WarehouseUnit {
  id: string;
  name: string;
  code: string;
  typeCategory: 'compact' | 'standard' | 'logistics' | 'land';
  badgeLabel: string;
  landArea: number; // m2
  buildingArea: number; // m2
  officeArea: number; // m2
  ceilingHeight: number; // meters
  floorLoadCapacity: number; // ton / m2
  electricalCapacity: string; // e.g. "16.5 kVA (Bisa Upgrade)"
  doorDimension: string; // e.g. "5.0m x 5.0m"
  loadingBays: number;
  priceStartingFrom: string;
  rentStartingFrom: string;
  availabilityStatus: 'Ready / Siap Pakai' | 'Indent Terbatas' | 'Tersedia Kavling';
  statusColor: 'emerald' | 'amber' | 'blue';
  image: string;
  crossSectionDiagram?: string;
  features: string[];
  idealFor: string[];
  description: string;
  dimension: string; // e.g. "18m x 48m"
  certificateType: string; // e.g. "SHGB Murni (Pecah Per Kavling)"
  waterSupply: string;
}

export interface SpecificationItem {
  category: string;
  title: string;
  value: string;
  detail: string;
  iconName: string;
}

export interface StrategicLocationPoint {
  destination: string;
  category: 'Toll Access' | 'Port / Pelabuhan' | 'Airport' | 'Arteri & Kota';
  distanceKm: string;
  travelTimeMin: string;
  routeHighlight: string;
}

export interface SitePlanZone {
  id: string;
  name: string;
  type: 'warehouse-cluster' | 'infrastructure' | 'access' | 'office';
  description: string;
  specs: string;
  coordinates: { x: number; y: number; width: number; height: number };
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  jobTitle: string;
  phoneWhatsapp: string;
  email: string;
  interestedUnitId: string;
  businessType: string;
  intendedUse: 'Beli Properti' | 'Sewa Gudang' | 'Kavling Industri' | 'Konsultasi Kebutuhan';
  surveyDate?: string;
  additionalNotes: string;
}

export interface NineInOneConcept {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tag: string;
}
