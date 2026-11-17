// Deux verrous, en Edge (n'importer que du code compatible Web Crypto) :
// 1. Porte du site de staging (lib/staging.ts) : tout le site derrière un mot de passe, seulement
//    si STAGING_PASSWORD existe (VPS). Sur Vercel, inerte.
// 2. Admin : chaque requete vers /admin/* (pages, payloads RSC, prefetch) exige une session valide.
import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, verifySession } from "@/lib/admin/session";
import {
  STAGING_API_PATH,
  STAGING_COOKIE,
  STAGING_LOGIN_PATH,
  hasStagingAccess,
  stagingPassword,
} from "@/lib/staging";

export const config = {
  // Tout sauf les fichiers statiques de Next et les images (l'optimiseur d'images les relit en
  // interne, sans cookie).
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:avif|webp|png|jpe?g|gif|svg|ico|woff2?)$).*)"],
};

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  if (stagingPassword()) {
    const isGatePage = pathname === STAGING_LOGIN_PATH || pathname === STAGING_API_PATH;
    if (!isGatePage && !(await hasStagingAccess(req.cookies.get(STAGING_COOKIE)?.value))) {
      const login = new URL(STAGING_LOGIN_PATH, req.url);
      login.searchParams.set("from", pathname + search);
      return withStagingHeaders(NextResponse.redirect(login));
    }
  }

  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return withStagingHeaders(await adminGate(req, pathname));
  }

  return withStagingHeaders(NextResponse.next());
}

async function adminGate(req: NextRequest, pathname: string) {
  const authed = await verifySession(req.cookies.get(SESSION_COOKIE)?.value);

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

// Staging : jamais indexé, quelle que soit la page.
function withStagingHeaders(res: NextResponse) {
  if (stagingPassword()) res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return res;
}

// no-store aussi ici (Next peut ecraser le Cache-Control de next.config sur
// les routes dynamiques) + noindex sur toute la zone admin, login compris.
function withAdminHeaders(res: NextResponse) {
  res.headers.set("Cache-Control", "no-store, max-age=0");
  res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return res;
}
