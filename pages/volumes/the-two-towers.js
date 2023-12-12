import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../resources/lib/data";

export default function Volume2() {
  const volumeData = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <>
      <Link href="/volumes">Back to all volumes</Link>
      <h1>{volumeData.title}</h1>
      <p>{volumeData.description}</p>
      <ul>
        {volumeData.books.map((book) => (
          <li key={book.ordinal}>{book.title}</li>
        ))}
      </ul>
      <Image
        src={"/images/" + volumeData.slug + ".png"}
        alt={volumeData.title}
        width={140}
        height={230}
      />
    </>
  );
}
