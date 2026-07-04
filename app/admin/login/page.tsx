// Page de login admin. Hors du groupe (protected) : pas de session requise,
// mais AUCUN contenu de documentation ne doit exister ici.
// Design aligne sur la refonte v2 : coins carres, LaneDash, logo officiel.
import type { Metadata } from "next";
import Image from "next/image";
import LaneDash from "@/components/v2/LaneDash";
import LoginForm from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "כניסת מנהל | דרך אגב",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: { from?: string };
}) {
  const from = typeof searchParams.from === "string" ? searchParams.from : "/admin";

  return (
    <main dir="rtl" className="relative flex min-h-screen flex-col bg-[#0e1a30]">
      {/* Marquage routier discret en arriere-plan, signature de la marque */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[2px] opacity-[0.07]"
        style={{ background: "repeating-linear-gradient(to left, #c9a227 0 14px, transparent 14px 28px)" }}
      />

      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          {/* Logo officiel, inverse pour fond sombre (meme traitement que le footer du site) */}
          <div className="mb-8 flex flex-col items-center">
            <Image
              src="/logo.svg"
              alt="דרך אגב"
              width={150}
              height={48}
              priority
              className="brightness-0 invert"
            />
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 [font-family:var(--font-mono-v2)]">
              Admin Access
            </p>
          </div>

          <div className="border border-white/10 bg-white shadow-2xl">
            <LaneDash />
            <div className="p-7 sm:p-8">
              <h1 className="text-lg font-bold text-navy">כניסה לאזור הניהול</h1>
              <p className="mb-6 mt-1 text-sm leading-relaxed text-[#3a4255]">
                גישה למורשים בלבד. החיבור מאובטח ומוגבל ל־12 שעות.
              </p>
              <LoginForm from={from} />
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500 [font-family:var(--font-mono-v2)] tracking-wide">
            © 2026 דרך אגב
          </p>
        </div>
      </div>
    </main>
  );
}
