import { Project } from "../../types/resumeModel";
import { splitProjectEntries } from "./projectExtractor";
import { parseSkills } from "../skills";

export function parseProjects(section: string): Project[] {
  const entries = splitProjectEntries(section);

  return entries.map(entry => {
    const lines = entry
      .split("\n")
      .map(line => line.trim())
      .filter(Boolean);

    const title = lines[0] ?? "";

    const github =
      entry.match(/https?:\/\/(?:www\.)?github\.com\/[^\s]+/i)?.[0];

    const liveDemo =
      entry.match(/https?:\/\/(?!.*github)[^\s]+/i)?.[0];

    return {
      title,
      description: lines.slice(1),
      technologies: parseSkills(entry).map(skill => skill.name),
      github,
      liveDemo,
      startDate: "",
      endDate: ""
    };
  });
}