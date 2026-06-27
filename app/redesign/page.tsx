import Link from "next/link";
import Image from "next/image";
import {
  FileText, Globe, Link2, Target, AlertTriangle, Map, MessageCircle,
  Clock, Shield, CreditCard, User, Fuel, Route, Mail, CheckCircle, ArrowLeft,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSearch from "@/components/HeroSearch";
import { latestPosts, postHref } from "@/lib/posts";
import type { Metadata } from "next";

// PAGE DE TEST (refonte) — route isolée /redesign. Ne touche pas le site actuel.
// Réutilise Header / Footer / HeroSearch existants. Contenu identique à la home,
// layout modernisé (bento + trust & authority) dans la charte navy/gold + Heebo.

export const metadata: Metadata = {
  title: "דרך אגב | רעיון עיצוב חדש",
  robots: { index: false, follow: false },
};

const guideTopics = [
  { icon: FileText, label: "מסמכים נדרשים", href: "/guide#documents" },
  { icon: Shield, label: "ביטוח וכיסויים", href: "/guide#insurance" },
  { icon: CreditCard, label: "אשראי ופיקדון", href: "/guide#deposit" },
  { icon: User, label: "נהג צעיר", href: "/guide#young-driver" },
  { icon: Fuel, label: "דלק", href: "/guide#fuel" },
  { icon: Route, label: "קילומטרז׳", href: "/guide#mileage" },
  { icon: Mail, label: "קנסות ודוחות", href: "/guide#fines" },
  { icon: CheckCircle, label: "השורה התחתונה", href: "/guide#summary" },
];

const trustStats = [
  { value: "+10", label: "שנות ניסיון בתחום" },
  { value: "אלפי", label: "הזמנות שטופלו" },
  { value: "19", label: "פרקים במדריך" },
  { value: "100%", label: "מידע מהשטח" },
];

const posts = latestPosts(3);

export default function RedesignHome() {
  return (
    <>
      <Header />
      <main className="bg-white">

        {/* Bandeau de test */}
        <div className="bg-gold/10 border-b border-gold/30 text-center py-2 px-4">
          <p className="text-xs font-semibold text-navy">
            גרסת עיצוב לבדיקה (refonte). העמוד הזה לא מחליף את האתר.
          </p>
        </div>

        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="relative bg-navy-dark min-h-[600px] flex items-center">
          <Image
            src="/hero-bg.avif"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f3c]/92 via-navy/82 to-[#0a1628]/88" />

          <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24 text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 border border-gold/60 text-gold text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm bg-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                המדריך העצמאי הישראלי מספר 1
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              תדע הכל לפני שתגיע לדלפק
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              המדריך המקיף ביותר להשכרת רכב בחו״ל. כתוב על ידי מי שעבד בתחום יותר מעשר שנים.
            </p>

            <div className="mb-8">
              <HeroSearch />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/guide" className="btn-primary text-base px-8 py-3.5 rounded-xl">
                המדריך המלא ←
              </Link>
              <a href="/posts/rental-platforms" className="btn-ghost-gold text-base px-8 py-3.5 rounded-xl">
                איפה הכי כדאי להזמין? השוואה מלאה ←
              </a>
            </div>
          </div>
        </section>

        {/* ─── TRUST STATS BAND ─────────────────────────────────── */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-x-reverse divide-gray-100">
              {trustStats.map((stat) => (
                <div key={stat.label} className="text-center py-8 px-4">
                  <p className="text-3xl md:text-4xl font-extrabold text-navy tabular-nums leading-none">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ABOUT THE SITE (bento) ───────────────────────────── */}
        <section className="bg-surface py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold text-gold uppercase tracking-widest">על האתר</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 leading-snug">על מה האתר הזה</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: FileText,
                  title: "מידע אמין, לא מכירות",
                  text: "האתר הזה לא מנסה למכור לך שום דבר. הוא פה כדי שתגיע לדלפק עם ידע, ולא עם הפתעות.",
                },
                {
                  icon: Globe,
                  title: "השכרת רכב בחו״ל: כל הנושאים",
                  text: "ממסמכים לביטוח, מדלק לקנסות. כל מה שצריך לדעת לפני, במהלך ואחרי ההשכרה.",
                },
                {
                  icon: Link2,
                  title: "המלצות בלי ניגוד עניינים",
                  text: "הקישורים באתר הם שותפויות עמלה, אבל ההמלצות נשארות עצמאיות ומקצועיות. תמיד.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                    <item.icon size={24} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHO AM I ─────────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-[340px_1fr] gap-12 items-center">
              {/* Right: author card */}
              <div className="bg-surface rounded-2xl p-8 border border-gray-100">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center ring-4 ring-gold/20">
                    <span className="text-2xl font-extrabold text-gold">א.מ</span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-navy">אנונימי מקצועי</p>
                    <p className="text-sm text-gray-500">מומחה השכרת רכב בינלאומית</p>
                  </div>
                  <div className="w-full border-t border-gray-200 pt-4 mt-1 space-y-2">
                    {["10+ שנות ניסיון", "אלפי הזמנות מטופלות", "ידע מהשטח, לא מהאינטרנט"].map((badge) => (
                      <div key={badge} className="flex items-center justify-center gap-2 text-sm text-navy font-medium">
                        <CheckCircle size={15} className="text-gold flex-shrink-0" />
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Left: text */}
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-widest">מי אני</span>
                <h2 className="text-2xl md:text-4xl font-bold text-navy mt-3 mb-6 leading-snug">
                  עשר שנים מאחורי הדלפק.<br className="hidden md:block" /> עכשיו אני בצד שלך.
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                  <p>
                    עבדתי מעל עשר שנים בתחום השכרת הרכב הבינלאומי.
                    התחלתי כסוכן הזמנות, עברתי לניהול תפעול, ניהול מוקד, ובסוף הגעתי לשיווק שותפים.
                  </p>
                  <p>
                    כלומר, הבנתי בדיוק מה עובד, מה לא, ולמה אנשים נופלים על אותם דברים שוב ושוב.
                  </p>
                  <p className="font-semibold text-navy">
                    האתר הזה הוא הדבר שהייתי רוצה שיהיה קיים כשהלקוחות שלי שאלו אותי ״אז מה לעשות?״
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHY THIS CONTENT (dark bento) ────────────────────── */}
        <section className="bg-navy py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                המידע הזה לא בא מגוגל. הוא בא מהשטח.
              </h2>
              <p className="text-slate-400 mt-3 text-base">ארבעה דברים שהופכים את המדריך הזה לשונה</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: Target,
                  title: "כתוב מניסיון אמיתי",
                  text: "לא עוד מאמר שנכתב על ידי מי שמעולם לא עמד מול לקוח בדלפק.",
                },
                {
                  icon: AlertTriangle,
                  title: "מתמקד במה שאנשים מפספסים",
                  text: "כל נקודה במדריך היא דבר שראיתי אנשים נופלים עליו. לפחות פעם אחת.",
                },
                {
                  icon: Map,
                  title: "מכסה את כל חברות ההשכרה והמדינות",
                  text: "לא מדריך גנרי. מידע שרלוונטי לישראלים שנוסעים לחו״ל.",
                },
                {
                  icon: MessageCircle,
                  title: "כתוב בעברית, בגובה העיניים",
                  text: "בלי מונחים מסובכים, בלי שפה שיווקית. רק מה שצריך לדעת.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/[0.04] rounded-2xl p-6 border border-white/10 hover:bg-white/[0.07] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
                    <item.icon size={22} className="text-gold" />
                  </div>
                  <h3 className="text-white font-bold mb-2 text-base">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── THE GUIDE ────────────────────────────────────────── */}
        <section className="bg-surface py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-xs font-bold text-gold bg-white border border-gold/40 px-3 py-1 rounded-full mb-4">
                  הנכס המרכזי של האתר
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-snug">
                  המדריך המלא להשכרת רכב בחו״ל
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">
                  כל הנושאים, בסדר הנכון, עם כל מה שצריך לדעת. לפני שמגיעים לדלפק.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {guideTopics.map((topic) => (
                    <Link
                      key={topic.label}
                      href={topic.href}
                      className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-gold hover:shadow-sm transition-all duration-150 group"
                    >
                      <span className="w-7 h-7 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <topic.icon size={15} className="text-gold" />
                      </span>
                      <span className="text-sm font-medium text-text-main group-hover:text-navy">{topic.label}</span>
                    </Link>
                  ))}
                </div>

                <Link href="/guide" className="btn-primary inline-flex items-center gap-2 rounded-xl px-7 py-3">
                  קרא את המדריך המלא ←
                </Link>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <div className="bg-navy rounded-2xl p-8 w-full max-w-sm shadow-xl ring-1 ring-white/10">
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-5">תוכן המדריך</p>
                  <div className="space-y-3.5">
                    {guideTopics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                          <topic.icon size={13} className="text-gold" />
                        </div>
                        <span className="text-white/90 text-sm">{topic.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── LATEST POSTS ─────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-widest">מהבלוג</span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">מאמרים ומדריכים נוספים</h2>
              </div>
              <Link href="/posts" className="hidden sm:inline-flex items-center gap-1.5 text-navy font-semibold text-sm hover:text-gold transition-colors flex-shrink-0">
                כל המאמרים <ArrowLeft size={15} />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.title}
                  href={postHref(post)}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col"
                >
                  {post.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
                      />
                      <span className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${post.tagColor}`}>
                        {post.tag}
                      </span>
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    {!post.image && (
                      <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4 w-fit ${post.tagColor}`}>
                        {post.tag}
                      </span>
                    )}
                    <h3 className="text-navy font-bold text-lg mb-3 leading-snug group-hover:text-gold-dark transition-colors">{post.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-5">
                      <span className="text-gray-400 text-xs flex items-center gap-1.5">
                        <Clock size={12} /> {post.readTime}
                      </span>
                      <span className="text-gold font-semibold text-sm">קרא ←</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ────────────────────────────────────────── */}
        <section className="bg-navy py-20 border-t-4 border-gold">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">מוכן להשכיר רכב?</h2>
            <p className="text-slate-300 mb-8 leading-relaxed text-base md:text-lg">
              עכשיו שאתה מוכן, תקרא איפה הכי כדאי להזמין ואיזו פלטפורמה מתאימה לך.
            </p>
            <a href="/posts/rental-platforms" className="btn-gold text-base px-10 py-3.5 rounded-xl">
              איפה הכי כדאי להזמין? השוואה מלאה ←
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
