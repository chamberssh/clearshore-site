import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  HeartHandshake,
  PhoneCall,
  ShieldCheck,
  Video,
  Wallet,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { WaveDivider } from "@/components/wave-divider";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ | Clearshore Counselling, Hervey Bay QLD",
  description:
    "Answers to common questions about sessions, fees, Medicare and NDIS funding, telehealth, and what to expect from Clearshore Counselling in Hervey Bay, Queensland.",
  path: "/faq",
});

const faqCategories = [
  {
    title: "Getting started",
    icon: Compass,
    items: [
      {
        q: "When does Clearshore Counselling open?",
        a: "Clearshore Counselling is launching in April 2027, once Shelley completes her Postgraduate Diploma in Counselling through the University of Canberra. In the meantime, you're welcome to join the waitlist and I'll email you as soon as booking begins.",
      },
      {
        q: "Can I book a session now?",
        a: "Not yet — online booking will move to our booking system once the practice opens in April 2027. For now, you can send a message through the contact form or join the waitlist, and I'll be in touch directly.",
      },
      {
        q: "Is there any cost to join the waitlist?",
        a: "No, joining the waitlist is completely free. It simply lets me email you as soon as booking opens, so you're not left checking back.",
      },
    ],
  },
  {
    title: "Fees & funding",
    icon: Wallet,
    items: [
      {
        q: "How much do sessions cost?",
        a: "Indicative pricing is $110 for a 50-minute individual session, $160 for a 60-minute couples session, and $170 for a 60-minute family session. These are in line with typical rates for counsellors in regional Queensland, and final pricing will be confirmed closer to opening.",
      },
      {
        q: "Is counselling covered by Medicare?",
        a: "Counsellors aren't currently eligible for Medicare rebates in Australia, so sessions with Clearshore Counselling will be private-pay unless another funding option below applies to you.",
      },
      {
        q: "Do you accept NDIS clients?",
        a: "Yes. NDIS participants are welcome, whether you're self-managed or plan-managed.",
      },
      {
        q: "Will private health fund rebates be available?",
        a: "Not initially, but once Shelley completes her clinical registration, private health fund rebates will become available for eligible clients.",
      },
      {
        q: "Do you offer concession pricing?",
        a: "Yes. Concession pricing is available on request for anyone experiencing financial hardship — please just ask, there's no need to explain or justify it in detail.",
      },
      {
        q: "Can I pre-pay for multiple sessions?",
        a: "Yes — block bookings of 5 or more sessions come with a 10% discount off the total.",
      },
    ],
  },
  {
    title: "In-person & telehealth",
    icon: Video,
    items: [
      {
        q: "Where are in-person sessions held?",
        a: "In-person sessions take place in a calm, private space in Hervey Bay, Queensland. The exact address is shared with you when you book.",
      },
      {
        q: "Do you offer telehealth?",
        a: "Yes. Secure video telehealth sessions are available Australia-wide, so you can access support wherever you live, including regional and remote areas with no local counsellor.",
      },
      {
        q: "What do I need for a telehealth session?",
        a: "Just a device with a camera, a stable internet connection, and a private space where you won't be interrupted. You'll be sent a simple link to click at your session time — no special software or technical knowledge required.",
      },
      {
        q: "Can I move between in-person and telehealth?",
        a: "Yes, many people do exactly that. If a session ever needs to happen face to face instead, and you're able to get to Hervey Bay, that's always an option — and vice versa, depending on what a season of life calls for.",
      },
    ],
  },
  {
    title: "What to expect",
    icon: HeartHandshake,
    items: [
      {
        q: "What is Shelley's approach to counselling?",
        a: "Warm, gentle and unhurried. Shelley believes in sitting with people in their hardest moments rather than rushing them through, in a safe, non-clinical, deeply human space — whether you meet in person or by telehealth.",
      },
      {
        q: "Do I need to know what to say before my first session?",
        a: "No. There's no pressure to arrive with the right words or a tidy explanation of what's wrong. You're welcome to start wherever you are, and the pace of every conversation is led by you.",
      },
      {
        q: "Is this a crisis service?",
        a: "No. Clearshore Counselling offers a calm, steady space to process grief, trauma and life's hard seasons once the acute crisis has passed — it isn't crisis intervention. If you're in crisis right now, please contact Lifeline on 13 11 14, or call 000 in an emergency.",
      },
    ],
  },
  {
    title: "Privacy & confidentiality",
    icon: ShieldCheck,
    items: [
      {
        q: "Is what I share confidential?",
        a: "Confidentiality is a cornerstone of counselling, and full details of how your information is handled will be set out clearly as part of the client intake process once the practice opens. If you have questions about privacy before then, you're welcome to ask via the contact page.",
      },
      {
        q: "Can I share health or personal details through the website's contact form?",
        a: "Please don't — the contact form is for general enquiries only, and this website doesn't yet have the safeguards in place to collect clinical or health information. Anything relevant to your care can be discussed once we're in direct contact, and a proper intake process with appropriate privacy protections will be in place before the practice opens.",
      },
    ],
  },
];

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
        <div className="mx-auto max-w-3xl rounded-3xl border-l-4 border-gold bg-teal/5 p-6 sm:p-8">
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

      {faqCategories.map((category, index) => {
        const Icon = category.icon;
        return (
          <section
            key={category.title}
            className={
              index % 2 === 0
                ? "px-4 py-16 sm:px-6"
                : "bg-soft-teal/10 px-4 py-16 sm:px-6"
            }
          >
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="font-heading text-2xl text-teal sm:text-3xl">
                  {category.title}
                </h2>
              </div>

              <div className="mt-6 rounded-3xl border border-soft-teal/40 bg-white p-6 shadow-sm sm:p-8">
                <Accordion multiple>
                  {category.items.map((item) => (
                    <AccordionItem
                      key={item.q}
                      value={item.q}
                      className="border-soft-teal/20"
                    >
                      <AccordionTrigger className="py-4 font-heading text-lg text-ink no-underline hover:no-underline aria-expanded:text-teal">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-ink/80">
                        <p>{item.a}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        );
      })}

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
