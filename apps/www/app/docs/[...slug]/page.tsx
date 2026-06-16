import fs from "fs";
import { Button } from "glasswave";
import matter from "gray-matter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import { getMDXComponents } from "@/components/docs/mdx-components";
import * as previews from "@/components/previews";
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

  // Merge components so MDX can use them
  const components = { ...mdxComponents, ...previews, ComponentsList };

  const { prev, next } = getNavigation(slug);

  return (
    <article className="prose-invert min-w-0">
      {data.title && <h1 className="text-4xl font-bold mb-2">{data.title}</h1>}
      {data.description && (
        <p className="text-lg text-gray-400 mb-8">{data.description}</p>
      )}
      <MDXRemote source={content} components={components} />

      {/* Navigation */}
      {/* <nav className="flex items-center justify-between gap-8 mt-12 pt-8">
        {prev ? (
          <Link href={`/docs/${prev.slug.join("/")}`}>
            <Button variant="secondary" size="md" className="group">
              <span className="flex items-center gap-2">
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform shrink-0" />
                <span className="flex flex-col text-left">
                  <span className="text-xs text-gray-500">Previous</span>
                  <span className="text-sm font-medium">{prev.title}</span>
                </span>
              </span>
            </Button>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link href={`/docs/${next.slug.join("/")}`}>
            <Button variant="secondary" size="md" className="group">
              <span className="flex items-center gap-2">
                <span className="flex flex-col text-right">
                  <span className="text-xs text-gray-500">Next</span>
                  <span className="text-sm font-medium">{next.title}</span>
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </span>
            </Button>
          </Link>
        ) : (
          <div />
        )}
      </nav> */}
    </article>
  );
}
