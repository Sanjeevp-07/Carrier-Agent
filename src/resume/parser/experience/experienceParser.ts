import { Experience } from "../../types/resumeModel";
import { splitExperienceEntries } from "./experienceExtractor";
import { parseSkills } from "../skills";

export function parseExperience(section: string): Experience[] {
  const entries = splitExperienceEntries(section);

  return entries.map(entry => {
    const lines = entry
      .split("\n")
      .map(line => line.trim())
      .filter(Boolean);

    const position = lines[0] ?? "";
    const company = lines[1] ?? "";

    const years = entry.match(/\b(19|20)\d{2}\b/g);

    const technologies = parseSkills(entry).map(skill => skill.name);

    const description = lines.slice(3);

    return {
      company,
      position,
      startDate: years?.[0],
      endDate: years?.[1],
      currentlyWorking: /present|current/i.test(entry),
      location: "",
      description,
      technologies
    };
  });
}