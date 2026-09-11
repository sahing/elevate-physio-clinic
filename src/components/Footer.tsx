import React from 'react';
import { Shield, Phone, Mail, MapPin, Clock, MessageCircle, Calendar, HeartHandshake, ShieldCheck, Award, ExternalLink } from 'lucide-react';
import { CLINIC_NAP } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
  onOpenArchitectGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenWhatsApp,
  onOpenArchitectGuide
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white font-bold shadow-md">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-tight">Elevate Physiotherapy</span>
                <p className="text-[11px] text-teal-400 font-semibold tracking-wider uppercase">
                  & Rehabilitation Clinic
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dedicated to restoring pain-free movement, athletic performance, and postural strength for patients across {CLINIC_NAP.city}. Registered with AHPRA, the Australian Physiotherapy Association, and all private health insurance funds.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenWhatsApp}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Desk</span>
              </button>
              <button
                onClick={onOpenBooking}
                className="bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Online</span>
              </button>
            </div>
          </div>

          {/* Strict NAP (Name, Address, Phone) Official Meta Block */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              NAP Consistency & Coordinates
            </h4>
            <div className="text-xs text-slate-400 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200 block">{CLINIC_NAP.name}</strong>
                  {CLINIC_NAP.addressStreet}, {CLINIC_NAP.suite}<br />
                  {CLINIC_NAP.suburb}, {CLINIC_NAP.city}, {CLINIC_NAP.state} {CLINIC_NAP.postalCode}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${CLINIC_NAP.phone}`} className="text-slate-200 hover:text-teal-400 font-semibold">
                  {CLINIC_NAP.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${CLINIC_NAP.email}`} className="text-slate-200 hover:text-teal-400">
                  {CLINIC_NAP.email}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 font-mono">
                Lat: {CLINIC_NAP.latitude} · Lng: {CLINIC_NAP.longitude}
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Operating Hours
            </h4>
            <div className="text-xs text-slate-400 space-y-2">
              <div className="flex justify-between pb-1.5 border-b border-slate-900">
                <span>Monday – Friday:</span>
                <span className="text-slate-200 font-semibold">7:30 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-slate-900">
                <span>Saturday:</span>
                <span className="text-slate-200 font-semibold">8:00 AM – 2:00 PM</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-slate-900">
                <span>Sunday:</span>
                <span className="text-amber-400">Closed (On-Call Triage)</span>
              </div>
              <p className="text-[11px] text-teal-400 mt-2">
                ⚡ Same-day pain relief slots reserved daily for acute clinical emergencies.
              </p>
            </div>
          </div>

          {/* Quick Links & Developer Blueprint */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li><a href="#body-map" className="hover:text-teal-400 transition-colors text-teal-300 font-semibold">Pain Body Map (Interactive)</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Services Directory</a></li>
              <li><a href="#practitioners" className="hover:text-teal-400 transition-colors">Specialist Team</a></li>
              <li><a href="#reviews" className="hover:text-teal-400 transition-colors">Google Reviews (4.9 ★)</a></li>
              <li><a href="#location" className="hover:text-teal-400 transition-colors">Google Maps Location</a></li>
              <li><a href="#faq" className="hover:text-teal-400 transition-colors">Health Fund Rebates</a></li>
              <li className="pt-2">
                <button
                  onClick={onOpenArchitectGuide}
                  className="text-[11px] text-teal-400 hover:text-teal-300 font-semibold underline underline-offset-2 flex items-center gap-1 cursor-pointer"
                >
                  <span>Technical & SEO Spec</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} {CLINIC_NAP.legalEntity}. All rights reserved. Registered Provider ABN: 48 918 204 182.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>AHPRA Compliant</span>
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Award className="w-3.5 h-3.5 text-teal-400" />
              <span>APA Member</span>
            </span>
            <span>Privacy Policy</span>
            <span>Terms of Clinical Care</span>
          </div>
        </div>

        {/* Medical Triage Notice */}
        <div className="mt-4 p-3 bg-slate-900/60 rounded-lg border border-slate-800 text-[10px] text-slate-500 text-center">
          <strong>Medical Notice:</strong> Physiotherapy services are provided by registered health practitioners. If you are experiencing chest pain, sudden numbness, loss of bowel/bladder control, or severe traumatic injury, please dial 000 or proceed to your nearest emergency department immediately.
        </div>
      </div>
    </footer>
  );
};
