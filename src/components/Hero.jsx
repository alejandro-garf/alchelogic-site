'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Shield, Check } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const highlights = [
  'SentinelOne endpoint protection',
  'StellarCyber XDR & log storage',
  '24/7 SOC monitoring',
  'Automated patch management',
];

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-10 md:pt-20 md:pb-0">
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-1.5 mb-6"
        >
          <Shield className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium text-violet-400">Complete Security Stack · $49.99/seat/month</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          ENTERPRISE SECURITY.
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent"
        >
          SMALL BUSINESS PRICING.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-6 text-lg sm:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          The same security stack Fortune 500 companies pay tens of thousands for —
          available to your small business at $49.99 per seat, per month.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className={`mt-8 max-w-xl mx-auto rounded-2xl p-6 border ${isDark ? 'bg-gray-800/40 border-gray-700/50' : 'bg-white/70 border-gray-200'}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5 text-left">
            {highlights.map((item) => (
              <div key={item} className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                <Check className="w-4 h-4 text-violet-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a
              href="#quote"
              className="flex-1 bg-violet-600 hover:bg-violet-700 hover:scale-105 text-white px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-violet-600/25 text-center text-sm"
            >
              Get My Instant Quote
            </a>
            <a
              href="https://calendly.com/alchelogic/alchelogic"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 border-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 text-center hover:scale-105 text-sm ${isDark ? 'border-gray-600 hover:border-violet-500 text-gray-300 hover:text-violet-400' : 'border-gray-300 hover:border-violet-600 text-gray-700 hover:text-violet-600'}`}
            >
              Book a Free Call
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-dashed border-gray-600/30">
            <a
              href="#free-trial"
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-sm border-2 transition-all duration-300 hover:scale-105 ${isDark ? 'border-green-500/40 text-green-400 hover:border-green-400 hover:bg-green-500/10' : 'border-green-500/40 text-green-700 hover:border-green-500 hover:bg-green-50'}`}
            >
              7-Day Free Trial
            </a>
            <a
              href="#credential-scan"
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-sm border-2 transition-all duration-300 hover:scale-105 ${isDark ? 'border-violet-500/40 text-violet-400 hover:border-violet-400 hover:bg-violet-500/10' : 'border-violet-500/40 text-violet-700 hover:border-violet-500 hover:bg-violet-50'}`}
            >
              Free Credential Scan
            </a>
          </div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-8 h-8 text-violet-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
