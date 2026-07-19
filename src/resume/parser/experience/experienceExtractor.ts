export function splitExperienceEntries(section: string): string[] {
  return section
    .split(/\n\s*\n/)
    .map(entry => entry.trim())
    .filter(Boolean);
}