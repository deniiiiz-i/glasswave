"use client";

import { AspectRatio } from "glasswave";
import Image from "next/image";
import { ComponentPreview } from "@/components/component-preview";

export function AspectRatioPreview() {
  return (
    <ComponentPreview label="Aspect Ratio">
      <div className="w-[300px] border border-gray-200 dark:border-white/20 rounded-md overflow-hidden bg-gray-50 dark:bg-white/5">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/image.png"
            alt="Sample image"
            fill
            className="object-cover"
          />
        </AspectRatio>
      </div>
    </ComponentPreview>
  );
}
