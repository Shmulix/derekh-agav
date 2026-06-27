import { Quote } from "lucide-react";

type Testimonial = {
  text: string;
  name: string;
  role: string;
  initials: string;
};

// NOTE : témoignages d'EXEMPLE (placeholder). À remplacer par de vrais avis
// avant le lancement. Un site de confiance ne doit pas afficher de faux avis.
const testimonials: Testimonial[] = [
  {
    text: "הגעתי לדלפק ברומא עם הרישיון הבינלאומי שאף אחד לא אמר לי שצריך. הבחור שלפניי בתור לא הביא, וחיכה שעתיים. המדריך פשוט חסך לי את היום.",
    name: "דנה ל.",
    role: "טיול באיטליה",
    initials: "ד",
  },
  {
    text: "חשבתי ש-CDW זה כיסוי מלא. אחרי שקראתי כאן הבנתי בדיוק מה חסר ולקחתי SCDW. שבוע אחרי שרטתי את הרכב ויצאתי בלי לשלם שקל.",
    name: "יואב מ.",
    role: "השכרה ביוון",
    initials: "י",
  },
  {
    text: "ZTL באיטליה. לא ידעתי בכלל מה זה. בזכות הכתבה נמנעתי משלושה קנסות בפירנצה. כל אחד מהם היה עולה לי יותר מהדלק.",
    name: "נטע ב.",
    role: "חופשה בטוסקנה",
    initials: "נ",
  },
  {
    text: "הסבר ברור, בלי שיווק ובלי בלבול. הרגשתי שמישהו סוף סוף מדבר איתי בגובה העיניים ולא מנסה למכור לי כלום.",
    name: "אבי כ.",
    role: "רוד טריפ בארה״ב",
    initials: "א",
  },
  {
    text: "פיקדון, מדיניות דלק, תוספת לנהג צעיר. כל מה שהפתיע אותי פעם, הפעם ידעתי עליו מראש. הגעתי מוכן.",
    name: "שירה ד.",
    role: "השכרה בספרד",
    initials: "ש",
  },
  {
    text: "קראתי את המדריך בטיסה. הגעתי לדלפק יודע בדיוק מה לבקש ומה לסרב. יצאתי עם הרכב בעשר דקות.",
    name: "תומר ר.",
    role: "טיול בפורטוגל",
    initials: "ת",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface py-20" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-gold uppercase tracking-widest">המלצות</span>
          <h2 id="testimonials-heading" className="text-3xl font-bold text-navy mt-3 mb-2">
            מה אומרים מי שכבר עמדו בדלפק
          </h2>
          <p className="text-gray-500">סיפורים של אנשים שהגיעו מוכנים, ולא הופתעו</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-7 flex flex-col"
            >
              <Quote size={24} className="text-gold/60 mb-4 flex-shrink-0" aria-hidden="true" />
              <blockquote className="text-gray-700 text-sm leading-relaxed flex-1">
                {t.text}
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-navy text-sm leading-tight">{t.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
