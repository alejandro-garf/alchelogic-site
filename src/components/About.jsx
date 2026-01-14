'use client';

import { motion } from 'framer-motion';
import { Users, Target, Heart } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To make enterprise-grade cybersecurity accessible to every small business and nonprofit, regardless of budget.',
  },
  {
    icon: Users,
    title: 'Who We Serve',
    description: 'Small businesses, nonprofits, and growing organizations that deserve Fortune 500 protection without the Fortune 500 price tag.',
  },
  {
    icon: Heart,
    title: 'Why We Care',
    description: "Our founders spent most of their career working for nonprofits, so we understand the limitations. But most importantly, we understand that not everyone may agree with your mission, which can make you a target. We are here to help you continue serving the community regardless of who may want to stop you.",
  },
];

export default function About() {
  const { isDark } = useTheme();

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-500 mb-3">
            About Us
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Security Without Compromise
          </h2>
          <p className={`mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            We understand that as a small business owner or nonprofit, it's unrealistic to dedicate a huge part of your budget or time worrying about IT and online security. That is why we created Alchelogic.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-xl p-4 sm:p-5 transition-all duration-300 hover:scale-[1.02] ${
                  isDark
                    ? 'bg-gradient-to-r from-gray-800/50 to-gray-800/20 border border-gray-700/30'
                    : 'bg-gradient-to-r from-violet-50/50 to-white/50 border border-violet-100/50'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-violet-500/20' : 'bg-violet-100'}`}>
                    <Icon className="w-5 h-5 text-violet-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {value.title}
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                      {value.description}
                    </p>
                  </div>
                </div>
                {/* Accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-purple-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
