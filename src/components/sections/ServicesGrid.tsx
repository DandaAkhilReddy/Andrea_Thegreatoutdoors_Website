import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/design-system/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { services } from '@/config/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card3D } from '@/components/ui/Card3D';
import { ServiceIcon } from '@/components/ui/ServiceIcon';

export function ServicesGrid() {
  const { ref, animate } = useScrollAnimation();

  return (
    <section className="section-padding bg-sand">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="What We Build"
          subtitle="From intimate patios to complete outdoor living spaces, we bring your backyard vision to life with expert craftsmanship."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={animate}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={staggerItem}>
              <Link to={`/services/${service.slug}`}>
                <Card3D className="h-full">
                  <div className="p-8 flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 rounded-2xl bg-sand flex items-center justify-center mb-6 text-cedar">
                      <ServiceIcon service={service.id} className="w-12 h-12" />
                    </div>
                    <div className="h-1 w-12 bg-cedar rounded-full mb-4" />
                    <h3 className="font-display text-2xl tracking-wider text-darkwood mb-3 uppercase">
                      {service.shortTitle}
                    </h3>
                    <p className="font-body text-stone text-sm leading-relaxed flex-1">
                      {service.shortDescription}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-cedar font-body font-semibold text-sm group">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card3D>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
