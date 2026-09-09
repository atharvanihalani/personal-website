import type { Metadata } from "next";
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
          {children}
        </div>
      </body>
    </html>
  );
}
