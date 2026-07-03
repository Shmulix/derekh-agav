import Reveal from "@/components/Reveal";
import LaneDash from "./LaneDash";

const mono = "[font-family:var(--font-mono-v2)]";

// Témoignages d'EXEMPLE (placeholder). À remplacer par de vrais avis avant lancement.
const items = [
  { text: "הגעתי לדלפק ברומא עם הרישיון הבינלאומי שאף אחד לא אמר לי שצריך. המדריך הציל לי את היום.", name: "דנה ל.", role: "טיול באיטליה", initials: "ד" },
  { text: "חשבתי ש-CDW זה כיסוי מלא. אחרי שקראתי כאן לקחתי SCDW. שבוע אחרי שרטתי את הרכב ויצאתי בלי לשלם שקל.", name: "יואב מ.", role: "השכרה ביוון", initials: "י" },
  { text: "ZTL באיטליה. לא ידעתי מה זה. בזכות הכתבה נמנעתי משלושה קנסות בפירנצה.", name: "נטע ב.", role: "חופשה בטוסקנה", initials: "נ" },
];

export default function TestimonialsV2() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <Reveal>
        <p className={`text-[11px] font-semibold tracking-[0.2em] text-gold uppercase ${mono}`}>Field reports</p>
        <h2 className="text-3xl md:text-5xl font-black text-navy tracking-tight mt-3 leading-tight">
          מה אומרים מי שכבר עמדו בדלפק
        </h2>
        <LaneDash className="mt-6 max-w-[140px]" />
      </Reveal>

      <div className="grid md:grid-cols-3 gap-px bg-[#e7e9f0] border border-[#e7e9f0] mt-14">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 90} className="bg-white">
            <figure className="h-full p-8 md:p-10 flex flex-col">
              <span className="inline-block w-7 h-[3px] bg-gold mb-6" />
              <blockquote className="text-[#3a4255] leading-relaxed flex-1">{t.text}</blockquote>
              <figcaption className="flex items-center gap-3 mt-7 pt-6 border-t border-[#e7e9f0]">
                <span className="w-10 h-10 bg-navy text-gold font-bold flex items-center justify-center flex-shrink-0">
                  {t.initials}
                </span>
                <div>
                  <p className="font-bold text-navy text-sm leading-tight">{t.name}</p>
                  <p className="text-[#9aa3b5] text-xs mt-0.5">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
