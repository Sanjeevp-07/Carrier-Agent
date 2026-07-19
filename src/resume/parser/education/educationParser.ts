import { Education } from "../../types/resumeModel";
import { splitEducationEntries } from "./educationExtractor";
import { normalizeDegree } from "./educationNormalizer";

export function parseEducation(section: string): Education[] {
  const entries = splitEducationEntries(section);

  return entries.map(entry => {
    const lines = entry
      .split("\n")
      .map(line => line.trim())
      .filter(Boolean);

    const degree = normalizeDegree(lines[0] ?? "");
    const institution = lines[1] ?? "";

    const years = entry.match(/\b(19|20)\d{2}\b/g);

    const grade =
      entry.match(/(?:CGPA|GPA|Percentage|Score)\s*[:\-]?\s*([0-9.]+)/i)?.[1];

    return {
      degree,
      institution,
      startDate: years?.[0],
      endDate: years?.[1],
      grade,
      fieldOfStudy: "",
      description: ""
    };
  });
}