'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className="relative py-12 sm:py-16 overflow-hidden">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <span className={`text-xl sm:text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
              isDark
                ? 'from-violet-400 via-purple-400 to-fuchsia-400'
                : 'from-violet-500 via-purple-500 to-fuchsia-500'
            }`}>
              {"{Alchelogic}"}
            </span>
            <p className={`mt-2 text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Cybersecurity & Software Solutions
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#pricing"
                  className={`inline-block transition-all duration-300 text-sm hover:scale-110 ${
                    isDark
                      ? 'text-gray-400 hover:text-violet-400'
                      : 'text-gray-600 hover:text-violet-600'
                  }`}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`inline-block transition-all duration-300 text-sm hover:scale-110 ${
                    isDark
                      ? 'text-gray-400 hover:text-violet-400'
                      : 'text-gray-600 hover:text-violet-600'
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className={`inline-block transition-all duration-300 text-sm hover:scale-110 ${
                    isDark
                      ? 'text-gray-400 hover:text-violet-400'
                      : 'text-gray-600 hover:text-violet-600'
                  }`}
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@alchelogic.com"
                  className={`inline-block transition-all duration-300 text-sm hover:scale-110 ${
                    isDark
                      ? 'text-gray-400 hover:text-violet-400'
                      : 'text-gray-600 hover:text-violet-600'
                  }`}
                >
                  info@alchelogic.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={`border-t mt-12 pt-8 text-center ${
          isDark ? 'border-gray-800/50' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
            &copy; 2026 Alchelogic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
