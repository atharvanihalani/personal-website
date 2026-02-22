import Link from "next/link";
import { getEntry, getAllSlugs } from "@/lib/content";
import { notFound } from "next/navigation";
import MDXContent from "@/components/mdx-content";

export function generateStaticParams() {
  return getAllSlugs("essays").map((slug) => ({ slug }));
}

export default function Essay({
  params,
}: {
  params: { slug: string };
}) {
  const entry = getEntry("essays", params.slug);
  if (!entry) notFound();

  return (
    <div>
      <p className="muted" style={{ marginBottom: "0.25rem" }}>
        <Link href="/essays">&larr; essays</Link>
      </p>
      <h1>{entry.title}</h1>
      <p className="item-date">{entry.date}</p>
      <hr />
      <MDXContent source={entry.content} />
    </div>
  );
}
