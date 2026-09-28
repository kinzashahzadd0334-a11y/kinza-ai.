export type ThemeMode = 'dark' | 'light';

export interface StatMetric {
  id: string;
  label: string;
  codeKey: string;
  value: string;
  description: string;
  icon: string;
}

export type SkillCategory = 'all' | 'msoffice' | 'ai' | 'productivity';

export interface SkillItem {
  id: string;
  name: string;
  category: 'msoffice' | 'ai' | 'productivity';
  level: 'Expert' | 'Advanced' | 'Proficient';
  percentage: number;
  highlight: string;
  description: string;
  iconName: string;
  colorGrad: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  tags: string[];
  achievements: string[];
  badgeColor: 'primary' | 'secondary' | 'emerald';
}

export type ProjectFilter = 'all' | 'ai' | 'games' | 'web';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  category: ProjectFilter[];
  tags: string[];
  badgeText: string;
  badgeType: 'aiml' | 'game' | '3d' | 'ecommerce' | 'puzzle';
  features: string[];
  metrics: {
    label1: string;
    val1: string;
    label2: string;
    val2: string;
  };
  liveUrl?: string;
  githubUrl: string;
  previewType: 'luma' | 'qwizy' | 'grid-wars' | 'chatbot-ai' | 'turbo-riders';
  caseStudyDetails?: {
    overview: string;
    architectureHighlights: string[];
    technicalStack: { name: string; purpose: string }[];
    impactMetrics: string[];
  };
}

export interface ContactDraft {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp?: number;
}
