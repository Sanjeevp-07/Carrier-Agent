import { ChangeEvent } from "react";
import { useResume } from "../hooks/useResume";

export default function ResumeUploader() {
  const { resume, setResume } = useResume();

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setResume({
      fileName: file.name,
      uploadedAt: new Date().toISOString(),
      size: file.size,
    });
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept=".pdf"
        onChange={handleUpload}
      />

      {resume && (
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">{resume.fileName}</h3>

          <p>
            {(resume.size / 1024).toFixed(2)} KB
          </p>

          <p>
            Uploaded:
            {" "}
            {new Date(resume.uploadedAt).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}