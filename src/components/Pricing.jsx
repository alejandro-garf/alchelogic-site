'use client';

import { motion } from 'framer-motion';
import { Check, Calendar, ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import QuoteCalculator from '@/components/QuoteCalculator';

const included = [
  'SentinelOne Complete endpoint protection',
  'StellarCyber XDR — full network visibility',
  'Coda Attack Surface Management',
  'PDQ automated patch management',
  '24/7 SOC monitoring & incident response',
  'Remote forensics & root cause analysis',
  'One-click ransomware rollback',
  'Unlimited log ingestion (90d hot / 365d cold)',
  'No minimum seat count',
  'Month-to-month — no contracts, cancel anytime',
  'Full setup & onboarding included',
  'Ongoing support & check-ins',
];

const examples = [
  { size: '5 seats', monthly: '$249.95', note: 'Small dental office or boutique law firm' },
  { size: '10 seats', monthly: '$499.90', note: 'Mid-size accounting or financial firm' },
  { size: '20 seats', monthly: '$999.80', note: 'Regional healthcare or legal practice' },
  { size: '50 seats', monthly: '$2,499.50', note: 'Growing professional services firm' },
];

export default function Pricing() {
  const { isDark } = useTheme();
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-500 mb-3">Pricing</span>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>One Price. Everything Included.</h1>
          <p className={`mt-4 text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>$49.99 per seat, per month. Five enterprise tools. Zero surprises.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className={`rounded-2xl p-8 sm:p-10 border mb-8 ${isDark ? 'bg-gray-800/50 border-violet-500/40 ring-1 ring-violet-500/20' : 'bg-white border-violet-200 shadow-sm'}`}>
          <div className="text-center mb-8">
            <div className="flex items-end justify-center gap-1">
              <span className="text-7xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">$49.99</span>
              <span className={`text-xl mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>/seat/month</span>
            </div>
            <p className={`mt-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Month-to-month · Cancel anytime · 7-day free trial · No credit card needed to start</p>
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
            <a href="https://calendly.com/alchelogic/alchelogic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25">
              <Calendar className="w-5 h-5" />
              Start Free Trial
            </a>
            <a href="/#contact" className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105 ${isDark ? 'border-gray-600 text-gray-300 hover:border-violet-500 hover:text-violet-400' : 'border-gray-300 text-gray-700 hover:border-violet-500 hover:text-violet-600'}`}>
              Talk to Us First <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-4">
          <h2 className={`text-2xl font-bold text-center mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>What Does That Look Like for My Team?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {examples.map((ex, i) => (
              <div key={i} className={`rounded-xl p-5 border ${isDark ? 'bg-gray-800/40 border-gray-700/50' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{ex.size}</span>
                  <span className="text-xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">{ex.monthly}/mo</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{ex.note}</p>
              </div>
            ))}
          </div>
          <p className={`text-center text-sm mt-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>The average cost of a single data breach for a small business is $200,000. This is what prevention costs.</p>
        </motion.div>

        <QuoteCalculator />
      </div>
    </section>
  );
}
