import React, { useState } from 'react';
import {
  Calendar,
  Gavel,
  Users,
  IndianRupee,
  Clock,
  ArrowRight,
  MessageSquare,
  Phone,
  CheckCircle2,
  AlertCircle,
  FileText,
  BarChart3,
  Search,
  Filter,
  Plus,
  Briefcase,
  ChevronRight,
  Building2,
  FolderOpen
} from 'lucide-react';
import { BRAND_CONFIG, SAMPLE_CASES, SAMPLE_HEARINGS } from '../data/legalData';

interface HeroProps {
  onOpenDemo: (plan?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'hearings' | 'cases' | 'billing'>('dashboard');
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent(BRAND_CONFIG.whatsappMessage)}`;

  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/60 border-b border-slate-200/80">
      {/* Background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-96 -left-32 w-[450px] h-[450px] bg-slate-300/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Subtle Category Kicker - compliant with Zero-Pill rule */}
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-indigo-700 bg-indigo-50/80 px-3.5 py-1.5 rounded-md border border-indigo-200/70">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
            LEGAL PRACTICE MANAGEMENT SOFTWARE
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight font-heading text-balance leading-tight">
            Manage Your Entire Legal Practice <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-900">
              From One Powerful Platform
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed text-balance max-w-3xl mx-auto">
            Manage clients, cases, court hearings, documents, tasks, billing, payments and reports — all from one centralized workspace built for Indian advocates and law firms.
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenDemo()}
              className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Talk to Us on WhatsApp</span>
            </a>

            <a
              href={`tel:${BRAND_CONFIG.phone}`}
              className="w-full sm:w-auto px-5 py-3.5 text-sm sm:text-base font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-slate-500" />
              <span>{BRAND_CONFIG.phone}</span>
            </a>
          </div>

          {/* Trust Text */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-indigo-600" />
            <span>Built for Advocates, Lawyers & Law Firms across India</span>
          </div>
        </div>

        {/* Hero Visual: Premium SaaS Dashboard Mockup Container with Floating Cards */}
        <div className="mt-12 lg:mt-16 relative max-w-6xl mx-auto">
          {/* Floating UI Card 1: Upcoming Hearing (Top Left) */}
          <div className="hidden lg:flex absolute -top-6 -left-6 z-20 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-200 shadow-xl max-w-xs items-start gap-3 transition-transform hover:-translate-y-1">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4 text-indigo-700" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Upcoming Hearing
              </div>
              <div className="text-xs font-bold text-slate-900 mt-0.5">
                Delhi High Court · Court 14
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                Item 27 · WP(C) 4128/2026
              </div>
            </div>
          </div>

          {/* Floating UI Card 2: ₹ Revenue (Top Right) */}
          <div className="hidden lg:flex absolute -top-6 -right-6 z-20 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-200 shadow-xl items-start gap-3 transition-transform hover:-translate-y-1">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
              <IndianRupee className="w-4 h-4 text-emerald-700" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Quarterly Collections
              </div>
              <div className="text-sm font-extrabold text-slate-900 font-mono tabular-nums">
                ₹8,45,000
              </div>
              <div className="text-[11px] text-emerald-600 font-medium">
                100% Tracked & Reconciled
              </div>
            </div>
          </div>

          {/* Floating UI Card 3: Pending Payment (Bottom Left) */}
          <div className="hidden lg:flex absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-200 shadow-xl items-start gap-3 transition-transform hover:-translate-y-1">
            <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Pending Receivables
              </div>
              <div className="text-xs font-bold text-slate-900 font-mono tabular-nums">
                ₹1,20,000 (3 Invoices)
              </div>
              <div className="text-[11px] text-amber-600 font-medium">
                Automatic reminders sent
              </div>
            </div>
          </div>

          {/* Floating UI Card 4: Active Cases (Bottom Right) */}
          <div className="hidden lg:flex absolute -bottom-6 -right-6 z-20 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-200 shadow-xl items-start gap-3 transition-transform hover:-translate-y-1">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
              <Gavel className="w-4 h-4 text-indigo-700" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Active Cases
              </div>
              <div className="text-sm font-extrabold text-slate-900 font-mono tabular-nums">
                142 Active Matters
              </div>
              <div className="text-[11px] text-indigo-600 font-medium">
                Across 8 Court Forums
              </div>
            </div>
          </div>

          {/* Main Dashboard Mockup Card */}
          <div className="bg-white rounded-2xl border border-slate-300/80 shadow-2xl overflow-hidden ring-1 ring-slate-900/5">
            {/* Top Mockup Browser / Window Chrome */}
            <div className="bg-slate-900 text-slate-300 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="ml-3 hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1 rounded-md">
                  <span className="text-indigo-400">app.hexasoft.com</span>/advocate/dashboard
                </div>
              </div>

              {/* View Switcher Tabs inside Dashboard */}
              <div className="flex items-center gap-1 bg-slate-800 p-0.5 rounded-lg text-xs font-medium">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'dashboard'
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('hearings')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'hearings'
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Hearings
                </button>
                <button
                  onClick={() => setActiveTab('cases')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'cases'
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Cases
                </button>
                <button
                  onClick={() => setActiveTab('billing')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'billing'
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  GST Billing
                </button>
              </div>
            </div>

            {/* Dashboard Content Body */}
            <div className="p-4 sm:p-6 lg:p-8 bg-slate-50/50">
              {/* TAB 1: OVERVIEW DASHBOARD */}
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  {/* Row 1: Key Legal Metrics Strip */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-xs font-semibold">Active Cases</span>
                        <Gavel className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">142</div>
                      <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                        <span>12 High Priority</span>
                        <span>·</span>
                        <span>4 New This Week</span>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-xs font-semibold">Today’s Hearings</span>
                        <Calendar className="w-4 h-4 text-amber-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">04</div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Delhi HC, Saket & NCLT
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-xs font-semibold">Total Clients</span>
                        <Users className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">89</div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        32 Corporate · 57 Individual
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-xs font-semibold">Month Collections</span>
                        <IndianRupee className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">₹3,45,000</div>
                      <div className="text-[11px] text-emerald-600 font-medium mt-1">
                        +14% vs Previous Month
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Two Column Split - Upcoming Hearings & Financial/Activity Summary */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left: Upcoming Hearings Board (2 cols) */}
                    <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 font-heading">
                            Upcoming Court Hearings & Cause List
                          </h3>
                          <p className="text-xs text-slate-500">
                            Synchronized daily board for chamber advocates
                          </p>
                        </div>
                        <span className="text-xs font-medium text-indigo-600 hover:underline cursor-pointer" onClick={() => setActiveTab('hearings')}>
                          View Full Board →
                        </span>
                      </div>

                      <div className="space-y-3">
                        {SAMPLE_HEARINGS.map((hearing, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg border border-slate-100 hover:border-indigo-200 bg-slate-50/60 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded text-[11px]">
                                  {hearing.itemNo}
                                </span>
                                <span className="font-semibold text-slate-900">
                                  {hearing.case}
                                </span>
                              </div>
                              <div className="text-slate-500 flex items-center gap-2 text-[11px]">
                                <span>{hearing.court}</span>
                                <span>·</span>
                                <span>{hearing.type}</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                              <span className="font-mono text-slate-600 bg-white border border-slate-200 px-2 py-1 rounded text-[11px]">
                                {hearing.time}
                              </span>
                              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                                {hearing.advocate}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Quick Actions & Financial Overview */}
                    <div className="space-y-4">
                      {/* Quick Actions */}
                      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                          Quick Chamber Actions
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <button
                            onClick={() => onOpenDemo()}
                            className="p-2.5 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 text-left transition-colors font-medium text-slate-800 flex items-center gap-2"
                          >
                            <Plus className="w-3.5 h-3.5 text-indigo-600" />
                            <span>New Case</span>
                          </button>
                          <button
                            onClick={() => onOpenDemo()}
                            className="p-2.5 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 text-left transition-colors font-medium text-slate-800 flex items-center gap-2"
                          >
                            <Calendar className="w-3.5 h-3.5 text-amber-600" />
                            <span>Add Hearing</span>
                          </button>
                          <button
                            onClick={() => onOpenDemo()}
                            className="p-2.5 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 text-left transition-colors font-medium text-slate-800 flex items-center gap-2"
                          >
                            <FileText className="w-3.5 h-3.5 text-emerald-600" />
                            <span>GST Bill</span>
                          </button>
                          <button
                            onClick={() => onOpenDemo()}
                            className="p-2.5 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 text-left transition-colors font-medium text-slate-800 flex items-center gap-2"
                          >
                            <Users className="w-3.5 h-3.5 text-indigo-600" />
                            <span>Add Client</span>
                          </button>
                        </div>
                      </div>

                      {/* Productivity & Pending Invoices */}
                      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                          <span>Financial & Invoicing Health</span>
                          <span className="text-[11px] text-emerald-600 font-mono">92% On-time</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between text-slate-600">
                            <span>Pending Invoices</span>
                            <span className="font-mono font-semibold text-slate-900">₹1,20,000</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                          <div className="flex justify-between text-[11px] text-slate-400">
                            <span>₹8.45L Collected</span>
                            <span>Total Billed: ₹9.65L</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: COURT HEARINGS */}
              {activeTab === 'hearings' && (
                <div className="space-y-4 bg-white p-5 rounded-xl border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Daily Court Cause List & Hearing Schedule</h3>
                      <p className="text-xs text-slate-500">Filter by advocate, court complex or stage</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-indigo-50 text-indigo-700 font-medium px-2.5 py-1 rounded-md">
                        Today: 4 Matters Listed
                      </span>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold text-[11px]">
                          <th className="py-2.5 px-3">Item / Time</th>
                          <th className="py-2.5 px-3">Case Details & CNR</th>
                          <th className="py-2.5 px-3">Court & Bench</th>
                          <th className="py-2.5 px-3">Stage / Purpose</th>
                          <th className="py-2.5 px-3">Lead Advocate</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {SAMPLE_CASES.map((cs) => (
                          <tr key={cs.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-3 px-3 font-mono font-bold text-indigo-700">
                              {cs.causeListNo}
                              <div className="text-[11px] text-slate-400 font-normal">{cs.nextHearing.split('·')[1]}</div>
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-semibold text-slate-900">{cs.title}</div>
                              <div className="text-[11px] font-mono text-slate-400">{cs.cnr}</div>
                            </td>
                            <td className="py-3 px-3">
                              <div className="text-slate-800 font-medium">{cs.court}</div>
                              <div className="text-[11px] text-slate-500">{cs.bench}</div>
                            </td>
                            <td className="py-3 px-3">
                              <span className="bg-amber-50 text-amber-800 border border-amber-200/80 px-2 py-0.5 rounded text-[11px] font-medium">
                                {cs.stage}
                              </span>
                            </td>
                            <td className="py-3 px-3">
                              <div className="text-slate-800 font-medium">{cs.leadAdvocate}</div>
                              <div className="text-[10px] text-emerald-600">Brief Ready</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 3: CASE MANAGEMENT */}
              {activeTab === 'cases' && (
                <div className="space-y-4 bg-white p-5 rounded-xl border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Active Legal Matters Repository</h3>
                      <p className="text-xs text-slate-500">Track full lifecycle from filing to final disposal</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                        <input
                          type="text"
                          readOnly
                          value="Filter: High Court of Delhi"
                          className="text-xs pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg bg-slate-50 text-slate-700 font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {SAMPLE_CASES.map((cs) => (
                      <div key={cs.id} className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all bg-white shadow-xs">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold">
                              {cs.id}
                            </span>
                            <span className="text-xs font-bold text-slate-950 font-heading">
                              {cs.title}
                            </span>
                          </div>
                          <span className="text-xs font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded self-start sm:self-auto">
                            {cs.type}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-600">
                          <div>
                            <span className="text-slate-400 block">Client</span>
                            <span className="font-medium text-slate-800">{cs.client}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Court / Forum</span>
                            <span className="font-medium text-slate-800">{cs.court}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Stage</span>
                            <span className="font-medium text-amber-700">{cs.stage}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Next Hearing</span>
                            <span className="font-medium text-slate-800">{cs.nextHearing}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: GST BILLING & INVOICING */}
              {activeTab === 'billing' && (
                <div className="space-y-4 bg-white p-5 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">GST-Compliant Legal Fee Invoice Preview</h3>
                      <p className="text-xs text-slate-500">SAC Code 998211 (Legal Advisory & Representation Services)</p>
                    </div>
                    <span className="text-xs bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded border border-emerald-200">
                      Invoice #HEXA-2026-089
                    </span>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-slate-900">Billed To: Apex Logistics Pvt. Ltd.</div>
                        <div className="text-slate-500 font-mono text-[11px]">GSTIN: 07AAACA1234F1Z5 · New Delhi</div>
                      </div>
                      <div className="text-right">
                        <div className="text-slate-500">Invoice Date: 28 Oct 2026</div>
                        <div className="text-slate-500">Due: On Receipt</div>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-2 space-y-1.5">
                      <div className="flex justify-between text-slate-700">
                        <span>Drafting Special Leave Petition & Conference with Sr. Counsel</span>
                        <span className="font-mono tabular-nums">₹75,000.00</span>
                      </div>
                      <div className="flex justify-between text-slate-700">
                        <span>Court Appearance (Delhi High Court · Court 14)</span>
                        <span className="font-mono tabular-nums">₹45,000.00</span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-[11px]">
                        <span>Disbursements & Certified Copy Fees</span>
                        <span className="font-mono tabular-nums">₹6,500.00</span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-[11px] pt-1 border-t border-dashed border-slate-300">
                        <span>CGST (9%) + SGST (9%)</span>
                        <span className="font-mono tabular-nums">₹21,600.00</span>
                      </div>
                      <div className="flex justify-between text-slate-950 font-extrabold text-sm pt-2 border-t border-slate-300">
                        <span>Total Professional Fees Payable</span>
                        <span className="font-mono tabular-nums text-indigo-700">₹1,48,100.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Mockup Action Strip */}
            <div className="bg-slate-900 text-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Live Indian Legal Practice Demo Available
                </span>
                <span className="hidden md:inline text-slate-600">|</span>
                <span className="hidden md:inline text-slate-400">
                  Instant Onboarding for Solo Advocates & Firms
                </span>
              </div>
              <button
                onClick={() => onOpenDemo()}
                className="px-4 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Schedule Live 1-on-1 Demo</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
