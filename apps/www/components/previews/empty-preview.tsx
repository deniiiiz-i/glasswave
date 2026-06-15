"use client";

import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "glasswave";
import { Inbox } from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";

export function EmptyPreview() {
  return (
    <ComponentPreview label="Empty">
      <Empty className="max-w-md">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Inbox className="size-8" />
          </EmptyMedia>
          <EmptyTitle>No messages</EmptyTitle>
          <EmptyDescription>
            When something arrives, it will show up here.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">Compose</Button>
        </EmptyContent>
      </Empty>
    </ComponentPreview>
  );
}
