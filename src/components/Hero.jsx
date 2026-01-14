'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-10 md:pt-20 md:pb-0">
      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          ENTERPRISE SECURITY.
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent"
        >
          SMALL BUSINESS PRICING.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6"
        >
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-violet-500" />
          <p className={`text-xs sm:text-sm md:text-base font-medium italic text-center ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            By small business owners, for small business owners
          </p>
          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-violet-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className={`mt-6 sm:mt-8 w-full max-w-3xl mx-auto rounded-xl p-3 sm:p-4 md:p-5 backdrop-blur-sm border ${
            isDark
              ? 'bg-gray-800/30 border-gray-700/50'
              : 'bg-white/30 border-gray-200/50'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 items-center">
            {/* Image on the left */}
            <div className="flex items-center justify-center order-2 md:order-1">
              <img
                src="/images/fullsolution.png"
                alt="Full Security Solution"
                className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] h-auto object-contain transition-all duration-300 hover:scale-110 cursor-pointer"
              />
            </div>

            {/* Content on the right */}
            <div className="text-center md:text-left order-1 md:order-2">
              <p className={`text-sm sm:text-base md:text-lg font-semibold leading-relaxed ${
                isDark ? 'text-gray-100' : 'text-gray-800'
              }`}>
                Complete cybersecurity solutions for nonprofits and small businesses.
              </p>
              <p className={`text-xs sm:text-sm md:text-base font-semibold mt-1 ${
                isDark ? 'text-violet-400' : 'text-violet-600'
              }`}>
                24/7 protection without the enterprise price tag.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 mt-3 sm:mt-4 justify-center md:justify-start">
                <a
                  href="#pricing"
                  className="bg-violet-600 hover:bg-violet-700 hover:scale-105 text-white px-4 sm:px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-violet-600/25 text-center text-xs sm:text-sm"
                >
                  Get Started
                </a>
                <a
                  href="#contact"
                  className={`border-2 px-4 sm:px-5 py-2 rounded-lg font-semibold transition-all duration-300 text-center hover:scale-105 text-xs sm:text-sm ${
                    isDark
                      ? 'border-gray-600 hover:border-violet-500 text-gray-300 hover:text-violet-400'
                      : 'border-gray-300 hover:border-violet-600 text-gray-700 hover:text-violet-600'
                  }`}
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-8 h-8 text-violet-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
