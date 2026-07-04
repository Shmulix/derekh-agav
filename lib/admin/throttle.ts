// Limiteur d'essais de connexion, best-effort.
// LIMITE CONNUE (documentee, assumee) : sur Vercel serverless la Map vit par
// instance chaude et disparait au cold start ; les instances concurrentes ne
// partagent rien. La vraie defense reste le mot de passe ~128 bits + le cout
// scrypt par tentative (brute force hors de portee meme sans throttle).

const MAX_FAILURES = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

type Entry = { count: number; resetAt: number };
const attempts = new Map<string, Entry>();

export function isThrottled(ip: string): boolean {
  const entry = attempts.get(ip);
  if (!entry) return false;
  if (Date.now() > entry.resetAt) {
    attempts.delete(ip);
    return false;
  }
  return entry.count >= MAX_FAILURES;
}

export function recordFailure(ip: string): void {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  } else {
    entry.count += 1;
  }
  // Purge opportuniste pour ne pas laisser grossir la Map.
  if (attempts.size > 1000) {
    attempts.forEach((value, key) => {
      if (now > value.resetAt) attempts.delete(key);
    });
  }
}

export function recordSuccess(ip: string): void {
  attempts.delete(ip);
}

// Delai constant + jitter sur echec : lisse le timing et freine les scripts.
export function failureDelay(): Promise<void> {
  const ms = 300 + Math.floor(Math.random() * 200);
  return new Promise((resolve) => setTimeout(resolve, ms));
}
