import {
  Bot,
  FileText,
  Globe,
  Play,
  Search,
  Server,
  Upload,
} from "lucide-react";

import QuickActionButton from "../components/dashboard/QuickActionButton";
import StatusCard from "../components/layout/StatusCard"; // Change this path if you moved StatusCard

export default function Dashboard() {
  return (
    <div className="space-y-10">

      {/* Welcome Section */}
      <section>
        <h1 className="text-4xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-zinc-400">
          Your AI Career Assistant is ready to automate your job applications.
        </p>
      </section>

      {/* Status Cards */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatusCard
          title="Backend"
          value="Offline"
          icon={<Server size={24} />}
          color="text-red-500"
        />

        <StatusCard
          title="Automation"
          value="Idle"
          icon={<Bot size={24} />}
          color="text-yellow-500"
        />

        <StatusCard
          title="Browser"
          value="Closed"
          icon={<Globe size={24} />}
          color="text-blue-500"
        />

        <StatusCard
          title="Resume"
          value="Missing"
          icon={<FileText size={24} />}
          color="text-purple-500"
        />

      </section>

      {/* Quick Actions */}
      <section>

        <h2 className="mb-5 text-2xl font-semibold text-white">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">

          <QuickActionButton
            title="Open Browser"
            icon={<Globe size={20} />}
          />

          <QuickActionButton
            title="Upload Resume"
            icon={<Upload size={20} />}
          />

          <QuickActionButton
            title="Start AI"
            icon={<Play size={20} />}
          />

          <QuickActionButton
            title="Search Jobs"
            icon={<Search size={20} />}
          />

        </div>

      </section>

    </div>
  );
}