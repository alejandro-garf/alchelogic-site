'use client';

import { motion } from 'framer-motion';
import { Shield, Search, Bot, Globe, Server, GraduationCap, Code, ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const services = [
  {
    icon: Shield,
    title: 'Penetration Testing',
    description: 'Identify vulnerabilities before attackers do.',
  },
  {
    icon: Search,
    title: 'Security Assessments',
    description: 'Comprehensive vulnerability analysis.',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Streamline workflows with AI integration.',
  },
  {
    icon: Globe,
    title: 'Enterprise Security',
    description: 'SentinelOne-powered protection.',
  },
  {
    icon: Server,
    title: 'Cloud Migrations',
    description: 'Secure cloud infrastructure transitions.',
  },
  {
    icon: Code,
    title: 'Custom Solutions',
    description: 'Tailored software and security.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesOverview() {
  const { isDark } = useTheme();

  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-500 mb-3">
            Services
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            What We Offer
          </h2>
          <p className={`mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            From penetration testing to custom software solutions, we've got your security and technology needs covered.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className={`group relative overflow-hidden rounded-xl border backdrop-blur-sm p-4 sm:p-5 transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-lg text-center ${
                  isDark
                    ? 'bg-gray-800/30 border-gray-700/50 hover:border-violet-500/50'
                    : 'bg-white/50 border-gray-200/50 hover:border-violet-300'
                }`}
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-violet-500 mb-3 mx-auto" />
                <h3
                  className={`text-sm sm:text-base font-bold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {service.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
