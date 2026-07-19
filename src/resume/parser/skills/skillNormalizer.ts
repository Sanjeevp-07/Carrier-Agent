const NORMALIZATION_MAP: Record<string, string> = {
  js: "JavaScript",
  javascript: "JavaScript",

  ts: "TypeScript",
  typescript: "TypeScript",

  reactjs: "React",
  "react.js": "React",

  node: "Node.js",
  nodejs: "Node.js",

  postgres: "PostgreSQL",
  postgresql: "PostgreSQL",

  aws: "AWS",

  gcp: "Google Cloud",

  docker: "Docker",

  github: "GitHub",
};

export function normalizeSkill(skill: string): string {
  const key = skill.trim().toLowerCase();

  return NORMALIZATION_MAP[key] ?? skill.trim();
}