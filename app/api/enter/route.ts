import { NextResponse } from "next/server";
import { SITE_AUTH_COOKIE, hashSitePassword } from "@/lib/site-auth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");
  const redirectTo = String(formData.get("redirect") ?? "/");
  const safeRedirect = redirectTo.startsWith("/") ? redirectTo : "/";

  if (!process.env.SITE_PASSWORD || password !== process.env.SITE_PASSWORD) {
    const url = new URL("/enter", request.url);
    url.searchParams.set("error", "1");
    url.searchParams.set("redirect", safeRedirect);
    return NextResponse.redirect(url, { status: 303 });
  }

  const response = NextResponse.redirect(new URL(safeRedirect, request.url), {
    status: 303,
  });
  response.cookies.set(SITE_AUTH_COOKIE, await hashSitePassword(password), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
  return response;
}
