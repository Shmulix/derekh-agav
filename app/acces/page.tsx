// Page d'accès du site de staging (lib/staging.ts). Formulaire HTML simple, sans JavaScript.
// Sans STAGING_PASSWORD (Vercel), elle renvoie à l'accueil.
import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import LaneDash from "@/components/v2/LaneDash";
import { STAGING_API_PATH, safeReturnPath, stagingPassword } from "@/lib/staging";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "כניסה לאתר הבדיקות",
  robots: { index: false, follow: false },
};

export default function StagingAccessPage({
  searchParams,
}: {
  searchParams: { from?: string; error?: string };
}) {
  if (!stagingPassword()) redirect("/");
  const from = safeReturnPath(searchParams.from);
  const error = searchParams.error === "1";

  return (
    <main dir="rtl" className="relative flex min-h-screen flex-col bg-[#0e1a30]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[2px] opacity-[0.07]"
        style={{ background: "repeating-linear-gradient(to left, #c9a227 0 14px, transparent 14px 28px)" }}
      />

      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex flex-col items-center">
            <Image src="/logo.svg" alt="דרך אגב" width={150} height={48} priority className="brightness-0 invert" />
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 [font-family:var(--font-mono-v2)]">
              Staging
            </p>
          </div>

          <div className="border border-white/10 bg-white shadow-2xl">
            <LaneDash />
            <form method="post" action={STAGING_API_PATH} className="p-7 sm:p-8">
              <h1 className="text-lg font-bold text-navy">אתר הבדיקות</h1>
              <p className="mb-6 mt-1 text-sm leading-relaxed text-[#3a4255]">
                הגרסה הקודמת של האתר, לצוות בלבד.
              </p>

              <input type="hidden" name="from" value={from} />

              <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-navy">
                סיסמה
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoFocus
                autoComplete="current-password"
                aria-invalid={error || undefined}
                aria-describedby={error ? "password-error" : undefined}
                className="h-11 w-full rounded-none border border-[#e7e9f0] px-3 text-navy focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
              />
              {error && (
                <p id="password-error" role="alert" className="mt-2 text-sm text-red-700">
                  הסיסמה שגויה. נסו שוב.
                </p>
              )}

              <label className="mt-5 flex cursor-pointer items-center gap-2.5 text-sm text-[#3a4255]">
                <input type="checkbox" name="remember" value="1" defaultChecked className="h-4 w-4 accent-[#1a2f5e]" />
                לזכור אותי במכשיר הזה (30 יום)
              </label>

              <button
                type="submit"
                className="mt-6 h-11 w-full rounded-none bg-gold font-bold text-navy transition-colors hover:bg-gold-dark"
              >
                כניסה
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
