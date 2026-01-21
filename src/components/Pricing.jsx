'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Shield, Search, Bot, Globe, Server, GraduationCap, Code, FileCheck, Users, Eye, Layout, Wrench } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const pricingCategories = [
  {
    title: 'Security Services',
    description: 'Protect your business from cyber threats',
    services: [
      {
        icon: Shield,
        name: 'Penetration Testing',
        description: 'Comprehensive security testing of your systems',
        pricing: '$50 flat',
        features: ['Network testing', 'Web app testing', 'Social engineering', 'Detailed report'],
      },
      {
        icon: Search,
        name: 'Security & Vulnerability Assessments',
        description: 'Vulnerability scanning and risk analysis',
        pricing: '$40 flat',
        features: ['Vulnerability scans', 'Configuration review', 'Risk prioritization', 'Remediation plan'],
      },
      {
        icon: Globe,
        name: 'Enterprise Security (SentinelOne)',
        description: '24/7 endpoint protection and monitoring',
        pricing: '$45/seat/month',
        features: ['AI-powered protection', 'Real-time monitoring', '24/7 SOC', 'Ransomware rollback'],
        popular: true,
      },
      {
        icon: Eye,
        name: 'OSINT Security Solutions',
        description: 'Open-source security tool implementation',
        pricing: 'Starting at $14.99/month',
        features: ['Tool selection', 'Professional setup', 'Configuration', 'Training & docs'],
      },
    ],
  },
  {
    title: 'Technology Services',
    description: 'Build and optimize your technology infrastructure',
    services: [
      {
        icon: Bot,
        name: 'AI Workflow Integration & Automation',
        description: 'Automate processes with AI integration',
        pricing: 'Starting at $19.99/month',
        features: ['Workflow analysis', 'Custom AI tools', 'Integration', 'Training included'],
      },
      {
        icon: Layout,
        name: 'Website & Platform Development',
        description: 'Modern, secure website and platform development',
        pricing: '$30 flat',
        features: ['Custom design', 'Mobile responsive', 'SEO optimized', 'Security built-in'],
      },
      {
        icon: Server,
        name: 'Cloud Migrations',
        description: 'Secure migration to AWS, Azure, or GCP',
        pricing: '$150 flat',
        features: ['Migration planning', 'Secure transfer', 'Architecture design', 'Optimization'],
      },
      {
        icon: Code,
        name: 'Custom Proprietary Software',
        description: 'Tailored software solutions for your business',
        pricing: 'Starting at $19.99/month',
        features: ['Requirements analysis', 'Custom development', 'Integration', 'Ongoing support'],
      },
    ],
  },
  {
    title: 'Compliance & Training',
    description: 'Meet regulations and educate your team',
    services: [
      {
        icon: FileCheck,
        name: 'Compliance & Regulatory Support',
        description: 'HIPAA, PCI-DSS, SOC 2, and more',
        pricing: '$50 flat',
        features: ['Gap analysis', 'Policy development', 'Audit preparation', 'Ongoing monitoring'],
      },
      {
        icon: GraduationCap,
        name: 'Cybersecurity Awareness Training',
        description: 'Cybersecurity awareness for your team',
        pricing: '$100/session',
        features: ['Phishing simulations', 'Interactive modules', 'Role-based content', 'Progress tracking'],
      },
      {
        icon: Users,
        name: 'Digital Footprint Background Checks',
        description: 'Digital footprint analysis for candidates',
        pricing: '$10/person',
        features: ['OSINT research', 'Social media review', 'Risk assessment', 'Confidential report'],
      },
    ],
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

export default function Pricing() {
  const { isDark } = useTheme();

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-500 mb-3">
            Pricing
          </span>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Transparent & Flexible Pricing
          </h1>
          <p className={`mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            We work with your budget. Every business is different, and we believe security and technology solutions should be accessible to all.
          </p>
        </motion.div>

        {/* Custom Plan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className={`rounded-2xl p-6 sm:p-8 border text-center ${
            isDark
              ? 'bg-gradient-to-r from-violet-900/30 to-purple-900/30 border-violet-500/30'
              : 'bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wrench className="w-8 h-8 text-violet-500" />
              <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Need a Custom Plan?
              </h2>
            </div>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Every organization has unique needs. Let&apos;s create a tailored security and technology strategy that fits your specific requirements and budget.
            </p>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
              isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
            }`}>
              <Check className="w-5 h-5" />
              <span className="font-semibold">Bundle multiple services & save up to 20%</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25"
              >
                Get a Custom Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Pricing Categories */}
        {pricingCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {category.title}
              </h2>
              <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {category.description}
              </p>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {category.services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.name}
                    variants={item}
                    className={`relative rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                      isDark
                        ? 'bg-gray-800/50 border-gray-700/50'
                        : 'bg-white border-gray-200'
                    } ${service.popular ? (isDark ? 'ring-2 ring-violet-500' : 'ring-2 ring-violet-500') : ''}`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className={`p-3 rounded-xl w-fit mb-4 ${isDark ? 'bg-violet-500/20' : 'bg-violet-100'}`}>
                      <Icon className="w-6 h-6 text-violet-500" />
                    </div>

                    <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {service.name}
                    </h3>
                    <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                        {service.pricing}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/#contact"
                      className={`block w-full text-center py-2 rounded-lg font-medium transition-all duration-300 ${
                        service.popular
                          ? 'bg-violet-600 hover:bg-violet-700 text-white'
                          : isDark
                            ? 'bg-gray-700 hover:bg-gray-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      Get Started
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-2xl p-8 sm:p-12 text-center border ${
            isDark
              ? 'bg-gray-800/50 border-gray-700/50'
              : 'bg-gray-50 border-gray-200'
          }`}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Ready to Get Started?
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Schedule a free consultation to discuss your needs. We'll work with your budget to find the right solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/services"
              className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2 ${
                isDark
                  ? 'border-gray-600 text-gray-300 hover:border-violet-500 hover:text-violet-400'
                  : 'border-gray-300 text-gray-700 hover:border-violet-500 hover:text-violet-600'
              }`}
            >
              View All Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
