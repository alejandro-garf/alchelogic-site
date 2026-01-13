'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const stats = [
  {
    value: '43%',
    description: 'of cyberattacks target small businesses',
  },
  {
    value: '60%',
    description: 'of SMBs close within 6 months of a breach',
  },
  {
    value: '$200K',
    description: 'average cost of a data breach for small business',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Stats() {
  const { isDark } = useTheme();

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            The Security Gap is Growing
          </h2>
          <p
            className={`mt-4 text-lg md:text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Small businesses face enterprise-level threats without enterprise resources.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`text-center p-8 rounded-2xl backdrop-blur-sm border ${
                isDark
                  ? 'bg-gray-800/30 border-gray-700/50'
                  : 'bg-white/50 border-gray-200/50 shadow-sm'
              }`}
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className={`mt-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
