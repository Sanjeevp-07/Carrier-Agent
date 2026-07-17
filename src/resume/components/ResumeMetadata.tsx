import { ResumeMetadata as ResumeData } from "../types/resume";

interface Props {
  resume: ResumeData;
}

export default function ResumeMetadata({ resume }: Props) {
  return (
    <div className="space-y-2 text-sm">
      <p>
        <span className="font-medium">File:</span> {resume.fileName}
      </p>

      <p>
        <span className="font-medium">Size:</span>{" "}
        {(resume.size / 1024).toFixed(2)} KB
      </p>

      <p>
        <span className="font-medium">Uploaded:</span>{" "}
        {new Date(resume.uploadedAt).toLocaleString()}
      </p>
    </div>
  );
}