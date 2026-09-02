import type { Metadata } from "next";
import {
  AlertTriangle,
  ClipboardList,
  FileText,
  HeartHandshake,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { WaveDivider } from "@/components/wave-divider";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Using the AI drafting tools — a guide for counsellors",
    description:
      "A plain-language guide for counsellors on how to use the AI drafting tools safely: what each tool does, what to give it, what you get back, and the rules to follow.",
    path: "/counsellor-guide",
  }),
  // Internal practitioner guide — keep it out of search engines.
  robots: { index: false, follow: false },
};

type Tool = {
  name: string;
  icon: typeof FileText;
  purpose: string;
  youGive: string;
  youGetBack: string;
  check: string;
};

const tools: Tool[] = [
  {
    name: "Session Note helper",
    icon: FileText,
    purpose:
      "Turns your short summary of a session into a tidy, structured note (DAP, SOAP, BIRP, or a narrative note).",
    youGive:
      "A few sentences summarising the session, a little relevant background, the session type, and which note format you want.",
    youGetBack:
      "A draft note with the sections laid out for you. Anything it can't know is clearly marked “Clinician to complete” — it does not make up a formulation, diagnosis, or progress.",
    check:
      "Fill in the interpretation yourself, correct anything, and make sure it matches your own record before saving it.",
  },
  {
    name: "Intake summary helper",
    icon: ClipboardList,
    purpose:
      "Organises intake information into a clear summary you can review before a first session.",
    youGive:
      "The intake notes or what the client has told you, any relevant context, and the session type.",
    youGetBack:
      "Presenting issues in the client's own words, background, possible strengths and supports, anything that looks like risk language, and suggested follow-up questions. Missing details are marked “unknown” rather than guessed.",
    check:
      "Treat it as a starting point. It does not diagnose or decide anything — you do.",
  },
  {
    name: "Risk language flag",
    icon: ShieldAlert,
    purpose:
      "Reads a piece of text and points out language that may relate to safety, so you don't miss it.",
    youGive: "Session, intake, or message text you'd like a second pair of eyes on.",
    youGetBack:
      "A flag — “nothing detected”, “needs review”, or “urgent review” — with the exact words it noticed and suggested questions to ask.",
    check:
      "This is a word-spotting aid, not a risk assessment. It can miss things and it can over-flag. Always complete your own formal risk assessment and follow your safeguarding procedures.",
  },
  {
    name: "Client check-in helper",
    icon: HeartHandshake,
    purpose:
      "Drafts a gentle, optional reflection or grounding exercise you can review and, if you choose, share with a client between sessions.",
    youGive:
      "A simple focus for the check-in, the format (daily, weekly, after a session, or grounding), and the tone.",
    youGetBack:
      "A warm, choice-based message with a few optional prompts that always tells the client they can skip or pause. If the input hints at a safety concern, it will not write an exercise — it asks you to review instead.",
    check:
      "Read every word before sending. It is a draft for you to approve, never automatic client contact.",
  },
];

const goldenRules = [
  {
    title: "Remove personal details first",
    body: "Take out names, dates of birth, addresses, workplaces, phone numbers, emails, and Medicare or account numbers before you put anything into a tool. Use general descriptions instead (“an adult client”, “a recent loss”).",
  },
  {
    title: "You review everything",
    body: "Every note, flag, and message is a draft. Nothing is ready to use, save, or send until you have read it, corrected it, and agreed with it.",
  },
  {
    title: "The tools don't diagnose or decide",
    body: "They organise and draft. They do not diagnose, rate risk, promise improvement, or give medical, legal, or emergency advice. Your clinical judgement is the decision-maker.",
  },
  {
    title: "The risk flag is not a crisis service",
    body: "It only spots words. It can miss real risk and flag harmless wording. Always do your own formal risk assessment and follow your safeguarding steps.",
  },
  {
    title: "Get consent and keep it private",
    body: "Use client material only with consent and appropriate care. Even de-identified role-play should be handled thoughtfully.",
  },
];

const steps = [
  "De-identify: take out anything that could point to a real person.",
  "Choose the tool that matches what you need — a note, an intake summary, a risk read, or a client check-in.",
  "Give it the plain-language information it asks for.",
  "Read the draft carefully, correct it, and finalise it yourself before it is used or shared.",
];

export default function CounsellorGuide() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-teal)_88%,white)_0%,var(--color-teal)_65%)] px-4 py-20 text-center text-white sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            For counsellors
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
            Using the AI drafting tools
          </h1>
          <p className="mt-6 text-lg text-white/90">
            A short, plain-language guide to using the drafting tools safely.
            They help you prepare notes and reflections faster — but every draft
            is yours to review and approve.
          </p>
        </div>
        <WaveDivider className="absolute inset-x-0 bottom-0 translate-y-px text-white" />
      </section>

      {/* What they are / aren't */}
      <section className="px-4 pt-16 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border-l-4 border-gold bg-teal/5 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal text-white">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-heading text-xl text-teal">
                What these tools are — and what they are not
              </h2>
              <p className="mt-2 text-sm text-ink/90">
                They are <strong>drafting assistants</strong> that organise the
                information you give them into a tidy starting point. They are{" "}
                <strong>not</strong> a therapist, a diagnosis, a risk
                assessment, or a crisis service. They never replace your
                clinical judgement, and every draft needs your review before it
                is used.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Golden rules */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-2xl text-teal sm:text-3xl">
            Before you start: five rules
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {goldenRules.map((rule, index) => (
              <div
                key={rule.title}
                className="rounded-3xl border border-soft-teal/40 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-semibold text-ink">
                    {index + 1}
                  </span>
                  <h3 className="font-heading text-lg text-ink">{rule.title}</h3>
                </div>
                <p className="mt-3 text-sm text-ink/80">{rule.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The four tools */}
      <section className="bg-soft-teal/10 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-2xl text-teal sm:text-3xl">
            The four tools
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-ink/80">
            Each tool works the same way: you give it plain-language
            information, and it hands back a draft for you to review.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="rounded-3xl border border-soft-teal/40 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-heading text-lg text-ink">{tool.name}</h3>
                  </div>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold text-teal">What it&apos;s for</dt>
                      <dd className="text-ink/80">{tool.purpose}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-teal">What you give it</dt>
                      <dd className="text-ink/80">{tool.youGive}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-teal">What you get back</dt>
                      <dd className="text-ink/80">{tool.youGetBack}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-teal">What to check</dt>
                      <dd className="text-ink/80">{tool.check}</dd>
                    </div>
                  </dl>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step by step */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl text-teal sm:text-3xl">
            How to use a tool, step by step
          </h2>
          <ol className="mt-6 space-y-4">
            {steps.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-ink/90">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* If something looks risky */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border-l-4 border-gold bg-teal/5 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal text-white">
              <AlertTriangle className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-heading text-xl text-teal">
                If anything suggests a safety concern
              </h2>
              <p className="mt-2 text-sm text-ink/90">
                Do not rely on a tool. Complete your own formal risk assessment
                and follow your local safeguarding and crisis procedures
                straight away. The risk flag is only there to help you notice
                language — the decision, and the duty of care, are always yours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
