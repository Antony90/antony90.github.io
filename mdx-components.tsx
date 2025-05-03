import type { MDXComponents } from "mdx/types";
import Heading from "./components/ui/Heading";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Customize built in elements from markdown
    h1: ({ children }) => <Heading>{children}</Heading>,
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
