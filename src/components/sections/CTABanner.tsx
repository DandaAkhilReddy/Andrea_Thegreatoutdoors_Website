import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUp } from '@/design-system/animations';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = 'Ready to Transform Your Backyard?',
  subtitle = "Get a free consultation and estimate. Let's build your dream outdoor space together.",
}: CTABannerProps) {
  const { ref, animate } = useScrollAnimation();

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-darkwood/85" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={animate}
        variants={fadeInUp}
        className="relative z-10 max-w-4xl mx-auto text-center px-4"
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-wider uppercase">
          {title}
        </h2>
        <p className="font-body text-lg text-white/80 mt-4 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${siteConfig.phoneRaw}`}>
            <Button variant="primary" size="lg" className="gap-2">
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </Button>
          </a>
          <Link to="/contact">
            <Button variant="ghost" size="lg">
              Send Us a Message
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
