import React from 'react';
import {
  IndianRupee,
  Landmark,
  FileCheck,
  MessageSquare,
  Smartphone,
  Laptop,
  CheckCircle2,
  Phone,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/legalData';

interface IndiaFocusedSectionProps {
  onOpenDemo: () => void;
}

export const IndiaFocusedSection: React.FC<IndiaFocusedSectionProps> = ({ onOpenDemo }) => {
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent(BRAND_CONFIG.whatsappMessage)}`;

  const pillars = [
    {
      icon: IndianRupee,
      title: 'Transparent INR (₹) Pricing',
      description: 'Simple annual plans billed directly in Indian Rupees with no hidden international conversion charges, wire transfer fees, or sudden dollar fluctuations.'
    },
    {
      icon: Landmark,
      title: 'Indian Courtroom & Forum Workflow',
      description: 'Structured around Indian judicial systems — Supreme Court of India, High Courts, District & Sessions Courts, Consumer Forums, NCLT, RERA, and Arbitration.'
    },
    {
      icon: FileCheck,
      title: 'GST / Tax-Ready Billing Workflow',
      description: 'Professional billing templates formatted for Indian tax requirements with SAC Code 998211/998212, CGST, SGST, IGST calculations, and client GSTIN capture.'
    },
    {
      icon: MessageSquare,
      title: 'Direct WhatsApp Support & Updates',
      description: 'Fast, responsive customer support via WhatsApp and phone (+91 96621 65636). Send hearing updates, next dates, and invoice reminders via familiar channels.'
    },
    {
      icon: Laptop,
      title: 'Live Online 1-on-1 Demo & Onboarding',
      description: 'Personalized live walkthrough with legal-tech specialists who understand Indian court hierarchies, cause lists, and chamber management workflows.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-Friendly Court Corridor Access',
      description: 'Check daily cause lists, item numbers, and case files on your smartphone while moving between courtrooms or waiting for your item to be called.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-md inline-block border border-indigo-200/60">
            Tailored for Indian Law Chambers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight text-balance">
            Built for the Modern Indian Legal Practice
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Western software doesn’t understand cause lists, Vakalatnamas, or SAC codes. HexaSoft Advocate is designed from the ground up for advocates, lawyers, and law firms across India.
          </p>
        </div>

        {/* 2-Column Showcase with Image Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column: Prestigious Indian Law Firm Chamber Photography */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
            <img
              src="/src/assets/images/hero_law_chamber_1793189820897.jpg"
              alt="Modern Indian Law Chamber and Conference Room"
              referrerPolicy="no-referrer"
              className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="text-xs uppercase font-mono tracking-wider text-indigo-300">
                Chamber Excellence
              </div>
              <div className="text-lg font-bold font-heading">
                Advocate by HexaSoft
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Your Complete Digital Workspace for Legal Practice
              </p>
            </div>
          </div>

          {/* Right Column: Key Indian Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all hover:bg-white hover:shadow-xs group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 mb-3.5 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indian Practice Trust Strip */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-base font-bold text-slate-900 font-heading">
              Need assistance selecting the right plan for your chamber?
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Speak directly with our team in India at <span className="font-semibold text-slate-900">{BRAND_CONFIG.phone}</span> or via WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 hover:bg-emerald-50 rounded-lg transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp HexaSoft</span>
            </a>
            <button
              onClick={() => onOpenDemo()}
              className="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Book Online Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
