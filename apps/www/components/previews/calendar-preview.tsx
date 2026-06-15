"use client";

import { Calendar } from "glasswave";
import { useState } from "react";
import { ComponentPreview } from "@/components/component-preview";

export function CalendarPreview() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <ComponentPreview label="Calendar">
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </ComponentPreview>
  );
}
