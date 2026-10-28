import React from 'react';
import { ArrowRight, MessageSquare, Phone, CheckCircle2, ShieldCheck, Laptop } from 'lucide-react';
import { BRAND_CONFIG } from '../data/legalData';

interface DemoSectionProps {
  onOpenDemo: () => void;
}

export const DemoSection: React.FC<DemoSectionProps> = ({ onOpenDemo }) => {
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent(BRAND_CONFIG.whatsappMessage)}`;

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-indigo-300 bg-indigo-900/60 border border-indigo-700/60 px-3.5 py-1.5 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            LIVE 1-ON-1 ONLINE DEMONSTRATION
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight text-balance">
            See Advocate in Action
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed text-balance max-w-2xl mx-auto">
            Discover how HexaSoft Advocate can simplify your daily legal workflow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenDemo()}
              className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Book Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 text-sm sm:text-base font-bold text-emerald-300 hover:text-emerald-200 bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-700/70 rounded-xl transition-all flex items-center justify-center gap-2.5"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              30-minute tailored walkthrough
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Dedicated Indian legal-tech expert
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
