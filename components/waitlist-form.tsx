"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""
    );
    formData.append("subject", "Waitlist signup — Clearshore Counselling");
    formData.append("from_name", "Clearshore Counselling website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-soft-teal/40 bg-white p-8 text-center shadow-sm">
        <h3 className="font-heading text-2xl text-teal">You&apos;re on the list</h3>
        <p className="mt-3 text-ink/80">
          I&apos;ll email you as soon as booking opens.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-soft-teal/40 bg-white p-8 shadow-sm"
    >
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="waitlist-name" className="block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="waitlist-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-lg border border-soft-teal/50 px-3.5 py-2.5 text-ink outline-none focus:border-teal focus:ring-2 focus:ring-teal/30"
        />
      </div>

      <div>
        <label htmlFor="waitlist-email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-lg border border-soft-teal/50 px-3.5 py-2.5 text-ink outline-none focus:border-teal focus:ring-2 focus:ring-teal/30"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong signing you up. Please try again, or email us
          directly.
        </p>
      )}

      <Button
        type="submit"
        className="w-full bg-gold text-ink hover:bg-gold/90"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Signing up…" : "Join the waitlist"}
      </Button>
    </form>
  );
}
