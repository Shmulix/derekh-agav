"use client";

import { LogOut } from "lucide-react";
import { logout } from "@/app/admin/(protected)/actions";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button
        type="submit"
        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      >
        <LogOut aria-hidden className="h-4 w-4" />
        יציאה
      </button>
    </form>
  );
}
