export type ProductCategory =
  | 'Woodworks'
  | 'Wardrobe'
  | 'Beds'
  | 'Kitchen Cabinets'
  | 'Shoe Racks'
  | 'Sofa / Coffee Tables'
  | 'Interior Design Finishing'
  | 'Dining Tables';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  dimensions: string;
  material: string;
  leadTime: string;
  featured?: boolean;
  bestseller?: boolean;
  tag?: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Woodworks',
  'Wardrobe',
  'Beds',
  'Kitchen Cabinets',
  'Shoe Racks',
  'Sofa / Coffee Tables',
  'Interior Design Finishing',
  'Dining Tables',
];

export const PRODUCTS_DATA: Product[] = [
  // 1. WOODWORKS
  {
    id: 'prod-wood-1',
    name: 'Architectural Fluted Wall Paneling & Room Dividers',
    category: 'Woodworks',
    description: 'Precision milled solid oak and walnut acoustic slat wall panels and pivot room dividers crafted for luxury residences and executive suites.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Custom Scaled to Room Height',
    material: 'Natural White Oak / American Walnut',
    leadTime: 'Bespoke Fabrication (2-3 Weeks)',
    featured: true,
    bestseller: true,
    tag: 'Architectural Millwork',
  },
  {
    id: 'prod-wood-2',
    name: 'Bespoke Floating Credenza & Media Unit',
    category: 'Woodworks',
    description: 'Wall-mounted hardwood entertainment console with seamless continuous grain matching, soft-push drop-down slats, and concealed wire tracks.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
    dimensions: 'L 240cm × D 45cm × H 40cm',
    material: 'Rift-Cut Oak & Solid Brass Accents',
    leadTime: 'Made to Order (2 Weeks)',
    featured: false,
  },

  // 2. WARDROBE
  {
    id: 'prod-ward-1',
    name: 'Minimalist Walk-In Wardrobe System with Ambient LED',
    category: 'Wardrobe',
    description: 'Tailored floor-to-ceiling modular wardrobe featuring fluted glass doors, integrated vertical LED illumination, velvet jewelry drawers, and solid wood organizers.',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Custom Layout (Linear or L-Shaped)',
    material: 'Smoked Oak, Matte Aluminum, Fluted Glass',
    leadTime: 'Custom Commission (3-4 Weeks)',
    featured: true,
    bestseller: true,
    tag: 'Master Suite',
  },
  {
    id: 'prod-ward-2',
    name: 'Concealed Handle Hardwood Bedroom Wardrobe',
    category: 'Wardrobe',
    description: 'Full-height built-in wardrobe with soft-close bi-fold doors, deep hanging rails, multi-tier shoe shelves, and integrated linen baskets.',
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80',
    dimensions: 'W 200cm × D 60cm × H 260cm',
    material: 'European Ash & Natural Satin Finish',
    leadTime: 'Made to Order (2-3 Weeks)',
    featured: false,
  },

  // 3. BEDS
  {
    id: 'prod-bed-1',
    name: 'Nordic Low-Profile Solid Oak Platform Bed',
    category: 'Beds',
    description: 'Japanese-Scandinavian inspired low platform bed frame with an extended floating wood surround and recessed architectural joinery.',
    image: '/images/bed.jpg',
    dimensions: 'Queen (160×200cm) / King (180×200cm)',
    material: 'Solid European Oak & Pine Slats',
    leadTime: 'In Stock & Custom Sizing',
    featured: true,
    bestseller: true,
    tag: 'Signature Piece',
  },
  {
    id: 'prod-bed-2',
    name: 'Curved Linen Wingback Upholstered Bed',
    category: 'Beds',
    description: 'Tailored luxury bed with a curved padded headboard upholstered in natural Belgian linen, soft wrap-around side rails, and blackened oak legs.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    dimensions: 'King Size (190×210cm)',
    material: 'Textured Belgian Linen & Solid Birch Frame',
    leadTime: 'Made to Order (2 Weeks)',
    featured: false,
    bestseller: true,
  },

  // 4. KITCHEN CABINETS
  {
    id: 'prod-kitch-1',
    name: 'Contemporary Modular Kitchen Cabinetry & Granite Island',
    category: 'Kitchen Cabinets',
    description: 'Custom kitchen cabinetry suite featuring upper wall-hung units, polished granite stone countertop, stainless steel double-basin sink, and brushed metal handles.',
    image: '/images/kitchen.jpg',
    dimensions: 'L-Shaped Modular Architecture',
    material: 'Moisture-Resistant Cabinetry & Polished Granite',
    leadTime: 'Fabrication & Installation (2-3 Weeks)',
    featured: true,
    bestseller: true,
    tag: 'Turnkey Kitchen',
  },
  {
    id: 'prod-kitch-2',
    name: 'Warm Minimalist Pantry & Overhead Cabinet Units',
    category: 'Kitchen Cabinets',
    description: 'Clean slatted oak upper cabinets and tall pantry larders equipped with pull-out spice racks, inner organizers, and integrated under-cabinet strip lighting.',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Tailored to Kitchen Floorplan',
    material: 'Natural Oak Veneer & Marine-Grade Core',
    leadTime: 'Made to Order (2-3 Weeks)',
    featured: false,
  },

  // 5. SHOE RACKS
  {
    id: 'prod-shoe-1',
    name: 'Multi-Tier Solid Wood Vertical Shoe Tower & Top Caddy',
    category: 'Shoe Racks',
    description: 'Space-maximizing vertical shoe tower with alternating cantilevered shelves, high-capacity shoe tiers, and top storage cubby for keys, books, and entryway decor.',
    image: '/images/shoerack.jpg',
    dimensions: 'W 45cm × D 30cm × H 145cm',
    material: 'Solid European Beech / Natural White Oak',
    leadTime: 'In Stock & Custom Woods',
    featured: true,
    bestseller: true,
    tag: 'Entryway Design',
  },
  {
    id: 'prod-shoe-2',
    name: 'Tall Concealed Pivot-Door Shoe Storage Tower',
    category: 'Shoe Racks',
    description: 'Vertical space-saving shoe organizer with rotating angled tiers holding up to 36 pairs of shoes in a seamless minimalist exterior.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
    dimensions: 'W 75cm × D 35cm × H 180cm',
    material: 'Engineered Hardwood & Metal Sliders',
    leadTime: 'Made to Order (10-14 Days)',
    featured: false,
  },

  // 6. SOFA / COFFEE TABLES
  {
    id: 'prod-sofa-1',
    name: 'Sculptural Linen Curved Lounge Sofa',
    category: 'Sofa / Coffee Tables',
    description: 'Organic curved sofa upholstered in premium cream woven linen with deep feather-blend down cushions and internal kiln-dried hardwood structure.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    dimensions: 'L 260cm × D 105cm × H 76cm',
    material: 'Kiln-Dried Hardwood & Premium Linen Bouclé',
    leadTime: 'Made to Order (2-3 Weeks)',
    featured: true,
    bestseller: true,
    tag: 'Living Centerpiece',
  },
  {
    id: 'prod-table-coffee-1',
    name: 'Monolith Travertine & Oak Dual Coffee Table Set',
    category: 'Sofa / Coffee Tables',
    description: 'Twin nesting coffee tables combining honed Italian travertine stone with a low solid oak pedestal disk for balanced architectural symmetry.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986b88?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Travertine: 100×60×32cm | Oak: Dia 70×38cm',
    material: 'Honed Roman Travertine & Solid Oak',
    leadTime: 'In Stock (Ships in 3-5 days)',
    featured: true,
  },

  // 7. INTERIOR DESIGN FINISHING
  {
    id: 'prod-finish-1',
    name: 'Turnkey Residential Interior Fit-Out & Architectural Finishings',
    category: 'Interior Design Finishing',
    description: 'Full-scope bespoke interior wood finishing including custom ceiling coves, concealed door frames, acoustic wall treatments, and architectural crown mouldings.',
    image: '/images/hero.jpg',
    dimensions: 'Full Room / Entire Property Specifications',
    material: 'Hardwood Joinery, Natural Plaster, Custom Glass',
    leadTime: 'Turnkey Project Execution',
    featured: true,
    bestseller: true,
    tag: 'Master Finishing',
  },
  {
    id: 'prod-finish-2',
    name: 'Recessed Architectural Lighting & Oak Alcoves',
    category: 'Interior Design Finishing',
    description: 'Integrated drywall alcoves with bespoke oak display shelving, soft ambient warm backlighting, and flush-finish transitions.',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Custom Built to Architectural Plans',
    material: 'Drywall, White Oak & LED Diffusers',
    leadTime: 'Project Based',
    featured: false,
  },

  // 8. DINING TABLES
  {
    id: 'prod-dine-1',
    name: 'Aura Fluted Pedestal Round Oak Dining Table',
    category: 'Dining Tables',
    description: 'Dramatic round dining table featuring a tactile fluted cylindrical base and a beveled bullnose edge top designed for intimate gatherings and celebrations.',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Dia 135cm × H 75cm (Seats 6-8)',
    material: 'Solid European White Oak & Heavy Core',
    leadTime: 'In Stock & Custom Stains',
    featured: true,
    bestseller: true,
    tag: 'Dining Centerpiece',
  },
  {
    id: 'prod-dine-2',
    name: 'Grand Solid Timber Dining Table (8-10 Seater)',
    category: 'Dining Tables',
    description: 'Expansive solid hardwood dining slab supported by architectural trestle legs, hand-finished with organic matte protective oils preserving the natural grain.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
    dimensions: 'L 260cm × W 100cm × H 76cm',
    material: 'Solid European Oak / African Teak',
    leadTime: 'Made to Order (2-3 Weeks)',
    featured: true,
    tag: 'Family Dining',
  },
];
