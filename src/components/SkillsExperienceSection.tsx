import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCheck,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  Keyboard,
  Languages,
  Mail,
  Presentation,
  Sparkles,
  Bot,
  Cpu,
  Database,
  Search,
} from 'lucide-react';
import { EXPERIENCES_DATA, SKILLS_DATA } from '../data/portfolioData';
import { SkillCategory } from '../types';

export const SkillsExperienceSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');

  const filteredSkills =
    selectedCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const filterCounts = {
    all: SKILLS_DATA.length,
    msoffice: SKILLS_DATA.filter((s) => s.category === 'msoffice').length,
    ai: SKILLS_DATA.filter((s) => s.category === 'ai').length,
    productivity: SKILLS_DATA.filter((s) => s.category === 'productivity').length,
  };

  const renderSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-5 h-5 text-blue-600" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
      case 'Presentation':
        return <Presentation className="w-5 h-5 text-amber-600" />;
      case 'Mail':
        return <Mail className="w-5 h-5 text-cyan-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-cyan-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-violet-600" />;
      case 'Languages':
        return <Languages className="w-5 h-5 text-emerald-600" />;
      case 'Database':
        return <Database className="w-5 h-5 text-teal-600" />;
      case 'Keyboard':
        return <Keyboard className="w-5 h-5 text-indigo-600" />;
      case 'Search':
        return <Search className="w-5 h-5 text-amber-600" />;
      case 'CheckCheck':
        return <CheckCheck className="w-5 h-5 text-emerald-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="skills-experience" className="py-20 md:py-28 relative">
      <div className="flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-cyan-600 font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
              <span>02</span>
              <span>/</span>
              <span>CORE CAPABILITIES &amp; PROFICIENCY</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Skills &amp; Practical Competencies
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
              Equipped with advanced Microsoft Office proficiency, modern Artificial Intelligence prompt engineering, and completed Matriculation computer fundamentals.
            </p>
          </div>

          {/* Quick Academic & Skill Summary Badge */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
            <span className="px-3.5 py-2 rounded-2xl bg-white border border-slate-200 text-xs font-mono font-medium text-slate-800 shadow-xs flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span>Matriculation Completed</span>
            </span>
            <span className="px-3.5 py-2 rounded-2xl bg-white border border-slate-200 text-xs font-mono font-medium text-slate-800 shadow-xs flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span>AI &amp; Office Specialized</span>
            </span>
          </div>
        </div>

        {/* Dynamic Skills Filter Tabs */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 shadow-inner w-full sm:w-fit">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(6,182,212,0.35)]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>All Skills</span>
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${selectedCategory === 'all' ? 'bg-white/25 text-white font-bold' : 'bg-slate-200 text-slate-700'}`}>
                {filterCounts.all}
              </span>
            </button>
            <button
              onClick={() => setSelectedCategory('msoffice')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
                selectedCategory === 'msoffice'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(6,182,212,0.35)]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>Microsoft Office Suite</span>
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${selectedCategory === 'msoffice' ? 'bg-white/25 text-white font-bold' : 'bg-slate-200 text-slate-700'}`}>
                {filterCounts.msoffice}
              </span>
            </button>
            <button
              onClick={() => setSelectedCategory('ai')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
                selectedCategory === 'ai'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(6,182,212,0.35)]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>Artificial Intelligence</span>
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${selectedCategory === 'ai' ? 'bg-white/25 text-white font-bold' : 'bg-slate-200 text-slate-700'}`}>
                {filterCounts.ai}
              </span>
            </button>
            <button
              onClick={() => setSelectedCategory('productivity')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
                selectedCategory === 'productivity'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(6,182,212,0.35)]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>Digital Productivity</span>
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${selectedCategory === 'productivity' ? 'bg-white/25 text-white font-bold' : 'bg-slate-200 text-slate-700'}`}>
                {filterCounts.productivity}
              </span>
            </button>
          </div>

          {/* Skills Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 rounded-3xl glass-panel bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between gap-4 group hover:-translate-y-1 duration-300"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 group-hover:scale-105 transition-transform">
                          {renderSkillIcon(skill.iconName)}
                        </div>
                        <div>
                          <h3 className="font-headline font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {skill.name}
                          </h3>
                          <span className="font-mono text-[11px] text-slate-500 block">
                            {skill.category === 'msoffice' && 'Microsoft Office'}
                            {skill.category === 'ai' && 'Artificial Intelligence'}
                            {skill.category === 'productivity' && 'Digital Productivity'}
                          </span>
                        </div>
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-full font-mono text-[11px] font-semibold uppercase ${
                          skill.level === 'Expert'
                            ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                            : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                    {/* Progress Indicator Bar */}
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.colorGrad}`}
                      />
                    </div>

                    <div className="flex justify-between items-center text-xs font-mono text-slate-600">
                      <span className="font-medium text-slate-700">{skill.highlight}</span>
                      <span className="font-bold text-indigo-600">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Academic & Professional Journey Timeline */}
        <div className="flex flex-col gap-8 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-headline text-2xl font-bold text-slate-900">
                Academic &amp; Professional Journey
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1">
                A verified timeline reflecting completed matriculation, practical office productivity, and active web deployments.
              </p>
            </div>
            <span className="h-px flex-1 bg-slate-200 hidden sm:block"></span>
          </div>

          <div className="relative pl-6 md:pl-10 space-y-8">
            {/* Timeline Vertical Track */}
            <div className="absolute left-2.5 md:left-4 top-3 bottom-3 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-emerald-500"></div>

            {EXPERIENCES_DATA.map((exp) => {
              return (
                <div key={exp.id} className="relative flex flex-col gap-3">
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[27px] md:-left-[35px] top-1.5 w-6 h-6 rounded-full bg-white flex items-center justify-center border-2 border-slate-300 shadow-xs">
                    {exp.isCurrent ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                    ) : exp.id === 'academic-matriculation' ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    ) : (
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                    )}
                  </div>

                  {/* Experience Card */}
                  <div className="p-6 md:p-8 rounded-3xl glass-panel bg-white border border-slate-200/90 shadow-xs">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider font-semibold ${
                              exp.isCurrent
                                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                                : exp.id === 'academic-matriculation'
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                            }`}
                          >
                            {exp.period}
                          </span>
                          {exp.id === 'academic-matriculation' && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-semibold">
                              <GraduationCap className="w-3.5 h-3.5" /> Matric Completed
                            </span>
                          )}
                        </div>
                        <h4 className="font-headline text-xl font-bold text-slate-900 mt-2">
                          {exp.role}
                        </h4>
                        <p className="font-sans text-sm text-indigo-600 font-medium">
                          {exp.company} • {exp.location}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
                        {exp.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-2.5 font-sans text-sm text-slate-700">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
