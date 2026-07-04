// Collecte analytics maison, sans cookies et sans identifiant persistant.
// Le beacon public (components/AnalyticsBeacon.tsx) POSTe ici a chaque vue.
// Vie privee : pas d'IP stockee. Le "visiteur unique" est un hash HMAC
// journalier de (IP + user-agent + jour + sel secret) : irreversible, et il
// change chaque jour, donc aucun suivi inter-jours possible.
import { NextResponse, type NextRequest } from "next/server";
import { getSql } from "@/lib/analytics/db";

export const runtime = "edge";

// Seuls les chemins publics reels sont acceptes : un slug de post = minuscules,
// chiffres et tirets. Tout le reste (dont /admin) est ignore silencieusement.
const VALID_PATH = /^\/(?:$|guide$|posts$|posts\/[a-z0-9-]{1,64}$)/;

function isBot(userAgent: string): boolean {
  return /bot|crawl|spider|slurp|bing|duckduck|baidu|yandex|facebookexternalhit|preview|monitor|pingdom|lighthouse|headless/i.test(
    userAgent
  );
}

async function dailyVisitorHash(ip: string, userAgent: string, day: string): Promise<string> {
  const salt = process.env.ANALYTICS_SALT ?? "";
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(salt),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(`${ip}|${userAgent}|${day}`)
  );
  return Array.from(new Uint8Array(sig).slice(0, 16))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function POST(req: NextRequest) {
  // Reponse toujours 204 : le beacon ne doit jamais faire echouer une page
  // publique, et l'exterieur n'apprend rien de l'etat de la collecte.
  const done = new NextResponse(null, { status: 204 });

  try {
    const sql = getSql();
    if (!sql || !process.env.ANALYTICS_SALT) return done;

    const userAgent = req.headers.get("user-agent") ?? "";
    if (!userAgent || isBot(userAgent)) return done;

    const body = (await req.json().catch(() => null)) as { path?: unknown; ref?: unknown } | null;
    const path = typeof body?.path === "string" ? body.path : "";
    if (!VALID_PATH.test(path)) return done;

    // Referrer externe uniquement (hostname seul, pas d'URL complete).
    let referrer = "";
    if (typeof body?.ref === "string" && body.ref) {
      try {
        const url = new URL(body.ref);
        if (url.hostname && url.hostname !== req.nextUrl.hostname) referrer = url.hostname;
      } catch {
        // referrer illisible : ignore
      }
    }

    const device = /Mobi|Android|iPhone/i.test(userAgent) ? "mobile" : "desktop";
    const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0]?.trim() || "unknown";
    // Jour en fuseau israelien, coherent avec la colonne day de la table.
    const day = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Jerusalem" }).format(new Date());
    const visitorHash = await dailyVisitorHash(ip, userAgent, day);

    await sql`
      INSERT INTO pageviews (path, referrer, device, visitor_hash, day)
      VALUES (${path}, ${referrer.slice(0, 128)}, ${device}, ${visitorHash}, ${day})
    `;
  } catch {
    // Jamais d'erreur exposee.
  }
  return done;
}
