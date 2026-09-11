import React, { useState } from 'react';
import { Phone, Clock, MapPin, MessageCircle, Calendar, Menu, X, Shield, Award, Code2 } from 'lucide-react';
import { CLINIC_NAP } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
  onOpenArchitectGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenWhatsApp,
  onOpenArchitectGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if clinic is open right now
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 6 = Sat
  const hour = now.getHours();
  const minute = now.getMinutes();
  const timeNum = hour + minute / 60;
  const isOpen = (day >= 1 && day <= 5 && timeNum >= 7.5 && timeNum <= 19) ||
                 (day === 6 && timeNum >= 8 && timeNum <= 14);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-xs">
      {/* Top Urgent Info & NAP Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className={`inline-block w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              {isOpen ? (
                <span className="text-emerald-300 font-semibold">Open Now · Closes {day === 6 ? '2:00 PM' : '7:00 PM'}</span>
              ) : (
                <span className="text-amber-300">Opens 7:30 AM Tomorrow · Emergency Triage Active</span>
              )}
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>{CLINIC_NAP.addressStreet}, {CLINIC_NAP.suite}</span>
            </span>
            <span className="hidden lg:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{CLINIC_NAP.hoursWeekday}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <a
              href={`tel:${CLINIC_NAP.phone}`}
              className="flex items-center gap-1.5 text-slate-100 hover:text-teal-300 font-semibold tracking-wide transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{CLINIC_NAP.phoneFormatted}</span>
            </a>

            <button
              onClick={onOpenArchitectGuide}
              className="inline-flex items-center gap-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-teal-300 px-2.5 py-1 rounded-md border border-slate-700 transition-colors"
              title="View WordPress Code Architecture, Schema & Local SEO Strategy Blueprint"
            >
              <Code2 className="w-3 h-3 text-teal-400" />
              <span className="hidden sm:inline">SEO & Blueprint Spec</span>
              <span className="sm:hidden">Spec</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Clinic Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-teal-700 to-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-900/10 group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">Elevate</span>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">Physio</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Orthopedic & Sports Rehabilitation Clinic</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#body-map" className="hover:text-teal-700 transition-colors flex items-center gap-1.5 text-teal-800 font-bold">
              <span>Pain Body Map</span>
              <span className="text-[10px] bg-teal-100 text-teal-900 uppercase tracking-wider px-1.5 py-0.5 rounded font-extrabold">Interactive</span>
            </a>
            <a href="#services" className="hover:text-teal-700 transition-colors">Services</a>
            <a href="#practitioners" className="hover:text-teal-700 transition-colors">Our Specialists</a>
            <a href="#reviews" className="hover:text-teal-700 transition-colors flex items-center gap-1.5">
              <span>Google Reviews</span>
              <span className="text-xs bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded-md font-bold">4.9 ★</span>
            </a>
            <a href="#location" className="hover:text-teal-700 transition-colors">Clinic & Map</a>
            <a href="#faq" className="hover:text-teal-700 transition-colors">Rebates & FAQ</a>
          </nav>

          {/* Primary Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenWhatsApp}
              id="header-whatsapp-cta"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book via WhatsApp</span>
            </button>

            <button
              onClick={onOpenBooking}
              id="header-schedule-cta"
              className="inline-flex items-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Consultation</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-150">
          <a
            href="#body-map"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-teal-800 hover:text-teal-900 border-b border-slate-100 flex items-center justify-between"
          >
            <span>Interactive Pain Body Map</span>
            <span className="text-xs bg-teal-100 text-teal-900 px-2 py-0.5 rounded font-extrabold">NEW</span>
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-teal-700 border-b border-slate-100"
          >
            Clinical Services
          </a>
          <a
            href="#practitioners"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-teal-700 border-b border-slate-100"
          >
            Specialists & Credentials
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-teal-700 border-b border-slate-100"
          >
            Google Reviews (4.9 ★)
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-teal-700 border-b border-slate-100"
          >
            Clinic Location & Google Map
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-teal-700 border-b border-slate-100"
          >
            Health Fund Rebates & FAQ
          </a>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book via WhatsApp</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-semibold py-3 rounded-lg text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
