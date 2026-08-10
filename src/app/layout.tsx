import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atharva Nihalani",
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
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/journal">Journal</Link>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
