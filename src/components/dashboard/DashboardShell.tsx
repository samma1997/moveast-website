"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import styles from "./DashboardShell.module.css";

type DashboardUser = {
  id: string;
  email: string;
  name?: string;
  role: "admin" | "editor" | "viewer";
};

export function DashboardShell({
  user,
  children,
}: {
  user: DashboardUser;
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.shell}>
      <Sidebar
        user={user}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className={styles.main}>
        <Topbar
          user={user}
          onToggleSidebar={() => setSidebarOpen((v) => !v)}
        />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
