import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Clock, Shield, Calendar, Sparkles, AlertCircle, MessageCircle } from 'lucide-react';
import { PhysioService } from '../types';
import { CLINIC_NAP } from '../data/clinicData';

interface ServiceDetailModalProps {
  service: PhysioService | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
  onWhatsAppService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
  onWhatsAppService,
}) => {
  const [quickPhone, setQuickPhone] = useState('');
  const [quickName, setQuickName] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  if (!service) return null;

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone) return;
    setInquirySent(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 relative">
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-slate-100 p-2 rounded-full text-slate-600 hover:text-slate-900 transition-colors border border-slate-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner for the Service */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900">
          <img
            src={service.image}
            alt={`${service.title} specialized clinical physical therapy treatment`}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
          
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-teal-600 text-white px-2.5 py-0.5 rounded-full">
                {service.category}
              </span>
              <span className="text-[11px] font-semibold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded-full">
                {service.duration}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {service.title}
            </h2>
            <p className="text-sm text-slate-200 mt-1 max-w-xl font-medium">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Localized SEO Target Keywords Tag strip */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-teal-800 mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Target Local Clinical Focus ({CLINIC_NAP.city} & Regional Area)</span>
            </p>
            <div className="flex flex-wrap gap-1.5">
              {service.localizedCityKeywords.map((kw, i) => (
                <span key={i} className="text-xs bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 font-medium">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Clinical Overview */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Clinical Protocol & Overview</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {service.fullDescription}
            </p>
          </div>

          {/* Grid: Symptoms vs Techniques */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50/50 border border-amber-200/70 rounded-xl p-5">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Primary Symptoms We Treat</span>
              </h4>
              <ul className="space-y-2">
                {service.symptomsTreated.map((symptom, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-teal-50/50 border border-teal-200/70 rounded-xl p-5">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-700" />
                <span>Evidence-Based Modalities</span>
              </h4>
              <ul className="space-y-2">
                {service.clinicalTechniques.map((tech, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recovery and Rebates Meta */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <span className="font-bold text-slate-800 block mb-0.5">Estimated Rehabilitation Timeline:</span>
              <span className="text-slate-600">{service.expectedRecovery}</span>
            </div>
            <div>
              <span className="font-bold text-slate-800 block mb-0.5">Insurance & Rebate Processing:</span>
              <span className="text-teal-800 font-medium">{service.rebates}</span>
            </div>
          </div>

          {/* Embedded Appointment Inquiry Form */}
          <div className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-xl p-6 text-white">
            <h4 className="text-lg font-bold">Book a Consultation for {service.title}</h4>
            <p className="text-xs text-slate-300 mt-1 mb-4">
              Get triaged directly with a specialist. Same-day appointments available for acute pain.
            </p>

            {inquirySent ? (
              <div className="bg-emerald-500/20 border border-emerald-400/40 rounded-lg p-4 text-center">
                <p className="font-bold text-emerald-300 text-sm">Inquiry Received!</p>
                <p className="text-xs text-slate-200 mt-1">
                  Our clinic reception team is calling you shortly at <span className="font-semibold">{quickPhone}</span> to confirm your slot.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickInquiry} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-teal-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile / Phone Number"
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold py-2.5 px-4 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request Priority Callback</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onWhatsAppService(service.title)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
