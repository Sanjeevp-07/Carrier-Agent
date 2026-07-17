interface TextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}

export default function TextArea({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
}: TextAreaProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-zinc-300">
        {label}
      </label>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        className="
          w-full
          rounded-lg
          border
          border-zinc-700
          bg-zinc-800
          px-4
          py-3
          text-white
          resize-none
          outline-none
          focus:border-blue-500
        "
      />
    </div>
  );
}