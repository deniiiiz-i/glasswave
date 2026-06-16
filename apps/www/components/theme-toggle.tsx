"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const options = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: the chosen theme is only known on the client.
  useEffect(() => setMounted(true), []);

  // Before mount the theme is unknown; default to "system".
  const current = mounted ? theme : "system";

  return (
    <div
      role="group"
      aria-label="Toggle theme"
      className="inline-flex items-center gap-0.5 rounded-full border border-slate-200 dark:border-white/10 p-0.5"
    >
      {options.map(({ value, label, Icon }) => {
        const active = current === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={`inline-flex items-center justify-center size-7 rounded-full transition-colors ${
              active
                ? "bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white"
                : "text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Icon className="size-4" />
          </button>
        );
      })}
    </div>
  );
}
