import { BlogMeta, getAllPosts } from "@/lib/blog";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await import(`@/blog/${slug}.mdx`);

  const Post = post.default as React.FC;
  const meta = post.frontmatter as BlogMeta;

  return (
    <section
      className="flex w-full flex-col gap-6 rounded-lg bg-zinc-900 p-6 text-white"
      aria-label="blog post"
    >
      <h1 className="text-4xl font-semibold">{meta.title}</h1>
      <p className="text-gray-400">{meta.description}</p>
      <p className="text-gray-500">
        {new Date(meta.date).toLocaleDateString()}
      </p>
      <p className="text-gray-500">{meta.slug}</p>
      {/* <p className="text-gray-500">{meta.readingTime}</p> */}
      <Post />
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map(({ slug }) => ({
    slug,
  }));
}
