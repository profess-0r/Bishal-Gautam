import React from 'react';
import { PageRoute } from '../types';
import { PERSONAL_INFO } from '../data/content';
import { Mail, Phone, ArrowRight } from 'lucide-react';

interface MobileContactBarProps {
  currentPath: PageRoute;
  onNavigate: (path: PageRoute) => void;
}

export const MobileContactBar: React.FC<MobileContactBarProps> = ({
  currentPath,
  onNavigate,
}) => {
  // Completely hide on the Contact page to prevent duplication or covering the form
  if (currentPath === '/contact') {
    return null;
  }

  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#E5E5DE] px-4 py-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lg transition-transform duration-200"
      role="region"
      aria-label="Quick contact actions"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Quick Phone Action Link */}
        <a
          href={`tel:${PERSONAL_INFO.phoneRaw}`}
          className="inline-flex items-center justify-center p-2.5 rounded-xs text-[#0F172A] border border-[#CBD5E1] bg-[#FBFBF9] hover:bg-[#F3F4F0] active:bg-[#E5E5DE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A]"
          aria-label="Call Bishal Gautam directly"
        >
          <Phone className="w-4 h-4 text-[#0F172A]" />
        </a>

        {/* Primary Contact CTA */}
        <button
          onClick={() => {
            onNavigate('/contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold tracking-wider uppercase bg-[#0F172A] text-white hover:bg-[#1E293B] active:bg-[#020617] rounded-xs shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A]"
        >
          <span>Discuss an Opportunity</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
