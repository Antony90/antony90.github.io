import Section from "@/components/sections/Section";
import Card from "@/components/ui/Card";
import { getAllPostSlugs, getBlogPostData } from "@/lib/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta } = await getBlogPostData(slug);

  return {
    title: "Blog - " + meta.title,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { Post, meta } = await getBlogPostData(slug);

  return (
    <Section
      className="h-max! w-fit! grow sm:p-6 px-0"
      headingText={`Blog post: ${meta.title}`}
      hideHeading
    >
      <div className="flex h-max max-w-3xl flex-col gap-6">
        <Card className="flex h-max flex-col">
          <header>
            <p className="text-muted/60 text-sm">{slug}</p>
            <h1 className="mb-2 text-4xl font-bold text-balance">
              {meta.title}
            </h1>
            <p className="text-muted/80 text-sm">
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

          <div className="w-full">
            <p className="text-primary/80">{meta.description}</p>
            {/* <hr className="border-muted/20 my-6" /> */}
          </div>
        </Card>

        <Card className="">
          <Post />
        </Card>
      </div>
    </Section>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}
