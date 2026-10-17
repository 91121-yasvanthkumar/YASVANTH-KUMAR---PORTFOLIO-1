import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI / Software Collaboration',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = 'yasvanthkumar2306@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending email / submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: 'AI / Software Collaboration', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="w-full py-20 lg:py-28 px-4 sm:px-6 md:px-12 bg-white/80 backdrop-blur-[1px] relative border-t border-slate-100 selection:bg-[#2563eb] selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header with Smooth GSAP-Style Scrolling Transition */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-xs sm:text-[13px] uppercase font-bold tracking-[0.2em] text-slate-500">
              GET IN TOUCH
            </span>
            <span className="w-8 sm:w-10 h-[2.5px] bg-[#2563eb] rounded-full inline-block" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a0f1c] tracking-tight leading-[1.15]">
            Let’s build something{' '}
            <span className="text-[#2563eb]">exceptional together.</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2.5 max-w-xl font-normal leading-relaxed">
            Have an innovative project idea, AI engineering opportunity, or technical challenge? I’m always open to discussing new software products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Social Presence with Smooth GSAP-Style Glide */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 1.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Status Card */}
            <div className="bg-[#f8faff] rounded-3xl border border-blue-100/80 p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Opportunities</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a0f1c] mb-2">
                Open for High-Impact Roles
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Currently exploring Python Development, Autonomous AI Engineering, and full-stack software architecture roles worldwide.
              </p>

              {/* Quick Email Copy Box */}
              <div className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#2563eb] shrink-0" />
                  <span className="text-xs sm:text-sm font-mono font-medium text-slate-700 truncate">
                    {emailAddress}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#2563eb] rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Response Time */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Location
                  </h4>
                  <p className="text-sm font-bold text-[#0a0f1c]">
                    Tamil Nadu, India
                  </p>
                  <span className="text-[11px] text-slate-500">Available for remote &amp; global relocation</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Typical response window:</span>
                <span className="font-semibold text-[#0a0f1c]">&lt; 12 hours</span>
              </div>
            </div>

            {/* Social Connect Strip */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/yasvanth-kumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl shadow-xs transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <img
                  src="/linkedin.png"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png';
                  }}
                  alt="LinkedIn"
                  className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs font-bold text-slate-700 group-hover:text-[#2563eb]">LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://github.com/YASVANTHKUMAR23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl shadow-xs transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Github className="w-4 h-4 text-[#0a0f1c] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-slate-700 group-hover:text-[#2563eb]">GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form with Smooth GSAP-Style Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 1.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
              {/* BorderBeam Accent */}
              <BorderBeam
                size={220}
                duration={14}
                colorFrom="#2563eb"
                colorTo="#38bdf8"
                borderWidth={1.5}
              />

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0a0f1c] flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#2563eb]" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Fill out the form below and I will get back to your inbox promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center bg-emerald-50/70 border border-emerald-200/80 rounded-2xl space-y-3 animate-in fade-in zoom-in-95 duration-200">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out. I’ve received your inquiry and will reply to <span className="font-semibold text-slate-900">{formData.email || 'your email'}</span> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0a0f1c] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0a0f1c] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0a0f1c] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
                    >
                      <option value="AI / Software Collaboration">AI / Software Collaboration</option>
                      <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                      <option value="Freelance / Consultancy">Freelance / Consultancy</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, or engineering opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0a0f1c] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#0a0f1c] hover:bg-black text-white font-semibold rounded-xl text-sm transition-all shadow-[0_10px_25px_rgba(0,0,0,0.15)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
