import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

import AnimatedBackground from "../../../components/animated-background";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import { portableTextComponents } from "../../../components/portable-text-components";

import { sanityFetch } from "../../../lib/sanity/fetch";
import { blogPostBySlugQuery, blogPostSlugsQuery } from "../../../lib/sanity/queries";
import { getImageUrl } from "../../../lib/sanity/image";
import type { BlogPostDetail } from "../../../lib/sanity/types";

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
}

async function fetchPost(slug: string) {
  return sanityFetch<BlogPostDetail | null>({
    query: blogPostBySlugQuery,
    params: { slug },
    tags: ["blog-post", slug],
  }).catch(() => null);
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>({ query: blogPostSlugsQuery, tags: ["blog-posts"] }).catch(
    () => [],
  );

  return (slugs ?? [])
    .filter(Boolean)
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolved = await params;
  const slug = resolved?.slug;
  if (!slug) return {};

  const post = await fetchPost(slug);
  if (!post) return {};

  const ogImage = post.coverImage ? getImageUrl(post.coverImage, 1200, 630) : undefined;

  return {
    title: `${post.title} | Your Name`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `https://yourdomain.com/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      tags: post.tags,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: post.title,
      description: post.excerpt,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = await params;
  const slug = resolved?.slug;
  if (!slug) notFound();

  const post = await fetchPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />

      <article className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/blog"
          className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Blog
        </Link>

        <header className="mb-10">
          {post.coverImage ? (
            <Image
              src={getImageUrl(post.coverImage, 1200, 600)}
              alt={`${post.title} cover image`}
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl mb-8 shadow-2xl object-cover bg-secondary/30"
              sizes="(min-width: 1024px) 896px, 100vw"
              priority
            />
          ) : null}

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
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
            {post.tags.length > 0 ? (
              <span className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={`${post._id}-${t}`}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </span>
            ) : null}
          </div>
        </header>

        <section>
          <PortableText value={post.content} components={portableTextComponents} />
        </section>
      </article>

      <Footer />
    </main>
  );
}
