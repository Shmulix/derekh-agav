import Link from "next/link";
import Image, { getImageProps } from "next/image";
import { ArrowLeft } from "lucide-react";
import HeaderV2 from "@/components/v2/HeaderV2";
import FooterV2 from "@/components/v2/FooterV2";
import LaneDash from "@/components/v2/LaneDash";
import Reveal from "@/components/Reveal";
import HeroSearch from "@/components/HeroSearch";
import TestimonialsV2 from "@/components/v2/TestimonialsV2";
import { latestPosts, postHref } from "@/lib/posts";
import BookingCTA from "@/components/BookingCTA";
import { author, authorJsonLd, authorIntro } from "@/lib/site-config";
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

// Section "Interest" du parcours AIDA : l'escalade des conséquences au comptoir.
// La gravité monte sur trois axes en même temps (le libellé, la couleur du filet
// et sa longueur), jamais par la couleur seule.
const stakes = [
  {
    n: "01",
    level: "במקרה הטוב",
    title: "אתה משלם יותר",
    text: "ביטוח שנמכר לך בדלפק כשמאחוריך תור, קטגוריה שלא ביקשת, פיקדון שתופס לך את כל מסגרת האשראי לשבוע. יוצא עם רכב, אבל עם חשבון אחר לגמרי מזה שהזמנת.",
    bar: "bg-gold w-7",
    num: "text-gold",
  },
  {
    n: "02",
    level: "במקרה הפחות טוב",
    title: "אתה משלם אחר כך",
    text: "חתמת על כיסוי שנשמע מלא, ובפועל לא מכסה שריטה, צמיג או שמשה. החיוב נוחת חודשיים אחרי שחזרת: השתתפות עצמית, קנס מצלמה, דמי טיפול. אין למי לחזור בטענות.",
    bar: "bg-[#d97706] w-12",
    num: "text-[#b45309]",
  },
  {
    n: "03",
    level: "במקרה הרע",
    title: "אתה לא מקבל רכב",
    text: "רישיון שפג לפני שבוע, כרטיס אשראי על שם בן הזוג, אין רישיון בינלאומי. ההזמנה לא מוחזרת, והחופשה מתחילה בחיפוש מונית באולם הנוסעים.",
    bar: "bg-[#c53030] w-20",
    num: "text-[#c53030]",
  },
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

// Art direction du hero : même scène déclinée en deux cadrages, desktop 16:9
// (voiture au tiers gauche) et mobile 9:16 (voiture dans le tiers bas), via
// <picture> pour que chaque appareil ne télécharge QUE la sienne.
function HeroBackground() {
  const common = { alt: "", fill: true as const, sizes: "100vw", priority: true };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: "/hero-bg-desktop.avif" });
  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({ ...common, src: "/hero-bg-mobile.avif" });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
      <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        {...imgProps}
        className="object-cover object-bottom md:object-center opacity-[0.5]"
      />
    </picture>
  );
}

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

        {/* ───────────── HERO ─────────────
            Hauteur verrouillée sur une hauteur d'écran (100svh, la mesure qui
            ignore les barres mobiles rétractables). Tous les rythmes verticaux
            et la taille du titre sont en clamp() indexé sur vh : le bloc se
            comprime au lieu de déborder. Le min-h (et non h) reste un filet de
            sécurité pour les écrans extrêmement bas (paysage mobile). */}
        <section className="relative z-20 bg-[#0b1730] min-h-[100svh] flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <HeroBackground />
          </div>
          <div className="absolute inset-0 bg-gradient-to-bl from-[#0b1730]/90 via-[#0b1730]/70 to-[#0e1f3e]/55" />

          <div className="relative w-full max-w-6xl mx-auto px-6 pt-[clamp(5rem,11vh,8.5rem)] pb-[clamp(2.5rem,6vh,4.5rem)]">
            <Reveal y={14}>
              <p className="text-gold text-xs font-bold tracking-[0.25em] mb-[clamp(0.75rem,2.2vh,1.75rem)]">המדריך העצמאי הישראלי</p>
            </Reveal>
            <Reveal y={16} delay={80}>
              <h1 className="text-white font-black tracking-[-0.035em] leading-[0.95] text-[clamp(2.1rem,min(8vw,7.6vh),5.5rem)] max-w-4xl">
                תדע הכל לפני<br />שתגיע לדלפק.
              </h1>
            </Reveal>
            <Reveal delay={160}><LaneDash className="mt-[clamp(1rem,2.4vh,2rem)] max-w-[200px]" /></Reveal>
            <Reveal y={14} delay={220}>
              <p className="text-slate-300 text-[clamp(0.95rem,1.9vh,1.25rem)] leading-relaxed mt-[clamp(1rem,2.6vh,2rem)] max-w-2xl">
                המדריך המקיף ביותר להשכרת רכב בחו״ל. כתוב על ידי מי שעבד בתחום יותר מעשר שנים, מהצד השני של הדלפק.
              </p>
            </Reveal>

            <div className="relative z-30 mt-[clamp(1.25rem,2.8vh,2.25rem)] max-w-xl">
              <HeroSearch />
            </div>

            <Reveal y={14} delay={360}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-[clamp(1rem,2.4vh,2rem)]">
                <Link href="/guide" className="bg-gold text-navy text-base font-bold px-8 py-[clamp(0.7rem,1.5vh,0.875rem)] rounded-none hover:bg-[#b8941f] transition-colors text-center">
                  קרא את המדריך ←
                </Link>
                <BookingCTA anon="long" className="border border-white/30 text-white text-base font-semibold px-8 py-[clamp(0.7rem,1.5vh,0.875rem)] rounded-none hover:bg-white/10 transition-colors text-center">
                  איפה הכי כדאי להזמין?
                </BookingCTA>
              </div>
            </Reveal>

            <Reveal delay={440}>
              <div className="mt-[clamp(1.5rem,4.5vh,4rem)] flex flex-wrap items-center gap-x-10 gap-y-3">
                {[
                  { v: "10+", l: "שנות ניסיון" },
                  { v: "1000s", l: "הזמנות שטופלו" },
                  { v: "18", l: "פרקים במדריך" },
                ].map((s) => (
                  <div key={s.l} className="flex items-baseline gap-2.5">
                    <span className={`text-[clamp(1.25rem,2.6vh,1.875rem)] font-bold text-gold ${mono}`}>{s.v}</span>
                    <span className="text-slate-400 text-sm">{s.l}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────── THE PROBLEM (AIDA : Interest) ───────────── */}
        <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <Reveal>
            <p className={`text-[11px] font-semibold tracking-[0.2em] text-gold uppercase ${mono}`}>The Problem</p>
            <h2 className="text-3xl md:text-5xl font-black text-navy tracking-tight mt-3 max-w-3xl leading-tight">
              להזמין רכב זה החלק הקל.
              <span className="block text-gold">הדלפק זה החלק שמפיל אנשים.</span>
            </h2>
            <LaneDash className="mt-6 max-w-[140px]" />
            <p className="text-[#3a4255] text-lg md:text-xl leading-relaxed mt-8 max-w-2xl">
              הזמנת, שילמת, תכננת מסלול לשבוע. ואז אתה מגיע לדלפק, והפקיד עובר על ארבעה חמישה דברים בשתי דקות. אם אחד מהם לא בסדר, אתה לא יוצא משם עם רכב. אף אחד לא עושה לך דווקא. ככה זה עובד.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-[#e7e9f0] border border-[#e7e9f0] mt-14">
            {stakes.map((s, i) => (
              <Reveal key={s.n} delay={i * 90} className="bg-white">
                <div className="h-full p-8 md:p-10">
                  <span className={`block h-[3px] mb-6 ${s.bar}`} />
                  <p className="flex items-baseline gap-3">
                    <span className={`text-sm font-bold ${s.num} ${mono}`}>{s.n}</span>
                    <span className="text-[13px] font-semibold tracking-wide text-[#5b6377]">{s.level}</span>
                  </p>
                  <h3 className="text-xl font-bold text-navy mt-2 mb-3">{s.title}</h3>
                  <p className="text-[#5b6377] leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bascule problème → réponse : le guide et les articles */}
          <Reveal delay={120}>
            <div className="bg-[#0e1a30] p-8 md:p-12 grid md:grid-cols-[1.15fr_1fr] gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                  בשביל זה האתר הזה קיים.
                </h3>
                <p className="text-slate-300 leading-relaxed mt-5">
                  לא כדי למכור לך ביטוח ולא כדי להשוות מחירים. כדי שתגיע לדלפק ותדע בדיוק מה מגישים לך, על מה אתה חותם, ומה עונים כשמנסים למכור לך שדרוג. מדריך אחד עם 18 פרקים לפי הסדר, ומאמרים לנושאים שדורשים עומק.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mt-5">
                  הקישורים באתר הם שותפויות עמלה. ההמלצות נשארות עצמאיות. תמיד.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                <Link href="/guide" className="bg-gold text-navy text-base font-bold px-8 py-3.5 rounded-none hover:bg-[#b8941f] transition-colors text-center">
                  קרא את המדריך ←
                </Link>
                <Link href="/posts" className="border border-white/30 text-white text-base font-semibold px-8 py-3.5 rounded-none hover:bg-white/10 transition-colors text-center">
                  כל המאמרים ←
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ───────────── AUTHOR ───────────── */}
        <section className="bg-[#f7f8fb] border-y border-[#e7e9f0]">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-[1.1fr_1fr] gap-14 items-center">
            <Reveal>
              <p className={`text-[11px] font-semibold tracking-[0.2em] text-gold uppercase ${mono}`}>The Author</p>
              <p className="text-3xl md:text-5xl font-black text-navy tracking-tight leading-[1.1] mt-4">
                {authorIntro.headline[0]}
                <span className="block text-gold">{authorIntro.headline[1]}</span>
              </p>
              <p className={`mt-7 text-xs tracking-[0.15em] text-[#5b6377] ${mono}`}>{author.name} · INTL. CAR RENTAL EXPERT</p>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-4 text-[#3a4255] leading-relaxed text-base md:text-lg border-r-2 border-gold pr-6">
                {authorIntro.paragraphs.map((t, i) => (
                  <p key={i} className={i === authorIntro.paragraphs.length - 1 ? "text-navy font-semibold" : undefined}>{t}</p>
                ))}
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
