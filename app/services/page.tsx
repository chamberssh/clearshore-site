import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  MapPin,
  Video,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveDivider } from "@/components/wave-divider";
import { HeroMotif } from "@/components/hero-motif";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services | Clearshore Counselling, Hervey Bay QLD",
  description:
    "Grief and loss counselling, educator wellbeing, trauma-informed support, anxiety and life transitions, and family support — in Hervey Bay, Queensland, and by telehealth Australia-wide.",
  path: "/services",
});

const griefService = services.find(
  (service) => service.slug === "grief-and-loss-counselling"
)!;
const otherServices = services.filter(
  (service) => service.slug !== "grief-and-loss-counselling"
);

const fundingPoints = [
  "Counsellors aren't currently eligible for Medicare rebates.",
  "Private-pay sessions are welcome, in-person or by telehealth.",
  "NDIS clients are welcome, both self-managed and plan-managed.",
  "Once I'm clinically registered, private health fund rebates will also be available.",
];

const sessionFees = [
  {
    title: "Individual",
    duration: "50 minutes",
    price: "$110",
  },
  {
    title: "Couples",
    duration: "60 minutes",
    price: "$160",
  },
  {
    title: "Family",
    duration: "60 minutes",
    price: "$170",
  },
];

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-teal)_88%,white)_0%,var(--color-teal)_65%)] px-4 py-20 text-center text-white sm:px-6 sm:py-28">
        <HeroMotif className="absolute inset-0 h-full w-full" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Services
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
            Ways I can walk alongside you
          </h1>
          <p className="mt-6 text-lg text-white/90">
            In-person in Hervey Bay, and by secure telehealth Australia-wide.
          </p>
        </div>
        <WaveDivider className="absolute inset-x-0 bottom-0 translate-y-px text-white" />
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border-l-4 border-gold bg-teal/5 p-8 sm:p-10">
          <div className="flex size-14 items-center justify-center rounded-full bg-teal text-white">
            <HeartHandshake className="size-7" aria-hidden="true" />
          </div>
          <h2 className="mt-6 font-heading text-3xl text-teal">
            Grief & Loss Counselling
          </h2>
          <p className="mt-4 text-ink/90">
            This is the heart of my work. I offer support through pregnancy
            loss, infant loss, child bereavement, and other profound losses —
            walking alongside you rather than trying to fix or rush you
            through. As a mother who has lost a child, and as the organiser
            of the Hervey Bay Walk to Remember, grief and loss aren&apos;t
            something I&apos;ve only studied. It&apos;s where I&apos;m most
            at home, and where I most want to sit with you.
          </p>
          <div className="mt-6">
            <Button
              render={<Link href={`/services/${griefService.slug}`} />}
              nativeButton={false}
              variant="outline"
              className="border-teal text-teal hover:bg-teal hover:text-white"
            >
              About grief &amp; loss counselling
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-soft-teal/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-3xl text-teal">
            Other ways I can help
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {otherServices.map(({ slug, icon: Icon, name, shortDescription }) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="group flex flex-col rounded-3xl border border-soft-teal/40 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-xl text-ink">{name}</h3>
                <p className="mt-2 flex-1 text-sm text-ink/80">
                  {shortDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl text-teal">
            How sessions work
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-3xl border border-soft-teal/40 bg-white p-7 text-center shadow-sm">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-teal text-white">
                <MapPin className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-heading text-xl text-ink">
                In-person in Hervey Bay
              </h3>
              <p className="mt-2 text-sm text-ink/80">
                Face-to-face sessions in a calm, private space in Hervey Bay,
                Queensland, by appointment.
              </p>
            </div>
            <div className="rounded-3xl border border-soft-teal/40 bg-white p-7 text-center shadow-sm">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-teal text-white">
                <Video className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-heading text-xl text-ink">
                Telehealth, Australia-wide
              </h3>
              <p className="mt-2 text-sm text-ink/80">
                Secure video sessions, wherever you are in Australia — the
                same warmth and care, from home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="fees" className="scroll-mt-24 bg-soft-teal/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3">
            <Wallet className="size-6 text-teal" aria-hidden="true" />
            <h2 className="font-heading text-3xl text-teal">
              Fees & funding
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-xl text-center text-ink/80">
            Indicative session fees below, in line with typical rates for
            counsellors in regional Queensland. Final pricing will be
            confirmed closer to opening in April 2027.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {sessionFees.map(({ title, duration, price }) => (
              <div
                key={title}
                className="rounded-3xl border border-soft-teal/40 bg-white p-7 text-center shadow-sm"
              >
                <h3 className="font-heading text-xl text-ink">{title}</h3>
                <p className="mt-1 text-sm text-ink/60">{duration}</p>
                <p className="mt-4 font-heading text-3xl text-teal">
                  {price}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-3xl border-l-4 border-gold bg-white p-6 text-center sm:p-7">
            <p className="text-ink/90">
              <span className="font-medium text-teal">
                Block bookings:
              </span>{" "}
              pre-pay for 5 or more sessions and save 10% off the total.
              Concession pricing is also available on request for anyone
              experiencing financial hardship — please just ask.
            </p>
          </div>

          <ul className="mx-auto mt-10 max-w-xl space-y-4">
            {fundingPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-teal"
                  aria-hidden="true"
                />
                <span className="text-ink/90">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-20 text-center sm:px-6">
        <div className="mx-auto max-w-xl">
          <h2 className="font-heading text-3xl text-teal">
            When you&apos;re ready
          </h2>
          <p className="mt-4 text-ink/90">
            Clearshore Counselling opens April 2027 — join the waitlist and
            I&apos;ll be in touch personally when booking begins.
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
