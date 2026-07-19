import { ResumeMetadata as ResumeData } from "../types/resume";

interface Props {
  resume: ResumeData;
}

export default function ResumeMetadata({ resume }: Props) {
  return (
    <div className="space-y-3 text-sm">
      <div className="flex justify-between border-b border-zinc-700 pb-2">
        <span className="text-zinc-400">File Name</span>
        <span className="font-medium text-white">{resume.fileName}</span>
      </div>

      <div className="flex justify-between border-b border-zinc-700 pb-2">
        <span className="text-zinc-400">File Size</span>
        <span className="text-white">
          {(resume.size / 1024).toFixed(2)} KB
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-zinc-400">Uploaded On</span>
        <span className="text-white">
          {new Date(resume.uploadedAt).toLocaleString()}
        </span>
      </div>
    </div>
  );
}