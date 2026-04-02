'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Calendar, ArrowRight, Check } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const PRICE_PER_SEAT = 49.99;

const included = [
  'SentinelOne Complete',
  'StellarCyber XDR',
  'Coda Attack Surface Mgmt',
  'PDQ Patch Management',
  '24/7 SOC Monitoring',
];

export default function QuoteCalculator() {
  const { isDark } = useTheme();
  const [seats, setSeats] = useState('');
  const [showQuote, setShowQuote] = useState(false);

  const numSeats = parseInt(seats, 10);
  const isValid = !isNaN(numSeats) && numSeats >= 1;
  const monthly = isValid ? (numSeats * PRICE_PER_SEAT).toFixed(2) : null;
  const annual = isValid ? (numSeats * PRICE_PER_SEAT * 12).toFixed(2) : null;

  const handleCalculate = () => { if (isValid) setShowQuote(true); };
  const handleReset = () => { setSeats(''); setShowQuote(false); };

  return (
    <section id="quote" className="py-16 sm:py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-500 mb-3">
            Instant Quote
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            See Your Price in Seconds
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            No forms. No waiting. Just enter how many people are in your organization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`rounded-2xl border p-6 sm:p-10 ${isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200 shadow-sm'}`}
        >
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end mb-6">
            <div className="flex-1">
              <label className={`text-sm font-semibold mb-2 block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Number of employees / devices
              </label>
              <input
                type="number"
                min="1"
                max="999"
                value={seats}
                onChange={(e) => { setSeats(e.target.value); setShowQuote(false); }}
                onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
                placeholder="e.g. 12"
                className={`w-full border rounded-xl px-5 py-3.5 text-2xl font-bold focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition ${isDark ? 'bg-gray-900/50 border-gray-600 text-white placeholder-gray-600' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-300'}`}
              />
            </div>
            <button
              onClick={handleCalculate}
              disabled={!isValid}
              className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25 whitespace-nowrap"
            >
              <Calculator className="w-5 h-5" />
              Calculate
            </button>
          </div>

          <p className={`text-xs mb-6 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            $49.99 per seat / per month · All 5 tools included · No contracts
          </p>

          <AnimatePresence>
            {showQuote && isValid && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
              >
                <div className={`rounded-xl p-6 mb-5 border ${isDark ? 'bg-violet-500/10 border-violet-500/30' : 'bg-violet-50 border-violet-200'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className={`text-sm font-semibold mb-1 ${isDark ? 'text-violet-400' : 'text-violet-600'}`}>
                        {numSeats} {numSeats === 1 ? 'seat' : 'seats'} · everything included
                      </p>
                      <div className="flex items-end gap-2">
                        <span className="text-5xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                          ${monthly}
                        </span>
                        <span className={`text-lg mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>/month</span>
                      </div>
                      <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        ${annual}/year · cancel anytime
                      </p>
                    </div>
                    <ul className="space-y-1.5">
                      {included.map((item) => (
                        <li key={item} className={`flex items-center gap-2 text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          <Check className="w-3.5 h-3.5 text-violet-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://calendly.com/alchelogic/alchelogic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Call — Get Started
                  </a>
                  <a
                    href="#contact"
                    className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 ${isDark ? 'border-gray-600 text-gray-300 hover:border-violet-500 hover:text-violet-400' : 'border-gray-300 text-gray-700 hover:border-violet-500 hover:text-violet-600'}`}
                  >
                    Send Us a Message
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className={`mt-4 text-center p-3 rounded-lg ${isDark ? 'bg-green-500/10 border border-green-500/20' : 'bg-green-50 border border-green-200'}`}>
                  <p className={`text-sm font-medium ${isDark ? 'text-green-400' : 'text-green-700'}`}>
                    Start with a free 7-day trial — no credit card required
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className={`mt-4 text-xs w-full text-center transition-colors ${isDark ? 'text-gray-600 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  ← Recalculate
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
