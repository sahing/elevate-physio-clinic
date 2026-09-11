import React from 'react';
import { Award, ShieldCheck, Stethoscope, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { PRACTITIONERS } from '../data/clinicData';

interface AboutSectionProps {
  onBookPractitioner: (practitionerId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookPractitioner }) => {
  return (
    <section id="practitioners" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 inline-block px-3 py-1 rounded-full border border-teal-200 mb-3">
            Elite Clinical Specialists
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Your Registered Physiotherapists
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Our clinicians hold advanced postgraduate qualifications, university research appointments, and specialized musculoskeletal accreditations.
          </p>
        </div>

        {/* Practitioner Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRACTITIONERS.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-lg transition-all"
            >
              {/* Photo & Badge */}
              <div className="relative h-72 overflow-hidden bg-slate-200">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-teal-600 text-white px-2.5 py-0.5 rounded-full inline-block mb-1">
                    {doc.registrationNumber}
                  </span>
                  <h3 className="text-xl font-bold leading-tight">{doc.name}</h3>
                  <p className="text-xs text-teal-200 mt-0.5">{doc.title}</p>
                </div>
              </div>

              {/* Bio & Philosophy */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-3">
                    {doc.degrees}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {doc.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div className="space-y-1.5 mb-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Core Specializations:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-semibold bg-white text-slate-700 border border-slate-200 px-2 py-0.5 rounded-md"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Philosophy Quote */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 italic text-xs text-slate-700">
                    "{doc.treatmentPhilosophy}"
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold block text-slate-700">In Clinic:</span>
                    <span>{doc.availableDays.join(', ')}</span>
                  </div>

                  <button
                    onClick={() => onBookPractitioner(doc.id)}
                    className="inline-flex items-center gap-1.5 bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book With {doc.name.split(' ')[1]}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinic Environment & High-Tech Facilities Preview */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                World-Class Clinical Environment
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Purpose-Built Rehabilitation Facility in Metropolis Central
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We believe recovery accelerates in an open, encouraging, and technologically advanced setting. Our clinic features private acoustic treatment suites, dual gait analysis cameras, and medical-grade resistance testing.
              </p>

              <div className="space-y-2 pt-2">
                {[
                  "Private, sound-insulated manual therapy consultation rooms",
                  "Normative isometric dynamometry & force plate symmetry",
                  "Dedicated sports rehabilitation turf track and rack systems",
                  "Disability lift access & wheelchair accessible restrooms"
                ].map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-xl overflow-hidden shadow-md border border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
                  alt="Private clinical examination suite with ergonomic treatment couch"
                  className="w-full h-44 sm:h-52 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md border border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
                  alt="Active functional rehabilitation gym"
                  className="w-full h-44 sm:h-52 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
