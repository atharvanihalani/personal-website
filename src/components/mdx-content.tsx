import { MDXRemote } from "next-mdx-remote/rsc";
import { ReactNode } from "react";

function Callout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        borderLeft: "3px solid #111",
        paddingLeft: "1rem",
        margin: "1.5rem 0",
        color: "#444",
        fontStyle: "italic",
      }}
    >
      {children}
    </div>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt?: string;
  caption?: string;
}) {
  return (
    <figure style={{ margin: "2rem 0" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt ?? caption ?? ""}
        style={{ maxWidth: "100%", borderRadius: "4px" }}
      />
      {caption && (
        <figcaption
          style={{ fontSize: "14px", color: "#666", marginTop: "0.5rem" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Video({ src, caption }: { src: string; caption?: string }) {
  return (
    <figure style={{ margin: "2rem 0" }}>
      <video
        src={src}
        controls
        style={{ maxWidth: "100%", borderRadius: "4px" }}
      />
      {caption && (
        <figcaption
          style={{ fontSize: "14px", color: "#666", marginTop: "0.5rem" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

const components = {
  Callout,
  Figure,
  Video,
};

export default function MDXContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
