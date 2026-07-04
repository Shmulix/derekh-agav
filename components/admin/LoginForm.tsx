"use client";

// Formulaire de login admin. Aucun contenu de la doc ici : ce composant est
// public (bundle client servi avant auth).
import { useFormState, useFormStatus } from "react-dom";
import { Lock } from "lucide-react";
import { login, type LoginState } from "@/app/admin/login/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-navy px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-[#14264d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "בודק..." : "כניסה"}
    </button>
  );
}

export default function LoginForm({ from }: { from: string }) {
  const [state, formAction] = useFormState<LoginState, FormData>(login, null);

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="from" value={from} />
      <div>
        <label htmlFor="admin-password" className="mb-1.5 block text-sm font-medium text-text-main">
          סיסמת מנהל
        </label>
        <div className="relative">
          <input
            id="admin-password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            autoFocus
            maxLength={256}
            className="w-full rounded-lg border border-navy/20 bg-white px-4 py-3 pl-11 text-base text-text-main outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
          <Lock aria-hidden className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-navy/40" />
        </div>
      </div>
      {state?.error ? (
        <p role="alert" className="rounded-lg border border-[#e53e3e] bg-[#fff3f3] px-4 py-3 text-sm font-medium text-[#c53030]">
          {state.error}
        </p>
      ) : null}
      <SubmitButton />
    </form>
  );
}
