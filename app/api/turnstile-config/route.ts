import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const siteKey =
    process.env.TURNSTILE_SITE_KEY ??
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return NextResponse.json(
    { siteKey: siteKey || null },
    { headers: { "Cache-Control": "no-store" } },
  );
}
