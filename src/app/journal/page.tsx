import Link from "next/link";
import { getAllJournalEntries } from "@/lib/journal";

export default function Journal() {
  const entries = getAllJournalEntries();

  return (
    <div>
      <h1>journal</h1>
      {/* TODO: add your journal description */}
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
