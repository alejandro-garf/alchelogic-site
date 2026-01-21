'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className="relative py-12 sm:py-16 overflow-hidden">
      {/* Lava lamp animated blobs - only in dark mode */}
      {isDark && <div className="absolute inset-0 overflow-hidden">
        {/* Blob 1 - Large, slow moving */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(147, 51, 234, 0.4) 50%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 100, 50, -50, 0],
            y: [0, -80, 50, -30, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          initial={{ top: '20%', left: '10%' }}
        />

        {/* Blob 2 - Medium, different rhythm */}
        <motion.div
          className="absolute w-72 h-72 rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.9) 0%, rgba(192, 132, 252, 0.5) 40%, transparent 70%)',
            filter: 'blur(50px)',
          }}
          animate={{
            x: [-30, 80, -60, 40, -30],
            y: [20, -60, 80, -40, 20],
            scale: [1, 0.8, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          initial={{ top: '40%', right: '15%' }}
        />

        {/* Blob 3 - Small, faster */}
        <motion.div
          className="absolute w-48 h-48 rounded-full opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(196, 181, 253, 0.9) 0%, rgba(167, 139, 250, 0.5) 50%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, -70, 100, -40, 0],
            y: [-20, 60, -40, 80, -20],
            scale: [1, 1.4, 0.7, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          initial={{ bottom: '20%', left: '30%' }}
        />

        {/* Blob 4 - Extra accent */}
        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-35"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.8) 0%, rgba(139, 92, 246, 0.4) 50%, transparent 70%)',
            filter: 'blur(55px)',
          }}
          animate={{
            x: [50, -80, 30, -60, 50],
            y: [0, 70, -50, 30, 0],
            scale: [1.1, 0.9, 1.3, 0.85, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          initial={{ top: '10%', right: '40%' }}
        />

        {/* Blob 5 - Bottom accent */}
        <motion.div
          className="absolute w-56 h-56 rounded-full opacity-45"
          style={{
            background: 'radial-gradient(circle, rgba(192, 132, 252, 0.9) 0%, rgba(168, 85, 247, 0.5) 50%, transparent 70%)',
            filter: 'blur(45px)',
          }}
          animate={{
            x: [-40, 60, -80, 90, -40],
            y: [30, -50, 40, -70, 30],
            scale: [0.9, 1.2, 1, 1.4, 0.9],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          initial={{ bottom: '10%', right: '20%' }}
        />
      </div>}

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
                  href="#services"
                  className={`inline-block transition-all duration-300 text-sm hover:scale-110 ${
                    isDark
                      ? 'text-gray-400 hover:text-violet-400'
                      : 'text-gray-600 hover:text-violet-600'
                  }`}
                >
                  Services
                </a>
              </li>
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
