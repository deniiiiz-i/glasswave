"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Cycle order: system → light → dark → system.
const order = ["system", "light", "dark"] as const;
const meta = {
  system: { label: "System", Icon: Monitor },
  light: { label: "Light", Icon: Sun },
  dark: { label: "Dark", Icon: Moon },
} as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: the chosen theme is only known on the client.
  useEffect(() => setMounted(true), []);

  const current = (mounted ? theme : "system") as keyof typeof meta;
  const { label, Icon } = meta[current] ?? meta.system;

  const cycle = () => {
    const idx = order.indexOf(current as (typeof order)[number]);
    setTheme(order[(idx + 1) % order.length]);
  };

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Theme: ${label}. Click to change.`}
      title={`Theme: ${label}`}
      className="inline-flex items-center justify-center size-9 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
    >
      {mounted ? <Icon className="size-4" /> : <span className="size-4" />}
    </button>
  );
}
