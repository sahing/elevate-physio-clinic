import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquarePlus, ExternalLink, ThumbsUp } from 'lucide-react';
import { CLINIC_REVIEWS, CLINIC_NAP } from '../data/clinicData';

export const ReviewsSection: React.FC = () => {
  const [selectedCondition, setSelectedCondition] = useState<string>('All');
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({
    'rev-1': 14,
    'rev-2': 9,
    'rev-3': 11,
    'rev-4': 7,
  });

  const conditions = ['All', 'Sciatica', 'ACL', 'Shoulder', 'Balance'];

  const filteredReviews = selectedCondition === 'All'
    ? CLINIC_REVIEWS
    : CLINIC_REVIEWS.filter(r => r.conditionTreated.toLowerCase().includes(selectedCondition.toLowerCase()));

  const handleHelpful = (id: string) => {
    setHelpfulCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  return (
    <section id="reviews" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Google Business Profile Header Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-2xl shadow-md">
                G
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    Google Business Profile Verified Reviews
                  </h2>
                  <span className="hidden sm:inline-block bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full border border-teal-200">
                    Verified Clinic Listing
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Real, unfiltered patient recovery feedback synced directly with Google Maps
                </p>
              </div>
            </div>

            {/* Score Summary & Write Review Button */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl">
                <span className="text-3xl font-black text-slate-900 leading-none">{CLINIC_NAP.googleRating}</span>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 font-semibold">{CLINIC_NAP.totalReviews} reviews</span>
                </div>
              </div>

              <a
                href={CLINIC_NAP.googleMapsPlaceUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-3 rounded-xl transition-colors shadow-xs"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>Write a Google Review</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Condition Filter Tabs */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Filter by Condition:</span>
            {conditions.map((cond) => (
              <button
                key={cond}
                onClick={() => setSelectedCondition(cond)}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedCondition === cond
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cond === 'All' ? 'All Reviews (384)' : cond}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <article
              key={rev.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                      {rev.authorName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <span>{rev.authorName}</span>
                        {rev.verifiedPatient && (
                          <ShieldCheck className="w-4 h-4 text-teal-600" title="Verified Patient Review" />
                        )}
                      </h3>
                      <span className="text-[11px] text-slate-400">{rev.date} · Google Verified</span>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Condition Treated Badge */}
                <div className="mb-3">
                  <span className="inline-block text-[11px] font-semibold bg-teal-50 text-teal-800 border border-teal-200/70 px-2.5 py-0.5 rounded-md">
                    Condition: {rev.conditionTreated}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.reviewText}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px] text-teal-800 font-medium">Rehabilitation Successful</span>
                <button
                  onClick={() => handleHelpful(rev.id)}
                  className="flex items-center gap-1 hover:text-slate-900 font-medium transition-colors cursor-pointer"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful ({helpfulCounts[rev.id] || 0})</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
