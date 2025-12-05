import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      const form = e.target;
      const data = new FormData(form);

      const response = await fetch("https://formspree.io/f/mdkqgjjj", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (response.ok) {
        setStatus("Thanks for your message! I’ll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        form.reset();
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Oops! There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-purple-900/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Joshua Atoyebi"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Optional: subject for Formspree emails */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New message from your portfolio"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-white flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {status && (
                  <p className="text-center text-sm text-emerald-300 mt-2">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info & CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h3 className="mb-6 text-white">Contact Info</h3>
              <div className="space-y-4">
                {/* Email */}
                <a 
                  href="mailto:adeifeayobamiisaac001@outlook.com" 
                  className="flex items-start gap-4 hover:opacity-80 transition"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">adeifeayobamiisaac001@outlook.com</p>
                  </div>
                </a>

                {/* Phone → WhatsApp */}
                <a 
                  href="https://wa.me/2349128729724" 
                  target="_blank"
                  className="flex items-start gap-4 hover:opacity-80 transition"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <p className="text-white">+234 912 872 9724</p>
                  </div>
                </a>

                {/* Location */}
                <a 
                  href="https://www.google.com/maps" 
                  target="_blank"
                  className="flex items-start gap-4 hover:opacity-80 transition"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Remote / Available Worldwide</p>
                  </div>
                </a>

              </div>

            </div>

            {/* Free Demo CTA */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-3 text-white">Book a Free Automation Demo</h4>
                <p className="text-gray-200 text-sm mb-4">
                  See how automation can transform your business. Schedule a free 30-minute demo call.
                </p>
                <button className="w-full px-6 py-3 bg-white text-purple-600 rounded-lg hover:shadow-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
