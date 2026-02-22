import Link from "next/link";
import { getJournalEntry, getAllJournalSlugs } from "@/lib/journal";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllJournalSlugs().map((slug) => ({ slug }));
}

export default function JournalEntry({
  params,
}: {
  params: { slug: string };
}) {
  const entry = getJournalEntry(params.slug);
  if (!entry) notFound();

  return (
    <div>
      <p className="muted" style={{ marginBottom: "0.25rem" }}>
        <Link href="/journal">&larr; journal</Link>
      </p>
      <h1>{entry.title}</h1>
      <p className="item-date">{entry.date}</p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: entry.content }} />
    </div>
  );
}
