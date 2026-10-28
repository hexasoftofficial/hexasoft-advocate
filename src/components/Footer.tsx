import React from 'react';
import { Scale, Phone, MessageSquare, Instagram, Globe, ArrowUp, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../data/legalData';

interface FooterProps {
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent(BRAND_CONFIG.whatsappMessage)}`;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Tagline Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md">
                <Scale className="w-5 h-5 text-indigo-100" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-heading">
                  {BRAND_CONFIG.company}
                </span>
                <span className="ml-2 text-xs uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-900/80 text-indigo-300 border border-indigo-700/50">
                  {BRAND_CONFIG.product}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 font-medium">
              Product: <span className="text-slate-200">{BRAND_CONFIG.fullName}</span>
            </p>

            <p className="text-base font-semibold text-indigo-400 font-heading">
              {BRAND_CONFIG.tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Complete legal practice management platform engineered for Indian advocates, lawyers, and law firms. Manage cases, clients, cause lists, court hearings, documents, GST billing, and reports in one centralized workspace.
            </p>

            <div className="pt-2 text-xs text-slate-500">
              India Target Market · District Courts, High Courts & Tribunals
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Product Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features (16 Modules)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing Plans (INR)
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Solutions & Cockpit
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Actions & Direct Demo */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Get Started
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenDemo()}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer text-left"
                >
                  Book Free Demo
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact HexaSoft
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp HexaSoft</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND_CONFIG.phone}`}
                  className="hover:text-white flex items-center gap-1 font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{BRAND_CONFIG.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Contact HexaSoft
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BRAND_CONFIG.phone}`} className="font-mono text-slate-200 hover:text-white">
                  {BRAND_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={BRAND_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-white"
                >
                  {BRAND_CONFIG.instagram}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
                <a
                  href={BRAND_CONFIG.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-white font-mono"
                >
                  {BRAND_CONFIG.website}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                Support Hours: Mon – Sat (9:00 AM – 8:00 PM IST)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 HexaSoft. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built for Advocates, Lawyers & Law Firms</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
