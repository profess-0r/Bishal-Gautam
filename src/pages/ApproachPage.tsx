import React from 'react';
import { PageRoute } from '../types';
import { APPROACH_STAGES } from '../data/content';
import { CtaBanner } from '../components/CtaBanner';
import { Check, MessageSquare, Search, ShieldCheck, HeartHandshake } from 'lucide-react';

interface ApproachPageProps {
  onNavigate: (path: PageRoute) => void;
}

export const ApproachPage: React.FC<ApproachPageProps> = ({ onNavigate }) => {
  const corePillars = [
    {
      icon: MessageSquare,
      title: 'Clear, Transparent Communication',
      description:
        'Eliminating ambiguity from the outset. Every interaction with prospects, partners, and stakeholders is conducted with brevity, executive poise, and professional integrity.',
    },
    {
      icon: Search,
      title: 'Thoughtful, Grounded Research',
      description:
        'Avoiding speculative guesswork. Every outbound effort and commercial recommendation is supported by disciplined intelligence on industry dynamics and buyer priorities.',
    },
    {
      icon: ShieldCheck,
      title: 'Practical, Accountable Execution',
      description:
        'Bridging the gap between high-level ambition and real commercial conversations. Focusing on structured follow-through and measurable pipeline milestones.',
    },
    {
      icon: HeartHandshake,
      title: 'Long-Term Relationship Orientation',
      description:
        'Prioritizing reputation and mutual respect over aggressive, short-sighted sales tactics. Building partnerships positioned for multi-year collaboration.',
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-[#FBFBF9] py-16 sm:py-20 border-b border-[#EBEBE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B] block">
              Methodology & Philosophy
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#0F172A] font-normal tracking-tight leading-tight">
              A Structured Yet Adaptive Framework for Business Growth.
            </h1>
            <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
              Commercial development succeeds when strategic understanding precedes execution. Here is
              how I navigate commercial opportunities from initial discovery to sustained growth.
            </p>
          </div>
        </div>
      </section>

      {/* The 5 Stages */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#EBEBE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B] block">
              Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal tracking-tight">
              The Five-Stage Commercial Framework
            </h2>
            <p className="text-sm text-[#64748B] font-light">
              This framework is applied flexibly based on organizational maturity, existing sales
              infrastructure, and market dynamics. It is an operating philosophy, not a rigid script.
            </p>
          </div>

          <div className="space-y-10">
            {APPROACH_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 sm:p-12 border border-[#E5E5E0] bg-[#FBFBF9] hover:border-[#CBD5E1] transition-colors"
              >
                {/* Step Marker & Title */}
                <div className="lg:col-span-4 space-y-2">
                  <span className="font-mono text-xs text-[#64748B] font-medium block">
                    STAGE {stage.step} / 05
                  </span>
                  <h3 className="font-serif text-3xl text-[#0F172A] font-medium">
                    {stage.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#64748B] font-semibold pt-1">
                    {stage.subtitle}
                  </p>
                </div>

                {/* Description & Activities */}
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-base text-[#334155] leading-relaxed font-light">
                    {stage.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-[#E5E5E0]">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                      Key Focus Areas:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#4B5563] font-light">
                      {stage.activities.map((act, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#0F172A] mt-0.5 shrink-0" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Operational Pillars */}
      <section className="py-20 sm:py-24 bg-[#FBFBF9] border-b border-[#EBEBE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B] block">
              Foundational Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal tracking-tight">
              Why Disciplined Execution Matters
            </h2>
            <p className="text-base text-[#4B5563] font-light leading-relaxed">
              Sales, marketing, and business expansion often falter not from lack of ambition, but from
              careless communication, weak research, and rushed follow-ups. These four principles guide
              my every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white p-8 border border-[#E5E5E0] hover:border-[#CBD5E1] transition-colors space-y-4"
                >
                  <div className="w-10 h-10 rounded-xs bg-[#F1F5F9] flex items-center justify-center text-[#0F172A]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-[#0F172A] font-medium leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBanner
        onNavigate={onNavigate}
        headline="Ready to Apply This Structured Approach to Your Business?"
        supportingText="Let's review where your organization stands today and identify the most commercially viable path forward."
      />
    </div>
  );
};
