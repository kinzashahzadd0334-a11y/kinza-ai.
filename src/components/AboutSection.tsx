import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Award,
  CheckCheck,
  FileSpreadsheet,
  GraduationCap,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO, STAT_METRICS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [terminalRunning, setTerminalRunning] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    '> academic-status: Matriculation completed (Board of Secondary Education)',
    '> office-suite: Word, Excel, PowerPoint, Outlook (Verified)',
    '> ai-integration: Prompt engineering & generative models (Active)',
    '> accuracy-index: 99.8% data & formatting precision nominal',
  ]);

  const runDiagnostics = () => {
    setTerminalRunning(true);
    setTerminalOutput(['> executing credential & competency audit...']);
    setTimeout(() => {
      setTerminalOutput([
        '> verifying academic records: Matriculation (SSC) confirmed',
        '> auditing office suite: advanced formulas, layout & decks green',
        '> testing ai prompt reasoning: few-shot & context chains ready',
        '> status: 100% verified profile • ready for professional roles',
      ]);
      setTerminalRunning(false);
    }, 850);
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-600 font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
              <span>01</span>
              <span>/</span>
              <span>ACADEMIC BACKGROUND &amp; PEDIGREE</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Academic Foundation &amp; Applied Digital Expertise
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Grounding proven computer studies discipline from completed Matriculation in advanced Microsoft Office productivity and modern Artificial Intelligence integration.
          </p>
        </div>

        {/* Metric Highlights Bento Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STAT_METRICS.map((metric) => {
            return (
              <motion.div
                key={metric.id}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 sm:p-6 rounded-2xl glass-panel flex flex-col gap-1 bg-white border border-slate-200/90 shadow-xs"
              >
                <div className="flex items-center justify-between text-slate-600 mb-2">
                  {metric.id === 'ship-count' && <Rocket className="w-5 h-5 text-cyan-500" />}
                  {metric.id === 'peak-dau' && <FileSpreadsheet className="w-5 h-5 text-emerald-500" />}
                  {metric.id === 'tenure' && <GraduationCap className="w-5 h-5 text-indigo-500" />}
                  {metric.id === 'coverage' && <ShieldCheck className="w-5 h-5 text-cyan-500" />}
                  <span className="font-mono text-xs font-semibold text-slate-500">
                    {metric.codeKey}
                  </span>
                </div>
                <span className="font-headline text-3xl sm:text-4xl font-extrabold text-slate-900">
                  {metric.value}
                </span>
                <p className="font-sans text-xs sm:text-sm text-slate-600 mt-0.5">
                  {metric.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Narrative & Background Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Long Narrative Box (7 columns) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel bg-white border border-slate-200/90 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                <h3 className="font-headline text-xl font-bold text-slate-900">
                  The Narrative Arc &amp; Background
                </h3>
              </div>
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                My educational journey is anchored by successfully completing <strong className="text-slate-900 font-semibold">Matriculation (Secondary School Certificate)</strong> under the Board of Secondary Education with core academic coursework in Computer Studies, Mathematics, and General Science. This established a rigorous foundation in computer hardware and operating system fundamentals, touch typing, logical analysis, and structured problem-solving.
              </p>
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                Building upon this academic discipline, I specialized in the complete <strong className="text-slate-900 font-semibold">Microsoft Office Suite</strong>—designing structured corporate documents and reports in Word, engineering automated analysis models with formulas, lookups, and Pivot Tables in Excel, and authoring persuasive presentations in PowerPoint.
              </p>
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed">
                To multiply impact, I integrate modern <strong className="text-slate-900 font-semibold">Artificial Intelligence workflows</strong> (ChatGPT, Google Gemini, and advanced Prompt Engineering). Whether synthesizing complex research, drafting multilingual correspondence, or automating office tasks, I bridge classic productivity standards with next-generation AI intelligence.
              </p>
            </div>

            {/* Core Tenets */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3">
              <span className="font-mono text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                Guiding Core Tenets
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-start gap-2.5">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-xs sm:text-sm font-semibold text-slate-900">
                      Office Precision
                    </p>
                    <p className="font-mono text-[11px] text-slate-500">
                      100% formula integrity
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-xs sm:text-sm font-semibold text-slate-900">
                      AI Velocity
                    </p>
                    <p className="font-mono text-[11px] text-slate-500">
                      Prompt reasoning &amp; speed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCheck className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-xs sm:text-sm font-semibold text-slate-900">
                      Document Polish
                    </p>
                    <p className="font-mono text-[11px] text-slate-500">
                      Flawless layout &amp; QA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic & Certifications (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Education Card */}
            <div className="p-6 rounded-3xl glass-panel bg-white border border-slate-200/90 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                    Academic Education
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                    Completed
                  </span>
                </div>
                <h4 className="font-headline text-base sm:text-lg font-bold text-slate-900">
                  {PERSONAL_INFO.education.degree}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-indigo-600 font-medium">
                  {PERSONAL_INFO.education.honors} • {PERSONAL_INFO.education.institution}
                </p>
                <p className="font-sans text-xs text-slate-600 mt-0.5">
                  {PERSONAL_INFO.education.focus}
                </p>
              </div>
            </div>

            {/* Specialized Competencies Card */}
            <div className="p-6 rounded-3xl glass-panel bg-white border border-slate-200/90 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] font-bold text-indigo-700 uppercase tracking-wider">
                  Specialized Credentials
                </span>
                <h4 className="font-headline text-base sm:text-lg font-bold text-slate-900">
                  {PERSONAL_INFO.certifications[0].title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-cyan-700 font-medium">
                  {PERSONAL_INFO.certifications[0].subtitle}
                </p>
                <p className="font-sans text-xs text-slate-600 mt-0.5">
                  {PERSONAL_INFO.certifications[0].details}
                </p>
              </div>
            </div>

            {/* Interactive Live Diagnostic Terminal */}
            <div className="p-5 rounded-3xl bg-slate-900 text-slate-300 font-mono text-xs flex flex-col gap-2.5 shadow-md border border-slate-800">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="ml-2 text-[11px] text-slate-400">env: verified-profile</span>
                </div>
                <button
                  onClick={runDiagnostics}
                  disabled={terminalRunning}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-200 text-[10px] transition-colors cursor-pointer"
                  title="Run credential & competency check"
                >
                  <RefreshCw
                    className={`w-3 h-3 text-cyan-400 ${terminalRunning ? 'animate-spin' : ''}`}
                  />
                  <span>Re-audit</span>
                </button>
              </div>

              <div className="space-y-1">
                <p className="text-slate-200">
                  <span className="text-indigo-400">const</span> candidate ={' '}
                  <span className="text-cyan-300">new</span> KinzaProfile();
                </p>
                <p className="text-slate-200">
                  candidate.<span className="text-emerald-400">verifyCompetencies</span>({'{'} matricCompleted:{' '}
                  <span className="text-indigo-400">true</span>, officeSuite:{' '}
                  <span className="text-indigo-400">&apos;100%&apos;</span> {'}'});
                </p>
                {terminalOutput.map((line, idx) => (
                  <p key={idx} className="text-emerald-400/90 text-[11px]">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
