import fs from "fs/promises";
import matter from "gray-matter";
import { MDXContent } from "mdx/types";
import path from "path";
import readingTimeFn from "reading-time";

/**
 * Metadata for the frontmatter of a blog post.
 */
export type BlogMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
};

// Cache the reading time calculation to avoid recalculating for both the blog post page and the blog index page.
const readingTimeCache = new Map<string, string>();

const BLOG_DIR = path.join(process.cwd(), "blog");

/**
 * Retrieves all data for a blog post, including content, metadata, and the MDX component.
 * @param slug - The slug of the blog post.
 * @returns {Promise<{ content: string; meta: BlogMeta; Post?: MDXContent }>} - The content, metadata, and optionally the MDX component.
*/
export async function getBlogPostData(slug: string): Promise<{ meta: BlogMeta; Post: MDXContent }> {
  const fileName = `${slug}.mdx`;
  const filePath = path.join(BLOG_DIR, fileName);
  
  // Load the MDX component and its frontmatter
  const postModule = await import(`@/blog/${slug}.mdx`);
  const Post = postModule.default as MDXContent;
  const meta = postModule.frontmatter as BlogMeta;
  
  // Get the reading time from the cache or calculate it
  let readingTime: string;
  if (!readingTimeCache.has(slug)) {
    // Read the raw MDX content before its loaded as a component
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { content } = matter(fileContent);

    const { minutes } = readingTimeFn(content);
    readingTime = `${minutes.toFixed(0)} min read`;
    readingTimeCache.set(slug, readingTime);
    
  } else {
    readingTime = readingTimeCache.get(slug) as string;
  }

  meta.readingTime = readingTime;
  meta.slug = slug; // This isn't part of the frontmatter, but we need it for the URL in the index page.

  return { meta, Post };
}

/**
 * Retrieves the list of blog files in the blog directory.
 * @returns {Promise<string[]>} - An array of blog file names.
 */
async function getBlogFiles(): Promise<string[]> {
  const files = await fs.readdir(BLOG_DIR);
  return files.filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"));
}

/**
 * Retrieves all blog posts from the 'blog' directory, while parsing their metadata.
 * @returns {Promise<BlogMeta[]>} - A promise that resolves to an array of blog metadata objects.
 */
export async function getAllPosts(): Promise<BlogMeta[]> {
  const files = await getBlogFiles();

  const postMetaData = await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx?$/, ""); // Remove file extensions
      const { meta } = await getBlogPostData(slug);
      return meta;
    }),
  );

  return postMetaData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/**
 * Retrieves the list of slugs for all blog posts in the 'blog' directory.
 * @returns {Promise<string[]>} - A promise that resolves to an array of slugs.
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const files = await getBlogFiles();
  return files.map((fileName) => fileName.replace(/\.mdx?$/, "")); // Remove file extensions
}

