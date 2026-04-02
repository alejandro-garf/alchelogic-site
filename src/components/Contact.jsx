'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, ArrowRight, Check } from 'lucide-react';

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>]/g, '').replace(/javascript:/gi, '').replace(/on\w+=/gi, '').replace(/data:/gi, '').trim();
};

const isValidEmail = (email) => {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return re.test(email) && email.length <= 254;
};

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const truncated = sanitizeInput(value).slice(0, name === 'message' ? 500 : 100);
    setFormData({ ...formData, [name]: truncated });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) newErrors.name = 'Please enter your name';
    if (!isValidEmail(formData.email)) newErrors.email = 'Please enter a valid email';
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
          name: sanitizeInput(formData.name),
          email: sanitizeInput(formData.email),
          company: sanitizeInput(formData.company) || 'Not provided',
          message: sanitizeInput(formData.message) || 'Not provided',
          subject: `New inquiry | ${sanitizeInput(formData.company) || sanitizeInput(formData.name)} | Alchelogic`,
          replyto: sanitizeInput(formData.email),
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setErrors({ form: 'Something went wrong. Email info@alchelogic.com directly.' });
      }
    } catch {
      setErrors({ form: 'Something went wrong. Email info@alchelogic.com directly.' });
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-3">Get Started</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">Ready to Get Protected?</h2>
          <p className="mt-4 text-base sm:text-lg max-w-xl mx-auto text-gray-400">
            Drop your info and we'll reach out within one business day. Or book a call directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="p-6 rounded-2xl border border-violet-500/30 bg-violet-500/5 ring-1 ring-violet-500/10">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6 text-violet-400" />
                <h3 className="text-lg font-bold text-white">Book a Free 30-Min Call</h3>
              </div>
              <p className="text-sm mb-4 text-gray-400">We'll walk through your setup, answer questions, and tell you your exact monthly cost. No pitch, no pressure.</p>
              <a
                href="https://calendly.com/alchelogic/alchelogic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 bg-violet-600 hover:bg-violet-500 hover:scale-105 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-violet-600/25"
              >
                <Calendar className="w-5 h-5" />
                Schedule Now
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-gray-700/50 bg-gray-800/20">
              <h3 className="text-base font-bold text-white mb-1">Free Dark Web Scan</h3>
              <p className="text-sm mb-4 text-gray-400">Find out if your credentials are already exposed. Free scan, results in 24 hours.</p>
              <a href="/free-credential-scan" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-all duration-200 hover:gap-3">
                Request your free scan <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-gray-700/50 bg-gray-800/20">
              <h3 className="text-base font-bold text-white mb-1">7-Day Free Trial</h3>
              <p className="text-sm mb-4 text-gray-400">Get the full security stack on every device. No credit card, no contracts.</p>
              <a href="/free-trial" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-all duration-200 hover:gap-3">
                Start your free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Mail className="w-4 h-4" />
                <span>info@alchelogic.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Phone className="w-4 h-4" />
                <span>(650) 436-3490</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="rounded-2xl p-8 border border-gray-700/50 bg-gray-800/30 text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mx-auto"><Check className="w-6 h-6 text-violet-400" /></div>
                <h3 className="text-xl font-bold text-white">Got it, we'll be in touch!</h3>
                <p className="text-sm text-gray-400">Want to move faster? Book a call directly.</p>
                <a
                  href="https://calendly.com/alchelogic/alchelogic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Call
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-2xl p-6 sm:p-8 border border-gray-700/50 bg-gray-800/20"
              >
                <p className="text-sm font-bold text-white">Send Us a Message</p>
                {[
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Smith', autoComplete: 'name', required: true },
                  { name: 'email', label: 'Work Email', type: 'email', placeholder: 'jane@smithlaw.com', autoComplete: 'email', required: true },
                  { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Smith & Associates', autoComplete: 'organization', required: true },
                ].map(({ name, label, type, placeholder, autoComplete, required }) => (
                  <div key={name}>
                    <label className="text-sm font-medium mb-1.5 block text-gray-300">
                      {label} {required && <span className="text-violet-400">*</span>}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      required={required}
                      autoComplete={autoComplete}
                      className={`w-full border rounded-lg px-4 py-2.5 text-sm placeholder-gray-600 bg-gray-900/60 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition ${errors[name] ? 'border-red-500/60' : 'border-gray-600'}`}
                      placeholder={placeholder}
                    />
                    {errors[name] && <p className="text-red-400 text-xs mt-1">{errors[name]}</p>}
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-gray-300">
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full border border-gray-600 rounded-lg px-4 py-2.5 text-sm placeholder-gray-600 bg-gray-900/60 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition resize-none"
                    placeholder="Tell us about your business, how many employees you have, and what you're looking for."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-violet-600 hover:bg-violet-500 hover:scale-105 text-white py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-violet-600/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {errors.form && <p className="text-red-400 text-center text-xs mt-2">{errors.form}</p>}
                <p className="text-xs text-center text-gray-500 mt-2">We'll follow up via email within one business day.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
