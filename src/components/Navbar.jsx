'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent tracking-tight">
            {'{Alchelogic}'}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            ))}
            <a
              href="/free-credential-scan"
              className="bg-violet-600 hover:bg-violet-500 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg shadow-violet-600/25 hover:shadow-violet-500/40 hover:scale-105"
            >
              Free Scan
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden fixed inset-0 top-16 z-40 bg-gray-900/98 backdrop-blur-md"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.2 }}
                  className="text-2xl font-medium text-white active:text-violet-400 transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/free-credential-scan"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * links.length, duration: 0.2 }}
                className="bg-violet-600 active:bg-violet-500 text-white px-8 py-3 rounded-lg font-semibold mt-4 transition-all duration-300"
                onClick={closeMenu}
              >
                Get Free Credential Scan
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
