import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "atharva",
  description: "personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <nav style={{ marginBottom: "2rem" }}>
            <Link href="/">home</Link>
            <Link href="/projects">projects</Link>
            <Link href="/essays">essays</Link>
            <Link href="/ai-safety">ai safety</Link>
            <Link href="/journal">journal</Link>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
