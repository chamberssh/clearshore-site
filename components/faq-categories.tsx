"use client";

import {
  Compass,
  Flower2,
  GraduationCap,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Video,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqCategory } from "@/lib/faq-data";

const categoryIcons: Record<string, LucideIcon> = {
  "Getting started": Compass,
  "Fees & funding": Wallet,
  "In-person & telehealth": Video,
  "Local area": MapPin,
  "What to expect": HeartHandshake,
  "Qualifications & registration": GraduationCap,
  "Grief & the Walk to Remember": Flower2,
  "Privacy & confidentiality": ShieldCheck,
};

export function FaqCategories({ categories }: { categories: FaqCategory[] }) {
  return (
    <Accordion multiple defaultValue={categories.map((category) => category.title)}>
      {categories.map((category, index) => {
        const Icon = categoryIcons[category.title] ?? Compass;
        return (
          <AccordionItem
            key={category.title}
            value={category.title}
            className="border-none"
          >
            <section
              className={
                index % 2 === 0
                  ? "px-4 py-16 sm:px-6"
                  : "bg-soft-teal/10 px-4 py-16 sm:px-6"
              }
            >
              <div className="mx-auto max-w-5xl">
                <AccordionTrigger className="items-center gap-3 no-underline hover:no-underline">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-heading text-2xl text-teal sm:text-3xl">
                    {category.title}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="pb-0">
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
                </AccordionContent>
              </div>
            </section>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
