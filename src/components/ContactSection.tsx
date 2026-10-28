import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Instagram,
  Globe,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Mail,
  User,
  MapPin,
  Users
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/legalData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    practiceName: '',
    city: '',
    teamMembers: '1-5',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile number is required';
    } else {
      const cleanPhone = formData.mobileNumber.replace(/[^0-9]/g, '');
      if (cleanPhone.length < 10) {
        errs.mobileNumber = 'Please enter a valid 10-digit mobile number';
      }
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.practiceName.trim()) {
      errs.practiceName = 'Law firm or practice name is required';
    }
    if (!formData.city.trim()) {
      errs.city = 'City / Court complex location is required';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent(
    `Hello HexaSoft, I submitted a demo request for ${formData.practiceName || 'my law practice'}. Name: ${formData.name}, Mobile: ${formData.mobileNumber}. ${BRAND_CONFIG.whatsappMessage}`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-md inline-block border border-indigo-200/60">
            Get in Touch With HexaSoft
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight text-balance">
            Let's Simplify Your Legal Practice
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Connect with our legal-tech team for a free demonstration, custom pricing consultation, or onboarding assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Details & Brand Info */}
          <div className="lg:col-span-5 space-y-8 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-2">
                HexaSoft Technologies
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dedicated legal management software designed specifically for the needs of Indian advocates, chambers, and law firms.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${BRAND_CONFIG.phone}`}
                    className="font-mono font-bold text-slate-900 hover:text-indigo-600 transition-colors block text-base"
                  >
                    {BRAND_CONFIG.phone}
                  </a>
                  <a
                    href={`https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent(BRAND_CONFIG.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-600 hover:text-emerald-700 font-semibold inline-flex items-center gap-1 mt-0.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-700 shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Official Instagram
                  </span>
                  <a
                    href={BRAND_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-900 hover:text-indigo-600 transition-colors block"
                  >
                    {BRAND_CONFIG.instagram}
                  </a>
                  <span className="text-xs text-slate-500">Legal-tech updates & product releases</span>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Official Website
                  </span>
                  <a
                    href={BRAND_CONFIG.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-900 hover:text-indigo-600 transition-colors block"
                  >
                    {BRAND_CONFIG.website}
                  </a>
                  <span className="text-xs text-slate-500">HexaSoft Software Solutions</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Callout */}
            <div className="p-4 rounded-xl bg-indigo-900 text-white space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-300">
                Direct Advocate Line
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                Need to see how your specific court documents and cause lists migrate into HexaSoft? Call our senior specialist directly.
              </p>
              <a
                href={`tel:${BRAND_CONFIG.phone}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-white underline pt-1"
              >
                <span>Call {BRAND_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lead Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Demo Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our legal-tech specialist will contact you on <strong>{formData.mobileNumber}</strong> shortly to confirm your live walkthrough.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Proceed Directly to WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        mobileNumber: '',
                        email: '',
                        practiceName: '',
                        city: '',
                        teamMembers: '1-5',
                        message: ''
                      });
                    }}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    Request a Personalized Live Demo
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill out the form below and we'll reach out within 1 business hour.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Adv. Rajeshwar Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full text-xs pl-9 pr-3 py-2.5 rounded-lg border ${
                        errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                      } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                  </div>
                  {errors.name && <span className="text-[11px] text-rose-500 mt-1 block">{errors.name}</span>}
                </div>

                {/* Mobile Number & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-xs text-slate-500 font-mono">+91</span>
                      <input
                        type="tel"
                        placeholder="98765 43210"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        className={`w-full text-xs pl-11 pr-3 py-2.5 rounded-lg border font-mono ${
                          errors.mobileNumber ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                        } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      />
                    </div>
                    {errors.mobileNumber && <span className="text-[11px] text-rose-500 mt-1 block">{errors.mobileNumber}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="email"
                        placeholder="advocate@chambers.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full text-xs pl-9 pr-3 py-2.5 rounded-lg border ${
                          errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                        } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      />
                    </div>
                    {errors.email && <span className="text-[11px] text-rose-500 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                {/* Practice Name & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Law Firm / Practice Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Sharma & Associates / Independent"
                        value={formData.practiceName}
                        onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                        className={`w-full text-xs pl-9 pr-3 py-2.5 rounded-lg border ${
                          errors.practiceName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                        } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      />
                    </div>
                    {errors.practiceName && <span className="text-[11px] text-rose-500 mt-1 block">{errors.practiceName}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      City / Primary Court <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        placeholder="New Delhi, Mumbai, Ahmedabad..."
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className={`w-full text-xs pl-9 pr-3 py-2.5 rounded-lg border ${
                          errors.city ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                        } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      />
                    </div>
                    {errors.city && <span className="text-[11px] text-rose-500 mt-1 block">{errors.city}</span>}
                  </div>
                </div>

                {/* Number of Team Members */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Number of Team Members (Advocates, Associates & Clerks)
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <select
                      value={formData.teamMembers}
                      onChange={(e) => setFormData({ ...formData, teamMembers: e.target.value })}
                      className="w-full text-xs pl-9 pr-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                    >
                      <option value="Solo (1 Advocate)">Solo (Individual Advocate)</option>
                      <option value="2-5 Members">2 to 5 Members (Small Chamber)</option>
                      <option value="6-15 Members">6 to 15 Members (Growing Practice)</option>
                      <option value="16-50 Members">16 to 50 Members (Established Firm)</option>
                      <option value="50+ Members">50+ Members (Large Law Firm)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message / Special Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your current practice setup, primary courts, or any questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl transition-all shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Request...' : 'Request Free Demo'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
