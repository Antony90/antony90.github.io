import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <ul className="flex grow justify-center text-white">
        <li className="list-none px-4 py-2">
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li className="list-none px-4 py-2">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
