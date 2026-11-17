// Connexion au site de staging : vérifie le mot de passe, pose le cookie, renvoie à la page demandée.
// « Se souvenir de moi » coché : cookie de 30 jours ; sinon cookie de session (fermé avec le navigateur).
import { NextResponse, type NextRequest } from "next/server";
import {
  STAGING_COOKIE,
  STAGING_LOGIN_PATH,
  STAGING_REMEMBER_SECONDS,
  safeReturnPath,
  sameToken,
  stagingPassword,
  stagingToken,
} from "@/lib/staging";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const expected = stagingPassword();
  const form = await req.formData();
  const from = safeReturnPath(String(form.get("from") ?? "/"));

  if (!expected) return seeOther(from);

  const given = String(form.get("password") ?? "");
  const ok = sameToken(await stagingToken(given), await stagingToken(expected));

  if (!ok) {
    // Petit délai contre les essais en rafale.
    await new Promise((r) => setTimeout(r, 800));
    return seeOther(`${STAGING_LOGIN_PATH}?error=1&from=${encodeURIComponent(from)}`);
  }

  const res = seeOther(from);
  res.cookies.set(STAGING_COOKIE, await stagingToken(expected), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    ...(form.get("remember") ? { maxAge: STAGING_REMEMBER_SECONDS } : {}),
  });
  return res;
}

// Redirection relative : derrière le proxy (Coolify), req.url porte l'adresse interne du conteneur
// (0.0.0.0:3000), pas le domaine public. Le navigateur résout un Location relatif sur son adresse.
function seeOther(path: string) {
  return new NextResponse(null, { status: 303, headers: { Location: path, "Cache-Control": "no-store" } });
}
