"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
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
    formData.append("subject", "New enquiry from Clearshore Counselling website");
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
        <h3 className="font-heading text-2xl text-teal">Thank you</h3>
        <p className="mt-3 text-ink/80">
          You&apos;re on the list, and I&apos;ll be in touch directly if you
          left a message.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-soft-teal/40 bg-white p-8 shadow-sm"
    >
      {/* Honeypot field for spam bots — hidden from real visitors */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-lg border border-soft-teal/50 px-3.5 py-2.5 text-ink outline-none focus:border-teal focus:ring-2 focus:ring-teal/30"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-lg border border-soft-teal/50 px-3.5 py-2.5 text-ink outline-none focus:border-teal focus:ring-2 focus:ring-teal/30"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message <span className="font-normal text-ink/60">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Ask a question, or leave this blank to simply join the waitlist."
          className="mt-1.5 w-full rounded-lg border border-soft-teal/50 px-3.5 py-2.5 text-ink outline-none focus:border-teal focus:ring-2 focus:ring-teal/30"
        />
        <p className="mt-2 text-xs text-ink/60">
          Please don&apos;t include health or clinical details here — we can
          talk through anything relevant to your care once we&apos;re in
          touch.
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong sending your message. Please try again, or
          email me directly at{" "}
          <a
            href="mailto:hello@clearshorecounselling.com"
            className="underline underline-offset-2"
          >
            hello@clearshorecounselling.com
          </a>
          .
        </p>
      )}

      <Button type="submit" className="w-full bg-gold text-ink hover:bg-gold/90" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send"}
      </Button>
    </form>
  );
}
