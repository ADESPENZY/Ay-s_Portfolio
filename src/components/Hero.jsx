import React from 'react';
import { motion } from 'motion/react';
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            >
              <span className="text-sm">👋 Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
            >
              Automation-Driven Web Experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-gray-300 max-w-xl"
            >
              I build high-performance websites, AI workflows, and business automation systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Hire Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link to="/projects">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-white">
                  View Projects
                </button>
              </Link>

            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-row space-x-16 md:justify-start justify-center"
            >
              <div className="text-center">
                <div className="text-3xl mb-1 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-1 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">30+</div>
                <div className="text-sm text-gray-400">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-1 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-gray-400">Years Exp</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Profile picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing gradient ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-75 blur-2xl"
              />
              
              {/* Secondary ring */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-50"
              />

              {/* Image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border-4 border-white/20 shadow-2xl">
                <img src="/AyoPics.jpg" alt="Joshua Atoyebi" className="w-full h-full object-cover" />
              </div>

              {/* Floating particles around image */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                  style={{
                    left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
                    top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
