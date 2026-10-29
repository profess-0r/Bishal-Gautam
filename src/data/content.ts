import { ApproachStage, ExpertiseSpecialty, InquiryType } from '../types';

export const PERSONAL_INFO = {
  name: 'Bishal Gautam',
  tagline: 'SALES · MARKETING · BUSINESS DEVELOPMENT',
  positioning: 'Sales & Marketing | Business Development | Business Expansion | Commercial Growth',
  location: 'Kathmandu, Nepal',
  email: 'zprofessor2077@gmail.com',
  phone: '+977 9749410075',
  phoneRaw: '+9779749410075',
  languages: ['Nepali', 'English', 'Hindi'],
  heroHeadline: 'Turning Business Opportunities Into Growth.',
  heroSupporting:
    'I work at the intersection of sales, marketing, and business development—identifying opportunities, building meaningful relationships, and helping businesses move forward.',
  primaryCta: 'Discuss a Business Opportunity',
  secondaryCta: 'Explore My Expertise',
  introHeading: 'A Commercial Perspective on Business Growth.',
  introText:
    'Sustainable business growth requires the disciplined integration of market intelligence, customer acquisition, and structured commercial conversations. Rather than treating sales, marketing, and business development as separate silos, my focus is on aligning market analysis with targeted outreach, building genuine trust with counterparties, and advancing discussions toward practical commercial value.',
  contactHeadline: "Let's Discuss Your Next Business Opportunity.",
  contactSupporting:
    'Have a business opportunity, growth initiative, partnership idea, or sales and marketing challenge to discuss? Get in touch.',
};

export const CORE_SPECIALTIES: ExpertiseSpecialty[] = [
  {
    id: 'sales-strategy',
    number: '01',
    title: 'Sales Strategy & Deal Closure',
    summary:
      'Designing structured sales motions that convert qualified interest into commercial agreements with clarity and rigor.',
    description:
      'Sales effectiveness relies on understanding the buyer’s underlying operational needs, framing value with precision, and guiding high-stakes conversations through objection handling and negotiation. This specialty focuses on structuring sales cycles that respect client priorities while moving commercial terms forward efficiently.',
    situations: [
      'Businesses experiencing prolonged sales cycles with unclear bottlenecks.',
      'Companies shifting from informal selling to structured, repeatable sales processes.',
      'Organizations needing structured qualification criteria and deal execution frameworks.',
    ],
    challenges: [
      'Misalignment between value propositions and client budgetary priorities.',
      'Faltering momentum between initial interest and formal agreement.',
      'Unfocused sales conversations lacking disciplined discovery and follow-up.',
    ],
    collaboration:
      'Collaborating on sales workflow design, discovery call preparation, objection navigation frameworks, and closing roadmaps.',
  },
  {
    id: 'business-development',
    number: '02',
    title: 'Business Development & Market Expansion',
    summary:
      'Identifying unaddressed commercial potential, entering new territories, and forming enduring institutional relationships.',
    description:
      'Expanding into new territories or commercial channels requires rigorous market assessment, relationship cultivation, and strategic alignment. This discipline centers on uncovering non-obvious business synergies, engaging leadership stakeholders, and establishing long-term partnership models that benefit both parties.',
    situations: [
      'Enterprises seeking to expand into new geographic regions or untapped commercial verticals.',
      'Organizations exploring cross-industry partnerships, channel alliances, or distributor networks.',
      'Firms seeking to build institutional relationships with associations, federations, or enterprise buyers.',
    ],
    challenges: [
      'Entering unfamiliar market landscapes without local context or direct contacts.',
      'Unproductive partnership discussions that fail to translate into operational initiatives.',
      'Fragmented outreach that dilutes organizational positioning in new segments.',
    ],
    collaboration:
      'Assisting with expansion opportunity mapping, strategic partner identification, stakeholder introductions, and partnership structuring.',
  },
  {
    id: 'b2b-client-acquisition',
    number: '03',
    title: 'B2B Client Acquisition & Relationship Management',
    summary:
      'Cultivating enterprise trust, managing multi-stakeholder discussions, and building enduring client retention.',
    description:
      'B2B relationships are built on trust, responsiveness, and consistent delivery of commercial value. This specialty encompasses the complete account relationship lifecycle—from initial outreach to executive stakeholder management—ensuring client relationships remain healthy, collaborative, and positioned for long-term retention.',
    situations: [
      'Companies needing a structured approach to acquire and retain enterprise B2B accounts.',
      'Firms where client relationships depend heavily on single points of contact without formal stewardship.',
      'Businesses looking to deepen existing client engagement and foster collaborative renewals.',
    ],
    challenges: [
      'Navigating complex corporate hierarchies with multiple decision-makers and influencers.',
      'Post-sale client disengagement due to lack of regular commercial check-ins.',
      'Difficulty articulating long-term strategic value after initial delivery.',
    ],
    collaboration:
      'Working on multi-stakeholder engagement maps, client relationship cadence, communication protocols, and account management structures.',
  },
  {
    id: 'lead-generation',
    number: '04',
    title: 'Lead Generation & Strategic Prospecting',
    summary:
      'Targeting high-relevance decision-makers with personalized, research-backed outreach rather than high-volume noise.',
    description:
      'Effective prospecting begins with rigorous research into company priorities, pain points, and current initiatives. By crafting concise, relevant, and timely outreach, this capability opens doors with senior decision-makers while protecting brand credibility and reputation.',
    situations: [
      'Businesses seeking new enterprise leads beyond inbound word-of-mouth.',
      'Organizations launching new service lines that require dedicated, proactive outreach.',
      'Teams looking to transition away from generic mass emails to targeted, research-backed prospecting.',
    ],
    challenges: [
      'Low response rates stemming from generic, untargeted messaging.',
      'Wasted time and resources pursuing prospects that lack commercial fit.',
      'Difficulty initiating conversations with senior executives and company principals.',
    ],
    collaboration:
      'Developing ICP (Ideal Customer Profile) criteria, personalized outreach frameworks, prospecting cadences, and qualification guidelines.',
  },
  {
    id: 'marketing-strategy',
    number: '05',
    title: 'Marketing Strategy & Brand Positioning',
    summary:
      'Clarifying core commercial differentiation and aligning messaging so prospective clients immediately understand your value.',
    description:
      'Marketing strategy in a commercial context is about clear positioning, credibility, and commercial focus. This area focuses on articulating why your organization is the compelling choice for specific clients, harmonizing messaging across channels, and supporting direct sales initiatives with credible positioning assets.',
    situations: [
      'Companies whose marketing narrative fails to reflect their real technical or operational strengths.',
      'Firms operating in competitive or commoditized markets requiring distinctive positioning.',
      'Organizations preparing for growth that need coherent messaging across customer touchpoints.',
    ],
    challenges: [
      'Marketing campaigns disconnected from commercial sales reality and pipeline needs.',
      'Overcomplicated or vague value propositions that confuse prospective buyers.',
      'Inconsistent brand voice across sales discussions, proposals, and public communications.',
    ],
    collaboration:
      'Structuring commercial positioning statements, message hierarchy, sales enablement narratives, and go-to-market communication plans.',
  },
  {
    id: 'market-research',
    number: '06',
    title: 'Market Research & Competitive Analysis',
    summary:
      'Uncovering market dynamics, buyer requirements, and competitive landscapes to guide informed commercial strategy.',
    description:
      'Sound commercial decisions demand accurate, grounded market insight. This capability involves systematically analyzing industry trends, competitive offerings, customer sentiment, and regional dynamics in Kathmandu, Nepal, and broader regional contexts to de-risk investments and identify strategic advantages.',
    situations: [
      'Businesses evaluating whether to launch a new product, service, or regional offering.',
      'Companies facing aggressive competitive pressure needing clarity on rival strengths and vulnerabilities.',
      'Organizations seeking grounded data before committing significant commercial resources.',
    ],
    challenges: [
      'Making critical business bets based on assumptions rather than objective market data.',
      'Misunderstanding competitive pricing structures, service standards, or customer priorities.',
      'Overlooking emerging industry shifts and regional regulatory developments.',
    ],
    collaboration:
      'Conducting market-entry research, competitive profiling, buyer behavior analysis, and opportunity feasibility assessments.',
  },
];

export const APPROACH_PRINCIPLES = [
  {
    number: '01',
    title: 'Understand the Market',
    tagline: 'Grounding every initiative in commercial reality.',
    description:
      'Identify the target audience, evaluate market conditions, assess true operational needs, and clarify real commercial opportunities before proposing solutions or initiating campaigns.',
  },
  {
    number: '02',
    title: 'Build Meaningful Relationships',
    tagline: 'Prioritizing long-term trust over transactional short-cuts.',
    description:
      'Prioritize professional communication, reliable follow-ups, thoughtful negotiation, and genuine trust. Real business development is built on mutual credibility and shared value.',
  },
  {
    number: '03',
    title: 'Move Opportunities Forward',
    tagline: 'Translating strategic dialogue into clear, actionable next steps.',
    description:
      'Connect prospecting, positioning, and commercial conversations directly to concrete milestones, defined accountability, and tangible progress toward business growth.',
  },
];

export const APPROACH_STAGES: ApproachStage[] = [
  {
    step: '01',
    title: 'Understand',
    subtitle: 'Clarifying the foundation and market context',
    description:
      'Understand the business, its market, audience, and commercial objectives. Every meaningful commercial engagement begins with thorough discovery of operating constraints and strategic priorities.',
    activities: [
      'Clarifying organizational goals, core offerings, and commercial priorities.',
      'Reviewing target audience profiles, decision-maker personas, and buyer pain points.',
      'Assessing prevailing market dynamics and competitive positioning in relevant sectors.',
      'Identifying operational constraints, historical friction, and strategic opportunities.',
    ],
  },
  {
    step: '02',
    title: 'Identify',
    subtitle: 'Mapping opportunities, prospects, and areas for expansion',
    description:
      'Find potential customers, relevant opportunities, and viable areas for business expansion through structured market intelligence and prospect profiling.',
    activities: [
      'Conducting targeted research to map high-relevance enterprise prospects and key stakeholders.',
      'Evaluating potential distribution channels, institutional partners, and business networks.',
      'Prioritizing opportunities by commercial viability, timeline, and strategic fit.',
      'Structuring actionable prospect pipelines grounded in genuine relevance.',
    ],
  },
  {
    step: '03',
    title: 'Connect',
    subtitle: 'Developing meaningful relationships and communicating value clearly',
    description:
      'Develop meaningful relationships and communicate value clearly. Outreach is tailored, professional, and directly focused on solving counterparties’ operational challenges.',
    activities: [
      'Crafting concise, research-informed outreach tailored to specific commercial contexts.',
      'Initiating exploratory discussions with key business leaders and decision-makers.',
      'Framing value propositions clearly around the prospect’s operational priorities.',
      'Managing follow-ups with consistency, courtesy, and professional discipline.',
    ],
  },
  {
    step: '04',
    title: 'Execute',
    subtitle: 'Translating opportunities into structured sales conversations and next steps',
    description:
      'Translate opportunities into structured outreach, disciplined sales conversations, negotiation milestones, and practical next steps toward deal closure.',
    activities: [
      'Structuring discovery agendas and commercial conversation roadmaps.',
      'Navigating negotiations and aligning mutual expectations with transparency.',
      'Establishing clear milestone schedules and commercial accountability.',
      'Moving agreements forward with structured documentation and proactive follow-through.',
    ],
  },
  {
    step: '05',
    title: 'Improve',
    subtitle: 'Reviewing feedback, assessing performance, and refining the approach',
    description:
      'Review feedback, assess performance, and refine the commercial approach to build repeatable sales processes and long-term client retention.',
    activities: [
      'Analyzing buyer feedback and conversation responses to isolate friction points.',
      'Refining outreach messaging, qualification criteria, and objection handling.',
      'Strengthening post-agreement relationship protocols to support account retention.',
      'Iterating commercial motions to improve velocity and conversion quality over time.',
    ],
  },
];

export const TARGET_AUDIENCES = [
  {
    title: 'Businesses & Growing Companies',
    description:
      'Companies seeking to expand their customer base, structure disciplined sales workflows, or strengthen their market presence in competitive commercial environments.',
  },
  {
    title: 'Founders & Entrepreneurs',
    description:
      'Visionary leaders bringing new products or services to market who need pragmatic support with commercial validation, early customer acquisition, and market positioning.',
  },
  {
    title: 'Organizations, Associations & Federations',
    description:
      'Industry groups, business councils, and trade federations looking to foster institutional partnerships, engage member stakeholders, and broaden business collaboration.',
  },
  {
    title: 'B2B Companies & Service Providers',
    description:
      'Corporate service providers, technology vendors, and industrial firms that rely on high-trust, relationship-driven sales cycles with enterprise decision-makers.',
  },
  {
    title: 'Businesses Exploring New Markets',
    description:
      'Enterprises evaluating regional expansion, entry into Nepal or neighboring regional markets, or seeking strategic local partnerships to navigate new commercial landscapes.',
  },
];

export const INQUIRY_OPTIONS: InquiryType[] = [
  'Business Development',
  'Sales & Marketing',
  'Client Acquisition',
  'Strategic Partnership',
  'Market Research',
  'Consulting or Project Discussion',
  'Other',
];
