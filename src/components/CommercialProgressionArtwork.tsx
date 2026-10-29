import React, { useState } from 'react';
import { useReducedMotion } from 'motion/react';

interface StageDetail {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  summary: string;
}

const STAGES: StageDetail[] = [
  {
    id: 'opportunity',
    step: '01',
    title: 'Opportunity',
    subtitle: 'Identification & Discovery',
    summary:
      'Uncovering unaddressed market potential and assessing commercial viability through disciplined intelligence.',
  },
  {
    id: 'connection',
    step: '02',
    title: 'Connection',
    subtitle: 'Dialogue & Alignment',
    summary:
      'Engaging decision-makers in consultative dialogue to align counterparty objectives with authentic value.',
  },
  {
    id: 'development',
    step: '03',
    title: 'Development',
    subtitle: 'Structure & Execution',
    summary:
      'Translating mutual alignment into formal agreements, clear commercial terms, and structured collaboration.',
  },
  {
    id: 'expansion',
    step: '04',
    title: 'Expansion',
    subtitle: 'Scale & Enduring Value',
    summary:
      'Deepening account relationships, expanding commercial footprint, and sustaining long-term growth.',
  },
];

export const CommercialProgressionArtwork: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const [activeStage, setActiveStage] = useState<string>('opportunity');

  const selectedStage = STAGES.find((s) => s.id === activeStage) || STAGES[0];

  return (
    <div className="w-full bg-[#FAF9F6] border border-[#E2E8F0] rounded-xs p-4 sm:p-6 shadow-xs relative overflow-hidden">
      {/* Corner Drafting Marks (Architectural Sheet Aesthetic) */}
      <span
        aria-hidden="true"
        className="absolute top-2 left-2 text-[#CBD5E1] font-mono text-[10px] select-none"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="absolute top-2 right-2 text-[#CBD5E1] font-mono text-[10px] select-none"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-2 text-[#CBD5E1] font-mono text-[10px] select-none"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-2 right-2 text-[#CBD5E1] font-mono text-[10px] select-none"
      >
        +
      </span>

      {/* Header Plate: Editorial Drawing Identification */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#EBEBE6]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] block">
            Commercial Progression Model
          </span>
          <span className="text-xs font-serif text-[#0F172A] tracking-normal font-normal">
            Opportunity · Connection · Development · Expansion
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-[9px] font-mono text-[#94A3B8] tracking-widest uppercase">
          <span>FIG. 01</span>
          <span>·</span>
          <span>SYSTEMIC PROGRESSION</span>
        </div>
      </div>

      {/* Main Architectural SVG Canvas */}
      <div className="relative w-full aspect-4/3 sm:aspect-16/11 flex items-center justify-center">
        <svg
          viewBox="0 0 540 370"
          className="w-full h-full select-none"
          role="img"
          aria-label="Architectural diagram illustrating commercial progression: Opportunity leading to Connection, Development, and Expansion."
        >
          <defs>
            {/* Subtle linear gradients for architectural plane shading */}
            <linearGradient id="planeGradA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0.12" />
            </linearGradient>

            <linearGradient id="planeGradB" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.22" />
            </linearGradient>

            <linearGradient id="planeGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.28" />
            </linearGradient>

            {/* Subtle hatching pattern for foundational materiality */}
            <pattern
              id="archHatch"
              width="8"
              height="8"
              patternTransform="rotate(45 0 0)"
              patternUnits="userSpaceOnUse"
            >
              <line x1="0" y1="0" x2="0" y2="8" stroke="#CBD5E1" strokeWidth="0.8" />
            </pattern>
          </defs>

          {/* Architectural Background Grid & Datum Lines (delicate hair lines, not chart grid) */}
          <g stroke="#E5E7EB" strokeWidth="0.6">
            <line x1="40" y1="330" x2="500" y2="330" />
            <line x1="40" y1="40" x2="40" y2="330" />
            <line x1="500" y1="40" x2="500" y2="330" />
          </g>

          {/* Precision Architectural Baseline & Stage Reference Markers */}
          <g stroke="#CBD5E1" strokeWidth="0.8">
            {/* 4 stage reference ticks on baseline */}
            <line x1="90" y1="326" x2="90" y2="334" />
            <line x1="210" y1="326" x2="210" y2="334" />
            <line x1="335" y1="326" x2="335" y2="334" />
            <line x1="455" y1="326" x2="455" y2="334" />
          </g>

          {/* Projection / Alignment Vectors (Hairlines connecting the structural stages) */}
          <g stroke="#94A3B8" strokeWidth="0.9" strokeDasharray="3 3">
            {/* Stage 1 to 2 guide */}
            <line x1="90" y1="280" x2="210" y2="215" />
            {/* Stage 2 to 3 guide */}
            <line x1="210" y1="215" x2="335" y2="145" />
            {/* Stage 3 to 4 guide */}
            <line x1="335" y1="145" x2="455" y2="75" />

            {/* Vertical projection down to baseline */}
            <line x1="90" y1="280" x2="90" y2="330" />
            <line x1="210" y1="215" x2="210" y2="330" />
            <line x1="335" y1="145" x2="335" y2="330" />
            <line x1="455" y1="75" x2="455" y2="330" />
          </g>

          {/* PRIMARY STRUCTURAL AXIS: A refined, continuous architectural datum line */}
          <path
            d="M 60 295 L 90 280 L 210 215 L 335 145 L 455 75 L 495 55"
            fill="none"
            stroke="#0F172A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={prefersReduced ? '' : 'transition-all duration-700'}
          />

          {/* ========================================================= */}
          {/* STAGE I: OPPORTUNITY (Foundational Base & Market Locus)   */}
          {/* ========================================================= */}
          <g
            className="cursor-pointer group"
            onClick={() => setActiveStage('opportunity')}
            role="button"
            tabIndex={0}
            aria-label="Stage 1: Opportunity"
            onKeyDown={(e) => e.key === 'Enter' && setActiveStage('opportunity')}
          >
            {/* Base foundational slab */}
            <polygon
              points="55,305 110,275 135,290 80,320"
              fill={activeStage === 'opportunity' ? 'url(#planeGradActive)' : 'url(#planeGradA)'}
              stroke="#0F172A"
              strokeWidth={activeStage === 'opportunity' ? '1.5' : '1'}
              className="transition-colors duration-200"
            />
            {/* Locus crosshair box */}
            <polygon
              points="75,275 105,260 120,268 90,283"
              fill="url(#archHatch)"
              stroke="#64748B"
              strokeWidth="0.8"
            />
            {/* Anchor focal node */}
            <circle
              cx="90"
              cy="280"
              r="4.5"
              fill={activeStage === 'opportunity' ? '#0F172A' : '#FFFFFF'}
              stroke="#0F172A"
              strokeWidth="1.5"
            />
            {/* Architectural notation */}
            <text
              x="90"
              y="348"
              textAnchor="middle"
              className="text-[9px] font-mono fill-[#0F172A] font-medium tracking-wider select-none"
            >
              01 · OPPORTUNITY
            </text>
            <text
              x="90"
              y="360"
              textAnchor="middle"
              className="text-[8px] font-sans fill-[#64748B] select-none"
            >
              Market Identification
            </text>
          </g>

          {/* ========================================================= */}
          {/* STAGE II: CONNECTION (Strategic Dialogue & Value Bridge)  */}
          {/* ========================================================= */}
          <g
            className="cursor-pointer group"
            onClick={() => setActiveStage('connection')}
            role="button"
            tabIndex={0}
            aria-label="Stage 2: Connection"
            onKeyDown={(e) => e.key === 'Enter' && setActiveStage('connection')}
          >
            {/* Intersecting vertical alignment plane */}
            <polygon
              points="180,240 230,210 230,175 180,205"
              fill={activeStage === 'connection' ? 'url(#planeGradActive)' : 'url(#planeGradA)'}
              stroke="#1E3A8A"
              strokeWidth={activeStage === 'connection' ? '1.5' : '1'}
              className="transition-colors duration-200"
            />
            {/* Counterparty horizontal alignment plane (interlocking relationship) */}
            <polygon
              points="165,225 215,195 255,215 205,245"
              fill="#FFFFFF"
              fillOpacity="0.75"
              stroke="#0F172A"
              strokeWidth="1"
            />
            {/* Bridge alignment axis */}
            <line x1="175" y1="230" x2="245" y2="195" stroke="#1E3A8A" strokeWidth="1.2" />
            {/* Alignment anchor node */}
            <circle
              cx="210"
              cy="215"
              r="4.5"
              fill={activeStage === 'connection' ? '#1E3A8A' : '#FFFFFF'}
              stroke="#0F172A"
              strokeWidth="1.5"
            />
            {/* Radial dialogue arc */}
            <path
              d="M 195 220 A 18 18 0 0 1 225 210"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="0.8"
              strokeDasharray="2 2"
            />
            {/* Architectural notation */}
            <text
              x="210"
              y="348"
              textAnchor="middle"
              className="text-[9px] font-mono fill-[#0F172A] font-medium tracking-wider select-none"
            >
              02 · CONNECTION
            </text>
            <text
              x="210"
              y="360"
              textAnchor="middle"
              className="text-[8px] font-sans fill-[#64748B] select-none"
            >
              Strategic Alignment
            </text>
          </g>

          {/* ========================================================= */}
          {/* STAGE III: DEVELOPMENT (Structured Commercial Value)      */}
          {/* ========================================================= */}
          <g
            className="cursor-pointer group"
            onClick={() => setActiveStage('development')}
            role="button"
            tabIndex={0}
            aria-label="Stage 3: Development"
            onKeyDown={(e) => e.key === 'Enter' && setActiveStage('development')}
          >
            {/* Multi-tier architectural volume: Lower mass */}
            <polygon
              points="295,190 355,155 380,170 320,205"
              fill="url(#archHatch)"
              stroke="#CBD5E1"
              strokeWidth="0.8"
            />
            {/* Structural vertical columns */}
            <line x1="305" y1="185" x2="305" y2="140" stroke="#0F172A" strokeWidth="1.2" />
            <line x1="355" y1="155" x2="355" y2="110" stroke="#0F172A" strokeWidth="1.2" />
            <line x1="370" y1="165" x2="370" y2="120" stroke="#0F172A" strokeWidth="1.2" />

            {/* Elevated commercial deck plane */}
            <polygon
              points="295,140 355,105 380,120 320,155"
              fill={activeStage === 'development' ? 'url(#planeGradActive)' : 'url(#planeGradB)'}
              stroke="#0F172A"
              strokeWidth={activeStage === 'development' ? '1.5' : '1.2'}
              className="transition-colors duration-200"
            />
            {/* Development apex node */}
            <circle
              cx="335"
              cy="145"
              r="4.5"
              fill={activeStage === 'development' ? '#0F172A' : '#FFFFFF'}
              stroke="#0F172A"
              strokeWidth="1.5"
            />
            {/* Architectural notation */}
            <text
              x="335"
              y="348"
              textAnchor="middle"
              className="text-[9px] font-mono fill-[#0F172A] font-medium tracking-wider select-none"
            >
              03 · DEVELOPMENT
            </text>
            <text
              x="335"
              y="360"
              textAnchor="middle"
              className="text-[8px] font-sans fill-[#64748B] select-none"
            >
              Structured Execution
            </text>
          </g>

          {/* ========================================================= */}
          {/* STAGE IV: EXPANSION (Open Cantilever & Sustainable Scale) */}
          {/* ========================================================= */}
          <g
            className="cursor-pointer group"
            onClick={() => setActiveStage('expansion')}
            role="button"
            tabIndex={0}
            aria-label="Stage 4: Expansion"
            onKeyDown={(e) => e.key === 'Enter' && setActiveStage('expansion')}
          >
            {/* Soaring architectural cantilever framework */}
            <polygon
              points="410,110 475,70 510,90 445,130"
              fill={activeStage === 'expansion' ? 'url(#planeGradActive)' : 'url(#planeGradB)'}
              stroke="#1E3A8A"
              strokeWidth={activeStage === 'expansion' ? '1.5' : '1.2'}
              className="transition-colors duration-200"
            />
            {/* Expansion horizon guide vectors extending into future */}
            <line x1="475" y1="70" x2="520" y2="45" stroke="#1E3A8A" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="510" y1="90" x2="535" y2="75" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="2 2" />

            {/* Overhanging canopy roof */}
            <polygon
              points="425,75 480,42 505,57 450,90"
              fill="#FFFFFF"
              fillOpacity="0.85"
              stroke="#0F172A"
              strokeWidth="1.2"
            />

            {/* Terminal apex expansion node */}
            <circle
              cx="455"
              cy="75"
              r="5"
              fill={activeStage === 'expansion' ? '#1E3A8A' : '#0F172A'}
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            {/* Concentric subtle expansion ring */}
            <circle
              cx="455"
              cy="75"
              r="9"
              fill="none"
              stroke="#1E3A8A"
              strokeWidth="0.8"
              strokeDasharray="2 2"
              className="opacity-75"
            />

            {/* Architectural notation */}
            <text
              x="455"
              y="348"
              textAnchor="middle"
              className="text-[9px] font-mono fill-[#0F172A] font-medium tracking-wider select-none"
            >
              04 · EXPANSION
            </text>
            <text
              x="455"
              y="360"
              textAnchor="middle"
              className="text-[8px] font-sans fill-[#64748B] select-none"
            >
              Sustainable Growth
            </text>
          </g>
        </svg>
      </div>

      {/* Understated Stage Detail Caption Plate (Contextual & Informative) */}
      <div className="mt-3 pt-3 border-t border-[#EBEBE6] bg-white/70 p-3 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-semibold text-[#0F172A] bg-[#EFEFEA] px-1.5 py-0.5 rounded-xs">
              STAGE {selectedStage.step}
            </span>
            <span className="text-xs font-semibold text-[#0F172A]">
              {selectedStage.title}
            </span>
            <span className="text-[11px] text-[#64748B]">
              — {selectedStage.subtitle}
            </span>
          </div>
          <p className="text-xs text-[#475569] font-light leading-relaxed">
            {selectedStage.summary}
          </p>
        </div>

        {/* Quiet Phase Selector Pills */}
        <div className="flex items-center gap-1 self-end sm:self-center shrink-0">
          {STAGES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveStage(s.id)}
              className={`px-2 py-1 text-[10px] font-mono rounded-xs transition-colors ${
                activeStage === s.id
                  ? 'bg-[#0F172A] text-white font-medium'
                  : 'bg-[#F1F5F9] text-[#64748B] hover:text-[#0F172A]'
              }`}
              title={`View ${s.title}`}
              aria-label={`View stage ${s.step}: ${s.title}`}
            >
              {s.step}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
