import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  if (formData.get("botcheck")?.toString()) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const formType = formData.get("form_type")?.toString() ?? "contact";
  const email = formData.get("email")?.toString().trim() ?? "";
  const name = formData.get("name")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!emailPattern.test(email) || email.length > 254) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  if (name.length > 100 || message.length > 3000) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  if (formType === "contact" && (!name || name.length < 2)) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const token = formData.get("cf-turnstile-response")?.toString();
    if (!token) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: turnstileSecret,
        response: token,
        remoteip: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
      }),
    });

    const verificationResult = await verification.json();
    if (!verificationResult.success) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json({ success: false }, { status: 500 });
  }

  const outbound = new FormData();
  outbound.append("access_key", accessKey);
  outbound.append("subject", formType === "waitlist"
    ? "New waitlist signup - Clearshore Counselling"
    : "New enquiry from Clearshore Counselling website");
  outbound.append("from_name", "Clearshore Counselling website");
  outbound.append("email", email);
  if (name) outbound.append("name", name);
  if (message) outbound.append("message", message);
  outbound.append("form_type", formType);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: outbound,
  });
  const result = await response.json();

  if (!response.ok || !result.success) {
    return NextResponse.json({ success: false }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
