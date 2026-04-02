'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Calendar, ArrowRight, Check, ChevronUp, ChevronDown } from 'lucide-react';

const plans = [
  { id: 'monthly', label: 'Monthly', price: 49.99, note: 'No commitment' },
  { id: '6month', label: '6 Months', price: 44.99, note: 'Save 10%' },
  { id: 'annual', label: 'Annual', price: 39.99, note: 'Save 20%' },
];

const included = [
  'SentinelOne Complete',
  'StellarCyber XDR',
  'Coda Attack Surface Mgmt',
  'PDQ Patch Management',
  '24/7 SOC Monitoring',
];

export default function QuoteCalculator() {
  const [seats, setSeats] = useState('');
  const [plan, setPlan] = useState('monthly');
  const [showQuote, setShowQuote] = useState(false);

  const numSeats = parseInt(seats, 10);
  const isValid = !isNaN(numSeats) && numSeats >= 1;
  const selectedPlan = plans.find((p) => p.id === plan);
  const monthly = isValid ? (numSeats * selectedPlan.price).toFixed(2) : null;
  const retailMonthly = isValid ? (numSeats * 75).toFixed(2) : null;
  const annual = isValid ? (numSeats * selectedPlan.price * 12).toFixed(2) : null;

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
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-3">Instant Quote</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">See Your Price in Seconds</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">No forms. No waiting. Just enter how many people are in your organization.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-gray-700/50 bg-gray-800/30 p-6 sm:p-10"
        >
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end mb-4">
            <div className="flex-1">
              <label className="text-sm font-bold mb-2 block text-white">Number of employees / devices</label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="999"
                  value={seats}
                  onChange={(e) => { setSeats(e.target.value); setShowQuote(false); }}
                  onKeyDown={(e) => e.key === 'Enter' && isValid && setShowQuote(true)}
                  placeholder="e.g. 12"
                  className="w-full border border-gray-600 rounded-xl px-5 py-3.5 pr-10 text-2xl font-bold bg-gray-900/60 text-white placeholder-gray-600 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
                  <button type="button" onClick={() => { setSeats(String((parseInt(seats, 10) || 0) + 1)); setShowQuote(false); }} className="text-gray-500 hover:text-white transition-colors p-0 leading-none">
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button type="button" onClick={() => { const v = (parseInt(seats, 10) || 0) - 1; if (v >= 1) { setSeats(String(v)); setShowQuote(false); } }} className="text-gray-500 hover:text-white transition-colors p-0 leading-none">
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <label className="text-sm font-bold mb-2 block text-white">Billing Plan</label>
              <div className="flex gap-2">
                {plans.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => { setPlan(p.id); setShowQuote(false); }}
                    className={`flex-1 py-3 px-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${plan === p.id ? 'bg-violet-600 border-violet-500 text-white' : 'bg-gray-900/60 border-gray-600 text-gray-400 hover:border-violet-500/50'}`}
                  >
                    {p.label}
                    <span className={`block text-[10px] mt-0.5 ${plan === p.id ? 'text-violet-200' : 'text-gray-600'}`}>{p.note}</span>
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => isValid && setShowQuote(true)}
              disabled={!isValid}
              className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25 whitespace-nowrap"
            >
              <Calculator className="w-5 h-5" />
              Calculate
            </button>
          </div>
          <p className="text-xs font-bold text-white mb-6">$49.99 Per Seat · Per Month · Everything Included · No Contracts</p>

          <AnimatePresence>
            {showQuote && isValid && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="rounded-xl p-6 mb-5 border border-violet-500/30 bg-violet-500/8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold mb-1 text-violet-400">
                        {numSeats} {numSeats === 1 ? 'seat' : 'seats'} · {selectedPlan.label} plan · everything included
                      </p>
                      <span className="text-lg font-bold text-red-400 line-through">${retailMonthly}/mo</span>
                      <div className="flex items-end gap-2">
                        <span className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">${monthly}</span>
                        <span className="text-lg mb-1.5 text-gray-500">/month</span>
                      </div>
                      <p className="text-sm mt-1 text-gray-500">${annual}/year · cancel anytime</p>
                    </div>
                    <ul className="space-y-1.5">
                      {included.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                          <Check className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
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
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Call: Get Started
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-gray-600 text-gray-300 hover:border-violet-500 hover:text-violet-400 transition-all duration-300 hover:scale-105"
                  >
                    Send a Message <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="mt-4 text-center p-3 rounded-lg bg-violet-500/8 border border-violet-500/20">
                  <p className="text-sm font-medium text-violet-400">Start with a free 7-day trial, no credit card required</p>
                </div>

                <button
                  onClick={() => { setSeats(''); setShowQuote(false); }}
                  className="mt-4 text-xs w-full text-center text-gray-700 hover:text-gray-500 transition-colors"
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
