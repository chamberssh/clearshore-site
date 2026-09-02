import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { pageMetadata } from "@/lib/seo";
import { assistHtml } from "./content";
import { AssistEffects } from "./effects";

export const metadata: Metadata = pageMetadata({
  title: "Clearshore Assist",
  description:
    "Warm, safe AI drafting tools for counsellors — session notes, intakes, safety checks, referrals, progress reviews, case formulation, client check-ins and emails, with you in control of every draft.",
  path: "/assist",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--assist-display",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--assist-body",
});

export default function AssistPage() {
  return (
    <div className={`assist-page ${fraunces.variable} ${hanken.variable}`}>
      <div dangerouslySetInnerHTML={{ __html: assistHtml }} />
      <AssistEffects />
    </div>
  );
}
