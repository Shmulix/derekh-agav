"use server";

// Deconnexion admin. La suppression du cookie doit reprendre le MEME Path
// que la pose (/admin), sinon elle echoue silencieusement.
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE } from "@/lib/admin/session";

export async function logout(): Promise<void> {
  cookies().set(SESSION_COOKIE, "", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/admin",
    maxAge: 0,
  });
  redirect("/admin/login");
}
