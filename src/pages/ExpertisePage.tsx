import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CORE_SPECIALTIES } from '../data/content';
import { CtaBanner } from '../components/CtaBanner';
import { ArrowRight, CheckCircle2, AlertCircle, Handshake, ArrowUpRight } from 'lucide-react';

interface ExpertisePageProps {
  onNavigate: (path: PageRoute) => void;
}

export const ExpertisePage: React.FC<ExpertisePageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredSpecialties =
    activeTab === 'all'
      ? CORE_SPECIALTIES
      : CORE_SPECIALTIES.filter((s) => s.id === activeTab);

  const scrollToSpecialty = (id: string) => {
    setActiveTab('all');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#FBFBF9] py-16 sm:py-20 border-b border-[#EBEBE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B] block">
              Capabilities & Focus
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#0F172A] font-normal tracking-tight leading-tight">
              Commercial Capabilities Grounded in Strategy & Execution.
            </h1>
            <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
              A comprehensive breakdown of the six core disciplines I focus on, the business situations
              they address, and how we can collaborate to develop commercial opportunities.
            </p>
          </div>

          {/* Quick Jump Index */}
          <div className="mt-12 pt-8 border-t border-[#E5E5E0]">
            <p className="text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-4">
              Explore By Specialty
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-colors ${
                  activeTab === 'all'
                    ? 'bg-[#0F172A] text-white'
                    : 'bg-white border border-[#CBD5E1] text-[#4B5563] hover:text-[#0F172A]'
                }`}
              >
                All 6 Disciplines
              </button>
              {CORE_SPECIALTIES.map((spec) => (
                <button
                  key={spec.id}
                  onClick={() => scrollToSpecialty(spec.id)}
                  className="px-3 py-1.5 text-xs font-medium bg-white border border-[#CBD5E1] text-[#4B5563] hover:text-[#0F172A] hover:border-[#94A3B8] rounded-xs transition-colors"
                >
                  {spec.number}. {spec.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Deep Dive */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24">
          {filteredSpecialties.map((specialty) => (
            <article
              key={specialty.id}
              id={specialty.id}
              className="scroll-mt-28 border border-[#E5E5E0] bg-[#FBFBF9] p-8 sm:p-12 lg:p-16 relative"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-[#E5E5E0]">
                <div className="space-y-2 max-w-3xl">
                  <span className="text-xs font-mono text-[#64748B] block">
                    SPECIALTY {specialty.number} / 06
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] font-normal tracking-tight">
                    {specialty.title}
                  </h2>
                  <p className="text-base sm:text-lg text-[#0F172A] font-light leading-relaxed pt-1">
                    {specialty.summary}
                  </p>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => {
                      onNavigate('/contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-[#1E293B] rounded-xs transition-colors shadow-xs"
                  >
                    <span>Discuss This Need</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Body Content */}
              <div className="pt-8 space-y-10">
                {/* Description */}
                <div className="space-y-3">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                    Overview & Relevance
                  </h3>
                  <p className="text-base text-[#334155] leading-relaxed font-light">
                    {specialty.description}
                  </p>
                </div>

                {/* Two-Column: Situations & Challenges */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  {/* Relevant Situations */}
                  <div className="bg-white p-6 sm:p-8 border border-[#E5E5E0] space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0F172A]" />
                      <span>Relevant Business Situations</span>
                    </h4>
                    <ul className="space-y-3 text-sm text-[#4B5563] font-light">
                      {specialty.situations.map((sit, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-xs font-mono text-[#94A3B8] mt-0.5">•</span>
                          <span>{sit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Typical Challenges Addressed */}
                  <div className="bg-white p-6 sm:p-8 border border-[#E5E5E0] space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-[#64748B]" />
                      <span>Commercial Challenges Addressed</span>
                    </h4>
                    <ul className="space-y-3 text-sm text-[#4B5563] font-light">
                      {specialty.challenges.map((ch, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-xs font-mono text-[#94A3B8] mt-0.5">•</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Practical Collaboration Section */}
                <div className="bg-[#F1F5F9] p-6 sm:p-8 border border-[#CBD5E1] flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-1 max-w-3xl">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#475569] flex items-center gap-2">
                      <Handshake className="w-4 h-4 text-[#0F172A]" />
                      <span>Areas of Practical Collaboration</span>
                    </span>
                    <p className="text-sm text-[#1E293B] leading-relaxed pt-1">
                      {specialty.collaboration}
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="shrink-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F172A] hover:text-[#1E40AF] transition-colors"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Collaboration Advisory Note */}
      <section className="py-16 bg-[#FBFBF9] border-t border-[#EBEBE6]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-4">
          <h3 className="font-serif text-2xl text-[#0F172A] font-medium">
            Tailored Collaboration Without Unrealistic Guarantees
          </h3>
          <p className="text-sm text-[#4B5563] leading-relaxed font-light">
            Commercial outcomes rely on product-market fit, organizational delivery, and economic
            conditions. My role is to bring rigor, strategic clarity, disciplined outreach, and structured
            deal execution to increase the probability and velocity of commercial success.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBanner
        onNavigate={onNavigate}
        headline="Ready to Discuss How These Specialties Align With Your Growth?"
        supportingText="Schedule a conversation to review your market landscape, customer acquisition priorities, and expansion plans."
      />
    </div>
  );
};
