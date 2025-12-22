import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import AnimatedBackground from "../../components/animated-background";
import Footer from "../../components/footer";
import Header from "../../components/header";

import { sanityFetch } from "../../lib/sanity/fetch";
import { blogPostsCountQuery, blogPostsQuery } from "../../lib/sanity/queries";
import { getImageUrl } from "../../lib/sanity/image";
import type { BlogPost } from "../../lib/sanity/types";

export const metadata: Metadata = {
  title: "Blog | Your Name",
  description: "Writing on cloud, infrastructure, and engineering.",
  openGraph: {
    type: "website",
    url: "https://yourdomain.com/blog",
    title: "Blog | Your Name",
    description: "Writing on cloud, infrastructure, and engineering.",
  },
};

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
}

function getStringParam(value: string | string[] | undefined) {
  if (typeof value === "string") return value;
  return undefined;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>> | Record<string, string | string[] | undefined>;
}) {
  const sp = (await searchParams) ?? {};
  const activeTag = getStringParam(sp.tag);
  const pageParam = getStringParam(sp.page);
  const pageSize = 12;
  const currentPage = Math.max(1, Number.parseInt(pageParam ?? "1", 10) || 1);

  const tagParams = activeTag ? { tagFilter: activeTag } : {};

  let total = 0;
  try {
    total =
      (await sanityFetch<number>({
        query: blogPostsCountQuery,
        params: tagParams,
        tags: ["blog-posts"],
      }).catch(() => 0)) ?? 0;
  } catch {
    total = 0;
  }

  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const offset = (safePage - 1) * pageSize;

  let items: BlogPost[] = [];
  try {
    items =
      (await sanityFetch<BlogPost[]>({
        query: blogPostsQuery,
        params: { offset, pageSize, ...tagParams },
        tags: ["blog-posts"],
      }).catch(() => [])) ?? [];
  } catch {
    items = [];
  }

  const allTags = Array.from(
    new Set(
      items
        .flatMap((p) => p.tags)
        .map((t) => t.trim())
        .filter(Boolean),
    ),
  ).sort((a, b) => a.localeCompare(b));

  const buildHref = (nextTag: string | undefined, nextPage: number | undefined) => {
    const params = new URLSearchParams();
    if (nextTag) params.set("tag", nextTag);
    if (nextPage && nextPage > 1) params.set("page", String(nextPage));
    const qs = params.toString();
    return qs ? `/blog?${qs}` : "/blog";
  };

  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />

      <div className="relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary font-mono">06.</span> Blog
            </h1>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Notes on cloud, systems, and building reliable software.
            </p>
          </header>

          {allTags.length > 0 ? (
            <div className="flex flex-wrap gap-2 mb-8">
              <Link
                href={buildHref(undefined, 1)}
                className={[
                  "px-3 py-1 text-xs rounded-full border transition-colors",
                  !activeTag
                    ? "bg-primary/10 text-primary border-primary/20"
                    : "bg-secondary/50 text-muted-foreground border-border hover:text-primary",
                ].join(" ")}
              >
                All
              </Link>
              {allTags.map((tag) => (
                <Link
                  key={tag}
                  href={buildHref(tag, 1)}
                  className={[
                    "px-3 py-1 text-xs rounded-full border transition-colors",
                    activeTag === tag
                      ? "bg-primary/10 text-primary border-primary/20"
                      : "bg-secondary/50 text-muted-foreground border-border hover:text-primary",
                  ].join(" ")}
                >
                  {tag}
                </Link>
              ))}
            </div>
          ) : null}

          {items.length === 0 ? (
            <p className="text-muted-foreground">No blog posts available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((post) => (
                <article
                  key={post._id}
                  className="bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
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

                  <h2 className="text-xl font-semibold mb-2 text-foreground">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

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

                  {post.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((t) => (
                        <span
                          key={`${post._id}-${t}`}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          )}

          {totalPages > 1 ? (
            <div className="mt-10 flex items-center justify-between">
              <Link
                href={buildHref(activeTag, Math.max(1, safePage - 1))}
                aria-disabled={safePage <= 1}
                className={[
                  "px-4 py-2 rounded-md border transition-colors",
                  safePage <= 1
                    ? "text-muted-foreground border-border/60 pointer-events-none"
                    : "text-foreground border-border hover:border-primary/50",
                ].join(" ")}
              >
                Previous
              </Link>

              <p className="text-sm text-muted-foreground">
                Page {safePage} of {totalPages}
              </p>

              <Link
                href={buildHref(activeTag, Math.min(totalPages, safePage + 1))}
                aria-disabled={safePage >= totalPages}
                className={[
                  "px-4 py-2 rounded-md border transition-colors",
                  safePage >= totalPages
                    ? "text-muted-foreground border-border/60 pointer-events-none"
                    : "text-foreground border-border hover:border-primary/50",
                ].join(" ")}
              >
                Next
              </Link>
            </div>
          ) : null}
        </div>
      </div>

      <Footer />
    </main>
  );
}
