'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Calculator } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const included = [
  'SentinelOne Complete endpoint protection',
  'StellarCyber XDR — full network visibility',
  'Coda Attack Surface Management',
  'PDQ automated patch management',
  '24/7 SOC monitoring & incident response',
  'Remote forensics & root cause analysis',
  'One-click ransomware rollback',
  'No minimum seat count',
  'Month-to-month — no contracts',
  'Setup & onboarding included',
];

export default function PricingOverview() {
  const { isDark } = useTheme();
  return (
    <section id="pricing" className="py-16 sm:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-500 mb-3">Pricing</span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>Simple. Transparent. All-Inclusive.</h2>
          <p className={`mt-4 text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>One price. Everything included. No upsells, no tiers, no surprises.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-12">
          <div className={`rounded-2xl p-8 sm:p-10 border ${isDark ? 'bg-gray-800/50 border-violet-500/40 ring-1 ring-violet-500/20' : 'bg-white border-violet-200 shadow-sm'}`}>
            <div className="text-center mb-8">
              <div className="flex items-end justify-center gap-1">
                <span className="text-6xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">$49.99</span>
                <span className={`text-xl mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>/seat/month</span>
              </div>
              <p className={`mt-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Month-to-month · Cancel anytime · 7-day free trial</p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {included.map((item, i) => (
                <li key={i} className={`flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Check className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#quote" className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25">
                <Calculator className="w-5 h-5" />
                Calculate My Price
              </a>
              <a href="#contact" className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105 ${isDark ? 'border-gray-600 text-gray-300 hover:border-violet-500 hover:text-violet-400' : 'border-gray-300 text-gray-700 hover:border-violet-500 hover:text-violet-600'}`}>
                Talk to Us <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className={`text-center text-xs mt-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              A 10-person office pays $499.90/month. The average breach costs $200,000.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
