"use client";

import Script from "next/script";
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [turnstileSiteKey, setTurnstileSiteKey] = useState<string>();

  useEffect(() => {
    fetch("/api/turnstile-config")
      .then((response) => response.json())
      .then((result) => setTurnstileSiteKey(result.siteKey || undefined))
      .catch(() => setTurnstileSiteKey(undefined));
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("form_type", "waitlist");

    try {
      const response = await fetch("/api/contact", {
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
      <p className="rounded-full bg-white/15 px-6 py-3.5 text-center text-white" role="status">
        You&apos;re on the list — I&apos;ll be in touch when booking opens.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md">
      {turnstileSiteKey && (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="afterInteractive"
          />
          <div
            className="cf-turnstile mb-3 flex justify-center"
            data-sitekey={turnstileSiteKey}
            data-theme="light"
          />
        </>
      )}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          className="w-full flex-1 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-white placeholder:text-white/60 outline-none focus:border-white focus:ring-2 focus:ring-white/40"
        />
        <Button
          type="submit"
          className="shrink-0 rounded-full bg-gold text-ink hover:bg-gold/90"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Joining…" : "Join the waitlist"}
        </Button>
      </div>
      {status === "error" && (
        <p className="mt-3 text-center text-sm text-white" role="alert">
          Something went wrong — please try again, or use the{" "}
          <a href="/contact#waitlist" className="underline underline-offset-2">
            contact form
          </a>
          .
        </p>
      )}
      <p className="mt-3 text-center text-xs text-white/70">
        Just your email — no spam, and I&apos;ll only write when there&apos;s
        news.
      </p>
    </form>
  );
}
