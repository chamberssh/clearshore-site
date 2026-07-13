import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Compass,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Shield,
  Users,
  Video,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveDivider } from "@/components/wave-divider";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services | Clearshore Counselling, Hervey Bay QLD",
  description:
    "Grief and loss counselling, educator wellbeing, trauma-informed support, anxiety and life transitions, and family support — in Hervey Bay, Queensland, and by telehealth Australia-wide.",
  path: "/services",
});

const otherServices = [
  {
    icon: GraduationCap,
    title: "Educator & Teacher Wellbeing",
    description:
      "Burnout, classroom stress, compassion fatigue, and career transitions. Former teachers who become counsellors are rare — I understand the profession from the inside, because I've lived it.",
  },
  {
    icon: Shield,
    title: "Trauma-Informed Support",
    description:
      "A calm, non-clinical space to process the effects of trauma, informed by my background in child safety. This isn't crisis intervention — it's a safe place to work through what you're carrying, at your own pace.",
  },
  {
    icon: Compass,
    title: "Anxiety & Life Transitions",
    description:
      "Support through change, uncertainty, and the ordinary overwhelm of life. Whether you're facing a big decision or just feel unsteady, we'll find steadier ground together.",
  },
  {
    icon: Users,
    title: "Family & Parenting Support",
    description:
      "For parents and families navigating hard seasons — including parenting after loss or through crisis. Gentle, practical support for the whole family system.",
  },
];

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
        <div className="mx-auto max-w-2xl">
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
        </div>
      </section>

      <section className="bg-soft-teal/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-3xl text-teal">
            Other ways I can help
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {otherServices.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-3xl border border-soft-teal/40 bg-white p-7 shadow-sm"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-xl text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink/80">{description}</p>
              </div>
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

      <section className="bg-soft-teal/10 px-4 py-20 sm:px-6">
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
            Ready to talk?
          </h2>
          <p className="mt-4 text-ink/90">
            Clearshore Counselling opens April 2027 — join the waitlist and
            I&apos;ll be in touch when booking begins.
          </p>
          <div className="mt-8">
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
      </section>
    </>
  );
}
