export interface Product {
  id: string;
  name: string;
  category: 'Beds' | 'Tables' | 'Chairs' | 'Decor';
  description: string;
  price: string;
  image: string;
  dimensions: string;
  material: string;
  leadTime: string;
  featured?: boolean;
  bestseller?: boolean;
  tag?: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'prod-chair-1',
    name: 'Spindle Back Oak & Black Dining Chair',
    category: 'Chairs',
    description: 'A timeless architectural dining chair handcrafted from solid white oak with hand-turned black lacquered spindles and a contoured comfort seat.',
    price: '$280',
    image: '/images/chair.jpg',
    dimensions: 'W 50cm × D 54cm × H 86cm',
    material: 'Solid European Oak & Ash',
    leadTime: 'In Stock (Ships in 2-3 days)',
    featured: true,
    bestseller: true,
    tag: 'Bestseller',
  },
  {
    id: 'prod-bed-1',
    name: 'Nordic Low-Profile Platform Bed',
    category: 'Beds',
    description: 'Serene Japanese-Scandinavian low platform bed frame with an extended floating solid wood border and seamless recessed joinery.',
    price: '$1,450',
    image: '/images/bed.jpg',
    dimensions: 'Queen (160×200cm) / King (180×200cm)',
    material: 'Solid Natural Oak & Pine Slats',
    leadTime: 'Made to Order (2 Weeks)',
    featured: true,
    bestseller: true,
    tag: 'Signature Piece',
  },
  {
    id: 'prod-table-1',
    name: 'Aura Sculptural Round Dining Table',
    category: 'Tables',
    description: 'A dramatic round dining table featuring a tactile fluted cylindrical base and beveled bullnose edge top designed for intimate gatherings.',
    price: '$1,120',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Dia 120cm × H 75cm (Seats 4-6)',
    material: 'Natural Rift White Oak Veneer & Solid Core',
    leadTime: 'In Stock (Ships in 3-5 days)',
    featured: true,
    bestseller: true,
    tag: 'Popular',
  },
  {
    id: 'prod-chair-2',
    name: 'Cloud Bouclé Sculptural Lounge Chair',
    category: 'Chairs',
    description: 'Curved silhouette armchair upholstered in tactile cream Italian bouclé fabric with concealed solid ash framing and plush foam cushioning.',
    price: '$690',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    dimensions: 'W 82cm × D 80cm × H 74cm',
    material: 'Bouclé Wool Blend & Solid Ash',
    leadTime: 'In Stock (Ships in 2-4 days)',
    featured: true,
    bestseller: true,
  },
  {
    id: 'prod-table-2',
    name: 'Monolith Travertine Stone Coffee Table',
    category: 'Tables',
    description: 'Dual-plinth geometric coffee table crafted from unfilled honed beige Roman travertine, showcasing natural earthy veining and raw texture.',
    price: '$890',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986b88?auto=format&fit=crop&w=800&q=80',
    dimensions: 'L 110cm × W 60cm × H 35cm',
    material: 'Honed Roman Travertine Stone',
    leadTime: 'Limited Edition (1 Week)',
    featured: true,
  },
  {
    id: 'prod-bed-2',
    name: 'Serena Upholstered Wingback Bed',
    category: 'Beds',
    description: 'Tailored luxury bed with a curved padded linen headboard, soft wrap-around side rails, and tapered blackened steel feet.',
    price: '$1,680',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    dimensions: 'King Size (190×210cm)',
    material: 'Textured Belgian Linen & Birch Frame',
    leadTime: 'Made to Order (2-3 Weeks)',
    featured: false,
    bestseller: true,
  },
  {
    id: 'prod-table-3',
    name: 'Column Solid Walnut Pedestal Side Table',
    category: 'Tables',
    description: 'Compact side table carved from American black walnut with smooth satin oil finish. Ideal beside low lounge chairs and platform beds.',
    price: '$340',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Dia 45cm × H 50cm',
    material: 'Solid American Black Walnut',
    leadTime: 'In Stock',
  },
  {
    id: 'prod-chair-3',
    name: 'Cane & Teak Modernist Armchair',
    category: 'Chairs',
    description: 'Mid-century homage crafted with natural French cane hand-woven backrest, sculpted teak arms, and charcoal linen drop-in seat cushion.',
    price: '$490',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
    dimensions: 'W 64cm × D 68cm × H 78cm',
    material: 'Plantation Teak & Natural Rattan Cane',
    leadTime: 'In Stock (Ships in 2-4 days)',
  },
  {
    id: 'prod-bed-3',
    name: 'Kyoto Minimalist Ash Floating Bed',
    category: 'Beds',
    description: 'Floating visual architecture with integrated cantilevered bedside ledges and slatted headboard allowing ambient backlighting.',
    price: '$1,590',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Queen (165×210cm)',
    material: 'Solid European Ash',
    leadTime: 'Made to Order (2 Weeks)',
  },
];
