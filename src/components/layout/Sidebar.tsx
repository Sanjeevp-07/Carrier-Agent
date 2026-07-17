import {
  LayoutDashboard,
  User,
  Globe,
  FileText,
  Settings,
  Bot,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Profile",
    icon: User,
    path: "/profile",
  },
  {
    title: "Browser",
    icon: Globe,
    path: "/browser",
  },
  {
    title: "Applications",
    icon: FileText,
    path: "/applications",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">

      {/* Logo */}
      <div className="h-16 border-b border-zinc-800 flex items-center px-5">
        <Bot className="text-blue-500" size={30} />

        <div className="ml-3">
          <h1 className="font-bold text-lg text-white">
            Career Agent
          </h1>

          <p className="text-xs text-zinc-400">
            AI Automation
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5 space-y-2">

              {menuItems.map((item) => {
                  const Icon = item.icon;

                  return (
                      <NavLink
                          key={item.title}
                          to={item.path}
                          className={({ isActive }) =>
                              `
                              flex
                              items-center
                              gap-3
                              rounded-lg
                              px-4
                              py-3
                              transition-all
                              duration-200

                              ${isActive
                                  ? "bg-blue-600 text-white"
                                  : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                              }
                              `
                          }
                      >
                          <Icon size={20} />

                          <span>{item.title}</span>
                      </NavLink>
                  );
              })}
      </nav>

      {/* Footer */}
      <div className="border-t border-zinc-800 p-4">

        <div className="rounded-lg bg-zinc-800 p-3">

          <p className="text-sm text-zinc-300">
            Version
          </p>

          <p className="text-xs text-zinc-500">
            v0.1.0
          </p>

        </div>

      </div>

    </aside>
  );
}