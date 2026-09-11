import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustIndicators } from './components/TrustIndicators';
import { InteractiveBodyMap } from './components/InteractiveBodyMap';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GoogleMapSection } from './components/GoogleMapSection';
import { BookingHub } from './components/BookingHub';
import { FaqSection } from './components/FaqSection';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { SeoArchitectModal } from './components/SeoArchitectModal';
import { Footer } from './components/Footer';
import { PhysioService } from './types';
import { CLINIC_SERVICES, CLINIC_NAP } from './data/clinicData';

export default function App() {
  const [selectedService, setSelectedService] = useState<PhysioService | null>(null);
  const [isArchitectModalOpen, setIsArchitectModalOpen] = useState(false);
  const [isWhatsAppWidgetOpen, setIsWhatsAppWidgetOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState('back-pain-spine');
  const [bookingPractitionerId, setBookingPractitionerId] = useState('dr-marcus-vance');

  // Scroll to booking section smoothly
  const scrollToBooking = (serviceId?: string, practitionerId?: string) => {
    if (serviceId) setBookingServiceId(serviceId);
    if (practitionerId) setBookingPractitionerId(practitionerId);

    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWhatsApp = (customText?: string) => {
    const text = customText || "Hello, I would like to book a physiotherapy consultation.";
    const url = `https://wa.me/${CLINIC_NAP.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSelectSymptom = (serviceId: string) => {
    const found = CLINIC_SERVICES.find(s => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    } else {
      scrollToBooking(serviceId);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-teal-700 selection:text-white">
      {/* Primary Header with Live NAP Status */}
      <Header
        onOpenBooking={() => scrollToBooking()}
        onOpenWhatsApp={() => setIsWhatsAppWidgetOpen(true)}
        onOpenArchitectGuide={() => setIsArchitectModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section with Local SEO Keywords & Prominent CTAs */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onOpenWhatsApp={() => handleOpenWhatsApp()}
          onSelectSymptom={handleSelectSymptom}
        />

        {/* Trust Indicators: Certifications, 4.9★, HICAPS, Health Funds */}
        <TrustIndicators />

        {/* Interactive SVG Body Map with Pain Zone Highlighting & Direct Service Links */}
        <InteractiveBodyMap
          onSelectService={(service) => setSelectedService(service)}
          onBookService={(serviceId) => scrollToBooking(serviceId)}
          onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)}
        />

        {/* Clinical Services Grid: Interactive sub-page cards */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onBookServiceId={(serviceId) => scrollToBooking(serviceId)}
        />

        {/* Specialist Physiotherapists & Clinical Environment */}
        <AboutSection
          onBookPractitioner={(docId) => scrollToBooking(undefined, docId)}
        />

        {/* Google Business Profile Verified 5-Star Reviews */}
        <ReviewsSection />

        {/* Embedded Google Map & Local Schema NAP Card */}
        <GoogleMapSection />

        {/* Contact & Intake Booking Hub */}
        <BookingHub
          initialServiceId={bookingServiceId}
          initialPractitionerId={bookingPractitionerId}
        />

        {/* Patient FAQs & Health Fund Rebate Information */}
        <FaqSection />
      </main>

      {/* Dedicated Service Detail Modal / Sub-Page Drawer */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceId) => {
          setSelectedService(null);
          scrollToBooking(serviceId);
        }}
        onWhatsAppService={(serviceTitle) => {
          setSelectedService(null);
          handleOpenWhatsApp(`Hello, I would like to book an appointment for ${serviceTitle}.`);
        }}
      />

      {/* Strategic Implementation Guide & Local SEO Command Center Modal */}
      <SeoArchitectModal
        isOpen={isArchitectModalOpen}
        onClose={() => setIsArchitectModalOpen(false)}
      />

      {/* Floating Mobile-Optimized WhatsApp Click-To-Chat Button */}
      <WhatsAppWidget
        isOpenExternal={isWhatsAppWidgetOpen}
        onCloseExternal={() => setIsWhatsAppWidgetOpen(false)}
      />

      {/* NAP Consistent Footer */}
      <Footer
        onOpenBooking={() => scrollToBooking()}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
        onOpenArchitectGuide={() => setIsArchitectModalOpen(true)}
      />
    </div>
  );
}
