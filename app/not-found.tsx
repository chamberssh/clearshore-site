import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WaveDivider } from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "Page not found | Clearshore Counselling",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-teal)_88%,white)_0%,var(--color-teal)_65%)] px-4 py-28 text-center text-white sm:px-6 sm:py-40">
      <div className="mx-auto max-w-xl">
        <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
          404
        </p>
        <h1 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
          This page has drifted off course
        </h1>
        <p className="mt-6 text-lg text-white/90">
          The page you&apos;re looking for doesn&apos;t exist, or may have
          moved. Let&apos;s get you back to steadier ground.
        </p>
        <div className="mt-8">
          <Button
            render={<Link href="/" />}
            nativeButton={false}
            size="lg"
            className="bg-gold text-ink hover:bg-gold/90"
          >
            Back to home
          </Button>
        </div>
      </div>
      <WaveDivider className="absolute inset-x-0 bottom-0 translate-y-px text-white" />
    </section>
  );
}
