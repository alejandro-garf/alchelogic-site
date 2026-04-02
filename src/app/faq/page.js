'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function FAQPage() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 min-h-screen">
        <Navbar />
        <div className="pt-32 pb-4 px-4 sm:px-6 max-w-3xl mx-auto text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-4">
            FAQ
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-400">
            Everything you need to know about our managed cybersecurity package, pricing, setup, and what happens when things go wrong.
          </motion.p>
        </div>
        <FAQ />
        <div className="py-16 px-4 sm:px-6 text-center">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <a href="https://calendly.com/alchelogic/alchelogic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25">
            Book a Free 30-Min Call
          </a>
        </div>
        <Footer />
      </main>
    </>
  );
}
