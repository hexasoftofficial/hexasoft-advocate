import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageSquare, Phone, ArrowRight, User, Mail, Building2, MapPin } from 'lucide-react';
import { BRAND_CONFIG, PRICING_PLANS } from '../data/legalData';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({
  isOpen,
  onClose,
  selectedPlan = 'Professional'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    practice: '',
    city: '',
    plan: selectedPlan,
    timeSlot: 'Morning (11:00 AM - 1:00 PM IST)',
    date: 'Tomorrow'
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Valid 10-digit mobile number required';
    }
    if (!formData.practice.trim()) errs.practice = 'Practice / Chamber name required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent(
    `Hello HexaSoft, I just booked a demo for ${formData.practice || 'my chamber'}. Name: ${formData.name}, Mobile: ${formData.phone}, Plan: ${formData.plan}, Preferred Slot: ${formData.date} - ${formData.timeSlot}.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Demo Confirmed!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
              Thank you, <strong>{formData.name}</strong>. Our legal-tech onboarding team has scheduled your demo for <strong>{formData.date} ({formData.timeSlot})</strong>.
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-left space-y-1.5">
              <div className="flex justify-between text-slate-500">
                <span>Chamber / Firm:</span>
                <span className="font-semibold text-slate-800">{formData.practice}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Contact Number:</span>
                <span className="font-semibold text-slate-800 font-mono">+91 {formData.phone}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Selected Plan:</span>
                <span className="font-semibold text-indigo-700">{formData.plan}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5 pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono">
                HexaSoft Advocate
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-heading mt-0.5">
                Schedule Your Free 1-on-1 Demo
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                See the live court diary, case folders, and GST invoice generator customized for your chamber.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Advocate / Contact Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Adv. Rajeshwar Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full text-xs pl-9 pr-3 py-2 rounded-lg border ${
                      errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                    } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  />
                </div>
                {errors.name && <span className="text-[10px] text-rose-500 mt-0.5 block">{errors.name}</span>}
              </div>

              {/* Mobile Phone & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-xs text-slate-400 font-mono">+91</span>
                    <input
                      type="tel"
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full text-xs pl-10 pr-3 py-2 rounded-lg border font-mono ${
                        errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                  </div>
                  {errors.phone && <span className="text-[10px] text-rose-500 mt-0.5 block">{errors.phone}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City / Court
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Delhi, Mumbai, Bengaluru..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full text-xs pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Practice Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Law Firm / Chamber Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Sharma Legal / Solo Practice"
                    value={formData.practice}
                    onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                    className={`w-full text-xs pl-9 pr-3 py-2 rounded-lg border ${
                      errors.practice ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                    } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  />
                </div>
                {errors.practice && <span className="text-[10px] text-rose-500 mt-0.5 block">{errors.practice}</span>}
              </div>

              {/* Plan Interest & Preferred Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Plan of Interest
                  </label>
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full text-xs p-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Basic (₹24,000/yr)">Basic (₹24,000/yr)</option>
                    <option value="Professional (₹36,000/yr)">Professional (₹36,000/yr) ⭐</option>
                    <option value="Premium (₹60,000/yr)">Premium (₹60,000/yr) 👑</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full text-xs p-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Morning (11:00 AM - 1:00 PM IST)">Morning (11:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (2:30 PM - 5:00 PM IST)">Afternoon (2:30 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 7:30 PM IST)">Evening (5:00 PM - 7:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm Demo Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-400 pt-1">
                Prefer instant chat?{' '}
                <a
                  href={`https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent(BRAND_CONFIG.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 font-semibold underline"
                >
                  WhatsApp us directly at {BRAND_CONFIG.phone}
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
