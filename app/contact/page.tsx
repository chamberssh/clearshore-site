import type { Metadata } from "next";
import { Clock, MapPin, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { WaveDivider } from "@/components/wave-divider";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact | Clearshore Counselling, Hervey Bay QLD",
  description:
    "Get in touch with Clearshore Counselling — in-person in Hervey Bay, Queensland, or by telehealth Australia-wide.",
  path: "/contact",
});

const infoCards = [
  {
    icon: MapPin,
    title: "Location",
    description:
      "In-person sessions in Hervey Bay, Queensland. The exact address is shared when you book.",
  },
  {
    icon: Video,
    title: "Telehealth",
    description:
      "Secure video sessions available Australia-wide, wherever you are.",
  },
  {
    icon: Clock,
    title: "Hours",
    description:
      "By appointment. Exact availability will be confirmed closer to opening.",
  },
];

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-teal)_88%,white)_0%,var(--color-teal)_65%)] px-4 py-20 text-center text-white sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Contact
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-6 text-lg text-white/90">
            In Hervey Bay, or by telehealth wherever you are in Australia.
          </p>
        </div>
        <WaveDivider className="absolute inset-x-0 bottom-0 translate-y-px text-white" />
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-3">
            {infoCards.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-3xl border border-soft-teal/40 bg-white p-7 text-center shadow-sm"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-teal text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h2 className="mt-5 font-heading text-xl text-ink">{title}</h2>
                <p className="mt-2 text-sm text-ink/80">{description}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border-l-4 border-gold bg-teal/5 p-8 text-center sm:p-10">
            <h2 className="font-heading text-2xl text-teal">
              Book a session
            </h2>
            <p className="mt-3 text-ink/90">
              Online booking will move to our booking system (Zanda) once
              Clearshore Counselling opens in April 2027. For now, send a
              message below and I&apos;ll reply directly.
            </p>
            <div className="mt-6">
              <Button
                render={<a href="#contact-form" />}
                nativeButton={false}
                className="bg-gold text-ink hover:bg-gold/90"
              >
                Book a session
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="bg-soft-teal/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-xl">
          <h2 className="text-center font-heading text-3xl text-teal">
            Send a message
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-ink/80">
            Share a little about what brings you here, and I&apos;ll be in
            touch.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
          <p className="mt-6 text-center text-xs text-ink/60">
            This form is for general enquiries only. Please don&apos;t share
            detailed health or clinical information here — anything relevant
            to your care can be discussed once we&apos;re in direct contact.
          </p>
        </div>
      </section>
    </>
  );
}
