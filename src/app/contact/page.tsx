"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="pt-36 pb-16 md:pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs text-black/55 dark:text-white/55 uppercase tracking-[0.2em] mb-6">Contact</p>
          <h1 className="text-[1.5rem] sm:text-5xl lg:text-7xl font-bold text-black dark:text-white max-w-3xl leading-[0.9] sm:leading-[0.85] mb-4 md:mb-6">
            Let&rsquo;s talk about your next project.
          </h1>
          <p className="text-sm md:text-base text-black/65 dark:text-white/65 max-w-xl mb-8 leading-relaxed">
            Tell us about your challenge. We&rsquo;ll listen, ask the right questions, and get back to you within one business day.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-gray-100 dark:bg-surface border border-gray-200 dark:border-border rounded-xl p-8 md:p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-3">Thank you</h2>
                  <p className="text-black/65 dark:text-white/65 text-sm max-w-md mx-auto leading-relaxed">
                    Your message has been received. One of our specialists will be in touch within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm text-brand font-semibold hover:opacity-70 transition-all duration-200"
                  >
                    Send another message &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs text-black/55 dark:text-white/55 uppercase tracking-widest mb-2">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full bg-gray-100 dark:bg-surface border border-gray-200 dark:border-border rounded-lg px-4 py-3 text-sm text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 outline-none focus:border-brand transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs text-black/55 dark:text-white/55 uppercase tracking-widest mb-2">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full bg-gray-100 dark:bg-surface border border-gray-200 dark:border-border rounded-lg px-4 py-3 text-sm text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 outline-none focus:border-brand transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs text-black/55 dark:text-white/55 uppercase tracking-widest mb-2">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full bg-gray-100 dark:bg-surface border border-gray-200 dark:border-border rounded-lg px-4 py-3 text-sm text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 outline-none focus:border-brand transition-all duration-200"
                        placeholder="+44"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs text-black/55 dark:text-white/55 uppercase tracking-widest mb-2">Company</label>
                      <input
                        id="company"
                        type="text"
                        className="w-full bg-gray-100 dark:bg-surface border border-gray-200 dark:border-border rounded-lg px-4 py-3 text-sm text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 outline-none focus:border-brand transition-all duration-200"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs text-black/55 dark:text-white/55 uppercase tracking-widest mb-2">Service Interested In</label>
                    <select
                      id="service"
                      className="w-full bg-gray-100 dark:bg-surface border border-gray-200 dark:border-border rounded-lg px-4 py-3 text-sm text-black/65 dark:text-white/65 outline-none focus:border-brand transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="ai">AI Partnered Services</option>
                      <option value="cloud">Cloud Services</option>
                      <option value="data">Data & Analytics</option>
                      <option value="managed">Managed IT Support</option>
                      <option value="security">Cyber Security</option>
                      <option value="erp">Microsoft Dynamics ERP</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs text-black/55 dark:text-white/55 uppercase tracking-widest mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full bg-gray-100 dark:bg-surface border border-gray-200 dark:border-border rounded-lg px-4 py-3 text-sm text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 outline-none focus:border-brand transition-all duration-200 resize-none"
                      placeholder="Tell us about your project, timeline, and budget..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-block bg-brand text-white rounded-md px-8 py-3 font-semibold text-sm hover:bg-brand-dark transition-all duration-200"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-gray-100 dark:bg-surface border border-gray-200 dark:border-border rounded-xl p-6 md:p-8 space-y-8">
                <div>
                  <p className="text-xs text-black/55 dark:text-white/55 uppercase tracking-widest mb-3">Address</p>
                  <p className="text-black/65 dark:text-white/65 text-sm leading-relaxed">
                    Unit 112, The Dock<br />
                    75 Exploration Drive<br />
                    Leicester LE4 5NU
                  </p>
                </div>
                <div>
                  <p className="text-xs text-black/55 dark:text-white/55 uppercase tracking-widest mb-3">Phone</p>
                  <a href="tel:+441162257865" className="text-brand text-sm font-semibold hover:opacity-70 transition-all duration-200">
                    +44 0116 225 7865
                  </a>
                </div>
                <div>
                  <p className="text-xs text-black/55 dark:text-white/55 uppercase tracking-widest mb-3">Email</p>
                  <a href="mailto:hello@innowisesolutions.co.uk" className="text-brand text-sm font-semibold hover:opacity-70 transition-all duration-200">
                    hello@innowisesolutions.co.uk
                  </a>
                </div>
                <div>
                  <p className="text-xs text-black/55 dark:text-white/55 uppercase tracking-widest mb-3">Response Time</p>
                  <p className="text-black/65 dark:text-white/65 text-sm leading-relaxed">
                    We aim to respond to all enquiries within one business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
