export interface GalleryImage {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

export const galleryCategories = ['All', 'Patios', 'Pergolas', 'Outdoor Kitchens', 'Fire Pits', 'Decks', 'Hardscapes'] as const;

export type GalleryCategory = typeof galleryCategories[number];

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: '/images/gallery/patio-1.jpg', thumbnail: '/images/gallery/patio-1.jpg', alt: 'Custom stone patio with outdoor furniture', category: 'Patios', title: 'Stone Patio Retreat', description: 'Natural stone patio with custom seating area' },
  { id: 'g2', src: '/images/gallery/pergola-1.jpg', thumbnail: '/images/gallery/pergola-1.jpg', alt: 'Cedar pergola with hanging lights', category: 'Pergolas', title: 'Cedar Pergola Oasis', description: 'Western red cedar pergola with string lighting' },
  { id: 'g3', src: '/images/gallery/kitchen-1.jpg', thumbnail: '/images/gallery/kitchen-1.jpg', alt: 'Outdoor kitchen with granite countertops', category: 'Outdoor Kitchens', title: 'Gourmet Outdoor Kitchen', description: 'Full outdoor kitchen with granite island' },
  { id: 'g4', src: '/images/gallery/firepit-1.jpg', thumbnail: '/images/gallery/firepit-1.jpg', alt: 'Stone fire pit with seating wall', category: 'Fire Pits', title: 'Gathering Fire Pit', description: 'Custom stone fire pit with built-in seating' },
  { id: 'g5', src: '/images/gallery/deck-1.jpg', thumbnail: '/images/gallery/deck-1.jpg', alt: 'Multi-level composite deck', category: 'Decks', title: 'Multi-Level Deck', description: 'Composite deck with multiple entertaining levels' },
  { id: 'g6', src: '/images/gallery/hardscape-1.jpg', thumbnail: '/images/gallery/hardscape-1.jpg', alt: 'Stone retaining wall and walkway', category: 'Hardscapes', title: 'Stone Retaining Wall', description: 'Natural stone retaining wall with integrated walkway' },
  { id: 'g7', src: '/images/gallery/patio-2.jpg', thumbnail: '/images/gallery/patio-2.jpg', alt: 'Stamped concrete patio', category: 'Patios', title: 'Stamped Concrete Elegance', description: 'Decorative stamped concrete patio design' },
  { id: 'g8', src: '/images/gallery/pergola-2.jpg', thumbnail: '/images/gallery/pergola-2.jpg', alt: 'Pergola with outdoor living room', category: 'Pergolas', title: 'Outdoor Living Room', description: 'Pergola-covered outdoor living space' },
  { id: 'g9', src: '/images/gallery/kitchen-2.jpg', thumbnail: '/images/gallery/kitchen-2.jpg', alt: 'Outdoor kitchen with bar seating', category: 'Outdoor Kitchens', title: 'Kitchen Bar Area', description: 'Outdoor bar with built-in grill station' },
  { id: 'g10', src: '/images/gallery/firepit-2.jpg', thumbnail: '/images/gallery/firepit-2.jpg', alt: 'Modern fire table on patio', category: 'Fire Pits', title: 'Modern Fire Table', description: 'Sleek gas fire table for contemporary spaces' },
  { id: 'g11', src: '/images/gallery/deck-2.jpg', thumbnail: '/images/gallery/deck-2.jpg', alt: 'Deck with pergola and lighting', category: 'Decks', title: 'Illuminated Deck', description: 'Hardwood deck with integrated LED lighting' },
  { id: 'g12', src: '/images/gallery/hardscape-2.jpg', thumbnail: '/images/gallery/hardscape-2.jpg', alt: 'Paver walkway through garden', category: 'Hardscapes', title: 'Garden Walkway', description: 'Paver stone walkway with landscape borders' },
];
