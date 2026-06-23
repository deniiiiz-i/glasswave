/** Shared Radix menu surface styles (dropdown / context / menubar). */
export const menuContentClass =
  "z-50 min-w-[200px] overflow-hidden rounded-2xl p-1.5 shadow-xl";

export const menuItemClass =
  "relative flex w-full cursor-default select-none items-center gap-2 rounded-xl px-2.5 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-black/[0.07] dark:data-[highlighted]:bg-white/[0.12]";

export const menuLabelClass =
  "px-2.5 py-1.5 text-xs font-medium uppercase tracking-wide text-current/60";

export const menuSeparatorClass =
  "-mx-1.5 my-1 h-px bg-black/10 dark:bg-white/10";
