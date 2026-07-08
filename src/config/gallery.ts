export interface GalleryImage {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

export const galleryCategories = ['All', 'Automated Pergolas', 'Patios', 'Pergolas', 'Outdoor Kitchens', 'Fire Pits', 'Decks'] as const;

export type GalleryCategory = typeof galleryCategories[number];

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80', thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75', alt: 'Custom stone patio with outdoor furniture', category: 'Patios', title: 'Stone Patio Retreat', description: 'Natural stone patio with custom seating area' },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80', thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=75', alt: 'Cedar pergola with warm evening lighting beside a pool', category: 'Pergolas', title: 'Cedar Pergola Oasis', description: 'Western red cedar pergola with evening lighting' },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80', thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=75', alt: 'Outdoor kitchen with granite countertops', category: 'Outdoor Kitchens', title: 'Gourmet Outdoor Kitchen', description: 'Full outdoor kitchen with granite island' },
  { id: 'g4', src: 'https://images.unsplash.com/photo-1757851704368-3ae8d337943d?w=1200&q=80', thumbnail: 'https://images.unsplash.com/photo-1757851704368-3ae8d337943d?w=600&q=75', alt: 'Stone fire pit surrounded by Adirondack chairs', category: 'Fire Pits', title: 'Gathering Fire Pit', description: 'Custom stone fire pit with built-in seating' },
  { id: 'g5', src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80', thumbnail: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=75', alt: 'Multi-level composite deck', category: 'Decks', title: 'Multi-Level Deck', description: 'Composite deck with multiple entertaining levels' },
  { id: 'g6', src: '/images/services/automated-pergolas.jpg', thumbnail: '/images/services/automated-pergolas.jpg', alt: 'Automated louvered pergola over outdoor seating area', category: 'Automated Pergolas', title: 'Louvered Pergola Lounge', description: 'Motorized louvered pergola with adjustable shade' },
  { id: 'g7', src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80', thumbnail: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=75', alt: 'Modern home with decorative concrete walkway', category: 'Patios', title: 'Stamped Concrete Elegance', description: 'Decorative concrete and paver walkway design' },
  { id: 'g8', src: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1200&q=80', thumbnail: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600&q=75', alt: 'Vine-covered pergola and courtyard patio at night', category: 'Pergolas', title: 'Outdoor Living Room', description: 'Pergola-covered outdoor living space' },
  { id: 'g9', src: '/images/services/outdoor-kitchens.jpg', thumbnail: '/images/services/outdoor-kitchens.jpg', alt: 'Outdoor kitchen with stone bar seating', category: 'Outdoor Kitchens', title: 'Kitchen Bar Area', description: 'Outdoor bar with built-in grill station' },
  { id: 'g10', src: 'https://images.unsplash.com/photo-1778439916592-5ae67d27fb88?w=1200&q=80', thumbnail: 'https://images.unsplash.com/photo-1778439916592-5ae67d27fb88?w=600&q=75', alt: 'Modern circular fire table on patio', category: 'Fire Pits', title: 'Modern Fire Table', description: 'Sleek fire table for contemporary spaces' },
  { id: 'g11', src: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=1200&q=80', thumbnail: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=600&q=75', alt: 'Wood pool deck glowing at sunset', category: 'Decks', title: 'Illuminated Deck', description: 'Hardwood pool deck glowing at sunset' },
  { id: 'g12', src: '/images/services/pergolas.jpg', thumbnail: '/images/services/pergolas.jpg', alt: 'Automated pergola with integrated LED lighting at dusk', category: 'Automated Pergolas', title: 'Evening Under the Louvers', description: 'Automated pergola with integrated lighting and rain protection' },
];
