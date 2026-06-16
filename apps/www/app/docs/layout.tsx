import { Sidebar } from "@/components/docs/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 lg:pl-[260px]">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">{children}</div>
      </main>
    </div>
  );
}
