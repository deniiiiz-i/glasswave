"use client";

import { Avatar, AvatarFallback, AvatarImage } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function AvatarPreview() {
  return (
    <ComponentPreview label="Avatar">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/66132191"
            alt="@deniiiiz.i"
          />
          <AvatarFallback>DI</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>DI</AvatarFallback>
        </Avatar>
      </div>
    </ComponentPreview>
  );
}
