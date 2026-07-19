/**
 * ============================================================
 * Resume Model
 * ------------------------------------------------------------
 * Canonical resume representation used across the application.
 *
 * Every module should use this model:
 * - Resume Parser
 * - AI Analyzer
 * - Profile Mapper
 * - FastAPI Backend
 * - Playwright Automation
 * - Job Matcher
 * ============================================================
 */

export interface ResumeModel {
  metadata: ResumeMetadata;

  personal: PersonalSection;

  summary?: string;

  skills: Skill[];

  education: Education[];

  experience: Experience[];

  projects: Project[];

  certifications: Certification[];

  links: ResumeLinks;

  languages: Language[];

  achievements: Achievement[];

  interests: string[];

  customSections: CustomSection[];
}

export interface ResumeMetadata {
  fileName: string;
  uploadedAt: string;
  fileSize: number;
  pageCount?: number;

  parserVersion: string;

  extractedAt?: string;

  source: "pdf" | "docx" | "linkedin" | "manual";
}

export interface PersonalSection {
  fullName: string;

  email: string;

  phone: string;

  location?: string;

  headline?: string;
}

export interface Skill {
  name: string;

  category?:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Cloud"
    | "DevOps"
    | "Programming Language"
    | "Tools"
    | "Other";

  level?: "Beginner" | "Intermediate" | "Advanced";
}

export interface Education {
  institution: string;

  degree: string;

  fieldOfStudy?: string;

  startDate?: string;

  endDate?: string;

  grade?: string;

  description?: string;
}

export interface Experience {
  company: string;

  position: string;

  location?: string;

  startDate?: string;

  endDate?: string;

  currentlyWorking?: boolean;

  description: string[];

  technologies: string[];
}

export interface Project {
  title: string;

  description: string[];

  technologies: string[];

  github?: string;

  liveDemo?: string;

  startDate?: string;

  endDate?: string;
}

export interface Certification {
  name: string;

  issuer?: string;

  issueDate?: string;

  expiryDate?: string;

  credentialId?: string;

  credentialUrl?: string;
}

export interface ResumeLinks {
  github?: string;

  linkedin?: string;

  portfolio?: string;

  website?: string;

  leetcode?: string;

  codeforces?: string;

  hackerrank?: string;

  kaggle?: string;
}

export interface Language {
  name: string;

  proficiency?:
    | "Basic"
    | "Intermediate"
    | "Professional"
    | "Native";
}

export interface Achievement {
  title: string;

  description?: string;

  date?: string;
}

export interface CustomSection {
  title: string;

  content: string[];
}