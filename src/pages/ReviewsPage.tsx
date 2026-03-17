import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { staggerContainer, staggerItem, fadeInUp } from '@/design-system/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { testimonials } from '@/config/testimonials';
import { SEOHead } from '@/components/sections/SEOHead';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { CTABanner } from '@/components/sections/CTABanner';

export default function ReviewsPage() {
  const { ref, animate } = useScrollAnimation();
  const summaryAnimation = useScrollAnimation();
  const avgRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <>
      <SEOHead title="Customer Reviews" description="Read what our customers say about The Great Outdoors. 5-star rated outdoor living specialists in Houston, TX." path="/reviews" />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-darkwood/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-wider uppercase">Reviews</h1>
          <p className="font-body text-lg text-white/80 mt-4">Hear from our happy homeowners</p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-sand">
        <motion.div
          ref={summaryAnimation.ref}
          initial="hidden"
          animate={summaryAnimation.animate}
          variants={fadeInUp}
          className="max-w-md mx-auto text-center"
        >
          <div className="flex justify-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-cedar text-cedar" />
            ))}
          </div>
          <p className="font-display text-4xl text-darkwood">{avgRating.toFixed(1)}</p>
          <p className="font-body text-stone text-sm mt-1">Based on {testimonials.length} reviews</p>
        </motion.div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-darkwood">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Customer Stories" subtitle="Real experiences from real homeowners." light />
          <motion.div
            ref={ref}
            initial="hidden"
            animate={animate}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={staggerItem}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner title="Join Our Happy Customers" subtitle="Experience the difference quality craftsmanship makes." />
    </>
  );
}
