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

  const github = entry.github as string | undefined;
  const url = entry.url as string | undefined;
  const stack = entry.stack as string[] | undefined;

  return (
    <div>
      <p className="muted" style={{ marginBottom: "0.25rem" }}>
        <Link href="/projects">&larr; projects</Link>
      </p>
      <h1>{entry.title}</h1>
      {entry.description && <p className="muted">{entry.description}</p>}
      <div style={{ fontSize: "14px", color: "#666", marginBottom: "0.5rem" }}>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener"
            style={{ marginRight: "1rem" }}
          >
            github
          </a>
        )}
        {url && (
          <a href={url} target="_blank" rel="noopener">
            live
          </a>
        )}
      </div>
      {stack && (
        <p className="item-date">
          {stack.join(", ")}
        </p>
      )}
      <hr />
      <MDXContent source={entry.content} />
    </div>
  );
}
