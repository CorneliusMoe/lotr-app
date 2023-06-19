import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data.js";

export default function Volume() {
  const router = useRouter();
  const { slug } = router.query;

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books } = currentVolume;

  return (
    <>
      <ul>
        <li>
          <Link href="/volumes">Overview</Link>
        </li>
      </ul>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book) => {
          return (
            <Fragment key={book.ordinal}>
              <li>{book.ordinal}</li>
              <ul>
                <li>{book.title}</li>
              </ul>
            </Fragment>
          );
        })}
      </ul>
      <Image src={cover} alt={title} width="140" height="230" />
      <footer>
        <Link href="/volumes/the-fellowship-of-the-ring">Previous Volume</Link>
        {" / "}
        <Link href="/volumes/the-return-of-the-king">Next Volume</Link>
      </footer>
    </>
  );
}
