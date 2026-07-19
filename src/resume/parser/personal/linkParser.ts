export interface ResumeLinks {
  github?: string;
  linkedin?: string;
  portfolio?: string;
}

export function parseLinks(text: string): ResumeLinks {
  const github =
    text.match(
      /https?:\/\/(www\.)?github\.com\/[^\s]+/i
    )?.[0];

  const linkedin =
    text.match(
      /https?:\/\/(www\.)?linkedin\.com\/[^\s]+/i
    )?.[0];

  const portfolio =
    text.match(
      /https?:\/\/(?!.*github)(?!.*linkedin)[^\s]+/i
    )?.[0];

  return {
    github,
    linkedin,
    portfolio,
  };
}