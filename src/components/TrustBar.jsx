'use client';

import { motion } from 'framer-motion';

const partners = ['SentinelOne', 'StellarCyber', 'Coda', 'PDQ Deploy'];

export default function TrustBar() {
  return (
    <section className="relative z-10 py-10 px-4 border-t border-b border-gray-800/60">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-center mb-6 text-gray-600">
          Powered by industry-leading enterprise technology
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-lg md:text-xl font-bold tracking-wide text-gray-600 hover:text-violet-400 transition-colors duration-300 cursor-default"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
