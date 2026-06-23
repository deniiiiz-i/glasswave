"use client";

import { useEffect, useState } from "react";

export type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

export const PACKAGE_MANAGERS: PackageManager[] = [
  "pnpm",
  "npm",
  "yarn",
  "bun",
];

const STORAGE_KEY = "glasswave-package-manager";

/** Remembers the reader's preferred package manager across pages. */
export function usePackageManager() {
  const [pm, setPm] = useState<PackageManager>("pnpm");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as PackageManager | null;
    if (stored && PACKAGE_MANAGERS.includes(stored)) setPm(stored);
  }, []);

  const update = (next: PackageManager) => {
    setPm(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return [pm, update] as const;
}
