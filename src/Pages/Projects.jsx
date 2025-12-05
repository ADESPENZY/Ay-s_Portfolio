// src/pages/Projects.jsx
import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-500/25 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[150px] rounded-full"
        />
      </div>

      

      <div className="container mx-auto px-4 relative z-10">

        {/* Back to Home Button */}
      <Link
        to="/" 
        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white 
                  bg-white/5 border border-white/10 px-4 py-2 rounded-lg mb-8 
                  backdrop-blur-md transition-all hover:bg-white/10"
      >
        <span className="text-lg">←</span>
        Back to Home
      </Link>
      
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-purple-300/80 bg-white/5 border border-white/10 rounded-full px-4 py-1">
            Case Studies & Live Systems
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Real Projects, Real Automation Results
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg mt-4">
            From e-commerce and dashboards to full automation engines for
            dentists and job seekers — here’s what I’ve shipped end-to-end.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative cursor-pointer"
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              {/* Outer glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/60 via-indigo-500/60 to-pink-500/60 rounded-2xl opacity-0 group-hover:opacity-70 blur-xl transition duration-500" />

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/15 group-hover:border-white/40 transition-all duration-300 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
                {/* Image */}
                {project.image && (
                  <div className="relative h-52 md:h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                    {/* Top labels */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.industry && (
                        <span className="inline-flex items-center rounded-full bg-black/50 border border-white/15 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
                          {project.industry}
                        </span>
                      )}
                      {project.stack && (
                        <span className="inline-flex items-center rounded-full bg-white/5 border border-white/15 px-3 py-1 text-xs text-purple-100/90 backdrop-blur-md">
                          {project.stack}
                        </span>
                      )}
                    </div>

                    {/* Live badge */}
                    {project.live && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-3 py-1 text-[11px] font-medium text-white shadow-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          Live Project
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="p-5 md:p-6">
                  {/* Brand / location */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex flex-col">
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-purple-200/80">
                        {project.brandName || "Client Project"}
                      </span>
                      <h3 className="mt-1 text-lg md:text-xl font-semibold text-white group-hover:text-purple-100 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    {project.location && (
                      <span className="text-[11px] text-gray-300/80 bg-white/5 border border-white/10 rounded-full px-3 py-1 whitespace-nowrap">
                        {project.location}
                      </span>
                    )}
                  </div>

                  {/* Short description / insight */}
                  <p className="text-sm text-gray-300/90 line-clamp-3 mb-4">
                    {project.insights?.problem ||
                      "End-to-end build focused on performance, automation and tangible business results."}
                  </p>

                  {/* Tech & tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[11px] text-purple-100 bg-purple-500/20 border border-purple-400/40"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[11px] text-indigo-100 bg-indigo-500/15 border border-indigo-400/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics preview (first one or two) */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-4 mb-4">
                      {project.metrics.slice(0, 2).map((metric) => (
                        <div key={metric.label} className="flex flex-col">
                          <span className="text-sm font-semibold text-white">
                            {metric.value}
                          </span>
                          <span className="text-[11px] text-gray-400">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <button className="inline-flex items-center gap-1 text-xs font-medium text-purple-200 group-hover:text-purple-100 transition-colors">
                      View Case Study
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    {typeof project.clutchReview === "number" && (
                      <div className="flex items-center gap-1 text-[11px] text-amber-200/90">
                        <span className="text-xs">★</span>
                        <span>{project.clutchReview.toFixed(1)} / 5.0</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
