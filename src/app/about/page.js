'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 min-h-screen">
        <Navbar />
        <div className="pt-32 pb-4 px-4 sm:px-6 max-w-3xl mx-auto text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-4">
            About
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Why We Built Alchelogic
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-400">
            We spent years watching small businesses and nonprofits get targeted because they were assumed to be undefended. We built Alchelogic to close that gap.
          </motion.p>
        </div>
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
