import { WarehouseUnit, SpecificationItem, StrategicLocationPoint, SitePlanZone, NineInOneConcept } from '../types/warehouse';

import heroImg from '../assets/images/hero_industrial_warehouse_1790613852525.jpg';
import interiorImg from '../assets/images/warehouse_interior_highbay_1790613866403.jpg';
import dockImg from '../assets/images/warehouse_loading_dock_1790613879490.jpg';
import aerialImg from '../assets/images/warehouse_aerial_industrial_park_1790613895283.jpg';

export const ASSET_IMAGES = {
  hero: heroImg,
  interior: interiorImg,
  loadingDock: dockImg,
  aerial: aerialImg,
};

export const PROJECT_INFO = {
  name: 'Wira Logistics Centre',
  shortName: 'WLC',
  brandLine: 'Kawasan Pergudangan Modern & Terpadu 16 Hektar',
  developer: 'Wiraland Property Group',
  companyLegal: 'PT. Bimasakti Mahawira / Wiraland Property Group',
  locationAddress: 'Jl. Raya Medan - Tanjung Morawa KM 21, Deli Serdang, Sumatera Utara',
  headOfficeAddress: 'Jl. T. Amir Hamzah No. 1A, Helvetia Timur, Kec. Medan Helvetia, Kota Medan, Sumatera Utara 20114',
  headOfficePhone: '(061) 80025888',
  salesWhatsApp: '+62 812-6330-0500',
  salesPhoneRaw: '6281263300500',
  email: 'customercare@wiraland.com',
  website: 'wiralogisticcentre.com',
  totalArea: '16 Hektar',
  mainRowRoad: '24 Meter (Rigid Beton Heavy Duty)',
  clusterRowRoad: '14 - 16 Meter',
  certificate: 'SHGB Murni (Sertifikat Pecah per Kavling / Siap AJB)',
  buildingPermit: 'PBG / IMB Industri Resmi',
  operatingHours: 'Senin - Sabtu: 08:30 - 18:00 WIB (Kawasan Aktif 24 Jam)',
};

export const NINE_IN_ONE_CONCEPTS: NineInOneConcept[] = [
  {
    id: '01',
    title: 'Gudang / Warehouse',
    subtitle: 'Storage & Supply Inventory',
    description: 'Penyimpanan barang skala menengah & besar dengan clear ceiling hingga 9 meter, sirkulasi udara sejuk, dan lantai kuat tahan beban tinggi.',
    iconName: 'Warehouse',
    tag: 'Fungsi Utama'
  },
  {
    id: '02',
    title: 'Bengkel / Workshop',
    subtitle: 'Technical Service & Assembly',
    description: 'Ruang lantai lapang tanpa tiang tengah yang ideal untuk workshop perbaikan alat berat, perakitan mekanis, ataupun fabrikasi komponen.',
    iconName: 'Wrench',
    tag: 'Operasional'
  },
  {
    id: '03',
    title: 'Showroom / Display Gallery',
    subtitle: 'B2B Product Showcase',
    description: 'Fasade modern dan representatif untuk memamerkan sampel produk, material konstruksi, suku cadang, ataupun mesin industri kepada klien.',
    iconName: 'Store',
    tag: 'Komersial'
  },
  {
    id: '04',
    title: 'Studio Kantor / Office',
    subtitle: 'Executive & Admin Mezzanine',
    description: 'Ruang kantor mezzanine representatif ber-AC dengan view langsung ke area gudang guna monitoring administrasi dan operasional real-time.',
    iconName: 'Briefcase',
    tag: 'Manajerial'
  },
  {
    id: '05',
    title: 'Home Industry / Manufaktur Ringan',
    subtitle: 'Light Processing & Packaging',
    description: 'Daya listrik 3-phase stabil dan perizinan zona pergudangan/industri aman untuk perakitan barang, pengemasan, dan sortir higienis.',
    iconName: 'Cpu',
    tag: 'Produksi'
  },
  {
    id: '06',
    title: 'Retail Space / Toko Grosir',
    subtitle: 'Wholesale & Direct Distribution',
    description: 'Akses jalan langsung di koridor utama memudahkan transaksi grosir dan pengambilan pesanan volume besar secara instan oleh mitra bisnis.',
    iconName: 'ShoppingBag',
    tag: 'Perdagangan'
  },
  {
    id: '07',
    title: 'Pusat Distribusi / Distribution Center',
    subtitle: 'Regional Logistics Hub',
    description: 'Jalur transit terpadu menuju seluruh penjuru Sumatera Utara, didukung loading apron beton untuk pergantian barang secara cepat.',
    iconName: 'Truck',
    tag: 'Logistik'
  },
  {
    id: '08',
    title: 'Terminal Logistik / Transit Dock',
    subtitle: 'Cross-Docking Facility',
    description: 'Dukungan manuver kontainer 40ft untuk proses transfer muatan kargo antar truk trailer ke armada angkutan berkapasitas sedang.',
    iconName: 'Container',
    tag: 'Transhipment'
  },
  {
    id: '09',
    title: 'Depo Penyimpanan / Fleet Yard',
    subtitle: 'Fleet Staging & Buffer Depot',
    description: 'Area penataan logistik dan parkir armada operasional perusahaan ekspedisi, distributor otomotif, maupun depo penampungan barang.',
    iconName: 'Layers',
    tag: 'Infrastruktur'
  }
];

export const WAREHOUSE_UNITS: WarehouseUnit[] = [
  {
    id: 'type-prime-logistics',
    name: 'Type Prime Logistics Hub (24 x 50)',
    code: 'PL-1200',
    typeCategory: 'logistics',
    badgeLabel: 'High Volume · Direct Loading Dock',
    landArea: 1200,
    buildingArea: 864,
    officeArea: 120,
    ceilingHeight: 9.0,
    floorLoadCapacity: 4.5,
    electricalCapacity: '33 kVA (3 Phase / Upgradable s/d 100 kVA)',
    doorDimension: '5.2m (T) x 5.0m (L)',
    loadingBays: 2,
    priceStartingFrom: 'Hubungi Sales (Jual & Sewa)',
    rentStartingFrom: 'Tersedia Sewa Tahunan / Bulanan',
    availabilityStatus: 'Ready / Siap Pakai',
    statusColor: 'emerald',
    image: heroImg,
    dimension: '24m x 50m (Kavling) · 24m x 36m (Bangunan)',
    certificateType: 'SHGB Murni (Sertifikat Pecah Siap AJB)',
    waterSupply: 'Deep Well Industri + Instalasi Pompa Pendorong',
    features: [
      'Akses langsung manuver kontainer 40ft & tronton di ROW 24m',
      'Area kantor mezzanine 2 lantai representatif ber-AC ready',
      'Lantai beton bertulang finishing Floor Hardener tebal 15cm',
      'Atap peredam panas Zincalume + skylight pencahayaan alami',
      'Pondasi tiang pancang kokoh untuk beban racking tinggi'
    ],
    idealFor: [
      '3PL & Perusahaan Ekspedisi Skala Nasional',
      'Pusat Distribusi Regional FMCG & Retail',
      'E-Commerce Fulfillment Mega Hub',
      'Depo Farmasi & Medical Supplies Berpendingin'
    ],
    description: 'Unit pergudangan skala besar di Wira Logistics Centre yang dirancang khusus untuk mobilitas distribusi berintensitas tinggi. Dilengkapi dengan apron parkir luas untuk 2 kontainer sekaligus, ketinggian bersih 9 meter untuk susunan racking 4 hingga 5 tingkat, serta kantor representatif.'
  },
  {
    id: 'type-standard-distribution',
    name: 'Type Standard Distribution (18 x 40)',
    code: 'SD-720',
    typeCategory: 'standard',
    badgeLabel: 'Most Popular · Optimal 9-in-1',
    landArea: 720,
    buildingArea: 540,
    officeArea: 80,
    ceilingHeight: 8.0,
    floorLoadCapacity: 3.5,
    electricalCapacity: '22 kVA (3 Phase)',
    doorDimension: '4.8m (T) x 4.5m (L)',
    loadingBays: 1,
    priceStartingFrom: 'Hubungi Sales (Jual & Sewa)',
    rentStartingFrom: 'Tersedia Sewa Fleksibel',
    availabilityStatus: 'Ready / Siap Pakai',
    statusColor: 'emerald',
    image: interiorImg,
    dimension: '18m x 40m (Kavling) · 18m x 30m (Bangunan)',
    certificateType: 'SHGB Murni (Sertifikat Pecah Siap AJB)',
    waterSupply: 'Sumur Bor Dalam + Toren Penampungan Industri',
    features: [
      'Lebar muka 18 meter memudahkan bongkar muat forklift & CDD',
      'Kantor mezzanine fungsional dengan jendela pantau area gudang',
      'Struktur baja WF SNI dengan bentang lebar tanpa tiang tengah',
      'Sirkulasi udara alami optimal dengan roof monitor anti-panas',
      'Saluran drainase tertutup anti-genangan terhubung kolam retensi'
    ],
    idealFor: [
      'Distributor Bahan Bangunan & Hardware',
      'Gudang Transit Ritel & Jaringan Supermarket',
      'Stok Buffer Industri Makanan & Minuman',
      'Workshop Servis & Perakitan Komponen Mekanikal'
    ],
    description: 'Format gudang serbaguna paling diminati untuk kegiatan distribusi tier-1 dan pergudangan stok utama. Ruang lantai lapang tanpa halangan tiang tengah memberikan keleluasaan manuver forklift dan tata letak rak pallet yang fleksibel.'
  },
  {
    id: 'type-compact-fulfillment',
    name: 'Type Compact Multifungsi (12 x 34)',
    code: 'CM-450',
    typeCategory: 'compact',
    badgeLabel: '9-in-1 Versatile · Best Value',
    landArea: 408,
    buildingArea: 360,
    officeArea: 54,
    ceilingHeight: 7.5,
    floorLoadCapacity: 3.0,
    electricalCapacity: '16.5 kVA (3 Phase)',
    doorDimension: '4.5m (T) x 4.2m (L)',
    loadingBays: 1,
    priceStartingFrom: 'Hubungi Sales (Jual & Sewa)',
    rentStartingFrom: 'Sewa Bulanan / Tahunan Fleksibel',
    availabilityStatus: 'Ready / Siap Pakai',
    statusColor: 'emerald',
    image: dockImg,
    dimension: '12m x 34m (Kavling) · 12m x 30m (Bangunan)',
    certificateType: 'SHGB Murni (Sertifikat Pecah Siap AJB)',
    waterSupply: 'PDAM / Deep Well Industri',
    features: [
      'Dimensi 12 x 34 meter efisien dengan biaya operasional terkontrol',
      'Pintu gulung heavy duty elektrik / manual chain hoist tangguh',
      'Parkir mobil operasional & truk engkel / CDD langsung di depan unit',
      'Area kantor mezzanine terintegrasi toilet bersih',
      'Penerangan alami maksimal saat siang hari hemat pemakaian listrik'
    ],
    idealFor: [
      'Stockist Online & Merchant E-Commerce',
      'Distributor Kosmetik, Suplemen, & Herbal',
      'Showroom Produk & Pusat Pengambilan Grosir',
      'Industri Kecil / Home Industry Pengemasan'
    ],
    description: 'Solusi gudang kompak multifungsi berstandar 9-in-1 di Wira Logistics Centre. Sangat tepat bagi bisnis berkembang dan distributor lokal yang menginginkan fasilitas penyimpanan representatif dengan akses truk leluasa di jalur KM 21 Medan - Tanjung Morawa.'
  },
  {
    id: 'type-industrial-land',
    name: 'Kavling Industri Siap Bangun (450m² - 6.000m²)',
    code: 'KL-6000',
    typeCategory: 'land',
    badgeLabel: 'Build-to-Suit / Build-to-Lease · 16 Ha Estate',
    landArea: 2500,
    buildingArea: 1800,
    officeArea: 200,
    ceilingHeight: 10.0,
    floorLoadCapacity: 5.0,
    electricalCapacity: 'Trafo Khusus Industri s/d 197 kVA (Sesuai Kebutuhan)',
    doorDimension: 'Custom Sesuai Desain Rancang-Bangun',
    loadingBays: 4,
    priceStartingFrom: 'Harga Kompetitif per m²',
    rentStartingFrom: 'Bisa Skema Build-to-Lease Jangka Panjang',
    availabilityStatus: 'Tersedia Kavling',
    statusColor: 'blue',
    image: aerialImg,
    dimension: 'Tersedia Kavling 450 m² hingga 6.000 m²',
    certificateType: 'SHGB Murni Siap IMB / PBG Industri',
    waterSupply: 'Jaringan Pipa Distribusi Industri',
    features: [
      'Lahan matang berkontur rata & sudah dipadatkan (soil test ready)',
      'Akses jalan utama ROW 24 meter tepat di depan area kavling',
      'Bebas merancang gudang kustom, depo armada, atau pabrik perakitan',
      'Dukungan penuh perizinan AMDAL & Andalalin kawasan terpadu',
      'Opsi pembangunan difasilitasi kontraktor rekanan Wiraland'
    ],
    idealFor: [
      'Pabrik Manufaktur Ringan / Perakitan Komponen',
      'Mega Logistic Consolidation Center & Transit Depo',
      'Fasilitas Cold Storage Raksasa / Cold Chain Processing',
      'Pool Armada Truk Ekspedisi & Penumpukan Peti Kemas'
    ],
    description: 'Kavling industri tanah matang berinfrastruktur lengkap di dalam kawasan terpadu 16 Hektar Wira Logistics Centre. Solusi ideal bagi korporasi yang membutuhkan rancang-bangun spesifik (Build-to-Suit) sesuai standar operasional manufaktur maupun pergudangan multinasional.'
  }
];

export const TECHNICAL_SPECIFICATIONS: SpecificationItem[] = [
  {
    category: 'Struktur & Pondasi',
    title: 'Konstruksi Utama Bangunan',
    value: 'Baja WF (Wide Flange) SNI',
    detail: 'Struktur kolom dan balok baja WF standar SNI kokoh dengan bentang bebas tiang tengah untuk memaksimalkan luasan utilisasi racking dan manuver peralatan.',
    iconName: 'Building2'
  },
  {
    category: 'Lantai & Daya Beban',
    title: 'Kekuatan Lantai (Floor Load)',
    value: '3.5 - 5.0 Ton / m²',
    detail: 'Cor beton bertulang tebal finishing Floor Hardener (Epoxy ready), tahan terhadap gesekan roda forklift baja & beban racking bertingkat berat.',
    iconName: 'Layers'
  },
  {
    category: 'Ketinggian Ruang',
    title: 'Clear Ceiling Height',
    value: '7.5 - 9.0 Meter',
    detail: 'Tinggi dinding samping 7.5 meter dan puncak atap mencapai 9 meter ke atas, sangat optimal untuk tata letak racking vertikal 4 hingga 5 tingkat.',
    iconName: 'Maximize2'
  },
  {
    category: 'Akses Bongkar Muat',
    title: 'Pintu & Loading Dock',
    value: 'Heavy Duty Shutter 5.2m x 5.0m',
    detail: 'Pintu rolling door berdimensi lapang memudahkan kontainer 20ft/40ft merapat dengan apron perkerasan rigid beton tebal.',
    iconName: 'Truck'
  },
  {
    category: 'Aksesibilitas Jalan',
    title: 'ROW Jalan Kawasan',
    value: 'ROW 24m Utama & ROW 14-16m Klaster',
    detail: 'Jalan rigid beton bertulang extra lebar dengan radius putar khusus tronton dan kontainer trailer 40ft tanpa mengganggu arus kendaraan lain.',
    iconName: 'Navigation'
  },
  {
    category: 'Daya Kelistrikan',
    title: 'Pasokan Listrik Industri',
    value: '3 Phase (16.5 kVA - 197 kVA)',
    detail: 'Jaringan kabel distribusi industri PLN stabil, aman untuk mesin produksi ringan, freezer cold room, konveyor, dan charging forklift elektrik.',
    iconName: 'Zap'
  },
  {
    category: 'Atap & Pencahayaan',
    title: 'Atap & Sirkulasi Thermal',
    value: 'Zincalume + Polycarbonate Skylight',
    detail: 'Dilengkapi insulasi glasswool/aluminium foil peredam radiasi panas, serta ventilasi atap (roof monitor) hemat konsumsi listrik penerangan di siang hari.',
    iconName: 'Sun'
  },
  {
    category: 'Legalitas & Perizinan',
    title: 'Status Hukum Properti',
    value: 'SHGB Murni & PBG Industri',
    detail: 'Sertifikat Hak Guna Bangunan murni yang sudah dipecah per kavling, bebas sengketa, dan memenuhi syarat zona pergudangan/industri resmi di Deli Serdang.',
    iconName: 'ShieldCheck'
  }
];

export const STRATEGIC_LOCATIONS: StrategicLocationPoint[] = [
  {
    destination: 'Pintu Masuk Gerbang Tol Kemiri / Lubuk Pakam',
    category: 'Toll Access',
    distanceKm: '3.5 km',
    travelTimeMin: '5 Menit',
    routeHighlight: 'Akses instan ke jalan Tol Trans-Sumatera (Medan - Kualanamu - Tebing Tinggi) tanpa macet'
  },
  {
    destination: 'Gerbang Tol Tanjung Morawa',
    category: 'Toll Access',
    distanceKm: '7.2 km',
    travelTimeMin: '10 Menit',
    routeHighlight: 'Jalur cepat koridor industri Tanjung Morawa menuju interchange Amplas dan Ring Road'
  },
  {
    destination: 'Bandara Internasional Kualanamu (Terminal Kargo)',
    category: 'Airport',
    distanceKm: '14.5 km',
    travelTimeMin: '15 - 20 Menit',
    routeHighlight: 'Konektivitas langsung via tol terpadu untuk pengiriman same-day kargo udara nasional & ekspor'
  },
  {
    destination: 'Pelabuhan Peti Kemas Belawan',
    category: 'Port / Pelabuhan',
    distanceKm: '32.0 km',
    travelTimeMin: '30 - 35 Menit',
    routeHighlight: 'Tersambung langsung full jalan tol Belmera (Belawan - Medan - Tanjung Morawa) untuk kontainer peti kemas'
  },
  {
    destination: 'Pusat Kota Medan (Ring Road / Gatot Subroto)',
    category: 'Arteri & Kota',
    distanceKm: '18.0 km',
    travelTimeMin: '20 - 25 Menit',
    routeHighlight: 'Distribusi barang lancar ke pusat perdagangan grosir, retail supermarket, dan pasar modern kota'
  }
];

export const ESTATE_FACILITIES = [
  {
    title: 'One Gate System & Keamanan 24 Jam',
    description: 'Akses masuk tunggal dengan pos keamanan terpadu, palang otomatis, pemeriksaan log keluar-masuk kendaraan, dan patroli berkala 24/7.',
    iconName: 'Shield'
  },
  {
    title: 'Pengawasan CCTV Kawasan Terpadu',
    description: 'Kamera CCTV resolusi tinggi beroperasi nonstop memantau seluruh sudut koridor jalan utama ROW 24m, persimpangan, dan area perimeter.',
    iconName: 'Camera'
  },
  {
    title: 'Jalan Rigid Beton ROW 24 Meter',
    description: 'Didesain khusus menahan beban gandar tronton dan kontainer muatan penuh 40ft tanpa risiko jalan amblas, retak, atau berlubang.',
    iconName: 'Compass'
  },
  {
    title: 'Bebas Pungli & Kuli Bongkar Liar',
    description: 'Kawasan dikelola secara profesional oleh Estate Management resmi Wiraland. 100% bebas dari pungutan liar, premanisme, maupun pemaksaan kuli liar.',
    iconName: 'UserCheck'
  },
  {
    title: 'Sistem Hidran & Proteksi Kebakaran',
    description: 'Jaringan pipa pemadam kebakaran dengan pilar hidran di setiap blok serta tandon reservoar air mandiri berkapasitas besar.',
    iconName: 'Flame'
  },
  {
    title: 'Drainase Terpadu Bebas Banjir',
    description: 'Saluran drainase beton bertulang terintegrasi dengan kolam retensi kawasan, terbukti bebas risiko banjir dan genangan air hujan.',
    iconName: 'Droplet'
  },
  {
    title: 'Penerangan Jalan Umum (PJU) LED',
    description: 'PJU terang benderang di seluruh koridor kawasan untuk mendukung operasional bongkar muat pada shift malam hari secara aman.',
    iconName: 'Lightbulb'
  },
  {
    title: 'Lansekap Hijau & Lingkungan Rapi',
    description: 'Penataan area hijau tertib dan bersih yang menciptakan lingkungan kerja berstandar profesional bagi korporasi dan mitra bisnis.',
    iconName: 'Leaf'
  }
];

export const SITE_PLAN_ZONES: SitePlanZone[] = [
  {
    id: 'gate',
    name: 'Main Gate & Pos Keamanan KM 21',
    type: 'infrastructure',
    description: 'Pintu gerbang utama Jl. Raya Medan - Tanjung Morawa KM 21 dengan boom barrier otomatis, pos satpam 24 jam, dan jalan ROW 24m.',
    specs: 'Akses KM 21 · ROW 24m · CCTV Perimeter · Pemeriksaan Dokumen',
    coordinates: { x: 5, y: 35, width: 14, height: 30 }
  },
  {
    id: 'block-a',
    name: 'Blok A — Prime Logistics Hub (Unit PL-1200)',
    type: 'warehouse-cluster',
    description: 'Klaster gudang skala besar dengan loading dock apron luas, posisi terdepan dengan manuver trailer kontainer 40ft paling leluasa.',
    specs: 'Tipe 24x50m · LT 1200m² · Loading Dock Ready · Ceiling 9m',
    coordinates: { x: 24, y: 15, width: 22, height: 32 }
  },
  {
    id: 'block-b',
    name: 'Blok B — Standard Distribution (Unit SD-720)',
    type: 'warehouse-cluster',
    description: 'Klaster pergudangan ukuran menengah paling efisien untuk distributor FMCG, ritel, dan rantai pasok logistik Sumatera Utara.',
    specs: 'Tipe 18x40m · LT 720m² · ROW Jalan 16m · Bentang Bebas Tiang',
    coordinates: { x: 50, y: 15, width: 22, height: 32 }
  },
  {
    id: 'block-c',
    name: 'Blok C — Compact Multifungsi 9-in-1 (Unit CM-450)',
    type: 'warehouse-cluster',
    description: 'Klaster gudang multifungsi 12x34m bagi stockist suku cadang, showroom produk, e-commerce, dan bengkel teknis.',
    specs: 'Tipe 12x34m · LT 408-450m² · Siap Pakai · Konsep 9-in-1',
    coordinates: { x: 76, y: 15, width: 20, height: 32 }
  },
  {
    id: 'block-d',
    name: 'Blok D — Kavling Industri Matang (450m² - 6.000m²)',
    type: 'warehouse-cluster',
    description: 'Area kavling industri tanah matang untuk kebutuhan fasilitas manufaktur ringan atau mega gudang kustom hingga 6.000m².',
    specs: 'Kavling Siap Bangun 450m² s/d 6.000m² · PBG Industri · Build-to-Suit',
    coordinates: { x: 24, y: 55, width: 48, height: 35 }
  },
  {
    id: 'facility-zone',
    name: 'Estate Management Office & Staging Yard',
    type: 'office',
    description: 'Kantor pengelola kawasan Wira Logistics Centre, area parkir cadangan armada trailer/tronton, serta gardu induk trafo PLN.',
    specs: 'Kantor Pengelola WLC · Parkir Armada Kontainer · Gardu PLN Industri',
    coordinates: { x: 76, y: 55, width: 20, height: 35 }
  }
];

export const BUSINESS_USE_CASES = [
  {
    title: '3PL & Ekspedisi Logistik',
    description: 'Akses 24 jam tanpa pembatasan jalan kota, manuver trailer 40ft mulus di jalan ROW 24m, dan apron beton luas untuk perputaran armada antar kota.',
    stats: 'Bongkar Muat 24 Jam Non-Stop',
    accent: 'blue'
  },
  {
    title: 'E-Commerce Fulfillment & Sorting Hub',
    description: 'Clear ceiling hingga 9 meter memaksimalkan volume kubikasi racking bertingkat serta alur conveyor sortasi paket barang kilat.',
    stats: 'Kapasitas Racking Hingga 5 Tingkat',
    accent: 'emerald'
  },
  {
    title: 'Distributor FMCG & Bahan Pokok',
    description: 'Lokasi 5 menit dari tol Kemiri dan 10 menit dari tol Tanjung Morawa memberikan efisiensi distribusi ke seluruh gerai ritel modern.',
    stats: '5 Menit ke Akses Tol Kemiri',
    accent: 'amber'
  },
  {
    title: 'Cold Storage & Farmasi',
    description: 'Lantai cor K-350 rata presisi dan suplai daya 3-phase stabil siap menopang insulasi poliuretan serta instalasi chiller/freezer room.',
    stats: 'Daya 3-Phase Siap Suplai Chiller',
    accent: 'indigo'
  },
  {
    title: 'Manufaktur Ringan & Perakitan',
    description: 'Kawasan teratur dengan perizinan industri resmi yang sah untuk perakitan barang jadi, fabrikasi suku cadang, dan kemasan produk.',
    stats: 'Zona Peruntukan Industri Resmi',
    accent: 'purple'
  },
  {
    title: 'Depo Suku Cadang & Showroom B2B',
    description: 'Konsep 9-in-1 memungkinkan area gudang stok berdampingan langsung dengan galeri produk representatif bagi pembeli korporat.',
    stats: 'Integrasi Gudang + Showroom + Office',
    accent: 'slate'
  }
];

export const FAQS = [
  {
    question: 'Di mana lokasi persis Wira Logistics Centre dan bagaimana aksesibilitasnya?',
    answer: 'Wira Logistics Centre berlokasi strategis di Jalan Raya Medan - Tanjung Morawa KM 21, Deli Serdang, Sumatera Utara. Lokasi ini hanya berjarak 5 menit dari Gerbang Tol Kemiri / Lubuk Pakam dan 10 menit dari Gerbang Tol Tanjung Morawa, dengan akses cepat ke Bandara Internasional Kualanamu (15-20 menit) dan Pelabuhan Peti Kemas Belawan (30-35 menit via tol).'
  },
  {
    question: 'Apakah unit gudang di Wira Logistics Centre bisa dibeli atau disewa?',
    answer: 'Kami melayani kedua skema: pembelian unit (Jual) dengan sertifikat SHGB Murni per kavling yang siap diproses AJB, maupun penyewaan (Sewa) dengan tenor tahunan atau bulanan yang fleksibel dan negotiable untuk mendukung cash flow operasional bisnis Anda.'
  },
  {
    question: 'Apa yang dimaksud dengan konsep 9-in-1 di Wira Logistics Centre?',
    answer: 'Konsep 9-in-1 adalah fleksibilitas rancang bangun unit multiguna yang dapat difungsikan untuk 9 kebutuhan bisnis sekaligus: Gudang (Warehouse), Bengkel (Workshop), Showroom pamer produk, Studio Kantor mezzanine, Industri Kecil/Manufaktur Ringan, Ritel/Grosir, Pusat Distribusi (Hub), Terminal Logistik (Cross-Docking), dan Depo Penyimpanan/Fleet Staging.'
  },
  {
    question: 'Berapa lebar jalan kawasan dan apakah muat untuk truk kontainer 40 feet?',
    answer: 'Jalan utama kawasan Wira Logistics Centre memiliki lebar ROW 24 meter dengan konstruksi perkerasan rigid beton bertulang heavy duty. Jalan klaster memiliki lebar ROW 14 hingga 16 meter, sehingga manuver trailer kontainer 40 ft dan truk tronton muatan penuh dapat berputar dan berpapasan dengan sangat leluasa.'
  },
  {
    question: 'Bagaimana status legalitas dan perizinan properti?',
    answer: 'Seluruh properti berstatus Sertifikat Hak Guna Bangunan (SHGB) Murni yang sudah pecah per masing-masing kavling dan siap langsung untuk proses Akta Jual Beli (AJB) di hadapan PPAT. Bangunan dan kawasan juga mengantongi Persetujuan Bangunan Gedung (PBG) serta izin tata ruang peruntukan pergudangan/industri.'
  },
  {
    question: 'Apakah kawasan aman dari premanisme dan pungutan kuli liar?',
    answer: 'Ya, 100% aman. Kawasan Wira Logistics Centre menerapkan One Gate System dengan pos keamanan 24 jam dan pengawasan CCTV terpadu. Kawasan dikelola oleh Estate Management resmi Wiraland Property Group, menjamin lingkungan operasional yang tertib, bebas premanisme, bebas pungli, dan tanpa paksaan kuli bongkar liar.'
  },
  {
    question: 'Berapa luas kavling industri yang tersedia untuk kebutuhan khusus (Build-to-Suit)?',
    answer: 'Untuk korporasi yang membutuhkan fasilitas berspesifikasi kustom, kami menyediakan kavling industri siap bangun mulai dari 450 m² hingga 6.000 m² (dan dapat digabungkan). Kami juga siap bekerjasama dalam skema Build-to-Suit maupun Build-to-Lease jangka panjang.'
  },
  {
    question: 'Bagaimana cara menjadwalkan kunjungan survey lokasi fisik?',
    answer: 'Anda dapat menjadwalkan survey lokasi dengan mengisi formulir survey di website ini atau langsung menghubungi Sales Hotline Wira Logistics Centre di +62 812-6330-0500. Tim Estate Management kami siap mendampingi kunjungan Anda pada hari Senin - Sabtu pukul 08:30 - 18:00 WIB.'
  }
];
