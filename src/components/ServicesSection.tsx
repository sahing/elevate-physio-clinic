import React from 'react';
import { Activity, Bone, ShieldAlert, HeartPulse, Stethoscope, ArrowRight, Check, Sparkles } from 'lucide-react';
import { CLINIC_SERVICES } from '../data/clinicData';
import { PhysioService } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: PhysioService) => void;
  onBookServiceId: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookServiceId,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bone':
        return <Bone className="w-6 h-6" />;
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6" />;
      case 'Stethoscope':
      default:
        return <Stethoscope className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-teal-100/70 text-teal-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Clinical Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Targeted Musculoskeletal & Pain Rehabilitation
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Every body is unique. We combine advanced biomechanical diagnostics, hands-on joint therapy, and high-load muscular conditioning to deliver lasting results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLINIC_SERVICES.map((service, idx) => (
            <article
              key={service.id}
              className={`bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group ${
                idx === 3 ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Image Preview Container */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-md text-slate-800 font-bold text-xs px-3 py-1 rounded-full shadow-xs border border-slate-200/60">
                    {service.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 text-white">
                  <span className="text-[11px] font-semibold text-teal-300 block">
                    {service.duration}
                  </span>
                  <p className="text-xs text-slate-200 line-clamp-1">
                    {service.rebates}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center border border-teal-100 shrink-0 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                      {getIcon(service.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-6 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Conditions Treated:
                    </p>
                    {service.symptomsTreated.slice(0, 3).map((symp, sIdx) => (
                      <div key={sIdx} className="text-xs text-slate-700 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{symp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTAs */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-900 bg-teal-50 hover:bg-teal-100/80 py-2.5 px-3 rounded-lg border border-teal-200/80 transition-colors cursor-pointer"
                  >
                    <span>View Treatment Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onBookServiceId(service.id)}
                    className="inline-flex items-center justify-center text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 py-2.5 px-3.5 rounded-lg transition-colors cursor-pointer"
                    title="Book this service directly"
                  >
                    Book
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
