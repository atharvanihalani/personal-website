import Link from "next/link";
import { getAllEntries } from "@/lib/content";

export default function Projects() {
  const entries = getAllEntries("projects");

  return (
    <div>
      <h1>projects</h1>
      <p className="muted">{"i like designing tools and systems. these are some of my creations with software."}</p>

      <hr />

      {entries.length === 0 ? (
        <p className="muted">nothing here yet.</p>
      ) : (
        entries.map((entry) => {
          const stack = entry.stack as string[] | undefined;
          return (
            <div className="item" key={entry.slug}>
              <div className="item-title">
                <Link href={`/projects/${entry.slug}`}>{entry.title}</Link>
              </div>
              {entry.description && (
                <div className="item-desc">{entry.description}</div>
              )}
              {stack && (
                <div className="item-date">{stack.join(", ")}</div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
