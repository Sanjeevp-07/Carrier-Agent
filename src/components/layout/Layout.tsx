import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import StatusBar from "./StatusBar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen bg-zinc-950 text-white flex flex-col overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Section */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
          <Sidebar />
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-zinc-950">
          {children}
        </main>
      </div>

      {/* Status Bar */}
      <StatusBar />
    </div>
  );
}