// Verification du mot de passe admin (scrypt, node:crypto).
// Ce module utilise le runtime Node : il ne doit etre importe QUE par la
// Server Action de login (app/admin/login/actions.ts). L'importer dans
// middleware.ts casserait le build Edge, et c'est voulu.
import { scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, verifySession } from "./session";

// Format stocke : scrypt:N:r:p:<salt-b64url>:<hash-b64url>
// Separateur ":" et pas "$" : dotenv (via @next/env) applique une expansion
// de variables sur .env.local et viderait tout segment commencant par $lettre.
export function verifyPassword(password: string): boolean {
  const stored = process.env.ADMIN_PASSWORD_HASH;
  if (!stored) return false; // fail-closed : pas de hash => admin verrouille

  const parts = stored.split(":");
  if (parts.length !== 6 || parts[0] !== "scrypt") return false;

  const N = Number(parts[1]);
  const r = Number(parts[2]);
  const p = Number(parts[3]);
  const salt = Buffer.from(parts[4], "base64url");
  const expected = Buffer.from(parts[5], "base64url");
  if (!Number.isFinite(N) || !Number.isFinite(r) || !Number.isFinite(p)) return false;
  if (salt.length < 8 || expected.length < 32) return false;

  try {
    const actual = scryptSync(password, salt, expected.length, { N, r, p });
    return timingSafeEqual(actual, expected);
  } catch {
    return false;
  }
}

// Verrou cote rendu : a appeler dans le layout protege ET dans chaque page
// protegee (defense en profondeur : la navigation douce ne re-rend pas le
// layout, et on ne fait pas confiance au seul middleware).
export async function requireSession(): Promise<void> {
  const token = cookies().get(SESSION_COOKIE)?.value;
  if (!(await verifySession(token))) {
    redirect("/admin/login");
  }
}
