import Link from "next/link";
import Image, { getImageProps } from "next/image";
import { ArrowLeft } from "lucide-react";
import HeaderV2 from "@/components/v2/HeaderV2";
import FooterV2 from "@/components/v2/FooterV2";
import LaneDash from "@/components/v2/LaneDash";
import ParallaxBackdrop from "@/components/v2/ParallaxBackdrop";
import FactIcon, { type FactIconName } from "@/components/v2/FactIcon";
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

// Les règles du métier qu'un voyageur ne peut pas deviner. Chacune est un
// mécanisme, pas une anecdote : c'est ce qui rend le domaine impitoyable.
const facts: { icon: FactIconName; title: string; text: string }[] = [
  {
    icon: "deposit",
    title: "הפיקדון לא יורד מהחשבון. הוא ננעל בו.",
    text: "התחנה תופסת סכום במסגרת האשראי שלך לכל תקופת ההשכרה, ולפעמים שבועיים אחריה. אם המסגרת לא מספיקה, אין רכב. גם אם יש לך כסף בעובר ושב.",
  },
  {
    icon: "shield",
    title: "CDW הוא לא ביטוח מלא. זו הגבלת אחריות.",
    text: "נשארת עם השתתפות עצמית שיכולה להגיע לאלפי אירו. ״כלול בהזמנה״ לא אומר ״מכוסה במאה אחוז״, וזה ההבדל היקר ביותר בתחום.",
  },
  {
    icon: "glass",
    title: "צמיגים, שמשות, גג ותחתית כמעט תמיד מחוץ לכיסוי.",
    text: "אלה בדיוק החלקים שנפגעים הכי הרבה בכביש. גם עם הכיסוי המורחב, ברוב החוזים הם מוחרגים במפורש.",
  },
  {
    icon: "card",
    title: "הכרטיס חייב להיות של הנהג הראשי.",
    text: "כרטיס דביט, כרטיס נטען או כרטיס על שם בן הזוג לא מתקבלים ברוב התחנות. אין כרטיס מתאים, אין מפתחות, וההזמנה לא מוחזרת.",
  },
  {
    icon: "wheel",
    title: "נהג שלא רשום בחוזה מבטל את הכיסוי.",
    text: "אם מי שנהג ברגע התאונה לא מופיע בחוזה, הביטוח לא חל. גם אם זו בת הזוג, וגם אם התחלפתם רק לחצי שעה.",
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

        {/* ───────────── POURQUOI CE SITE EXISTE ─────────────
            Quatre mouvements : le domaine ne pardonne pas, la nuit où ça se
            paie, les cinq règles que personne ne connaît, et le vide
            d'information qui a donné naissance au site. */}
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-6 py-28 md:py-36 text-center">
            <Reveal>
              <p className={`text-[11px] font-semibold tracking-[0.2em] text-gold uppercase ${mono}`}>Why this site</p>
              <h2 className="text-3xl md:text-5xl font-black text-navy tracking-tight leading-tight mt-4">
                השכרת רכב היא תחום
                <span className="block text-gold mt-1">לא סלחני.</span>
              </h2>
              <p className="text-[#3a4255] text-lg md:text-xl leading-relaxed mt-8">
                בחופשה, רכב שכור זה כיף. פתאום אתה לא תלוי בשום דבר: יוצא מתי שבא לך, עוצר בכל מקום שמעניין אותך, והטיול נפתח לאפשרויות שאף אוטובוס לא ייתן לך.
              </p>
              <p className="text-[#3a4255] text-lg md:text-xl leading-relaxed mt-5">
                אבל בדיוק בגלל זה קל לזלזל. אתה מתכנן טיסות ומלונות חודשים מראש, ואת הרכב משאיר ל״יהיה בסדר״, כי כבר נהגת אלפי פעמים.
              </p>
              <p className="text-navy text-lg md:text-xl leading-relaxed font-semibold mt-5">
                בדלפק לא בודקים כמה שנים אתה נוהג. בודקים מסמכים, כרטיס ותנאים. פרט אחד לא במקום, והחופשה שתכננת בקפידה יכולה להפוך לסיוט תוך רגע.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Le pire des cas, en une image */}
        <section className="relative bg-[#0b1730] overflow-hidden">
          <ParallaxBackdrop src="/night-arrival.avif" opacity={0.9} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1730]/70 via-[#0b1730]/80 to-[#0b1730]/92" />

          <div className="relative max-w-3xl mx-auto px-6 py-28 md:py-40 text-center">
            <Reveal>
              <p className={`text-xl md:text-2xl tracking-[0.3em] text-gold font-bold ${mono}`}>23:40</p>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mt-5">
                נחתת. שני ילדים, ארבע מזוודות.
                <span className="block text-gold mt-1">והכרטיס לא על שמך.</span>
              </h2>
              <p className="text-slate-200 text-lg md:text-xl leading-relaxed mt-7">
                בדלפק לא מתווכחים. אין רכב, אין החזר על ההזמנה, ואין מוניות שיאספו ארבעה אנשים עם מזוודות בשעה הזאת. המלון במרחק שעה נסיעה, והטיול שתכננת חודשים מתחיל בטלפונים.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Les règles que personne ne connaît avant de tomber dessus */}
        <section className="bg-[#f8f9fc] border-y border-[#e7e9f0]">
          <div className="max-w-3xl mx-auto px-6 py-28 md:py-36">
            <Reveal>
              <div className="text-center">
                <p className={`text-[11px] font-semibold tracking-[0.2em] text-gold uppercase ${mono}`}>The rules</p>
                <h2 className="text-3xl md:text-5xl font-black text-navy tracking-tight leading-tight mt-4">
                  חמישה דברים שלא כתובים
                  <span className="block text-gold mt-1">בשובר ההזמנה.</span>
                </h2>
                <p className="text-[#3a4255] text-lg leading-relaxed mt-7 max-w-xl mx-auto">
                  אף אחד לא נולד עם הידע הזה, ואף אחד לא טורח להסביר אותו לפני שמגיעים לדלפק.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 divide-y divide-[#e0e4ee]">
              {facts.map((f, i) => (
                <Reveal key={f.title} delay={i * 90}>
                  <div className="flex items-start gap-5 md:gap-7 py-7 first:pt-0">
                    <FactIcon name={f.icon} className="w-9 h-9 md:w-10 md:h-10 shrink-0 text-gold mt-0.5" />
                    <div>
                      <h3 className="text-navy text-lg md:text-xl font-bold leading-snug">{f.title}</h3>
                      <p className="text-[#5b6377] leading-relaxed mt-2">{f.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <p className="text-center text-[#5b6377] mt-12">
                וזה חמישה מתוך הרבה יותר. כל אחד מהם עולה כסף, זמן, או את הרכב עצמו.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Le vide d'information, et la raison d'être du site */}
        <section className="bg-white">
          <div className="max-w-2xl mx-auto px-6 py-28 md:py-36 text-center">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-black text-navy tracking-tight leading-tight">
                והבעיה השנייה:
                <span className="block text-gold mt-1">אין איפה ללמוד את זה.</span>
              </h2>
              <p className="text-[#3a4255] text-lg md:text-xl leading-relaxed mt-8">
                חברות ההשכרה לא מסבירות, הן מוכרות. אתרי ההשוואה משווים מחיר, לא תנאים. בפורומים כל אחד עונה משהו אחר. ואת החוזה קוראים אחרי שכבר חתמו עליו.
              </p>
              <p className="text-navy text-lg md:text-xl leading-relaxed font-semibold mt-6">
                לכן בניתי את המקום הזה. כל מה שחייבים לדעת לפני שמגיעים לדלפק, מרוכז במקום אחד ובשפה של בן אדם.
              </p>
              <LaneDash className="mt-10 max-w-[120px] mx-auto" />
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/guide" className="bg-gold text-navy text-base font-bold px-9 py-3.5 rounded-none hover:bg-[#b8941f] transition-colors text-center w-full sm:w-auto">
                  קרא את המדריך ←
                </Link>
                <Link href="/posts" className="text-navy text-base font-semibold hover:text-gold transition-colors inline-flex items-center gap-2">
                  או תתחיל ממאמר <ArrowLeft size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
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
