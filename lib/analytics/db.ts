// Acces a la base analytics (Neon Postgres, driver HTTP serverless).
// Fail-closed cote lecture ET ecriture : sans DATABASE_URL, sql() vaut null
// et l'analytics est simplement inactive (jamais d'erreur utilisateur).
import { neon } from "@neondatabase/serverless";

export function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  return neon(url);
}
