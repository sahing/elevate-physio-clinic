import React from 'react';
import { ShieldCheck, Award, Star, CreditCard, Users, HeartHandshake } from 'lucide-react';
import { CLINIC_NAP, TRUST_BADGES } from '../data/clinicData';

export const TrustIndicators: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-800">
            Clinical Standards & Accreditation
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Trusted by Doctors, Surgeons & Over 2,500+ Local Patients
          </h2>
        </div>

        {/* 5-Column Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center text-center transition-transform hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mb-2.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">AHPRA Licensed</h3>
            <p className="text-xs text-slate-500 mt-1">National Medical Board Registered Clinicians</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center text-center transition-transform hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mb-2.5">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">APA Accredited</h3>
            <p className="text-xs text-slate-500 mt-1">Australian Physiotherapy Association Member</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center text-center transition-transform hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mb-2.5">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">{CLINIC_NAP.googleRating} ★ Verified</h3>
            <p className="text-xs text-slate-500 mt-1">{CLINIC_NAP.totalReviews}+ Verified Google Reviews</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center text-center transition-transform hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2.5">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">HICAPS Claims</h3>
            <p className="text-xs text-slate-500 mt-1">Instant On-the-Spot Health Insurance Rebates</p>
          </div>

          <div className="col-span-2 md:col-span-1 bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center text-center transition-transform hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center mb-2.5">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">16+ Years In Practice</h3>
            <p className="text-xs text-slate-500 mt-1">Specialist Musculoskeletal Team in {CLINIC_NAP.city}</p>
          </div>
        </div>

        {/* Accepted Insurance & Rebates Strip */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-500">
          <span className="text-slate-400 uppercase tracking-wider text-[11px] font-bold">Rebate Eligible:</span>
          <span className="hover:text-teal-700 transition-colors">Bupa Members First</span>
          <span className="hover:text-teal-700 transition-colors">Medibank Members' Choice</span>
          <span className="hover:text-teal-700 transition-colors">HCF More for Muscles</span>
          <span className="hover:text-teal-700 transition-colors">Medicare EPC / CDM Referrals</span>
          <span className="hover:text-teal-700 transition-colors">WorkCover & CTP Approved</span>
          <span className="hover:text-teal-700 transition-colors">DVA Gold Card</span>
        </div>
      </div>
    </section>
  );
};
