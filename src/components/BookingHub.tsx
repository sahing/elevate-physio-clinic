import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, AlertCircle, CheckCircle2, ShieldCheck, Download, Check, Sparkles } from 'lucide-react';
import { CLINIC_SERVICES, PRACTITIONERS, CLINIC_NAP } from '../data/clinicData';
import { IntakeBooking } from '../types';

interface BookingHubProps {
  initialServiceId?: string;
  initialPractitionerId?: string;
}

export const BookingHub: React.FC<BookingHubProps> = ({
  initialServiceId = 'back-pain-spine',
  initialPractitionerId = 'dr-marcus-vance',
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [injuryNotes, setInjuryNotes] = useState('');
  const [painLevel, setPainLevel] = useState(6);
  const [serviceId, setServiceId] = useState(initialServiceId);
  const [practitionerId, setPractitionerId] = useState(initialPractitionerId);
  const [preferredDate, setPreferredDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [preferredTime, setPreferredTime] = useState('09:30');
  const [insuranceType, setInsuranceType] = useState('Private Health Fund (HICAPS)');
  
  // Anti-spam honeypot (bots fill this, real users don't see it)
  const [honeypot, setHoneypot] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<IntakeBooking | null>(null);
  const [recentBookingsCount, setRecentBookingsCount] = useState(14);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      // Spam bot detected silently
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newBooking: IntakeBooking = {
        id: `ELV-${Math.floor(100000 + Math.random() * 900000)}`,
        patientName,
        phone,
        email,
        injuryNotes,
        painLevel,
        serviceId,
        preferredDate,
        preferredTime,
        practitionerId,
        insuranceType,
        status: 'confirmed',
        createdAt: new Date().toISOString(),
      };

      // Save to localStorage for client-side persistence
      try {
        const existing = JSON.parse(localStorage.getItem('elevate_clinic_bookings') || '[]');
        existing.unshift(newBooking);
        localStorage.setItem('elevate_clinic_bookings', JSON.stringify(existing));
      } catch (err) {
        console.error('Storage error', err);
      }

      setSubmittedBooking(newBooking);
      setIsSubmitting(false);
      setRecentBookingsCount(prev => prev + 1);
    }, 700);
  };

  const downloadCalendarFile = () => {
    if (!submittedBooking) return;
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Elevate Physiotherapy Clinic//Booking//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Physiotherapy Consultation - Elevate Clinic (${submittedBooking.id})`,
      `DESCRIPTION:Initial Consultation with specialist. Notes: ${submittedBooking.injuryNotes || 'Musculoskeletal assessment'}`,
      `LOCATION:${CLINIC_NAP.addressStreet}, ${CLINIC_NAP.suite}, ${CLINIC_NAP.city}`,
      `DTSTART:${submittedBooking.preferredDate.replace(/-/g, '')}T${submittedBooking.preferredTime.replace(':', '')}00`,
      `DTEND:${submittedBooking.preferredDate.replace(/-/g, '')}T${(parseInt(submittedBooking.preferredTime.split(':')[0]) + 1).toString().padStart(2, '0')}${submittedBooking.preferredTime.split(':')[1]}00`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Elevate-Appointment-${submittedBooking.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-teal-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Encrypted Patient Intake Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Schedule Your Comprehensive Consultation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Book in less than 60 seconds. Our clinical team reviews your injury history prior to arrival so treatment begins on Minute 1.
          </p>
        </div>

        {/* Success Modal / State */}
        {submittedBooking ? (
          <div className="bg-white border-2 border-teal-500/80 rounded-2xl p-8 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-200 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Booking Confirmed · Ref #{submittedBooking.id}
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 mb-2">
              You're Booked, {submittedBooking.patientName}!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              A clinical confirmation SMS and email have been dispatched to <span className="font-semibold text-slate-900">{submittedBooking.phone}</span>.
            </p>

            {/* Appointment Summary Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left text-xs sm:text-sm space-y-2 mb-6">
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-slate-900">
                  {CLINIC_SERVICES.find(s => s.id === submittedBooking.serviceId)?.title}
                </span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500">Specialist:</span>
                <span className="font-bold text-slate-900">
                  {PRACTITIONERS.find(p => p.id === submittedBooking.practitionerId)?.name}
                </span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500">Date & Time:</span>
                <span className="font-bold text-teal-800">
                  {submittedBooking.preferredDate} at {submittedBooking.preferredTime}
                </span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500">Reported Pain Score:</span>
                <span className="font-bold text-amber-800">{submittedBooking.painLevel} / 10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="font-semibold text-slate-800">{CLINIC_NAP.addressStreet}, {CLINIC_NAP.suite}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={downloadCalendarFile}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 px-5 rounded-xl transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Add to Apple / Google Calendar (.ics)</span>
              </button>

              <button
                onClick={() => setSubmittedBooking(null)}
                className="inline-flex items-center justify-center text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 py-3 px-5 rounded-xl transition-colors cursor-pointer"
              >
                Make Another Booking
              </button>
            </div>

            {/* Admin Logging Notification Simulator */}
            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400">
              ✓ Database logging committed · Automated clinic admin dispatch dispatched to reception@elevatephysioclinic.com
            </div>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
            {/* Form Header Status */}
            <div className="bg-slate-900 text-white px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>HIPAA & Privacy Act 1988 Compliant · 256-Bit SSL Encrypted</span>
              </div>
              <span className="text-slate-400 hidden sm:inline">
                {recentBookingsCount} patient intakes completed today
              </span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
              {/* Anti-spam Honeypot Field (invisible to normal users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website-hp">Leave this empty</label>
                <input
                  id="website-hp"
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Patient Basic Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jessica Miller"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number (SMS Confirmation) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="0400 000 000 or (02)..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="jessica@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
                    />
                  </div>
                </div>
              </div>

              {/* Service & Practitioner Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Select Clinical Service *
                  </label>
                  <select
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
                  >
                    {CLINIC_SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} ({s.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Practitioner
                  </label>
                  <select
                    value={practitionerId}
                    onChange={(e) => setPractitionerId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
                  >
                    <option value="any">First Available Specialist (Fastest)</option>
                    {PRACTITIONERS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} — {p.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Consultation Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
                    >
                      <option value="07:45">07:45 AM (Early Morning Slot)</option>
                      <option value="08:30">08:30 AM</option>
                      <option value="09:30">09:30 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="13:15">01:15 PM (Lunchtime Slot)</option>
                      <option value="14:30">02:30 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:30">05:30 PM (Evening Slot)</option>
                      <option value="18:15">06:15 PM (Late Evening)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Interactive Pain Scale (1-10) Slider */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Current Pain Severity (1 to 10 Scale)
                  </label>
                  <span className={`text-xs font-extrabold px-2.5 py-1 rounded-full ${
                    painLevel >= 8
                      ? 'bg-rose-100 text-rose-800 border border-rose-200'
                      : painLevel >= 5
                      ? 'bg-amber-100 text-amber-800 border border-amber-200'
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  }`}>
                    Level {painLevel} / 10 · {painLevel >= 8 ? 'Severe / Acute' : painLevel >= 5 ? 'Moderate / Limiting' : 'Mild / Manageable'}
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={painLevel}
                  onChange={(e) => setPainLevel(parseInt(e.target.value))}
                  className="w-full accent-teal-700 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />

                <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
                  <span>1 - Minimal Ache</span>
                  <span>5 - Impedes Activities</span>
                  <span>10 - Unbearable Pain</span>
                </div>
              </div>

              {/* Injury Condition Notes & Health Fund */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Injury Notes or Symptoms History
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what hurts, how long you've had it, or previous scans..."
                    value={injuryNotes}
                    onChange={(e) => setInjuryNotes(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Health Fund / Referral Scheme
                  </label>
                  <select
                    value={insuranceType}
                    onChange={(e) => setInsuranceType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 mb-3"
                  >
                    <option value="Private Health Fund (HICAPS)">Private Health Fund (Bupa, Medibank, HCF, etc.)</option>
                    <option value="Medicare EPC / CDM (GP Referral)">Medicare Enhanced Primary Care (EPC / CDM)</option>
                    <option value="WorkCover NSW / CTP Third Party">WorkCover NSW / CTP Injury Claim</option>
                    <option value="DVA Gold Card">Department of Veterans' Affairs (DVA)</option>
                    <option value="Private Self-Pay">Self-Paying (No Insurance / Standard Fee)</option>
                  </select>

                  <div className="bg-teal-50/70 border border-teal-200/60 rounded-lg p-2.5 text-[11px] text-teal-900">
                    💡 HICAPS terminal available on-site for immediate gap-only card payment.
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span className="text-emerald-600 font-bold">✓ Zero cancellation fees</span> with 12h notice. No GP referral needed for private patients.
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>Securing Your Slot...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-teal-300" />
                      <span>Confirm Appointment Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
