export function normalizeDegree(value: string): string {
  return value
    .replace(/\bB\.?Tech\b/i, "Bachelor of Technology")
    .replace(/\bM\.?Tech\b/i, "Master of Technology")
    .replace(/\bB\.?E\b/i, "Bachelor of Engineering")
    .trim();
}