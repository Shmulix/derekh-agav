import Link from "next/link";
import Image from "next/image";
import LaneDash from "./LaneDash";
import { booking } from "@/lib/site-config";

export default function FooterV2() {
  return (
    <footer className="bg-[#0e1a30] text-slate-300">
      <LaneDash />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <Image src="/logo.svg" alt="דרך אגב" width={132} height={42} className="brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              המדריך העצמאי הישראלי להשכרת רכב בחו״ל. כתוב מניסיון אמיתי, לא מגוגל.
            </p>
            <p className="mt-4 text-xs text-gold font-semibold">כי מי שיודע, לא מחכה לדלפק.</p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500 uppercase mb-4 [font-family:var(--font-mono-v2)]">Navigate</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">דף הבית</Link></li>
              <li><Link href="/guide" className="hover:text-white transition-colors">המדריך המלא</Link></li>
              <li><Link href="/posts" className="hover:text-white transition-colors">מאמרים</Link></li>
              <li><a href={booking.href} {...(booking.download ? { download: true } : {})} className="hover:text-white transition-colors">{booking.download ? "הורד את המדריך" : "איפה להזמין"}</a></li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500 uppercase mb-4 [font-family:var(--font-mono-v2)]">Topics</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/guide#insurance" className="hover:text-white transition-colors">ביטוח וכיסויים</Link></li>
              <li><Link href="/guide#documents" className="hover:text-white transition-colors">מסמכים נדרשים</Link></li>
              <li><Link href="/guide#deposit" className="hover:text-white transition-colors">פיקדון</Link></li>
              <li><Link href="/guide#fines" className="hover:text-white transition-colors">קנסות ודוחות</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-500">
          <p className="leading-relaxed max-w-md">
            האתר משתמש בקישורי שותפות. הזמנה דרך הקישורים מסייעת לאתר ללא עלות נוספת עבורך. ההמלצות עצמאיות ומקצועיות.
          </p>
          <p className="[font-family:var(--font-mono-v2)] tracking-wide">© 2026 דרך אגב</p>
        </div>
      </div>
    </footer>
  );
}
