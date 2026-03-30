import Link from "next/link";
import Image from "next/image";
import { FileText, Globe, Link2, Target, AlertTriangle, Map, MessageCircle, ChevronLeft, Clock, Shield, CreditCard, User, Fuel, Route, Mail, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSearch from "@/components/HeroSearch";

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

const posts = [
  {
    tag: "ביטוח",
    tagColor: "bg-navy text-white",
    title: "CDW או SCDW — מה באמת שווה לקחת?",
    excerpt: "ההבדל בין ביטוח בסיסי למשלים יכול להסתכם באלפי יורו. הנה איך להחליט נכון, לפי המצב שלך ולא לפי מה שמציעים בדלפק.",
    readTime: "5 דק׳ קריאה",
    href: "/posts/cdw-vs-scdw",
  },
  {
    tag: "יעדים",
    tagColor: "bg-[#2563eb] text-white",
    title: "השכרת רכב בארה״ב — כל מה שישראלים צריכים לדעת",
    excerpt: "ארה״ב זה לא אירופה. הכללים שונים, הביטוח שונה, ואפילו הפיקדון עובד אחרת. הנה מה שחייבים לבדוק לפני שמזמינים.",
    readTime: "7 דק׳ קריאה",
    href: "/posts/usa-car-rental",
  },
  {
    tag: "חיסכון",
    tagColor: "bg-green-700 text-white",
    title: "7 טעויות שכולם עושים כשמשכירים רכב בחו״ל",
    excerpt: "מרישיון בינלאומי שנשכח ועד מיכל דלק שלא מלא. הטעויות שחוזרות על עצמן שוב ושוב ואיך להימנע מהן.",
    readTime: "6 דק׳ קריאה",
    href: "/posts/7-mistakes",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="relative bg-navy-dark min-h-[580px] flex items-center">
          {/* Hero background image */}
          <Image
            src="/hero-bg.avif"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Navy gradient overlay — keeps readability while letting image show through */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f3c]/90 via-navy/80 to-[#0a1628]/85" />

          <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20 text-center">
            {/* Badge */}
            <div className="inline-block mb-5">
              <span className="border border-gold text-gold text-xs font-semibold px-4 py-1.5 rounded">
                המדריך העצמאי הישראלי מספר 1
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              תדע הכל לפני שתגיע לדלפק
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              המדריך המקיף ביותר להשכרת רכב בחו״ל. כתוב על ידי מי שעבד בתחום יותר מעשר שנים.
            </p>

            {/* Search */}
            <div className="mb-8">
              <HeroSearch />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/guide" className="btn-primary text-base px-8 py-3">
                המדריך המלא ←
              </Link>
              <a href="#" className="btn-ghost-gold text-base px-8 py-3">
                השווה מחירים ←
              </a>
            </div>
          </div>
        </section>

        {/* ─── ABOUT THE SITE ───────────────────────────────────── */}
        <section className="bg-surface py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy text-center mb-12">על מה האתר הזה</h2>

            <div className="grid md:grid-cols-3 gap-8">
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
                <div key={i} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                  <item.icon size={32} className="text-gold mb-4" />
                  <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHO AM I ─────────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Right: avatar + title */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-2xl font-extrabold text-gold">א.מ</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-navy">אנונימי מקצועי</p>
                  <p className="text-sm text-gray-500">מומחה השכרת רכב בינלאומית</p>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-3 mt-2">
                  {["10+ שנות ניסיון", "אלפי הזמנות מטופלות", "ידע מהשטח, לא מהאינטרנט"].map((badge) => (
                    <span key={badge} className="bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Left: text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-5 leading-snug">
                  עשר שנים מאחורי הדלפק.<br className="hidden md:block" /> עכשיו אני בצד שלך.
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    עבדתי מעל עשר שנים בתחום השכרת הרכב הבינלאומי.
                    התחלתי כסוכן הזמנות, עברתי לניהול תפעול, ניהול מוקד, ובסוף הגעתי לשיווק שותפים.
                  </p>
                  <p>
                    כלומר, הבנתי בדיוק מה עובד, מה לא, ולמה אנשים נופלים על אותם דברים שוב ושוב.
                  </p>
                  <p className="font-medium text-navy">
                    האתר הזה הוא הדבר שהייתי רוצה שיהיה קיים כשהלקוחות שלי שאלו אותי ״אז מה לעשות?״
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHY THIS CONTENT ─────────────────────────────────── */}
        <section className="bg-navy py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-3">
              המידע הזה לא בא מגוגל. הוא בא מהשטח.
            </h2>
            <p className="text-slate-400 text-center mb-12 text-base">ארבעה דברים שהופכים את המדריך הזה לשונה</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  title: "מכסה את כל הספקים והמדינות",
                  text: "לא מדריך גנרי. מידע שרלוונטי לישראלים שנוסעים לחו״ל.",
                },
                {
                  icon: MessageCircle,
                  title: "כתוב בעברית, בגובה העיניים",
                  text: "בלי מונחים מסובכים, בלי שפה שיווקית. רק מה שצריך לדעת.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-navy-light/30 rounded-lg p-6 border border-white/10">
                  <item.icon size={28} className="text-gold mb-4" />
                  <h3 className="text-white font-bold mb-2 text-base">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── THE GUIDE ────────────────────────────────────────── */}
        <section className="bg-surface py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Right: text + topics */}
              <div>
                <span className="inline-block text-xs font-bold text-gold bg-yellow-50 border border-gold px-3 py-1 rounded mb-4">
                  הנכס המרכזי של האתר
                </span>
                <h2 className="text-3xl font-bold text-navy mb-3 leading-snug">
                  המדריך המלא להשכרת רכב בחו״ל
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  כל הנושאים, בסדר הנכון, עם כל מה שצריך לדעת. לפני שמגיעים לדלפק.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {guideTopics.map((topic) => (
                    <Link
                      key={topic.label}
                      href={topic.href}
                      className="flex items-center gap-2 bg-white rounded-md px-4 py-3 border border-gray-100 hover:border-navy hover:shadow-sm transition-all duration-150 group"
                    >
                      <topic.icon size={16} className="text-gold flex-shrink-0" />
                      <span className="text-sm font-medium text-text-main group-hover:text-navy">{topic.label}</span>
                    </Link>
                  ))}
                </div>

                <Link href="/guide" className="btn-primary inline-flex items-center gap-2">
                  קרא את המדריך המלא ←
                </Link>
              </div>

              {/* Left: decorative card */}
              <div className="hidden md:flex items-center justify-center">
                <div className="bg-navy rounded-xl p-8 w-80 shadow-xl">
                  <div className="space-y-3">
                    {guideTopics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                          <topic.icon size={12} className="text-gold" />
                        </div>
                        <span className="text-white text-sm">{topic.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── LATEST POSTS ─────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-2">מאמרים ומדריכים נוספים</h2>
              <p className="text-gray-500">טיפים, השוואות ומידע עדכני על השכרת רכב</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <span className={`inline-block text-xs font-bold px-2 py-1 rounded mb-4 w-fit ${post.tagColor}`}>
                      {post.tag}
                    </span>
                    <h3 className="text-navy font-bold text-lg mb-3 leading-snug">{post.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                  </div>
                  <div className="px-6 pb-5 flex items-center justify-between border-t border-gray-50 pt-4">
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                    <Link href={post.href} className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors">
                      קרא ←
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center">
              <Link href="/posts" className="text-navy font-semibold text-sm hover:text-gold transition-colors">
                כל המאמרים ←
              </Link>
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ────────────────────────────────────────── */}
        <section className="bg-navy py-16 border-t-4 border-gold">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">מוכן להשכיר רכב?</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              עכשיו שאתה מוכן, השווה מחירים בין חברות וחסוך.
            </p>
            <a href="#" className="btn-gold text-base px-10 py-3">
              השווה מחירים עכשיו ←
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
