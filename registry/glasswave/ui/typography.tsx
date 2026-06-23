import { cn } from "@/lib/utils";

export function TypographyH1({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tight text-current lg:text-5xl",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyH2({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b border-black/[0.08] dark:border-white/10 pb-2 text-3xl font-semibold tracking-tight text-current first:mt-0",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyH3({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight text-current",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyH4({
  className,
  ...props
}: React.ComponentProps<"h4">) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight text-current",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyP({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "leading-7 text-current/90 [&:not(:first-child)]:mt-4",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyLead({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-xl text-current/80 leading-relaxed", className)}
      {...props}
    />
  );
}

export function TypographyLarge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-lg font-semibold text-current", className)}
      {...props}
    />
  );
}

export function TypographySmall({
  className,
  ...props
}: React.ComponentProps<"small">) {
  return (
    <small
      className={cn(
        "text-sm font-medium leading-none text-current/80",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyMuted({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return <p className={cn("text-sm text-current/60", className)} {...props} />;
}

export function TypographyBlockquote({
  className,
  ...props
}: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-white/20 pl-6 italic text-current/85",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyList({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn(
        "my-6 ml-6 list-disc text-current/90 [&>li]:mt-2",
        className,
      )}
      {...props}
    />
  );
}

export function TypographyInlineCode({
  className,
  ...props
}: React.ComponentProps<"code">) {
  return (
    <code
      className={cn(
        "relative rounded-md bg-white/[0.08] px-[0.3rem] py-[0.15rem] font-mono text-sm dark:bg-white/[0.12]",
        className,
      )}
      {...props}
    />
  );
}
