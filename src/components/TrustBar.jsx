'use client';

import { useTheme } from '@/context/ThemeContext';

const partners = [
  { name: 'SentinelOne' },
  { name: 'StellarCyber' },
  { name: 'Coda' },
  { name: 'PDQ' },
];

export default function TrustBar() {
  const { isDark } = useTheme();

  return (
    <section className={`relative z-10 py-12 sm:py-16 px-4 border-t border-b ${
      isDark ? 'border-gray-800/50' : 'border-gray-200/50'
    }`}>
      <div className="max-w-5xl mx-auto">
        <p className={`text-xs sm:text-sm uppercase tracking-wider text-center mb-6 sm:mb-8 ${
          isDark ? 'text-gray-500' : 'text-gray-500'
        }`}>
          Powered By Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`opacity-50 hover:opacity-100 transition-all duration-300 text-base sm:text-lg md:text-xl font-semibold tracking-wide hover:scale-110 ${
                isDark ? 'text-gray-400' : 'text-gray-700'
              }`}
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
