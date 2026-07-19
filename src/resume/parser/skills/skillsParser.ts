import { Skill } from "../../types/resumeModel";
import { extractSkills } from "./skillExtractor";
import { normalizeSkill } from "./skillNormalizer";

const SKILL_CATEGORIES: Record<string, Skill["category"]> = {
  // Programming Languages
  JavaScript: "Programming Language",
  TypeScript: "Programming Language",
  Python: "Programming Language",
  Java: "Programming Language",
  C: "Programming Language",
  "C++": "Programming Language",
  "C#": "Programming Language",
  Go: "Programming Language",
  Rust: "Programming Language",
  PHP: "Programming Language",
  Kotlin: "Programming Language",
  Swift: "Programming Language",

  // Frontend
  HTML: "Frontend",
  CSS: "Frontend",
  React: "Frontend",
  "Next.js": "Frontend",
  Vue: "Frontend",
  Angular: "Frontend",
  Redux: "Frontend",
  "Tailwind CSS": "Frontend",
  Bootstrap: "Frontend",

  // Backend
  "Node.js": "Backend",
  Express: "Backend",
  NestJS: "Backend",
  FastAPI: "Backend",
  Django: "Backend",
  Flask: "Backend",
  "Spring Boot": "Backend",

  // Database
  MySQL: "Database",
  PostgreSQL: "Database",
  MongoDB: "Database",
  SQLite: "Database",
  Redis: "Database",

  // DevOps
  Docker: "DevOps",
  Kubernetes: "DevOps",
  Git: "DevOps",
  GitHub: "DevOps",
  GitLab: "DevOps",
  Jenkins: "DevOps",

  // Cloud
  AWS: "Cloud",
  Azure: "Cloud",
  "Google Cloud": "Cloud",

  // Tools
  "VS Code": "Tools",
  Linux: "Tools",
  Postman: "Tools",
  Figma: "Tools",

  // AI
  TensorFlow: "Other",
  PyTorch: "Other",
  OpenAI: "Other",
  LangChain: "Other",
};

function getCategory(skill: string): Skill["category"] {
  return SKILL_CATEGORIES[skill] ?? "Other";
}

export function parseSkills(section: string): Skill[] {
  const extractedSkills = extractSkills(section);

  const normalizedSkills = extractedSkills.map(normalizeSkill);

  const uniqueSkills = [...new Set(normalizedSkills)].sort();

  return uniqueSkills.map((skill) => ({
    name: skill,
    category: getCategory(skill),
  }));
}