import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The counsellor guide was merged into the Clearshore Assist page.
  if (pathname === "/counsellor-guide") {
    return NextResponse.redirect(new URL("/assist", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$|.*\\.avif$|.*\\.svg$|.*\\.ico$).*)",
  ],
};
