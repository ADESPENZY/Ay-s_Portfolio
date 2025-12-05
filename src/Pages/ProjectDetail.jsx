// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link
          to="/projects"
          className="text-purple-300 underline hover:text-purple-100 transition"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  const { insights, ceo, milestones, metrics, team } = project;

  return (
    <section className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-56 -left-40 w-[680px] h-[680px] bg-purple-700/25 blur-[160px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.2, 0.9, 1.2], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[540px] h-[540px] bg-indigo-600/25 blur-[160px] rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Back link */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>
        </div>

        {/* Hero row */}
        <div className="grid lg:grid-cols-[1.6fr,1.1fr] gap-10 lg:gap-12 items-start mb-14">
          {/* Left: title & meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.brandName && (
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-purple-200/80 mb-3">
                {project.brandName}
              </p>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              {insights?.solution ||
                project.description ||
                "End-to-end product design and development focused on performance, automation and measurable business impact."}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-3 text-sm">
              {project.industry && (
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-100">
                  {project.industry}
                </span>
              )}
              {project.stack && (
                <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-100">
                  {project.stack}
                </span>
              )}
              {project.location && (
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200">
                  {project.location}
                </span>
              )}
              {project.budget && (
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-100">
                  Budget: {project.budget}
                </span>
              )}
            </div>
          </motion.div>

          {/* Right: summary card */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/15 rounded-2xl p-5 md:p-6 shadow-[0_18px_60px_rgba(0,0,0,0.55)]"
          >
            <h2 className="text-base font-semibold text-white mb-4">
              Project Snapshot
            </h2>

            <div className="space-y-3 text-sm">
              {project.client && (
                <div className="flex justify-between gap-4">
                  <span className="text-gray-400">Client</span>
                  <span className="text-gray-100 text-right">
                    {project.client}
                  </span>
                </div>
              )}

              {typeof project.clutchReview === "number" && (
                <div className="flex justify-between gap-4">
                  <span className="text-gray-400">Client Rating</span>
                  <span className="text-amber-200 text-right">
                    ★ {project.clutchReview.toFixed(1)} / 5.0
                  </span>
                </div>
              )}

              {project.technologies && (
                <div className="pt-3 border-t border-white/10">
                  <p className="text-gray-400 mb-2 text-xs uppercase tracking-[0.18em]">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full bg-white/5 border border-white/15 text-[11px] text-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-sm font-medium text-white hover:from-purple-500 hover:to-indigo-500 transition shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Hero image */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-white/15 mb-14 shadow-[0_26px_80px_rgba(0,0,0,0.65)]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[520px] object-cover"
            />
          </motion.div>
        )}

        {/* Problem / Solution / Value */}
        {(insights?.problem || insights?.solution || insights?.value) && (
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-14">
            {insights?.problem && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-sm font-semibold text-white mb-2">
                  The Problem
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {insights.problem}
                </p>
              </div>
            )}

            {insights?.solution && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-sm font-semibold text-white mb-2">
                  The Solution
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {insights.solution}
                </p>
              </div>
            )}

            {insights?.value && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-sm font-semibold text-white mb-2">
                  Business Impact
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {insights.value}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Metrics & Milestones */}
        <div className="grid lg:grid-cols-[1.2fr,1.2fr] gap-8 mb-14">
          {/* Metrics */}
          {metrics && metrics.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6"
            >
              <h3 className="text-base font-semibold text-white mb-4">
                Key Results
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl bg-black/30 border border-white/10 p-3"
                  >
                    <p className="text-xl font-semibold text-white">
                      {metric.value}
                    </p>
                    <p className="text-xs text-gray-300 mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Milestones */}
          {milestones && milestones.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6"
            >
              <h3 className="text-base font-semibold text-white mb-4">
                Delivery Milestones
              </h3>
              <ol className="space-y-3 text-sm">
                {milestones.map((m) => (
                  <li key={m.title} className="flex gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">{m.title}</p>
                      <p className="text-gray-300">{m.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>
          )}
        </div>

        {/* CEO testimonial */}
        {ceo && (ceo.review || ceo.name) && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-purple-600/40 via-purple-800/30 to-indigo-700/40 border border-purple-300/30 rounded-3xl p-6 md:p-8 shadow-[0_26px_80px_rgba(0,0,0,0.7)]">
              <p className="text-sm uppercase tracking-[0.18em] text-purple-100/80 mb-3">
                Client Testimonial
              </p>
              <p className="text-lg md:text-xl text-purple-50 leading-relaxed mb-4">
                “{ceo.review}”
              </p>
              <p className="text-sm text-purple-100/90 font-medium">
                {ceo.name}
              </p>
              <p className="text-xs text-purple-100/70">
                {ceo.position}
              </p>
            </div>
          </motion.div>
        )}

        {/* Team */}
        {team && team.length > 0 && (
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-white mb-3">
              Core Team Roles
            </h3>
            <div className="flex flex-wrap gap-2">
              {team.map((member, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs text-gray-100"
                >
                  {member.role}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-6 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-white">
              Want a similar build for your product?
            </p>
            <p className="text-sm text-gray-300 mt-1">
              I design and build automation-ready systems, from UX to flows to deployment.
            </p>
          </div>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-sm font-medium text-white hover:from-purple-500 hover:to-indigo-500 transition shadow-lg"
          >
            Let’s talk about your project
          </Link>
        </div>
      </div>
    </section>
  );
}
