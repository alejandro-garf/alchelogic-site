'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import CredentialScan from '@/components/CredentialScan';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Clock, Search } from 'lucide-react';

const trust = [
  { icon: Search, text: 'We search 15+ billion leaked credentials' },
  { icon: Clock, text: 'Results delivered within 24 business hours' },
  { icon: Shield, text: '100% free, no credit card, no obligation' },
];

export default function FreeCredentialScanPage() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 min-h-screen">
        <Navbar />
        <div className="pt-28 pb-16 px-4 sm:px-6 max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-4"
          >
            Free Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Free Dark Web Credential Scan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-xl mx-auto mb-8"
          >
            The average breach goes undetected for 287 days. We'll scan the dark web for
            credentials tied to your business domain and send you a full report. No cost, no strings attached.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {trust.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-gray-500">
                <Icon className="w-4 h-4 text-violet-400" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-24">
          <CredentialScan compact />

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 mb-4">Rather talk to someone directly?</p>
            <a
              href="https://calendly.com/alchelogic/alchelogic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-gray-700 hover:border-violet-500 text-gray-400 hover:text-violet-400 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            >
              Book a Free 30-Min Call
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
