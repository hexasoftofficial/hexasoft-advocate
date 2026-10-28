import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Sparkles, Building2, UserPlus, CalendarCheck, IndianRupee } from 'lucide-react';

interface HowItWorksProps {
  onOpenDemo: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDemo }) => {
  const steps = [
    {
      step: '01',
      icon: Building2,
      title: 'Set Up Your Practice',
      description: 'Configure your chamber or law firm profile, add court locations, establish fee structures, customize your letterhead, and invite associates or clerks with role-based permissions.',
      highlight: 'Chamber setup ready in under 15 minutes'
    },
    {
      step: '02',
      icon: UserPlus,
      title: 'Add Clients & Cases',
      description: 'Import or enter clients with auto-generated Client IDs. Create matters with CNR references, petition types, opposing counsel details, and prayer relief.',
      highlight: 'Vakalatnama & KYC auto-linked'
    },
    {
      step: '03',
      icon: CalendarCheck,
      title: 'Manage Hearings, Documents & Tasks',
      description: 'Stay ahead of daily cause lists. Track court dates, bench details, item numbers, and case stages while delegating drafting and research tasks to associates.',
      highlight: 'Never miss a cause list appearance'
    },
    {
      step: '04',
      icon: IndianRupee,
      title: 'Track Billing, Payments & Reports',
      description: 'Generate GST-compliant fee bills, record advance retainers and installments, track out-of-pocket court disbursements, and review practice revenue reports.',
      highlight: 'Clear financial control & faster collections'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-md inline-block border border-indigo-200/60">
            Straightforward Onboarding
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight text-balance">
            How HexaSoft Advocate Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Transitioning your legal chamber to a modern digital workspace is fast, secure, and supported by our Indian onboarding team.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-black text-indigo-600">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-indigo-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenDemo()}
            className="px-8 py-4 text-sm sm:text-base font-bold bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all inline-flex items-center gap-2.5 cursor-pointer"
          >
            <span>Start Managing Your Practice Smarter</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
