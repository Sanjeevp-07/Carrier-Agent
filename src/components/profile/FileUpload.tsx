import { Upload } from "lucide-react";

export default function FileUpload() {
  return (
    <label
      className="
        border-2
        border-dashed
        border-zinc-700
        rounded-xl
        p-10
        flex
        flex-col
        items-center
        justify-center
        cursor-pointer
        hover:border-blue-500
        transition
      "
    >
      <Upload size={40} className="text-blue-500" />

      <p className="mt-4 text-white">
        Upload Resume
      </p>

      <p className="text-zinc-500 text-sm">
        PDF only
      </p>

      <input
        type="file"
        accept=".pdf"
        className="hidden"
      />
    </label>
  );
}