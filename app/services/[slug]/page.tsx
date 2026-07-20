import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveDivider } from "@/components/wave-divider";
import { HeroMotif } from "@/components/hero-motif";
import { getServiceBySlug, services } from "@/lib/services";
import { posts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const relatedPosts = posts
    .filter((post) => post.category === service.blogCategory)
    .slice(0, 3);

  const url = `https://clearshorecounselling.com/services/${service.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.metaDescription,
      url,
      serviceType: "Counselling",
      provider: {
        "@type": "LocalBusiness",
        name: "Clearshore Counselling",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hervey Bay",
          addressRegion: "QLD",
          addressCountry: "AU",
        },
      },
      areaServed: { "@type": "Country", name: "Australia" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

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
            {service.kicker}
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
            {service.h1}
          </h1>
          <p className="mt-6 text-lg text-white/90">{service.heroLede}</p>
        </div>
        <WaveDivider className="absolute inset-x-0 bottom-0 translate-y-px text-white" />
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          {service.intro.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-ink/90 first:mt-0">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-soft-teal/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl text-teal">
            {service.whoForTitle}&hellip;
          </h2>
          <ul className="mt-8 space-y-4">
            {service.whoFor.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-teal"
                  aria-hidden="true"
                />
                <span className="text-ink/90">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink/70">
            You don&apos;t need to tick a box to reach out — if something here
            resonates, that&apos;s enough.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl text-teal">
            {service.approachTitle}
          </h2>
          {service.approach.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-ink/90">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-soft-teal/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-3xl text-teal">
            In person or from home
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-soft-teal/40 bg-white p-7 text-center shadow-sm">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-teal text-white">
                <MapPin className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-xl text-ink">
                In-person in Hervey Bay
              </h3>
              <p className="mt-2 text-sm text-ink/80">
                Face-to-face sessions in a calm, private space, by appointment.
              </p>
            </div>
            <div className="rounded-3xl border border-soft-teal/40 bg-white p-7 text-center shadow-sm">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-teal text-white">
                <Video className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-xl text-ink">
                Telehealth, Australia-wide
              </h3>
              <p className="mt-2 text-sm text-ink/80">
                Secure video sessions wherever you are —{" "}
                <Link
                  href="/telehealth"
                  className="underline underline-offset-2 hover:text-teal"
                >
                  how telehealth works
                </Link>
                .
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-ink/70">
            See{" "}
            <Link
              href="/services#fees"
              className="underline underline-offset-2 hover:text-teal"
            >
              fees &amp; funding
            </Link>{" "}
            for session pricing, NDIS, and rebate details.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl text-teal">Common questions</h2>
          <div className="mt-8 space-y-8">
            {service.faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-heading text-xl text-ink">{faq.q}</h3>
                <p className="mt-2 text-ink/80">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink/70">
            More answers on the{" "}
            <Link
              href="/faq"
              className="underline underline-offset-2 hover:text-teal"
            >
              FAQ page
            </Link>
            .
          </p>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="bg-soft-teal/10 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-3xl text-teal">
              From the blog
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-3xl border border-soft-teal/40 bg-white p-6 shadow-sm transition-colors hover:border-teal"
                >
                  <h3 className="font-heading text-lg text-ink">
                    {post.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
                    Read article
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 py-20 text-center sm:px-6">
        <div className="mx-auto max-w-xl">
          <h2 className="font-heading text-3xl text-teal">
            When you&apos;re ready
          </h2>
          <p className="mt-4 text-ink/90">
            Clearshore Counselling opens April 2027. Join the waitlist and
            I&apos;ll be in touch personally as soon as booking begins.
          </p>
          <div className="mt-8">
            <Button
              render={<Link href="/contact#waitlist" />}
              nativeButton={false}
              size="lg"
              className="bg-gold text-ink hover:bg-gold/90"
            >
              Join the waitlist
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
