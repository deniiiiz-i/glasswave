"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function InputGroupPreview() {
  return (
    <ComponentPreview label="Input Group">
      <div className="flex w-full max-w-sm flex-col gap-4">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example.com" />
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </ComponentPreview>
  );
}
