import { ReactNode } from "react";

interface QuickActionButtonProps {
  title: string;
  icon: ReactNode;
  onClick?: () => void;
}

export default function QuickActionButton({
  title,
  icon,
  onClick,
}: QuickActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        flex
        items-center
        gap-3
        bg-blue-600
        hover:bg-blue-700
        transition
        rounded-xl
        px-5
        py-4
        text-white
        font-medium
      "
    >
      {icon}
      {title}
    </button>
  );
}