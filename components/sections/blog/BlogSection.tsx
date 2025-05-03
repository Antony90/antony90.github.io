import Heading from "@/components/ui/Heading";
import { HeadingUnderline } from "@/components/ui/HeadingUnderline";
import Section from "@/components/sections/Section";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default async function BlogSection() {
  const posts = await getAllPosts();

  return (
    <Section
      label="Blog"
      color="red"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.slug}`}
            className="group flex flex-col gap-4 p-6 bg-zinc-800 rounded-lg shadow-md"
            aria-label={`Read more about ${post.title}`}
          >
            {/* Title */}
            <Heading className="relative w-fit">
              {post.title}
              <HeadingUnderline color="red" />
            </Heading>
            {/* Description */}
            <p className="text-gray-400 grow group-hover:text-gray-200 line-clamp-3">
              {post.description}
            </p>
            {/* Metadata */}
            <div className="flex justify-between items-center text-sm text-gray-500 group-hover:text-gray-300">
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}