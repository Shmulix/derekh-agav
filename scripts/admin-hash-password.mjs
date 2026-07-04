// Hache un mot de passe admin au format scrypt:N:r:p:<salt-b64>:<hash-b64>.
// Separateur ":" (pas "$") : dotenv et le shell mangeraient les segments en $.
// Usage : node scripts/admin-hash-password.mjs "<mot-de-passe>"
// Le resultat va dans la variable d'environnement ADMIN_PASSWORD_HASH.
// Ne JAMAIS commiter le mot de passe en clair ni le logger.
import { randomBytes, scryptSync } from "node:crypto";

const password = process.argv[2];
if (!password) {
  console.error("Usage: node scripts/admin-hash-password.mjs \"<password>\"");
  process.exit(1);
}

const N = 16384;
const r = 8;
const p = 1;
const keylen = 64;
const salt = randomBytes(16);
const hash = scryptSync(password, salt, keylen, { N, r, p });

console.log(
  `scrypt:${N}:${r}:${p}:${salt.toString("base64url")}:${hash.toString("base64url")}`
);
