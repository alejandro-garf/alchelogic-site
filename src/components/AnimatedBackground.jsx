'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function AnimatedBackground() {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base background */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark ? 'bg-gray-900' : 'bg-white'
        }`}
      />

      {/* Blob 1 - Large, slow moving */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
          filter: 'blur(80px)',
          top: '10%',
          left: '5%',
        }}
        animate={{
          x: [0, 150, 80, -80, 0],
          y: [0, -100, 80, -50, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 2 - Medium, different rhythm */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(192, 132, 252, 0.25) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(192, 132, 252, 0.15) 40%, transparent 70%)',
          filter: 'blur(70px)',
          top: '40%',
          right: '10%',
        }}
        animate={{
          x: [-50, 120, -100, 60, -50],
          y: [30, -80, 120, -60, 30],
          scale: [1, 0.8, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 3 - Small, faster */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(196, 181, 253, 0.5) 0%, rgba(167, 139, 250, 0.25) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(196, 181, 253, 0.35) 0%, rgba(167, 139, 250, 0.15) 50%, transparent 70%)',
          filter: 'blur(60px)',
          bottom: '20%',
          left: '25%',
        }}
        animate={{
          x: [0, -100, 150, -60, 0],
          y: [-30, 80, -60, 100, -30],
          scale: [1, 1.4, 0.7, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 4 - Extra accent top right */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(124, 58, 237, 0.45) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
          filter: 'blur(75px)',
          top: '5%',
          right: '30%',
        }}
        animate={{
          x: [80, -120, 50, -90, 80],
          y: [0, 100, -70, 50, 0],
          scale: [1.1, 0.9, 1.3, 0.85, 1.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 5 - Bottom right accent */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(192, 132, 252, 0.5) 0%, rgba(168, 85, 247, 0.25) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(192, 132, 252, 0.3) 0%, rgba(168, 85, 247, 0.12) 50%, transparent 70%)',
          filter: 'blur(65px)',
          bottom: '10%',
          right: '15%',
        }}
        animate={{
          x: [-60, 90, -120, 130, -60],
          y: [50, -70, 60, -100, 50],
          scale: [0.9, 1.2, 1, 1.4, 0.9],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 6 - Center floating */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(167, 139, 250, 0.25) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
          filter: 'blur(55px)',
          top: '50%',
          left: '50%',
          marginLeft: '-150px',
          marginTop: '-150px',
        }}
        animate={{
          x: [0, -80, 100, -50, 0],
          y: [0, 60, -80, 40, 0],
          scale: [1, 1.3, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
