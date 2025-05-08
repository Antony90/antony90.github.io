import Section from "@/components/sections/Section";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "./BlogCard";

export default async function BlogSection() {
  const posts = await getAllPosts();

  return (
    <Section headingText="Blog" label="blog">
      <p className="text-primary/80">My focused thoughts on tech that I admire, and code that works well.</p>
      <div className="flex max-w-[900px] flex-col gap-6">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            {...post}
          />
        ))}
      </div>
    </Section>
  );
}
