import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  GraduationCap,
  Heart,
  HeartHandshake,
  Shield,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveDivider } from "@/components/wave-divider";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Clearshore Counselling | Grief & Trauma Counselling in Hervey Bay, QLD",
  description:
    "Compassionate grief, trauma and wellbeing counselling in Hervey Bay, Queensland, and by telehealth Australia-wide. Grief and loss support, educator wellbeing, and trauma-informed care with Shelley Bentley.",
});

const whoWeHelp = [
  {
    icon: Heart,
    title: "Grief & loss",
    description: "Walking with you through profound loss.",
  },
  {
    icon: Shield,
    title: "Trauma",
    description: "A safe space to process, at your own pace.",
  },
  {
    icon: Wind,
    title: "Anxiety",
    description: "Steady support through worry and overwhelm.",
  },
  {
    icon: Compass,
    title: "Life transitions",
    description: "Gentle footing through change.",
  },
];

const services = [
  {
    icon: HeartHandshake,
    title: "Grief & Loss Counselling",
    description:
      "Support through pregnancy loss, infant loss, child bereavement, and other profound losses — walking alongside you, not rushing you through.",
  },
  {
    icon: GraduationCap,
    title: "Educator & Teacher Wellbeing",
    description:
      "Burnout, classroom stress, compassion fatigue, and career transitions, from someone who understands the profession from the inside.",
  },
  {
    icon: Shield,
    title: "Trauma-Informed Support",
    description:
      "A calm, non-clinical space to process the effects of trauma, grounded in a trauma-informed approach.",
  },
  {
    icon: Compass,
    title: "Anxiety & Life Transitions",
    description:
      "Gentle, steady support through change, uncertainty, and the ordinary overwhelm of life.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Clearshore Counselling",
  description:
    "Grief, trauma and wellbeing counselling in Hervey Bay, Queensland, with telehealth available across Australia.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hervey Bay",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  founder: {
    "@type": "Person",
    name: "Shelley Bentley",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-teal)_88%,white)_0%,var(--color-teal)_65%)] px-4 py-28 text-center text-white sm:px-6 sm:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--color-gold)_0%,transparent_70%)] opacity-25 blur-2xl"
        />

        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Hervey Bay &middot; Telehealth Australia-wide
          </p>
          <h1 className="mt-5 font-heading text-5xl leading-tight sm:text-6xl">
            A steady, compassionate space for grief, trauma, and life&apos;s
            hardest moments
          </h1>
          <p className="mt-8 text-lg text-white/90 sm:text-xl">
            In-person in Hervey Bay, and by secure telehealth Australia-wide —
            gentle, unhurried counselling when you need it most.
          </p>
          <div className="mt-10">
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              size="lg"
              className="bg-gold text-ink hover:bg-gold/90"
            >
              Book a session
            </Button>
          </div>
        </div>

        <WaveDivider className="absolute inset-x-0 bottom-0 translate-y-px text-white" />
      </section>

      {/* Who we help */}
      <section className="relative px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-semibold tracking-[0.25em] text-teal uppercase">
            Support for
          </p>
          <h2 className="mt-3 text-center font-heading text-3xl text-teal">
            Who we help
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-ink/80">
            Wherever you are in your story, there&apos;s a place for you here.
          </p>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whoWeHelp.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-teal text-white shadow-sm">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-xl text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink/80">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <WaveDivider className="absolute inset-x-0 bottom-0 translate-y-px text-soft-teal/10" />
      </section>

      {/* Services */}
      <section className="relative bg-soft-teal/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-semibold tracking-[0.25em] text-teal uppercase">
            Services
          </p>
          <h2 className="mt-3 text-center font-heading text-3xl text-teal">
            How we can help
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, description }) => (
              <Link
                key={title}
                href="/services"
                className="group flex flex-col rounded-3xl border border-soft-teal/40 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-lg text-ink">{title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink/80">{description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <WaveDivider className="absolute inset-x-0 bottom-0 translate-y-px text-white" />
      </section>

      {/* Meet Shelley */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="rounded-3xl bg-soft-teal/15 p-10">
            <span className="font-heading text-8xl leading-none text-teal" aria-hidden="true">
              &ldquo;
            </span>
            <p className="mt-2 text-sm font-semibold tracking-[0.25em] text-teal uppercase">
              About Shelley
            </p>
            <p className="mt-2 font-heading text-2xl text-ink">
              I don&apos;t come to grief from theory alone.
            </p>
          </div>

          <div>
            <p className="text-ink/90">
              I&apos;m Shelley — a mother, a former primary school teacher, and
              a former Child Safety Officer. My own experience of losing a
              child sits at the heart of why I do this work. I also organise
              Hervey Bay&apos;s Walk to Remember, and I&apos;m completing my
              Postgraduate Diploma in Counselling. Wherever you are in your
              story, I&apos;d be glad to sit alongside you.
            </p>
            <p className="mt-4 font-heading text-lg text-teal italic">
              — Shelley
            </p>
            <div className="mt-8">
              <Button
                render={<Link href="/about" />}
                nativeButton={false}
                variant="outline"
                className="border-teal text-teal hover:bg-teal hover:text-white"
              >
                Read Shelley&apos;s story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
