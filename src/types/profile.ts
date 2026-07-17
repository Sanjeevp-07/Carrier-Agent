import { ResumeMetadata } from "../resume/types/resume";

export interface Profile {
  personal: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
  };

  education: {
    college: string;
    degree: string;
    cgpa: string;
    graduationYear: string;
  };

  professional: {
    experience: string;
    projects: string;
  };

  social: {
    github: string;
    linkedin: string;
    portfolio: string;
    leetcode: string;
  };

  skills: string[];

  resume: ResumeMetadata | null;
}