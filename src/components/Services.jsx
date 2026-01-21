'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Search,
  Bot,
  Globe,
  Server,
  GraduationCap,
  Code,
  FileCheck,
  Users,
  Fingerprint,
  Eye,
  Layout,
  Wrench,
  ChevronDown,
  ChevronUp,
  Check,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const services = [
  {
    id: 'pentest',
    icon: Shield,
    title: 'Penetration Testing',
    tagline: 'Find Vulnerabilities Before Attackers Do',
    shortDesc: 'Simulate real-world attacks to identify security weaknesses in your systems, networks, and applications.',
    features: [
      'Network penetration testing',
      'Web application security testing',
      'Social engineering assessments',
      'Detailed remediation reports',
    ],
    expandedFeatures: [
      {
        title: 'External Network Testing',
        desc: 'We probe your internet-facing systems to identify vulnerabilities that external attackers could exploit to gain unauthorized access.',
      },
      {
        title: 'Internal Network Testing',
        desc: 'Simulating an insider threat or compromised endpoint, we assess what an attacker could access once inside your network.',
      },
      {
        title: 'Web Application Testing',
        desc: 'Comprehensive testing of your web applications for OWASP Top 10 vulnerabilities, authentication flaws, and business logic errors.',
      },
      {
        title: 'Social Engineering',
        desc: 'Test your human defenses with phishing simulations, pretexting, and physical security assessments.',
      },
      {
        title: 'Actionable Reports',
        desc: 'Receive detailed reports with prioritized findings, proof-of-concept exploits, and clear remediation guidance.',
      },
    ],
  },
  {
    id: 'assessments',
    icon: Search,
    title: 'Security & Vulnerability Assessments',
    tagline: 'Know Your Security Posture',
    shortDesc: 'Comprehensive analysis of your security infrastructure to identify gaps and prioritize improvements.',
    features: [
      'Infrastructure vulnerability scans',
      'Configuration reviews',
      'Risk assessment & prioritization',
      'Security gap analysis',
    ],
    expandedFeatures: [
      {
        title: 'Vulnerability Scanning',
        desc: 'Automated and manual scanning of your infrastructure to identify known vulnerabilities, misconfigurations, and outdated software.',
      },
      {
        title: 'Configuration Review',
        desc: 'Analysis of your systems, firewalls, and cloud configurations against security best practices and industry standards.',
      },
      {
        title: 'Risk Prioritization',
        desc: 'We help you understand which vulnerabilities pose the greatest risk so you can allocate resources effectively.',
      },
      {
        title: 'Remediation Roadmap',
        desc: 'A clear, prioritized action plan to address identified vulnerabilities and strengthen your security posture.',
      },
    ],
  },
  {
    id: 'ai-automation',
    icon: Bot,
    title: 'AI Workflow Integration & Automation',
    tagline: 'Work Smarter, Not Harder',
    shortDesc: 'Leverage artificial intelligence to automate repetitive tasks, streamline workflows, and boost productivity.',
    features: [
      'Custom AI workflow design',
      'Process automation',
      'Integration with existing tools',
      'Training and support',
    ],
    expandedFeatures: [
      {
        title: 'Workflow Analysis',
        desc: 'We analyze your current processes to identify opportunities where AI and automation can save time and reduce errors.',
      },
      {
        title: 'Custom AI Solutions',
        desc: 'From chatbots to document processing, we build AI-powered tools tailored to your specific business needs.',
      },
      {
        title: 'Tool Integration',
        desc: 'Seamlessly connect AI capabilities with your existing software stack—CRMs, ERPs, communication tools, and more.',
      },
      {
        title: 'Training & Adoption',
        desc: 'We ensure your team understands and embraces the new tools with comprehensive training and ongoing support.',
      },
    ],
  },
  {
    id: 'enterprise-security',
    icon: Globe,
    title: 'Enterprise Security Solutions',
    tagline: 'SentinelOne-Powered Protection',
    shortDesc: 'Complete endpoint protection, network visibility, and threat response powered by industry-leading SentinelOne technology.',
    features: [
      'AI-powered endpoint protection',
      'Real-time threat detection',
      '24/7 monitoring & response',
      'One-click ransomware rollback',
    ],
    expandedFeatures: [
      {
        title: 'SentinelOne Complete',
        desc: 'Enterprise-grade endpoint detection and response (EDR) with AI-powered threat prevention for Windows, Mac, and Linux.',
      },
      {
        title: 'Network Discovery',
        desc: 'Full visibility into every device on your network—managed, unmanaged, and IoT devices. No blind spots.',
      },
      {
        title: 'RemoteOps Forensics',
        desc: 'Remote investigation capabilities to quickly identify root causes and respond to incidents from anywhere.',
      },
      {
        title: '24/7 SOC Monitoring',
        desc: 'Round-the-clock security operations center monitoring with rapid threat response and incident management.',
      },
      {
        title: 'Ransomware Protection',
        desc: 'Advanced ransomware detection with patented one-click rollback to restore systems to their pre-attack state.',
      },
    ],
  },
  {
    id: 'osint',
    icon: Eye,
    title: 'OSINT Security Solutions',
    tagline: 'Open Source Tools, Expert Setup',
    shortDesc: 'We research, select, and implement the best open-source security tools tailored to your specific needs and budget.',
    features: [
      'Tool research & selection',
      'Custom implementation',
      'Integration & configuration',
      'Training & documentation',
    ],
    expandedFeatures: [
      {
        title: 'Needs Assessment',
        desc: 'We analyze your security requirements and identify which open-source tools will best address your specific challenges.',
      },
      {
        title: 'Tool Selection',
        desc: 'Drawing from trusted open-source projects, we select solutions that match your needs without expensive licensing fees.',
      },
      {
        title: 'Professional Setup',
        desc: 'Expert installation, configuration, and hardening of your chosen tools to ensure they work securely and effectively.',
      },
      {
        title: 'Documentation & Training',
        desc: 'Comprehensive documentation and hands-on training so your team can confidently manage and maintain the tools.',
      },
    ],
  },
  {
    id: 'web-development',
    icon: Layout,
    title: 'Website & Platform Development',
    tagline: 'We Build Your Digital Presence',
    shortDesc: 'Let us design and build a professional website or web platform for your company—modern, secure, and tailored to your brand.',
    features: [
      'Custom website design & development',
      'Web application platforms',
      'E-commerce solutions',
      'Security-first approach',
    ],
    expandedFeatures: [
      {
        title: 'Built for Your Business',
        desc: "We create websites from the ground up, designed specifically for your company's goals, audience, and brand identity.",
      },
      {
        title: 'Full-Stack Development',
        desc: 'From landing pages to complex web applications, our team handles frontend, backend, and everything in between.',
      },
      {
        title: 'E-commerce Ready',
        desc: 'Secure online stores with payment processing, inventory management, and customer portals.',
      },
      {
        title: 'Built-in Security',
        desc: 'Every site we build follows security best practices—SSL, secure authentication, input validation, and more.',
      },
    ],
  },
  {
    id: 'cloud-migrations',
    icon: Server,
    title: 'Cloud Migrations',
    tagline: 'Move to the Cloud Securely',
    shortDesc: 'Plan and execute secure migrations to cloud platforms like AWS, Azure, or Google Cloud.',
    features: [
      'Migration planning & strategy',
      'Secure data transfer',
      'Cloud architecture design',
      'Post-migration optimization',
    ],
    expandedFeatures: [
      {
        title: 'Assessment & Planning',
        desc: 'Thorough analysis of your current infrastructure and a detailed migration roadmap tailored to your business needs.',
      },
      {
        title: 'Secure Migration',
        desc: 'Data transferred securely with encryption and validation to ensure nothing is lost or compromised.',
      },
      {
        title: 'Architecture Design',
        desc: 'Cloud infrastructure designed for security, scalability, and cost-efficiency from day one.',
      },
      {
        title: 'Optimization',
        desc: 'Post-migration review and optimization to ensure you are getting the most value from your cloud investment.',
      },
    ],
  },
  {
    id: 'training',
    icon: GraduationCap,
    title: 'Cybersecurity Awareness Training',
    tagline: 'Your Team Is Your First Line of Defense',
    shortDesc: 'Educate your employees to recognize and respond to cyber threats with engaging, practical training.',
    features: [
      'Phishing awareness',
      'Security best practices',
      'Incident response training',
      'Customized content',
    ],
    expandedFeatures: [
      {
        title: 'Phishing Simulations',
        desc: 'Realistic phishing campaigns to test and train employees on recognizing malicious emails and links.',
      },
      {
        title: 'Interactive Training',
        desc: 'Engaging modules covering password security, data handling, social engineering, and more.',
      },
      {
        title: 'Role-Based Content',
        desc: 'Customized training paths for different roles—executives, IT staff, general employees, and high-risk positions.',
      },
      {
        title: 'Ongoing Education',
        desc: 'Regular updates and refresher courses to keep security awareness top of mind as threats evolve.',
      },
    ],
  },
  {
    id: 'custom-software',
    icon: Code,
    title: 'Custom Proprietary Software',
    tagline: 'Your Vision, Built by Us',
    shortDesc: "We develop custom proprietary software and applications tailored specifically to your company's unique workflows and requirements.",
    features: [
      'Proprietary application development',
      'Internal tools & dashboards',
      'System integrations & APIs',
      'Ongoing maintenance & support',
    ],
    expandedFeatures: [
      {
        title: 'Requirements Analysis',
        desc: 'We work closely with your team to understand your business processes and design the optimal software solution.',
      },
      {
        title: 'Proprietary Development',
        desc: "Software built exclusively for your company—you own it, it's yours. No licensing fees, no third-party dependencies.",
      },
      {
        title: 'Integration',
        desc: 'Seamless connections with your existing systems, databases, and third-party services.',
      },
      {
        title: 'Support & Evolution',
        desc: 'Ongoing maintenance, updates, and enhancements as your business grows and needs change.',
      },
    ],
  },
  {
    id: 'compliance',
    icon: FileCheck,
    title: 'Compliance & Regulatory Support',
    tagline: 'Meet Industry Standards with Confidence',
    shortDesc: 'Navigate complex regulatory requirements and achieve compliance with standards like HIPAA, PCI-DSS, SOC 2, and more.',
    features: [
      'Compliance gap analysis',
      'Policy development',
      'Audit preparation',
      'Ongoing compliance monitoring',
    ],
    expandedFeatures: [
      {
        title: 'Gap Analysis',
        desc: 'Comprehensive assessment of your current state against required standards to identify what needs to be addressed.',
      },
      {
        title: 'Policy & Procedure Development',
        desc: 'Creation of required documentation, policies, and procedures tailored to your organization.',
      },
      {
        title: 'Implementation Support',
        desc: 'Hands-on assistance implementing required controls, tools, and processes to achieve compliance.',
      },
      {
        title: 'Audit Readiness',
        desc: 'Preparation for audits including documentation review, evidence gathering, and mock assessments.',
      },
    ],
  },
  {
    id: 'custom-plan',
    icon: Wrench,
    title: 'Custom Security Plan',
    tagline: 'Tailored to Your Needs',
    shortDesc: 'A comprehensive security strategy designed specifically for your organization, budget, and risk profile.',
    features: [
      'Personalized assessment',
      'Custom recommendations',
      'Flexible implementation',
      'Scalable solutions',
    ],
    expandedFeatures: [
      {
        title: 'Discovery Session',
        desc: 'In-depth consultation to understand your business, challenges, existing infrastructure, and security goals.',
      },
      {
        title: 'Custom Strategy',
        desc: 'A security roadmap built around your specific risks, compliance requirements, and budget constraints.',
      },
      {
        title: 'Phased Approach',
        desc: 'Implementation can be staged to fit your timeline and resources—start with critical items and expand over time.',
      },
      {
        title: 'Ongoing Partnership',
        desc: 'We grow with you, adjusting and expanding your security program as your business evolves.',
      },
    ],
  },
  {
    id: 'background-checks',
    icon: Users,
    title: 'Digital Footprint Background Checks',
    tagline: "Know Who You're Hiring",
    shortDesc: 'Comprehensive digital footprint analysis for potential employees to identify risks before they join your team.',
    features: [
      'Social media analysis',
      'Online presence review',
      'Risk identification',
      'Confidential reporting',
    ],
    expandedFeatures: [
      {
        title: 'Open Source Intelligence',
        desc: "Thorough analysis of publicly available information to build a complete picture of a candidate's digital presence.",
      },
      {
        title: 'Social Media Review',
        desc: 'Examination of social media accounts for red flags, concerning behavior, or misrepresentation.',
      },
      {
        title: 'Risk Assessment',
        desc: "Identification of potential security risks, reputation concerns, or inconsistencies in a candidate's background.",
      },
      {
        title: 'Confidential Reports',
        desc: 'Detailed, confidential reports delivered securely with findings and recommendations.',
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  const { isDark } = useTheme();
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-500 mb-3">
            Our Services
          </span>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Complete Security & Technology Solutions
          </h1>
          <p className={`mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            From offensive security testing to building professional websites and custom proprietary software, we provide end-to-end solutions to protect and empower your business.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedCard === service.id;

            return (
              <motion.div
                key={service.id}
                variants={item}
                layout
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700/50'
                    : 'bg-white border-gray-200'
                } ${isExpanded ? 'md:col-span-2 lg:col-span-3' : 'hover:scale-[1.02] hover:shadow-xl cursor-pointer'}`}
                onClick={() => !isExpanded && toggleCard(service.id)}
              >
                <div className={`p-6 ${isExpanded ? 'border-b ' + (isDark ? 'border-gray-700' : 'border-gray-200') : ''}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${isDark ? 'bg-violet-500/20' : 'bg-violet-100'}`}>
                        <Icon className="w-6 h-6 text-violet-500" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {service.title}
                        </h3>
                        <p className="text-violet-500 font-medium text-sm mt-1">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCard(service.id);
                      }}
                      className={`p-2 rounded-lg transition-colors ${
                        isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                      }`}
                    >
                      {isExpanded ? (
                        <ChevronUp className={`w-5 h-5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
                      ) : (
                        <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
                      )}
                    </button>
                  </div>

                  <p className={`mt-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {service.shortDesc}
                  </p>

                  {!isExpanded && (
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-violet-500 flex-shrink-0" />
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {service.expandedFeatures.map((feature, idx) => (
                            <div
                              key={idx}
                              className={`p-4 rounded-xl ${
                                isDark ? 'bg-gray-900/50' : 'bg-gray-50'
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <Check className="w-5 h-5 text-violet-500" />
                                <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                  {feature.title}
                                </h4>
                              </div>
                              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                {feature.desc}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
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
                            Get a Quote
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Don&apos;t see exactly what you need? Let&apos;s talk about a custom solution.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
