import { ResumeModel } from "./resumeModel";

export interface ResumeParserContext {
  rawText: string;

  sections: {
    personal?: string;
    education?: string;
    experience?: string;
    projects?: string;
    skills?: string;
    certifications?: string;
  };

  resume: ResumeModel;
}