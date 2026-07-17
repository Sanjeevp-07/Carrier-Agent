interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

export default function TextInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: TextInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-zinc-300">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
          outline-none
          focus:border-blue-500
        "
      />
    </div>
  );
}