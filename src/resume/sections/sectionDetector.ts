import { ResumeSections } from "./sectionTypes";

const SECTION_HEADERS: Record<
  Exclude<keyof ResumeSections, "personal" | "others">,
  string[]
> = {
  skills: ["skills", "technical skills", "core skills", "technologies"],
  education: ["education", "academic background", "academics"],
  experience: ["experience", "work experience", "employment", "professional experience"],
  projects: ["projects", "personal projects", "academic projects"],
  certifications: ["certifications", "certificates", "licenses"],
  achievements: ["achievements", "awards", "accomplishments"],
  languages: ["languages"],
  interests: ["interests", "hobbies"],
};

export function detectSections(rawText: string): ResumeSections {
  const lines = rawText
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.trim());

  const matches: { name: keyof typeof SECTION_HEADERS; index: number }[] = [];

  lines.forEach((line, index) => {
    const lower = line.toLowerCase();

    for (const [section, keywords] of Object.entries(SECTION_HEADERS)) {
      if (keywords.some((k) => lower === k)) {
        matches.push({
          name: section as keyof typeof SECTION_HEADERS,
          index,
        });
        break;
      }
    }
  });

  matches.sort((a, b) => a.index - b.index);

  const result: ResumeSections = {
    personal: "",
    skills: "",
    education: "",
    experience: "",
    projects: "",
    certifications: "",
    achievements: "",
    languages: "",
    interests: "",
    others: "",
  };

  if (matches.length === 0) {
    result.personal = lines.join("\n");
    return result;
  }

  result.personal = lines.slice(0, matches[0].index).join("\n");

  for (let i = 0; i < matches.length; i++) {
    const current = matches[i];
    const next = matches[i + 1];

    const content = lines
      .slice(current.index + 1, next ? next.index : lines.length)
      .join("\n");

    result[current.name] = content;
  }

  return result;
}