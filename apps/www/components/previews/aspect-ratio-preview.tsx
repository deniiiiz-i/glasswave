"use client";

import { AspectRatio } from "glasswave";
import Image from "next/image";
import { ComponentPreview } from "@/components/component-preview";

export function AspectRatioPreview() {
  return (
    <ComponentPreview label="Aspect Ratio">
      <div className="w-full max-w-md overflow-hidden rounded-[24px] border border-black/[0.08] shadow-lg shadow-black/10 dark:border-white/12 dark:shadow-black/30">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/mountains.jpg"
            alt="Foggy mountain ridges"
            fill
            className="object-cover"
          />
          {/* Overlay for legible caption + ratio badge */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <span className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md">
            16 : 9
          </span>
          <div className="absolute bottom-3 left-4 text-white">
            <p className="text-sm font-semibold">Mountain landscape</p>
            <p className="text-xs text-white/70">Maintains a 16:9 ratio</p>
          </div>
        </AspectRatio>
      </div>
    </ComponentPreview>
  );
}
