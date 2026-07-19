export function parseEmail(text: string): string {
  const emailRegex =
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;

  return text.match(emailRegex)?.[0] ?? "";
}