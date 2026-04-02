'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .replace(/data:/gi, '')
    .trim();
};

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
};

const CONSTRAINTS = {
  name: { maxLength: 100, minLength: 2 },
  email: { maxLength: 254 },
  company: { maxLength: 100 },
  message: { maxLength: 500 },
};

const WEB3FORMS_KEY = 'PASTE_YOUR_WEB3FORMS_KEY_HERE';

export default function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitized = sanitizeInput(value);
    const constraint = CONSTRAINTS[name];
    const truncated = constraint?.maxLength ? sanitized.slice(0, constraint.maxLength) : sanitized;
    setFormData({ ...formData, [name]: truncated });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) newErrors.name = 'Please enter your name';
    if (!isValidEmail(formData.email)) newErrors.email = 'Please enter a valid email';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const sanitized = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        company: sanitizeInput(formData.company),
        message: sanitizeInput(formData.message),
      };
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: sanitized.name,
          email: sanitized.email,
          company: sanitized.company || 'Not provided',
          message: sanitized.message || 'Not provided',
          subject: `New inquiry — ${sanitized.company || sanitized.name} | Alchelogic`,
          replyto: sanitized.email,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        setErrors({});
      } else {
        setErrors({ form: 'Something went wrong. Email us directly at info@alchelogic.com' });
      }
    } catch {
      setErrors({ form: 'Something went wrong. Email us directly at info@alchelogic.com' });
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
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-500 mb-3">
            Get Started
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Ready to Get Protected?
          </h2>
          <p className={`mt-4 text-base sm:text-lg max-w-xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Drop your info and we'll reach out within one business day. Or skip ahead and book a call directly.
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
            <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-800/50 border-violet-500/40 ring-1 ring-violet-500/20' : 'bg-violet-50 border-violet-200'}`}>
              <div className="flex items-center gap-3 mb-2">
                <Calendar className={`w-6 h-6 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Book a Free 30-Min Call</h3>
              </div>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                We'll walk you through exactly what's covered, answer any questions, and tell you what your monthly cost will be. No pitch, no pressure.
              </p>
              <a
                href="https://calendly.com/alchelogic/alchelogic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 bg-violet-600 hover:bg-violet-700 hover:scale-105 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-violet-600/25"
              >
                <Calendar className="w-5 h-5" />
                Schedule Now
              </a>
            </div>

            <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-800/30 border-gray-700/50' : 'bg-white border-gray-200'}`}>
              <h3 className={`text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Free Credential Scan</h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                We'll scan the dark web for any leaked passwords or credentials tied to your business domain. Free, fast, no obligation.
              </p>
              <a
                href="#credential-scan"
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3 ${isDark ? 'text-violet-400 hover:text-violet-300' : 'text-violet-600 hover:text-violet-700'}`}
              >
                Request your free scan <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-3 pt-1">
              <div className={`flex items-center gap-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <Mail className="w-4 h-4" />
                <span>info@alchelogic.com</span>
              </div>
              <div className={`flex items-center gap-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
              <div className={`rounded-2xl p-8 border text-center h-full flex flex-col items-center justify-center gap-4 ${isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-gray-50 border-gray-200'}`}>
                <div className="text-4xl">✅</div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Got it — we'll be in touch soon!</h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Want to move faster? Book a call and we can talk today.</p>
                <a
                  href="https://calendly.com/alchelogic/alchelogic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Call
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={`space-y-4 rounded-2xl p-6 sm:p-8 border ${isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-gray-50 border-gray-200'}`}
              >
                <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Or send us a message and we'll reach out:</p>
                {[
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Smith', autoComplete: 'name', required: true },
                  { name: 'email', label: 'Work Email', type: 'email', placeholder: 'jane@smithlaw.com', autoComplete: 'email', required: true },
                  { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Smith & Associates', autoComplete: 'organization', required: false },
                ].map(({ name, label, type, placeholder, autoComplete, required }) => (
                  <div key={name}>
                    <label className={`text-sm font-medium mb-1.5 block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {label} {required && <span className="text-violet-500">*</span>}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      required={required}
                      autoComplete={autoComplete}
                      className={`w-full border rounded-lg px-4 py-2.5 text-sm placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition ${isDark ? 'bg-gray-900/50 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} ${errors[name] ? 'border-red-500' : ''}`}
                      placeholder={placeholder}
                    />
                    {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
                  </div>
                ))}
                <div>
                  <label className={`text-sm font-medium mb-1.5 block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    How many employees? <span className={`font-normal ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>(helps us prep your quote)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    maxLength={CONSTRAINTS.message.maxLength}
                    className={`w-full border rounded-lg px-4 py-2.5 text-sm placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition resize-none ${isDark ? 'bg-gray-900/50 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    placeholder="e.g. 12 employees — dental practice in San Jose"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-violet-600 hover:bg-violet-700 hover:scale-105 text-white py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-violet-600/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {errors.form && <p className="text-red-500 text-center text-xs mt-2">{errors.form}</p>}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
