import { SKILL_DICTIONARY } from "./skillDictionary";

export function extractSkills(text: string): string[] {
  const lower = text.toLowerCase();

  return SKILL_DICTIONARY.filter(skill =>
    lower.includes(skill.toLowerCase())
  );
}