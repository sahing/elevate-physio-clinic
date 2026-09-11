import React from 'react';
import { MessageCircle, Calendar, ShieldCheck, Star, MapPin, Clock, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { CLINIC_NAP } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
  onSelectSymptom: (serviceId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenWhatsApp,
  onSelectSymptom
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200/80 pt-10 pb-16 md:pt-16 md:pb-24">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e0a_1px,transparent_1px),linear-gradient(to_bottom,#0f766e0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Local SEO & Same-Day Availability Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-900 border border-teal-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Same-Day Emergency Pain Appointments Available</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-white/80 border border-slate-200 px-3 py-1.5 rounded-full font-medium shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-teal-700" />
            <span>Serving {CLINIC_NAP.city} & Surrounding Districts</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Overcome Pain.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-600">
                Restore Peak Mobility.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              Specialist-led orthopedic rehabilitation, sports injury therapy, and spine care in <span className="font-semibold text-slate-800">{CLINIC_NAP.city}</span>. Stop letting chronic back spasms, post-op stiffness, or joint pain dictate your life.
            </p>

            {/* Prominent Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenWhatsApp}
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-base px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 fill-current transition-transform group-hover:scale-110" />
                <span>Book via WhatsApp</span>
                <span className="text-xs bg-emerald-700/80 px-2 py-0.5 rounded-md font-medium text-emerald-100 hidden sm:inline">Instant Reply</span>
              </button>

              <button
                onClick={onOpenBooking}
                id="hero-schedule-btn"
                className="inline-flex items-center justify-center gap-2 bg-teal-900 hover:bg-teal-950 active:bg-slate-900 text-white font-bold text-base px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <Calendar className="w-5 h-5 transition-transform group-hover:scale-110 text-teal-300" />
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Symptom / Condition Jump Chips */}
            <div className="pt-4 border-t border-slate-200/90">
              <div className="flex items-center justify-between mb-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  What are you experiencing?
                </p>
                <a
                  href="#body-map"
                  className="text-xs font-bold text-teal-800 hover:text-teal-950 flex items-center gap-1 transition-colors group"
                >
                  <span className="underline underline-offset-2">Pinpoint on Body Map</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Lower Back & Sciatica", id: "back-pain-spine" },
                  { label: "Knee & ACL Tears", id: "sports-injury" },
                  { label: "Rotator Cuff & Shoulder", id: "orthopedic-rehab" },
                  { label: "Post-Surgical Joint Care", id: "post-surgical" },
                  { label: "Senior Mobility & Falls", id: "geriatric-care" },
                ].map((symptom) => (
                  <button
                    key={symptom.id}
                    onClick={() => onSelectSymptom(symptom.id)}
                    className="text-xs font-semibold bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-800 border border-slate-200 hover:border-teal-300 px-3 py-1.5 rounded-lg transition-all shadow-2xs hover:shadow-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{symptom.label}</span>
                    <ArrowRight className="w-3 h-3 opacity-50" />
                  </button>
                ))}
              </div>
            </div>

            {/* Micro Trust Stats */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>No GP Referral Required for Private Patients</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>HICAPS Instant Health Fund Claims</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Clinical Authority Preview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Glow */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-60 h-60 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Clinical physiotherapist performing targeted spinal and musculoskeletal therapy"
                  className="w-full h-80 sm:h-96 object-cover"
                />

                {/* Overlaid Verified Google Review Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-200/80 shadow-lg">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs font-extrabold text-slate-900">4.9 / 5.0</span>
                    </div>
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                      Google Verified
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 italic line-clamp-2">
                    "After suffering 8 months of debilitating lower back sciatica, Dr. Vance had me pain-free in 4 visits. Truly exceptional clinicians."
                  </p>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1">
                    — Liam H. · Verified Patient · Treated for L4/L5 Disc Bulge
                  </p>
                </div>
              </div>

              {/* Floating Certification Badge */}
              <div className="absolute -top-4 -left-4 bg-slate-900 text-white px-3.5 py-2 rounded-xl shadow-lg border border-slate-800 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">AHPRA Registered</p>
                  <p className="text-[10px] text-slate-400 leading-tight">16+ Yrs Clinical Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
