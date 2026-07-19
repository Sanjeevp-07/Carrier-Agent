import { extractPdfText } from "../extractor";

export async function processResume(file: File) {
  const rawText = await extractPdfText(file);

  return {
    rawText,
  };
}