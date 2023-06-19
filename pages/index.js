import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to my LOTR Fan-Page</h1>
      <ul>
        <li>
          <Link href="/volumes">Volumes</Link>
        </li>
      </ul>
    </div>
  );
}
