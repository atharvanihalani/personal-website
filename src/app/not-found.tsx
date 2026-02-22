import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>nothing here. <Link href="/">go home</Link>.</p>
    </div>
  );
}
