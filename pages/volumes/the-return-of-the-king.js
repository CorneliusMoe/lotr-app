import { volumes } from "../../lib/data.js";
import Link from "next/link";
import Image from "next/image";

export default function ReturnOfTheKing() {
  const info = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <>
      <ul>
        <li>
          <Link href="/volumes">Overview</Link>
        </li>
      </ul>
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      <ul>
        <li>{info.books[0].ordinal}:</li>
        <li>
          <ul>
            <li> {info.books[0].title}</li>
          </ul>
        </li>{" "}
        <li>{info.books[1].ordinal}:</li>
        <li>
          <ul>
            <li> {info.books[1].title}</li>
          </ul>
        </li>
      </ul>
      <Image
        src={info.cover}
        alt="the-return-of-the-king"
        width="140"
        height="230"
      />
      <footer>
        <Link href="/volumes/the-two-towers">Previous Volume</Link>
      </footer>
    </>
  );
}
