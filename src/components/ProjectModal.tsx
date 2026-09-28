import React, { useState } from 'react';
import {
  CheckCircle2,
  Code,
  ExternalLink,
  Layers,
  X,
  Zap,
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'telemetry' | 'stack'>('architecture');

  if (!project) return null;

  const details = project.caseStudyDetails;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Project Specification"
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col gap-2 pr-10">
          <div className="flex items-center gap-2">
            <span className="px-3 py-0.5 rounded-full font-mono text-xs font-semibold uppercase bg-indigo-50 text-indigo-700 border border-indigo-200">
              {project.badgeText}
            </span>
            <span className="font-mono text-xs text-slate-500">{project.tagline}</span>
          </div>

          <h3 className="font-headline text-2xl sm:text-3xl font-bold text-slate-900">
            {project.title}
          </h3>

          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Modal Nav Tabs */}
        <div className="flex items-center gap-2 mt-6 pb-2 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Architecture Highlights
          </button>
          <button
            onClick={() => setActiveTab('stack')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'stack'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Stack &amp; Roles
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'telemetry'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Impact Metrics
          </button>
        </div>

        {/* Tab Content */}
        <div className="py-5 space-y-4">
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                {details?.overview}
              </p>

              <div className="space-y-2.5">
                <h4 className="font-headline text-sm font-bold uppercase tracking-wider text-indigo-700">
                  Key Technical Innovations
                </h4>
                {details?.architectureHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {hl}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'stack' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {details?.technicalStack.map((tech, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-600" />
                    <span className="font-mono text-xs font-bold text-slate-900">
                      {tech.name}
                    </span>
                  </div>
                  <span className="font-sans text-xs text-slate-500">
                    {tech.purpose}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'telemetry' && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-4 rounded-xl bg-slate-50 text-center border border-slate-200">
                  <span className="font-mono text-[10px] text-slate-500 uppercase font-semibold">
                    {project.metrics.label1}
                  </span>
                  <p className="font-headline text-xl font-bold text-indigo-600 mt-1">
                    {project.metrics.val1}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 text-center border border-slate-200">
                  <span className="font-mono text-[10px] text-slate-500 uppercase font-semibold">
                    {project.metrics.label2}
                  </span>
                  <p className="font-headline text-xl font-bold text-emerald-600 mt-1">
                    {project.metrics.val2}
                  </p>
                </div>
              </div>

              {details?.impactMetrics.map((metric, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Zap className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" />
                  <span className="font-sans text-xs sm:text-sm text-slate-700">
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 mt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-mono text-[11px] border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition-colors border border-slate-200 cursor-pointer"
              >
                <Code className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors shadow-xs cursor-pointer"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
