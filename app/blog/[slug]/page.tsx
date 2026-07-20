import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveDivider } from "@/components/wave-divider";
import { HeroMotif } from "@/components/hero-motif";
import { ShelleyAvatar } from "@/components/shelley-avatar";
import { getPostBySlug, posts } from "@/lib/blog";
import { getServiceByBlogCategory } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return pageMetadata({
    title: `${post.title} | Clearshore Counselling Blog`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function readingTimeMinutes(content: string) {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const relatedService = getServiceByBlogCategory(post.category);
  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  const url = `https://clearshorecounselling.com/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `https://clearshorecounselling.com/blog/${post.slug}/opengraph-image`,
    author: {
      "@type": "Person",
      "@id": "https://clearshorecounselling.com/about#shelley",
      name: "Shelley Bentley",
      url: "https://clearshorecounselling.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Clearshore Counselling",
      logo: {
        "@type": "ImageObject",
        url: "https://clearshorecounselling.com/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-teal)_88%,white)_0%,var(--color-teal)_65%)] px-4 py-20 text-center text-white sm:px-6 sm:py-28">
        <HeroMotif className="absolute inset-0 h-full w-full" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            {post.category}
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-sm text-white/80">
            By Shelley Bentley &middot;{" "}
            <time dateTime={post.date}>{formatDate(post.date)}</time> &middot;{" "}
            {readingTimeMinutes(post.content)} min read
          </p>
        </div>
        <WaveDivider className="absolute inset-x-0 bottom-0 translate-y-px text-white" />
      </section>

      <section className="bg-soft-teal/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl rounded-3xl border border-soft-teal/40 bg-white p-8 shadow-sm sm:p-12">
          {post.content.split("\n\n").map((paragraph, index) => {
            const heading = paragraph.match(/^\*\*(.+)\*\*$/);
            if (heading) {
              return (
                <h2
                  key={index}
                  className="mt-10 font-heading text-2xl text-teal first:mt-0"
                >
                  {heading[1]}
                </h2>
              );
            }
            return (
              <p key={index} className="mt-4 text-ink/90 first:mt-0">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Author */}
        <div className="mx-auto mt-8 flex max-w-2xl items-center gap-5 rounded-3xl border border-soft-teal/40 bg-white p-6 shadow-sm sm:p-8">
          <ShelleyAvatar className="size-20 shrink-0 sm:size-24" />
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              Written by
            </p>
            <p className="mt-1 font-heading text-xl text-ink">
              Shelley Bentley
            </p>
            <p className="mt-1 text-sm text-ink/80">
              Counsellor in Hervey Bay, QLD — former teacher, former Child
              Safety Officer, and organiser of the Hervey Bay Walk to
              Remember.{" "}
              <Link
                href="/about"
                className="font-medium text-teal underline underline-offset-2"
              >
                Read Shelley&apos;s story
              </Link>
            </p>
          </div>
        </div>

        {/* Related service */}
        {relatedService && (
          <div className="mx-auto mt-8 max-w-2xl rounded-3xl border-l-4 border-gold bg-white p-6 text-center shadow-sm sm:p-8">
            <h2 className="font-heading text-2xl text-teal">
              Support with {relatedService.kicker.toLowerCase()}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-ink/80">
              {relatedService.shortDescription}
            </p>
            <div className="mt-5">
              <Button
                render={<Link href={`/services/${relatedService.slug}`} />}
                nativeButton={false}
                variant="outline"
                className="border-teal text-teal hover:bg-teal hover:text-white"
              >
                About {relatedService.name}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        )}

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mx-auto mt-12 max-w-2xl">
            <h2 className="text-center font-heading text-2xl text-teal">
              Keep reading
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group rounded-3xl border border-soft-teal/40 bg-white p-6 shadow-sm transition-colors hover:border-teal"
                >
                  <h3 className="font-heading text-lg text-ink">
                    {related.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
                    Read article
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
