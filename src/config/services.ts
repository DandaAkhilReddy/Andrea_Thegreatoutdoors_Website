export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  features: string[];
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 'patios',
    slug: 'patios',
    title: 'Custom Patios',
    shortTitle: 'Patios',
    description: 'Transform your backyard with a beautifully designed custom patio. We use premium materials including natural stone, pavers, and stamped concrete to create outdoor living spaces that are both functional and stunning. Every patio we build is engineered for durability and designed to complement your home\'s architecture.',
    shortDescription: 'Beautiful custom patios built with premium stone, pavers, and stamped concrete for the perfect outdoor living space.',
    features: ['Natural Stone & Pavers', 'Stamped Concrete', 'Custom Designs', 'Drainage Solutions', 'Built-in Seating', 'Lighting Integration'],
    icon: 'patios',
    image: '/images/services/patios.jpg',
  },
  {
    id: 'pergolas',
    slug: 'pergolas',
    title: 'Cedar Pergolas',
    shortTitle: 'Pergolas',
    description: 'Our handcrafted cedar pergolas provide elegant shade and define your outdoor living area with timeless style. Built from premium western red cedar, each pergola is custom designed to match your vision — from classic open-top designs to louvered roof systems for complete weather protection.',
    shortDescription: 'Handcrafted cedar pergolas that provide elegant shade and define your outdoor space with timeless style.',
    features: ['Western Red Cedar', 'Custom Dimensions', 'Louvered Options', 'Attached or Freestanding', 'Stain & Seal Included', 'Fan & Light Ready'],
    icon: 'pergolas',
    image: '/images/services/pergolas.jpg',
  },
  {
    id: 'outdoor-kitchens',
    slug: 'outdoor-kitchens',
    title: 'Outdoor Kitchens',
    shortTitle: 'Outdoor Kitchens',
    description: 'Take your entertaining to the next level with a fully equipped outdoor kitchen. From built-in grills and smokers to refrigerators and sinks, we design and build complete outdoor cooking stations with premium countertops, custom cabinetry, and all the amenities you need.',
    shortDescription: 'Fully equipped outdoor kitchens with built-in grills, countertops, and all the amenities for perfect entertaining.',
    features: ['Built-in Grills & Smokers', 'Granite Countertops', 'Outdoor Refrigeration', 'Custom Cabinetry', 'Plumbing & Gas Lines', 'Bar Seating Areas'],
    icon: 'outdoor-kitchens',
    image: '/images/services/outdoor-kitchens.jpg',
  },
  {
    id: 'fire-pits',
    slug: 'fire-pits',
    title: 'Fire Pits & Fireplaces',
    shortTitle: 'Fire Pits',
    description: 'Create a warm gathering spot with a custom fire pit or outdoor fireplace. Whether you prefer the rustic charm of a natural stone fire pit or the elegance of a full outdoor fireplace, we build features that become the centerpiece of your backyard.',
    shortDescription: 'Custom fire pits and outdoor fireplaces that create the perfect gathering spot in your backyard.',
    features: ['Natural Gas & Wood Burning', 'Stone & Brick Construction', 'Custom Seating Walls', 'Fire Tables', 'Outdoor Fireplaces', 'Safety Features'],
    icon: 'fire-pits',
    image: '/images/services/fire-pits.jpg',
  },
  {
    id: 'decks',
    slug: 'decks',
    title: 'Custom Decks',
    shortTitle: 'Decks',
    description: 'Expand your living space with a beautifully crafted deck. We work with premium composite and hardwood materials to build decks that resist weathering and look great for decades. Multi-level designs, built-in benches, and integrated lighting create the perfect outdoor retreat.',
    shortDescription: 'Premium composite and hardwood decks built to last with multi-level designs and integrated features.',
    features: ['Composite & Hardwood', 'Multi-Level Designs', 'Built-in Benches', 'Railing Systems', 'LED Lighting', 'Code Compliant'],
    icon: 'decks',
    image: '/images/services/decks.jpg',
  },
  {
    id: 'hardscapes',
    slug: 'hardscapes',
    title: 'Hardscapes',
    shortTitle: 'Hardscapes',
    description: 'Complete your outdoor vision with professional hardscaping. From retaining walls and walkways to driveways and garden borders, we handle every aspect of landscape construction with precision craftsmanship and premium materials.',
    shortDescription: 'Professional hardscaping including retaining walls, walkways, driveways, and landscape construction.',
    features: ['Retaining Walls', 'Walkways & Paths', 'Driveway Pavers', 'Garden Borders', 'Drainage Systems', 'Landscape Lighting'],
    icon: 'hardscapes',
    image: '/images/services/hardscapes.jpg',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
