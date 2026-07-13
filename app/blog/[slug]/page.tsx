import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WaveDivider } from "@/components/wave-divider";
import { getPostBySlug, posts } from "@/lib/blog";

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

  return {
    title: `${post.title} | Clearshore Counselling Blog`,
    description: post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-teal)_88%,white)_0%,var(--color-teal)_65%)] px-4 py-20 text-center text-white sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            {post.category}
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
            {post.title}
          </h1>
        </div>
        <WaveDivider className="absolute inset-x-0 bottom-0 translate-y-px text-white" />
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mt-4 text-ink/90 first:mt-0">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
