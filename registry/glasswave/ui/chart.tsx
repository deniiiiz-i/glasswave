"use client";

import type { CSSProperties, ReactElement, ReactNode } from "react";
import { ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";
import { glass } from "@/lib/glass";

export type ChartConfig = Record<
  string,
  {
    label?: ReactNode;
    color?: string;
  }
>;

export function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ReactNode;
}) {
  const style = {
    ...Object.fromEntries(
      Object.entries(config).map(([key, item]) => [
        `--color-${key}`,
        item.color ?? "var(--fd-primary, #007AFF)",
      ]),
    ),
  } as CSSProperties;

  return (
    <div
      data-slot="chart"
      data-chart={id}
      className={cn(
        glass,
        "w-full p-4 pt-6 text-xs",
        "[&_.recharts-cartesian-axis-tick_text]:fill-current/55 [&_.recharts-text]:fill-current",
        className,
      )}
      style={style}
      {...props}
    >
      {/* `aspect` derives height from the measured width, so the chart renders
          as long as it has a definite width (no reliance on parent height). */}
      <ResponsiveContainer width="100%" aspect={16 / 9}>
        {children as ReactElement}
      </ResponsiveContainer>
    </div>
  );
}

export {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
