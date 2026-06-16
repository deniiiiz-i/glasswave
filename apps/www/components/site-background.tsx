"use client";

import { useEffect } from "react";

/**
 * Fixed ambient field behind all content: a faint grid mesh that fades out
 * toward the edges, plus a spotlight that follows the cursor. The spotlight
 * position is fed in through CSS custom properties so the paint stays on the
 * compositor and never triggers React re-renders.
 */
export function SiteBackground() {
  useEffect(() => {
    const spot = document.getElementById("gw-spotlight");
    if (!spot) return;

    const onMove = (e: PointerEvent) => {
      spot.style.setProperty("--mx", `${e.clientX}px`);
      spot.style.setProperty("--my", `${e.clientY}px`);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <div className="gw-grid fixed inset-0 -z-10 pointer-events-none" />
      <div
        id="gw-spotlight"
        className="gw-spotlight fixed inset-0 -z-10 pointer-events-none"
      />
    </>
  );
}
