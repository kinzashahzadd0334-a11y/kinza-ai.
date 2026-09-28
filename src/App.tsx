/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeModal } from './components/ResumeModal';
import { SkillsExperienceSection } from './components/SkillsExperienceSection';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  // Permanently enforce clean daylight theme
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    document.body.className =
      'bg-[#f8fafc] text-slate-900 min-h-screen selection:bg-cyan-500 selection:text-white transition-colors duration-200 antialiased font-sans';
    try {
      localStorage.setItem('theme_preference', 'light');
    } catch {
      // Ignore storage errors
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden font-sans bg-[#f8fafc]">
      {/* Daylight ambient background radiance and subtle dot matrix */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Crisp daylight geometric grid */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.08) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        ></div>

        {/* Top Center Ambient Daylight Radiance */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full bg-gradient-to-b from-cyan-400/15 via-blue-500/10 to-transparent blur-[120px] opacity-75 pointer-events-none"></div>

        {/* Left Soft Cyan Daylight Glow */}
        <div className="absolute top-1/4 -left-36 w-[550px] h-[550px] rounded-full bg-cyan-400/10 blur-[130px] opacity-60 pointer-events-none"></div>

        {/* Right Soft Indigo Daylight Glow */}
        <div className="absolute top-2/3 -right-36 w-[600px] h-[600px] rounded-full bg-indigo-400/10 blur-[140px] opacity-60 pointer-events-none"></div>
      </div>

      {/* Floating Sticky Glass Navbar in Day Theme */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <HeroSection
          onOpenResume={() => setResumeOpen(true)}
          onContactClick={() => scrollToSection('contact')}
          onProjectsClick={() => scrollToSection('projects')}
        />

        <AboutSection />

        <SkillsExperienceSection />

        <ProjectsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onScrollToTop={() => scrollToSection('hero')} />

      {/* Full Screen Printable / Interactive Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
