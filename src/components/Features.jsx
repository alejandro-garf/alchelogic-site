'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const features = [
  {
    label: '24/7 Protection',
    headline: 'Support Around the Clock',
    description: 'Round-the-clock monitoring by security experts. Threats detected and contained before they spread.',
    bullets: [
      'Real-time threat detection',
      'Automated incident response',
      'Expert security analysts on call',
      'A call or text away when you need us',
    ],
    image: '/images/womanengineer.png',
  },
  {
    label: 'Complete Visibility',
    headline: 'See Everything. Miss Nothing',
    description: 'Full network discovery, endpoint monitoring, and XDR with unlimited log retention.',
    bullets: [
      '90 days hot storage',
      '365 days cold storage',
      'Unlimited log ingestion',
    ],
    image: '/images/computer.png',
  },
  {
    label: 'Rapid Response',
    headline: 'From Alert to Action in Minutes',
    description: <>Automated response playbooks and expert forensics when you need them most. <strong>Sit back and let us handle it.</strong></>,
    bullets: [
      'Automated threat containment',
      'Remote forensics capabilities',
      'Root cause analysis',
    ],
    image: '/images/planning.png',
  },
];

export default function Features() {
  const { isDark } = useTheme();

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center py-12 sm:py-24 ${
              index !== features.length - 1
                ? isDark
                  ? 'border-b border-gray-700/50'
                  : 'border-b border-gray-200/50'
                : ''
            }`}
          >
            {/* Visual - alternates sides */}
            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div
                className={`relative rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-violet-500/20 cursor-pointer ${
                  feature.image ? 'p-0' : 'p-1'
                } ${
                  isDark ? 'bg-gray-800/30 border-gray-700/50 hover:border-violet-500/50' : 'bg-white/50 border-gray-200/50 hover:border-violet-300'
                }`}
              >
                {feature.image ? (
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className="w-full aspect-video object-cover object-center"
                  />
                ) : (
                  <div
                    className={`rounded-xl aspect-video flex items-center justify-center ${
                      isDark
                        ? 'bg-gradient-to-br from-violet-900/30 to-purple-900/30'
                        : 'bg-gradient-to-br from-violet-50 to-purple-50'
                    }`}
                  >
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-violet-500/30 to-purple-500/30 blur-2xl" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className={`text-6xl font-bold ${
                          isDark ? 'text-violet-500/40' : 'text-violet-500/30'
                        }`}
                      >{`0${index + 1}`}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Text */}
            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <span className="text-sm font-semibold uppercase tracking-wider text-violet-500">
                {feature.label}
              </span>
              <h3
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 tracking-tight ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {feature.headline}
              </h3>
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {feature.description}
              </p>
              <ul className="space-y-3">
                {feature.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className={`flex items-center text-base ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    <Check className="w-5 h-5 mr-3 flex-shrink-0 text-violet-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
