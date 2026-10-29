import React from 'react';
import { PageRoute } from '../types';
import { PERSONAL_INFO } from '../data/content';
import { Mail, ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onNavigate: (path: PageRoute) => void;
  headline?: string;
  supportingText?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onNavigate,
  headline = 'Have a Business Opportunity Worth Discussing?',
  supportingText = "Whether you're exploring a new market, strengthening your sales approach, or looking to build valuable business relationships, let's start a conversation.",
}) => {
  return (
    <section className="bg-[#111827] text-white py-20 sm:py-24 border-t border-[#1F2937]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
        <div className="space-y-4 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-semibold">
            START A CONVERSATION
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
            {headline}
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl mx-auto font-light">
            {supportingText}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => {
              onNavigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase bg-white text-[#0F172A] hover:bg-[#F1F5F9] transition-colors rounded-xs shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
              'Business Discussion with Bishal Gautam'
            )}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase border border-[#4B5563] text-white hover:bg-[#1F2937] hover:border-[#6B7280] transition-colors rounded-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Mail className="w-4 h-4 text-[#94A3B8]" />
            <span>Email Me</span>
          </a>
        </div>

        <div className="pt-4 flex items-center justify-center gap-6 text-xs text-[#94A3B8]">
          <span>Kathmandu, Nepal</span>
          <span aria-hidden="true">·</span>
          <a
            href={`tel:${PERSONAL_INFO.phoneRaw}`}
            className="hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            {PERSONAL_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
