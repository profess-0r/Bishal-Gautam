import React from 'react';
import { PageRoute } from '../types';
import {
  PERSONAL_INFO,
  CORE_SPECIALTIES,
  APPROACH_PRINCIPLES,
  TARGET_AUDIENCES,
} from '../data/content';
import { CommercialProgressionArtwork } from '../components/CommercialProgressionArtwork';
import { CtaBanner } from '../components/CtaBanner';
import { ArrowRight, ChevronRight, ArrowUpRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* SECTION B: HERO — Left Text & Immediate CTAs, Right Architectural Progression Artwork */}
      <section className="border-b border-[#EBEBE6] bg-[#FBFBF9] pt-4 pb-8 sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Main 1st Viewport Grid: Left Text + Right Architectural Progression Artwork */}
          <div className="grid grid-cols-12 gap-5 sm:gap-8 lg:gap-14 items-center">
            {/* Left Column: Positioning, Headline, Supporting Statement & Immediate CTAs */}
            <div className="col-span-12 lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#4B5563]">
                <span>{PERSONAL_INFO.tagline}</span>
              </div>

              <h1 className="font-serif text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#0F172A] leading-[1.14] sm:leading-[1.15] text-balance">
                Turning Business Opportunities Into Growth.
              </h1>

              <p className="text-xs sm:text-base lg:text-lg text-[#4B5563] leading-relaxed max-w-xl font-light">
                {PERSONAL_INFO.heroSupporting}
              </p>

              {/* Primary & Secondary CTAs (Directly in text column — 100% visible in initial mobile viewport) */}
              <div className="pt-1 sm:pt-2">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-3.5 text-xs font-semibold tracking-wider uppercase bg-[#0F172A] text-white hover:bg-[#1E293B] active:bg-[#020617] rounded-xs transition-colors shadow-xs min-h-[46px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A]"
                  >
                    <span>{PERSONAL_INFO.primaryCta}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>

                  <button
                    onClick={() => onNavigate('/expertise')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-3.5 text-xs font-semibold tracking-wider uppercase border border-[#CBD5E1] text-[#0F172A] hover:bg-[#F3F4F0] transition-colors rounded-xs min-h-[46px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A]"
                  >
                    <span>{PERSONAL_INFO.secondaryCta}</span>
                    <ChevronRight className="w-4 h-4 text-[#64748B] shrink-0" />
                  </button>
                </div>

                {/* Strategic Alignment Badges */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-[#6B7280] pt-3 mt-3 border-t border-[#EFEFEA]">
                  <span>Based in {PERSONAL_INFO.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>B2B Commercial Development</span>
                  <span aria-hidden="true" className="hidden xs:inline">·</span>
                  <span className="hidden xs:inline">Strategic Relationship Focus</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Progression Artwork (No Tabs, No Dashboards) */}
            <div className="col-span-12 lg:col-span-5 mt-2 lg:mt-0">
              <CommercialProgressionArtwork />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: PROFESSIONAL INTRODUCTION */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#EBEBE6]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B] block">
              Perspective
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal tracking-tight leading-tight">
              {PERSONAL_INFO.introHeading}
            </h2>
            <div className="text-base sm:text-lg text-[#334155] leading-relaxed space-y-4 font-light">
              <p>
                Sustainable business growth is rarely the result of isolated tactics. It requires the
                disciplined alignment of market intelligence, customer acquisition, and structured
                commercial conversations. Rather than treating sales, marketing, and business
                development as independent silos, I approach them as an integrated commercial
                engine.
              </p>
              <p>
                When positioning is grounded in authentic market research, customer acquisition
                becomes more targeted and credible. When sales conversations are guided by rigorous
                discovery rather than generic pitching, relationships develop naturally into long-term
                commercial partnerships.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/about')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F172A] hover:text-[#1E40AF] transition-colors focus:outline-none focus-visible:underline"
              >
                <span>Read More About My Approach</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: CORE EXPERTISE (Editorial Grid) */}
      <section className="py-20 sm:py-28 bg-[#FBFBF9] border-b border-[#EBEBE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E5E0]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B] block mb-2">
                Specialties
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal tracking-tight">
                Core Areas of Expertise
              </h2>
            </div>
            <p className="text-sm text-[#64748B] max-w-md">
              Focused commercial capabilities tailored for organizations pursuing customer acquisition,
              market expansion, and disciplined sales motions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E0] mt-12 border border-[#E5E5E0]">
            {CORE_SPECIALTIES.map((specialty) => (
              <div
                key={specialty.id}
                className="bg-[#FBFBF9] p-8 sm:p-10 flex flex-col justify-between hover:bg-white transition-colors duration-200 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#94A3B8] font-mono">
                    <span>{specialty.number}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#0F172A]">
                      View Details →
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#0F172A] font-medium leading-snug">
                    {specialty.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed font-light">
                    {specialty.summary}
                  </p>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onNavigate('/expertise')}
                    className="text-xs font-semibold tracking-wider uppercase text-[#0F172A] group-hover:text-[#1E40AF] transition-colors inline-flex items-center gap-1.5 focus:outline-none focus-visible:underline"
                  >
                    <span>Explore Specialty</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('/expertise')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase border border-[#CBD5E1] text-[#0F172A] hover:bg-white transition-colors rounded-xs"
            >
              <span>Explore All 6 Specialties In Depth</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION E: HOW I APPROACH BUSINESS (3 Principles) */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#EBEBE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B] block">
              Working Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal tracking-tight">
              How I Approach Business
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed font-light">
              Pragmatic operating principles that guide my client acquisition, business development,
              and strategic advisory work. These are disciplined standards of practice, not empty
              promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {APPROACH_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="border-t border-[#0F172A] pt-6 space-y-3"
              >
                <span className="text-xs font-mono text-[#64748B] block">
                  {principle.number} / PRINCIPLE
                </span>
                <h3 className="font-serif text-2xl text-[#0F172A] font-medium leading-snug">
                  {principle.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#64748B] font-semibold">
                  {principle.tagline}
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed pt-2 font-light">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-[#EFEFEA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#64748B]">
              Every partnership adapts to the specific commercial landscape and institutional context.
            </p>
            <button
              onClick={() => onNavigate('/approach')}
              className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] hover:text-[#1E40AF] transition-colors inline-flex items-center gap-1.5"
            >
              <span>View the 5-Stage Operational Framework</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION F: WHO I CAN WORK WITH */}
      <section className="py-20 sm:py-28 bg-[#FBFBF9] border-b border-[#EBEBE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B] block">
              Engagement Fit
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal tracking-tight">
              Who I Can Work With
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed font-light">
              I collaborate with forward-looking commercial organizations that recognize the value of
              deliberate business development, structured customer acquisition, and thoughtful market
              expansion.
            </p>
          </div>

          <div className="space-y-4">
            {TARGET_AUDIENCES.map((audience, idx) => (
              <div
                key={audience.title}
                className="bg-white p-6 sm:p-8 border border-[#E5E5E0] hover:border-[#CBD5E1] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#94A3B8]">0{idx + 1}</span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#0F172A] font-medium">
                      {audience.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#4B5563] leading-relaxed font-light pl-7">
                    {audience.description}
                  </p>
                </div>

                <div className="shrink-0 pl-7 md:pl-0">
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] hover:text-[#1E40AF] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Discuss Opportunities</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION G: FINAL CTA */}
      <CtaBanner
        onNavigate={onNavigate}
        headline="Have a Business Opportunity Worth Discussing?"
        supportingText="Whether you're exploring a new market, strengthening your sales approach, or looking to build valuable business relationships, let's start a conversation."
      />
    </div>
  );
};
