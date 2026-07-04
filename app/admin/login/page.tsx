// Page de login admin. Hors du groupe (protected) : pas de session requise,
// mais AUCUN contenu de documentation ne doit exister ici.
import type { Metadata } from "next";
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
    <main dir="rtl" className="flex min-h-screen items-center justify-center bg-[#0d1f3c] px-4">
      <div className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="text-2xl font-bold text-white">דרך אגב</span>
            <span className="mt-2 inline-block h-2 w-2 rounded-full bg-gold" aria-hidden />
          </div>
          <p className="text-sm text-white/60">אזור ניהול. גישה למורשים בלבד.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
          <LoginForm from={from} />
        </div>
        <p className="mt-4 text-center text-xs text-white/40">
          החיבור מאובטח ומוגבל בזמן. הדפדפן חייב לתמוך בעוגיות.
        </p>
      </div>
    </main>
  );
}
