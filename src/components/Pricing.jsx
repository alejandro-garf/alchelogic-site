'use client';

import { motion } from 'framer-motion';
import { Check, Calendar, ArrowRight } from 'lucide-react';
import QuoteCalculator from '@/components/QuoteCalculator';

const included = [
  'SentinelOne Complete endpoint protection',
  'StellarCyber XDR: full network visibility',
  'Coda Attack Surface Management',
  'PDQ automated patch management',
  '24/7 SOC monitoring & incident response',
  'Remote forensics & root cause analysis',
  'One-click ransomware rollback',
  'Unlimited log ingestion (90d hot / 365d cold)',
  'No minimum seat count',
  'Month-to-month, no contracts, cancel anytime',
  'Full setup & onboarding included',
  'Ongoing support & check-ins',
];

const examples = [
  { size: '5 seats', monthly: '$199.95', note: 'Small dental office or boutique law firm (annual)' },
  { size: '10 seats', monthly: '$399.90', note: 'Mid-size accounting or financial firm (annual)' },
  { size: '20 seats', monthly: '$799.80', note: 'Regional healthcare or legal practice (annual)' },
  { size: '50 seats', monthly: '$1,999.50', note: 'Growing professional services firm (annual)' },
];

export default function Pricing() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-3">Pricing</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">One Price. Everything Included.</h1>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-gray-400">$49.99 per seat, per month. Everything included. Zero surprises.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10">
          <p className="text-center text-sm text-gray-500 mb-2">Purchased separately, these tools cost</p>
          <p className="text-center text-2xl font-bold text-red-400 line-through mb-6">$75+/seat/month</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Monthly */}
            <div className="rounded-2xl p-6 sm:p-8 border border-gray-700/50 bg-gray-800/20">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Monthly</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-white">$49.99</span>
                <span className="text-sm text-gray-500 mb-1">/seat/mo</span>
              </div>
              <p className="text-xs text-gray-500 mb-6">No commitment. Cancel anytime.</p>
              <a href="/free-trial" className="inline-flex items-center justify-center w-full gap-2 border-2 border-gray-600 hover:border-violet-500 text-gray-300 hover:text-violet-400 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105">
                Start Free Trial
              </a>
            </div>

            {/* 6 Month */}
            <div className="rounded-2xl p-6 sm:p-8 border border-violet-500/40 bg-violet-500/10 ring-1 ring-violet-500/20 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
              <h3 className="text-sm font-bold text-violet-400 uppercase tracking-wider mb-4">6 Months</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-white">$44.99</span>
                <span className="text-sm text-gray-500 mb-1">/seat/mo</span>
              </div>
              <p className="text-xs text-gray-400 mb-1">Billed every 6 months</p>
              <p className="text-xs text-violet-400 font-semibold mb-6">Save 10% vs. monthly</p>
              <a href="/free-trial" className="inline-flex items-center justify-center w-full gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25">
                Start Free Trial
              </a>
            </div>

            {/* Annual */}
            <div className="rounded-2xl p-6 sm:p-8 border border-gray-700/50 bg-gray-800/20">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Annual</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-white">$39.99</span>
                <span className="text-sm text-gray-500 mb-1">/seat/mo</span>
              </div>
              <p className="text-xs text-gray-400 mb-1">Billed annually</p>
              <p className="text-xs text-violet-400 font-semibold mb-6">Save 20% vs. monthly</p>
              <a href="/free-trial" className="inline-flex items-center justify-center w-full gap-2 border-2 border-gray-600 hover:border-violet-500 text-gray-300 hover:text-violet-400 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105">
                Start Free Trial
              </a>
            </div>
          </div>

          <p className="text-center text-xs text-gray-600 mt-4">All plans include a 7-day free trial. No credit card needed to start.</p>

          <div className="mt-8 rounded-2xl p-6 sm:p-8 border border-gray-700/50 bg-gray-800/20">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-center">Everything Included in Every Plan</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">What Does That Look Like for My Team?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {examples.map((ex, i) => (
              <div key={i} className="rounded-xl p-5 border border-gray-700/50 bg-gray-800/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white">{ex.size}</span>
                  <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{ex.monthly}/mo</span>
                </div>
                <p className="text-sm text-gray-500">{ex.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm mt-5 text-gray-600">The average data breach costs $4.45M (IBM, 2023). This is what prevention costs.</p>
        </motion.div>

        <QuoteCalculator />
      </div>
    </section>
  );
}
