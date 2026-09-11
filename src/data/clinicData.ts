import { PhysioService, Practitioner, ClinicReview, ClinicNAP } from '../types';

export const CLINIC_NAP: ClinicNAP = {
  name: "Elevate Physiotherapy & Rehabilitation Clinic",
  legalEntity: "Elevate Musculoskeletal Health Pty Ltd",
  addressStreet: "742 Medical Center Boulevard",
  suite: "Suite 300, Level 3 (Lift Access)",
  suburb: "Metropolis Central",
  city: "Sydney",
  state: "NSW",
  postalCode: "2000",
  country: "Australia",
  phone: "+61 2 9876 5432",
  phoneFormatted: "(02) 9876 5432",
  whatsappNumber: "61480012345",
  whatsappDisplay: "+61 480 012 345",
  email: "reception@elevatephysioclinic.com",
  googleMapsPlaceUrl: "https://maps.google.com/?q=Elevate+Physiotherapy+Rehabilitation+Clinic",
  googleRating: 4.9,
  totalReviews: 384,
  latitude: -33.8688,
  longitude: 151.2093,
  hoursWeekday: "Mon - Fri: 7:30 AM – 7:00 PM",
  hoursSaturday: "Saturday: 8:00 AM – 2:00 PM",
  hoursSunday: "Sunday: Closed (Emergency On-Call)",
};

export const CLINIC_SERVICES: PhysioService[] = [
  {
    id: "orthopedic-rehab",
    slug: "orthopedic-rehabilitation",
    title: "Orthopedic Rehabilitation",
    category: "Joints & Musculoskeletal",
    tagline: "Targeted recovery for acute joint dysfunction, ligament sprains, and chronic arthritis.",
    shortDescription: "Evidence-based clinical rehabilitation restoring full joint range of motion, alleviating mechanical stiffness, and stabilizing muscular imbalances.",
    fullDescription: "Our Orthopedic Rehabilitation program combines precision manual joint mobilization, target myofascial release, and progressive biomechanical reconditioning. Tailored for complex shoulder impingement, hip labral pathology, knee osteoarthritis, and cervical neck dysfunction. We restore functional movement patterns so you can return to daily activities pain-free.",
    icon: "Bone",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    symptomsTreated: [
      "Severe joint stiffness and crepitus",
      "Rotator cuff tears & shoulder impingement",
      "Hip impingement & degenerative arthritis",
      "Knee meniscus and patellofemoral pain",
      "Chronic cervical neck pain & tension"
    ],
    clinicalTechniques: [
      "Maitland & Mulligan joint mobilization",
      "Instrument-Assisted Soft Tissue Mobilization (IASTM)",
      "Targeted ultrasound & thermal electrotherapy",
      "Kinetic chain eccentric strength loading",
      "Postural and ergonomic realignment protocols"
    ],
    expectedRecovery: "4 – 8 weeks for progressive restoration",
    duration: "Initial 45 mins | Follow-up 30 mins",
    rebates: "HICAPS Instant Health Fund Claimable · Medicare EPC Accepted",
    seoTargetKeywords: [
      "Orthopedic Physiotherapist near me",
      "Shoulder impingement rehab clinic",
      "Knee arthritis physiotherapy",
      "Joint mobilization specialist"
    ],
    localizedCityKeywords: [
      "Sydney Orthopedic Physio",
      "Metropolis joint pain clinic",
      "Best knee physio Sydney CBD"
    ]
  },
  {
    id: "sports-injury",
    slug: "sports-injury-therapy",
    title: "Sports Injury Therapy",
    category: "Athletic Performance",
    tagline: "Rapid return-to-sport programs designed for runners, team athletes, and weekend warriors.",
    shortDescription: "Specialized sports diagnostic triage, biomechanical video gait analysis, dry needling, and high-performance neuromuscular reconditioning.",
    fullDescription: "From acute hamstring strains to complex ACL rehabilitation and tendonitis, our sports injury specialists treat the root biomechanical deficit, not merely the symptoms. Utilizing high-resolution movement screening, normative dynamometry force measurements, and sport-specific plyometrics, we ensure an accelerated and safe return to peak competition.",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    symptomsTreated: [
      "ACL, MCL & meniscus tears",
      "Hamstring and calf muscle tears",
      "Achilles & patellar tendinopathy",
      "Ankle syndesmosis and inversion sprains",
      "Tennis & Golfer's elbow (epicondylitis)"
    ],
    clinicalTechniques: [
      "High-density dry needling with electro-stimulation",
      "Force plate neuromuscular symmetry assessment",
      "High-load tendon remodeling protocols",
      "Biomechanical video running analysis",
      "Agility, change of direction & return-to-play testing"
    ],
    expectedRecovery: "3 – 12 weeks depending on tissue grade",
    duration: "Initial 60 mins | Follow-up 40 mins",
    rebates: "All major health funds covered · Sports team gap discounts",
    seoTargetKeywords: [
      "Sports injury physiotherapy clinic",
      "ACL rehabilitation specialist",
      "Running injury clinic gait analysis",
      "Achilles tendonitis treatment"
    ],
    localizedCityKeywords: [
      "Sports Physio Sydney CBD",
      "Metropolis athletic rehabilitation",
      "Emergency sports injury consult"
    ]
  },
  {
    id: "post-surgical",
    slug: "post-surgical-rehab",
    title: "Post-Surgical Rehabilitation",
    category: "Surgical Recovery",
    tagline: "Surgeon-aligned phased protocols for rapid post-operative recovery and scar management.",
    shortDescription: "Structured phase 1 to phase 4 clinical post-op programs for knee/hip replacements, spinal fusions, and arthroscopic reconstructions.",
    fullDescription: "Working closely with your orthopedic surgeon's exact operative parameters, we guide your rehabilitation safely through inflammation control, gentle passive mobility, progressive weight-bearing, and functional restoration. Reduce swelling, prevent scar tissue adhesion, and regain confident independence.",
    icon: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80",
    symptomsTreated: [
      "Total knee replacement (TKR) recovery",
      "Total hip arthroplasty (THA) stiffness",
      "Shoulder labral and rotator cuff repair",
      "Lumbar discectomy and spinal fusion recovery",
      "Ankle ligament reconstructive post-op"
    ],
    clinicalTechniques: [
      "Gentle lymphatic drainage & swelling mitigation",
      "Continuous passive motion & gentle capsular stretches",
      "Scar tissue mobilization & desensitization",
      "Hydrotherapy home protocols",
      "Progressive functional closed-kinetic-chain re-training"
    ],
    expectedRecovery: "6 – 16 weeks structured phases",
    duration: "Initial 60 mins | Follow-up 30 mins",
    rebates: "Direct post-op referral care · WorkCover & TAC approved",
    seoTargetKeywords: [
      "Post-surgery physiotherapy protocol",
      "Knee replacement recovery physio",
      "Shoulder surgery rehabilitation",
      "Spinal surgery rehab clinic"
    ],
    localizedCityKeywords: [
      "Post-operative physiotherapist Sydney",
      "Metropolis surgical rehab clinic",
      "Orthopedic post-op recovery center"
    ]
  },
  {
    id: "back-pain-spine",
    slug: "back-pain-relief",
    title: "Back Pain & Spine Relief",
    category: "Spinal Health",
    tagline: "Eliminate debilitating lower back pain, sciatica, disc herniations, and neck spasms.",
    shortDescription: "Comprehensive spinal assessment identifying nerve impingement, discogenic inflammation, facet joint locking, and postural fatigue.",
    fullDescription: "Back pain is the leading cause of disability worldwide. Rather than masking the ache with pills, our spine specialists deliver hands-on spinal manipulation, decompression exercises, directional preference movement (McKenzie method), and deep core motor control reprogramming (transversus abdominis & multifidus).",
    icon: "Stethoscope",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    symptomsTreated: [
      "Acute lumbar disc herniation & bulge",
      "Sciatica & radiating leg numbness / tingling",
      "Thoracic spine stiffness & postural kyphosis",
      "Facet joint arthropathy & back spasms",
      "Cervicogenic headaches & whiplash"
    ],
    clinicalTechniques: [
      "McKenzie mechanical spinal diagnosis & therapy",
      "Manual spinal joint traction and mobilizations",
      "Real-time ultrasound core muscular retraining",
      "Trigger point dry needling for paraspinal muscle spasm",
      "Ergonomic workstation and lifting biomechanics correction"
    ],
    expectedRecovery: "2 – 6 weeks for primary pain reduction",
    duration: "Initial 45 mins | Follow-up 30 mins",
    rebates: "HICAPS Instant Claims · DVA · Chronic Disease Management (CDM)",
    seoTargetKeywords: [
      "Best spine rehabilitation clinic near me",
      "Sciatica nerve pain physiotherapy",
      "Lower back pain physiotherapist",
      "Herniated disc non-surgical rehab"
    ],
    localizedCityKeywords: [
      "Sydney back pain clinic",
      "Metropolis spine physio specialist",
      "Emergency sciatica treatment CBD"
    ]
  },
  {
    id: "geriatric-care",
    slug: "geriatric-mobility-care",
    title: "Geriatric Care & Fall Prevention",
    category: "Active Aging",
    tagline: "Empowering seniors with strength, balance, stability, and confident mobility.",
    shortDescription: "Specialized geriatric physiotherapy focusing on fall risk reduction, osteoporosis bone loading, Parkinson's mobility, and arthritis management.",
    fullDescription: "Preserving autonomy and preventing devastating fractures is at the heart of our senior care practice. We conduct comprehensive multi-component vestibular and balance assessments, prescribe progressive resistance strength training for bone density, and optimize walking aids to keep older adults living vibrantly at home.",
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=900&q=80",
    symptomsTreated: [
      "Imbalance and fear of falling",
      "Post-fracture deconditioning",
      "Osteopenia & severe osteoporosis",
      "Age-related sarcopenia & muscle weakness",
      "Gait hesitation and mobility decline"
    ],
    clinicalTechniques: [
      "Berg Balance Scale & Fall-Proof training protocols",
      "Progressive heavy-resistance osteogenic loading",
      "Proprioceptive neuromuscular facilitation (PNF)",
      "Assistive device prescription & gait education",
      "Home safety and obstacle negotiation training"
    ],
    expectedRecovery: "Ongoing active maintenance & strength cycles",
    duration: "Initial 45 mins | Follow-up 30 mins",
    rebates: "My Aged Care Provider · Home Care Packages (HCP) · DVA Gold Card",
    seoTargetKeywords: [
      "Geriatric physiotherapy clinic",
      "Fall prevention balance therapy",
      "Senior mobility specialist near me",
      "Osteoporosis physiotherapy exercise"
    ],
    localizedCityKeywords: [
      "Sydney senior physiotherapy",
      "Metropolis elderly mobility clinic",
      "Home care physiotherapy services"
    ]
  }
];

export const PRACTITIONERS: Practitioner[] = [
  {
    id: "dr-marcus-vance",
    name: "Dr. Marcus Vance, FACP",
    title: "Clinical Director & Specialist Musculoskeletal Physiotherapist",
    degrees: "B.Physio (Hons), M.Musculoskeletal Physio, PhD (Biomechanics)",
    registrationNumber: "AHPRA: PHY0001849201",
    experienceYears: 16,
    specialties: ["Spine & Disc Pathology", "Complex Orthopedics", "Sports Biomechanics"],
    bio: "Dr. Vance is a recognized leader in spinal and sports rehabilitation with over 16 years of clinical excellence. Having served as head physiotherapist for state rugby and Olympic track athletes, he brings world-class diagnostics and a patient-centered philosophy to every consultation.",
    treatmentPhilosophy: "We do not believe in passive endless treatments. Our goal is rapid pain suppression followed by definitive kinetic strength to ensure your injury never returns.",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    availableDays: ["Monday", "Tuesday", "Thursday", "Friday"]
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins, APAM",
    title: "Senior Sports Physiotherapist & Dry Needling Lead",
    degrees: "B.App.Sc (Physiotherapy), Grad.Cert Sports Physio",
    registrationNumber: "AHPRA: PHY0002194883",
    experienceYears: 11,
    specialties: ["ACL & Knee Rehabilitation", "Running Gait Analysis", "Myofascial Dry Needling"],
    bio: "Sarah brings 11 years of high-performance sports physiotherapy experience. Specializing in lower limb kinetic chain rehabilitation, tendon injuries, and video gait analysis, she is passionate about helping athletes of all levels safely surpass their pre-injury performance.",
    treatmentPhilosophy: "Rehabilitation is an athletic journey. We optimize the entire movement system so you emerge stronger, more resilient, and functionally bulletproof.",
    photo: "https://images.unsplash.com/photo-1594824813642-f83134375b48?auto=format&fit=crop&w=800&q=80",
    availableDays: ["Monday", "Wednesday", "Friday", "Saturday"]
  },
  {
    id: "david-chen",
    name: "David Chen, M.Physio",
    title: "Senior Orthopedic & Post-Operative Physiotherapist",
    degrees: "B.Ex.Sc, Master of Physiotherapy (Syd Uni)",
    registrationNumber: "AHPRA: PHY0003049182",
    experienceYears: 8,
    specialties: ["Post-Surgical Joint Replacement", "Shoulder Rotator Cuff", "Senior Balance & Mobility"],
    bio: "David collaborates directly with leading orthopedic surgeons across Sydney to manage acute post-operative protocols. His empathetic, meticulous hands-on care guides patients seamlessly from post-surgical immobility back to vibrant life.",
    treatmentPhilosophy: "Patience, clear communication, and precise milestone tracking make surgery recovery empowering rather than intimidating.",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    availableDays: ["Tuesday", "Wednesday", "Thursday", "Saturday"]
  }
];

export const CLINIC_REVIEWS: ClinicReview[] = [
  {
    id: "rev-1",
    authorName: "Liam Henderson",
    rating: 5,
    date: "2 weeks ago",
    conditionTreated: "Severe L4/L5 Lumbar Disc Herniation & Sciatica",
    reviewText: "I was crippled with severe sciatica shooting down my left leg and could barely stand for 3 minutes. After 4 sessions with Dr. Marcus Vance combining spinal mobilization and McKenzie decompression, the shooting pain completely ceased. Now back running 5k with zero symptoms. The best physio clinic in town!",
    verifiedPatient: true
  },
  {
    id: "rev-2",
    authorName: "Dr. Elena Rostova",
    rating: 5,
    date: "1 month ago",
    conditionTreated: "Post-Operative ACL Reconstruction",
    reviewText: "As an orthopedic surgeon myself, I am extremely demanding regarding post-op physio. Sarah Jenkins is phenomenal. Her normative force plate testing and structured return-to-sport protocols gave me total confidence in my knee. 10/10 clinical standard.",
    verifiedPatient: true
  },
  {
    id: "rev-3",
    authorName: "Robert MacIntyre",
    rating: 5,
    date: "3 weeks ago",
    conditionTreated: "Rotator Cuff Tendinopathy & Frozen Shoulder",
    reviewText: "Could not lift my arm above shoulder height for 9 months. David Chen pinpointed the scapular dyskinesis immediately. Through targeted dry needling and high-load eccentric rotator cuff exercises, I regained 100% pain-free range. Booking via WhatsApp was also lightning fast!",
    verifiedPatient: true
  },
  {
    id: "rev-4",
    authorName: "Margaret S. (72 yrs)",
    rating: 5,
    date: "2 months ago",
    conditionTreated: "Balance Therapy & Fall Prevention",
    reviewText: "After a scary fall on my porch last autumn, I was terrified to walk alone. The balance and strength exercises here transformed my confidence. The staff treat you like family and always process my health fund rebate on the spot via HICAPS.",
    verifiedPatient: true
  }
];

export const TRUST_BADGES = [
  { label: "AHPRA Registered", desc: "Australian Health Practitioner Regulation Agency" },
  { label: "APA Accredited", desc: "Australian Physiotherapy Association Member" },
  { label: "4.9 ★ Rating", desc: "380+ Verified Google Business Profile Reviews" },
  { label: "Instant Health Fund", desc: "HICAPS on-the-spot claims for Bupa, Medibank & all funds" },
  { label: "15+ Years Clinical Care", desc: "Over 2,500+ successful patient rehabilitations" }
];
