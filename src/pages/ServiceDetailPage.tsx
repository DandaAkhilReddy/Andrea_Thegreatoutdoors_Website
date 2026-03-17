import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/design-system/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getServiceBySlug, services } from '@/config/services';
import { SEOHead } from '@/components/sections/SEOHead';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { CTABanner } from '@/components/sections/CTABanner';

const heroImages: Record<string, string> = {
  patios: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
  pergolas: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
  'outdoor-kitchens': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
  'fire-pits': 'https://images.unsplash.com/photo-1600573472591-ee6981cf81f6?w=1920&q=80',
  decks: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
  hardscapes: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80',
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const detailsAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const relatedAnimation = useScrollAnimation();

  if (!service) return <Navigate to="/services" replace />;

  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <SEOHead title={service.title} description={service.description} path={`/services/${service.slug}`} />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroImages[service.slug] ?? heroImages.patios}')` }} />
        <div className="absolute inset-0 bg-darkwood/70" />
        <div className="relative z-10 text-center px-4">
          <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 text-white">
            <ServiceIcon service={service.id} className="w-12 h-12" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-wider uppercase">{service.title}</h1>
        </div>
      </section>

      {/* Back link */}
      <div className="bg-sand">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link to="/services" className="inline-flex items-center gap-2 font-body text-sm text-cedar hover:text-cedar-dark transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
        </div>
      </div>

      {/* Details */}
      <section className="section-padding bg-sand">
        <div className="max-w-6xl mx-auto">
          <motion.div ref={detailsAnimation.ref} initial="hidden" animate={detailsAnimation.animate} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeInLeft}>
              <h2 className="font-display text-3xl md:text-4xl tracking-wider text-darkwood uppercase mb-4">
                About This Service
              </h2>
              <div className="h-1 w-16 bg-cedar rounded-full mb-6" />
              <p className="font-body text-stone leading-relaxed text-lg">{service.description}</p>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={heroImages[service.slug] ?? heroImages.patios} alt={service.title} className="w-full h-[350px] object-cover" loading="lazy" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div ref={featuresAnimation.ref} initial="hidden" animate={featuresAnimation.animate}>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl tracking-wider text-darkwood uppercase text-center mb-8">
              What&apos;s Included
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature) => (
                <motion.div key={feature} variants={staggerItem} className="flex items-center gap-3 p-4 rounded-xl bg-sand">
                  <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-forest" />
                  </div>
                  <span className="font-body text-darkwood">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-sand-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div ref={relatedAnimation.ref} initial="hidden" animate={relatedAnimation.animate}>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl tracking-wider text-darkwood uppercase text-center mb-8">
              Related Services
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rs) => (
                <motion.div key={rs.id} variants={staggerItem}>
                  <Link to={`/services/${rs.slug}`} className="block bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 rounded-xl bg-sand flex items-center justify-center mx-auto mb-3 text-cedar">
                      <ServiceIcon service={rs.id} className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-xl tracking-wider text-darkwood uppercase">{rs.shortTitle}</h3>
                    <p className="font-body text-stone text-sm mt-2">{rs.shortDescription}</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTABanner title={`Ready for Your ${service.shortTitle} Project?`} subtitle="Get a free consultation and estimate today." />
    </>
  );
}
