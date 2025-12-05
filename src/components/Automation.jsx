import React from 'react';
import { motion } from 'motion/react';
import { Mail, Users, Database, Sparkles, ArrowRight, Zap } from 'lucide-react';

const automations = [
  {
    title: 'Automated Lead Generation',
    description: 'Capture, qualify, and route leads automatically from your website to your CRM.',
    icon: Users,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Auto Email/SMS Follow-ups',
    description: 'Nurture leads with personalized, automated email and SMS sequences.',
    icon: Mail,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'CRM Integrations',
    description: 'Sync data across platforms automatically. No more manual data entry.',
    icon: Database,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'AI Content Agents',
    description: 'Generate content, responses, and reports automatically using AI.',
    icon: Sparkles,
    color: 'from-orange-500 to-red-500'
  },
];

export default function Automation() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white">Automation Solutions</span>
          </div>
          <h2 className="mb-4 text-white">Automations I Build</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stop wasting time on repetitive tasks. Let automation handle the boring stuff while you focus on growth.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Workflow illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative"
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {/* Workflow nodes */}
            {['Trigger', 'Process', 'AI', 'Action'].map((node, index) => (
              <React.Fragment key={node}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-slate-900 rounded-2xl px-8 py-6 border border-white/20">
                    <div className="text-white text-center">
                      <div className="text-2xl mb-2">
                        {index === 0 && '⚡'}
                        {index === 1 && '⚙️'}
                        {index === 2 && '🤖'}
                        {index === 3 && '✅'}
                      </div>
                      <div className="text-sm">{node}</div>
                    </div>
                  </div>
                </motion.div>
                {index < 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.1 }}
                  >
                    <ArrowRight className="w-6 h-6 text-purple-400 hidden sm:block" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Automation cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {automations.map((automation, index) => (
            <motion.div
              key={automation.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-14 h-14 mb-4 bg-gradient-to-r ${automation.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <automation.icon className="w-7 h-7 text-white" />
                </div>

                <h4 className="mb-3 text-white">{automation.title}</h4>
                <p className="text-gray-300 text-sm">{automation.description}</p>

                {/* Decorative element */}
                <div className={`mt-4 w-12 h-1 bg-gradient-to-r ${automation.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-75"></div>
            <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 border border-white/20">
              <h3 className="mb-4 text-white">Ready to Automate Your Business?</h3>
              <p className="text-gray-200 mb-6 max-w-2xl">
                Let's discuss how automation can save you time and money. Book a free consultation to explore the possibilities.
              </p>
              <button className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:shadow-lg hover:shadow-white/50 transition-all duration-300 inline-flex items-center gap-2">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
