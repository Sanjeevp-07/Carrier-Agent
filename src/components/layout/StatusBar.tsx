import { Circle } from "lucide-react";

export default function StatusBar() {
  return (
    <footer className="h-10 bg-zinc-900 border-t border-zinc-800 px-6 flex items-center justify-between text-sm">

      {/* Left Section */}
      <div className="flex items-center gap-6">

        <div className="flex items-center gap-2">
          <Circle
            size={10}
            className="fill-red-500 text-red-500"
          />

          <span className="text-zinc-300">
            Backend Offline
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Circle
            size={10}
            className="fill-gray-500 text-gray-500"
          />

          <span className="text-zinc-300">
            Automation Idle
          </span>
        </div>

      </div>

      {/* Right Section */}
      <div className="text-zinc-500">
        Career Agent v0.1.0
      </div>

    </footer>
  );
}