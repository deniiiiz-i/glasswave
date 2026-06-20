"use client";

import { Alert, AlertDescription, AlertTitle } from "glasswave";
import { Sparkles } from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";

export function AlertPreview() {
  return (
    <ComponentPreview label="Alert">
      <div className="flex w-full max-w-md flex-col gap-3">
        <Alert variant="default">
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>

        <Alert variant="success">
          <AlertTitle>Payment successful</AlertTitle>
          <AlertDescription>
            Your subscription has been renewed for another year.
          </AlertDescription>
        </Alert>

        <Alert variant="warning">
          <AlertTitle>Storage almost full</AlertTitle>
          <AlertDescription>
            You've used 92% of your storage. Consider upgrading your plan.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <AlertTitle>Connection failed</AlertTitle>
          <AlertDescription>
            Could not connect to the server. Please try again.
          </AlertDescription>
        </Alert>

        <Alert icon={<Sparkles />}>
          <AlertTitle>Custom icon</AlertTitle>
          <AlertDescription>
            Pass any icon via the <code>icon</code> prop.
          </AlertDescription>
        </Alert>
      </div>
    </ComponentPreview>
  );
}
