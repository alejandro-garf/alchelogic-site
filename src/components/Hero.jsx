'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          ENTERPRISE SECURITY.
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent"
        >
          SMALL BUSINESS PRICING.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-xl md:text-2xl mt-8 max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Complete cybersecurity stack for nonprofits and small businesses. 24/7 protection without the enterprise price tag.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <a
            href="#contact"
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-violet-600/25"
          >
            Get Protected
          </a>
          <a
            href="#services"
            className={`border-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
              isDark
                ? 'border-gray-600 hover:border-violet-500 text-gray-300 hover:text-violet-400'
                : 'border-gray-300 hover:border-violet-600 text-gray-700 hover:text-violet-600'
            }`}
          >
            See How It Works
          </a>
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
