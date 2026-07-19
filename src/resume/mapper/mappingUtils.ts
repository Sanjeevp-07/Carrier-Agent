export function removeEmpty(values: string[]): string[] {
  return [...new Set(values.map(v => v.trim()).filter(Boolean))];
}

export function joinDescriptions(lines: string[]): string {
  return lines
    .map(line => line.trim())
    .filter(Boolean)
    .join("\n");
}