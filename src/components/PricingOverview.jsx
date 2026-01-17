'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const highlights = [
  'Flexible pricing for any budget',
  'No long-term contracts required',
  'Custom plans available',
  'Free initial consultation',
];

export default function PricingOverview() {
  const { isDark } = useTheme();

  return (
    <section id="pricing" className="py-16 sm:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-500 mb-3">
            Pricing
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Transparent & Flexible
          </h2>
          <p className={`mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            We work with your budget. Security and technology solutions shouldn't break the bank.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 max-w-xl mx-auto"
        >
          <div className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:scale-105 ${
            isDark
              ? 'bg-gray-800/50 border-gray-700/50 backdrop-blur-sm'
              : 'bg-white border-gray-200'
          }`}>
            <ul className="space-y-3 mb-6">
              {highlights.map((highlight, index) => (
                <li
                  key={index}
                  className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  <Check className="w-5 h-5 mr-3 flex-shrink-0 text-green-500" />
                  {highlight}
                </li>
              ))}
            </ul>

            <p className={`text-sm italic mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Every business is different. Let's find the right solution for yours.
            </p>

            <a
              href="/pricing"
              className="flex items-center justify-center gap-2 w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25"
            >
              View Pricing Details
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
