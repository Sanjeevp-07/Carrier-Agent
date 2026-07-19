import { Profile } from "../../types/profile";
import { ResumeModel } from "../types/resumeModel";

export function mapResumeToProfile(
  resume: ResumeModel,
  currentProfile: Profile
): Profile {
  const firstEducation = resume.education[0];

  return {
    ...currentProfile,

    personal: {
      fullName: resume.personal.fullName,
      email: resume.personal.email,
      phone: resume.personal.phone,
      location: resume.personal.location ?? "",
    },

    education: {
      college: firstEducation?.institution ?? "",
      degree: firstEducation?.degree ?? "",
      cgpa: firstEducation?.grade ?? "",
      graduationYear: firstEducation?.endDate ?? "",
    },

    professional: {
      experience: resume.experience
        .map((exp) => exp.position)
        .join(", "),

      projects: resume.projects
        .map((project) => project.title)
        .join(", "),
    },

    social: {
      github: resume.links.github ?? "",
      linkedin: resume.links.linkedin ?? "",
      portfolio: resume.links.portfolio ?? "",
      leetcode: resume.links.leetcode ?? "",
    },

    skills: resume.skills.map((skill) => skill.name),

    resume: {
      fileName: resume.metadata.fileName,
      uploadedAt: resume.metadata.uploadedAt,
      size: resume.metadata.fileSize,
    },
  };
}