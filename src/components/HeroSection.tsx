import React from 'react';
import {
  ArrowDown,
  CheckCircle2,
  Download,
  FileSpreadsheet,
  GraduationCap,
  Mail,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onContactClick,
  onProjectsClick,
}) => {
  const [imageError, setImageError] = React.useState(false);
  const portraitUrl = imageError
    ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
    : (PERSONAL_INFO.avatarUrl || '/profile.jpg');

  return (
    <section
      id="hero"
      className="relative pt-12 pb-16 md:py-24 lg:py-28 flex flex-col justify-center overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Solid, high-contrast text for day theme (7 columns) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Name & Designation */}
          <div className="flex flex-col gap-2">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {PERSONAL_INFO.name}
            </h1>

            <p className="font-headline text-xl sm:text-2xl font-bold text-cyan-600 tracking-tight">
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* Professional Introduction */}
          <p className="font-sans text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed">
            A dedicated and detail-oriented professional with completed matriculation,
            possessing strong practical proficiency in Microsoft Office applications and modern
            Artificial Intelligence tools. Focused on leveraging smart digital software,
            automated workflows, and accurate document and data management to deliver efficient,
            high-quality results.
          </p>

          {/* Professional Competency Highlights Row */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-3.5 pt-1 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-slate-800 font-medium">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-600" /> Completed Matriculation
            </span>
            <span className="text-slate-400">&middot;</span>
            <span className="flex items-center gap-1.5 text-slate-800 font-medium">
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" /> MS Office Suite
            </span>
            <span className="text-slate-400">&middot;</span>
            <span className="flex items-center gap-1.5 text-slate-800 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> AI &amp; Automation
            </span>
            <span className="text-slate-400">&middot;</span>
            <span className="flex items-center gap-1.5 text-slate-800 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" /> Karachi, Pakistan
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-4">
            <button
              onClick={onProjectsClick}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-headline font-bold text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_28px_rgba(6,182,212,0.45)] flex items-center gap-2 group cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <span>Explore Work &amp; Skills</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-white" />
            </button>

            <button
              onClick={onContactClick}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-sans text-sm font-semibold transition-all border border-slate-300 shadow-xs flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <span>Contact Kinza</span>
              <Mail className="w-4 h-4 text-cyan-600" />
            </button>

            <button
              onClick={onOpenResume}
              className="px-5 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-sans text-sm font-medium transition-all border border-slate-200 flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <Download className="w-4 h-4 text-slate-500" />
              <span>CV / Credentials</span>
            </button>
          </div>
        </div>

        {/* Right Column: 100% Clear Portrait Showcase in Daylight (5 columns) */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Ambient Radiant Daylight Halo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-indigo-500/10 rounded-3xl blur-3xl transform -rotate-2 scale-95 pointer-events-none"></div>

          {/* Portrait Showcase Frame */}
          <div className="relative w-full max-w-[430px] rounded-3xl p-3 glass-panel shadow-[0_20px_45px_-12px_rgba(15,23,42,0.12)] border border-slate-200/90 group transition-all">
            {/* Pure Image Container */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
              <img
                src={portraitUrl}
                alt={PERSONAL_INFO.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
