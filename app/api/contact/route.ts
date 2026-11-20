import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const submissionWindows = new Map<string, { count: number; expiresAt: number }>();

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin) {
    const originUrl = new URL(origin);
    if (!["clearshorecounselling.com", "www.clearshorecounselling.com"].includes(originUrl.hostname)) {
      return NextResponse.json({ success: false }, { status: 403 });
    }
  }

  const now = Date.now();
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const window = submissionWindows.get(ip);

  if (window && window.expiresAt > now && window.count >= 5) {
    return NextResponse.json({ success: false }, { status: 429 });
  }

  submissionWindows.set(ip, {
    count: window && window.expiresAt > now ? window.count + 1 : 1,
    expiresAt: window && window.expiresAt > now ? window.expiresAt : now + 15 * 60 * 1000,
  });

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
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!turnstileSecret || !accessKey) {
    return NextResponse.json({ success: false }, { status: 503 });
  }

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
      remoteip: ip,
    }),
  });

  const verificationResult = await verification.json();
  if (!verificationResult.success) {
    return NextResponse.json({ success: false }, { status: 400 });
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
