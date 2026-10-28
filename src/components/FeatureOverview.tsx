import React, { useState } from 'react';
import {
  Users,
  Gavel,
  Landmark,
  Calendar,
  FolderLock,
  CalendarCheck2,
  Clock,
  Receipt,
  FileCheck2,
  Wallet,
  ShieldAlert,
  BarChart3,
  Lock,
  BellRing,
  Globe,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  X
} from 'lucide-react';
import { FEATURES_DATA, FeatureItem } from '../data/legalData';

const ICON_MAP: Record<string, React.ElementType> = {
  'client-management': Users,
  'case-management': Gavel,
  'court-management': Landmark,
  'hearing-management': Calendar,
  'document-management': FolderLock,
  'tasks-calendar': CalendarCheck2,
  'time-tracking': Clock,
  'expense-management': Receipt,
  'billing-invoicing': FileCheck2,
  'payment-management': Wallet,
  'client-portal': ShieldAlert,
  'reports-analytics': BarChart3,
  'team-permissions': Lock,
  'notifications-reminders': BellRing,
  'multi-language': Globe,
  'mobile-app': Smartphone,
};

interface FeatureOverviewProps {
  onOpenDemo: () => void;
}

export const FeatureOverview: React.FC<FeatureOverviewProps> = ({ onOpenDemo }) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'core' | 'court' | 'finance' | 'portal'>('all');

  const filteredFeatures = activeFilter === 'all'
    ? FEATURES_DATA
    : FEATURES_DATA.filter((f) => f.category === activeFilter);

  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-md inline-block border border-indigo-200/60">
            Complete Legal Suite
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight text-balance">
            Everything You Need to Run Your Legal Practice
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            HexaSoft Advocate brings all 16 essential modules into one unified platform, purpose-built for the daily operations of Indian advocates and law firms.
          </p>

          {/* Functional Category Filter Segmented Control */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl shadow-xs mt-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All 16 Modules
            </button>
            <button
              onClick={() => setActiveFilter('core')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'core'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Practice & Cases
            </button>
            <button
              onClick={() => setActiveFilter('court')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'court'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Courts & Hearings
            </button>
            <button
              onClick={() => setActiveFilter('finance')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'finance'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              GST Billing & Finance
            </button>
            <button
              onClick={() => setActiveFilter('portal')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'portal'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Client & Access
            </button>
          </div>
        </div>

        {/* 16 Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredFeatures.map((item) => {
            const Icon = ICON_MAP[item.id] || Gavel;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedFeature(item)}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {String(item.number).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-heading mb-2 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-indigo-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                  <span>View Details & Workflow</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Modal / Drawer */}
        {selectedFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
                  {React.createElement(ICON_MAP[selectedFeature.id] || Gavel, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <div className="text-xs font-bold text-indigo-600 uppercase font-mono">
                    Module #{String(selectedFeature.number).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-950 font-heading">
                    {selectedFeature.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>{selectedFeature.fullDescription}</p>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <span className="font-bold text-slate-900 block mb-1">
                    Indian Practice Alignment:
                  </span>
                  <span className="text-slate-600">{selectedFeature.indianContext}</span>
                </div>

                <div>
                  <span className="font-bold text-slate-900 text-xs block mb-2 uppercase tracking-wider">
                    Key Module Capabilities:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedFeature.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-medium">
                  Included in all HexaSoft Advocate tiers
                </span>
                <button
                  onClick={() => {
                    setSelectedFeature(null);
                    onOpenDemo();
                  }}
                  className="px-4 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Book Demo for this Module</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
