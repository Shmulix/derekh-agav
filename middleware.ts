// Verrou n°1 de l'admin : chaque requete vers /admin/* (pages, payloads RSC,
// prefetch) passe ici. Sans session valide => redirection vers le login.
// Runtime Edge : n'importer que du code compatible Web Crypto (lib/admin/session).
import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, verifySession } from "@/lib/admin/session";

export const config = {
  matcher: ["/admin/:path*"], // couvre aussi /admin nu (zero segment ou plus)
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const authed = await verifySession(token);

  if (pathname === "/admin/login") {
    if (authed) {
      return withAdminHeaders(NextResponse.redirect(new URL("/admin", req.url)));
    }
    return withAdminHeaders(NextResponse.next());
  }

  if (!authed) {
    const login = new URL("/admin/login", req.url);
    login.searchParams.set("from", pathname);
    return withAdminHeaders(NextResponse.redirect(login));
  }

  return withAdminHeaders(NextResponse.next());
}

// no-store aussi ici (Next peut ecraser le Cache-Control de next.config sur
// les routes dynamiques) + noindex sur toute la zone admin, login compris.
function withAdminHeaders(res: NextResponse) {
  res.headers.set("Cache-Control", "no-store, max-age=0");
  res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return res;
}
