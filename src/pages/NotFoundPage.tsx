import React from 'react';
import { PageRoute } from '../types';
import { ArrowLeft, Home, Compass, Mail } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full py-28 sm:py-36 bg-[#FBFBF9] border-b border-[#EBEBE6]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[#64748B]">
          404 · Page Not Found
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#0F172A] font-normal tracking-tight">
          The requested page could not be located.
        </h1>
        <p className="text-base text-[#4B5563] leading-relaxed font-light max-w-lg mx-auto">
          The page or resource you are looking for has been moved or does not exist. Please navigate
          to one of the main sections of Bishal Gautam's website.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-[#1E293B] rounded-xs transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={() => onNavigate('/expertise')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase border border-[#CBD5E1] text-[#0F172A] hover:bg-white rounded-xs transition-colors"
          >
            <Compass className="w-4 h-4 text-[#64748B]" />
            <span>Explore Expertise</span>
          </button>

          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase border border-[#CBD5E1] text-[#0F172A] hover:bg-white rounded-xs transition-colors"
          >
            <Mail className="w-4 h-4 text-[#64748B]" />
            <span>Contact Bishal</span>
          </button>
        </div>
      </div>
    </div>
  );
};
