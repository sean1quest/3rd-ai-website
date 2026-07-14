import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PASSWORD = process.env.SITE_PASSWORD ?? "3rdai2026";
const COOKIE_NAME = "site_auth";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the auth page and API through
  if (pathname === "/auth" || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Check for valid auth cookie
  const cookie = request.cookies.get(COOKIE_NAME);
  if (cookie?.value === PASSWORD) return NextResponse.next();

  // Redirect to auth page
  const url = request.nextUrl.clone();
  url.pathname = "/auth";
  url.searchParams.set("from", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|logo.png|images|videos|Videos).*)"],
};
