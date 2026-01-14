'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '2db7cfd8-9943-440a-a1d9-0c7e65cadc7b',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          subject: `New contact from ${formData.name} - Alchelogic`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
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
                  className={`w-full border rounded-lg px-4 py-3 placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition ${
                    isDark
                      ? 'bg-gray-900/50 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="John Smith"
                />
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
                  className={`w-full border rounded-lg px-4 py-3 placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition ${
                    isDark
                      ? 'bg-gray-900/50 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="john@company.com"
                />
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
                  className={`w-full border rounded-lg px-4 py-3 placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition resize-none ${
                    isDark
                      ? 'bg-gray-900/50 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Tell us about your security needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-violet-600 hover:bg-violet-700 hover:scale-105 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-violet-600/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

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
