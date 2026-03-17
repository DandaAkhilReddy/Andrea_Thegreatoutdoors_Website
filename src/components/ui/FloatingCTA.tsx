import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/utils/cn';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const handleScroll = (): void => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible &&
        (isMobile ? (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-cedar p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
          >
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 text-white font-body font-semibold text-lg"
            >
              <Phone className="w-5 h-5 animate-pulse" />
              Call for Free Estimate
            </a>
          </motion.div>
        ) : (
          <motion.a
            href={`tel:${siteConfig.phoneRaw}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'fixed bottom-8 right-8 z-50',
              'flex items-center gap-3 px-6 py-4 rounded-full',
              'bg-cedar text-white font-body font-semibold shadow-2xl',
              'hover:bg-cedar-dark transition-colors'
            )}
          >
            <Phone className="w-5 h-5" />
            <span>Get Free Estimate</span>
          </motion.a>
        ))}
    </AnimatePresence>
  );
}
