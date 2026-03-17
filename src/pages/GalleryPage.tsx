import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { staggerContainer, staggerItem, scaleIn } from '@/design-system/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { galleryImages, galleryCategories, type GalleryCategory, type GalleryImage } from '@/config/gallery';
import { SEOHead } from '@/components/sections/SEOHead';
import { CTABanner } from '@/components/sections/CTABanner';
import { cn } from '@/utils/cn';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const { ref, animate } = useScrollAnimation();

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <SEOHead title="Project Gallery" description="Browse our portfolio of completed outdoor living projects including patios, pergolas, outdoor kitchens, fire pits, decks, and hardscapes." path="/gallery" />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-darkwood/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-wider uppercase">Our Work</h1>
          <p className="font-body text-lg text-white/80 mt-4">Browse our portfolio of completed projects</p>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="section-padding bg-sand">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all cursor-pointer',
                  activeCategory === cat
                    ? 'bg-cedar text-white shadow-lg'
                    : 'bg-white text-stone hover:text-darkwood hover:shadow-md'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={animate}
            variants={staggerContainer}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  variants={staggerItem}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="break-inside-avoid cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-darkwood/0 group-hover:bg-darkwood/60 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                        <h3 className="font-display text-xl text-white tracking-wider uppercase">{image.title}</h3>
                        <p className="font-body text-sm text-white/80 mt-1">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Note about placeholder */}
          <p className="text-center font-body text-stone-light text-sm mt-12 italic">
            Project photos coming soon. Contact us to see our full portfolio.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="font-display text-2xl text-white tracking-wider uppercase">{selectedImage.title}</h3>
                <p className="font-body text-white/60 text-sm mt-1">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner title="Love What You See?" subtitle="Let's create something amazing for your backyard." />
    </>
  );
}
