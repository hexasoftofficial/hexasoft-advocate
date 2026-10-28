import React from 'react';
import {
  FileSpreadsheet,
  Clock,
  FolderX,
  CreditCard,
  Users2,
  EyeOff,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface ProblemSectionProps {
  onOpenDemo: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenDemo }) => {
  const problems = [
    {
      icon: FileSpreadsheet,
      title: 'Scattered Case Information',
      description: 'Important case notes, CNR numbers, next steps, and opposing party details fragmented across physical paper diaries, WhatsApp chats, and disconnected spreadsheets.',
      impact: 'Hours wasted tracking down case history before court appearances.'
    },
    {
      icon: Clock,
      title: 'Missed Deadlines',
      description: 'Managing dozens of cause lists across different court complexes makes tracking statutory limitation periods, replication filings, and compliance deadlines risky.',
      impact: 'Risk of procedural default, ex-parte orders, and stressed associates.'
    },
    {
      icon: FolderX,
      title: 'Disorganized Documents',
      description: 'Vakalatnamas, plaints, written statements, certified court orders, and evidence annexures stored in unstructured personal folders or lost in email threads.',
      impact: 'Last-minute panic before morning cause list calls in courtrooms.'
    },
    {
      icon: CreditCard,
      title: 'Difficult Billing',
      description: 'Manually calculating drafting charges, conference fees, out-of-pocket court expenses, and clerkage leads to delayed invoices and unrecovered disbursements.',
      impact: 'Unbilled billable hours and accumulated pending receivables.'
    },
    {
      icon: Users2,
      title: 'Team Coordination',
      description: 'Partners, senior advocates, junior associates, and court clerks lack a unified system to delegate cause list appearances, drafting tasks, and follow-ups.',
      impact: 'Clashing hearing schedules and confusion over court attendances.'
    },
    {
      icon: EyeOff,
      title: 'Limited Visibility',
      description: 'Chambers struggle to view overall practice health, monthly revenue collections, active litigation velocity, and client profitability in one clear dashboard.',
      impact: 'Lack of business data to plan strategic chamber growth.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-md inline-block border border-rose-200/60">
            The Traditional Practice Bottleneck
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight text-balance">
            Managing a Legal Practice Shouldn't Be Complicated
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Managing multiple cases, clients, hearings, documents and payments manually can consume valuable time.
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((prob, index) => {
            const Icon = prob.icon;
            return (
              <div
                key={index}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-2.5">
                    {prob.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {prob.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/70 text-xs text-rose-700 font-medium flex items-start gap-1.5">
                  <span className="font-bold">Impact:</span>
                  <span>{prob.impact}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-mono uppercase tracking-widest text-indigo-300">
              The Modern Legal Tech Solution
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
              One Platform. One Centralized Legal Workspace.
            </div>
            <p className="text-sm text-slate-300 max-w-xl">
              Replace fragmented diaries, paper files, and messy spreadsheets with HexaSoft Advocate — engineered specifically for Indian advocates, lawyers, and law firms.
            </p>
          </div>

          <button
            onClick={() => onOpenDemo()}
            className="shrink-0 px-6 py-3.5 text-sm font-bold bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>See the Difference</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
