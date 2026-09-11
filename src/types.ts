export interface PhysioService {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  symptomsTreated: string[];
  clinicalTechniques: string[];
  expectedRecovery: string;
  duration: string;
  rebates: string;
  seoTargetKeywords: string[];
  localizedCityKeywords: string[];
}

export interface Practitioner {
  id: string;
  name: string;
  title: string;
  degrees: string;
  registrationNumber: string;
  experienceYears: number;
  specialties: string[];
  bio: string;
  treatmentPhilosophy: string;
  photo: string;
  availableDays: string[];
}

export interface ClinicReview {
  id: string;
  authorName: string;
  rating: number;
  date: string;
  conditionTreated: string;
  reviewText: string;
  verifiedPatient: boolean;
  avatarUrl?: string;
}

export interface IntakeBooking {
  id: string;
  patientName: string;
  phone: string;
  email: string;
  injuryNotes: string;
  painLevel: number;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  practitionerId: string;
  insuranceType: string;
  status: 'confirmed' | 'pending' | 'triaged';
  createdAt: string;
}

export interface ClinicNAP {
  name: string;
  legalEntity: string;
  addressStreet: string;
  suite: string;
  suburb: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  googleMapsPlaceUrl: string;
  googleRating: number;
  totalReviews: number;
  latitude: number;
  longitude: number;
  hoursWeekday: string;
  hoursSaturday: string;
  hoursSunday: string;
}

export interface PainZone {
  id: string;
  name: string;
  anatomicalRegion: string;
  view: 'anterior' | 'posterior' | 'both';
  category: 'Spine & Neck' | 'Upper Extremity' | 'Lower Extremity' | 'Pelvis & Hip';
  serviceId: string;
  symptoms: string[];
  commonConditions: string[];
  treatmentHighlights: string[];
  frontCoords?: { x: number; y: number }; // 0-300 x, 0-620 y
  backCoords?: { x: number; y: number };
  badgeText: string;
}
