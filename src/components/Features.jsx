'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  {
    label: '24/7 Protection',
    headline: 'We Watch So You Don\'t Have To',
    description: 'Security experts monitor your environment around the clock. Threats are detected and contained before they become breaches — usually before you even know something happened.',
    bullets: ['Real-time threat detection', 'Automated incident response', 'Expert security analysts on call', 'Call or text us when you need us'],
    image: '/images/womanengineer.png',
  },
  {
    label: 'Complete Visibility',
    headline: 'See Everything. Miss Nothing.',
    description: 'Full network discovery and endpoint monitoring with XDR gives you — and us — a complete picture of every device, connection, and potential threat on your network at all times.',
    bullets: ['90 days hot log storage', '365 days cold storage', 'Unlimited log ingestion', 'Unmanaged device detection'],
    image: '/images/computer.png',
  },
  {
    label: 'Rapid Response',
    headline: 'From Alert to Action in Minutes',
    description: 'Automated response playbooks contain threats instantly. When human judgment is needed, our analysts are on it — with remote forensics tools to investigate and resolve without delay.',
    bullets: ['Automated threat containment', 'Remote forensics capabilities', 'Root cause analysis', 'Ransomware rollback in one click'],
    image: '/images/planning.png',
  },
];

export default function Features() {
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
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center py-16 sm:py-24 ${index !== features.length - 1 ? 'border-b border-gray-800/60' : ''}`}
          >
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="relative rounded-2xl border border-gray-700/50 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 cursor-pointer">
                <img src={feature.image} alt={feature.label} className="w-full aspect-video object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              </div>
            </div>
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <span className="text-sm font-semibold uppercase tracking-wider text-violet-400">{feature.label}</span>
              <h3 className="text-3xl md:text-4xl font-bold mt-3 mb-4 tracking-tight text-white">{feature.headline}</h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-violet-400" />
                    </div>
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
