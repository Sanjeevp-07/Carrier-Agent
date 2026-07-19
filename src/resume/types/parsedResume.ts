export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export interface Education {
  degree: string;
  institute: string;
  year?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration?: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export interface ParsedResume {
  personal: PersonalInfo;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: string[];
  certifications: string[];
}