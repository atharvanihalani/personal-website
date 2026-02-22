import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const journalDir = path.join(process.cwd(), "content/journal");

export type JournalEntry = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

export function getAllJournalEntries(): Omit<JournalEntry, "content">[] {
  if (!fs.existsSync(journalDir)) return [];

  const files = fs.readdirSync(journalDir).filter((f) => f.endsWith(".md"));

  const entries = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(journalDir, filename), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ? String(data.date).slice(0, 10) : "",
    };
  });

  return entries.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getJournalEntry(slug: string): JournalEntry | null {
  const filePath = path.join(journalDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ? String(data.date).slice(0, 10) : "",
    content: marked.parse(content, { async: false }) as string,
  };
}

export function getAllJournalSlugs(): string[] {
  if (!fs.existsSync(journalDir)) return [];
  return fs
    .readdirSync(journalDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
