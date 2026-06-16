"use client";

import { createContext, useContext } from "react";

/**
 * Carries a preview's extracted source code from the server (which reads it
 * off disk at build time) down to the ComponentPreview that renders it, so the
 * preview can offer a "Code" toggle without every preview file passing it in.
 */
const PreviewSourceContext = createContext<string | null>(null);

export function PreviewSourceProvider({
  code,
  children,
}: {
  code: string;
  children: React.ReactNode;
}) {
  return (
    <PreviewSourceContext.Provider value={code}>
      {children}
    </PreviewSourceContext.Provider>
  );
}

export function usePreviewSource() {
  return useContext(PreviewSourceContext);
}
