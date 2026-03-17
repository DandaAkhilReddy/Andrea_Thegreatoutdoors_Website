import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/utils/cn';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; path: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          <div className="absolute inset-0 bg-darkwood-deep/98 backdrop-blur-md" />
          <motion.nav
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="relative flex flex-col items-center justify-center h-full gap-6 px-6"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
              >
                <Link
                  to={link.path}
                  onClick={onClose}
                  className={cn(
                    'font-display text-3xl tracking-widest uppercase transition-colors',
                    location.pathname === link.path
                      ? 'text-cedar'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col items-center gap-4"
            >
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2 text-cedar-light font-body font-semibold text-lg"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-white/60 font-body text-sm"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </a>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
