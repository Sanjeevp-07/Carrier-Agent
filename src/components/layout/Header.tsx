import { Bell, CalendarDays, Circle } from "lucide-react";
import usePageTitle from "../../hooks/usePageTitle";

export default function Header() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const pageTitle = usePageTitle();

  return (
    <header className="h-16 bg-zinc-900 border-b border-zinc-800 px-6 flex items-center justify-between">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          {pageTitle}
        </h1>

        <p className="text-sm text-zinc-400">
          Welcome back 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Date */}
        <div className="flex items-center gap-2 text-zinc-400">
          <CalendarDays size={18} />
          <span className="text-sm">{today}</span>
        </div>

        {/* Backend Status */}
        <div className="flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2">

          <Circle
            size={10}
            className="fill-red-500 text-red-500"
          />

          <span className="text-sm text-white">
            Backend Offline
          </span>

        </div>

        {/* Notification */}
        <button
          className="
            rounded-lg
            bg-zinc-800
            p-2
            hover:bg-zinc-700
            transition
          "
        >
          <Bell size={20} className="text-white" />
        </button>

      </div>

    </header>
  );
}