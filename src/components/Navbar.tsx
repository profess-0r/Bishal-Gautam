import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPath: PageRoute;
  onNavigate: (path: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; path: PageRoute }[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Expertise', path: '/expertise' },
    { label: 'Approach', path: '/approach' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: PageRoute) => {
    setIsMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#E5E5E0] shadow-xs'
          : 'bg-[#FBFBF9] border-b border-[#EFEFEA]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => handleLinkClick('/')}
          className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A] rounded-sm py-1"
          aria-label="Bishal Gautam Home"
        >
          <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#0F172A] whitespace-nowrap block">
            BISHAL GAUTAM
          </span>
        </button>

        {/* Zone 2: Primary Nav Links (Single-line text with subtle hover effect) */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4B5563]"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A] rounded-sm ${
                  isActive
                    ? 'text-[#0F172A] font-semibold'
                    : 'text-[#4B5563] hover:text-[#0F172A]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#0F172A]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleLinkClick('/contact')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#0F172A] hover:bg-[#1E293B] active:bg-[#020617] rounded-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0F172A] whitespace-nowrap shrink-0"
          >
            Let's Talk
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-sm text-[#111827] hover:bg-[#F3F4F6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A]"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#111827]" />
            ) : (
              <Menu className="w-6 h-6 text-[#111827]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E5E0] bg-[#FBFBF9] px-6 py-6 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  className={`flex items-center justify-between text-left py-2 text-base font-medium transition-colors ${
                    isActive
                      ? 'text-[#0F172A] font-semibold pl-2 border-l-2 border-[#0F172A]'
                      : 'text-[#4B5563] hover:text-[#0F172A]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs text-[#0F172A] uppercase font-semibold">Active</span>}
                </button>
              );
            })}
            <div className="pt-4 border-t border-[#E5E5E0]">
              <button
                onClick={() => handleLinkClick('/contact')}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-wide uppercase text-white bg-[#0F172A] hover:bg-[#1E293B] rounded-sm transition-colors"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
