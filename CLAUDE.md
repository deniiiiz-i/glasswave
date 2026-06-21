# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Glasswave** is a glassmorphism React component library (npm: `glasswave`). It is a pnpm monorepo with two workspaces:

- **Root (`/`)** — The publishable component library (`packages/src/`, `lib/`, `packages/index.ts`, `packages/index.css`)
- **`apps/www`** — Next.js documentation/demo site (read `apps/www/AGENTS.md` before touching Next.js code — this version has breaking changes)

## Commands

All commands use `pnpm`. Do not use npm or yarn.

### Root (library)
```bash
pnpm build        # tsc + PostCSS CSS bundle + inline CSS import into dist/packages/index.js
pnpm dev          # watch mode: tsc --watch + postcss --watch
pnpm lint         # runs lint in all workspaces
pnpm format       # runs format in all workspaces
```

### www app (`apps/www`)
```bash
pnpm dev          # Next.js dev server
pnpm build        # Next.js production build
pnpm check        # Biome lint + write fixes
pnpm format       # Biome format + write
```

### Monorepo (from root, using Turbo)
```bash
pnpm turbo build  # build all packages in dependency order
pnpm turbo lint   # lint all packages with remote caching
```

**Linting/formatting tool**: Biome v2.3.11 (single tool — no ESLint or Prettier). Config in `/biome.json`.

## Architecture

### Component Library (`/packages/src/`)

60+ components built on **Radix UI** primitives with **Tailwind CSS v4** styling.

**Patterns every component follows:**
- `"use client"` directive (all are Client Components)
- Built on a Radix UI primitive for accessibility
- Variants declared with **CVA** (`class-variance-authority`)
- Glassmorphism applied via utilities from `/lib/glass.ts`
- Classes merged with `cn()` from `/lib/cn.ts` (wraps `tailwind-merge`)
- `forwardRef` with TypeScript generics
- Support for `asChild` (Radix `Slot`) where applicable

### Glass Effect System (`/lib/glass.ts`)

Core utility strings composed into component `className`:
- `glassBase` — frosted glass: backdrop-blur, gradient overlays, border
- `glassInteractive` — adds hover/active scale transforms
- `glassGlow` — glow on hover
- `glassAnimated` — animated border
- `focusRing` — accessible focus outline
- `rounded` — consistent 32px border radius
- `textOnGlass` — text color for glass surfaces

### Shared Radix Menu Styles (`/lib/menu-classes.ts`)

Reused by Dropdown, ContextMenu, and Menubar to keep surfaces consistent.

### CSS (`/packages/index.css`)

Tailwind v4 CSS entry point with `@source` directives. Processed by PostCSS (`@tailwindcss/postcss`). At publish time, inlined into `dist/packages/index.js` via the build script.

### Documentation Site (`/apps/www`)

Next.js app consuming the library directly (transpiled via `transpilePackages: ["glasswave"]` in `next.config.ts`) — it imports from source, not the dist build, enabling HMR. Docs are MDX files rendered with `next-mdx-remote`. Code highlighting via Shiki.

## TypeScript

- **Root**: `tsconfig.json` — ES2020 target, ESNext modules, bundler resolution, strict mode, path alias `@/*` → root
- **www**: separate `tsconfig.json` with ES2017 target for Next.js

## Publishing

Only the `/dist` directory is included in the npm package (`"files": ["dist"]`). The `publishConfig` in `package.json` overrides `exports` to point at compiled dist paths.
