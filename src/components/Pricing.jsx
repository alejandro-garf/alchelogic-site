'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const features = [
  'All 7 security services included',
  '24/7 monitoring & threat response',
  'Unlimited support',
  'No long-term contracts required',
  'Onboarding & setup included',
];

export default function Pricing() {
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
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Simple, Transparent Pricing
          </h2>
          <p className={`mt-3 sm:mt-4 text-base sm:text-lg md:text-xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            One plan. Everything included. No surprises.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-xl mx-auto"
        >
          <div className={`rounded-3xl p-6 sm:p-10 md:p-12 shadow-lg border transition-all duration-300 hover:scale-105 ${
            isDark
              ? 'bg-gray-800/50 border-gray-700/50 backdrop-blur-sm'
              : 'bg-white border-gray-200'
          }`}>
            {/* Price */}
            <div className="text-center">
              <div className="flex items-baseline justify-center">
                <span className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  $25
                </span>
                <span className={`text-lg sm:text-xl ml-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  /seat/month
                </span>
              </div>
              <p className={`mt-2 text-sm sm:text-base font-semibold ${isDark ? 'text-violet-400' : 'text-violet-600'}`}>
                or $300/year per seat — save 2 months
              </p>
            </div>

            {/* Divider */}
            <div className={`border-t my-8 ${isDark ? 'border-gray-700' : 'border-gray-200'}`} />

            {/* Features */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  <Check className="w-5 h-5 mr-3 flex-shrink-0 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="block w-full bg-violet-600 hover:bg-violet-700 hover:scale-110 text-white py-4 rounded-xl font-semibold text-center mt-8 transition-all duration-300 shadow-lg shadow-violet-600/25"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
