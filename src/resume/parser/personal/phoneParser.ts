export function parsePhone(text: string): string {
  const phoneRegex =
    /(\+\d{1,3}[\s-]?)?(\(?\d{2,5}\)?[\s-]?)?[\d\s-]{8,15}/;

  return text.match(phoneRegex)?.[0]?.trim() ?? "";
}