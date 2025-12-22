import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import { getImageUrl } from "../lib/sanity/image";
import type { BlogPost } from "../lib/sanity/types";

const cardClassName =
  "bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300";

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
}

export default function BlogPreview({ posts }: { posts: BlogPost[] }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          <span className="text-primary font-mono">06.</span> Blog
        </h2>

        <Link
          href="/blog"
          className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          View All Posts
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No blog posts available.</p>
        ) : (
          posts.map((post) => (
            <article key={post._id} className={cardClassName}>
              {post.coverImage ? (
                <Image
                  src={getImageUrl(post.coverImage, 600, 400)}
                  alt={`${post.title} cover image`}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg object-cover mb-4 bg-secondary/30"
                  sizes="(min-width: 768px) 600px, 100vw"
                />
              ) : null}

              <h3 className="text-xl font-semibold mb-2 text-foreground">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h3>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-3">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  {formatDate(post.publishedAt)}
                </span>
                {post.readTime ? (
                  <span className="inline-flex items-center gap-2">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    {post.readTime}
                  </span>
                ) : null}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Read more
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
