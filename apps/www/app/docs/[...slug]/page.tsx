import fs from "fs";
import matter from "gray-matter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import { getMDXComponents } from "@/components/docs/mdx-components";
import { PreviewSourceProvider } from "@/components/preview-source-context";
import * as previews from "@/components/previews";
import { getPreviewSources } from "@/lib/preview-source";
import { siteConfig } from "@/lib/site-config";

const contentDir = path.join(process.cwd(), "content");

function getContentPath(slug: string[]): string | null {
  const candidates = [
    path.join(contentDir, ...slug) + ".mdx",
    path.join(contentDir, ...slug, "index.mdx"),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

interface PageInfo {
  slug: string[];
  title: string;
}

function getAllPages(): PageInfo[] {
  const pages: PageInfo[] = [];

  function walk(dir: string, base: string[] = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    // Sort entries to ensure consistent order
    entries.sort((a, b) => {
      // index files first
      if (a.name === "index.mdx") return -1;
      if (b.name === "index.mdx") return 1;
      return a.name.localeCompare(b.name);
    });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), [...base, entry.name]);
      } else if (entry.name.endsWith(".mdx")) {
        const filePath = path.join(dir, entry.name);
        const source = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(source);

        pages.push({
          slug: [...base, entry.name.replace(/\.mdx$/, "")],
          title: data.title || entry.name.replace(/\.mdx$/, ""),
        });
      }
    }
  }

  walk(contentDir);
  return pages;
}

function getNavigation(currentSlug: string[]): {
  prev?: PageInfo;
  next?: PageInfo;
} {
  const pages = getAllPages();
  const currentPath = currentSlug.join("/");
  const currentIndex = pages.findIndex((p) => p.slug.join("/") === currentPath);

  return {
    prev: currentIndex > 0 ? pages[currentIndex - 1] : undefined,
    next: currentIndex < pages.length - 1 ? pages[currentIndex + 1] : undefined,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const filePath = getContentPath(slug);
  if (!filePath) return {};

  const source = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(source);

  const title = data.title || siteConfig.name;
  const description = data.description || siteConfig.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteConfig.url}/docs/${slug.join("/")}`,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export async function generateStaticParams() {
  const results: { slug: string[] }[] = [];

  function walk(dir: string, base: string[] = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), [...base, entry.name]);
      } else if (entry.name.endsWith(".mdx")) {
        results.push({
          slug: [...base, entry.name.replace(/\.mdx$/, "")],
        });
      }
    }
  }

  walk(contentDir);
  return results;
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const filePath = getContentPath(slug);
  if (!filePath) notFound();

  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);

  const mdxComponents = getMDXComponents();
  const { ComponentsList } = await import("@/components/components-list");

  // Wrap each preview so it carries its own source code (read off disk at
  // build time) down to ComponentPreview, enabling the Code toggle.
  const previewSources = getPreviewSources();
  const wrappedPreviews = Object.fromEntries(
    Object.entries(previews).map(([name, Preview]) => {
      const code = previewSources[name];
      if (!code) return [name, Preview];
      const Wrapped = () => (
        <PreviewSourceProvider code={code}>
          <Preview />
        </PreviewSourceProvider>
      );
      return [name, Wrapped];
    }),
  );

  // Merge components so MDX can use them
  const components = {
    ...mdxComponents,
    ...wrappedPreviews,
    ComponentsList,
  };

  const { prev, next } = getNavigation(slug);

  return (
    <article className="prose-invert min-w-0">
      {data.title && <h1 className="text-4xl font-bold mb-2">{data.title}</h1>}
      {data.description && (
        <p className="text-lg text-gray-400 mb-8">{data.description}</p>
      )}
      <MDXRemote source={content} components={components} />

      {(prev || next) && (
        <nav className="mt-14 grid grid-cols-2 gap-4 border-t border-slate-200 pt-8 dark:border-white/10">
          {prev ? (
            <Link
              href={`/docs/${prev.slug.join("/")}`}
              className="group flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white/50 p-4 transition-colors hover:border-slate-300 hover:bg-white/70 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:bg-white/[0.06]"
            >
              <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-white/50">
                <ChevronLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
                Previous
              </span>
              <span className="text-sm font-medium text-slate-900 dark:text-white">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/docs/${next.slug.join("/")}`}
              className="group flex flex-col items-end gap-1 rounded-2xl border border-slate-200 bg-white/50 p-4 text-right transition-colors hover:border-slate-300 hover:bg-white/70 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:bg-white/[0.06]"
            >
              <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-white/50">
                Next
                <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="text-sm font-medium text-slate-900 dark:text-white">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      )}
    </article>
  );
}
