import { DocsToc } from "@/components/docs/docs-toc";
import { Sidebar } from "@/components/docs/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-10 mx-auto grid w-[min(1280px,calc(100%-3rem))] grid-cols-1 items-start gap-8 pt-8 pb-20 lg:grid-cols-[232px_minmax(0,1fr)] xl:grid-cols-[232px_minmax(0,1fr)_200px]">
      <Sidebar />
      <main className="min-w-0 pt-1">{children}</main>
      <DocsToc />
    </div>
  );
}
