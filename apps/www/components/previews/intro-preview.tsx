"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function IntroPreview() {
  return (
    <ComponentPreview label="The glass surface">
      <Card className="w-60">
        <CardHeader>
          <CardTitle>Liquid Glass</CardTitle>
          <CardDescription>backdrop-filter, done right.</CardDescription>
        </CardHeader>
      </Card>
    </ComponentPreview>
  );
}
