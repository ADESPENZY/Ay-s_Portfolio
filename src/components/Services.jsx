import React from 'react';
import { motion } from 'motion/react';
import { Globe, Workflow, Brain, Blocks } from 'lucide-react';

const services = [
  {
    title: 'Website Development',
    description: 'High-performance, responsive websites built with modern technologies. From landing pages to full-stack applications.',
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500',
    features: ['React & Next.js', 'Responsive Design', 'SEO Optimized', 'Fast Loading']
  },
  {
    title: 'Business Automation',
    description: 'Automate repetitive tasks and workflows to save time and reduce human error. Let your business run on autopilot.',
    icon: Workflow,
    gradient: 'from-purple-500 to-pink-500',
    features: ['n8n & Zapier', 'Custom Workflows', 'Integration Setup', 'Process Optimization']
  },
  {
    title: 'AI Integrations',
    description: 'Integrate cutting-edge AI solutions into your business processes. From chatbots to content generation.',
    icon: Brain,
    gradient: 'from-indigo-500 to-purple-500',
    features: ['ChatGPT Integration', 'AI Chatbots', 'Content Automation', 'Smart Analytics']
  },
  {
    title: 'Custom API Workflows',
    description: 'Connect your tools and services seamlessly. Build custom API integrations for complex business needs.',
    icon: Blocks,
    gradient: 'from-orange-500 to-red-500',
    features: ['REST APIs', 'Webhooks', 'Third-party Integration', 'Data Synchronization']
  },
];

export default function Services() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">Services I Offer</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Specialized solutions to help your business grow and automate
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 mb-4 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-xs text-gray-400 flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <div className="mt-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    Learn more →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
