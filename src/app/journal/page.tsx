import Link from "next/link";
import { getAllEntries } from "@/lib/content";

export default function Journal() {
  const entries = getAllEntries("journal");

  return (
    <div>
      <h1>journal</h1>
      <p className="muted">{"{your journal description here}"}</p>

      <hr />

      {entries.length === 0 ? (
        <p className="muted">nothing here yet.</p>
      ) : (
        entries.map((entry) => (
          <div className="item" key={entry.slug}>
            <div className="item-title">
              <Link href={`/journal/${entry.slug}`}>{entry.title}</Link>
            </div>
            <div className="item-date">{entry.date}</div>
          </div>
        ))
      )}
    </div>
  );
}
