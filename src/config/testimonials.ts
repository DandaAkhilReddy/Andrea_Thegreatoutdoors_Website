export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Michael & Sarah Johnson',
    location: 'Houston, TX',
    rating: 5,
    text: 'The Great Outdoors completely transformed our backyard. The patio and pergola they built exceeded our expectations. The craftsmanship is incredible and their attention to detail is unmatched. We practically live outside now!',
    service: 'Patios & Pergolas',
    date: '2025-11',
  },
  {
    id: '2',
    name: 'David Martinez',
    location: 'Katy, TX',
    rating: 5,
    text: 'We hired them for an outdoor kitchen and fire pit combo. From design to completion, the team was professional, on time, and the quality of work is outstanding. Best investment we\'ve made in our home.',
    service: 'Outdoor Kitchens',
    date: '2025-09',
  },
  {
    id: '3',
    name: 'Jennifer Williams',
    location: 'Sugar Land, TX',
    rating: 5,
    text: 'The team built us the most beautiful deck with integrated lighting. They listened to exactly what we wanted and delivered beyond our dreams. Highly recommend to anyone looking for quality outdoor work.',
    service: 'Decks',
    date: '2025-08',
  },
  {
    id: '4',
    name: 'Robert & Lisa Chen',
    location: 'Pearland, TX',
    rating: 5,
    text: 'The hardscaping work they did on our property is phenomenal. New retaining walls, walkways, and a stunning fire pit area. Our neighbors are jealous! The team was respectful of our property and cleaned up perfectly every day.',
    service: 'Hardscapes & Fire Pits',
    date: '2025-07',
  },
  {
    id: '5',
    name: 'Amanda Foster',
    location: 'Spring, TX',
    rating: 5,
    text: 'From the first consultation to the final walkthrough, the experience was exceptional. Our new pergola and patio are absolutely gorgeous. The cedar work is stunning and the stone patio is flawless.',
    service: 'Pergolas & Patios',
    date: '2025-06',
  },
  {
    id: '6',
    name: 'Thomas & Maria Rodriguez',
    location: 'Cypress, TX',
    rating: 5,
    text: 'We had a complete backyard renovation — patio, outdoor kitchen, and fire pit. The Great Outdoors managed everything seamlessly. It\'s like having a vacation resort in our own backyard now.',
    service: 'Complete Outdoor Living',
    date: '2025-10',
  },
];
