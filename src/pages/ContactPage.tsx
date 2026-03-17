import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { fadeInLeft, fadeInRight } from '@/design-system/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { siteConfig } from '@/config/site';
import { SEOHead } from '@/components/sections/SEOHead';
import { ContactForm } from '@/components/sections/ContactForm';

export default function ContactPage() {
  const { ref, animate } = useScrollAnimation();

  return (
    <>
      <SEOHead title="Contact Us" description="Get a free estimate for your outdoor living project. Call us or fill out our contact form. Serving the Greater Houston area." path="/contact" />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600573472591-ee6981cf81f6?w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-darkwood/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-wider uppercase">Contact Us</h1>
          <p className="font-body text-lg text-white/80 mt-4">Let&apos;s discuss your outdoor living project</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-sand">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={animate}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12"
          >
            {/* Form */}
            <motion.div variants={fadeInLeft} className="lg:col-span-3">
              <h2 className="font-display text-3xl tracking-wider text-darkwood uppercase mb-6">
                Send Us a Message
              </h2>
              <div className="h-1 w-16 bg-cedar rounded-full mb-8" />
              <ContactForm />
            </motion.div>

            {/* Info */}
            <motion.div variants={fadeInRight} className="lg:col-span-2">
              <h2 className="font-display text-3xl tracking-wider text-darkwood uppercase mb-6">
                Get In Touch
              </h2>
              <div className="h-1 w-16 bg-cedar rounded-full mb-8" />

              <div className="space-y-6">
                <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-cedar/10 flex items-center justify-center shrink-0 group-hover:bg-cedar group-hover:text-white transition-colors text-cedar">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-darkwood">Phone</p>
                    <p className="font-body text-stone">{siteConfig.phone}</p>
                    <p className="font-body text-sm text-cedar">Call for a free estimate!</p>
                  </div>
                </a>

                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-cedar/10 flex items-center justify-center shrink-0 group-hover:bg-cedar group-hover:text-white transition-colors text-cedar">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-darkwood">Email</p>
                    <p className="font-body text-stone">{siteConfig.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cedar/10 flex items-center justify-center shrink-0 text-cedar">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-darkwood">Location</p>
                    <p className="font-body text-stone">{siteConfig.address.city}, {siteConfig.address.state}</p>
                    <p className="font-body text-sm text-stone-light">Serving the Greater Houston Area</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cedar/10 flex items-center justify-center shrink-0 text-cedar">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-darkwood">Business Hours</p>
                    <p className="font-body text-stone text-sm">{siteConfig.hours.weekday}</p>
                    <p className="font-body text-stone text-sm">{siteConfig.hours.saturday}</p>
                    <p className="font-body text-stone text-sm">{siteConfig.hours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-md bg-sand-dark h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-stone-light mx-auto mb-2" />
                  <p className="font-body text-stone text-sm">Houston, TX Area</p>
                  <p className="font-body text-stone-light text-xs mt-1">Google Maps integration coming soon</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
