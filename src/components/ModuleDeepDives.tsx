import React, { useState } from 'react';
import {
  Users,
  UserPlus,
  Briefcase,
  Gavel,
  Landmark,
  Calendar,
  FolderOpen,
  CalendarCheck2,
  Clock,
  Receipt,
  FileCheck2,
  Wallet,
  ShieldCheck,
  Lock,
  BellRing,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Eye,
  FileText,
  Search,
  Check,
  Building,
  Upload,
  PhoneCall
} from 'lucide-react';

interface ModuleDeepDivesProps {
  onOpenDemo: () => void;
}

export const ModuleDeepDives: React.FC<ModuleDeepDivesProps> = ({ onOpenDemo }) => {
  const [activeModuleTab, setActiveModuleTab] = useState<'client-inquiry' | 'case-court' | 'doc-calendar' | 'billing-payment' | 'portal-team' | 'reports'>('client-inquiry');

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Module Switcher Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-md inline-block border border-indigo-200/60">
            In-Depth Module Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight text-balance">
            Engineered for Every Aspect of Legal Practice
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Explore how HexaSoft Advocate streamlines intake, litigation, hearings, documents, billing, and team security.
          </p>

          {/* Module Nav Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveModuleTab('client-inquiry')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeModuleTab === 'client-inquiry'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              1. Clients & Inquiries
            </button>
            <button
              onClick={() => setActiveModuleTab('case-court')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeModuleTab === 'case-court'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              2. Cases, Courts & Hearings
            </button>
            <button
              onClick={() => setActiveModuleTab('doc-calendar')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeModuleTab === 'doc-calendar'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              3. Documents, Tasks & Time
            </button>
            <button
              onClick={() => setActiveModuleTab('billing-payment')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeModuleTab === 'billing-payment'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              4. Expenses, Billing & Payments
            </button>
            <button
              onClick={() => setActiveModuleTab('portal-team')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeModuleTab === 'portal-team'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              5. Client Portal & Team Roles
            </button>
            <button
              onClick={() => setActiveModuleTab('reports')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeModuleTab === 'reports'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              6. Reports & Notifications
            </button>
          </div>
        </div>

        {/* SECTION 1: CLIENT MANAGEMENT & INQUIRY MANAGEMENT */}
        {activeModuleTab === 'client-inquiry' && (
          <div className="space-y-20 animate-in fade-in duration-300">
            {/* 1. Client Management Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  Client CRM & Portfolio
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight">
                  Manage Every Client From One Place
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Maintain complete client intelligence across individual litigants, corporate entities, and institutional retainers. Keep KYC, filings, previous orders, and billing histories consolidated under a single profile.
                </p>

                {/* Workflow Flow Ribbon */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <span className="font-bold text-slate-900 block mb-2 uppercase text-[11px] tracking-wider text-indigo-700">
                    Client Lifecycle Workflow:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 text-slate-700 font-medium font-mono text-[11px]">
                    <span className="bg-white px-2 py-1 rounded border border-slate-200">New Client</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded border border-slate-200">Client Profile</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded border border-slate-200">Documents</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded border border-slate-200">Cases</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded border border-slate-200">Billing</span>
                    <span>→</span>
                    <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded border border-indigo-200 font-bold">Complete Client History</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Auto-generated Client IDs</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Client categorization</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Client documents vault</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Billing & invoice history</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Complete client history</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Restricted client portal access</span>
                  </div>
                </div>
              </div>

              {/* Client Profile UI Mockup */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-sm">
                      AL
                    </div>
                    <div>
                      <div className="font-bold text-sm">Apex Logistics Pvt. Ltd.</div>
                      <div className="text-[11px] text-slate-400 font-mono">ID: CLI-2026-0042 · Corporate Client</div>
                    </div>
                  </div>
                  <span className="text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-mono">
                    Active Client
                  </span>
                </div>

                <div className="p-5 space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Authorized Contact</span>
                      <span className="font-semibold text-slate-800">Mr. Vikramaditya Singhania (MD)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">GSTIN & City</span>
                      <span className="font-semibold text-slate-800">07AAACA1234F1Z5 · New Delhi</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Linked Legal Matters (2 Active)
                    </span>
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-slate-900">WP(C) 4128/2026 · Apex vs. UOI</div>
                          <div className="text-[11px] text-slate-500">Delhi HC · Final Arguments Stage</div>
                        </div>
                        <span className="font-mono text-indigo-700 font-bold">Active</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-slate-900">ARB/DL/882/2025 · Cargo Recovery</div>
                          <div className="text-[11px] text-slate-500">Sole Arbitrator · Evidence Stage</div>
                        </div>
                        <span className="font-mono text-slate-600">Pending</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-slate-600">
                    <span>Lifetime Invoiced: <strong className="font-mono text-slate-900">₹4,25,000</strong></span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">All Dues Cleared</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Inquiry Management Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-slate-100">
              {/* Inquiry UI Mockup */}
              <div className="order-2 lg:order-1 bg-slate-900 text-slate-100 rounded-2xl p-5 border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="text-xs font-mono text-indigo-400">NEW INQUIRIES & PROSPECTS</div>
                  <span className="text-xs bg-indigo-900 text-indigo-200 px-2 py-0.5 rounded font-medium">
                    3 Pending Consultations
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white">Surya Power Infrastructure</span>
                      <span className="text-[11px] text-amber-400 font-mono">Consultation Scheduled</span>
                    </div>
                    <div className="text-slate-400 text-[11px]">Commercial Dispute · NCLT Application · New Delhi</div>
                    <div className="text-[10px] text-slate-500">Source: Chamber Website · Follow-up: Today 4:00 PM</div>
                  </div>

                  <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white">Kavita Narang</span>
                      <span className="text-[11px] text-emerald-400 font-mono">Ready to Convert</span>
                    </div>
                    <div className="text-slate-400 text-[11px]">RERA Complaint against Builder · Gurugram</div>
                    <div className="text-[10px] text-slate-500">Vakalatnama Sent · Conversion in 1 Click</div>
                  </div>
                </div>

                <div className="p-3 bg-indigo-950/70 border border-indigo-800/60 rounded-lg text-xs text-indigo-200 flex items-center justify-between">
                  <span>Convert Inquiry directly into Active Case</span>
                  <span className="font-bold text-white underline cursor-pointer" onClick={() => onOpenDemo()}>Test Flow</span>
                </div>
              </div>

              {/* Inquiry Text */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  Lead Intake & Conversion
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight">
                  Turn New Inquiries Into Clients
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Capture incoming consultation requests from your website, WhatsApp, phone inquiries, and client referrals. Track consultation fees, maintain follow-up reminders, and convert qualified inquiries into legal cases without retyping information.
                </p>

                {/* Flow Ribbon */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <span className="font-bold text-slate-900 block mb-2 uppercase text-[11px] tracking-wider text-indigo-700">
                    Inquiry Conversion Flow:
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-slate-700 font-medium font-mono text-[11px]">
                    <span className="bg-white px-2 py-1 rounded border border-slate-200">New Inquiry</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded border border-slate-200">Follow-up</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded border border-slate-200">Consultation</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded border border-slate-200">Client</span>
                    <span>→</span>
                    <span className="bg-emerald-50 text-emerald-800 px-2 py-1 rounded border border-emerald-200 font-bold">Active Case</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Capture new inquiries</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Consultation requests</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Follow-up management</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Inquiry status tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>1-Click client conversion</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Consultation fee invoicing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: CASE MANAGEMENT & COURT / HEARING */}
        {activeModuleTab === 'case-court' && (
          <div className="space-y-20 animate-in fade-in duration-300">
            {/* 3. Case Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  Litigation Lifecycle
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight">
                  Complete Case Management
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Track every matter from initial plaint drafting through interlocutory orders and final appeal. Maintain precise CNR numbers, opposing party advocates, prayer relief, and complete chronological case journey notes.
                </p>

                {/* Flow Ribbon */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <span className="font-bold text-slate-900 block mb-2 uppercase text-[11px] tracking-wider text-indigo-700">
                    Case Lifecycle Journey:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 text-slate-700 font-medium font-mono text-[11px]">
                    <span className="bg-white px-2 py-1 rounded border border-slate-200">Client</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded border border-slate-200">Create Case</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded border border-slate-200">Assign Advocate</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded border border-slate-200">Assign Court</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded border border-slate-200">Add Documents</span>
                    <span>→</span>
                    <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded border border-indigo-200 font-bold">Track Case</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Create & manage legal cases</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Case status & priority levels</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Opposing party details</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Court & judge assignment</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Lead & assisting advocate assignment</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Chronological case journey tracking</span>
                  </div>
                </div>
              </div>

              {/* Case Interface Mockup */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-5 space-y-4">
                <div className="flex justify-between items-start pb-3 border-b border-slate-100">
                  <div>
                    <span className="font-mono text-xs text-indigo-600 font-bold">CAS-2026-0182</span>
                    <h4 className="text-base font-bold text-slate-900 font-heading">
                      M/s Apex Logistics vs. Union of India & Anr.
                    </h4>
                    <span className="text-xs text-slate-500">Writ Petition (Civil) · High Court of Delhi</span>
                  </div>
                  <span className="bg-rose-50 text-rose-700 border border-rose-200 px-2.5 py-0.5 rounded text-xs font-bold">
                    High Priority
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[11px]">CNR Reference</span>
                    <span className="font-mono font-semibold text-slate-800">DLHC01-004128-2026</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Lead Advocate</span>
                    <span className="font-semibold text-slate-800">Adv. Rajeshwar Sharma</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Opposing Counsel</span>
                    <span className="font-semibold text-slate-800">Addl. Solicitor General</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-900 block mb-2">Matter Timeline & Orders</span>
                  <div className="space-y-2 text-xs">
                    <div className="p-2 rounded border border-slate-100 bg-white flex items-center justify-between">
                      <span>Interim Relief Granted (Stay on Recovery Notice)</span>
                      <span className="text-[11px] text-slate-400 font-mono">14 Oct 2026</span>
                    </div>
                    <div className="p-2 rounded border border-slate-100 bg-white flex items-center justify-between">
                      <span>Counter Affidavit Filed by Respondent UOI</span>
                      <span className="text-[11px] text-slate-400 font-mono">22 Oct 2026</span>
                    </div>
                    <div className="p-2 rounded border border-indigo-100 bg-indigo-50/60 flex items-center justify-between font-medium text-indigo-900">
                      <span>Next Date of Hearing: Final Arguments</span>
                      <span className="text-[11px] font-mono text-indigo-700 font-bold">Tomorrow · Item 27</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Court & Hearing Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-slate-100">
              {/* Calendar UI */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-xl space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span className="font-bold text-sm">Chamber Court Calendar & Diary</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">October 2026</span>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-xs pb-2 border-b border-slate-800">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <span key={day} className="text-slate-400 font-mono py-1">{day}</span>
                  ))}
                  {[26, 27, 28, 29, 30, 31, 1].map((date, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded-lg text-xs font-mono ${
                        date === 28
                          ? 'bg-indigo-600 text-white font-bold ring-2 ring-indigo-400'
                          : date === 29
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {date}
                      {date === 28 && <span className="block text-[9px] text-indigo-200">Today (4)</span>}
                      {date === 29 && <span className="block text-[9px] text-amber-300">HC (2)</span>}
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white">Court 14 · Delhi High Court</div>
                      <div className="text-[11px] text-slate-400">Hon'ble Justice P. S. Rao · Item 27</div>
                    </div>
                    <span className="font-mono text-amber-400 font-bold">10:30 AM</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white">Court 06 · Saket District Court</div>
                      <div className="text-[11px] text-slate-400">Commercial Court · Item 41</div>
                    </div>
                    <span className="font-mono text-slate-300 font-bold">11:45 AM</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800">
                  <span>Conflict Management: No advocate double-booking</span>
                  <span className="text-emerald-400 font-bold">✓ Verified</span>
                </div>
              </div>

              {/* Court & Hearing Description */}
              <div className="space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  Hearing Diary & Cause List
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight">
                  Never Lose Track of Important Hearings
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Stop scrambling through daily paper cause lists. HexaSoft Advocate gives your entire chamber a real-time hearing schedule with courtroom numbers, bench details, item serials, and automatic WhatsApp/SMS hearing reminders.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Schedule & manage hearings</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Hearing dates & item numbers</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Court & Judge index</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Hearing type & stage tagging</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Case reference & CNR linking</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automated hearing reminders</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Calendar integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Conflict & double-booking prevention</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: DOCUMENTS, TASKS & TIME */}
        {activeModuleTab === 'doc-calendar' && (
          <div className="space-y-20 animate-in fade-in duration-300">
            {/* 5. Document Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  Cloud Document Vault
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight">
                  All Your Legal Documents, Organized
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Never misplace a Vakalatnama, draft petition, or interim injunction order again. Keep documents organized case-wise and client-wise with role-based secure access and version history.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Case-wise document trees</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Client KYC & master documents</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Multiple document batch upload</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Document categorization (Plaints/Orders)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Bank-grade secure access</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Document version control</span>
                  </div>
                </div>
              </div>

              {/* Document Tree UI Mockup */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5 space-y-3 text-xs">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="font-bold text-slate-900 font-heading text-sm">
                    Matter Documents: WP(C) 4128/2026
                  </span>
                  <button
                    onClick={() => onOpenDemo()}
                    className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md font-semibold flex items-center gap-1"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload File</span>
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-indigo-600" />
                      <div>
                        <span className="font-semibold text-slate-800">Vakalatnama_Apex_Signed.pdf</span>
                        <span className="text-[10px] text-slate-400 block font-mono">1.2 MB · Verified & Stamped</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">v1.0</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-emerald-600" />
                      <div>
                        <span className="font-semibold text-slate-800">Interim_Stay_Order_DelhiHC_14Oct.pdf</span>
                        <span className="text-[10px] text-slate-400 block font-mono">3.4 MB · Certified Copy</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-600 font-bold">Court Order</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-amber-600" />
                      <div>
                        <span className="font-semibold text-slate-800">Draft_Rejoinder_Affidavit_v3.docx</span>
                        <span className="text-[10px] text-slate-400 block font-mono">840 KB · Edited by Adv. Neha</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-amber-600 font-bold">Draft v3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 6 & 7. Tasks & Time Tracking */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
              {/* Tasks & Calendar */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700">
                  <CalendarCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Manage Tasks & Daily Activities
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Assign legal drafting tasks, document filings, and client conferences to associates with priority flags, deadlines, and real-time status monitoring.
                </p>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">✓ Create & assign tasks with deadlines</div>
                  <div className="flex items-center gap-2">✓ Monitor hearings & appointments</div>
                  <div className="flex items-center gap-2">✓ Limitation period statutory trackers</div>
                </div>
              </div>

              {/* Time Tracking */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Track Time & Billable Hours
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Record exact billable hours spent on legal research, drafting, conferences, and courtroom appearances. Generate clean timesheets for corporate client billing.
                </p>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">✓ Real-time timers & manual timesheets</div>
                  <div className="flex items-center gap-2">✓ Track unbilled time & hourly rates</div>
                  <div className="flex items-center gap-2">✓ Partner approval workflows</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: EXPENSES, BILLING & PAYMENTS */}
        {activeModuleTab === 'billing-payment' && (
          <div className="space-y-20 animate-in fade-in duration-300">
            {/* 8. Expenses */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  Case Disbursements
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight">
                  Keep Legal Expenses Under Control
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Every court appearance involves out-of-pocket disbursements: court fees, process fees, certified copy charges, stamp papers, and clerkage. Link expenses directly to case files for transparent client reimbursement.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Add & categorize expenses</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Track expense amounts in INR (₹)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Link disbursements directly to cases</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Partner approval controls</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Reimbursable invoice conversion</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Chamber financial reporting</span>
                  </div>
                </div>
              </div>

              {/* Expense Card Mockup */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5 space-y-3 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="font-bold text-slate-900 text-sm">Case Disbursements Ledger</span>
                  <span className="text-[11px] font-mono text-emerald-600 font-bold">₹18,450 Reimbursable</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-slate-800">Court Fees & Stamp Paper</span>
                      <span className="text-[11px] text-slate-400 block">Delhi High Court · Case #0182</span>
                    </div>
                    <span className="font-mono text-slate-900 font-bold">₹6,500</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-slate-800">Certified Copy Order Charges</span>
                      <span className="text-[11px] text-slate-400 block">Saket District Court · Case #0145</span>
                    </div>
                    <span className="font-mono text-slate-900 font-bold">₹1,850</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-slate-800">Process Fee & Registered Post</span>
                      <span className="text-[11px] text-slate-400 block">Service to 4 Respondents</span>
                    </div>
                    <span className="font-mono text-slate-900 font-bold">₹2,100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 9 & 10. Billing & Payments */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
              {/* Billing */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Professional Billing Made Simple
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Generate compliant legal tax invoices with sequential numbering, SAC Code 998211, automated GST calculations, and customized firm letterhead branding.
                </p>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">✓ Automatic invoice numbers</div>
                  <div className="flex items-center gap-2">✓ Case/service line item breakdowns</div>
                  <div className="flex items-center gap-2">✓ CGST, SGST & IGST tax calculations</div>
                  <div className="flex items-center gap-2">✓ Invoice tracking & delivery status</div>
                </div>
              </div>

              {/* Payments */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                  <Wallet className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Track Payments & Outstanding Amounts
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Track full payments, advance retainers, stage-wise installments, and partial payments with automated payment reminders sent to clients.
                </p>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">✓ Partial payments & installment plans</div>
                  <div className="flex items-center gap-2">✓ Complete payment receipt history</div>
                  <div className="flex items-center gap-2">✓ Pending outstanding balances</div>
                  <div className="flex items-center gap-2">✓ Multiple payment options & receipts</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 5: CLIENT PORTAL & TEAM MANAGEMENT */}
        {activeModuleTab === 'portal-team' && (
          <div className="space-y-20 animate-in fade-in duration-300">
            {/* 11. Client Portal */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  Client Transparency
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight">
                  Give Clients Their Own Secure Portal
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Give your clients 24/7 visibility into their legal matters without compromising internal confidentiality. Clients can review their case status, view upcoming hearing dates, download certified order copies, and review invoices.
                </p>

                <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl text-xs text-indigo-900">
                  <span className="font-bold block mb-1">Confidentiality Guarantee:</span>
                  <span>Keep clients informed without giving them access to your entire internal chamber system, confidential research memos, or other matters.</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Case overview & stage updates</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Approved document downloads</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Billing invoices & receipts</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Payment history ledger</span>
                  </div>
                </div>
              </div>

              {/* Client Portal UI Mockup */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-xl space-y-4 text-xs">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <div>
                    <div className="text-xs font-mono text-indigo-400">CLIENT SELF-SERVICE PORTAL</div>
                    <div className="font-bold text-sm">Welcome, Apex Logistics Pvt. Ltd.</div>
                  </div>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded">
                    Client View Only
                  </span>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">Your Case: WP(C) 4128/2026</span>
                    <span className="bg-amber-950 text-amber-300 px-2 py-0.5 rounded text-[10px]">In Progress</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    Next Hearing: <strong>Tomorrow at 10:30 AM</strong> · Delhi High Court
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    Stage: Final Arguments before Hon'ble Justice P. S. Rao
                  </div>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-2">
                  <div className="font-bold text-white text-xs">Available Client Documents</div>
                  <div className="flex justify-between items-center text-slate-300 text-[11px]">
                    <span>Court Order dated 14 Oct 2026.pdf</span>
                    <span className="text-indigo-400 font-bold hover:underline cursor-pointer">Download</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 12. Team Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-slate-100">
              <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  Role-Based Security
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-heading">
                  4 Pre-Configured Chambers Roles
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block font-heading">1. Admin</strong>
                    <span className="text-slate-500 text-[11px]">Managing Partner with full access to financial data, billing, and settings.</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block font-heading">2. Advocate</strong>
                    <span className="text-slate-500 text-[11px]">Senior & Associate advocates handling assigned matters, hearings, and diary.</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block font-heading">3. Team Member</strong>
                    <span className="text-slate-500 text-[11px]">Chamber clerks, interns, and paralegals with restricted document & task access.</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block font-heading">4. Client</strong>
                    <span className="text-slate-500 text-[11px]">Secured self-service access to view their own cases, orders, and bills.</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  Granular Permissions
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight">
                  Control Who Can Access What
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Chamber data integrity is paramount. Set granular permissions so associates only view assigned cases, interns cannot delete files, and billing metrics remain strictly confidential to partners.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Create & manage team users</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Assign pre-built or custom roles</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Module-level read/write controls</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Complete activity and audit logs</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>User-specific dashboards</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Multi-advocate chamber collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 6: NOTIFICATIONS & REPORTS */}
        {activeModuleTab === 'reports' && (
          <div className="space-y-20 animate-in fade-in duration-300">
            {/* 13 & 14. Notifications & Reports */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Notifications */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700">
                  <BellRing className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    Stay Updated With Important Activities
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Automated notification engine ensures your chamber never misses a hearing, statutory reply window, or pending payment reminder.
                  </p>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">✓ Morning court cause list briefings</div>
                  <div className="flex items-center gap-2">✓ Hearing & case status reminders</div>
                  <div className="flex items-center gap-2">✓ Task deadline & limitation alerts</div>
                  <div className="flex items-center gap-2">✓ Overdue client payment reminders</div>
                </div>
              </div>

              {/* Reports */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    Turn Legal Data Into Business Insights
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Unlock deep analytics on practice profitability, matter disposal velocity, court-wise caseloads, and associate billable utilization.
                  </p>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">✓ Case performance & disposal metrics</div>
                  <div className="flex items-center gap-2">✓ Practice revenue & collection reports</div>
                  <div className="flex items-center gap-2">✓ Case expense & profit/loss tracking</div>
                  <div className="flex items-center gap-2">✓ Client lifetime value summaries</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Global CTA Banner for Modules */}
        <div className="text-center pt-8">
          <button
            onClick={() => onOpenDemo()}
            className="px-7 py-3.5 text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Request a Tailored Demo for Your Chamber</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
