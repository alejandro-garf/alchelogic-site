'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thanks for reaching out! We'll be in touch soon.");
  };

  return (
    <section id="contact" className="py-24 relative">

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Secure Your Business?
            </h2>
            <p className={`mt-4 text-lg md:text-xl leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Get in touch for a free security assessment. We'll show you exactly where you're vulnerable and how we can help.
            </p>

            <div className="mt-8 space-y-4">
              <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <Mail className={`w-5 h-5 mr-3 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />
                <span>contact@alchelogic.com</span>
              </div>
              <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <Phone className={`w-5 h-5 mr-3 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`space-y-5 rounded-2xl p-8 border ${
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
                className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg font-semibold transition shadow-lg shadow-violet-600/25"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
