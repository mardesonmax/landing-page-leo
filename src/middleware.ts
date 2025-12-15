import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";

import {
  cookieName,
  fallbackLng,
  headerName,
  Languages,
  languages,
} from "./translation/settings";

acceptLanguage.languages([...languages]);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.indexOf("icon") > -1 ||
    req.nextUrl.pathname.indexOf("chrome") > -1
  ) {
    return NextResponse.next();
  }

  let lng: Languages | null = null;

  if (req.cookies.has(cookieName)) {
    const fromCookie = acceptLanguage.get(
      req.cookies.get(cookieName)?.value ?? ""
    );
    if (fromCookie) {
      lng = fromCookie as Languages;
    }
  }

  if (!lng) {
    const fromHeader = req.headers.get("Accept-Language") ?? "";
    const detected = acceptLanguage.get(fromHeader);
    if (detected) {
      lng = detected as Languages;
    }
  }

  if (!lng) {
    lng = fallbackLng;
  }

  const lngInPath = languages.find((loc) =>
    req.nextUrl.pathname.startsWith(`/${loc}`)
  );

  const headers = new Headers(req.headers);
  headers.set(headerName, lngInPath || lng);

  // Redirect se o path não tem idioma suportado
  if (!lngInPath && !req.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") || "");
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next({ headers });
    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer);
    }
    return response;
  }

  return NextResponse.next({ headers });
}
