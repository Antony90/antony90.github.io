import type { MDXComponents } from "mdx/types";
import Heading from "./components/ui/Heading";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { FiExternalLink } from "react-icons/fi";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Customize built in elements from markdown
    h1: ({ children }) => (
      <h1 className="text-primar text-3xl font-semibold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-primary text-2xl font-semibold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-primary text-xl font-semibold">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-primary mt-2 mb-4 ml-2 font-light">{children}</p>
    ),
    Table: ({ caption, children }) => (
      <figure>
        <table className="ring-accent/50 my-2 w-full border-collapse border-spacing-0 overflow-hidden rounded-lg text-left text-sm ring-1">
          {children}
        </table>
        {caption && (
          <figcaption className="text-muted/70 mt-2 text-center text-sm">
            {caption}
          </figcaption>
        )}
      </figure>
    ),
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    blockquote: ({ children }) => (
      <blockquote className="border-accent/30 text-muted bg-muted/10 m-4 rounded-md border-l-4 p-2 pb-1 pl-4 italic shadow-sm">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="text-accent/50 mx-6 mb-4" />,
    Thead: ({ children }) => (
      <thead className="bg-section text-primary/80">{children}</thead>
    ),
    Tbody: ({ children }) => <tbody>{children}</tbody>,
    Tr: ({ children }) => (
      <tr className="even:bg-section/80 even:dark:bg-section/60 transition-colors">
        {children}
      </tr>
    ),
    Th: ({ children }) => (
      <th className="text-primary border-muted/30 border-b px-4 py-2 font-semibold">
        {children}
      </th>
    ),
    Td: ({ children }) => (
      <td className="text-primary/90 border-muted/30 border-b px-4 py-2">
        {children}
      </td>
    ),
    a: ({ children, href }) => (
      <Link
        href={href}
        className="text-accent group before:bg-accent relative inline-flex items-center before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:transition-[width] before:duration-200 before:content-[''] hover:before:w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <FiExternalLink
          className="bg-background text-accent pointer-events-none absolute top-1/2 left-full ml-1 h-6 w-6 -translate-y-1/2 rounded-md p-[5px] opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="mt-4 mb-4 ml-10 list-disc space-y-2 [&_ul]:mt-0">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-4 mb-4 ml-8 list-decimal space-y-2 [&_oul]:mt-0">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      // -mb-[0.5px]
      <li className="text-primary [&>p]:m-0">{children}</li>
    ),
    Image: ({ center, right, caption, ...props }) => (
      <figure
        className={`m-6 w-fit ${right ? "float-right" : "float-left"} ${
          center ? "float-none mx-auto" : ""
        }`}
      >
        <img
          className="ring-accent/50 rounded-lg shadow-md ring-1"
          {...(props as React.ImgHTMLAttributes<HTMLImageElement>)}
        />
        {caption && (
          <figcaption className="text-muted/70 mt-2 text-center text-sm">
            {caption}
          </figcaption>
        )}
      </figure>
    ),

    ...components,
  };
}
