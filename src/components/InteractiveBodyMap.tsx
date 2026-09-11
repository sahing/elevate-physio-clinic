import React, { useState, useId } from 'react';
import { 
  Activity, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  HelpCircle, 
  Info, 
  MessageCircle, 
  RotateCcw, 
  ShieldCheck, 
  Sparkles, 
  Stethoscope,
  Target
} from 'lucide-react';
import { PhysioService, PainZone } from '../types';
import { PAIN_ZONES } from '../data/painZonesData';
import { CLINIC_SERVICES, CLINIC_NAP } from '../data/clinicData';

interface InteractiveBodyMapProps {
  onSelectService: (service: PhysioService) => void;
  onBookService: (serviceId: string) => void;
  onOpenWhatsApp: (customMessage?: string) => void;
}

export const InteractiveBodyMap: React.FC<InteractiveBodyMapProps> = ({
  onSelectService,
  onBookService,
  onOpenWhatsApp,
}) => {
  const [activeView, setActiveView] = useState<'anterior' | 'posterior'>('anterior');
  const [selectedZoneId, setSelectedZoneId] = useState<string>('knee-patella-acl');
  const [hoveredZoneId, setHoveredZoneId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const filterIdPrefix = useId();

  // Active zone is hoveredZone if available, otherwise selectedZone
  const currentZoneId = hoveredZoneId || selectedZoneId;
  const currentZone = PAIN_ZONES.find(z => z.id === currentZoneId) || PAIN_ZONES[0];
  const linkedService = CLINIC_SERVICES.find(s => s.id === currentZone.serviceId) || CLINIC_SERVICES[0];

  // Filtered zones for list/quick selector
  const filteredZones = PAIN_ZONES.filter(zone => {
    if (categoryFilter === 'All') return true;
    return zone.category === categoryFilter;
  });

  // Zones visible in current anatomical view
  const visibleMapZones = PAIN_ZONES.filter(zone => {
    if (zone.view === 'both') return true;
    return zone.view === activeView;
  });

  const handleZoneClick = (zone: PainZone) => {
    setSelectedZoneId(zone.id);
    // If zone is only in another view, switch to it smoothly
    if (zone.view !== 'both' && zone.view !== activeView) {
      setActiveView(zone.view);
    }
  };

  return (
    <section id="body-map" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle Anatomical Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#14b8a615_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 shadow-inner">
            <Target className="w-3.5 h-3.5 text-teal-400" />
            <span>Interactive Pain Diagnostic Triage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Where Does It Hurt?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Hover or tap specific pain zones on our interactive anatomical body map to identify potential injuries and connect directly with our specialized physiotherapy treatment protocols.
          </p>
        </div>

        {/* View Toggle & Category Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-slate-950/60 p-2.5 rounded-2xl border border-slate-800 backdrop-blur-md">
          {/* Anterior / Posterior Switcher */}
          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-700/80 w-full sm:w-auto">
            <button
              onClick={() => setActiveView('anterior')}
              className={`flex-1 sm:flex-none px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeView === 'anterior'
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-900/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Anterior (Front View)</span>
            </button>
            <button
              onClick={() => setActiveView('posterior')}
              className={`flex-1 sm:flex-none px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeView === 'posterior'
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-900/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Posterior (Back View)</span>
            </button>
          </div>

          {/* Anatomical Region Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto justify-center sm:justify-end">
            <span className="text-xs text-slate-400 font-semibold mr-1 hidden md:inline">Filter Region:</span>
            {['All', 'Spine & Neck', 'Upper Extremity', 'Lower Extremity', 'Pelvis & Hip'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-slate-800 text-teal-300 border border-teal-500/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Center: Interactive SVG Anatomy Canvas */}
          <div className="lg:col-span-6 bg-slate-950/70 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center relative shadow-2xl backdrop-blur-xl">
            {/* View Indicator Overlay */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-900/90 border border-slate-700/60 px-3 py-1.5 rounded-lg text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              <span className="font-semibold capitalize">{activeView} Perspective</span>
            </div>

            <div className="absolute top-4 right-4 z-20 text-[11px] text-slate-400 hidden sm:flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-teal-400" />
              <span>Click or hover points to triage</span>
            </div>

            {/* SVG Anatomical Silhouette */}
            <div className="w-full max-w-[340px] aspect-[300/620] relative flex items-center justify-center my-2 select-none">
              <svg
                viewBox="0 0 300 620"
                className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                aria-label={`Human body diagram - ${activeView} view`}
              >
                <defs>
                  {/* Glowing Gradients */}
                  <linearGradient id={`${filterIdPrefix}-bodyGradient`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="50%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#020617" />
                  </linearGradient>

                  <linearGradient id={`${filterIdPrefix}-spineGradient`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                  </linearGradient>

                  <filter id={`${filterIdPrefix}-glow`} x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Body Base Silhouette */}
                <g className="transition-all duration-300">
                  {/* Head */}
                  <ellipse cx="150" cy="46" rx="26" ry="34" fill={`url(#${filterIdPrefix}-bodyGradient)`} stroke="#334155" strokeWidth="1.5" />
                  
                  {/* Neck */}
                  <path d="M141 78 L141 98 L159 98 L159 78 Z" fill={`url(#${filterIdPrefix}-bodyGradient)`} stroke="#334155" strokeWidth="1.5" />

                  {/* Torso & Core Outer Silhouette */}
                  <path
                    d="M141 96 
                       C120 98, 98 106, 85 120 
                       C74 132, 70 148, 70 170 
                       C70 190, 78 215, 82 235 
                       C86 250, 95 268, 102 280 
                       C108 290, 114 296, 120 300 
                       L120 320 
                       L180 320 
                       L180 300 
                       C186 296, 192 290, 198 280 
                       C205 268, 214 250, 218 235 
                       C222 215, 230 190, 230 170 
                       C230 148, 226 132, 215 120 
                       C202 106, 180 98, 159 96 Z"
                    fill={`url(#${filterIdPrefix}-bodyGradient)`}
                    stroke="#334155"
                    strokeWidth="1.5"
                  />

                  {/* Left Arm & Hand */}
                  <path
                    d="M84 120 
                       C68 135, 60 165, 56 195 
                       C52 225, 46 255, 40 285 
                       C36 300, 32 315, 34 325 
                       C36 332, 42 332, 45 325 
                       C49 315, 55 295, 60 270 
                       C66 240, 72 210, 74 185 
                       C75 165, 78 145, 84 130 Z"
                    fill={`url(#${filterIdPrefix}-bodyGradient)`}
                    stroke="#334155"
                    strokeWidth="1.5"
                  />

                  {/* Right Arm & Hand */}
                  <path
                    d="M216 120 
                       C232 135, 240 165, 244 195 
                       C248 225, 254 255, 260 285 
                       C264 300, 268 315, 266 325 
                       C264 332, 258 332, 255 325 
                       C251 315, 245 295, 240 270 
                       C234 240, 228 210, 226 185 
                       C225 165, 222 145, 216 130 Z"
                    fill={`url(#${filterIdPrefix}-bodyGradient)`}
                    stroke="#334155"
                    strokeWidth="1.5"
                  />

                  {/* Left Leg (Thigh, Knee, Shin, Foot) */}
                  <path
                    d="M120 310 
                       C114 330, 108 365, 110 400 
                       C111 415, 114 430, 116 445 
                       C118 465, 116 500, 118 535 
                       C119 555, 120 575, 115 590 
                       C112 600, 122 605, 130 605 
                       C138 605, 140 595, 140 580 
                       C140 550, 144 515, 144 480 
                       C144 445, 144 425, 142 400 
                       C140 370, 143 340, 145 320 Z"
                    fill={`url(#${filterIdPrefix}-bodyGradient)`}
                    stroke="#334155"
                    strokeWidth="1.5"
                  />

                  {/* Right Leg (Thigh, Knee, Shin, Foot) */}
                  <path
                    d="M180 310 
                       C186 330, 192 365, 190 400 
                       C189 415, 186 430, 184 445 
                       C182 465, 184 500, 182 535 
                       C181 555, 180 575, 185 590 
                       C188 600, 178 605, 170 605 
                       C162 605, 160 595, 160 580 
                       C160 550, 156 515, 156 480 
                       C156 445, 156 425, 158 400 
                       C160 370, 157 340, 155 320 Z"
                    fill={`url(#${filterIdPrefix}-bodyGradient)`}
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                </g>

                {/* Perspective-Specific Anatomical Markers */}
                {activeView === 'anterior' ? (
                  /* Front View Markings: Clavicles, Chest, Abdomen, Patellas */
                  <g stroke="#475569" strokeWidth="1.2" strokeLinecap="round" opacity="0.65" fill="none">
                    {/* Clavicles */}
                    <path d="M145 106 C130 108, 115 116, 100 118" />
                    <path d="M155 106 C170 108, 185 116, 200 118" />
                    {/* Pectoral contours */}
                    <path d="M115 142 C125 152, 140 152, 147 148" />
                    <path d="M185 142 C175 152, 160 152, 153 148" />
                    {/* Abdominal central line */}
                    <line x1="150" y1="165" x2="150" y2="255" strokeDasharray="3 3" />
                    {/* Iliac Crests (Hips) */}
                    <path d="M110 260 C120 270, 135 272, 145 275" />
                    <path d="M190 260 C180 270, 165 272, 155 275" />
                    {/* Patella Kneecaps */}
                    <circle cx="128" cy="420" r="9" stroke="#64748b" strokeWidth="1" fill="#1e293b" opacity="0.8" />
                    <circle cx="172" cy="420" r="9" stroke="#64748b" strokeWidth="1" fill="#1e293b" opacity="0.8" />
                  </g>
                ) : (
                  /* Back View Markings: Spine, Scapulae, Gluteal creases, Achilles */
                  <g stroke="#475569" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" fill="none">
                    {/* Spinal Column Line with Segment Markers */}
                    <line x1="150" y1="88" x2="150" y2="265" stroke={`url(#${filterIdPrefix}-spineGradient)`} strokeWidth="2.5" />
                    {/* Scapulae (Shoulder Blades) */}
                    <path d="M115 128 C108 140, 110 160, 122 168 C128 160, 130 140, 126 130 Z" stroke="#64748b" />
                    <path d="M185 128 C192 140, 190 160, 178 168 C172 160, 170 140, 174 130 Z" stroke="#64748b" />
                    {/* Lumbar Lordosis & Sacrum */}
                    <path d="M142 220 C146 226, 154 226, 158 220" />
                    <path d="M140 242 C146 248, 154 248, 160 242" />
                    {/* Gluteal Crease */}
                    <path d="M122 285 C132 300, 145 305, 150 300 C155 305, 168 300, 178 285" stroke="#64748b" />
                    {/* Popliteal Fossa (Back of Knees) */}
                    <path d="M120 420 C128 424, 134 424, 138 420" />
                    <path d="M162 420 C166 424, 172 424, 180 420" />
                    {/* Achilles Tendon Lines */}
                    <line x1="130" y1="525" x2="130" y2="560" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="2 2" />
                    <line x1="170" y1="525" x2="170" y2="560" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="2 2" />
                  </g>
                )}

                {/* Interactive Pain Hotspots */}
                {visibleMapZones.map((zone) => {
                  const coords = activeView === 'anterior' ? zone.frontCoords : zone.backCoords;
                  if (!coords) return null;

                  const isSelected = zone.id === selectedZoneId;
                  const isHovered = zone.id === hoveredZoneId;
                  const isCurrent = zone.id === currentZoneId;

                  return (
                    <g
                      key={zone.id}
                      className="cursor-pointer transition-transform duration-200"
                      onClick={() => handleZoneClick(zone)}
                      onMouseEnter={() => setHoveredZoneId(zone.id)}
                      onMouseLeave={() => setHoveredZoneId(null)}
                      tabIndex={0}
                      role="button"
                      aria-label={`Select pain zone: ${zone.name}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleZoneClick(zone);
                        }
                      }}
                    >
                      {/* Pulsing Radar Ring when selected/hovered */}
                      {isCurrent && (
                        <circle
                          cx={coords.x}
                          cy={coords.y}
                          r="20"
                          fill="none"
                          stroke={isSelected ? '#14b8a6' : '#38bdf8'}
                          strokeWidth="2"
                          className="animate-ping opacity-75 origin-center"
                        />
                      )}

                      {/* Outer Glow Halo */}
                      <circle
                        cx={coords.x}
                        cy={coords.y}
                        r={isCurrent ? 16 : 11}
                        fill={isCurrent ? (isSelected ? 'rgba(20, 184, 166, 0.4)' : 'rgba(56, 189, 248, 0.4)') : 'rgba(45, 212, 191, 0.15)'}
                        stroke={isCurrent ? '#2dd4bf' : 'rgba(45, 212, 191, 0.4)'}
                        strokeWidth="1.5"
                        filter={`url(#${filterIdPrefix}-glow)`}
                        className="transition-all duration-300"
                      />

                      {/* Inner High-Visibility Pin Core */}
                      <circle
                        cx={coords.x}
                        cy={coords.y}
                        r={isCurrent ? 7 : 5}
                        fill={isCurrent ? '#ffffff' : '#14b8a6'}
                        stroke={isCurrent ? '#0d9488' : '#042f2e'}
                        strokeWidth="2"
                        className="transition-all duration-200"
                      />

                      {/* Hover / Selected Label Banner */}
                      {isCurrent && (
                        <g transform={`translate(${coords.x > 150 ? coords.x - 120 : coords.x + 18}, ${coords.y - 12})`}>
                          <rect
                            x="0"
                            y="0"
                            width="110"
                            height="24"
                            rx="5"
                            fill="#020617"
                            stroke="#0d9488"
                            strokeWidth="1"
                            opacity="0.95"
                          />
                          <text
                            x="8"
                            y="16"
                            fill="#f8fafc"
                            fontSize="10"
                            fontWeight="bold"
                            className="select-none"
                          >
                            {zone.name.length > 17 ? `${zone.name.slice(0, 15)}...` : zone.name}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bottom Quick-Switch Bar for Body Views */}
            <div className="mt-4 flex items-center justify-between w-full pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 inline-block"></span>
                <span>Active Target: <strong className="text-teal-300">{currentZone.name}</strong></span>
              </span>
              <button
                onClick={() => setActiveView(activeView === 'anterior' ? 'posterior' : 'anterior')}
                className="flex items-center gap-1 text-slate-300 hover:text-teal-300 font-semibold cursor-pointer underline underline-offset-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Flip to {activeView === 'anterior' ? 'Back' : 'Front'}</span>
              </button>
            </div>
          </div>

          {/* Right: Rich Clinical Assessment & Direct Treatment Link Card */}
          <div className="lg:col-span-6 space-y-5">
            {/* Active Pain Assessment Card */}
            <div className="bg-slate-950/90 border-2 border-teal-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all duration-300">
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Top Meta Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/40 px-3 py-1 rounded-full">
                    {currentZone.category}
                  </span>
                  <span className="text-xs font-semibold bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700">
                    {currentZone.badgeText}
                  </span>
                </div>

                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-teal-400" />
                  <span>Clinical Triage</span>
                </span>
              </div>

              {/* Zone Name & Anatomical Specifics */}
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {currentZone.name}
              </h3>
              <p className="text-xs sm:text-sm text-teal-400 font-medium mt-1">
                Anatomy: {currentZone.anatomicalRegion}
              </p>

              {/* Symptoms & Conditions Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-800">
                {/* Symptoms */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>Common Symptoms</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {currentZone.symptoms.map((sym, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold shrink-0">•</span>
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Common Conditions Treated */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Conditions Diagnosed</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {currentZone.commonConditions.map((cond, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">•</span>
                        <span>{cond}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direct Treatment Link Highlight Box */}
              <div className="mt-6 p-5 bg-gradient-to-r from-teal-950/90 to-slate-900 rounded-2xl border border-teal-500/40 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-300 block mb-1">
                      Recommended Clinical Protocol
                    </span>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Stethoscope className="w-5 h-5 text-teal-400 shrink-0" />
                      <span>{linkedService.title}</span>
                    </h4>
                  </div>
                  <span className="text-[11px] text-teal-300 bg-teal-900/60 border border-teal-600/40 px-2 py-0.5 rounded font-mono shrink-0">
                    {linkedService.duration.split('|')[0].trim()}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {linkedService.shortDescription}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-300 pt-1">
                  <span className="flex items-center gap-1 text-emerald-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>HICAPS Instant Rebates</span>
                  </span>
                  <span>·</span>
                  <span className="text-slate-400">
                    Est. Recovery: {linkedService.expectedRecovery}
                  </span>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-2">
                {/* Primary CTA: View Full Treatment Details */}
                <button
                  onClick={() => onSelectService(linkedService)}
                  className="w-full bg-teal-600 hover:bg-teal-500 text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-teal-900/40 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Explore Treatment Protocol</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary CTA: Book Immediate Consult */}
                <button
                  onClick={() => onBookService(linkedService.id)}
                  className="w-full bg-white hover:bg-slate-100 text-slate-900 text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-teal-700" />
                  <span>Book Consultation</span>
                </button>
              </div>

              {/* WhatsApp Quick Inquire Button */}
              <div className="mt-3">
                <button
                  onClick={() => onOpenWhatsApp(`Hello, I used your Body Map triage and I'm experiencing pain in my ${currentZone.name}. I would like to book a consultation for ${linkedService.title}.`)}
                  className="w-full bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 border border-emerald-500/40 text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
                  <span>Ask a Physio About {currentZone.name} on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Quick Pain Zone List Navigation */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                All Pain Regions ({filteredZones.length})
              </p>
              <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
                {filteredZones.map((zone) => {
                  const isActive = zone.id === selectedZoneId;
                  return (
                    <button
                      key={zone.id}
                      onClick={() => handleZoneClick(zone)}
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-teal-700 text-white border-teal-400 shadow-xs'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <span>{zone.name}</span>
                      <ChevronRight className="w-3 h-3 opacity-50" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
