import { useState } from "react";
import { X } from "lucide-react";

interface SkillInputProps {
  skills: string[];
  onChange: (skills: string[]) => void;
}

export default function SkillInput({
  skills,
  onChange,
}: SkillInputProps) {
  const [input, setInput] = useState("");

  const addSkill = () => {
    const skill = input.trim();

    if (!skill) return;

    if (skills.includes(skill)) {
      setInput("");
      return;
    }

    onChange([...skills, skill]);
    setInput("");
  };

  const removeSkill = (skill: string) => {
    onChange(skills.filter((s) => s !== skill));
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a skill"
          className="flex-1 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addSkill();
            }
          }}
        />

        <button
          onClick={addSkill}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-white"
          >
            {skill}

            <button onClick={() => removeSkill(skill)}>
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}