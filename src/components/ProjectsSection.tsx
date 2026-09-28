import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  ExternalLink,
  Gamepad2,
  Github,
  Layers,
  Puzzle,
  ShoppingBag,
  Sparkles,
  Zap,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectFilter, ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category.includes(selectedFilter));

  const filterCounts = {
    all: PROJECTS_DATA.length,
    web: PROJECTS_DATA.filter((p) => p.category.includes('web')).length,
    games: PROJECTS_DATA.filter((p) => p.category.includes('games')).length,
    ai: PROJECTS_DATA.filter((p) => p.category.includes('ai')).length,
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="flex flex-col gap-12">
        {/* Section Header & View GitHub Button */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-cyan-600 font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
              <span>03</span>
              <span>/</span>
              <span>GITHUB SHOWCASE</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Featured Projects &amp; Deployments
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore open-source repositories and live deployments spanning modern e-commerce web applications, multilingual AI agents, 3D WebGL racing games, and tactical puzzles.
            </p>
          </div>

          {/* Direct "View My GitHub" Top Action */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/kinzashahzadd0334-a11y"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-slate-300 hover:border-cyan-500 text-slate-900 font-headline text-xs sm:text-sm font-semibold shadow-xs hover:shadow-cyan-500/20 transition-all group cursor-pointer"
              aria-label="View Kinza's GitHub Profile"
            >
              <Github className="w-4 h-4 text-cyan-600 group-hover:scale-110 transition-transform" />
              <span>View My GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>

        {/* Filter Tab Navigation */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 shadow-inner w-full sm:w-fit self-start">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(6,182,212,0.35)]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <span>All Projects</span>
            <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${selectedFilter === 'all' ? 'bg-white/25 text-white font-bold' : 'bg-slate-200 text-slate-700'}`}>
              {filterCounts.all}
            </span>
          </button>
          <button
            onClick={() => setSelectedFilter('web')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
              selectedFilter === 'web'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(6,182,212,0.35)]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <span>Web Applications</span>
            <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${selectedFilter === 'web' ? 'bg-white/25 text-white font-bold' : 'bg-slate-200 text-slate-700'}`}>
              {filterCounts.web}
            </span>
          </button>
          <button
            onClick={() => setSelectedFilter('games')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
              selectedFilter === 'games'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(6,182,212,0.35)]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <span>Interactive &amp; 3D Games</span>
            <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${selectedFilter === 'games' ? 'bg-white/25 text-white font-bold' : 'bg-slate-200 text-slate-700'}`}>
              {filterCounts.games}
            </span>
          </button>
          <button
            onClick={() => setSelectedFilter('ai')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
              selectedFilter === 'ai'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(6,182,212,0.35)]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <span>AI &amp; Intelligence</span>
            <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${selectedFilter === 'ai' ? 'bg-white/25 text-white font-bold' : 'bg-slate-200 text-slate-700'}`}>
              {filterCounts.ai}
            </span>
          </button>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl glass-panel bg-white border border-slate-200/90 overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Visual Preview Banner & Thematic Mockup */}
                <div className="p-6 bg-slate-900 text-slate-200 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
                  {/* Atmospheric Glow */}
                  <div className="absolute -right-12 -bottom-12 w-52 h-52 bg-indigo-500/15 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>

                  {/* Header Badges */}
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-xs font-semibold border border-indigo-500/30 flex items-center gap-1.5">
                      {project.badgeType === 'ecommerce' && <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />}
                      {project.badgeType === 'puzzle' && <Puzzle className="w-3.5 h-3.5 text-emerald-400" />}
                      {project.badgeType === 'game' && <Gamepad2 className="w-3.5 h-3.5 text-pink-400" />}
                      {project.badgeType === 'aiml' && <Bot className="w-3.5 h-3.5 text-cyan-400" />}
                      {project.badgeType === '3d' && <Sparkles className="w-3.5 h-3.5 text-yellow-400" />}
                      <span>{project.badgeText}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[11px] font-semibold">
                      {project.tagline}
                    </span>
                  </div>

                  {/* Project Specific Thematic Previews */}

                  {/* 1. LUMA PREVIEW */}
                  {project.previewType === 'luma' && (
                    <div className="z-10 py-3 my-auto">
                      <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-amber-500/20 backdrop-blur-md flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                            <ShoppingBag className="w-5 h-5 text-amber-400" />
                          </div>
                          <div>
                            <p className="font-headline text-xs font-bold text-slate-100">
                              Atelier Kanso Living
                            </p>
                            <p className="font-sans text-[11px] text-slate-300">
                              Handcrafted Furniture &amp; Artisan Ceramics
                            </p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-semibold border border-emerald-500/30 whitespace-nowrap">
                          WhatsApp Concierge
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 2. QWIZY PREVIEW */}
                  {project.previewType === 'qwizy' && (
                    <div className="z-10 py-3 my-auto">
                      <div className="p-3 rounded-2xl bg-slate-800/80 border border-emerald-500/20 backdrop-blur-md space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                          <span>WORD PUZZLE BOARD</span>
                          <span className="text-emerald-400 font-semibold">Streak: x4 • 1,280 pts</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          {['Q', 'W', 'I', 'Z', 'Y'].map((letter, idx) => (
                            <div
                              key={idx}
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-b from-indigo-500/30 to-purple-600/30 border border-indigo-400/40 flex items-center justify-center font-mono font-bold text-sm sm:text-base text-white shadow-sm group-hover:scale-105 transition-transform"
                              style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                              {letter}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 3. GRID WARS PREVIEW */}
                  {project.previewType === 'grid-wars' && (
                    <div className="z-10 py-3 my-auto">
                      <div className="p-3 rounded-2xl bg-slate-800/80 border border-pink-500/20 backdrop-blur-md flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-sm">
                            🐰
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-pink-300 block">PLAYER 1</span>
                            <span className="text-xs font-bold font-headline text-slate-100">Pastel Bunny</span>
                          </div>
                        </div>
                        <div className="px-2.5 py-1 rounded-lg bg-purple-500/20 border border-purple-500/30 text-[10px] font-mono text-purple-300 font-semibold">
                          3x3 TACTICAL GRID
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div>
                            <span className="text-[10px] font-mono text-cyan-300 block text-right">PLAYER 2</span>
                            <span className="text-xs font-bold font-headline text-slate-100">Neon Bear</span>
                          </div>
                          <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-sm">
                            🐻
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 4. CHATBOT AI PREVIEW */}
                  {project.previewType === 'chatbot-ai' && (
                    <div className="z-10 py-3 my-auto">
                      <div className="p-3 rounded-2xl bg-slate-800/80 border border-cyan-500/20 backdrop-blur-md space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                            MULTILINGUAL STREAM
                          </span>
                          <div className="flex gap-1 text-[10px]">
                            <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">English</span>
                            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">اردو</span>
                            <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">Roman</span>
                          </div>
                        </div>
                        <p className="font-sans text-xs text-slate-200 bg-slate-950/60 p-2 rounded-xl border border-white/5 line-clamp-1">
                          &quot;Hello! How can I assist with your workflow today?&quot;
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 5. TURBO RIDERS PREVIEW */}
                  {project.previewType === 'turbo-riders' && (
                    <div className="z-10 py-3 my-auto">
                      <div className="p-3 rounded-2xl bg-slate-800/80 border border-indigo-500/30 backdrop-blur-md flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-yellow-400" />
                          </div>
                          <div>
                            <div className="font-mono text-[10px] text-yellow-400 uppercase font-semibold">
                              SPEEDOMETER
                            </div>
                            <div className="font-headline text-base font-extrabold text-white">
                              240 <span className="text-xs font-normal text-slate-400">KM/H</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-mono text-[10px] text-cyan-400 uppercase font-semibold">
                            NITRO BOOST
                          </div>
                          <div className="w-24 h-2 rounded-full bg-slate-800 overflow-hidden mt-1 border border-cyan-500/30">
                            <div className="w-[92%] h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Metrics Footer */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 z-10 pt-2 border-t border-white/10">
                    <span>
                      {project.metrics.label1}:{' '}
                      <strong className="text-slate-200 font-medium">{project.metrics.val1}</strong>
                    </span>
                    <span className="text-emerald-400 font-semibold">{project.metrics.val2}</span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 flex flex-col gap-5 flex-1 justify-between bg-white">
                  <div className="flex flex-col gap-3">
                    <div>
                      <h3 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-indigo-600 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features List */}
                    <div className="space-y-1.5 pt-2">
                      <span className="font-mono text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                        Key Capabilities:
                      </span>
                      {project.features.slice(0, 3).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs font-sans text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: GitHub & Live Demo */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer"
                      aria-label={`View architecture spec for ${project.title}`}
                    >
                      <Layers className="w-4 h-4" />
                      <span>Deep Dive Spec</span>
                    </button>

                    <div className="flex items-center gap-2.5">
                      {/* GitHub Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} GitHub repository`}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 text-xs font-mono font-medium transition-all shadow-xs border border-slate-200 group/btn cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5 text-slate-600 group-hover/btn:text-indigo-600 transition-colors" />
                        <span>GitHub</span>
                      </a>

                      {/* Live Demo Button */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live deployment for ${project.title}`}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-headline text-xs font-semibold transition-all shadow-sm hover:shadow-indigo-500/25 cursor-pointer"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner: View All On GitHub */}
        <div className="rounded-3xl glass-panel bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-0.5 shadow-md flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                <Github className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="font-headline text-lg font-bold text-slate-900">
                Explore More on GitHub
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600">
                Visit Kinza&apos;s open-source repositories, commit logs, and web prototypes at @kinzashahzadd0334-a11y.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/kinzashahzadd0334-a11y"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-headline text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-indigo-500/25 shrink-0 cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>Visit @kinzashahzadd0334-a11y</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>
      </div>

      {/* Deep Dive Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
