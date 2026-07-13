import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_AUTH_COOKIE, hashSitePassword } from "@/lib/site-auth";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/enter" || pathname === "/api/enter") {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(SITE_AUTH_COOKIE)?.value;
  const expected = await hashSitePassword(process.env.SITE_PASSWORD ?? "");

  if (cookie && cookie === expected) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/enter";
  url.search = "";
  url.searchParams.set("redirect", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$|.*\\.avif$|.*\\.svg$|.*\\.ico$).*)",
  ],
};
