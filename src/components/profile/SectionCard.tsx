import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function SectionCard({
  title,
  description,
  children,
}: SectionCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-5">

      <div>
        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        {description && (
          <p className="text-sm text-zinc-400 mt-1">
            {description}
          </p>
        )}
      </div>

      {children}

    </div>
  );
}