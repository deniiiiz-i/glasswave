"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

const products = [
  { title: "Overview", desc: "Everything you need to know to get started." },
  { title: "Pricing", desc: "Simple, transparent plans for any team size." },
  { title: "Changelog", desc: "The latest features, fixes and improvements." },
  { title: "Integrations", desc: "Connect the tools your team already uses." },
];

export function NavigationMenuPreview() {
  return (
    <ComponentPreview label="Navigation Menu">
      {/* Tall + top-aligned so the menu keeps its natural height and the
          dropdown opens right under the trigger, inside the preview frame */}
      <div className="flex min-h-[280px] w-full max-w-2xl items-start justify-center pt-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[440px] grid-cols-2 gap-1 p-2">
                  {products.map((p) => (
                    <li key={p.title}>
                      <NavigationMenuLink
                        href="#"
                        className="block rounded-2xl p-3 transition-colors hover:bg-black/[0.05] dark:hover:bg-white/10"
                      >
                        <div className="text-sm font-medium text-current">
                          {p.title}
                        </div>
                        <p className="mt-0.5 text-xs leading-snug text-current/55">
                          {p.desc}
                        </p>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors hover:bg-black/[0.05] dark:hover:bg-white/10"
              >
                Docs
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
    </ComponentPreview>
  );
}
