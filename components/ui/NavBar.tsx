import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <ul className="flex grow justify-center text-white">
        <li className="list-none px-4 py-2">
          <Link href="/" className="text-lg hover:font-bold">
            Home
          </Link>
        </li>
        <li className="list-none px-4 py-2">
          <Link href="/blog" className="text-lg hover:font-bold">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
