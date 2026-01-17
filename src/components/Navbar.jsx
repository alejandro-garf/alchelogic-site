'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-gray-900/80 backdrop-blur-md shadow-lg'
            : 'bg-white/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent cursor-pointer tracking-tight">
            {"{Alchelogic}"}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#about"
              className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              About
            </a>
            <a
              href="/services"
              className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Services
            </a>
            <a
              href="/pricing"
              className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Pricing
            </a>
            <a
              href="/#contact"
              className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href="/#contact"
              className="bg-violet-600 hover:bg-violet-700 hover:scale-110 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg shadow-violet-600/25"
            >
              Get Protected
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition ${
                isDark
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className={isDark ? 'text-white' : 'text-gray-900'}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className={`md:hidden fixed inset-0 top-16 z-40 ${
            isDark ? 'bg-gray-900/95' : 'bg-white/95'
          } backdrop-blur-md`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <a
              href="/#about"
              className={`text-2xl font-medium transition-all duration-300 hover:scale-110 ${
                isDark ? 'text-white hover:text-violet-400' : 'text-gray-900 hover:text-violet-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="/services"
              className={`text-2xl font-medium transition-all duration-300 hover:scale-110 ${
                isDark ? 'text-white hover:text-violet-400' : 'text-gray-900 hover:text-violet-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="/pricing"
              className={`text-2xl font-medium transition-all duration-300 hover:scale-110 ${
                isDark ? 'text-white hover:text-violet-400' : 'text-gray-900 hover:text-violet-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="/#contact"
              className={`text-2xl font-medium transition-all duration-300 hover:scale-110 ${
                isDark ? 'text-white hover:text-violet-400' : 'text-gray-900 hover:text-violet-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="/#contact"
              className="bg-violet-600 hover:bg-violet-700 hover:scale-110 text-white px-8 py-3 rounded-lg font-medium mt-4 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get Protected
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
