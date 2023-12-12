import Link from "next/link";
import { introduction } from "../../resources/lib/data";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes">Volumes</Link>
        </li>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            Volume 1: The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">Volume 2: The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            Volume 3: The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}
