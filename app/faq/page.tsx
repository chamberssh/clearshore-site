import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Flower2,
  GraduationCap,
  HeartHandshake,
  MapPin,
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
      {
        q: "Who is Clearshore Counselling for?",
        a: "Clearshore Counselling supports adults, couples and families across a range of life's harder seasons — including grief and loss, trauma, burnout (especially for teachers and school staff), anxiety, and family or parenting challenges. Have a look at the services page for more detail, or reach out if you're not sure whether it's a fit.",
      },
      {
        q: "What if I'm not sure counselling is right for me?",
        a: "That's a completely normal thing to wonder. You're welcome to send a message through the contact form with any questions — there's no obligation, and no pressure to book anything.",
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
      {
        q: "What payment methods will you accept?",
        a: "Payment details, including accepted methods, will be confirmed closer to opening and set out clearly when the booking system goes live.",
      },
      {
        q: "What is your cancellation policy?",
        a: "A clear cancellation and rescheduling policy will be shared with you as part of booking, once the practice opens. If your plans change, just get in touch as early as you can.",
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
      {
        q: "How long do sessions run for?",
        a: "Individual sessions run for 50 minutes, and couples or family sessions run for 60 minutes.",
      },
      {
        q: "Do I need a referral to see a counsellor?",
        a: "No referral is needed. Because counsellors aren't Medicare-rebated, you don't need a GP Mental Health Care Plan to book — you can simply reach out directly.",
      },
    ],
  },
  {
    title: "Local area",
    icon: MapPin,
    items: [
      {
        q: "Where is Clearshore Counselling based?",
        a: "Clearshore Counselling is based in Hervey Bay, Queensland, on the Fraser Coast.",
      },
      {
        q: "Do you see clients outside Hervey Bay?",
        a: "In-person sessions are held in Hervey Bay, but secure telehealth is available Australia-wide — so you can access support wherever you live, including Maryborough, Bundaberg and the wider Fraser Coast and Wide Bay region, or anywhere else without a local counsellor nearby.",
      },
      {
        q: "Can I access support if I live in a different state?",
        a: "Yes, telehealth sessions are available to clients anywhere in Australia, not just Queensland.",
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
      {
        q: "What does Shelley specialise in?",
        a: "Shelley's deepest area of focus is grief and loss counselling, including pregnancy loss, infant loss and child bereavement, informed by her own lived experience. She also works closely with teachers and school staff around burnout and compassion fatigue, drawing on her own years in the classroom, alongside trauma-informed support, anxiety and life transitions, and family and parenting support.",
      },
      {
        q: "How many sessions will I need?",
        a: "There's no set number — some people come for a handful of sessions through a hard season, others prefer ongoing support over a longer period. Shelley will talk this through with you and let the pace be led by what you need, not a fixed program.",
      },
    ],
  },
  {
    title: "Qualifications & registration",
    icon: GraduationCap,
    items: [
      {
        q: "What are Shelley's qualifications?",
        a: "Shelley holds a Psychology degree with Honours and is completing a Postgraduate Diploma in Counselling through the University of Canberra, expected in April 2027. Before training as a counsellor, she worked as a primary school teacher and later as a Child Safety Officer with a Queensland council.",
      },
      {
        q: "Is Shelley a registered counsellor or psychologist?",
        a: "Not yet — Shelley is currently completing her Postgraduate Diploma in Counselling and will be progressing toward ACA (Australian Counselling Association) or PACFA registration once she graduates in April 2027. Full registration details will be confirmed on this site closer to opening.",
      },
      {
        q: "What is Shelley's background before counselling?",
        a: "Shelley trained and worked as a primary school teacher in London before relocating to Queensland, where she continued teaching. She later worked as a Child Safety Officer with a QLD council, supporting families in crisis — an experience that shaped her trauma-informed approach and deep respect for how loss, fear and hope move through a family.",
      },
    ],
  },
  {
    title: "Grief & the Walk to Remember",
    icon: Flower2,
    items: [
      {
        q: "Does Shelley have personal experience with grief?",
        a: "Yes. Shelley is a mother who has experienced the loss of a child, and this lived experience sits at the heart of her work. She doesn't approach grief counselling from theory alone — she has walked it herself, and it shapes the warmth and care she brings to this work.",
      },
      {
        q: "What is the Hervey Bay Walk to Remember?",
        a: "The Walk to Remember is a community event for bereaved families that Shelley organises in Hervey Bay. It's a chance for families who have experienced loss to gather, be seen, and know they aren't walking their grief alone.",
      },
      {
        q: "Do I need to have experienced the same kind of loss as Shelley to work with her?",
        a: "Not at all. Shelley's own experience of loss gives her a depth of understanding, but her grief and loss counselling is for anyone navigating bereavement — including pregnancy loss, infant loss, child bereavement and other profound losses, wherever you are in that journey.",
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
      {
        q: "Will you keep notes about our sessions?",
        a: "Yes, brief clinical notes are a normal and required part of counselling practice, and are kept securely and confidentially. Full details on how your records are stored and protected will be provided as part of the intake process once the practice opens.",
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
            <div className="mx-auto max-w-5xl">
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
