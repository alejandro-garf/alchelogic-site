'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, ArrowRight, Check } from 'lucide-react';

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>]/g, '').replace(/javascript:/gi, '').replace(/on\w+=/gi, '').trim();
};

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;

const WEB3FORMS_KEY = '7c02d73e-2c50-4a92-94ec-e941f1c9a16f';

const whatWeFind = [
  'Leaked employee passwords on the dark web',
  'Compromised business email credentials',
  'Exposed accounts from third-party breaches',
  'Active credential stuffing risk indicators',
];

export default function CredentialScan({ compact = false }) {
  const [formData, setFormData] = useState({ name: '', email: '', domain: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: sanitizeInput(value).slice(0, 200) });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) newErrors.name = 'Please enter your name';
    if (!isValidEmail(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.domain || formData.domain.length < 3) newErrors.domain = 'Please enter your business domain';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          domain: formData.domain,
          subject: `FREE CREDENTIAL SCAN REQUEST | ${formData.domain} | Alchelogic`,
          message: `Credential scan requested for domain: ${formData.domain}`,
          replyto: formData.email,
          request_type: 'credential_scan',
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', domain: '' });
        setErrors({});
      } else {
        setErrors({ form: 'Something went wrong. Email us at info@alchelogic.com to request your scan.' });
      }
    } catch {
      setErrors({ form: 'Something went wrong. Email us at info@alchelogic.com' });
    }
    setIsSubmitting(false);
  };

  const form = submitted ? (
    <div className="rounded-2xl p-8 border border-gray-700/50 bg-gray-800/30 text-center">
      <div className="w-16 h-16 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mx-auto mb-4">
        <Check className="w-8 h-8 text-violet-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Scan Request Received!</h3>
      <p className="text-sm text-gray-400 mb-6">
        We'll run your credential scan and email you the full report within <span className="font-semibold text-gray-300">24 business hours</span>.
      </p>
      <div className="p-4 rounded-xl bg-violet-500/8 border border-violet-500/20 mb-6">
        <p className="text-sm font-medium text-violet-300">Want to discuss the results? Book a free call and we'll walk through everything together.</p>
      </div>
      <a
        href="https://calendly.com/alchelogic/alchelogic"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25"
      >
        Book a Free Call <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  ) : (
    <div className="rounded-2xl p-6 sm:p-8 border border-gray-700/50 bg-gray-800/30">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-violet-500/15 border border-violet-500/20">
          <Search className="w-5 h-5 text-violet-400" />
        </div>
        <div>
          <h3 className="font-bold text-white">Request Your Free Dark Web Scan</h3>
          <p className="text-xs text-gray-500">Results delivered within 24 business hours</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Smith', autoComplete: 'name' },
          { name: 'email', label: 'Your Work Email', type: 'email', placeholder: 'jane@smithlaw.com', autoComplete: 'email' },
        ].map(({ name, label, type, placeholder, autoComplete }) => (
          <div key={name}>
            <label className="text-sm font-medium mb-1.5 block text-gray-300">
              {label} <span className="text-violet-400">*</span>
            </label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              autoComplete={autoComplete}
              placeholder={placeholder}
              className={`w-full border rounded-lg px-4 py-2.5 text-sm placeholder-gray-600 bg-gray-900/60 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition ${errors[name] ? 'border-red-500/60' : 'border-gray-600'}`}
            />
            {errors[name] && <p className="text-red-400 text-xs mt-1">{errors[name]}</p>}
          </div>
        ))}
        <div>
          <label className="text-sm font-medium mb-1.5 block text-gray-300">
            Business Domain <span className="text-violet-400">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-600">@</span>
            <input
              type="text"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              required
              placeholder="smithlaw.com"
              className={`w-full border rounded-lg pl-7 pr-4 py-2.5 text-sm placeholder-gray-600 bg-gray-900/60 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition ${errors.domain ? 'border-red-500/60' : 'border-gray-600'}`}
            />
          </div>
          {errors.domain && <p className="text-red-400 text-xs mt-1">{errors.domain}</p>}
          <p className="text-xs mt-1 text-gray-600">Enter domain only, e.g. smithlaw.com</p>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 hover:scale-105 active:scale-95 text-white py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-violet-600/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Search className="w-4 h-4" />
          {isSubmitting ? 'Submitting...' : 'Run My Free Scan'}
        </button>
        {errors.form && <p className="text-red-400 text-xs text-center">{errors.form}</p>}
        <p className="text-xs text-center text-gray-700">Free. No credit card. No obligation. No pitch.</p>
        <p className="text-xs text-center text-gray-500 mt-1">We'll follow up via email within 24 business hours.</p>
      </form>
    </div>
  );

  if (compact) return form;

  return (
    <section id="credential-scan" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-3">Free Offer</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Is Your Business Already Compromised?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6">
              The average breach goes undetected for <span className="text-white font-semibold">287 days</span>.
              We'll scan the dark web for credentials tied to your domain and send you a full report, free, with no obligation.
            </p>
            <ul className="space-y-3 mb-8">
              {whatWeFind.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="w-6 h-6 rounded-full bg-violet-500/15 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Search className="w-3 h-3 text-violet-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/40 border border-gray-700/50">
              <Shield className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-300">100% free. No strings attached.</span> If we find something, we show you exactly what we found. What you do with it is up to you.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {form}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
