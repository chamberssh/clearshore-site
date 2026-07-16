import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaqCategories } from "@/components/faq-categories";
import { WaveDivider } from "@/components/wave-divider";
import { faqCategories } from "@/lib/faq-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ | Clearshore Counselling, Hervey Bay QLD",
  description:
    "Answers to common questions about sessions, fees, Medicare and NDIS funding, telehealth, and what to expect from Clearshore Counselling in Hervey Bay, Queensland.",
  path: "/faq",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-teal)_88%,white)_0%,var(--color-teal)_65%)] px-4 py-20 text-center text-white sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            FAQ
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
            Answers, before you reach out
          </h1>
          <p className="mt-6 text-lg text-white/90">
            Straightforward answers about sessions, fees, telehealth and what
            to expect — so you can feel a little more at ease before we talk.
          </p>
        </div>
        <WaveDivider className="absolute inset-x-0 bottom-0 translate-y-px text-white" />
      </section>

      <section className="px-4 pt-16 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border-l-4 border-gold bg-teal/5 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal text-white">
              <PhoneCall className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-heading text-xl text-teal">
                If you need support right now
              </h2>
              <p className="mt-2 text-sm text-ink/90">
                Clearshore Counselling isn&apos;t a crisis service, and
                isn&apos;t open yet. If you&apos;re in crisis or need
                immediate support, please call{" "}
                <a href="tel:131114" className="font-medium underline underline-offset-2 hover:text-teal">
                  Lifeline on 13 11 14
                </a>
                , available 24/7, or{" "}
                <a href="tel:000" className="font-medium underline underline-offset-2 hover:text-teal">
                  000
                </a>{" "}
                in an emergency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqCategories categories={faqCategories} />

      <section className="px-4 py-20 text-center sm:px-6">
        <div className="mx-auto max-w-xl">
          <h2 className="font-heading text-3xl text-teal">
            Still have a question?
          </h2>
          <p className="mt-4 text-ink/90">
            I&apos;m glad to answer anything that isn&apos;t covered here —
            get in touch and I&apos;ll reply directly.
          </p>
          <div className="mt-8">
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              size="lg"
              className="bg-gold text-ink hover:bg-gold/90"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
