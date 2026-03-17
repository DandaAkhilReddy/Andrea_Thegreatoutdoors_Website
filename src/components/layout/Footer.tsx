import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { services } from '@/config/services';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkwood-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="font-display text-2xl tracking-widest text-white mb-2">
              THE GREAT OUTDOORS
            </h3>
            <p className="font-body text-xs text-cedar-light tracking-[0.3em] uppercase mb-4">
              Patios and More
            </p>
            <p className="font-body text-white/60 text-sm leading-relaxed">
              {siteConfig.tagline}. Expert outdoor living specialists serving the Greater Houston
              area.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cedar transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cedar transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl tracking-wider mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Reviews', 'Contact'].map((label) => (
                <li key={label}>
                  <Link
                    to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                    className="font-body text-sm text-white/60 hover:text-cedar-light transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl tracking-wider mb-4">OUR SERVICES</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="font-body text-sm text-white/60 hover:text-cedar-light transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl tracking-wider mb-4">CONTACT US</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-3 font-body text-sm text-white/60 hover:text-cedar-light transition-colors"
                >
                  <Phone className="w-4 h-4 text-cedar-light shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 font-body text-sm text-white/60 hover:text-cedar-light transition-colors"
                >
                  <Mail className="w-4 h-4 text-cedar-light shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-white/60">
                <MapPin className="w-4 h-4 text-cedar-light shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.city}, {siteConfig.address.state}
                </span>
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-white/60">
                <Clock className="w-4 h-4 text-cedar-light shrink-0 mt-0.5" />
                <div>
                  <p>{siteConfig.hours.weekday}</p>
                  <p>{siteConfig.hours.saturday}</p>
                  <p>{siteConfig.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-white/40">
            &copy; {currentYear} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/30">Serving the Greater Houston Area</p>
        </div>
      </div>
    </footer>
  );
}
