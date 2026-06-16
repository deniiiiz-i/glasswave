"use client";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "glasswave";
import { User } from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";

export function ItemPreview() {
  return (
    <ComponentPreview label="Item">
      <div className="flex w-full max-w-sm flex-col gap-2">
        <Item>
          <ItemMedia>
            <User className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Account</ItemTitle>
            <ItemDescription>Manage profile and security</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="glass">
          <ItemMedia variant="image">
            <User className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Glass variant</ItemTitle>
            <ItemDescription>Uses the glass surface style</ItemDescription>
          </ItemContent>
        </Item>
      </div>
    </ComponentPreview>
  );
}
