"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ChartContainer,
  ChartTooltip,
  XAxis,
  YAxis,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

const data = [
  { month: "Jan", desktop: 120 },
  { month: "Feb", desktop: 180 },
  { month: "Mar", desktop: 150 },
  { month: "Apr", desktop: 210 },
  { month: "May", desktop: 240 },
  { month: "Jun", desktop: 190 },
];

export function ChartPreview() {
  return (
    <ComponentPreview label="Chart">
      <div className="w-full max-w-2xl">
        <ChartContainer
          config={{
            desktop: { label: "Desktop", color: "#007AFF" },
          }}
        >
          <BarChart
            data={data}
            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              className="stroke-black/10 dark:stroke-white/10"
            />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} width={32} />
            <ChartTooltip cursor={{ fill: "rgba(120,120,120,0.12)" }} />
            <Bar
              dataKey="desktop"
              fill="var(--color-desktop)"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </ComponentPreview>
  );
}
