'use client';

import { useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Check, ArrowRight } from 'lucide-react';

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>]/g, '').replace(/javascript:/gi, '').replace(/on\w+=/gi, '').replace(/data:/gi, '').trim();
};

const isValidEmail = (email) => {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return re.test(email) && email.length <= 254;
};

const WEB3FORMS_KEY = 'PASTE_YOUR_WEB3FORMS_KEY_HERE';

const included = [
  'SentinelOne Complete endpoint protection',
  'StellarCyber XDR: full network visibility',
  'Coda Attack Surface Management',
  'PDQ automated patch management',
  '24/7 SOC monitoring & incident response',
  'Full setup and onboarding included',
];

export default function FreeTrialPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', employees: '' });
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
    if (!isValidEmail(formData.email)) newErrors.email = 'Please enter a valid work email';
    if (!formData.company || formData.company.length < 2) newErrors.company = 'Please enter your company name';
    if (!formData.employees) newErrors.employees = 'Please enter the number of employees';
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
          company: formData.company,
          employees: formData.employees,
          subject: `FREE TRIAL SIGNUP | ${formData.company} | Alchelogic`,
          message: `Free trial signup from ${formData.name} at ${formData.company}. ${formData.employees} employees.`,
          replyto: formData.email,
          request_type: 'free_trial',
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', employees: '' });
        setErrors({});
      } else {
        setErrors({ form: 'Something went wrong. Email us at info@alchelogic.com to get started.' });
      }
    } catch {
      setErrors({ form: 'Something went wrong. Email us at info@alchelogic.com to get started.' });
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 min-h-screen">
        <Navbar />

        <div className="pt-28 pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-4">
                7-Day Free Trial
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                Try Everything.<br />
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Pay Nothing.</span>
              </h1>
              <p className="text-lg text-gray-400 mb-8">
                Get the full security stack deployed on every device in your organization. No credit card required. No contracts. Cancel anytime.
              </p>
              <ul className="space-y-3 mb-6">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-violet-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/40 border border-gray-700/50">
                <Shield className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-gray-300">Deployed in 48 hours.</span> We handle setup and configuration so your team can stay focused on what they do best.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <div className="rounded-2xl p-8 border border-gray-700/50 bg-gray-800/30 text-center">
                  <div className="w-16 h-16 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">You're In!</h3>
                  <p className="text-sm text-gray-400 mb-6">
                    We'll reach out within <span className="font-semibold text-gray-300">one business day</span> to get your trial set up.
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25"
                  >
                    Back to Home <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                <div className="rounded-2xl p-6 sm:p-8 border border-gray-700/50 bg-gray-800/30">
                  <h3 className="font-bold text-white text-lg mb-1">Start Your Free Trial</h3>
                  <p className="text-xs text-gray-500 mb-6">No credit card. No contracts. Cancel anytime.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Smith', autoComplete: 'name' },
                      { name: 'email', label: 'Work Email', type: 'email', placeholder: 'jane@smithlaw.com', autoComplete: 'email' },
                      { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Smith & Associates', autoComplete: 'organization' },
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
                        Number of Employees <span className="text-violet-400">*</span>
                      </label>
                      <input
                        type="number"
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        required
                        min="1"
                        placeholder="e.g. 12"
                        className={`w-full border rounded-lg px-4 py-2.5 text-sm placeholder-gray-600 bg-gray-900/60 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition ${errors.employees ? 'border-red-500/60' : 'border-gray-600'}`}
                      />
                      {errors.employees && <p className="text-red-400 text-xs mt-1">{errors.employees}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 hover:scale-105 text-white py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-violet-600/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Shield className="w-4 h-4" />
                      {isSubmitting ? 'Submitting...' : 'Start My Free Trial'}
                    </button>
                    {errors.form && <p className="text-red-400 text-xs text-center">{errors.form}</p>}
                    <p className="text-xs text-center text-gray-500 mt-2">We'll follow up via email within one business day.</p>
                  </form>
                </div>
              )}
            </motion.div>

          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
