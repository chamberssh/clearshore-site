import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Enter password | Clearshore Counselling",
  robots: { index: false, follow: false },
};

export default async function EnterPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string; error?: string }>;
}) {
  const { redirect = "/", error } = await searchParams;

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6">
      <div className="w-full max-w-sm rounded-3xl border border-soft-teal/40 bg-white p-8 text-center shadow-sm">
        <Image
          src="/logo.png"
          alt="Clearshore Counselling logo"
          width={64}
          height={64}
          className="mx-auto"
        />
        <h1 className="mt-4 font-heading text-2xl text-teal">
          Private preview
        </h1>
        <p className="mt-2 text-sm text-ink/80">
          This site isn&apos;t public yet. Enter the password to continue.
        </p>

        <form action="/api/enter" method="POST" className="mt-6 space-y-4">
          <input type="hidden" name="redirect" value={redirect} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            autoFocus
            className="w-full rounded-lg border border-soft-teal/50 px-3.5 py-2.5 text-center text-ink outline-none focus:border-teal focus:ring-2 focus:ring-teal/30"
          />
          {error && (
            <p className="text-sm text-red-600" role="alert">
              That password isn&apos;t right. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-gold px-4 py-2.5 font-medium text-ink transition-colors hover:bg-gold/90"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
