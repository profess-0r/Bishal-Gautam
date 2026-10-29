import React from 'react';

interface HeroPortraitProps {
  className?: string;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Executive Framed Card */}
      <div className="bg-white border border-[#E2E8F0] p-2 sm:p-3 lg:p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Crisp Authentic Photograph */}
        <div className="relative aspect-[4/5] sm:aspect-[4/5] overflow-hidden bg-[#F8FAFC]">
          <img
            src="/assets/bishal_gautam_portrait.png"
            alt="Bishal Gautam — Sales, Marketing & Business Development Professional"
            className="w-full h-full object-cover object-top select-none"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={(e) => {
              // Direct fallback if path resolution fails
              e.currentTarget.src =
                '/assets/aistudio/d3eda0e9-cc48-4435-ac24-fa0d1f20df6f_f13b1b23.png';
            }}
          />
        </div>

        {/* Professional Details Bar */}
        <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] sm:text-xs font-mono">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#10B981] shrink-0"
              title="Available for commercial discussions"
            />
            <span className="font-semibold text-[#0F172A] tracking-tight">
              Bishal Gautam
            </span>
          </div>
          <span className="text-[#64748B] text-[10px] sm:text-[11px] uppercase tracking-wider hidden xs:inline">
            Kathmandu, NP
          </span>
        </div>
      </div>
    </div>
  );
};
