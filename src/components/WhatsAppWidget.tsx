import React, { useState } from 'react';
import { MessageCircle, X, Send, Clock, ShieldCheck, Phone, ChevronRight } from 'lucide-react';
import { CLINIC_NAP } from '../data/clinicData';

interface WhatsAppWidgetProps {
  customMessage?: string;
  isOpenExternal?: boolean;
  onCloseExternal?: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  customMessage = "Hello, I would like to book a physiotherapy consultation.",
  isOpenExternal = false,
  onCloseExternal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');

  const activeOpen = isOpen || isOpenExternal;

  const handleClose = () => {
    setIsOpen(false);
    if (onCloseExternal) onCloseExternal();
  };

  const handleSend = (textToSend?: string) => {
    const message = textToSend || selectedTopic || customMessage;
    const url = `https://wa.me/${CLINIC_NAP.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    handleClose();
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-auto">
      {/* Interactive Chat Bubble Card */}
      {activeOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">
                    EP
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-300 border-2 border-emerald-600 absolute bottom-0 right-0"></span>
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">Elevate Clinical WhatsApp</h4>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" />
                    <span>Typically replies within 5 mins</span>
                  </p>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-emerald-700 transition-colors"
                aria-label="Close WhatsApp chat popup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200 shadow-2xs max-w-[85%] text-slate-800 leading-relaxed">
              👋 Hello! Welcome to <span className="font-semibold">{CLINIC_NAP.name}</span>.
              <br /><br />
              How can our triage physiotherapist assist you today?
            </div>

            {/* Quick Template Prompts */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Tap to send instant template:
              </p>

              {[
                "Hello, I would like to book a physiotherapy consultation.",
                "I have acute back pain and need a same-day appointment.",
                "I have a doctor's referral for post-surgical rehab.",
                "Can you check if my health fund covers treatment?"
              ].map((tmpl, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(tmpl)}
                  className="w-full text-left bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border border-slate-200 hover:border-emerald-300 p-2 rounded-lg text-[11px] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="truncate pr-2 font-medium">{tmpl}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your question..."
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={() => handleSend()}
              className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-xl transition-colors shrink-0 cursor-pointer"
              title="Open in WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          <div className="px-3 pb-2 bg-white text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Encrypted direct chat with registered clinic intake staff</span>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="floating-whatsapp-widget"
        className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold px-4 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105"
        aria-label="Open WhatsApp Consultation Booking"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>

        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="text-xs sm:text-sm tracking-wide hidden sm:inline">
          Book via WhatsApp
        </span>
      </button>
    </div>
  );
};
