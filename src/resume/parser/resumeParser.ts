import { ResumeModel } from "../types/resumeModel";
import { detectSections } from "../sections";

import { parsePersonal } from "./personal";
import { parseSkills } from "./skills";
import { parseEducation } from "./education";
import { parseExperience } from "./experience";
import { parseProjects } from "./projects";

export function parseResume(rawText: string): ResumeModel {
  // Detect logical sections in the resume
  const sections = detectSections(rawText);

  // Parse personal information
  const parsedPersonal = parsePersonal(sections.personal);

  // Build and return the ResumeModel
  return {
    metadata: {
      fileName: "",
      uploadedAt: "",
      fileSize: 0,
      parserVersion: "1.0.0",
      extractedAt: new Date().toISOString(),
      source: "pdf",
    },

    personal: {
      fullName: parsedPersonal.fullName,
      email: parsedPersonal.email,
      phone: parsedPersonal.phone,
      location: parsedPersonal.location ?? "",
      headline: parsedPersonal.headline ?? "",
    },

    summary: "",

    skills: parseSkills(sections.skills),

    education: parseEducation(sections.education),

    experience: parseExperience(sections.experience),

    projects: parseProjects(sections.projects),

    certifications: [],

    links: {
      github: parsedPersonal.github,
      linkedin: parsedPersonal.linkedin,
      portfolio: parsedPersonal.portfolio,
      website: "",
      leetcode: "",
      codeforces: "",
      hackerrank: "",
      kaggle: "",
    },

    languages: [],

    achievements: [],

    interests: [],

    customSections: [],
  };
}