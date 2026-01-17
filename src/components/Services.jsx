'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Network, Search, Eye, Clock, Target, RefreshCw, Check, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const services = [
  {
    icon: Shield,
    title: 'Endpoint Protection',
    description: <>Complete endpoint detection and response powered by SentinelOne. <strong>Stop threats before they spread.</strong></>,
  },
  {
    icon: Network,
    title: 'Network Discovery',
    description: <>Full visibility into every device on your network. <strong>Know what's connected at all times.</strong></>,
  },
  {
    icon: Search,
    title: 'Forensics & Response',
    description: 'Remote investigation capabilities when incidents occur. Fast root cause analysis.',
  },
  {
    icon: Eye,
    title: 'Extended Detection (XDR)',
    description: <>Unlimited log ingestion with 90 days hot and 365 days cold storage. <strong>See everything.</strong></>,
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: <>Round-the-clock security operations center. <strong>At your service at any time.</strong></>,
  },
  {
    icon: Target,
    title: 'Attack Surface Management',
    description: 'Continuous vulnerability scanning and attack surface visibility with Coda.',
  },
  {
    icon: RefreshCw,
    title: 'Patch Management',
    description: <>Automated patching and device management. <strong>Stay updated, stay secure.</strong></>,
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

const sentinelProducts = [
  {
    id: 'complete',
    icon: Shield,
    title: 'SentinelOne Complete',
    tagline: 'AI-Powered Endpoint Protection',
    shortDesc: 'Enterprise-wide protection for every device in your business, powered by advanced AI.',
    features: [
      'Real-time threat detection & response',
      'Ransomware protection with one-click rollback',
      'Automated threat remediation',
      'Works on Windows, Mac & Linux',
    ],
    expandedFeatures: [
      {
        title: 'AI-Powered Protection',
        desc: 'Machine learning prevents malware with on-device AI while identifying ransomware and zero-day threats through behavioral analysis.',
      },
      {
        title: 'Unified Agent',
        desc: 'A single, resource-efficient agent covers endpoints, identity systems, and cloud workloads — no need to deploy multiple tools.',
      },
      {
        title: 'One-Click Rollback',
        desc: 'Our patented rollback feature lets you restore systems to their pre-attack state with a single click.',
      },
      {
        title: 'Automated Response',
        desc: 'Block network traffic, isolate threats, and remediate incidents automatically through customizable policies.',
      },
      {
        title: 'Visual Attack Stories',
        desc: 'Automatically correlates data from endpoints, cloud, and identity sources to show you exactly what happened.',
      },
    ],
  },
  {
    id: 'network',
    icon: Network,
    title: 'SentinelOne Network Discovery',
    tagline: 'Complete Network Visibility',
    shortDesc: 'See every device on your network — managed, unmanaged, and everything in between.',
    features: [
      'Discover all connected devices',
      'Identify unmanaged endpoints',
      'Real-time network mapping',
      'No blind spots in your network',
    ],
    expandedFeatures: [
      {
        title: 'Automatic Device Discovery',
        desc: 'Scans your environment to identify every connected device — servers, endpoints, IoT devices, even unknown gadgets.',
      },
      {
        title: 'Smart Classification',
        desc: 'Devices are classified as Secured, Unsecured, Unsupported, or Unknown so you know exactly what needs attention.',
      },
      {
        title: 'Device Control',
        desc: 'Block rogue devices from your network with a click. Isolate threats before they can spread.',
      },
      {
        title: 'Auto-Deploy Protection',
        desc: 'Automatically deploy SentinelOne agents to unprotected devices through peer-to-peer deployment.',
      },
      {
        title: 'No Extra Hardware',
        desc: 'Works with your existing SentinelOne agents — no additional hardware or network changes required.',
      },
    ],
  },
  {
    id: 'forensics',
    icon: Search,
    title: 'SentinelOne RemoteOps Forensics',
    tagline: 'Remote Investigation & Response',
    shortDesc: 'Investigate incidents and respond to threats from anywhere, at enterprise scale.',
    features: [
      'Remote forensic data collection',
      'Incident investigation tools',
      'Root cause analysis',
      'Fast response from anywhere',
    ],
    expandedFeatures: [
      {
        title: 'Forensic Collection',
        desc: 'Deploy scripts to gather forensic artifacts from multiple infected endpoints simultaneously — event logs, network connections, and more.',
      },
      {
        title: 'Rapid Incident Response',
        desc: 'Execute scripts in real-time to remove files and terminate processes across thousands of devices instantly.',
      },
      {
        title: 'Remote Operations',
        desc: 'Pull any artifact or push settings using customizable scripts across your entire device fleet from the console.',
      },
      {
        title: 'Unified Management',
        desc: 'Consolidate vulnerability and configuration management in a single console. Identify both process and security gaps.',
      },
      {
        title: 'Faster Resolution',
        desc: 'Dramatically reduce mean time to resolution (MTTR) with enterprise-wide investigation capabilities.',
      },
    ],
  },
];

export default function Services() {
  const { isDark } = useTheme();
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-500 mb-3">
            Services
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Complete Security Stack
          </h2>
          <p className={`mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Everything you need to protect your business. Nothing you don't.
          </p>
        </motion.div>

        {/* SentinelOne Platform Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <div className={`relative rounded-xl sm:rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 cursor-pointer ${
            isDark ? 'border-gray-700/50 hover:border-violet-500/50' : 'border-gray-200 hover:border-violet-300'
          }`}>
            <img
              src="/images/sentinaloneuser.png"
              alt="SentinelOne Security Platform Dashboard"
              className="w-full h-auto max-h-[250px] sm:max-h-[350px] md:max-h-[400px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent tracking-tight">
                {"{Alchelogic}"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main SentinelOne Product Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-500 mb-3">
              Core Protection
            </span>
            <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Powered by SentinelOne
            </h3>
            <p className={`mt-4 text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Click any product to learn more about what's included
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {sentinelProducts.map((product) => {
              const Icon = product.icon;
              const isExpanded = expandedCard === product.id;

              return (
                <motion.div
                  key={product.id}
                  layout
                  className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-800/50 border-gray-700/50'
                      : 'bg-white border-gray-200'
                  } ${isExpanded ? 'lg:col-span-3' : 'hover:scale-105 hover:shadow-xl cursor-pointer'}`}
                  onClick={() => !isExpanded && toggleCard(product.id)}
                >
                  <div className={`p-6 sm:p-8 ${isExpanded ? 'border-b ' + (isDark ? 'border-gray-700' : 'border-gray-200') : ''}`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {product.title}
                        </h4>
                        <p className="text-violet-500 font-medium mt-1">
                          {product.tagline}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(product.id);
                        }}
                        className={`p-2 rounded-lg transition-colors ${
                          isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                        }`}
                      >
                        {isExpanded ? (
                          <ChevronUp className={`w-6 h-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                        ) : (
                          <ChevronDown className={`w-6 h-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                        )}
                      </button>
                    </div>

                    <p className={`mt-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {product.shortDesc}
                    </p>

                    {!isExpanded && (
                      <ul className="mt-4 space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-violet-500 flex-shrink-0" />
                            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 sm:p-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {product.expandedFeatures.map((feature, idx) => (
                              <div
                                key={idx}
                                className={`p-4 rounded-xl ${
                                  isDark ? 'bg-gray-900/50' : 'bg-gray-50'
                                }`}
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <Check className="w-5 h-5 text-violet-500" />
                                  <h5 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {feature.title}
                                  </h5>
                                </div>
                                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {feature.desc}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                              href="/pricing"
                              className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View Pricing
                              <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                              href="/#contact"
                              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2 ${
                                isDark
                                  ? 'border-gray-600 text-gray-300 hover:border-violet-500 hover:text-violet-400'
                                  : 'border-gray-300 text-gray-700 hover:border-violet-500 hover:text-violet-600'
                              }`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              Book a Demo
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Service Overview Boxes */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-4 mt-12"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className={`group relative overflow-hidden rounded-xl border backdrop-blur-sm p-3 sm:p-4 transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-lg ${
                  isDark
                    ? 'bg-gray-800/30 border-gray-700/50 hover:border-violet-500/50'
                    : 'bg-white/50 border-gray-200/50 hover:border-violet-300'
                }`}
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-violet-500 mb-2 sm:mb-3" />
                <h3
                  className={`text-sm sm:text-base font-bold mb-1 sm:mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {service.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
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
