import type { Metadata } from "next";
import Link from "next/link";
import {
  ExternalLink,
  Flower2,
  HeartHandshake,
  LifeBuoy,
  PhoneCall,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveDivider } from "@/components/wave-divider";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Useful Links & Resources | Clearshore Counselling, Hervey Bay QLD",
  description:
    "Crisis lines, grief and loss support, mental health services and funding information for people across Australia — curated by Clearshore Counselling in Hervey Bay, Queensland.",
  path: "/resources",
});

type ResourceLink = {
  name: string;
  phone?: string;
  tel?: string;
  description: string;
  href: string;
};

type ResourceCategory = {
  title: string;
  icon: typeof LifeBuoy;
  items: ResourceLink[];
};

const resourceCategories: ResourceCategory[] = [
  {
    title: "If you need support right now",
    icon: LifeBuoy,
    items: [
      {
        name: "Lifeline",
        phone: "13 11 14",
        tel: "131114",
        description: "Free, 24/7 crisis support and suicide prevention counselling.",
        href: "https://www.lifeline.org.au",
      },
      {
        name: "Emergency services",
        phone: "000",
        tel: "000",
        description: "Call for any immediate danger to life.",
        href: "https://www.triplezero.gov.au",
      },
      {
        name: "Suicide Call Back Service",
        phone: "1300 659 467",
        tel: "1300659467",
        description: "Free telephone and online counselling for anyone affected by suicide.",
        href: "https://www.suicidecallbackservice.org.au",
      },
      {
        name: "13YARN",
        phone: "13 92 76",
        tel: "139276",
        description: "Crisis support line for Aboriginal and Torres Strait Islander peoples.",
        href: "https://www.13yarn.org.au",
      },
      {
        name: "1800RESPECT",
        phone: "1800 737 732",
        tel: "1800737732",
        description: "National domestic, family and sexual violence counselling line.",
        href: "https://www.1800respect.org.au",
      },
    ],
  },
  {
    title: "Grief & loss support",
    icon: Flower2,
    items: [
      {
        name: "GriefLine",
        phone: "1300 845 745",
        tel: "1300845745",
        description: "Free telephone and online grief support for anyone experiencing loss.",
        href: "https://griefline.org.au",
      },
      {
        name: "Red Nose Grief and Loss",
        phone: "1300 308 307",
        tel: "1300308307",
        description: "Support for pregnancy loss, stillbirth and the death of a child.",
        href: "https://rednosegriefandloss.org.au",
      },
      {
        name: "SANDS Australia",
        phone: "1300 072 637",
        tel: "1300072637",
        description: "Support for families affected by miscarriage, stillbirth and newborn death.",
        href: "https://www.sands.org.au",
      },
      {
        name: "Australian Centre for Grief and Bereavement",
        description: "Education, information and support resources on grief and bereavement.",
        href: "https://www.grief.org.au",
      },
    ],
  },
  {
    title: "Mental health & wellbeing",
    icon: HeartHandshake,
    items: [
      {
        name: "Beyond Blue",
        phone: "1300 22 4636",
        tel: "1300224636",
        description: "Support and information for anxiety, depression and general mental wellbeing.",
        href: "https://www.beyondblue.org.au",
      },
      {
        name: "Black Dog Institute",
        description: "Research-backed information and resources on mental health conditions.",
        href: "https://www.blackdoginstitute.org.au",
      },
      {
        name: "PANDA",
        phone: "1300 726 306",
        tel: "1300726306",
        description: "Perinatal Anxiety & Depression Australia — support for expecting and new parents.",
        href: "https://www.panda.org.au",
      },
      {
        name: "QLife",
        phone: "1800 184 527",
        tel: "1800184527",
        description: "Anonymous, free peer support and referral for LGBTIQ+ people.",
        href: "https://qlife.org.au",
      },
    ],
  },
  {
    title: "Funding & practical support",
    icon: Wallet,
    items: [
      {
        name: "NDIS",
        description: "Information on eligibility and accessing the National Disability Insurance Scheme.",
        href: "https://www.ndis.gov.au",
      },
      {
        name: "Services Australia",
        description: "Medicare and other Australian Government payments and support services.",
        href: "https://www.servicesaustralia.gov.au",
      },
    ],
  },
];

export default function Resources() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-teal)_88%,white)_0%,var(--color-teal)_65%)] px-4 py-20 text-center text-white sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Resources
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
            Useful links & support
          </h1>
          <p className="mt-6 text-lg text-white/90">
            A short, trusted list of Australian services for crisis support,
            grief and loss, mental health, and funding — alongside the work
            we do together.
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

      {resourceCategories.map((category, index) => {
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

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-3xl border border-soft-teal/40 bg-white p-6 shadow-sm"
                  >
                    <h3 className="font-heading text-lg text-ink">
                      {item.name}
                    </h3>
                    {item.phone && item.tel && (
                      <a
                        href={`tel:${item.tel}`}
                        className="mt-1 inline-block font-medium text-teal underline underline-offset-2 hover:text-teal/80"
                      >
                        {item.phone}
                      </a>
                    )}
                    <p className="mt-2 text-sm text-ink/80">
                      {item.description}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:text-teal/80"
                    >
                      Visit website
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs text-ink/60">
            These are independent organisations external to Clearshore
            Counselling. We&apos;ve linked to them because we trust them, but
            we aren&apos;t affiliated with them and can&apos;t guarantee the
            availability or accuracy of their services or websites.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 text-center sm:px-6">
        <div className="mx-auto max-w-xl">
          <h2 className="font-heading text-3xl text-teal">
            Looking for ongoing support?
          </h2>
          <p className="mt-4 text-ink/90">
            Once the acute moment has passed, I&apos;m here for the steadier,
            unhurried work of walking alongside you.
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
