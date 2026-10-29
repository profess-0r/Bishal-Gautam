import React from 'react';
import { PageRoute } from '../types';
import { PERSONAL_INFO } from '../data/content';
import { CtaBanner } from '../components/CtaBanner';
import {
  ArrowRight,
  Brain,
  MessageSquare,
  Search,
  Scale,
  Users,
  TrendingUp,
  Globe,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const strengths = [
    {
      icon: TrendingUp,
      title: 'Commercial Awareness',
      description:
        'A sharp instinct for where commercial value resides, assessing buyer incentives, unit dynamics, and market demand before executing outreach initiatives.',
    },
    {
      icon: Brain,
      title: 'Analytical Thinking',
      description:
        'Deconstructing complex business situations, sales funnels, and market landscapes into logical, actionable components to eliminate guesswork and risk.',
    },
    {
      icon: MessageSquare,
      title: 'Professional Communication',
      description:
        'Articulating commercial value with clarity, conciseness, and executive poise across formal correspondence, presentations, and high-stakes discussions.',
    },
    {
      icon: Search,
      title: 'Rigorous Research',
      description:
        'Conducting methodical intelligence gathering on target industries, corporate structures, decision-makers, and emerging competitive shifts.',
    },
    {
      icon: Scale,
      title: 'Principled Negotiation',
      description:
        'Navigating commercial terms, stakeholder objectives, and objections to construct mutually advantageous agreements that endure.',
    },
    {
      icon: Users,
      title: 'Relationship Cultivation',
      description:
        'Fostering genuine trust and professional rapport across organizational levels, converting initial exploratory dialogue into long-term commercial alliances.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-[#FBFBF9] py-16 sm:py-20 border-b border-[#EBEBE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B] block">
              About Bishal Gautam
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#0F172A] font-normal tracking-tight leading-tight">
              A Disciplined Focus on Commercial Opportunities & Value Creation.
            </h1>
            <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
              Positioning sales, marketing, and business development not as transactional activities,
              but as strategic disciplines that build enduring commercial value.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Perspective */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#EBEBE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Narrative Content */}
            <div className="lg:col-span-7 space-y-8 text-base text-[#334155] leading-relaxed font-light">
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0F172A] font-medium leading-snug">
                  Personal Background & Perspective
                </h2>
                <p>
                  I am a commercial professional based in Kathmandu, Nepal, specializing in Sales &
                  Marketing, Business Development, Business Expansion, and Commercial Growth. My work
                  is anchored in a clear premise: every successful enterprise grows by systematically
                  identifying unmet commercial needs, articulating genuine value, and building
                  high-trust relationships with clients and partners.
                </p>
                <p>
                  Rather than viewing sales as aggressive persuasion, I approach it as structured
                  problem discovery, consultative alignment, and disciplined execution. When a business
                  truly understands its prospects’ operational priorities, sales cycles shorten, trust
                  is established early, and commercial relationships remain resilient over the long
                  term.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#F1F5F9]">
                <h3 className="font-serif text-xl sm:text-2xl text-[#0F172A] font-medium">
                  How I Think About Commercial Opportunities & Market Expansion
                </h3>
                <p>
                  Sustainable commercial expansion requires three core elements working in harmony:
                </p>
                <ul className="space-y-3 pl-1">
                  <li className="flex items-start gap-3">
                    <span className="text-xs font-mono text-[#0F172A] mt-1 shrink-0 font-semibold">
                      01.
                    </span>
                    <span>
                      <strong className="font-semibold text-[#0F172A]">Clarity Over Volume:</strong>{' '}
                      Ten highly qualified, research-backed conversations with key decision-makers
                      create far more enterprise value than hundreds of unfocused outbound attempts.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xs font-mono text-[#0F172A] mt-1 shrink-0 font-semibold">
                      02.
                    </span>
                    <span>
                      <strong className="font-semibold text-[#0F172A]">Contextual Relevance:</strong>{' '}
                      Commercial propositions must directly reflect the buyer’s immediate operational
                      context, market realities, and strategic objectives.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xs font-mono text-[#0F172A] mt-1 shrink-0 font-semibold">
                      03.
                    </span>
                    <span>
                      <strong className="font-semibold text-[#0F172A]">Enduring Accountability:</strong>{' '}
                      Agreeing on commercial terms is merely the beginning. Delivering on commitments,
                      maintaining active communication, and navigating challenges with transparency is
                      what builds long-term client retention.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Approach to Relationships & Strategic Communication */}
              <div className="space-y-4 pt-6 border-t border-[#F1F5F9]">
                <h3 className="font-serif text-xl sm:text-2xl text-[#0F172A] font-medium">
                  The Primacy of Relationships & Clear Communication
                </h3>
                <p>
                  Modern markets are crowded with noise. What distinguishes meaningful business
                  development is the ability to listen with intent, respect the counterparty's
                  time, and conduct negotiations with integrity.
                </p>
                <p className="text-sm text-[#64748B]">
                  My analytical approach allows me to examine business operations, understand unit
                  economics, and align client incentives with practical sales execution—ensuring every
                  conversation is grounded in commercial reality.
                </p>
              </div>

              {/* Languages & Regional Fluency */}
              <div className="space-y-3 pt-6 border-t border-[#F1F5F9]">
                <h3 className="font-serif text-lg text-[#0F172A] font-medium flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#0F172A]" />
                  <span>Languages & Regional Fluency</span>
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#334155]">
                  <span className="bg-[#F1F5F9] px-3 py-1 text-xs font-medium rounded-xs text-[#0F172A]">
                    Nepali (Native)
                  </span>
                  <span className="bg-[#F1F5F9] px-3 py-1 text-xs font-medium rounded-xs text-[#0F172A]">
                    English (Professional)
                  </span>
                  <span className="bg-[#F1F5F9] px-3 py-1 text-xs font-medium rounded-xs text-[#0F172A]">
                    Hindi (Professional)
                  </span>
                </div>
                <p className="text-xs text-[#64748B] pt-1">
                  Fluent multilingual communication facilitating seamless engagement across local,
                  regional, and cross-border commercial environments.
                </p>
              </div>
            </div>

            {/* Right Column: Bishal Gautam's Authentic Supplied Portrait */}
            <div className="lg:col-span-5 space-y-8">
              <div className="overflow-hidden rounded-xs border border-[#E2E8F0] bg-white shadow-xs">
                {/* Supplied Authentic Portrait */}
                <div className="relative aspect-square sm:aspect-4/5 bg-[#F8FAFC] overflow-hidden">
                  <img
                    src="/assets/bishal_gautam_portrait.png"
                    alt="Bishal Gautam — Sales, Marketing & Business Development Professional"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                    onError={(e) => {
                      // Fallback to direct aistudio path if needed
                      e.currentTarget.src =
                        '/assets/aistudio/d3eda0e9-cc48-4435-ac24-fa0d1f20df6f_f13b1b23.png';
                    }}
                  />
                </div>
                <div className="p-6 bg-[#0F172A] text-white space-y-1.5">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#94A3B8]">
                    PROFESSIONAL PROFILE
                  </p>
                  <p className="font-serif text-2xl font-normal text-white">
                    Bishal Gautam
                  </p>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed pt-0.5">
                    Sales & Marketing · Business Development · Commercial Growth
                  </p>
                </div>
              </div>

              {/* Direct Inquiries Card */}
              <div className="p-6 sm:p-8 bg-[#FBFBF9] border border-[#E5E5E0] space-y-4">
                <h3 className="font-serif text-lg text-[#0F172A] font-medium">
                  Direct Inquiries
                </h3>
                <div className="space-y-3 text-xs text-[#4B5563]">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#0F172A] shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#0F172A] shrink-0" />
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="hover:text-[#0F172A] underline-offset-2 hover:underline"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#0F172A] shrink-0" />
                    <a
                      href={`tel:${PERSONAL_INFO.phoneRaw}`}
                      className="hover:text-[#0F172A] underline-offset-2 hover:underline"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-[#1E293B] rounded-xs transition-colors"
                  >
                    <span>Discuss an Opportunity</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Strengths */}
      <section className="py-20 sm:py-24 bg-[#FBFBF9] border-b border-[#EBEBE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B] block">
              Core Competencies
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal tracking-tight">
              Professional Strengths
            </h2>
            <p className="text-base text-[#4B5563] font-light leading-relaxed">
              The intellectual and behavioral foundation I bring to client acquisition, business
              development discussions, and market exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-8 border border-[#E5E5E0] hover:border-[#CBD5E1] transition-colors space-y-4"
                >
                  <div className="w-10 h-10 rounded-xs bg-[#F1F5F9] flex items-center justify-center text-[#0F172A]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-[#0F172A] font-medium">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed font-light">
                    {item.description}
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
        headline="Interested in Exploring a Commercial Discussion?"
        supportingText="Let's discuss how focused sales strategy, structured prospecting, and business development can advance your commercial goals."
      />
    </div>
  );
};
