import Link from "next/link";
import { getAllEntries } from "@/lib/content";

export default function AISafety() {
  const entries = getAllEntries("ai-safety");

  return (
    <div>
      <h1>ai safety</h1>
      <p className="muted">{"i want to make AI go well. my relevant writings (research + essays) live here."}</p>

      <hr />

      {entries.length === 0 ? (
        <p className="muted">nothing here yet.</p>
      ) : (
        entries.map((entry) => (
          <div className="item" key={entry.slug}>
            <div className="item-title">
              <Link href={`/ai-safety/${entry.slug}`}>{entry.title}</Link>
            </div>
            <div className="item-date">{entry.date}</div>
            {entry.description && (
              <div className="item-desc">{entry.description}</div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
