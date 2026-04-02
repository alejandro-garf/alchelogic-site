'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

export default function StickyScanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
        >
          <button
            onClick={() => setDismissed(true)}
            className="bg-gray-800 border border-gray-700 text-gray-500 hover:text-gray-300 rounded-full p-1.5 transition-colors shadow-lg"
            aria-label="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>
          <a
            href="/free-credential-scan"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-xl shadow-violet-600/30 hover:shadow-violet-500/40 hover:scale-105"
          >
            <Search className="w-4 h-4" />
            Free Dark Web Scan
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
