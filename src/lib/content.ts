import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type ContentMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  [key: string]: unknown;
};

export type ContentEntry = ContentMeta & {
  content: string;
};

function getDir(type: string) {
  return path.join(contentDir, type);
}

export function getAllSlugs(type: string): string[] {
  const dir = getDir(type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getAllEntries(type: string): ContentMeta[] {
  const dir = getDir(type);
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const entries = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
    const { data } = matter(raw);

    return {
      ...data,
      slug,
      title: (data.title as string) ?? slug,
      date: data.date ? String(data.date).slice(0, 10) : "",
      description: (data.description as string) ?? undefined,
    };
  });

  return entries.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getEntry(
  type: string,
  slug: string
): ContentEntry | null {
  const dir = getDir(type);

  let filePath = path.join(dir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(dir, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    ...data,
    slug,
    title: (data.title as string) ?? slug,
    date: data.date ? String(data.date).slice(0, 10) : "",
    description: (data.description as string) ?? undefined,
    content,
  };
}
