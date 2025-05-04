import Heading from "@/components/ui/Heading";
import { HeadingUnderline } from "@/components/ui/HeadingUnderline";
import Section from "@/components/sections/Section";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default async function BlogSection() {
  const posts = await getAllPosts();

  return (
    <Section label="Blog" color="red">
      <div className="flex max-w-[900px] flex-col gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.slug}`}
            className=""
            aria-label={`Read more about ${post.title}`}
          >
            <article className="group flex flex-col gap-4 rounded-lg bg-zinc-800 p-6 inset-ring-red-400/20 transition-all select-none hover:inset-ring-1">
              {/* Title */}
              <header className="relative w-fit">
                <h2 className="text-lg font-semibold">
                  {post.title}
                </h2>
                <HeadingUnderline color="red" className="duration-300" />
              </header>

              <p className="line-clamp-3 grow text-gray-400 group-hover:text-gray-200">
                {post.description}
              </p>
              <footer className="flex flex-wrap items-center gap-4 text-sm text-gray-500 group-hover:text-gray-300">
                <span>{new Date(post.date).toLocaleDateString(undefined, { year: '2-digit', month: 'short', day: 'numeric' })}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </footer>
            </article>
          </Link>
        ))}
      </div>
    </Section>
  );
}
