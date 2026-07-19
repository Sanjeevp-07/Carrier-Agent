import { ChangeEvent, useState } from "react";

import { useResume } from "../hooks/useResume";

import ResumeCard from "./ResumeCard";
import ExtractedTextViewer from "./ExtractedTextViewer";

export default function ResumeUploader() {
  const { resume, setResume, uploadResume } = useResume();

  const [rawText, setRawText] = useState("");

  const handleUpload = async (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      const result = await uploadResume(file);

      setRawText(result.rawText);
    } catch (error) {
      console.error("Resume Processing Failed:", error);
      setRawText("");
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept=".pdf"
        onChange={handleUpload}
      />

      {resume && (
        <ResumeCard
          resume={resume}
          onDelete={() => {
            setResume(null);
            setRawText("");
          }}
        />
      )}

      {rawText && (
        <ExtractedTextViewer text={rawText} />
      )}
    </div>
  );
}