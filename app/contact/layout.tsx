export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-full gap-4">
      <div>{children}</div>
    </section>
  );
}
