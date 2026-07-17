import { ResumeMetadata as ResumeData } from "../types/resume";
import ResumeMetadata from "./ResumeMetadata";

interface Props {
  resume: ResumeData;
  onDelete: () => void;
}

export default function ResumeCard({
  resume,
  onDelete,
}: Props) {
  return (
    <div className="rounded-lg border p-4 space-y-4">
      <ResumeMetadata resume={resume} />

      <button
        onClick={onDelete}
        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        Delete Resume
      </button>
    </div>
  );
}