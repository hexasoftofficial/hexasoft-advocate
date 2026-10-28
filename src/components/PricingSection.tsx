import React, { useState } from 'react';
import { Check, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle, Phone, MessageSquare, IndianRupee } from 'lucide-react';
import { PRICING_PLANS, BRAND_CONFIG } from '../data/legalData';

interface PricingSectionProps {
  onOpenDemo: (selectedPlan?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo }) => {
  const [showMatrix, setShowMatrix] = useState(false);
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent(BRAND_CONFIG.whatsappMessage)}`;

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-md inline-block border border-indigo-200/60">
            Transparent Indian Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight text-balance">
            Simple Plans for Every Legal Practice
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Transparent annual subscriptions tailored for solo advocates, multi-lawyer chambers, and expanding law firms across India.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isProfessional = plan.popular;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                  isProfessional
                    ? 'bg-white border-2 border-indigo-600 shadow-xl ring-4 ring-indigo-600/10 scale-100 lg:-translate-y-2'
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
                } p-6 sm:p-8`}
              >
                {/* Recommended Badge on Plan 2 */}
                {isProfessional && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    ⭐ Recommended Plan
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 font-heading">
                      {plan.name}
                    </h3>
                    {plan.id === 'premium' && (
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        👑 Law Firms
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-indigo-700 mb-6">
                    Best for: {plan.targetAudience}
                  </p>

                  {/* Pricing Tag */}
                  <div className="pb-6 mb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-mono tracking-tight tabular-nums">
                        ₹{plan.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        / Year
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      Annual billing · All 16 core legal modules
                    </span>
                  </div>

                  {/* Hard Limits Breakdown */}
                  <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs mb-6 font-mono">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-sans">Team Members</span>
                      <span className="font-bold text-slate-900">{plan.teamMembers} Users</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-sans">Active Cases</span>
                      <span className="font-bold text-slate-900">{plan.cases} Matters</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-sans">Active Clients</span>
                      <span className="font-bold text-slate-900">{plan.clients} Clients</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-sans">Vault Storage</span>
                      <span className="font-bold text-slate-900">{plan.storage} Cloud</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8 text-xs text-slate-700">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Included Capabilities:
                    </div>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                    {plan.id === 'premium' && (
                      <div className="flex items-start gap-2.5 text-indigo-700 font-bold">
                        <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span>24/7 Dedicated Support</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => onOpenDemo(plan.name)}
                    className={`w-full py-3 px-4 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isProfessional
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/25'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    Free setup assistance & data migration support
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Matrix Toggle */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowMatrix(!showMatrix)}
            className="text-xs font-bold text-indigo-700 hover:text-indigo-800 underline cursor-pointer"
          >
            {showMatrix ? 'Hide Full Module Comparison' : 'View Full Side-by-Side Feature Comparison Matrix'}
          </button>
        </div>

        {/* Detailed Side-by-Side Matrix */}
        {showMatrix && (
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-3">Module / Specification</th>
                  <th className="py-3 px-3">Basic (₹24,000/yr)</th>
                  <th className="py-3 px-3 text-indigo-700 font-bold">Professional (₹36,000/yr)</th>
                  <th className="py-3 px-3">Premium (₹60,000/yr)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Target Audience</td>
                  <td className="py-2.5 px-3">Individual Advocates</td>
                  <td className="py-2.5 px-3 font-semibold text-indigo-700">Growing Practices</td>
                  <td className="py-2.5 px-3">Growing Law Firms</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Team Members Included</td>
                  <td className="py-2.5 px-3 font-mono">25 Members</td>
                  <td className="py-2.5 px-3 font-mono font-bold text-indigo-700">50 Members</td>
                  <td className="py-2.5 px-3 font-mono">75 Members</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Active Cases Limit</td>
                  <td className="py-2.5 px-3 font-mono">50 Cases</td>
                  <td className="py-2.5 px-3 font-mono font-bold text-indigo-700">100 Cases</td>
                  <td className="py-2.5 px-3 font-mono">200 Cases</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Active Clients Limit</td>
                  <td className="py-2.5 px-3 font-mono">25 Clients</td>
                  <td className="py-2.5 px-3 font-mono font-bold text-indigo-700">75 Clients</td>
                  <td className="py-2.5 px-3 font-mono">100 Clients</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Document Vault Storage</td>
                  <td className="py-2.5 px-3 font-mono">1 GB</td>
                  <td className="py-2.5 px-3 font-mono font-bold text-indigo-700">5 GB</td>
                  <td className="py-2.5 px-3 font-mono">25 GB</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Mobile App (iOS & Android)</td>
                  <td className="py-2.5 px-3 text-slate-400">—</td>
                  <td className="py-2.5 px-3 text-slate-400">—</td>
                  <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">GST-Ready Tax Billing</td>
                  <td className="py-2.5 px-3 text-emerald-600">✓ Included</td>
                  <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ Included</td>
                  <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Client Portal Access</td>
                  <td className="py-2.5 px-3 text-emerald-600">✓ Included</td>
                  <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ Included</td>
                  <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Customer Support</td>
                  <td className="py-2.5 px-3">Standard Support</td>
                  <td className="py-2.5 px-3 font-semibold text-indigo-700">Priority Assistance</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-600">24/7 Dedicated Support</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* PRICING CTA BANNER (Explicitly requested in prompt) */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 font-heading">
              Not Sure Which Plan Is Right for You?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Talk to our team and get a personalized demo. We will analyze your caseload and team structure to recommend the best fit.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Talk to HexaSoft</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
