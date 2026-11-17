// Porte d'accès du site de staging (VPS, Coolify) : tout le site derrière un mot de passe.
// Active SEULEMENT si la variable STAGING_PASSWORD existe. Sur Vercel elle n'existe pas :
// la porte est inerte et le site se comporte comme avant.
// Web Crypto uniquement (crypto.subtle) : ce module tourne dans le middleware Edge ET en Node.

export const STAGING_COOKIE = "__Secure-staging_access";
export const STAGING_REMEMBER_SECONDS = 30 * 24 * 60 * 60; // « se souvenir de moi » : 30 jours
export const STAGING_LOGIN_PATH = "/acces";
export const STAGING_API_PATH = "/api/acces";

export function stagingPassword(): string | null {
  const p = process.env.STAGING_PASSWORD;
  return p && p.length >= 8 ? p : null;
}

// Jeton du cookie : empreinte du mot de passe. Changer le mot de passe invalide tous les cookies.
export async function stagingToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`derech-staging:v1:${password}`);
  const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", data));
  return Array.from(digest, (b) => b.toString(16).padStart(2, "0")).join("");
}

// Comparaison à temps constant (pas de sortie anticipée).
export function sameToken(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function hasStagingAccess(cookieValue: string | undefined): Promise<boolean> {
  const password = stagingPassword();
  if (!password) return true; // porte inactive
  if (!cookieValue) return false;
  return sameToken(cookieValue, await stagingToken(password));
}

// Retour après connexion : chemin interne seulement (pas de redirection ouverte).
export function safeReturnPath(from: string | null | undefined): string {
  if (!from || !from.startsWith("/") || from.startsWith("//") || from.startsWith("/\\")) return "/";
  if (from.startsWith(STAGING_LOGIN_PATH) || from.startsWith(STAGING_API_PATH)) return "/";
  return from;
}
