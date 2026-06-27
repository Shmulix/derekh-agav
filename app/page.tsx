import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import HeaderV2 from "@/components/v2/HeaderV2";
import FooterV2 from "@/components/v2/FooterV2";
import LaneDash from "@/components/v2/LaneDash";
import Reveal from "@/components/Reveal";
import HeroSearch from "@/components/HeroSearch";
import TestimonialsV2 from "@/components/v2/TestimonialsV2";
import { latestPosts, postHref } from "@/lib/posts";
import BookingCTA from "@/components/BookingCTA";
import { author, authorJsonLd } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "דרך אגב | המדריך להשכרת רכב בחו״ל",
  description:
    "המדריך המקיף ביותר להשכרת רכב בחו״ל לישראלים. מסמכים, ביטוח, פיקדון, נהג צעיר, דלק, קנסות ועוד. כתוב מניסיון אמיתי של יותר מעשר שנים.",
  alternates: {
    canonical: "https://derekh-agav.vercel.app",
  },
  openGraph: {
    title: "דרך אגב | המדריך להשכרת רכב בחו״ל",
    description:
      "כל מה שצריך לדעת לפני שמגיעים לדלפק. מסמכים, ביטוח, פיקדון ועוד.",
    url: "https://derekh-agav.vercel.app",
    type: "website",
  },
};

const mono = "[font-family:var(--font-mono-v2)]";

const guideIndex = [
  { n: "01", label: "מסמכים נדרשים", href: "/guide#documents" },
  { n: "02", label: "פיקדון", href: "/guide#deposit" },
  { n: "04", label: "ביטוח וכיסויים", href: "/guide#insurance" },
  { n: "05", label: "גיל הנהג", href: "/guide#young-driver" },
  { n: "11", label: "דלק", href: "/guide#fuel" },
  { n: "13", label: "קנסות ודוחות", href: "/guide#fines" },
];

const pillars = [
  { title: "מידע, לא מכירות", text: "האתר לא מנסה למכור לך כלום. הוא פה כדי שתגיע לדלפק עם ידע, לא עם הפתעות." },
  { title: "כל הנושאים", text: "ממסמכים לביטוח, מדלק לקנסות. כל מה שצריך לדעת לפני, במהלך ואחרי ההשכרה." },
  { title: "בלי ניגוד עניינים", text: "הקישורים הם שותפויות עמלה, אבל ההמלצות נשארות עצמאיות ומקצועיות. תמיד." },
];

const reasons = [
  { title: "מניסיון אמיתי", text: "לא עוד מאמר של מי שמעולם לא עמד מול לקוח בדלפק." },
  { title: "במה שמפספסים", text: "כל נקודה היא דבר שראיתי אנשים נופלים עליו. לפחות פעם אחת." },
  { title: "כל היעדים", text: "לא מדריך גנרי. מידע שרלוונטי לישראלים שנוסעים לחו״ל." },
  { title: "בגובה העיניים", text: "בלי מונחים מסובכים, בלי שפה שיווקית. רק מה שצריך לדעת." },
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://derekh-agav.vercel.app/#website",
      "url": "https://derekh-agav.vercel.app",
      "name": "דרך אגב",
      "description": "המדריך המקיף להשכרת רכב בחו״ל לישראלים",
      "inLanguage": "he",
      "publisher": { "@id": "https://derekh-agav.vercel.app/#author" },
    },
    {
      "@id": "https://derekh-agav.vercel.app/#author",
      ...authorJsonLd,
      "jobTitle": "מומחה השכרת רכב בינלאומית",
      "knowsAbout": ["השכרת רכב", "ביטוח רכב שכור", "חוזי השכרה בינלאומיים"],
    },
  ],
};

export default function HomePage() {
  const posts = latestPosts(3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <HeaderV2 />
      <main>

        {/* ───────────── HERO ───────────── */}
        <section className="relative z-20 bg-[#0b1730]">
          <div className="absolute inset-0 overflow-hidden">
            <Image src="/hero-bg.avif" alt="" fill priority sizes="100vw" className="object-cover object-center opacity-[0.18]" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-bl from-[#0b1730] via-[#0b1730]/85 to-[#0e1f3e]/70" />

          <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-44 md:pb-28">
            <Reveal y={14}>
              <p className="text-gold text-xs font-bold tracking-[0.25em] mb-7">המדריך העצמאי הישראלי</p>
            </Reveal>
            <Reveal y={16} delay={80}>
              <h1 className="text-white font-black tracking-[-0.035em] leading-[0.95] text-[clamp(2.6rem,8vw,5.5rem)] max-w-4xl">
                תדע הכל לפני<br />שתגיע לדלפק.
              </h1>
            </Reveal>
            <Reveal delay={160}><LaneDash className="mt-8 max-w-[200px]" /></Reveal>
            <Reveal y={14} delay={220}>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl">
                המדריך המקיף ביותר להשכרת רכב בחו״ל. כתוב על ידי מי שעבד בתחום יותר מעשר שנים, מהצד השני של הדלפק.
              </p>
            </Reveal>

            <div className="relative z-30 mt-9 max-w-xl">
              <HeroSearch />
            </div>

            <Reveal y={14} delay={360}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/guide" className="bg-gold text-navy text-base font-bold px-8 py-3.5 rounded-none hover:bg-[#b8941f] transition-colors text-center">
                  קרא את המדריך ←
                </Link>
                <BookingCTA anon="long" className="border border-white/30 text-white text-base font-semibold px-8 py-3.5 rounded-none hover:bg-white/10 transition-colors text-center">
                  איפה הכי כדאי להזמין?
                </BookingCTA>
              </div>
            </Reveal>

            <Reveal delay={440}>
              <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4">
                {[
                  { v: "10+", l: "שנות ניסיון" },
                  { v: "1000s", l: "הזמנות שטופלו" },
                  { v: "18", l: "פרקים במדריך" },
                ].map((s) => (
                  <div key={s.l} className="flex items-baseline gap-2.5">
                    <span className={`text-2xl md:text-3xl font-bold text-gold ${mono}`}>{s.v}</span>
                    <span className="text-slate-400 text-sm">{s.l}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────── PILLARS ───────────── */}
        <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <Reveal>
            <p className={`text-[11px] font-semibold tracking-[0.2em] text-gold uppercase ${mono}`}>About</p>
            <h2 className="text-3xl md:text-5xl font-black text-navy tracking-tight mt-3 max-w-2xl leading-tight">
              מידע. בלי מכירות.
            </h2>
            <LaneDash className="mt-6 max-w-[140px]" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-[#e7e9f0] border border-[#e7e9f0] mt-14">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="bg-white">
                <div className="h-full p-8 md:p-10">
                  <span className="inline-block w-7 h-[3px] bg-gold mb-6" />
                  <h3 className="text-xl font-bold text-navy mb-3">{p.title}</h3>
                  <p className="text-[#5b6377] leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────────── AUTHOR ───────────── */}
        <section className="bg-[#f7f8fb] border-y border-[#e7e9f0]">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-[1.1fr_1fr] gap-14 items-center">
            <Reveal>
              <p className={`text-[11px] font-semibold tracking-[0.2em] text-gold uppercase ${mono}`}>The Author</p>
              <p className="text-3xl md:text-5xl font-black text-navy tracking-tight leading-[1.1] mt-4">
                עשר שנים מאחורי הדלפק.
                <span className="block text-gold">עכשיו אני בצד שלך.</span>
              </p>
              <p className={`mt-7 text-xs tracking-[0.15em] text-[#5b6377] ${mono}`}>{author.name} · INTL. CAR RENTAL EXPERT</p>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-4 text-[#3a4255] leading-relaxed text-base md:text-lg border-r-2 border-gold pr-6">
                <p>עבדתי מעל עשר שנים בתחום השכרת הרכב הבינלאומי: סוכן הזמנות, ניהול אופרציה, ניהול מוקד, ובסוף שיווק שותפים.</p>
                <p>כלומר, הבנתי בדיוק מה עובד, מה לא, ולמה אנשים נופלים על אותם דברים שוב ושוב.</p>
                <p className="text-navy font-semibold">האתר הזה הוא מה שהייתי רוצה שיהיה קיים כשהלקוחות שלי שאלו אותי ״אז מה לעשות?״</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────── METHOD (dark) ───────────── */}
        <section className="bg-[#0e1a30]">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
            <Reveal>
              <p className={`text-[11px] font-semibold tracking-[0.2em] text-gold uppercase ${mono}`}>Why this</p>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-3 max-w-3xl leading-tight">
                המידע הזה לא בא מגוגל. הוא בא מהשטח.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10 mt-14">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 80} className="bg-[#0e1a30]">
                  <div className="h-full p-8 md:p-10">
                    <span className="inline-block w-7 h-[3px] bg-gold mb-5" />
                    <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{r.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── THE GUIDE ───────────── */}
        <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-14 items-center">
            <Reveal>
              <p className={`text-[11px] font-semibold tracking-[0.2em] text-gold uppercase ${mono}`}>The Field Manual</p>
              <h2 className="text-3xl md:text-5xl font-black text-navy tracking-tight mt-3 leading-tight">
                המדריך המלא להשכרת רכב בחו״ל
              </h2>
              <p className="text-[#5b6377] leading-relaxed text-lg mt-6 max-w-md">
                18 פרקים, בסדר הנכון, עם כל מה שצריך לדעת. לפני שמגיעים לדלפק.
              </p>
              <Link href="/guide" className="inline-flex items-center gap-2 bg-navy text-white text-sm font-bold px-7 py-3.5 rounded-none hover:bg-[#0e1a30] transition-colors mt-8">
                לכל 18 הפרקים <ArrowLeft size={16} />
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <div className="border border-[#e7e9f0]">
                {guideIndex.map((t, i) => (
                  <Link
                    key={t.label}
                    href={t.href}
                    className={`group flex items-center gap-5 px-6 py-4 hover:bg-[#f7f8fb] transition-colors ${i < guideIndex.length - 1 ? "border-b border-[#e7e9f0]" : ""}`}
                  >
                    <span className={`text-sm font-semibold text-gold ${mono}`}>{t.n}</span>
                    <span className="flex-1 text-navy font-medium group-hover:text-gold transition-colors">{t.label}</span>
                    <ArrowLeft size={15} className="text-[#9aa3b5] group-hover:text-gold group-hover:-translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────── JOURNAL ───────────── */}
        <section className="bg-[#f7f8fb] border-t border-[#e7e9f0]">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
            <Reveal>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className={`text-[11px] font-semibold tracking-[0.2em] text-gold uppercase ${mono}`}>Journal</p>
                  <h2 className="text-3xl md:text-5xl font-black text-navy tracking-tight mt-3">מאמרים אחרונים</h2>
                </div>
                <Link href="/posts" className="hidden sm:inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-gold transition-colors">
                  כל המאמרים <ArrowLeft size={15} />
                </Link>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6 mt-14">
              {posts.map((post, i) => (
                <Reveal key={post.title} delay={i * 90}>
                  <Link href={postHref(post)} className="group block bg-white border border-[#e7e9f0] hover:border-navy transition-colors h-full">
                    {post.image && (
                      <div className="relative h-44 overflow-hidden">
                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                      </div>
                    )}
                    <div className="p-6">
                      <p className="text-[11px] tracking-wide text-[#9aa3b5] font-medium">{post.tag} · {post.readTime}</p>
                      <h3 className="text-navy font-bold text-lg leading-snug mt-2 group-hover:text-gold transition-colors">{post.title}</h3>
                      <LaneDash className="mt-4 max-w-0 group-hover:max-w-[60px] transition-all duration-500" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── TESTIMONIALS ───────────── */}
        <TestimonialsV2 />

        {/* ───────────── FINAL CTA ───────────── */}
        <section className="bg-[#0b1730]">
          <LaneDash />
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-28 text-center">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">מוכן להשכיר רכב?</h2>
              <p className="text-slate-300 text-lg mt-5 leading-relaxed">
                עכשיו שאתה מוכן, תקרא איפה הכי כדאי להזמין ואיזו פלטפורמה מתאימה לך.
              </p>
              <BookingCTA anon="long" className="inline-block bg-gold text-navy text-base font-bold px-10 py-4 rounded-none hover:bg-[#b8941f] transition-colors mt-9">
                השוואה מלאה ←
              </BookingCTA>
            </Reveal>
          </div>
        </section>
      </main>
      <FooterV2 />
    </>
  );
}
