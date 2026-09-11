import { PainZone } from '../types';

export const PAIN_ZONES: PainZone[] = [
  {
    id: 'neck-cervical',
    name: 'Neck & Cervical Spine',
    anatomicalRegion: 'C1–C7 Vertebrae, Trapezius & Levator Scapulae',
    view: 'both',
    category: 'Spine & Neck',
    serviceId: 'back-pain-spine',
    badgeText: 'Spinal Relief',
    symptoms: [
      'Stiff neck and restricted rotation',
      'Cervicogenic tension headaches',
      'Sharp pain turning head while driving',
      'Tingling radiating down into shoulders'
    ],
    commonConditions: [
      'Cervical disc bulge / herniation',
      'Facet joint lock & acute torticollis',
      'Whiplash injury & postural strain',
      'Upper cross syndrome from desk work'
    ],
    treatmentHighlights: [
      'Targeted cervical joint mobilization',
      'Trigger point myofascial therapy',
      'Deep neck flexor motor retraining',
      'Ergonomic monitor & posture correction'
    ],
    frontCoords: { x: 150, y: 88 },
    backCoords: { x: 150, y: 92 }
  },
  {
    id: 'shoulder-rotator-cuff',
    name: 'Shoulder & Rotator Cuff',
    anatomicalRegion: 'Glenohumeral Joint, Supraspinatus & Subacromial Space',
    view: 'both',
    category: 'Upper Extremity',
    serviceId: 'orthopedic-rehab',
    badgeText: 'Orthopedic Care',
    symptoms: [
      'Pain when reaching overhead or behind back',
      'Dull deep ache waking you up at night',
      'Clicking, catching, or weakness lifting objects',
      'Loss of active arm elevation'
    ],
    commonConditions: [
      'Rotator cuff tendinopathy & partial tears',
      'Subacromial impingement syndrome',
      'Adhesive capsulitis (Frozen Shoulder)',
      'AC joint sprains & labral fraying'
    ],
    treatmentHighlights: [
      'Rotator cuff isometric & eccentric loading',
      'Scapulothoracic rhythm re-education',
      'Gentle joint capsule mobilization',
      'Ultrasound & soft-tissue release'
    ],
    frontCoords: { x: 96, y: 122 },
    backCoords: { x: 96, y: 122 }
  },
  {
    id: 'upper-thoracic-back',
    name: 'Upper & Mid Back (Thoracic)',
    anatomicalRegion: 'T1–T12 Spine, Scapular Retractors & Rib Attachments',
    view: 'posterior',
    category: 'Spine & Neck',
    serviceId: 'back-pain-spine',
    badgeText: 'Spinal Health',
    symptoms: [
      'Burning pain between shoulder blades',
      'Rib cage stiffness during deep breathing',
      'Hunched posture fatigue after computer hours',
      'Interscapular muscle knots'
    ],
    commonConditions: [
      'Thoracic facet joint syndrome',
      'Costovertebral joint dysfunction (rib sprain)',
      'Postural thoracic kyphosis',
      'Rhomboid and mid-trapezius trigger points'
    ],
    treatmentHighlights: [
      'Thoracic extension & rotational mobilization',
      'Rib joint traction and breath mechanics',
      'Scapular stabilizer strengthening',
      'Foam roller thoracic mobility prescription'
    ],
    backCoords: { x: 150, y: 155 }
  },
  {
    id: 'elbow-epicondyle',
    name: 'Elbow (Tennis & Golfer\'s Elbow)',
    anatomicalRegion: 'Lateral & Medial Humeral Epicondyles, Common Extensor Tendon',
    view: 'both',
    category: 'Upper Extremity',
    serviceId: 'sports-injury',
    badgeText: 'Sports Rehab',
    symptoms: [
      'Sharp pain on outer or inner elbow with gripping',
      'Weakness holding coffee cup or shaking hands',
      'Ache radiating into forearm flexor muscles',
      'Tendon tenderness to touch'
    ],
    commonConditions: [
      'Lateral epicondylalgia (Tennis Elbow)',
      'Medial epicondylitis (Golfer\'s Elbow)',
      'Biceps/triceps tendinopathy',
      'Radial tunnel nerve irritation'
    ],
    treatmentHighlights: [
      'Tyler Twist & eccentric forearm loading',
      'Electro-dry needling to extensor muscles',
      'Counterforce bracing & grip ergonomics',
      'Instrument-assisted cross-friction massage'
    ],
    frontCoords: { x: 68, y: 200 },
    backCoords: { x: 68, y: 200 }
  },
  {
    id: 'wrist-hand-carpal',
    name: 'Wrist & Hand',
    anatomicalRegion: 'Carpal Bones, Median Nerve & TFCC Ligament Complex',
    view: 'anterior',
    category: 'Upper Extremity',
    serviceId: 'orthopedic-rehab',
    badgeText: 'Joint Care',
    symptoms: [
      'Numbness and pins & needles in thumb and fingers',
      'Wrist clicking or weakness pushing up from chair',
      'Ache along thumb base (de Quervain\'s)',
      'Morning stiffness in hand joints'
    ],
    commonConditions: [
      'Carpal tunnel syndrome (median nerve compression)',
      'de Quervain\'s tenosynovitis',
      'Triangular fibrocartilage complex (TFCC) sprain',
      'Basal thumb osteoarthritis'
    ],
    treatmentHighlights: [
      'Median nerve neurodynamic gliding',
      'Carpal bone passive mobilization',
      'Custom splinting & ergonomics modification',
      'Tendon gliding and intrinsic hand strengthening'
    ],
    frontCoords: { x: 50, y: 270 }
  },
  {
    id: 'lumbar-sciatica',
    name: 'Lower Back & Sciatica (L1–S1)',
    anatomicalRegion: 'Lumbar Lordosis, Sacroiliac (SI) Joint & Sciatic Nerve Root',
    view: 'posterior',
    category: 'Spine & Neck',
    serviceId: 'back-pain-spine',
    badgeText: 'Spine Specialist',
    symptoms: [
      'Piercing or dull ache in low back after sitting',
      'Electric shock pain or tingling down back of leg',
      'Pain when bending forward or tying shoes',
      'Inability to stand upright in the morning'
    ],
    commonConditions: [
      'L4/L5 & L5/S1 disc bulge / herniation',
      'Sciatic nerve radiculopathy',
      'Sacroiliac joint (SIJ) dysfunction',
      'Lumbar spinal stenosis & spondylolisthesis'
    ],
    treatmentHighlights: [
      'McKenzie directional preference extension protocol',
      'Real-time ultrasound core muscle retraining',
      'Gentle spinal decompression and traction',
      'Sciatic nerve flossing & motor stabilization'
    ],
    backCoords: { x: 150, y: 220 }
  },
  {
    id: 'hip-groin-labrum',
    name: 'Hip Joint, Labrum & Groin',
    anatomicalRegion: 'Acetabulofemoral Joint, Femoroacetabular Impingement (FAI)',
    view: 'both',
    category: 'Pelvis & Hip',
    serviceId: 'orthopedic-rehab',
    badgeText: 'Joint & Post-Op',
    symptoms: [
      'Deep groin pinch when squatting or getting out of car',
      'Lateral hip pain when lying on side in bed',
      'Stiffness putting on socks or shoes',
      'Clicking or giving-way sensation in hip'
    ],
    commonConditions: [
      'Femoroacetabular Impingement (FAI - CAM/Pincer)',
      'Acetabular labral tears',
      'Greater trochanteric pain syndrome (gluteal tendinopathy)',
      'Hip osteoarthritis & total hip replacement recovery'
    ],
    treatmentHighlights: [
      'Hip capsule distractive mobilization',
      'Gluteus medius/maximus eccentric strengthening',
      'Pelvic stability and gait normalization',
      'Surgeon-directed post-op hip recovery phases'
    ],
    frontCoords: { x: 122, y: 275 },
    backCoords: { x: 122, y: 275 }
  },
  {
    id: 'glutes-hamstrings',
    name: 'Glutes, Piriformis & Hamstrings',
    anatomicalRegion: 'Gluteal Complex, Ischial Tuberosity & Biceps Femoris',
    view: 'posterior',
    category: 'Lower Extremity',
    serviceId: 'sports-injury',
    badgeText: 'Athletic Recovery',
    symptoms: [
      'Sharp pull in back of thigh during sprinting or kicking',
      'Ache directly under sit-bone when driving or sitting',
      'Tightness deep in buttocks compressing nerve',
      'Difficulty bending forward at the waist'
    ],
    commonConditions: [
      'Acute hamstring strain / muscle fiber tear',
      'Proximal hamstring tendinopathy (high hamstring)',
      'Piriformis syndrome mimicking sciatica',
      'Gluteal myofascial trigger points'
    ],
    treatmentHighlights: [
      'Nordic hamstring eccentric strength progression',
      'Dry needling for deep gluteal hypertonicity',
      'Isokinetic force balance testing',
      'Dynamic sprinting mechanics correction'
    ],
    backCoords: { x: 130, y: 345 }
  },
  {
    id: 'knee-patella-acl',
    name: 'Knee (ACL, Meniscus & Patella)',
    anatomicalRegion: 'Tibiofemoral Joint, Patellofemoral Articulation & Cruciate Ligaments',
    view: 'anterior',
    category: 'Lower Extremity',
    serviceId: 'sports-injury',
    badgeText: 'Sports & Post-Op',
    symptoms: [
      'Knee giving way, popping, or feeling unstable',
      'Swelling and effusion after sports or pivoting',
      'Ache behind kneecap going down stairs',
      'Joint locking or difficulty straightening fully'
    ],
    commonConditions: [
      'Anterior cruciate ligament (ACL) sprain / reconstruction',
      'Medial/lateral meniscus tears',
      'Patellofemoral pain syndrome (Runner\'s Knee)',
      'Patellar tendinopathy (Jumper\'s Knee) & osteoarthritis'
    ],
    treatmentHighlights: [
      'Force plate quadriceps symmetry testing',
      'Closed-kinetic-chain progressive loading',
      'Patellar taping & tracking alignment',
      'Return-to-sport agility and hop test clearance'
    ],
    frontCoords: { x: 130, y: 420 }
  },
  {
    id: 'calf-achilles',
    name: 'Calf & Achilles Tendon',
    anatomicalRegion: 'Gastrocnemius, Soleus & Achilles Tendon Insertional Complex',
    view: 'posterior',
    category: 'Lower Extremity',
    serviceId: 'sports-injury',
    badgeText: 'Tendon Protocol',
    symptoms: [
      'Stiff, tender Achilles tendon on first morning steps',
      'Sudden sharp calf "kick" feeling while running',
      'Thickened or swollen tendon cord above heel',
      'Pain when pushing off toes or running hills'
    ],
    commonConditions: [
      'Mid-portion & insertional Achilles tendinopathy',
      'Medial gastrocnemius tear ("Tennis Leg")',
      'Soleus deep compartment strain',
      'Post-Achilles repair phased rehabilitation'
    ],
    treatmentHighlights: [
      'Heavy-slow resistance (HSR) tendon loading',
      'Isometric tendon pain-relief holds',
      'Video running cadence & foot-strike analysis',
      'Heel-lift orthotic tapering protocols'
    ],
    backCoords: { x: 132, y: 490 }
  },
  {
    id: 'ankle-foot-plantar',
    name: 'Ankle & Foot (Sprains & Plantar Fascia)',
    anatomicalRegion: 'Talocrural Joint, ATFL Ligament & Plantar Aponeurosis',
    view: 'both',
    category: 'Lower Extremity',
    serviceId: 'sports-injury',
    badgeText: 'Mobility & Sports',
    symptoms: [
      'Severe pain in heel on getting out of bed',
      'Swelling and bruising after rolling the ankle',
      'Instability walking on uneven pavement',
      'Burning ache through foot arch'
    ],
    commonConditions: [
      'Lateral ankle ligament inversion sprain (ATFL / CFL)',
      'High ankle syndesmosis sprain',
      'Plantar fasciitis / fasciopathy',
      'Posterior tibial tendon dysfunction (PTTD)'
    ],
    treatmentHighlights: [
      'Mulligan mobilization with movement (MWM) for dorsiflexion',
      'High-load plantar fascia windlass exercise',
      'Wobble-board proprioceptive balance training',
      'Supportive taping and footwear prescription'
    ],
    frontCoords: { x: 132, y: 575 },
    backCoords: { x: 132, y: 575 }
  },
  {
    id: 'senior-balance-mobility',
    name: 'Full Body Balance & Fall Prevention',
    anatomicalRegion: 'Vestibular System, Proprioceptive Kinematics & Core Posture',
    view: 'both',
    category: 'Pelvis & Hip',
    serviceId: 'geriatric-care',
    badgeText: 'Senior Care',
    symptoms: [
      'Unsteadiness turning corners or reaching overhead',
      'Fear of falling leading to avoiding walks',
      'Weakness standing up from low armchairs',
      'Shuffling steps or gait hesitation'
    ],
    commonConditions: [
      'Age-related balance decline & fall vulnerability',
      'Post-fall loss of confidence',
      'Osteopenia & osteoporosis fracture risk',
      'Parkinsonian gait and sarcopenia'
    ],
    treatmentHighlights: [
      'Berg Balance and Timed Up & Go (TUG) testing',
      'Fall-proof dynamic stepping reactions',
      'Osteogenic high-resistance bone loading',
      'Walking aid tailoring and home hazard review'
    ],
    frontCoords: { x: 150, y: 310 },
    backCoords: { x: 150, y: 310 }
  }
];
