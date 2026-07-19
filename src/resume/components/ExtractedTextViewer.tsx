interface Props {
  text: string;
}

export default function ExtractedTextViewer({ text }: Props) {
  return (
    <div className="mt-6 rounded-lg border bg-zinc-900 p-4">
      <h2 className="mb-4 text-lg font-semibold">
        Extracted Resume Text
      </h2>

      <pre className="max-h-96 overflow-y-auto whitespace-pre-wrap text-sm">
        {text}
      </pre>
    </div>
  );
}