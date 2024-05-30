export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-full   gap-4">
      <div className="">{children}</div>
    </section>
  );
}
