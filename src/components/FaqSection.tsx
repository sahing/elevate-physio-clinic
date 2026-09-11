import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileCheck, CreditCard, Shield } from 'lucide-react';
import { CLINIC_NAP } from '../data/clinicData';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Do I need a Doctor's referral to see a physiotherapist?",
    answer: "No referral is needed if you are attending as a private patient. You can book an appointment directly through our online hub or WhatsApp. Referrals are only required if you are claiming through Medicare EPC (Enhanced Primary Care / Chronic Disease Management plan), WorkCover NSW, or the Department of Veterans' Affairs (DVA).",
    category: "Referrals"
  },
  {
    question: "Can I claim my Private Health Insurance rebate on the spot?",
    answer: "Yes! We have an integrated HICAPS electronic terminal on-site. Simply swipe or tap your health fund card (Bupa, Medibank, HCF, NIB, Teachers Health, etc.) and you only pay the remaining gap fee.",
    category: "Rebates"
  },
  {
    question: "How long are initial and follow-up physiotherapy consultations?",
    answer: "Initial consultations are comprehensive 45 to 60-minute appointments where we conduct thorough orthopedic tests, biomechanical analysis, and deliver immediate hands-on treatment. Standard follow-up sessions are 30 to 45 minutes of targeted rehabilitation.",
    category: "Appointments"
  },
  {
    question: "What should I wear to my physiotherapy session?",
    answer: "Wear comfortable, loose-fitting activewear that allows easy movement and visualization of the injured joint or body region (e.g. shorts for knees, hips, and lower back; singlet/tank top for shoulders and neck). We also provide clean clinic shorts/gowns if required.",
    category: "Preparation"
  },
  {
    question: "Where can I park when visiting the clinic in Metropolis Central?",
    answer: "We offer dedicated on-site patient parking in the basement of 742 Medical Center Boulevard with direct lift access to Suite 300 on Level 3. Take a ticket upon entry and our reception will validate 2 hours of complimentary parking for your session.",
    category: "Location"
  },
  {
    question: "What is your clinic cancellation and rescheduling policy?",
    answer: "We understand sudden schedule changes happen. We require at least 12 hours notice to reschedule or cancel an appointment so we can offer that slot to patients on our acute pain standby list. Cancellations with adequate notice incur zero penalty.",
    category: "Policies"
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 inline-block mb-3">
            Patient Support & Rebates
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Everything you need to know about your consultation, health insurance coverage, parking, and treatment protocols.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-slate-50/50"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-teal-800 transition-colors cursor-pointer"
                aria-expanded={openIndex === idx}
              >
                <span className="text-sm sm:text-base">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? 'transform rotate-180 text-teal-700' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in-50 duration-150">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
