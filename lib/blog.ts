import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type BlogMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

async function getPostData(filePath: string): Promise<{
  content: string;
  meta: BlogMeta;
}> {
  const fileContent = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContent) as any;
  const slug = path.basename(filePath).replace(/\.mdx?$/, "");
  return {
    content,
    meta: {
      slug,
      ...data,
    },
  };
}

/**
 * Retrieves all blog posts from the 'blog' directory, while parsing their metadata.
 * For use in a blog index section.
 * @returns {Promise<BlogMeta[]>} - A promise that resolves to an array of blog metadata objects.
 */
export async function getAllPosts(): Promise<BlogMeta[]> {
  const blogDir = path.join(process.cwd(), "blog");
  const files = await fs.readdir(blogDir);

  const postMetaData = await Promise.all(
    files
      .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
      .map(async (fileName) => {
        const filePath = path.join(blogDir, fileName);
        const { meta } = await getPostData(filePath);
        return meta;
      }),
  );

  return postMetaData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPostBySlug(slug: string): Promise<{
  meta: BlogMeta;
  content: string;
}> {
  // Check if the slug points to a md or mdx file
  const blogDir = path.join(process.cwd(), "blog");
  const filePath = [`${slug}.mdx`, `${slug}.md`]
    .map((file) => path.join(blogDir, file))
    .find(async (file) => {
      try {
        await fs.access(file);
        return true;
      } catch {
        return false;
      }
    });

  if (!filePath) {
    throw new Error(`Post with slug "${slug}" not found.`);
  }

  return await getPostData(filePath);
}
