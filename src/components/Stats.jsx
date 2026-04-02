'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    value: '43%',
    description: 'of all cyberattacks target small businesses',
    source: 'Verizon DBIR 2023',
  },
  {
    value: '60%',
    description: 'of small businesses close within 6 months of a breach',
    source: 'National Cybersecurity Alliance',
  },
  {
    value: '$4.45M',
    description: 'average total cost of a data breach in 2023',
    source: 'IBM Cost of a Data Breach Report 2023',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Stats() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-3">
            Why It Matters
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Small Businesses Are the Primary Target
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-gray-400">
            Attackers know small businesses have valuable data and weaker defenses.
            That combination makes you the easiest target in the room.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="text-center p-6 sm:p-8 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-violet-500/30 transition-colors duration-300"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-snug">
                {stat.description}
              </p>
              <p className="mt-2 text-xs text-gray-600 italic">
                Source: {stat.source}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
