import Link from "next/link";
import { getEntry, getAllSlugs } from "@/lib/content";
import { notFound } from "next/navigation";
import MDXContent from "@/components/mdx-content";

export function generateStaticParams() {
  return getAllSlugs("projects").map((slug) => ({ slug }));
}

export default function Project({
  params,
}: {
  params: { slug: string };
}) {
  const entry = getEntry("projects", params.slug);
  if (!entry) notFound();

  return (
    <div>
      <p className="muted" style={{ marginBottom: "0.25rem" }}>
        <Link href="/projects">&larr; projects</Link>
      </p>
      <h1>{entry.title}</h1>
      {entry.description && <p className="muted">{entry.description}</p>}
      <hr />
      <MDXContent source={entry.content} />
    </div>
  );
}
