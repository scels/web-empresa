import { NextResponse, type NextRequest } from "next/server";

import { isLocale, defaultLocale } from "@/lib/i18n/dictionaries";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (firstSegment === "studio") return NextResponse.next();
  if (isLocale(firstSegment)) return NextResponse.next();

  const localizedUrl = request.nextUrl.clone();
  localizedUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(localizedUrl);
}

export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};