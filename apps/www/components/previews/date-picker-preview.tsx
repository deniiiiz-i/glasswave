"use client";

import { DatePicker } from "glasswave";
import { useState } from "react";
import { ComponentPreview } from "@/components/component-preview";

export function DatePickerPreview() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <ComponentPreview label="Date Picker">
      <DatePicker
        date={date}
        onDateChange={setDate}
        placeholder="Pick a date"
      />
    </ComponentPreview>
  );
}
