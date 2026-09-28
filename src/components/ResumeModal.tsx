import React from 'react';
import {
  Printer,
  X,
} from 'lucide-react';
import { EXPERIENCES_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white text-slate-800 p-6 sm:p-10 shadow-2xl border border-slate-200">
        {/* Top Control Bar */}
        <div className="sticky top-0 -mt-2 pb-4 pt-1 mb-6 flex items-center justify-between border-b border-slate-200 bg-white/95 backdrop-blur-md z-10">
          <span className="font-mono text-xs font-bold text-indigo-700 uppercase tracking-wider">
            CURRICULUM VITAE // {PERSONAL_INFO.name.toUpperCase()}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close CV Modal"
              className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-8 font-sans">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <h2 className="font-headline text-3xl font-extrabold text-slate-900">
                {PERSONAL_INFO.name}
              </h2>
              <p className="font-headline text-lg font-semibold text-indigo-600 mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs font-mono text-slate-500 mt-1">
                {PERSONAL_INFO.location}
              </p>
            </div>

            <div className="text-xs font-mono space-y-1 sm:text-right text-slate-600">
              <p>{PERSONAL_INFO.email}</p>
              <p>{PERSONAL_INFO.socials.github.replace('https://', '')}</p>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="font-mono text-xs font-bold text-cyan-700 uppercase tracking-wider mb-2">
              Executive Profile
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              Detail-oriented professional with completed Matriculation (Secondary School Certificate),
              possessing strong practical proficiency in the Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)
              and modern Artificial Intelligence prompt engineering. Focused on leveraging smart digital software,
              automated workflows, and precision document management to deliver high-quality, efficient results.
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h3 className="font-mono text-xs font-bold text-cyan-700 uppercase tracking-wider mb-3">
              Core Competencies &amp; Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="block font-headline font-semibold text-slate-900 mb-1">
                  Microsoft Office Suite
                </strong>
                <p className="text-slate-600 leading-relaxed font-sans">
                  Microsoft Word (reports &amp; formatting), Excel (formulas, lookups, Pivot Tables), PowerPoint (visual decks), Outlook (scheduling &amp; correspondence).
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="block font-headline font-semibold text-slate-900 mb-1">
                  Artificial Intelligence
                </strong>
                <p className="text-slate-600 leading-relaxed font-sans">
                  Prompt Engineering, LLM workflows (Gemini, ChatGPT, Claude), smart task automation, multimodal assistants, multilingual processing (English &amp; Urdu).
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="block font-headline font-semibold text-slate-900 mb-1">
                  Digital Office &amp; Foundation
                </strong>
                <p className="text-slate-600 leading-relaxed font-sans">
                  Completed Matriculation (Computer Studies &amp; Science), fast accurate touch typing, cloud storage management (Drive, OneDrive), document QA.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Work Experience */}
          <div>
            <h3 className="font-mono text-xs font-bold text-cyan-700 uppercase tracking-wider mb-4">
              Professional Work History
            </h3>
            <div className="space-y-6">
              {EXPERIENCES_DATA.map((exp) => (
                <div key={exp.id} className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <span className="font-bold text-base text-slate-900 font-headline">
                        {exp.role}
                      </span>
                      <span className="text-indigo-600 font-semibold ml-2">@ {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {exp.period} | {exp.location}
                    </span>
                  </div>

                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 space-y-1.5 ml-1">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200">
            <div>
              <h3 className="font-mono text-xs font-bold text-cyan-700 uppercase tracking-wider mb-1">
                Education
              </h3>
              <p className="font-bold text-sm text-slate-900 font-headline">
                {PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.honors})
              </p>
              <p className="text-xs text-indigo-600 font-medium">{PERSONAL_INFO.education.institution}</p>
              <p className="text-xs text-slate-500 mt-0.5">
                {PERSONAL_INFO.education.focus}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs font-bold text-cyan-700 uppercase tracking-wider mb-1">
                Accreditations
              </h3>
              <p className="font-bold text-sm text-slate-900 font-headline">
                {PERSONAL_INFO.certifications[0].title}
              </p>
              <p className="text-xs text-emerald-600 font-medium">{PERSONAL_INFO.certifications[0].subtitle}</p>
              <p className="text-xs text-slate-500 mt-0.5">
                {PERSONAL_INFO.certifications[0].details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
