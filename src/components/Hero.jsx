'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Check, ArrowRight } from 'lucide-react';

const proof = [
  'SentinelOne Complete — AI endpoint protection',
  'StellarCyber XDR — full network visibility',
  'Coda Attack Surface Management',
  'PDQ automated patch management',
  '24/7 SOC monitoring & response',
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-10 md:pt-20 md:pb-0">
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-4 sm:px-6">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white"
        >
          Your Client Data
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
        >
          Is a Target.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed"
        >
          Law firms. Dental offices. Accounting firms. Attackers go after you specifically because
          you hold sensitive client data and most of you aren't protected. We fix that for{' '}
          <span className="text-violet-400 font-semibold">$49.99/seat/month.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/free-credential-scan"
            className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-xl shadow-violet-600/30 hover:shadow-violet-500/40 hover:scale-105"
          >
            Get Your Free Dark Web Scan
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://calendly.com/alchelogic/alchelogic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 hover:border-violet-500 text-gray-300 hover:text-violet-400 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105"
          >
            Book a Free 30-Min Call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Everything included at $49.99/seat/month</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {proof.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800/40 rounded-lg px-3 py-2 border border-gray-700/50">
                <Check className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">7-day free trial · No contracts · Cancel anytime</p>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-8 h-8 text-violet-500/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
