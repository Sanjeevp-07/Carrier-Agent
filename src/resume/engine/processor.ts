import { extractPdfText } from "../extractor";
import { parseResume } from "../parser";
import { mapResumeToProfile } from "../mapper";
import { ResumeProcessingResult } from "../types/processing";
import { validateResume } from "./validator";
import { Profile } from "../../types/profile";

export async function processResume(
  file: File,
  currentProfile: Profile
): Promise<ResumeProcessingResult> {
  try {
    // Step 1: Extract text from PDF
    const rawText = await extractPdfText(file);

    // Step 2: Parse resume
    const resumeModel = parseResume(rawText);

    // Step 3: Attach metadata
    resumeModel.metadata = {
      fileName: file.name,
      uploadedAt: new Date().toISOString(),
      fileSize: file.size,
      parserVersion: "1.0.0",
      source: "pdf",
    };

    // Step 4: Map ResumeModel -> Profile
    const profile = mapResumeToProfile(
      resumeModel,
      currentProfile
    );

    // Step 5: Build processing result
    const result: ResumeProcessingResult = {
      rawText,
      resumeModel,
      profile,
      warnings: [],
      errors: [],
    };

    // Step 6: Validate
    return validateResume(result);
  } catch (error) {
    console.error(
      "[Resume Engine] Processing failed:",
      error
    );

    // Let the caller handle the error
    throw error;
  }
}