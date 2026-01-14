'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function Testimonials() {
  const { isDark } = useTheme();

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Trusted by Growing Businesses
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className={`relative rounded-2xl p-6 sm:p-8 md:p-12 border shadow-sm transition-all duration-300 hover:scale-105 ${
            isDark
              ? 'bg-gray-800/50 border-gray-700/50 backdrop-blur-sm'
              : 'bg-white border-gray-200'
          }`}>
            <Quote className={`w-12 h-12 absolute -top-6 -left-4 ${
              isDark ? 'text-violet-400/40' : 'text-violet-600/40'
            }`} />
            <blockquote className={`text-xl md:text-2xl lg:text-3xl italic text-center leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              "Alchelogic gave us Fortune 500-level security at a price we could actually afford. Game changer for our nonprofit."
            </blockquote>
            <p className={`text-center mt-8 font-medium ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              — IT Director, Regional Healthcare Nonprofit
            </p>
          </div>
        </motion.div>

        {/* Placeholder logo bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center items-center gap-8 flex-wrap"
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-24 h-8 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
