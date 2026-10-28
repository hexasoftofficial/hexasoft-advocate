import React, { useState } from 'react';
import {
  Gavel,
  Calendar,
  IndianRupee,
  Clock,
  ArrowRight,
  TrendingUp,
  FileText,
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  FolderOpen,
  PieChart,
  BarChart3,
  Search,
  Filter,
  Plus
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/legalData';

interface ProductDashboardSectionProps {
  onOpenDemo: () => void;
  onScrollToHowItWorks: () => void;
}

export const ProductDashboardSection: React.FC<ProductDashboardSectionProps> = ({
  onOpenDemo,
  onScrollToHowItWorks
}) => {
  const [activeMetric, setActiveMetric] = useState<'revenue' | 'cases' | 'hearings' | 'tasks'>('revenue');

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-md inline-block border border-indigo-200/60">
            Unified Command Center
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight text-balance">
            Your Entire Legal Practice at a Glance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            From morning cause lists to month-end GST billing, experience a cockpit engineered for modern Indian advocates and managing partners.
          </p>
        </div>

        {/* Dashboard Showcase Frame */}
        <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-slate-800 text-slate-100">
          {/* Top Bar inside the Dashboard Frame */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="text-xs font-mono text-indigo-400">CHAMBER WORKSPACE</div>
              <div className="text-xl font-bold font-heading text-white">
                HexaSoft Advocate · Practice Cockpit
              </div>
            </div>

            {/* Quick Action Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => onOpenDemo()}
                className="px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 text-indigo-400" />
                <span>New Matter</span>
              </button>
              <button
                onClick={() => onOpenDemo()}
                className="px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Log Cause List</span>
              </button>
              <button
                onClick={() => onOpenDemo()}
                className="px-3.5 py-1.5 text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>GST Bill</span>
              </button>
            </div>
          </div>

          {/* Interactive Metric Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            <div
              onClick={() => setActiveMetric('cases')}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeMetric === 'cases'
                  ? 'bg-slate-800/90 border-indigo-500 ring-1 ring-indigo-500'
                  : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/60'
              }`}
            >
              <div className="text-xs text-slate-400 font-medium">Case Statistics</div>
              <div className="text-2xl font-bold font-mono text-white mt-1">142 Cases</div>
              <div className="text-[11px] text-indigo-400 mt-1">84 High Court · 58 District</div>
            </div>

            <div
              onClick={() => setActiveMetric('hearings')}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeMetric === 'hearings'
                  ? 'bg-slate-800/90 border-amber-500 ring-1 ring-amber-500'
                  : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/60'
              }`}
            >
              <div className="text-xs text-slate-400 font-medium">Upcoming Hearings</div>
              <div className="text-2xl font-bold font-mono text-white mt-1">19 Listed</div>
              <div className="text-[11px] text-amber-400 mt-1">4 Tomorrow · 15 Next 7 Days</div>
            </div>

            <div
              onClick={() => setActiveMetric('revenue')}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeMetric === 'revenue'
                  ? 'bg-slate-800/90 border-emerald-500 ring-1 ring-emerald-500'
                  : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/60'
              }`}
            >
              <div className="text-xs text-slate-400 font-medium">Revenue Summary</div>
              <div className="text-2xl font-bold font-mono text-white mt-1">₹8,45,000</div>
              <div className="text-[11px] text-emerald-400 mt-1">₹1.20L Pending Invoices</div>
            </div>

            <div
              onClick={() => setActiveMetric('tasks')}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeMetric === 'tasks'
                  ? 'bg-slate-800/90 border-indigo-400 ring-1 ring-indigo-400'
                  : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/60'
              }`}
            >
              <div className="text-xs text-slate-400 font-medium">Productivity Metrics</div>
              <div className="text-2xl font-bold font-mono text-white mt-1">94% On-Track</div>
              <div className="text-[11px] text-indigo-300 mt-1">28 Briefings & Filings Done</div>
            </div>
          </div>

          {/* Detailed Split Inside Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-slate-950/70 p-5 sm:p-6 rounded-xl border border-slate-800">
            {/* Left 2 Cols: Dynamic Interactive Content based on selected metric */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-indigo-400" />
                  {activeMetric === 'revenue' && 'Financial Overview & Collections Trajectory'}
                  {activeMetric === 'cases' && 'Matter Stage Breakdown & Active Litigation Portfolio'}
                  {activeMetric === 'hearings' && 'Priority Daily Cause List & Court Board'}
                  {activeMetric === 'tasks' && 'Associate Workload & Statutory Limitation Deadlines'}
                </span>
                <span className="text-xs font-mono text-slate-400">Real-time sync</span>
              </div>

              {activeMetric === 'revenue' && (
                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-slate-400 text-[11px]">Billed This Quarter</div>
                      <div className="text-lg font-bold text-white font-mono mt-1">₹9,65,000</div>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-slate-400 text-[11px]">Realized via NEFT/UPI</div>
                      <div className="text-lg font-bold text-emerald-400 font-mono mt-1">₹8,45,000</div>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-slate-400 text-[11px]">Outstanding / Aging</div>
                      <div className="text-lg font-bold text-amber-400 font-mono mt-1">₹1,20,000</div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-900/90 rounded-lg border border-slate-800 space-y-2">
                    <div className="text-slate-300 font-semibold text-xs">Recent Billing Transactions</div>
                    <div className="divide-y divide-slate-800 text-[11px]">
                      <div className="py-2 flex justify-between items-center">
                        <div>
                          <span className="font-semibold text-white">Apex Logistics Pvt. Ltd.</span>
                          <span className="text-slate-500 block">Delhi HC Arguments · Inv #089</span>
                        </div>
                        <span className="font-mono text-emerald-400 font-bold">₹1,48,100 (Paid)</span>
                      </div>
                      <div className="py-2 flex justify-between items-center">
                        <div>
                          <span className="font-semibold text-white">Horizon Realty Infra</span>
                          <span className="text-slate-500 block">Arbitration Retainer Q3 · Inv #088</span>
                        </div>
                        <span className="font-mono text-amber-400 font-bold">₹75,000 (Due 30 Oct)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeMetric === 'cases' && (
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white">Final Arguments Stage</div>
                      <div className="text-slate-400 text-[11px]">24 Matters · Delhi HC, NCLAT & DRT</div>
                    </div>
                    <span className="font-mono text-indigo-400 font-bold">High Priority</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white">Cross-Examination & Evidence</div>
                      <div className="text-slate-400 text-[11px]">38 Matters · Saket, Tis Hazari, Bengaluru City Civil</div>
                    </div>
                    <span className="font-mono text-amber-400 font-bold">Witness Prep Needed</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white">Pleadings & Replication Pending</div>
                      <div className="text-slate-400 text-[11px]">42 Matters · Drafting in progress</div>
                    </div>
                    <span className="font-mono text-slate-300 font-bold">Within Limitation</span>
                  </div>
                </div>
              )}

              {activeMetric === 'hearings' && (
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-amber-400 font-mono">Item 27</span>
                      <span className="text-white font-semibold ml-2">Delhi HC · Court 14</span>
                      <span className="text-slate-400 block text-[11px]">WP(C) 4128/2026 · Apex vs. UOI</span>
                    </div>
                    <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded text-[11px]">Briefed</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-300 font-mono">Item 41</span>
                      <span className="text-white font-semibold ml-2">Saket District Court · Court 06</span>
                      <span className="text-slate-400 block text-[11px]">CS(COMM) 182/2025 · Mehra vs. TechCraft</span>
                    </div>
                    <span className="bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded text-[11px]">Junior Deputed</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-300 font-mono">Item 09</span>
                      <span className="text-white font-semibold ml-2">NCLT New Delhi · Bench III</span>
                      <span className="text-slate-400 block text-[11px]">CP(IB) 942/2026 · Insolvency Petition</span>
                    </div>
                    <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[11px]">Listed 02:30 PM</span>
                  </div>
                </div>
              )}

              {activeMetric === 'tasks' && (
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Draft SLP Grounds (Supreme Court)</div>
                      <div className="text-slate-400 text-[11px]">Assigned to: Adv. Neha · Due Today 05:00 PM</div>
                    </div>
                    <span className="text-rose-400 font-mono font-bold">Limitation: 4 Days</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">File Replication & Additional Documents</div>
                      <div className="text-slate-400 text-[11px]">Commercial Court Bengaluru · Due 30 Oct</div>
                    </div>
                    <span className="text-amber-400 font-mono font-bold">Pending Review</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right 1 Col: Recent Activities & Audit Trail */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider pb-2 border-b border-slate-800">
                Recent Chamber Activities
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex gap-2.5 items-start">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="text-white font-medium">Certified Order Uploaded</span>
                    <p className="text-slate-400 text-[11px]">Delhi HC stay order added to Case #0182</p>
                    <span className="text-[10px] text-slate-500 font-mono">28 mins ago</span>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="text-white font-medium">New Client Invoiced</span>
                    <p className="text-slate-400 text-[11px]">₹75,000 billed to Horizon Realty Infra</p>
                    <span className="text-[10px] text-slate-500 font-mono">1 hour ago</span>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="text-white font-medium">Hearing Rescheduled</span>
                    <p className="text-slate-400 text-[11px]">Saket Court CS 182 adjourned to 12 Nov</p>
                    <span className="text-[10px] text-slate-500 font-mono">3 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA within Section */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Experience the ease of having your cases, diary, court dates, and billing in one unified system.
            </div>
            <button
              onClick={onScrollToHowItWorks}
              className="px-5 py-2.5 text-xs font-bold bg-white hover:bg-slate-100 text-slate-900 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>See How It Works</span>
              <ArrowRight className="w-4 h-4 text-indigo-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
