import Link from "next/link";
import { getAllEntries } from "@/lib/content";

export default function Essays() {
  const entries = getAllEntries("essays");

  return (
    <div>
      <h1>essays</h1>
      <p className="muted">{"{your essays description here}"}</p>

      <hr />

      {entries.length === 0 ? (
        <p className="muted">nothing here yet.</p>
      ) : (
        entries.map((entry) => (
          <div className="item" key={entry.slug}>
            <div className="item-title">
              <Link href={`/essays/${entry.slug}`}>{entry.title}</Link>
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
