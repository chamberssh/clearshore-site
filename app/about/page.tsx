import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Building2,
  GraduationCap,
  School,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveDivider } from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "About Shelley | Clearshore Counselling, Hervey Bay QLD",
  description:
    "Meet Shelley Bentley — former teacher, former Child Safety Officer, and mother — bringing a warm, trauma-informed approach to grief and counselling in Hervey Bay, Queensland.",
};

const qualifications = [
  {
    icon: GraduationCap,
    text: "Psychology degree (Honours)",
  },
  {
    icon: Award,
    text: "Completing a Postgraduate Diploma in Counselling, University of Canberra (expected April 2027)",
  },
  {
    icon: ShieldCheck,
    text: "Working toward ACA / PACFA registration",
  },
  {
    icon: School,
    text: "Former primary school teacher, London and Queensland",
  },
  {
    icon: Building2,
    text: "Former Child Safety Officer, Queensland",
  },
  {
    icon: Users,
    text: "Mother of four",
  },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-teal)_88%,white)_0%,var(--color-teal)_65%)] px-4 py-20 text-center text-white sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            About Shelley
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
            The path that brought me here
          </h1>
        </div>
        <WaveDivider className="absolute inset-x-0 bottom-0 translate-y-px text-white" />
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="mx-auto flex size-40 items-center justify-center rounded-full bg-teal text-4xl font-heading text-white sm:size-48">
            SB
          </div>
          <div>
            <p className="font-heading text-2xl leading-snug text-ink italic">
              I didn&apos;t set out to become a counsellor. I came to this
              work through the classroom, through child protection, and
              through the hardest thing I&apos;ve ever lived through.
            </p>
            <p className="mt-4 text-ink/90">
              Every part of that path is still in the room with me now, and
              it&apos;s why I do this work the way I do — gently, and without
              rushing anyone.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soft-teal/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl text-teal">
            From the classroom to child safety
          </h2>
          <p className="mt-6 text-ink/90">
            I trained and worked as a primary school teacher in London before
            my family and I relocated to Queensland, where I kept teaching.
            Those years in the classroom taught me more about children and
            families than any textbook could — the emotional lives sitting
            quietly beneath everyday behaviour, and the small signals that
            something at home isn&apos;t right.
          </p>
          <p className="mt-4 text-ink/90">
            Later, I worked as a Child Safety Officer with a Queensland
            council, supporting families in crisis and walking alongside them
            through the child protection system. That work gave me a
            trauma-informed lens I still carry into every session, and a deep
            respect for how loss, fear and hope move through a family — often
            all at once.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border-l-4 border-gold bg-teal/5 p-8 sm:p-10">
          <h2 className="font-heading text-3xl text-teal">
            The loss that shaped this work
          </h2>
          <p className="mt-6 text-ink/90">
            I am a mother who has lost a child. It is the most significant
            thing that has ever happened to me, and it is why I do this work.
            I don&apos;t come to grief from theory — I have sat inside it. I
            won&apos;t pretend to have answers, but I can offer what I needed
            most in that time: someone steady, who doesn&apos;t rush you, and
            who won&apos;t look away.
          </p>
        </div>
      </section>

      <section className="bg-soft-teal/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl text-teal">
            Walk to Remember
          </h2>
          <p className="mt-6 text-ink/90">
            Each year, I help organise the Hervey Bay Walk to Remember — a
            gentle, community gathering for bereaved families to walk,
            remember, and be among others who understand. It&apos;s one of
            the ways I stay connected to our local grief-and-loss community,
            long before anyone sits down in a counselling room with me.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl text-teal">My approach</h2>
          <p className="mt-6 text-ink/90">
            I believe in sitting with people in their hardest moments rather
            than rushing them through. Counselling with me is warm, gentle
            and unhurried — a safe, non-clinical, deeply human space, whether
            we meet in person in Hervey Bay or online through telehealth.
            There&apos;s no pressure to arrive with the right words. We start
            wherever you are.
          </p>
        </div>
      </section>

      <section className="bg-soft-teal/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-3xl text-teal">
            Qualifications & training
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {qualifications.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-ink/90">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-20 text-center sm:px-6">
        <div className="mx-auto max-w-xl">
          <h2 className="font-heading text-3xl text-teal">
            If any of this feels familiar
          </h2>
          <p className="mt-4 text-ink/90">
            I&apos;d be glad to hear from you. Clearshore Counselling opens
            April 2027 — join the waitlist and I&apos;ll be in touch when
            booking begins.
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
