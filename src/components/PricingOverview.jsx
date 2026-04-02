'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Calculator, Calendar } from 'lucide-react';

const included = [
  'SentinelOne Complete endpoint protection',
  'StellarCyber XDR: full network visibility',
  'Coda Attack Surface Management',
  'PDQ automated patch management',
  '24/7 SOC monitoring & incident response',
  'Remote forensics & root cause analysis',
  'One-click ransomware rollback',
  'No minimum seat count',
  'Month-to-month, no contracts',
  'Setup & onboarding included',
];

export default function PricingOverview() {
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
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-3">Pricing</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">Simple. Transparent. All-Inclusive.</h2>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-gray-400">One price. Everything included. No upsells, no tiers, no surprises.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <p className="text-center text-sm text-gray-500 mb-2">Purchased separately, these tools cost</p>
          <p className="text-center text-2xl font-bold text-red-400 line-through mb-6">$75+/seat/month</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-2xl p-6 border border-gray-700/50 bg-gray-800/20 text-center">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Monthly</h3>
              <div className="flex items-end justify-center gap-1 mb-1">
                <span className="text-3xl font-bold text-white">$49.99</span>
                <span className="text-xs text-gray-500 mb-1">/seat/mo</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">No commitment</p>
              <a href="/free-trial" className="inline-flex items-center justify-center w-full gap-2 border-2 border-gray-600 hover:border-violet-500 text-gray-300 hover:text-violet-400 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300">
                Start Free Trial
              </a>
            </div>
            <div className="rounded-2xl p-6 border border-violet-500/40 bg-violet-500/10 ring-1 ring-violet-500/20 text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
              <h3 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3">6 Months</h3>
              <div className="flex items-end justify-center gap-1 mb-1">
                <span className="text-3xl font-bold text-white">$44.99</span>
                <span className="text-xs text-gray-500 mb-1">/seat/mo</span>
              </div>
              <p className="text-xs text-violet-400 font-semibold mb-4">Save 10%</p>
              <a href="/free-trial" className="inline-flex items-center justify-center w-full gap-2 bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-violet-600/25">
                Start Free Trial
              </a>
            </div>
            <div className="rounded-2xl p-6 border border-gray-700/50 bg-gray-800/20 text-center">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Annual</h3>
              <div className="flex items-end justify-center gap-1 mb-1">
                <span className="text-3xl font-bold text-white">$39.99</span>
                <span className="text-xs text-gray-500 mb-1">/seat/mo</span>
              </div>
              <p className="text-xs text-violet-400 font-semibold mb-4">Save 20%</p>
              <a href="/free-trial" className="inline-flex items-center justify-center w-full gap-2 border-2 border-gray-600 hover:border-violet-500 text-gray-300 hover:text-violet-400 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300">
                Start Free Trial
              </a>
            </div>
          </div>

          <div className="rounded-2xl p-6 border border-gray-700/50 bg-gray-800/20 mb-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#quote" className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25">
              <Calculator className="w-5 h-5" />
              Calculate My Price
            </a>
          </div>
          <p className="text-center text-xs mt-4 text-gray-600">All plans include a 7-day free trial. The average breach costs $4.45 million. (IBM, 2023)</p>
        </motion.div>
      </div>
    </section>
  );
}
