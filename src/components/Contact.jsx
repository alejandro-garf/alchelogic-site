'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

// Input sanitization to prevent XSS attacks
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '') // Remove angle brackets to prevent HTML injection
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers like onclick=, onerror=
    .replace(/data:/gi, '') // Remove data: protocol
    .trim();
};

// Email validation regex
const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Validation constraints
const CONSTRAINTS = {
  name: { maxLength: 100, minLength: 2 },
  email: { maxLength: 254, minLength: 5 },
  company: { maxLength: 100 },
  message: { maxLength: 2000 },
};

export default function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const constraint = CONSTRAINTS[name];
    if (!constraint) return null;

    if (name === 'name') {
      if (value.length < constraint.minLength) {
        return `Name must be at least ${constraint.minLength} characters`;
      }
      if (value.length > constraint.maxLength) {
        return `Name must be less than ${constraint.maxLength} characters`;
      }
    }

    if (name === 'email') {
      if (value.length < constraint.minLength) {
        return 'Please enter a valid email address';
      }
      if (!isValidEmail(value)) {
        return 'Please enter a valid email address';
      }
    }

    if (name === 'company' && value.length > constraint.maxLength) {
      return `Company name must be less than ${constraint.maxLength} characters`;
    }

    if (name === 'message' && value.length > constraint.maxLength) {
      return `Message must be less than ${constraint.maxLength} characters`;
    }

    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);

    // Enforce max length at input level
    const constraint = CONSTRAINTS[name];
    const truncatedValue = constraint?.maxLength
      ? sanitizedValue.slice(0, constraint.maxLength)
      : sanitizedValue;

    setFormData({ ...formData, [name]: truncatedValue });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      if (field === 'name' || field === 'email') {
        const error = validateField(field, formData[field]);
        if (error) newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate before submitting
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize all inputs before sending
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        company: sanitizeInput(formData.company),
        message: sanitizeInput(formData.message),
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '7c02d73e-2c50-4a92-94ec-e941f1c9a16f',
          to_email: 'info@alchelogic.com',
          from_name: 'Alchelogic Website',
          name: sanitizedData.name,
          email: sanitizedData.email,
          company: sanitizedData.company,
          message: sanitizedData.message,
          subject: `New contact from ${sanitizedData.name} - Alchelogic`,
          replyto: sanitizedData.email,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        setErrors({});
      } else {
        setErrors({ form: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setErrors({ form: 'Something went wrong. Please try again.' });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-500 mb-3">
              Get Started
            </span>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Secure Your Business?
            </h2>
            <p className={`mt-4 text-base sm:text-lg md:text-xl leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Let's talk about your needs and see how we can help.
            </p>

            <div className="mt-6 sm:mt-8 space-y-4">
              <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <Mail className={`w-5 h-5 mr-3 flex-shrink-0 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />
                <span>info@alchelogic.com</span>
              </div>
              <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <Phone className={`w-5 h-5 mr-3 flex-shrink-0 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />
                <span>(650) 436-3490</span>
              </div>
            </div>

            {/* Calendly Booking Section */}
            <div className={`mt-8 sm:mt-10 p-5 sm:p-6 rounded-xl sm:rounded-2xl border ${
              isDark
                ? 'bg-gray-800/50 border-gray-700/50 backdrop-blur-sm'
                : 'bg-violet-50 border-violet-100'
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <Calendar className={`w-6 h-6 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />
                <h3 className={`text-lg sm:text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Schedule a Free Consultation
                </h3>
              </div>
              <p className={`text-sm sm:text-base mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Book a free 30-minute consultation at a time that works for you. No obligation, no pressure, just a conversation about your security and IT needs.
              </p>
              <a
                href="https://calendly.com/alchelogic/alchelogic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-violet-600 hover:bg-violet-700 hover:scale-105 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-violet-600/25"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`text-center mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <span className="text-sm font-medium">Or send us a message</span>
            </div>
            <form
              onSubmit={handleSubmit}
              className={`space-y-4 sm:space-y-5 rounded-xl sm:rounded-2xl p-5 sm:p-8 border ${
                isDark
                  ? 'bg-gray-800/50 border-gray-700/50 backdrop-blur-sm'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div>
                <label className={`text-sm font-medium mb-2 block ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={CONSTRAINTS.name.maxLength}
                  minLength={CONSTRAINTS.name.minLength}
                  autoComplete="name"
                  className={`w-full border rounded-lg px-4 py-3 placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition ${
                    isDark
                      ? 'bg-gray-900/50 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className={`text-sm font-medium mb-2 block ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={CONSTRAINTS.email.maxLength}
                  autoComplete="email"
                  className={`w-full border rounded-lg px-4 py-3 placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition ${
                    isDark
                      ? 'bg-gray-900/50 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="john@company.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className={`text-sm font-medium mb-2 block ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  maxLength={CONSTRAINTS.company.maxLength}
                  autoComplete="organization"
                  className={`w-full border rounded-lg px-4 py-3 placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition ${
                    isDark
                      ? 'bg-gray-900/50 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label className={`text-sm font-medium mb-2 block ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={CONSTRAINTS.message.maxLength}
                  className={`w-full border rounded-lg px-4 py-3 placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition resize-none ${
                    isDark
                      ? 'bg-gray-900/50 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Tell us about your security needs..."
                />
                <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  {formData.message.length}/{CONSTRAINTS.message.maxLength} characters
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-violet-600 hover:bg-violet-700 hover:scale-105 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-violet-600/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {errors.form && (
                <p className="text-red-500 text-center font-semibold mt-4">
                  {errors.form}
                </p>
              )}

              {submitted && (
                <p className="text-green-500 text-center font-semibold mt-4">
                  Thanks for reaching out! We'll be in touch soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
