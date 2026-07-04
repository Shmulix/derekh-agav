"use server";

// Server Action de connexion admin (runtime Node : scrypt autorise ici).
// Next verifie nativement l'Origin/Host des Server Actions (anti-CSRF).
// Regle absolue : ne JAMAIS logger le mot de passe, le hash, le jeton ou le
// cookie (les logs Vercel sont conserves).
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { verifyPassword } from "@/lib/admin/auth";
import { signSession, SESSION_COOKIE, SESSION_MAX_AGE_SECONDS } from "@/lib/admin/session";
import { failureDelay, isThrottled, recordFailure, recordSuccess } from "@/lib/admin/throttle";

const GENERIC_ERROR = "סיסמה שגויה. נסה שוב.";
const THROTTLE_ERROR = "יותר מדי ניסיונות. נסה שוב בעוד רבע שעה.";

export type LoginState = { error: string } | null;

function clientIp(): string {
  const forwarded = headers().get("x-forwarded-for") ?? "";
  return forwarded.split(",")[0]?.trim() || "unknown";
}

function safeRedirectTarget(raw: unknown): string {
  if (typeof raw !== "string") return "/admin";
  // Garde anti open-redirect : uniquement des chemins internes a l'admin.
  if (raw === "/admin" || (raw.startsWith("/admin/") && !raw.startsWith("//"))) return raw;
  return "/admin";
}

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const ip = clientIp();
  if (isThrottled(ip)) {
    await failureDelay();
    return { error: THROTTLE_ERROR };
  }

  const password = formData.get("password");
  if (typeof password !== "string" || password.length === 0 || password.length > 256) {
    recordFailure(ip);
    await failureDelay();
    return { error: GENERIC_ERROR };
  }

  if (!verifyPassword(password)) {
    recordFailure(ip);
    await failureDelay();
    return { error: GENERIC_ERROR };
  }

  const token = await signSession();
  if (!token) {
    // Secret de session absent : on reste verrouille (fail-closed).
    return { error: GENERIC_ERROR };
  }

  recordSuccess(ip);
  cookies().set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/admin",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });

  redirect(safeRedirectTarget(formData.get("from")));
}
