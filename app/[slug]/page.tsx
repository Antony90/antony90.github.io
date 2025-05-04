import { getAllPostSlugs, getBlogPostData } from "@/lib/blog";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { Post, meta } = await getBlogPostData(slug);

  return (
    <article
      className="max-w-3xl p-6 bg-zinc-900 text-white rounded-lg shadow-lg inset-ring-1 inset-ring-zinc-400/20"
      aria-label={`Blog post: ${meta.title}`}
    >
      <header className="mb-6">
        <p className="text-sm text-gray-500">{slug}</p>
        <h1 className="text-4xl font-bold mb-2 text-balance">{meta.title}</h1>
        <p className="text-gray-400 text-sm">
          <time dateTime={meta.date}>
            {new Date(meta.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="mx-2">·</span>
          <span>{meta.readingTime}</span>
        </p>
      </header>

      <section className="mb-6">
        <p className="text-zinc-300">{meta.description}</p>
      </section>

      <hr className="border-zinc-400/20 my-6" />

      <section className="prose prose-invert max-w-none">
        <Post />
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}
