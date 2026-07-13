import type { Metadata } from "next";
import { WaveDivider } from "@/components/wave-divider";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Clearshore Counselling, Hervey Bay QLD",
  description:
    "How Clearshore Counselling collects, uses, and protects your personal information.",
  path: "/privacy",
});

export default function Privacy() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-teal)_88%,white)_0%,var(--color-teal)_65%)] px-4 py-20 text-center text-white sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Privacy
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
            Privacy policy
          </h1>
        </div>
        <WaveDivider className="absolute inset-x-0 bottom-0 translate-y-px text-white" />
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-ink/90">
          <p className="text-sm text-ink/60">Last updated: 13 July 2026</p>

          <p>
            Clearshore Counselling (“we”, “us”) respects
            your privacy. This policy explains what personal information this
            website collects, how it&apos;s used, and who it&apos;s shared
            with. It applies to this website only, ahead of the practice
            opening in April 2027.
          </p>

          <div>
            <h2 className="font-heading text-2xl text-teal">
              What we collect
            </h2>
            <p className="mt-3">
              The only personal information this website collects is what you
              choose to submit through the contact form: your name, email
              address, and message. We don&apos;t use analytics or tracking
              cookies. The only cookie this site sets is a strictly necessary
              one that keeps you signed in to the private preview password
              during the pre-launch period, and it stores no personal
              information.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-teal">
              How it&apos;s used
            </h2>
            <p className="mt-3">
              Information submitted through the contact form is used only to
              respond to your enquiry. We don&apos;t use it for marketing,
              and we don&apos;t sell or share it with third parties beyond
              the form processor below.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-teal">
              Third-party processors
            </h2>
            <p className="mt-3">
              Contact form submissions are delivered using{" "}
              <a
                href="https://web3forms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-teal"
              >
                Web3Forms
              </a>
              , a third-party form processing service. Your message passes
              through their servers on its way to our inbox. We recommend
              reviewing{" "}
              <a
                href="https://web3forms.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-teal"
              >
                Web3Forms&apos; own privacy policy
              </a>{" "}
              if you&apos;d like more detail on how they handle data in
              transit.
            </p>
          </div>

          <div className="rounded-3xl border-l-4 border-gold bg-teal/5 p-6">
            <h2 className="font-heading text-xl text-teal">
              Please don&apos;t share health information here
            </h2>
            <p className="mt-3 text-sm">
              This contact form is for general enquiries only, and this
              website does not currently have the safeguards required to
              collect clinical or health information. Please don&apos;t
              include details about your health, diagnoses, or the reason
              you&apos;re seeking counselling in your message. Anything
              relevant to your care can be discussed once we&apos;re in
              direct contact, and once the practice opens, a proper client
              intake process with appropriate privacy protections will be put
              in place before any health information is collected.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-teal">
              Access and correction
            </h2>
            <p className="mt-3">
              You can ask us what personal information we hold about you, or
              ask us to correct or delete it, by emailing us via the{" "}
              <a
                href="/contact"
                className="underline underline-offset-2 hover:text-teal"
              >
                contact page
              </a>
              . If you&apos;re not satisfied with how we&apos;ve handled your
              personal information, you can lodge a complaint with the{" "}
              <a
                href="https://www.oaic.gov.au"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-teal"
              >
                Office of the Australian Information Commissioner
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-teal">
              This policy will grow with the practice
            </h2>
            <p className="mt-3">
              This is a general policy for the current pre-launch website. It
              will need updating before the practice opens, particularly once
              client intake, session booking, and clinical record-keeping
              involve collecting sensitive health information, which is
              subject to stricter requirements under the Australian Privacy
              Principles. We&apos;ll publish an updated policy, reviewed by a
              qualified professional, before that happens.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
