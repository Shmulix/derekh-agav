"use server";

// Actions serveur de l'admin protege. Les POST de ces actions passent par le
// middleware (cookie session), et les actions sensibles reverifient la
// session elles-memes (defense en profondeur).
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, verifySession } from "@/lib/admin/session";
import { ANONYMOUS_MODE } from "@/lib/site-config";

export async function logout(): Promise<void> {
  // La suppression du cookie doit reprendre le MEME Path que la pose (/admin),
  // sinon elle echoue silencieusement.
  cookies().set(SESSION_COOKIE, "", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/admin",
    maxAge: 0,
  });
  redirect("/admin/login");
}

// ── Bascule du mode anonyme ──────────────────────────────────────────────
// Le flag NEXT_PUBLIC_ANONYMOUS_MODE est inline au BUILD : changer le mode =
// mettre a jour la variable sur Vercel PUIS declencher un redeploiement.
// Identifiants non secrets du projet (le secret, c'est VERCEL_TOKEN en env).
const VERCEL_TEAM_ID = "team_yWLEeR7Bq5z2BnkMauKvNZDD";
const VERCEL_PROJECT_ID = "prj_nB90WxRk7TxiWQsie2XLArqwVrPq";
const GITHUB_REPO_ID = 1195524489; // Shmulix/derekh-agav
const GIT_BRANCH = "master";

export type ToggleResult =
  | { ok: true; newMode: boolean; message: string }
  | { ok: false; message: string };

async function vercelApi(path: string, init?: RequestInit): Promise<Response> {
  const url = `https://api.vercel.com${path}${path.includes("?") ? "&" : "?"}teamId=${VERCEL_TEAM_ID}`;
  return fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
}

export async function toggleAnonymousMode(): Promise<ToggleResult> {
  // Session obligatoire : cette action change le site public.
  const token = cookies().get(SESSION_COOKIE)?.value;
  if (!(await verifySession(token))) {
    return { ok: false, message: "אין הרשאה. יש להתחבר מחדש." };
  }
  if (!process.env.VERCEL_TOKEN) {
    return { ok: false, message: "VERCEL_TOKEN לא מוגדר. אי אפשר להחליף מצב מהאדמין." };
  }

  // La valeur du deploiement EN COURS est celle inlinee au build.
  const newMode = !ANONYMOUS_MODE;
  const newValue = newMode ? "true" : "false";

  try {
    // 1. Mettre a jour la variable sur les 3 environnements.
    const listRes = await vercelApi(`/v9/projects/${VERCEL_PROJECT_ID}/env`);
    if (!listRes.ok) return { ok: false, message: `שגיאת Vercel (${listRes.status}) בקריאת המשתנים.` };
    const list = (await listRes.json()) as { envs: { id: string; key: string }[] };
    const targets = list.envs.filter((env) => env.key === "NEXT_PUBLIC_ANONYMOUS_MODE");
    if (targets.length === 0) {
      return { ok: false, message: "המשתנה NEXT_PUBLIC_ANONYMOUS_MODE לא קיים ב־Vercel." };
    }
    for (const env of targets) {
      const patch = await vercelApi(`/v9/projects/${VERCEL_PROJECT_ID}/env/${env.id}`, {
        method: "PATCH",
        body: JSON.stringify({ value: newValue }),
      });
      if (!patch.ok) return { ok: false, message: `שגיאת Vercel (${patch.status}) בעדכון המשתנה.` };
    }

    // 2. Declencher un redeploiement de production depuis master.
    const deploy = await vercelApi(`/v13/deployments`, {
      method: "POST",
      body: JSON.stringify({
        name: "derekh-agav",
        project: VERCEL_PROJECT_ID,
        target: "production",
        gitSource: { type: "github", repoId: GITHUB_REPO_ID, ref: GIT_BRANCH },
      }),
    });
    if (!deploy.ok) {
      return {
        ok: false,
        message: `המשתנה עודכן, אבל הפריסה נכשלה (${deploy.status}). לפרוס ידנית: npx vercel --prod`,
      };
    }

    return {
      ok: true,
      newMode,
      message: newMode
        ? "המצב האנונימי מופעל. פריסה חדשה יצאה לדרך: השינוי יהיה באוויר בעוד כ־2 דקות."
        : "המצב האנונימי כובה: הזהות המלאה תוצג. פריסה חדשה יצאה לדרך, כ־2 דקות.",
    };
  } catch {
    return { ok: false, message: "שגיאה לא צפויה מול Vercel. לנסות שוב או לפרוס ידנית." };
  }
}
