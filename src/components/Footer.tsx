import React from 'react';
import { ArrowUp, Github, Linkedin, Terminal, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="py-12 border-t border-slate-200 mt-12 relative overflow-hidden bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Stack Note */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
              <Terminal className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-headline font-bold text-sm text-slate-900">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs font-mono text-slate-500">
              © {new Date().getFullYear()}
            </span>
          </div>
          <p className="font-sans text-xs text-slate-600">
            Professional Portfolio • MS Office &amp; AI Workflow Automation
          </p>
        </div>

        {/* System Health Badge */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 font-mono text-xs text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Status: Verified &amp; Active Profile</span>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter Profile"
            className="p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </a>

          <button
            onClick={onScrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-full bg-cyan-50 hover:bg-cyan-100 text-cyan-700 transition-colors ml-2 cursor-pointer border border-cyan-200"
            title="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
