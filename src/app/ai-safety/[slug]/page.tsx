import Link from "next/link";
import { getEntry, getAllSlugs } from "@/lib/content";
import { notFound } from "next/navigation";
import MDXContent from "@/components/mdx-content";

export function generateStaticParams() {
  return getAllSlugs("ai-safety").map((slug) => ({ slug }));
}

export default function AISafetyPost({
  params,
}: {
  params: { slug: string };
}) {
  const entry = getEntry("ai-safety", params.slug);
  if (!entry) notFound();

  return (
    <div>
      <p className="muted" style={{ marginBottom: "0.25rem" }}>
        <Link href="/ai-safety">&larr; ai safety</Link>
      </p>
      <h1>{entry.title}</h1>
      <p className="item-date">{entry.date}</p>
      <hr />
      <MDXContent source={entry.content} />
    </div>
  );
}
