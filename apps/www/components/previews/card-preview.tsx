"use client";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function CardPreview() {
  return (
    <ComponentPreview label="Card">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="opacity-80 text-sm">
            Make sure to configure the correct settings and deployment options
            before proceeding.
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-4">
          <Button variant="glass" className="flex-1">
            Cancel
          </Button>
          <Button className="flex-1">Deploy</Button>
        </CardFooter>
      </Card>
    </ComponentPreview>
  );
}
