"use client";

// Formulaire de login admin. Aucun contenu de la doc ici : ce composant est
// public (bundle client servi avant auth). Style v2 : coins carres.
import { useFormState, useFormStatus } from "react-dom";
import { Lock } from "lucide-react";
import { login, type LoginState } from "@/app/admin/login/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-none bg-navy px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0e1a30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-60"
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
        <label
          htmlFor="admin-password"
          className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3a4255] [font-family:var(--font-mono-v2)]"
        >
          Password
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
            className="w-full rounded-none border border-[#e7e9f0] bg-white px-4 py-3 pl-11 text-base text-text-main outline-none transition-colors focus:border-navy"
          />
          <Lock aria-hidden className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/35" />
        </div>
      </div>
      {state?.error ? (
        <p role="alert" className="border-r-4 border-red-400 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {state.error}
        </p>
      ) : null}
      <SubmitButton />
    </form>
  );
}
