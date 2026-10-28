import React, { useState } from 'react';
import { MessageSquare, Phone, X, Scale } from 'lucide-react';
import { BRAND_CONFIG } from '../data/legalData';

export const FloatingContactBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent(BRAND_CONFIG.whatsappMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Expanded contact options popup */}
      {isOpen && (
        <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-200 w-72 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Scale className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-900 font-heading">
                HexaSoft Legal Desk
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-600 mb-3 leading-relaxed">
            Have questions about software features, plans, or migrating your chamber data?
          </p>

          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${BRAND_CONFIG.phone}`}
              className="w-full py-2 px-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-slate-600" />
              <span>Call {BRAND_CONFIG.phone}</span>
            </a>
          </div>

          <div className="mt-2.5 pt-2 border-t border-slate-100 text-[10px] text-center text-slate-400">
            Official Indian support line · Fast response
          </div>
        </div>
      )}

      {/* Floating Trigger Buttons */}
      <div className="flex items-center gap-2">
        {/* Instant WhatsApp Quick Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
          title="WhatsApp HexaSoft"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp HexaSoft</span>
        </a>

        {/* Circular Toggle Button for Mobile / Desktop */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl transition-all cursor-pointer ${
            isOpen
              ? 'bg-slate-800 hover:bg-slate-700 rotate-90'
              : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-105 shadow-indigo-600/30'
          }`}
          aria-label="Open contact options"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};
