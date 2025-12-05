import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects"; // ⬅️ use unified data file

export default function ProjectsSection() {
  const navigate = useNavigate();

  // Show first 4 projects
  const featured = projects.slice(0, 4);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-purple-300/80 bg-white/5 border border-white/10 rounded-full px-4 py-1">
            Featured Case Studies
          </p>

          <h2 className="text-4xl font-bold text-white mt-4">Featured Projects</h2>

          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            A curated selection of my most impactful builds — automation engines, dashboards, AI systems, and modern interfaces.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {featured.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              {/* Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition duration-500" />

              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/15 hover:border-white/40 transition-all duration-300 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
                
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition" />

                  {/* Tag badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md">
                      {project.industry || project.stack || "Project"}
                    </span>
                  </div>

                  {/* View icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                    <button className="p-2 bg-white/10 rounded-lg backdrop-blur-md border border-white/15 hover:bg-white/20">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.insights?.problem || project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {(project.technologies || []).slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/15 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link to="/projects">
            <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/20 transition">
              View All Projects →
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
