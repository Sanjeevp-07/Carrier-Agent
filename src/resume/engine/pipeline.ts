import { processResume } from "./processor";

export async function runResumePipeline(file: File) {
  return processResume(file);
}