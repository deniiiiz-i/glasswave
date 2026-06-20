"use client";

import { Input, Label } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function InputPreview() {
  return (
    <ComponentPreview label="Input">
      <div className="flex w-full max-w-sm flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="input-email">Email</Label>
          <Input id="input-email" type="email" placeholder="you@example.com" />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="input-password">Password</Label>
          <Input id="input-password" type="password" placeholder="••••••••" />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="input-file">Avatar</Label>
          <Input id="input-file" type="file" />
        </div>

        <Input placeholder="Disabled" disabled />
      </div>
    </ComponentPreview>
  );
}
