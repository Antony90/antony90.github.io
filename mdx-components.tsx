import type { MDXComponents } from "mdx/types";
import Heading from "./components/ui/Heading";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Customize built in elements from markdown
    h1: ({ children }) => <h1 className="mt-4  text-white font-semibold text-3xl">{children}</h1>,
    h2: ({ children }) => <h2 className="mt-4  text-white font-semibold text-2xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-4  text-white font-semibold text-xl">{children}</h3>,
    a: ({ children, href }) => (
      <Link
        href={href}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    ),
    ...components,
  };
}
