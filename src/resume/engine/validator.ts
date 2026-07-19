import { ResumeProcessingResult } from "../types/processing";

export function validateResume(
  result: ResumeProcessingResult
): ResumeProcessingResult {
  const warnings: string[] = [...result.warnings];

  if (!result.rawText.trim()) {
    warnings.push("No text could be extracted from the PDF.");
  }

  if (result.rawText.length < 100) {
    warnings.push(
      "The extracted text is very short. The resume may be image-based or scanned."
    );
  }

  return {
    ...result,
    warnings,
  };
}