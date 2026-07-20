import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, GraduationCap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveDivider } from "@/components/wave-divider";
import { HeroMotif } from "@/components/hero-motif";
import { posts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog | Clearshore Counselling, Hervey Bay QLD",
  description:
    "Articles on grief and loss, educator wellbeing, trauma-informed support, anxiety, parenting, and telehealth counselling from Clearshore Counselling, Hervey Bay, Queensland.",
  path: "/blog",
});

const upcomingTopics = [
  {
    icon: HeartHandshake,
    title: "Grief & Loss",
    description:
      "Gentle, honest writing on pregnancy loss, infant loss, child bereavement, and living alongside grief.",
  },
  {
    icon: GraduationCap,
    title: "Educator Wellbeing",
    description:
      "Support for teachers and school staff navigating burnout, compassion fatigue, and career transitions.",
  },
  {
    icon: Shield,
    title: "Trauma-Informed Support",
    description:
      "Practical, trauma-informed perspectives for anyone carrying the effects of a hard season.",
  },
];

export default function Blog() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-teal)_88%,white)_0%,var(--color-teal)_65%)] px-4 py-20 text-center text-white sm:px-6 sm:py-28">
        <HeroMotif className="absolute inset-0 h-full w-full" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Blog
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
            Writing on grief, family, and life&apos;s hardest seasons
          </h1>
          <p className="mt-6 text-lg text-white/90">
            {posts.length === 0
              ? "Articles are coming as Clearshore Counselling opens in April 2027 — in the meantime, here's what I'll be writing about."
              : "Gentle, honest writing while Clearshore Counselling gets ready to open in April 2027."}
          </p>
        </div>
        <WaveDivider className="absolute inset-x-0 bottom-0 translate-y-px text-white" />
      </section>

      {posts.length === 0 ? (
        <section className="bg-soft-teal/10 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:grid-cols-3">
              {upcomingTopics.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-soft-teal/40 bg-white p-7 text-center shadow-sm"
                >
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-teal text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 font-heading text-xl text-ink">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm text-ink/80">{description}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-3xl border-l-4 border-gold bg-teal/5 p-8 text-center sm:p-10">
              <h2 className="font-heading text-2xl text-teal">
                Want to know when new articles land?
              </h2>
              <p className="mt-3 text-ink/90">
                Join the waitlist and I&apos;ll let you know when the blog —
                and booking — go live.
              </p>
              <div className="mt-6">
                <Button
                  render={<Link href="/contact#waitlist" />}
                  nativeButton={false}
                  className="bg-gold text-ink hover:bg-gold/90"
                >
                  Join the waitlist
                </Button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-soft-teal/10 px-4 py-20 sm:px-6">
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-3xl border border-soft-teal/40 bg-white p-7 shadow-sm transition-colors hover:border-teal"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                  {post.category}
                </p>
                <h2 className="mt-3 font-heading text-xl text-ink">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-ink/80">{post.description}</p>
                <p className="mt-3 text-xs text-ink/60">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-AU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
