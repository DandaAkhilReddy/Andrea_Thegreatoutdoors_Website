import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/utils/cn';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-darkwood/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none">
              <span className="font-display text-2xl md:text-3xl text-white tracking-widest">
                THE GREAT OUTDOORS
              </span>
              <span className="font-body text-[10px] md:text-xs text-cedar-light tracking-[0.3em] uppercase">
                Patios and More
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'font-body text-sm font-medium tracking-wide uppercase transition-colors relative group',
                    location.pathname === link.path
                      ? 'text-cedar-light'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-0.5 bg-cedar transition-all duration-300',
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              ))}
              <a href={`tel:${siteConfig.phoneRaw}`}>
                <Button variant="primary" size="sm" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Free Estimate
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
