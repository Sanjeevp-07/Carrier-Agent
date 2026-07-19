import { ResumeModel } from "./resumeModel";
import { Profile } from "../../types/profile";

export interface ResumeProcessingResult {
  rawText: string;

  resumeModel: ResumeModel;

  profile: Profile;

  warnings: string[];

  errors: string[];
}