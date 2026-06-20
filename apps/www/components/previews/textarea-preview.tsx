"use client";

import { Label, Textarea } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function TextareaPreview() {
  return (
    <ComponentPreview label="Textarea">
      <div className="flex w-full max-w-sm flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="textarea-message">Your message</Label>
          <Textarea
            id="textarea-message"
            placeholder="Type your message here…"
            rows={4}
          />
          <p className="text-xs text-current/50">
            Your message will be copied to the support team.
          </p>
        </div>

        <Textarea placeholder="Disabled" disabled rows={3} />
      </div>
    </ComponentPreview>
  );
}
