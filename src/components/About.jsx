import React from 'react';
import { motion } from 'motion/react';
import { Code2, Workflow, Zap, Database, Globe, Brain } from 'lucide-react';

const skills = [
  { name: 'JavaScript', icon: Code2, color: 'from-yellow-400 to-orange-500' },
  { name: 'React', icon: Code2, color: 'from-cyan-400 to-blue-500' },
  { name: 'Tailwind', icon: Globe, color: 'from-sky-400 to-cyan-500' },
  { name: 'Node.js', icon: Database, color: 'from-green-400 to-emerald-500' },
  { name: 'n8n', icon: Workflow, color: 'from-purple-400 to-pink-500' },
  { name: 'Zapier', icon: Zap, color: 'from-orange-400 to-red-500' },
  { name: 'APIs', icon: Globe, color: 'from-indigo-400 to-purple-500' },
  { name: 'AI', icon: Brain, color: 'from-violet-400 to-purple-500' },
];

export default function About() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl"
          >
            <h3 className="mb-6 text-white">Automation & Web Development Expert</h3>
            <p className="text-gray-300 mb-6">
              I am a full-stack web developer specializing in automation, AI workflows, and conversion-focused websites. I build systems that run businesses automatically.
            </p>
            <p className="text-gray-300 mb-6">
              With over 5 years of experience, I've helped businesses save thousands of hours by automating repetitive tasks, integrating AI solutions, and creating seamless web experiences that convert visitors into customers.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              <span className="text-purple-300">Let's build something amazing together</span>
            </div>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-white">Tech Stack & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group cursor-pointer"
                >
                  <div className={`w-12 h-12 mb-3 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
