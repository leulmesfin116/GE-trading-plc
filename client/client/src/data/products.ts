export interface Product {
  id: string;
  name: string;
  category: 'Agricultural' | 'Industrial & Machinery' | 'Construction' | 'Consumer Goods';
  description: string;
  icon: string;
  origin: string;
  moq: string;
  leadTime: string;
  grade: string;
  featured?: boolean;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'prod-1',
    name: 'Ethiopian Yirgacheffe Arabica Coffee',
    category: 'Agricultural',
    description: 'Specialty Grade 1 washed Arabica coffee beans boasting intense floral aroma, bright citrus acidity, and sweet berry undertones.',
    icon: '☕',
    origin: 'Ethiopia (Yirgacheffe)',
    moq: '1 Container (19.2 MT)',
    leadTime: '14 - 21 Days',
    grade: 'Specialty Grade 1',
    featured: true,
  },
  {
    id: 'prod-2',
    name: 'Natural Whitish Sesame Seeds',
    category: 'Agricultural',
    description: 'Humera and Wollega type sesame seeds with minimum 52% oil content and 99.5% purity, thoroughly cleaned and machine sorted.',
    icon: '🌱',
    origin: 'East Africa',
    moq: '20 MT',
    leadTime: '10 - 15 Days',
    grade: 'Purity 99.5%',
    featured: true,
  },
  {
    id: 'prod-3',
    name: 'High-Tensile Deformed Steel Rebars',
    category: 'Construction',
    description: 'Standard Grade 60 (BS 4449 / ASTM A615) reinforced steel bars for heavy infrastructure, skyscrapers, and industrial foundations.',
    icon: '🏗️',
    origin: 'Certified Mills',
    moq: '50 MT',
    leadTime: '7 - 14 Days',
    grade: 'Grade 60 / Fe 500',
    featured: true,
  },
  {
    id: 'prod-4',
    name: 'Heavy Duty Hydraulic Excavators',
    category: 'Industrial & Machinery',
    description: '30-ton class heavy crawler excavators equipped with reinforced boom, fuel-efficient turbo diesel engines, and advanced hydraulic controls.',
    icon: '🚜',
    origin: 'Global OEM Partners',
    moq: '1 Unit',
    leadTime: '20 - 30 Days',
    grade: 'Tier 3 / Tier 4 Final',
    featured: true,
  },
  {
    id: 'prod-5',
    name: 'Ordinary Portland Cement (CEM I 42.5N)',
    category: 'Construction',
    description: 'High-strength premium Portland cement manufactured strictly conforming to EN 197-1 for commercial concrete works.',
    icon: '🧱',
    origin: 'Regional & Imported',
    moq: '100 MT',
    leadTime: '5 - 10 Days',
    grade: 'CEM I 42.5N',
  },
  {
    id: 'prod-6',
    name: 'Red Kidney Beans & Pulses',
    category: 'Agricultural',
    description: 'Machine-cleaned, uniform speckled and red kidney beans, high in protein and free from foreign matter or pest damage.',
    icon: '🫘',
    origin: 'Rift Valley Basin',
    moq: '24 MT',
    leadTime: '10 - 14 Days',
    grade: 'Export Standard A',
  },
  {
    id: 'prod-7',
    name: 'Industrial Power Generators (150-1000 kVA)',
    category: 'Industrial & Machinery',
    description: 'Silent canopy diesel power generators equipped with Cummins/Perkins engines and digital ATS control systems for uninterrupted power.',
    icon: '⚡',
    origin: 'Certified Assembly',
    moq: '1 Unit',
    leadTime: '15 - 25 Days',
    grade: 'ISO 8528 Compliant',
  },
  {
    id: 'prod-8',
    name: 'Refined Pure Sunflower Oil (Bulk & Bottled)',
    category: 'Consumer Goods',
    description: 'Triple-refined, 100% pure sunflower cooking oil with zero cholesterol and enriched with Vitamin A & D for commercial distribution.',
    icon: '🌻',
    origin: 'Imported Grade',
    moq: '500 Cartons / 20 MT Bulk',
    leadTime: '14 - 20 Days',
    grade: 'Food Grade Premium',
    featured: true,
  },
  {
    id: 'prod-9',
    name: 'Polished Porcelain Commercial Floor Tiles',
    category: 'Construction',
    description: 'Glazed porcelain floor tiles in sizes 60x60cm and 80x80cm, featuring high scratch resistance and non-slip nano-finish.',
    icon: '🏛️',
    origin: 'Imported',
    moq: '1,000 Sq. Meters',
    leadTime: '14 - 21 Days',
    grade: 'Class 1 Commercial',
  },
];
