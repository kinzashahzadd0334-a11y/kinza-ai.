import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Check,
  CheckCircle2,
  Copy,
  KeyRound,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Trash2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactDraft } from '../types';

const STORAGE_KEY = 'mv_portfolio_contact_draft';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactDraft>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactDraft, string>>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPgp, setCopiedPgp] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  // Load draft from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData(parsed);
        setDraftSaved(true);
      }
    } catch (e) {
      console.warn('Unable to load contact draft from localStorage', e);
    }
  }, []);

  // Auto-save draft to localStorage whenever form data changes
  const handleChange = (field: keyof ContactDraft, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    setErrors((prev) => ({ ...prev, [field]: undefined }));

    try {
      if (updated.name || updated.email || updated.subject || updated.message) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        setDraftSaved(true);
      } else {
        localStorage.removeItem(STORAGE_KEY);
        setDraftSaved(false);
      }
    } catch (e) {
      console.warn('Unable to save contact draft', e);
    }
  };

  const handleClearDraft = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setDraftSaved(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPgpToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.pgpKey);
    setCopiedPgp(true);
    setTimeout(() => setCopiedPgp(false), 2500);
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactDraft, string>> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a project or topic subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry details.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide a message of at least 15 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate real network submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      handleClearDraft();
    }, 1100);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-600 font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
              <span>04</span>
              <span>/</span>
              <span>COMMUNICATION &amp; DISCOVERY</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Get In Touch &amp; Collaborate
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Available for Microsoft Office document &amp; data management, modern AI workflow integration, and professional administrative support.
          </p>
        </div>

        {/* Contact Grid: Direct Info Cards & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Direct Email Card with 1-Click Copy */}
            <div className="p-6 rounded-3xl glass-panel bg-white border border-slate-200/90 shadow-xs flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold text-indigo-700 uppercase tracking-wider">
                  Direct Channel
                </span>
                <span className="text-xs font-mono text-emerald-700 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Avg Reply &lt; 4 Hours
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm font-medium text-slate-800 truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-600 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedEmail && (
                <p className="font-sans text-xs text-emerald-700 flex items-center gap-1.5 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Location & Availability Card */}
            <div className="p-6 rounded-3xl glass-panel bg-white border border-slate-200/90 shadow-xs flex flex-col gap-3">
              <span className="font-mono text-[11px] font-bold text-cyan-700 uppercase tracking-wider">
                Geographic Presence
              </span>
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-headline text-base font-bold text-slate-900">
                    Karachi, Sindh, Pakistan
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-slate-600">
                    PKT Timezone (UTC+5) • Open for local opportunities &amp; remote global projects
                  </p>
                </div>
              </div>
            </div>

            {/* Schedule Discovery Call Card */}
            <div className="p-6 rounded-3xl glass-panel bg-white border border-slate-200/90 shadow-xs flex flex-col gap-3">
              <span className="font-mono text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                Calendar Booking
              </span>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-headline text-sm sm:text-base font-bold text-slate-900">
                      15-Min Discovery Call
                    </p>
                    <p className="font-sans text-xs text-slate-500">
                      Discuss MS Office tasks, AI workflows, or collaboration
                    </p>
                  </div>
                </div>

                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                >
                  Schedule
                </a>
              </div>
            </div>

            {/* PGP Security Fingerprint */}
            <div className="p-5 rounded-3xl bg-slate-900 text-slate-300 font-mono text-xs flex flex-col gap-2 border border-slate-800 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <KeyRound className="w-3.5 h-3.5 text-cyan-400" />
                  <span>PGP SECURITY FINGERPRINT</span>
                </div>
                <button
                  onClick={copyPgpToClipboard}
                  className="text-[11px] text-cyan-400 hover:underline cursor-pointer flex items-center gap-1"
                >
                  {copiedPgp ? 'Copied' : 'Copy'}
                </button>
              </div>
              <p className="text-[11px] text-slate-400 break-all">{PERSONAL_INFO.pgpKey}</p>
            </div>
          </div>

          {/* Right Column: Interactive Form with Local Storage Draft Saving (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-9 rounded-3xl glass-panel bg-white border border-slate-200/90 shadow-xs flex flex-col gap-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="font-headline text-lg font-bold text-slate-900">
                  Send a Direct Message
                </span>
              </div>

              {/* Local Storage Auto-Save Indicator */}
              <div className="flex items-center gap-2">
                {draftSaved && (
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-mono">
                    <Sparkles className="w-3 h-3" /> Draft auto-saved
                  </span>
                )}
                {(formData.name || formData.email || formData.message) && (
                  <button
                    onClick={handleClearDraft}
                    className="text-slate-400 hover:text-rose-600 text-xs flex items-center gap-1 cursor-pointer transition-colors"
                    title="Clear current draft"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear</span>
                  </button>
                )}
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-slate-900">
                  Transmission Dispatched!
                </h3>
                <p className="font-sans text-sm text-slate-600 max-w-md leading-relaxed">
                  Thank you, <span className="font-semibold text-indigo-600">{formData.name || 'friend'}</span>. Your message has been routed to {PERSONAL_INFO.name}&apos;s direct priority queue. You will receive an acknowledgment within 4 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs font-semibold text-slate-700">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="e.g. Alex Sterling"
                      className={`w-full px-4 py-3 rounded-2xl bg-slate-50 border ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20'
                          : 'border-slate-300 focus:border-cyan-500'
                      } text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 focus:outline-none hover:border-slate-400 transition-all`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-500 font-sans">{errors.name}</span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs font-semibold text-slate-700">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-slate-50 border ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20'
                          : 'border-slate-300 focus:border-cyan-500'
                      } text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 focus:outline-none hover:border-slate-400 transition-all`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-500 font-sans">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs font-semibold text-slate-700">
                    Topic / Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    placeholder="e.g. MS Office Project / AI Workflow Automation / Inquiries"
                    className={`w-full px-4 py-3 rounded-2xl bg-slate-50 border ${
                      errors.subject
                        ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20'
                        : 'border-slate-300 focus:border-cyan-500'
                    } text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 focus:outline-none hover:border-slate-400 transition-all`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-rose-500 font-sans">{errors.subject}</span>
                  )}
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs font-semibold text-slate-700">
                    Project Scope / Details *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Provide details regarding your spreadsheet model, document formatting, presentation design, or AI task requirements..."
                    className={`w-full px-4 py-3 rounded-2xl bg-slate-50 border ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20'
                        : 'border-slate-300 focus:border-cyan-500'
                    } text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 focus:outline-none hover:border-slate-400 transition-all resize-none`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-500 font-sans">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submission CTA */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-500">
                    Encrypted SSL Transmission
                  </span>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-headline font-bold text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                        <span>Routing...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
