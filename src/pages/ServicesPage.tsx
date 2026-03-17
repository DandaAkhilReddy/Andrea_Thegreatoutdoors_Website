import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/design-system/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { services } from '@/config/services';
import { SEOHead } from '@/components/sections/SEOHead';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/sections/CTABanner';

const serviceImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  'https://images.unsplash.com/photo-1600573472591-ee6981cf81f6?w=800&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
];

export default function ServicesPage() {
  const { ref, animate } = useScrollAnimation();

  return (
    <>
      <SEOHead title="Our Services" description="Explore our full range of outdoor living services: patios, pergolas, outdoor kitchens, fire pits, decks, and hardscapes." path="/services" />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-darkwood/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-wider uppercase">Our Services</h1>
          <p className="font-body text-lg text-white/80 mt-4">Expert craftsmanship for every outdoor project</p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-padding bg-sand">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="What We Build" subtitle="From intimate patios to complete outdoor living transformations." />
          <motion.div ref={ref} initial="hidden" animate={animate} variants={staggerContainer} className="space-y-12">
            {services.map((service, i) => (
              <motion.div key={service.id} variants={staggerItem}>
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}>
                  <div className="lg:w-1/2">
                    <img src={serviceImages[i]} alt={service.title} className="w-full h-72 lg:h-full object-cover" loading="lazy" />
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center text-cedar">
                        <ServiceIcon service={service.id} className="w-8 h-8" />
                      </div>
                      <h3 className="font-display text-3xl tracking-wider text-darkwood uppercase">{service.title}</h3>
                    </div>
                    <p className="font-body text-stone leading-relaxed mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.slice(0, 4).map((f) => (
                        <span key={f} className="px-3 py-1 rounded-full bg-sand text-cedar font-body text-xs font-medium">{f}</span>
                      ))}
                    </div>
                    <Link to={`/services/${service.slug}`}>
                      <Button variant="outline" size="md" className="gap-2 w-fit">
                        View Details <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
