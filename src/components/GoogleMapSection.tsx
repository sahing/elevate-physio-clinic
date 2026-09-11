import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Car, Train, ExternalLink, CheckCircle2, ShieldCheck, Copy, Check } from 'lucide-react';
import { CLINIC_NAP } from '../data/clinicData';

export const GoogleMapSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [originAddress, setOriginAddress] = useState('');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${CLINIC_NAP.name}, ${CLINIC_NAP.addressStreet}, ${CLINIC_NAP.suite}, ${CLINIC_NAP.city} ${CLINIC_NAP.postalCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGetDirections = (e: React.FormEvent) => {
    e.preventDefault();
    const dest = encodeURIComponent(`${CLINIC_NAP.addressStreet}, ${CLINIC_NAP.city} ${CLINIC_NAP.postalCode}`);
    const orig = encodeURIComponent(originAddress.trim());
    const url = originAddress.trim()
      ? `https://www.google.com/maps/dir/?api=1&origin=${orig}&destination=${dest}`
      : `https://www.google.com/maps/search/?api=1&query=${dest}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="location" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 inline-block mb-3">
            Prime Central Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find Our Clinic & Plan Your Visit
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Conveniently situated in the heart of {CLINIC_NAP.city} with dedicated on-site patient parking, lift accessibility, and express public transport stops.
          </p>
        </div>

        {/* 2-Column Layout: NAP Card & Route Planner + Interactive Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* NAP Details and Directions Planner */}
          <div className="lg:col-span-5 space-y-6">
            {/* NAP (Name, Address, Phone) Official Consistency Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{CLINIC_NAP.name}</h3>
                  <span className="text-xs text-slate-500 font-mono">Geo: {CLINIC_NAP.latitude}, {CLINIC_NAP.longitude}</span>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-white hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs transition-colors cursor-pointer"
                  title="Copy physical address for GPS"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Address */}
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Physical Address</span>
                    <p className="text-slate-600">
                      {CLINIC_NAP.addressStreet}, {CLINIC_NAP.suite}
                    </p>
                    <p className="text-slate-600">
                      {CLINIC_NAP.suburb}, {CLINIC_NAP.city}, {CLINIC_NAP.state} {CLINIC_NAP.postalCode}
                    </p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Telephone & Triage</span>
                    <a
                      href={`tel:${CLINIC_NAP.phone}`}
                      className="text-teal-800 font-semibold hover:underline"
                    >
                      {CLINIC_NAP.phoneFormatted}
                    </a>
                    <span className="text-xs text-slate-400 block">Direct reception & emergency triage</span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="w-full">
                    <span className="font-bold text-slate-900 block">Clinical Operating Hours</span>
                    <div className="text-xs text-slate-600 space-y-0.5 mt-1">
                      <div className="flex justify-between">
                        <span>Monday – Friday:</span>
                        <span className="font-semibold text-slate-800">7:30 AM – 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-semibold text-slate-800">8:00 AM – 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="text-slate-400">Emergency On-Call</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transit & Parking Details */}
              <div className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 mb-1">
                    <Car className="w-3.5 h-3.5 text-teal-700" />
                    <span>Free Parking</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">2-Hour visitor basement bays validation at reception</p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 mb-1">
                    <Train className="w-3.5 h-3.5 text-teal-700" />
                    <span>Public Transit</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">180m from Central Metro & Bus interchange</p>
                </div>
              </div>
            </div>

            {/* Quick Route Origin Form */}
            <form onSubmit={handleGetDirections} className="bg-slate-900 text-white rounded-2xl p-6 shadow-md">
              <h4 className="text-sm font-bold flex items-center gap-2 mb-2 text-white">
                <Navigation className="w-4 h-4 text-teal-400" />
                <span>Get Turn-by-Turn GPS Directions</span>
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                Enter your current street or suburb to calculate the fastest route to our clinic.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. Surry Hills, Bondi, or Home Address"
                  value={originAddress}
                  onChange={(e) => setOriginAddress(e.target.value)}
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                />
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-xs transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <span>Route</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </form>
          </div>

          {/* Embedded Google Map + Schema Verification Preview */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden shadow-md relative h-[420px] sm:h-[480px]">
              {/* Responsive Embedded Google Map (with standard iframe embed URL and fallback pinpoint) */}
              <iframe
                title="Elevate Physiotherapy Clinic Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13251.782878436034!2d151.2052!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632bfc0!2sSydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1698293849382!5m2!1sen!2sau"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* Overlay Marker Card */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md rounded-xl p-4 border border-slate-200/90 shadow-lg pointer-events-auto">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-extrabold text-slate-900">Elevate Physiotherapy</span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {CLINIC_NAP.addressStreet}, {CLINIC_NAP.suite}
                </p>
                <div className="mt-2.5 pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-teal-800">Rating: 4.9 ★ (384)</span>
                  <a
                    href={CLINIC_NAP.googleMapsPlaceUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-bold text-teal-700 hover:underline flex items-center gap-1"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Local Schema & Verified NAP Compliance Pill */}
            <div className="bg-teal-50 border border-teal-200/80 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-teal-900 font-medium">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>Schema.org/MedicalClinic & GeoCoordinates (-33.8688, 151.2093) Synced</span>
              </div>
              <a
                href={CLINIC_NAP.googleMapsPlaceUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="font-bold text-teal-800 hover:text-teal-950 flex items-center gap-1"
              >
                <span>View Live Google Business Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
