"use client";

import { Alert, AlertDescription, AlertTitle } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function AlertPreview() {
  return (
    <ComponentPreview label="Alert">
      <div className="w-full max-w-sm flex flex-col gap-3">
        <Alert variant="default">
          <AlertTitle>System Update</AlertTitle>
          <AlertDescription>Your software is up to date.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>Connection Failed</AlertTitle>
          <AlertDescription>
            Could not connect to the server. Please try again.
          </AlertDescription>
        </Alert>
      </div>
    </ComponentPreview>
  );
}
