import React from 'react';
import { PageRoute } from '../types';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

interface FooterProps {
  onNavigate: (path: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const navItems: { label: string; path: PageRoute }[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Expertise', path: '/expertise' },
    { label: 'Approach', path: '/approach' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#0F172A] text-[#E2E8F0] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl font-medium tracking-tight text-white block">
              BISHAL GAUTAM
            </span>
            <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-medium">
              Sales & Marketing · Business Development · Business Expansion
            </p>
            <p className="text-sm text-[#CBD5E1] leading-relaxed max-w-md pt-2">
              A commercial perspective focused on identifying strategic opportunities, building
              valuable relationships, and strengthening customer acquisition for sustainable growth.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#94A3B8]">
              <MapPin className="w-3.5 h-3.5 shrink-0 text-[#94A3B8]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => {
                      onNavigate(item.path);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#E2E8F0] hover:text-white transition-colors duration-150 inline-flex items-center gap-1 group focus:outline-none focus-visible:underline"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="block text-xs text-[#94A3B8] mb-0.5">Email</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-white hover:text-[#38BDF8] transition-colors inline-flex items-center gap-1.5 focus:outline-none focus-visible:underline"
                >
                  <Mail className="w-4 h-4 text-[#94A3B8]" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>
              <div>
                <span className="block text-xs text-[#94A3B8] mb-0.5">Phone</span>
                <a
                  href={`tel:${PERSONAL_INFO.phoneRaw}`}
                  className="text-white hover:text-[#38BDF8] transition-colors inline-flex items-center gap-1.5 focus:outline-none focus-visible:underline"
                >
                  <Phone className="w-4 h-4 text-[#94A3B8]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/in/bishalgautam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-white transition-colors border border-[#334155] rounded-xs px-3 py-1.5 hover:border-[#64748B]"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {currentYear} Bishal Gautam. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Kathmandu, Nepal</span>
            <span aria-hidden="true">·</span>
            <span>Independent Professional Brand</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
