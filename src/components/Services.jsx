'use client';

import { motion } from 'framer-motion';
import { Shield, Network, Search, Eye, Clock, Target, RefreshCw } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const services = [
  {
    icon: Shield,
    title: 'Endpoint Protection',
    description: 'Complete endpoint detection and response powered by SentinelOne. Stop threats before they spread.',
  },
  {
    icon: Network,
    title: 'Network Discovery',
    description: "Full visibility into every device on your network. Know what's connected at all times.",
  },
  {
    icon: Search,
    title: 'Forensics & Response',
    description: 'Remote investigation capabilities when incidents occur. Fast root cause analysis.',
  },
  {
    icon: Eye,
    title: 'Extended Detection (XDR)',
    description: 'Unlimited log ingestion with 90 days hot and 365 days cold storage. See everything.',
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Round-the-clock security operations center. We watch so you can sleep.',
  },
  {
    icon: Target,
    title: 'Attack Surface Management',
    description: 'Continuous vulnerability scanning and attack surface visibility with Coda.',
  },
  {
    icon: RefreshCw,
    title: 'Patch Management',
    description: 'Automated patching and device management. Stay updated, stay secure.',
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

export default function Services() {
  const { isDark } = useTheme();

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
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
            Complete Security Stack
          </h2>
          <p className={`mt-4 text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Everything you need. Nothing you don't.
          </p>
        </motion.div>

        {/* SentinelOne Platform Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 mb-16"
        >
          <div className={`relative rounded-2xl overflow-hidden border ${
            isDark ? 'border-gray-700/50' : 'border-gray-200'
          }`}>
            <img
              src="/images/sentinaloneuser.png"
              alt="SentinelOne Security Platform Dashboard"
              className="w-full h-auto max-h-[400px] object-cover object-center"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-semibold text-lg">
                Powered by SentinelOne
              </p>
              <p className="text-gray-300 text-sm mt-1">
                Enterprise-grade AI-driven threat detection and response
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className={`group relative overflow-hidden rounded-2xl border backdrop-blur-sm p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                  isDark
                    ? 'bg-gray-800/30 border-gray-700/50 hover:border-violet-500/50'
                    : 'bg-white/50 border-gray-200/50 hover:border-violet-300'
                }`}
              >
                <Icon className="w-12 h-12 text-violet-500 mb-6" />
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {service.title}
                </h3>
                <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                {/* Hover gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
