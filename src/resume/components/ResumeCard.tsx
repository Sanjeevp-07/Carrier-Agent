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
    <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-5 shadow-md">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500 text-2xl">
          📄
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            Uploaded Resume
          </h3>

          <p className="text-sm text-zinc-400">
            Your current resume information
          </p>
        </div>
      </div>

      {/* Metadata */}
      <ResumeMetadata resume={resume} />

      {/* Actions */}
      <div className="mt-6 flex justify-end gap-3">
        {/* Future Replace Button */}
        {/* 
        <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 transition">
          Replace Resume
        </button>
        */}

        <button
          onClick={onDelete}
          className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
        >
          Delete Resume
        </button>
      </div>
    </div>
  );
}