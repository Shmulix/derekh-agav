// Jeton de session admin : v1.<b64url(payload)>.<b64url(HMAC-SHA256)>.
// ECRIT UNIQUEMENT avec l'API Web Crypto (crypto.subtle) : ce module doit
// fonctionner dans le middleware Edge ET en Node. Ne jamais importer
// node:crypto ici (build Edge cassé sinon).
// Fail-closed : secret absent ou jeton invalide => false, jamais d'exception.

const TOKEN_VERSION = "v1";
export const SESSION_COOKIE = "__Secure-admin_session";
export const SESSION_MAX_AGE_SECONDS = 12 * 60 * 60; // 12h

type SessionPayload = {
  iat: number; // epoch secondes
  exp: number; // epoch secondes
};

function getSecret(): string | null {
  const secret = process.env.ADMIN_SESSION_SECRET;
  return secret && secret.length >= 64 ? secret : null;
}

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(input: string): Uint8Array | null {
  try {
    const padded = input.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(padded + "=".repeat((4 - (padded.length % 4)) % 4));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
  } catch {
    return null;
  }
}

async function importHmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function signSession(): Promise<string | null> {
  const secret = getSecret();
  if (!secret) return null;

  const now = Math.floor(Date.now() / 1000);
  const payload: SessionPayload = { iat: now, exp: now + SESSION_MAX_AGE_SECONDS };
  const payloadB64 = base64UrlEncode(new TextEncoder().encode(JSON.stringify(payload)));

  const key = await importHmacKey(secret);
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(`${TOKEN_VERSION}.${payloadB64}`)
  );
  return `${TOKEN_VERSION}.${payloadB64}.${base64UrlEncode(new Uint8Array(signature))}`;
}

export async function verifySession(token: string | undefined): Promise<boolean> {
  try {
    const secret = getSecret();
    if (!secret || !token) return false;

    const parts = token.split(".");
    if (parts.length !== 3 || parts[0] !== TOKEN_VERSION) return false;
    const [version, payloadB64, signatureB64] = parts;

    const signature = base64UrlDecode(signatureB64);
    if (!signature) return false;

    const key = await importHmacKey(secret);
    // crypto.subtle.verify est en temps constant : pas de comparaison manuelle.
    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      signature as BufferSource,
      new TextEncoder().encode(`${version}.${payloadB64}`)
    );
    if (!valid) return false;

    const payloadBytes = base64UrlDecode(payloadB64);
    if (!payloadBytes) return false;
    const payload = JSON.parse(new TextDecoder().decode(payloadBytes)) as SessionPayload;
    if (typeof payload.exp !== "number" || typeof payload.iat !== "number") return false;

    const now = Math.floor(Date.now() / 1000);
    return payload.exp > now && payload.iat <= now + 60;
  } catch {
    return false;
  }
}
