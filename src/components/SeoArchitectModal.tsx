import React, { useState } from 'react';
import { X, Code2, Server, Shield, Globe, Search, Copy, Check, Terminal, FileCode, CheckCircle2, ChevronRight, Layers, Cpu, Database } from 'lucide-react';
import { CLINIC_NAP } from '../data/clinicData';

interface SeoArchitectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoArchitectModal: React.FC<SeoArchitectModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'schema' | 'seo' | 'maintenance' | 'code'>('blueprint');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const schemaJsonLdString = `{
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "PhysicalTherapy", "LocalBusiness"],
  "@id": "https://elevatephysioclinic.com/#clinic",
  "name": "Elevate Physiotherapy & Rehabilitation Clinic",
  "alternateName": "Elevate Physio & Spine Center",
  "url": "https://elevatephysioclinic.com",
  "telephone": "${CLINIC_NAP.phone}",
  "email": "${CLINIC_NAP.email}",
  "priceRange": "$$",
  "currenciesAccepted": "AUD",
  "paymentAccepted": "Cash, Credit Card, HICAPS, Health Insurance, Medicare EPC, WorkCover",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "${CLINIC_NAP.addressStreet}, ${CLINIC_NAP.suite}",
    "addressLocality": "${CLINIC_NAP.suburb}",
    "addressRegion": "${CLINIC_NAP.state}",
    "postalCode": "${CLINIC_NAP.postalCode}",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": ${CLINIC_NAP.latitude},
    "longitude": ${CLINIC_NAP.longitude}
  },
  "hasMap": "${CLINIC_NAP.googleMapsPlaceUrl}",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:30",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "medicalSpecialty": [
    "Physiotherapy",
    "Orthopedic Physical Therapy",
    "Sports Medicine",
    "Spine & Back Pain Therapy",
    "Post-Operative Physical Therapy",
    "Geriatric Physical Therapy"
  ],
  "availableService": [
    {
      "@type": "MedicalTherapy",
      "name": "Orthopedic Rehabilitation",
      "description": "Manual joint mobilization, IASTM, and corrective exercise therapy for joints."
    },
    {
      "@type": "MedicalTherapy",
      "name": "Sports Injury Therapy & Biomechanics",
      "description": "ACL, muscle tear, tendon rehabilitation and normative force plate testing."
    },
    {
      "@type": "MedicalTherapy",
      "name": "Back Pain & Spine Relief",
      "description": "Lumbar disc herniation, sciatica, and cervical posture re-education."
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "${CLINIC_NAP.googleRating}",
    "reviewCount": "${CLINIC_NAP.totalReviews}",
    "bestRating": "5",
    "worstRating": "1"
  }
}`;

  const wordpressPhpSnippet = `<?php
/**
 * Plugin Name: Elevate Clinic Architecture & Core SEO Extension
 * Description: Registers Custom Post Types (CPTs), Medical Schema Injection, and WhatsApp Lead Capture.
 * Author: Expert WordPress Architect & SEO Specialist
 */

// 1. Register Custom Post Types for Medical Services & Practitioners
add_action('init', function() {
    register_post_type('physio_service', [
        'labels' => [
            'name' => 'Clinical Services',
            'singular_name' => 'Clinical Service',
            'add_new_item' => 'Add New Physio Service'
        ],
        'public' => true,
        'has_archive' => true,
        'rewrite' => ['slug' => 'services'],
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'show_in_rest' => true, // Enables Gutenberg / Block Editor
        'menu_icon' => 'dashicons-heart'
    ]);

    register_post_type('practitioner', [
        'labels' => [
            'name' => 'Physiotherapists',
            'singular_name' => 'Physiotherapist',
            'add_new_item' => 'Add New Clinician'
        ],
        'public' => true,
        'has_archive' => false,
        'rewrite' => ['slug' => 'team'],
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-businessman'
    ]);
});

// 2. Automated MedicalClinic JSON-LD Schema Injection in <head>
add_action('wp_head', function() {
    if (is_front_page() || is_singular('physio_service')) {
        echo '<script type="application/ld+json">' . PHP_EOL;
        echo json_encode([
            '@context' => 'https://schema.org',
            '@type' => ['MedicalClinic', 'PhysicalTherapy'],
            'name' => 'Elevate Physiotherapy & Rehabilitation Clinic',
            'telephone' => '+61 2 9876 5432',
            'address' => [
                '@type' => 'PostalAddress',
                'streetAddress' => '742 Medical Center Blvd, Suite 300',
                'addressLocality' => 'Metropolis Central',
                'postalCode' => '2000',
                'addressCountry' => 'AU'
            ],
            'geo' => [
                '@type' => 'GeoCoordinates',
                'latitude' => -33.8688,
                'longitude' => 151.2093
            ]
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        echo PHP_EOL . '</script>' . PHP_EOL;
    }
});

// 3. Spam-Protected AJAX Intake Handler with Email Notification
add_action('wp_ajax_nopriv_submit_patient_intake', 'elevate_handle_patient_intake');
add_action('wp_ajax_submit_patient_intake', 'elevate_handle_patient_intake');

function elevate_handle_patient_intake() {
    // Check Honeypot spam field
    if (!empty($_POST['clinic_hp_field'])) {
        wp_send_json_error(['message' => 'Spam detected']);
    }

    $patient_name = sanitize_text_field($_POST['patient_name']);
    $patient_phone = sanitize_text_field($_POST['patient_phone']);
    $notes = sanitize_textarea_field($_POST['injury_notes']);

    // Log to custom database table or post
    $post_id = wp_insert_post([
        'post_type' => 'patient_intake',
        'post_title' => $patient_name . ' (' . current_time('Y-m-d H:i') . ')',
        'post_status' => 'private'
    ]);

    // Dispatch Admin Notification Email
    wp_mail(
        'reception@elevatephysioclinic.com',
        'URGENT: New Patient Intake Form Submitted - ' . $patient_name,
        "Name: $patient_name\\nPhone: $patient_phone\\nNotes: $notes"
    );

    wp_send_json_success(['booking_ref' => 'ELV-' . $post_id]);
}
`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 text-slate-100 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>WordPress Architecture & Local SEO Strategy Blueprint</span>
                <span className="text-[11px] font-mono bg-teal-900/60 text-teal-300 border border-teal-700/50 px-2 py-0.5 rounded-md">
                  v2.4 Spec
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Full-Stack Technical Architecture, Schema.org Markup, and Organic Google Maps Ranking Guide
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close Blueprint Spec"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="bg-slate-900/90 border-b border-slate-800 px-6 flex flex-wrap gap-2 pt-3">
          {[
            { id: 'blueprint', label: '1. Technical Architecture & WordPress Stack', icon: Layers },
            { id: 'schema', label: '2. JSON-LD Medical Schema', icon: FileCode },
            { id: 'seo', label: '3. Local SEO & Maps Strategy', icon: Search },
            { id: 'maintenance', label: '4. 1-Year Support & Security SLA', icon: Shield },
            { id: 'code', label: '5. functions.php Code Snippet', icon: Terminal },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all border-b-2 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-slate-800 text-teal-300 border-teal-400'
                    : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-sm">
          {activeTab === 'blueprint' && (
            <div className="space-y-6">
              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5">
                <h4 className="text-base font-bold text-teal-300 flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4" />
                  <span>High-Performance Platform Architecture</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Engineered to meet the exact Core Web Vitals criteria (Largest Contentful Paint &lt; 1.8s, Cumulative Layout Shift &lt; 0.05, Interaction to Next Paint &lt; 100ms) to maximize organic search rankings on Google.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                  <h5 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-2">
                    <Server className="w-4 h-4 text-teal-400" />
                    <span>Option A: Lightweight WordPress Architecture</span>
                  </h5>
                  <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                    <li><strong className="text-slate-200">Core:</strong> WordPress 6.x utilizing Gutenberg Block-Based Theme (Blocksy/GeneratePress) for zero-bloat CSS.</li>
                    <li><strong className="text-slate-200">Custom Post Types:</strong> `physio_service`, `practitioner`, `patient_intake` with custom taxonomies (Body Part, Specialty).</li>
                    <li><strong className="text-slate-200">Dynamic Content:</strong> Advanced Custom Fields (ACF Pro) storing symptoms array, recovery timeline, and AHPRA IDs.</li>
                    <li><strong className="text-slate-200">Form & Lead Capture:</strong> Lightweight REST API endpoint with server-side honeypot and instant admin email dispatcher.</li>
                  </ul>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                  <h5 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-2">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <span>Option B: Modern Decoupled / Custom Stack</span>
                  </h5>
                  <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                    <li><strong className="text-slate-200">Frontend:</strong> React 19 + Tailwind CSS 4 with pre-rendered static HTML5 for immediate First Paint.</li>
                    <li><strong className="text-slate-200">Backend API:</strong> Express / PHP lightweight server for intake logging and WhatsApp webhook relays.</li>
                    <li><strong className="text-slate-200">Hosting:</strong> NVMe SSD web servers behind Cloudflare Edge CDN with Brotli compression and HTTP/3 QUIC.</li>
                    <li><strong className="text-slate-200">Automated Backups:</strong> Daily off-site cron synchronization to AWS S3 with 30-day snapshot retention.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-4 text-xs space-y-2">
                <h5 className="font-bold text-white">Clean URL & Hierarchy Structure</h5>
                <p className="text-slate-400 font-mono text-[11px] bg-slate-950 p-3 rounded-lg border border-slate-800">
                  / (Homepage: Local Focus, Hero, WhatsApp & Consultation CTAs, GBP Reviews)<br />
                  ├── /services/ (Interactive Service Hub)<br />
                  │   ├── /services/orthopedic-rehabilitation/ (Target: "Orthopedic Physiotherapy Sydney")<br />
                  │   ├── /services/sports-injury-therapy/ (Target: "Sports Injury Physio Sydney CBD")<br />
                  │   ├── /services/back-pain-relief/ (Target: "Best Spine Rehabilitation Clinic near me")<br />
                  │   ├── /services/post-surgical-rehab/ (Target: "Knee & Hip Replacement Post-Op Physio")<br />
                  │   └── /services/geriatric-mobility-care/ (Target: "Fall Prevention Elderly Physio")<br />
                  ├── /team/ (Specialist bios, AHPRA licenses, credentials)<br />
                  └── /book-consultation/ (Contact & Intake Hub, Map, Parking Guidance)
                </p>
              </div>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-teal-300">Schema.org / MedicalClinic JSON-LD</h4>
                  <p className="text-xs text-slate-400">
                    Compliant with Google Rich Results for Medical Clinics, LocalBusinesses, and Physical Therapy.
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(schemaJsonLdString, 'schema-code')}
                  className="inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-500 text-slate-950 text-xs font-bold px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedSection === 'schema-code' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedSection === 'schema-code' ? 'Copied to Clipboard!' : 'Copy Schema Code'}</span>
                </button>
              </div>

              <pre className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-[11px] font-mono text-teal-200 overflow-x-auto max-h-96">
                {schemaJsonLdString}
              </pre>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-6">
              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5">
                <h4 className="text-base font-bold text-teal-300 mb-2">
                  Google Maps & Local 3-Pack Organic Ranking Playbook
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ranking organically in the top 3 spots of Google Maps requires strict alignment between your website's on-page architecture, Schema coordinates, and Google Business Profile (GBP) citations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                  <h5 className="font-bold text-white uppercase tracking-wider text-[11px] text-teal-400">
                    1. NAP Consistency & Local Citations
                  </h5>
                  <ul className="text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>Exact string match across GBP, Apple Maps, HealthEngine, White Pages, and Yellow Pages.</li>
                    <li>Embedded physical Google Map with dynamic directions API query origin.</li>
                    <li>Geo Meta tags: <code>geo.position: -33.8688, 151.2093</code> and <code>ICBM</code>.</li>
                  </ul>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                  <h5 className="font-bold text-white uppercase tracking-wider text-[11px] text-teal-400">
                    2. Local High-Intent Keyword Targeting
                  </h5>
                  <ul className="text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>Primary H1: <code>[City/Area] Physiotherapist | Pain Relief & Rehabilitation</code></li>
                    <li>Secondary Target: <code>Best Spine Rehabilitation Clinic Near Me</code></li>
                    <li>Condition Clusters: Sciatica, ACL reconstruction, Frozen shoulder, Cervical whiplash.</li>
                  </ul>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                  <h5 className="font-bold text-white uppercase tracking-wider text-[11px] text-teal-400">
                    3. Review Velocity & Conversion Signals
                  </h5>
                  <ul className="text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>Automated post-session SMS requesting Google reviews with direct deep link.</li>
                    <li>Replying to 100% of reviews with relevant anatomical keywords included.</li>
                    <li>Direct WhatsApp click-to-chat generating high mobile engagement signals.</li>
                  </ul>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                  <h5 className="font-bold text-white uppercase tracking-wider text-[11px] text-teal-400">
                    4. Technical Core Web Vitals
                  </h5>
                  <ul className="text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>Under 2-second target load time on 4G mobile devices.</li>
                    <li>AVIF/WebP image formats with strict explicit width/height tags.</li>
                    <li>Preconnected Google Fonts and DNS prefetch for Google Maps.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'maintenance' && (
            <div className="space-y-6">
              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5">
                <h4 className="text-base font-bold text-teal-300 mb-2">
                  Ongoing 1-Year Maintenance & Security SLA
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Medical websites handle sensitive patient inquiries and must maintain 99.9% uptime, strict HTTPS SSL encryption, and uncompromised speed.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Weekly Core, Theme & Plugin Security Patching</h5>
                    <p className="text-slate-400 mt-0.5">
                      Staging sandbox testing before deploying any core updates. Vulnerability scanning for zero-day exploits, SQL injection attempts, and malware scripts.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Automated Uptime Monitoring & Database Optimization</h5>
                    <p className="text-slate-400 mt-0.5">
                      60-second interval external ping checks with SMS incident alerting. Weekly MySQL/PostgreSQL table re-indexing, transient cleanup, and Redis object caching optimization.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Monthly Performance & Local Search Ranking Audits</h5>
                    <p className="text-slate-400 mt-0.5">
                      Comprehensive Google Search Console, Google Business Profile insights, and Core Web Vitals audit with monthly rank tracking reports for 50+ local medical keywords.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-teal-300">WordPress Implementation Code (functions.php)</h4>
                  <p className="text-xs text-slate-400">
                    Ready to paste into your WordPress child theme or custom clinic functionality plugin.
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(wordpressPhpSnippet, 'php-code')}
                  className="inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-500 text-slate-950 text-xs font-bold px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedSection === 'php-code' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedSection === 'php-code' ? 'Copied PHP Code!' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-[11px] font-mono text-teal-200 overflow-x-auto max-h-96">
                {wordpressPhpSnippet}
              </pre>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-slate-950 px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Elevate Physiotherapy Technical Specification Document</span>
          <button
            onClick={onClose}
            className="text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer"
          >
            Close Blueprint
          </button>
        </div>
      </div>
    </div>
  );
};
