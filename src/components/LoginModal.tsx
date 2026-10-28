import React, { useState } from 'react';
import { X, Lock, ShieldCheck, UserCheck, ArrowRight, CheckCircle2, Gavel, User } from 'lucide-react';
import { BRAND_CONFIG } from '../data/legalData';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onOpenDemo }) => {
  const [portalType, setPortalType] = useState<'advocate' | 'client'>('advocate');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSimulatedLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setFeedback('Please enter your credentials to log in.');
      return;
    }
    setFeedback(`Success! Simulated login to ${portalType === 'advocate' ? 'Chamber Portal' : 'Client Portal'}. Redirecting to secure environment...`);
  };

  const handleUseDemoCredentials = (type: 'advocate' | 'client') => {
    setPortalType(type);
    if (type === 'advocate') {
      setEmail('partner@hexasoft.com');
      setPassword('••••••••••••');
    } else {
      setEmail('client@apexlogistics.in');
      setPassword('••••••••••••');
    }
    setFeedback(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 border border-slate-200 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5 pb-3 border-b border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono">
            HexaSoft Advocate
          </span>
          <h3 className="text-xl font-bold text-slate-900 font-heading mt-0.5">
            Select Your Portal
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Sign in to access your legal management workspace or client dashboard.
          </p>
        </div>

        {/* Portal Type Switcher */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl mb-5 text-xs font-semibold">
          <button
            type="button"
            onClick={() => {
              setPortalType('advocate');
              setFeedback(null);
            }}
            className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              portalType === 'advocate'
                ? 'bg-white text-indigo-700 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Gavel className="w-3.5 h-3.5" />
            <span>Advocate / Firm</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setPortalType('client');
              setFeedback(null);
            }}
            className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              portalType === 'client'
                ? 'bg-white text-indigo-700 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Client Portal</span>
          </button>
        </div>

        {/* Quick Demo Pre-fill for prospective advocates */}
        <div className="p-3 bg-indigo-50/70 border border-indigo-100 rounded-xl mb-4 text-xs text-indigo-900 flex items-center justify-between">
          <span className="text-[11px]">Testing as prospective buyer?</span>
          <button
            type="button"
            onClick={() => handleUseDemoCredentials(portalType)}
            className="text-[11px] font-bold text-indigo-700 bg-white px-2.5 py-1 rounded shadow-xs hover:bg-indigo-50 border border-indigo-200 cursor-pointer"
          >
            Fill Demo {portalType === 'advocate' ? 'Advocate' : 'Client'}
          </button>
        </div>

        <form onSubmit={handleSimulatedLogin} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {portalType === 'advocate' ? 'Chamber Email or Advocate ID' : 'Client Registered Email'}
            </label>
            <input
              type="text"
              placeholder={portalType === 'advocate' ? 'advocate@chambers.in' : 'client@company.com'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-semibold text-slate-700">Password</label>
              <span className="text-[11px] text-indigo-600 hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>
            <input
              type="password"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {feedback && (
            <div className={`p-2.5 rounded-lg text-xs ${
              feedback.startsWith('Success') ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
            }`}>
              {feedback}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Sign In to {portalType === 'advocate' ? 'Chamber' : 'Client Portal'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="mt-5 pt-4 border-t border-slate-100 text-center space-y-2">
          <p className="text-xs text-slate-500">
            Don't have a HexaSoft subscription yet?
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenDemo();
            }}
            className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
          >
            Book a Free Chamber Demo →
          </button>
        </div>
      </div>
    </div>
  );
};
