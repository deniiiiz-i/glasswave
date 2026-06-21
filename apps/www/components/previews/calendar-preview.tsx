"use client";

import { Calendar, Card } from "glasswave";
import { useState } from "react";
import { ComponentPreview } from "@/components/component-preview";

export function CalendarPreview() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <ComponentPreview label="Calendar">
      <Card className="w-fit p-1">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </Card>
    </ComponentPreview>
  );
}
