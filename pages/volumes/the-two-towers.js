import { volumes } from "../../lib/data.js";
import Link from "next/link";
import Image from "next/image";

export default function TwoTowers() {
  const info = volumes.find(({ slug }) => slug === "the-two-towers");

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
      <Image src={info.cover} alt="the-two-towers" width="140" height="230" />
      <footer>
        <Link href="/volumes/the-fellowship-of-the-ring">Previous Volume</Link>{" "}
        <Link href="/volumes/the-return-of-the-king">Next Volume</Link>
      </footer>
    </>
  );
}
