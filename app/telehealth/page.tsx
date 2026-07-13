import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  HeartHandshake,
  Home,
  Laptop,
  Link2,
  MapPin,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveDivider } from "@/components/wave-divider";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Telehealth Counselling Australia-Wide | Clearshore Counselling",
  description:
    "Secure telehealth counselling sessions Australia-wide from Clearshore Counselling, based in Hervey Bay, Queensland. Grief, trauma and wellbeing support wherever you are — including regional Queensland, Maryborough, the Fraser Coast and Bundaberg.",
  path: "/telehealth",
});

const whatYoullNeed = [
  {
    icon: Laptop,
    title: "A device with a camera",
    description: "A laptop, tablet or phone is all you need — nothing specialised.",
  },
  {
    icon: Wifi,
    title: "Stable internet",
    description: "A reasonably steady connection is enough for a smooth session.",
  },
  {
    icon: Home,
    title: "A private space",
    description: "Somewhere you won't be interrupted or overheard, even for an hour.",
  },
  {
    icon: Link2,
    title: "A simple link to click",
    description:
      "You'll be sent a link before your session — no special software or technical knowledge required.",
  },
];

const whoItSuits = [
  "You're in regional or remote Queensland, or anywhere else in Australia, with no local grief or trauma-informed counsellor nearby.",
  "You're interstate, and getting to Hervey Bay simply isn't realistic.",
  "You're caring for someone else and can't easily leave the house.",
  "You live with chronic illness, mobility limitations, or anything else that makes travel difficult.",
  "You simply prefer the privacy and comfort of your own space.",
  "You'd like the option to move between in-person and telehealth as life calls for it.",
];

export default function Telehealth() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-teal)_88%,white)_0%,var(--color-teal)_65%)] px-4 py-20 text-center text-white sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Telehealth
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
            Counselling with me, wherever you are in Australia
          </h1>
          <p className="mt-6 text-lg text-white/90">
            Secure telehealth sessions available Australia-wide, alongside
            in-person sessions in Hervey Bay, Queensland — the same warmth
            and care, wherever you're logging in from.
          </p>
        </div>
        <WaveDivider className="absolute inset-x-0 bottom-0 translate-y-px text-white" />
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="font-heading text-2xl leading-snug text-ink italic">
            I don&apos;t want where you live to decide whether you can access
            support.
          </p>
          <p className="mt-6 text-ink/90">
            Hervey Bay is where I&apos;m based, but it isn&apos;t where my
            work stops. Some people call it telehealth, others call it
            online counselling — either way, it&apos;s simply a counselling
            session held over secure video instead of in the same room. It
            means I can sit with you wherever you are: a regional Queensland
            town with no local grief or trauma specialist, a capital city
            interstate, or simply your own lounge room when getting to an
            office isn&apos;t realistic. Grief, trauma and burnout
            don&apos;t check your postcode before they show up, and support
            shouldn&apos;t have to either.
          </p>
        </div>
      </section>

      <section className="bg-soft-teal/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl text-teal">
            What you&apos;ll need
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-ink/80">
            Nothing complicated — if you can join a video call, you can join
            a session.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whatYoullNeed.map(({ icon: Icon, title, description }) => (
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
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal text-white">
              <HeartHandshake className="size-5" aria-hidden="true" />
            </span>
            <h2 className="font-heading text-3xl text-teal">
              Who telehealth suits
            </h2>
          </div>

          <ul className="mx-auto mt-10 max-w-xl space-y-4">
            {whoItSuits.map((point) => (
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

      <section className="bg-soft-teal/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border-l-4 border-gold bg-white p-8 sm:p-10">
          <div className="flex size-14 items-center justify-center rounded-full bg-teal text-white">
            <MapPin className="size-7" aria-hidden="true" />
          </div>
          <h2 className="mt-6 font-heading text-3xl text-teal">
            In person in Hervey Bay, and by telehealth everywhere else
          </h2>
          <p className="mt-4 text-ink/90">
            If you&apos;re in Maryborough, along the Fraser Coast, in
            Bundaberg, or anywhere else in regional Queensland without easy
            access to a grief or trauma-informed counsellor nearby, telehealth
            closes that gap completely. The same goes for Brisbane, Cairns,
            Perth, or anywhere else in Australia — the session itself is
            exactly the same, wherever you&apos;re joining from. In-person
            sessions remain available for anyone who can get to Hervey Bay
            and would rather meet face to face.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl text-teal">
            What stays the same
          </h2>
          <p className="mt-6 text-ink/90">
            Confidentiality, care, and pacing all carry across exactly as
            they would in person. I won&apos;t rush you because we&apos;re
            on a screen instead of in a room. If a session ever feels like it
            needs to happen face to face instead, and you&apos;re able to get
            to Hervey Bay, that&apos;s always an option too — many people
            move between the two depending on what a season of life calls
            for.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 text-center sm:px-6">
        <div className="mx-auto max-w-xl">
          <h2 className="font-heading text-3xl text-teal">
            Ready to talk, wherever you are?
          </h2>
          <p className="mt-4 text-ink/90">
            Clearshore Counselling opens April 2027 — join the waitlist and
            I&apos;ll be in touch when telehealth booking begins.
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
