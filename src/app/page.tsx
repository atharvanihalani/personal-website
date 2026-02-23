import fs from "fs";
import path from "path";
import MDXContent from "@/components/mdx-content";

export default function Home() {
  const source = fs.readFileSync(
    path.join(process.cwd(), "content/home.mdx"),
    "utf-8"
  );

  return (
    <div>
      <h1>atharva</h1>
      <MDXContent source={source} />
    </div>
  );
}
