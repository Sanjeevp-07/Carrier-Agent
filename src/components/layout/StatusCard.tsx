import { ReactNode } from "react";

interface StatusCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  color?: string;
}

export default function StatusCard({
  title,
  value,
  icon,
  color = "text-blue-500",
}: StatusCardProps) {
  return (
    <div
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-xl
        p-5
        hover:border-blue-500
        transition-all
        duration-300
      "
    >
      <div className="flex items-center justify-between">

        <div>
          <p className="text-zinc-400 text-sm">
            {title}
          </p>

          <h2 className="text-2xl font-bold text-white mt-2">
            {value}
          </h2>
        </div>

        <div
          className={`
            h-12
            w-12
            rounded-lg
            bg-zinc-800
            flex
            items-center
            justify-center
            ${color}
          `}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}