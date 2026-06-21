"use client";

import "react-day-picker/style.css";

import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { cn } from "../../lib/cn";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({
  className,
  classNames,
  components,
  captionLayout = "dropdown",
  showOutsideDays = true,
  startMonth,
  endMonth,
  style,
  ...props
}: CalendarProps) {
  const defaults = getDefaultClassNames();

  // The month/year dropdowns need a bounded range to list options. Default to a
  // wide, generally-useful span; callers can still pass their own.
  const fromMonth = startMonth ?? new Date(1925, 0);
  const toMonth = endMonth ?? new Date(new Date().getFullYear() + 5, 11);

  // Neutralize react-day-picker's blue accent at the source. These are set
  // inline (highest priority) because rdp declares the same vars on `.rdp-root`
  // with equal specificity, so a class would lose on load order. Values are
  // theme-neutral, so they work in both light and dark.
  const accentReset = {
    "--rdp-accent-color": "currentColor",
    "--rdp-accent-background-color": "transparent",
    "--rdp-selected-border": "0",
    "--rdp-today-color": "inherit",
    // rdp defaults day cells to 44px via these vars, which beat our `w-9` on the
    // day (same specificity, rdp loads later) while the weekday header has no
    // width rule and stays 36px — so the columns drift apart. Pin every cell to
    // 36px at the source so weekdays and days share one column pitch.
    "--rdp-day-width": "2.25rem",
    "--rdp-day-height": "2.25rem",
    "--rdp-day_button-width": "2.25rem",
    "--rdp-day_button-height": "2.25rem",
    "--rdp-day_button-border": "0",
  } as React.CSSProperties;

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      captionLayout={captionLayout}
      startMonth={fromMonth}
      endMonth={toMonth}
      style={{ ...accentReset, ...style }}
      className={cn("w-fit p-3", className)}
      components={{
        // rdp's default chevrons are sharp; lucide's have rounded line caps and
        // we render them smaller for a softer nav. `down` is the dropdown caret.
        Chevron: ({ orientation }) => {
          const Icon =
            orientation === "left"
              ? ChevronLeft
              : orientation === "right"
                ? ChevronRight
                : ChevronDown;
          return <Icon className="size-4" strokeWidth={2} />;
        },
        ...components,
      }}
      classNames={{
        ...defaults,
        months: cn(defaults.months, "relative flex flex-col gap-4 sm:flex-row"),
        month: cn(defaults.month, "flex flex-col gap-3"),
        month_caption: cn(
          defaults.month_caption,
          "flex h-9 items-center justify-center",
        ),
        caption_label: cn(
          defaults.caption_label,
          "inline-flex items-center gap-0.5 text-sm font-medium tracking-tight",
        ),
        // Month/year dropdown navigation: rdp lays a transparent native <select>
        // over a visible label, so we just style the label to read as a button.
        dropdowns: cn(defaults.dropdowns, "flex items-center gap-1"),
        dropdown_root: cn(
          defaults.dropdown_root,
          "relative inline-flex items-center rounded-full px-2.5 py-1 transition-colors hover:bg-black/[0.05] dark:hover:bg-white/10",
        ),
        dropdown: cn(defaults.dropdown, "cursor-pointer"),
        nav: cn(
          defaults.nav,
          "absolute inset-x-0 top-0 flex h-9 items-center justify-between",
        ),
        button_previous: cn(
          defaults.button_previous,
          "inline-flex size-8 items-center justify-center rounded-full bg-transparent text-current/45 transition-colors hover:bg-black/[0.05] hover:text-current/80 dark:hover:bg-white/10",
        ),
        button_next: cn(
          defaults.button_next,
          "inline-flex size-8 items-center justify-center rounded-full bg-transparent text-current/45 transition-colors hover:bg-black/[0.05] hover:text-current/80 dark:hover:bg-white/10",
        ),
        month_grid: cn(defaults.month_grid, "border-collapse"),
        weekdays: cn(defaults.weekdays, "flex"),
        weekday: cn(
          defaults.weekday,
          "w-9 text-center text-[0.75rem] font-medium text-current/40",
        ),
        week: cn(defaults.week, "mt-1 flex w-full"),
        day: cn(defaults.day, "size-9 p-0 text-center text-sm"),
        // No background transition on the day button: rdp swaps the selected
        // modifier instantly, so a color transition leaves a "ghost" circle
        // fading in/out as you move between dates. Focus uses focus-visible so a
        // plain mouse click does not flash a ring.
        // Explicit text-sm + font-normal here so the button never inherits
        // rdp's `.rdp-selected { font-size: large; font-weight: bold }` from the
        // cell — that inheritance is what made the digit jump/grow on select.
        day_button: cn(
          defaults.day_button,
          "mx-auto flex size-9 items-center justify-center rounded-full !text-sm !font-normal text-current outline-none hover:bg-black/[0.05] dark:hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-black/15 dark:focus-visible:ring-white/25 aria-selected:opacity-100",
        ),
        // Selected = solid, glowing iOS-style pill. `!font-normal` so the digit
        // stays the default weight even when the selected day is also `today`
        // (which sets font-medium); `!bg`/`!text` so it beats the grey today
        // circle.
        selected: cn(
          defaults.selected,
          // Kill rdp's `.rdp-selected { font-size: large; font-weight: bold }`
          // right on the cell where it is declared, so nothing can inherit it.
          "!text-sm !font-normal [&>button]:!text-sm [&>button]:!font-normal [&>button]:!bg-zinc-900 [&>button]:!text-white [&>button]:shadow-[0_4px_14px_rgba(0,0,0,0.30)] [&>button:hover]:!bg-zinc-900 dark:[&>button]:!bg-white dark:[&>button]:!text-zinc-900 dark:[&>button]:shadow-[0_4px_16px_rgba(255,255,255,0.20)] dark:[&>button:hover]:!bg-white",
        ),
        // Today (when not selected) = subtle grey circle only. No weight change
        // anywhere, so moving between days never reflows the digits.
        today: cn(
          defaults.today,
          "[&>button]:bg-black/[0.05] dark:[&>button]:bg-white/[0.10]",
        ),
        outside: cn(
          defaults.outside,
          "[&>button]:text-current/30 aria-selected:[&>button]:text-current/30",
        ),
        disabled: cn(defaults.disabled, "[&>button]:text-current/25"),
        hidden: cn(defaults.hidden, "invisible"),
        ...classNames,
      }}
      {...props}
    />
  );
}
