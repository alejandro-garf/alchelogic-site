'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Radar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-10 md:pt-12 md:pb-0">
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-4 sm:px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-xl sm:text-2xl font-bold text-violet-400 tracking-tight mb-3"
        >
          Protect your clients. Protect your reputation. Protect your peace of mind.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white"
        >
          Finally, Cybersecurity
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
        >
          That Fits Your Budget.
        </motion.h1>

        {/* CTAs */}
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
            <Radar className="w-5 h-5" />
            Free Dark Web Scan
          </a>
          <a
            href="/free-trial"
            className="inline-flex items-center justify-center gap-2 border-2 border-violet-500 text-violet-400 hover:text-white hover:bg-violet-600 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"
          >
            Start 7-Day Free Trial
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <p className="text-lg font-medium text-gray-200 tracking-wide">
            Powered by the same tools trusted by <span className="font-bold">Aston Martin</span>, <span className="font-bold">Samsung</span>, &amp; <span className="font-bold">the Golden State Warriors</span>.
          </p>
          <p className="text-base font-semibold text-violet-400 mt-1">For a fraction of the price.</p>
        </motion.div>

      </div>

      <motion.a
        href="#next-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-8 h-8 text-violet-500/60 hover:text-violet-400 transition-colors" />
        </motion.div>
      </motion.a>
    </section>
  );
}
