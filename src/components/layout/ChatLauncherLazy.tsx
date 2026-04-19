"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ChatLauncher = dynamic(
  () => import("./ChatLauncher").then((m) => ({ default: m.ChatLauncher })),
  { ssr: false }
);

/**
 * Idle-loaded ChatLauncher.
 * Lo bundle non parte finché l'utente non ha interagito o il browser è idle ~3s.
 * Riduce JS critico first-paint.
 */
export function ChatLauncherLazy() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const reveal = () => {
      if (!cancelled) setShow(true);
    };

    // Prefer requestIdleCallback; fallback to setTimeout 2500ms
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (typeof ric === "function") {
      idleId = ric(reveal, { timeout: 3500 });
    } else {
      timeoutId = setTimeout(reveal, 2500);
    }

    // Or reveal immediately on any user interaction
    const onInteraction = () => reveal();
    window.addEventListener("scroll", onInteraction, { once: true, passive: true });
    window.addEventListener("click", onInteraction, { once: true });
    window.addEventListener("keydown", onInteraction, { once: true });

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
      if (idleId) (window as unknown as { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(idleId);
      window.removeEventListener("scroll", onInteraction);
      window.removeEventListener("click", onInteraction);
      window.removeEventListener("keydown", onInteraction);
    };
  }, []);

  if (!show) return null;
  return <ChatLauncher />;
}
