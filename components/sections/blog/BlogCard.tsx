import Card from "@/components/ui/Card";
import { HeadingUnderline } from "@/components/ui/HeadingUnderline";
import { BlogMeta } from "@/lib/blog";
import Link from "next/link";

export default function BlogCard({ slug, title, description, date, readingTime}: BlogMeta) {
  return (
    <Link
            key={slug}
            href={`/${slug}`}
            className=""
            aria-label={`Read more about ${title}`}
          >
            <Card className="group flex flex-col gap-4" hover>
              {/* Title */}
              <header className="relative w-fit">
                <h2 className="text-lg font-semibold">
                  {title}
                </h2>
                <HeadingUnderline />
              </header>

              <p className="line-clamp-3 grow text-muted group-hover:text-primary">
                {description}
              </p>
              <footer className="flex flex-wrap items-center gap-4 text-sm text-muted/50 group-hover:text-muted">
                <span>{new Date(date).toLocaleDateString(undefined, { year: '2-digit', month: 'short', day: 'numeric' })}</span>
                <span>•</span>
                <span>{readingTime}</span>
              </footer>
            </Card>
          </Link>
  )
}