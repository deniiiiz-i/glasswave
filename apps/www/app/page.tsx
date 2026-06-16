import { Button } from "glasswave";
import {
  ArrowRight,
  Atom,
  BookOpen,
  Layers,
  Triangle,
  Wind,
} from "lucide-react";
import Link from "next/link";
import { HomeShowcase } from "@/components/home-showcase";
import { getLibraryVersion } from "@/lib/version";

const frameworks = [
  { icon: Atom, label: "React" },
  { icon: Triangle, label: "Next.js" },
  { icon: Layers, label: "Radix" },
  { icon: Wind, label: "Tailwind v4" },
];

export default function Home() {
  const version = getLibraryVersion();

  return (
    <main className="relative z-10 mx-auto w-[min(1120px,calc(100%-3rem))] px-0 pt-16 pb-24">
      <div className="grid items-center gap-12 lg:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:min-h-[540px]">
        {/* Left: copy */}
        <div className="flex flex-col items-start gap-6">
          <span className="gw-reveal d1 inline-flex items-center gap-2.5 rounded-full border border-slate-200 dark:border-white/15 bg-white/60 dark:bg-white/[0.06] py-1.5 pl-2 pr-3.5 text-[13px] font-medium text-slate-600 dark:text-white/60">
            <span className="size-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(52,199,89,0.8)]" />
            <span className="rounded-full bg-blue-500/15 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:text-blue-300">
              v{version}
            </span>
            Now with 30+ glass components
          </span>

          <h1 className="gw-reveal d2 text-5xl md:text-[68px] font-extrabold tracking-[-0.035em] leading-[1.02] text-slate-900 dark:text-white">
            Build interfaces
            <br />
            that feel like <span className="gw-glass-text">glass</span>
          </h1>

          <p className="gw-reveal d3 max-w-[480px] text-lg md:text-[19px] leading-relaxed text-slate-600 dark:text-white/60">
            A glassmorphism component library for React and Next.js. Beautiful,
            accessible, and built on Radix primitives with Tailwind v4.
          </p>

          <div className="gw-reveal d4 flex flex-wrap gap-3">
            <Link href="/docs">
              <Button
                size="lg"
                className="inline-flex items-center justify-center gap-2"
              >
                <ArrowRight className="size-[18px]" /> Get Started
              </Button>
            </Link>
            <Link href="/docs/components">
              <Button
                variant="secondary"
                size="lg"
                className="inline-flex items-center justify-center gap-2"
              >
                <BookOpen className="size-[18px]" /> Browse Components
              </Button>
            </Link>
          </div>

          <div className="gw-reveal d5 mt-1.5 flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-[0.04em] text-slate-400 dark:text-white/40">
              Works with
            </span>
            {frameworks.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/12 bg-white/50 dark:bg-white/5 px-2.5 py-1 text-[13px] font-medium text-slate-600 dark:text-white/60"
              >
                <Icon className="size-3.5" /> {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: live showcase */}
        <div className="gw-reveal d3">
          <HomeShowcase />
        </div>
      </div>
    </main>
  );
}
