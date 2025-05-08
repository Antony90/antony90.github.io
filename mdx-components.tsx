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
          <table className="overflow-hidden  my-2 rounded-lg ring-1 ring-accent/50 w-full border-collapse border-spacing-0 text-left text-sm">
            {children}
          </table>
          {caption && (
            <figcaption className="text-muted/70 mt-2 text-center text-sm">
              {caption}
            </figcaption>
          )}
        </figure>
    ),
    Thead: ({ children }) => (
      <thead className="bg-section text-primary/80">
        {children}
      </thead>
    ),
    Tbody: ({ children }) => (
      <tbody>{children}</tbody>
    ),
    Tr: ({ children }) => (
      <tr className="transition-colors even:bg-section/80 even:dark:bg-section/60">{children}</tr>
    ),
    Th: ({ children }) => (
      <th className="px-4 py-2 font-semibold text-primary border-b border-muted/30">
        {children}
      </th>
    ),
    Td: ({ children }) => (
      <td className="px-4 py-2 text-primary/90 border-b border-muted/30">
        {children}
      </td>
    ),
    a: ({ children, href }) => (

<Link
  href={href}
  className="relative inline-flex items-center text-accent group before:bg-accent before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:transition-[width] before:duration-200 before:content-[''] hover:before:w-full"
  target="_blank"
  rel="noopener noreferrer"
>
  {children}
  <FiExternalLink
    className="absolute left-full bg-background backdrop-blur-sm p-[5px] ml-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md w-6 h-6 text-accent pointer-events-none"
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
