import Link from "next/link";
import { getEntry, getAllSlugs } from "@/lib/content";
import { notFound } from "next/navigation";
import MDXContent from "@/components/mdx-content";

export function generateStaticParams() {
  return getAllSlugs("journal").map((slug) => ({ slug }));
}

export default function JournalEntry({
  params,
}: {
  params: { slug: string };
}) {
  const entry = getEntry("journal", params.slug);
  if (!entry) notFound();

  return (
    <div>
      <p className="muted" style={{ marginBottom: "0.25rem" }}>
        <Link href="/journal">&larr; journal</Link>
      </p>
      <h1>{entry.title}</h1>
      <p className="item-date">{entry.date}</p>
      <hr />
      <MDXContent source={entry.content} />
    </div>
  );
}
