# The Great Outdoors - Patios and More

> **Building Backyard Destinations**

Premium website for The Great Outdoors, a Houston-based outdoor living specialist building patios, pergolas, outdoor kitchens, fire pits, decks, and hardscapes.

## Tech Stack

- **React 19** + **TypeScript** + **Vite 8**
- **Tailwind CSS v4** with custom brand theme
- **Framer Motion** for scroll animations, parallax, and 3D card effects
- **React Router v7** with lazy-loaded routes
- **React Hook Form** + **Zod** for validated contact form
- **Embla Carousel** for testimonial slider
- **React Compare Slider** for before/after project showcases

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services grid, stats, featured projects, testimonials, process timeline, CTA |
| About | `/about` | Company story, values, team stats |
| Services | `/services` | All 6 service categories with descriptions |
| Service Detail | `/services/:slug` | Individual service with features and gallery |
| Gallery | `/gallery` | Filterable masonry grid with lightbox |
| Reviews | `/reviews` | Rating summary and testimonial cards |
| Contact | `/contact` | Validated form, contact info, business hours |

## Services

- Patios
- Pergolas
- Outdoor Kitchens
- Fire Pits
- Decks
- Hardscapes

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type check + production build
npm run build

# Preview production build
npm run preview
```

## Deployment

Deployed as a **Render Static Site** with auto-deploy from `main`.

- Build command: `npm install && npm run build`
- Publish directory: `./dist`
- SPA rewrite: `/* -> /index.html`
- Node version: `20.18.0`

See [`render.yaml`](render.yaml) for full configuration.

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Cedar Brown | `#8B5A2B` | Primary accent |
| Dark Wood | `#4A2C1D` | Headers, dark backgrounds |
| Forest Green | `#2F5D3A` | CTAs, highlights |
| Pine Green | `#3F7A47` | Secondary green |
| Stone Gray | `#7A7A7A` | Body text |
| Sand | `#F3EFE7` | Light backgrounds |

## Fonts

- **Bebas Neue** — Headlines
- **Montserrat** — Body text

## Project Structure

```
src/
  components/
    layout/       # Navbar, Footer, PageLayout
    sections/     # HeroSection, ServicesGrid, StatsBar, etc.
    ui/           # Button, Card3D, GlassCard, AnimatedCounter, etc.
  config/         # Site data, services, testimonials, gallery
  design-system/  # Framer Motion animation variants
  hooks/          # useScrollAnimation, useParallax, useMediaQuery
  pages/          # HomePage, AboutPage, ServicesPage, etc.
  utils/          # cn() helper (clsx + twMerge)
```

## License

Private. All rights reserved.
