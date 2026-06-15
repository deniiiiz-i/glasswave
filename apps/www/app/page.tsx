import { Badge, Button, Card, CardContent } from "glasswave";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-black">
      {/* Ambient glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

      <main className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto gap-10 py-20 md:py-0">
        {/* Badge */}
        <Badge variant="secondary" className="text-xs px-3 py-1">
          v0.2.2 — Now Available
        </Badge>

        {/* Hero */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Build with
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-violet-500 dark:from-blue-400 dark:via-blue-300 dark:to-violet-400 bg-clip-text text-transparent">
              Glass
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-white/50 max-w-md leading-relaxed">
            Glassmorphism UI components for React and Next.js. Beautiful,
            accessible, and built on Radix primitives with Tailwind v4.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <Link href="/docs" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
          <Link href="/docs/components" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Components
            </Button>
          </Link>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4">
          {[
            {
              icon: "✦",
              title: "Glassmorphism",
              desc: "Every component uses backdrop filters and glass aesthetics out of the box.",
            },
            {
              icon: "⬡",
              title: "Radix Primitives",
              desc: "Built on Radix UI for full accessibility and composability.",
            },
            {
              icon: "◈",
              title: "Tailwind v4",
              desc: "Zero config CSS with native dark mode using Tailwind CSS v4.",
            },
          ].map((f) => (
            <Card key={f.title}>
              <CardContent className="p-5 text-left flex flex-col gap-2">
                <span className="text-blue-500 dark:text-blue-400 text-lg">
                  {f.icon}
                </span>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">
                  {f.title}
                </p>
                <p className="text-slate-600 dark:text-white/50 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
