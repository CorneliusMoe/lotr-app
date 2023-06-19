import { volumes } from "../../lib/data.js";
import Link from "next/link";
import Image from "next/image";

export default function TheFellowship() {
  const info = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <ul>
        <li>
          <Link href="/volumes">Volumes</Link>
        </li>
      </ul>
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      <ul>
        <li>{info.books[0].ordinal}</li>
        <li>
          <ul>
            <li> {info.books[0].title}</li>
          </ul>
        </li>{" "}
        <li>{info.books[1].ordinal}</li>
        <li>
          <ul>
            <li> {info.books[1].title}</li>
          </ul>
        </li>
      </ul>
      <Image
        src={info.cover}
        alt="the-fellowship-of-the-ring"
        width="140"
        height="230"
      />
      <footer>
        <Link href="/volumes/the-two-towers">Next Volume</Link>
      </footer>
    </>
  );
}
