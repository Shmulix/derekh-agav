import Link from "next/link";
import Image from "next/image";
import {
  FileText, Shield, CreditCard, User, Fuel, Route, Mail, CheckCircle,
  AlertTriangle, Info, Lightbulb, Clock, MapPin, Car, BookOpen, BookMarked, Globe, Snowflake, Receipt, Package, CalendarX,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AccordionItem } from "@/components/guide/Accordion";
import InsuranceTabs from "@/components/guide/InsuranceTabs";
import DocTiles from "@/components/guide/DocTiles";
import AcrissTable from "@/components/guide/AcrissTable";
import LexiconSection from "@/components/guide/LexiconSection";
import TableOfContents from "@/components/guide/TableOfContents";
import BackToTop from "@/components/guide/BackToTop";
import MobileTOC from "@/components/guide/MobileTOC";
import MobileFloatingCTA from "@/components/guide/MobileFloatingCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "המדריך המלא להשכרת רכב בחו״ל | דרך אגב",
  description:
    "מסמכים, ביטוח, פיקדון, נהג צעיר, דלק, קילומטרז׳ וקנסות. כל מה שצריך לדעת לפני שמגיעים לדלפק. מניסיון אמיתי.",
};

const tocItems = [
  { id: "intro", label: "מבוא", icon: BookOpen },
  { id: "documents", label: "מסמכים נדרשים", icon: FileText },
  { id: "deposit", label: "פיקדון", icon: CreditCard },
  { id: "category", label: "קטגוריית רכב", icon: Car },
  { id: "insurance", label: "ביטוח", icon: Shield },
  { id: "young-driver", label: "גיל הנהג", icon: User },
  { id: "pickup", label: "איסוף והחזרה", icon: MapPin },
  { id: "tolls", label: "כבישי אגרה", icon: Receipt },
  { id: "crossborder", label: "חציית גבול", icon: Globe },
  { id: "winter", label: "ציוד חורף", icon: Snowflake },
  { id: "extras", label: "כיסאות וציוד משלים", icon: Package },
  { id: "fuel", label: "דלק", icon: Fuel },
  { id: "mileage", label: "קילומטרז׳", icon: Route },
  { id: "fines", label: "קנסות ודוחות", icon: Mail },
  { id: "cancellation", label: "דמי ביטול ואי הגעה", icon: CalendarX },
  { id: "emergency", label: "תאונה ותקלה", icon: AlertTriangle },
  { id: "summary", label: "השורה התחתונה", icon: CheckCircle },
  { id: "lexicon", label: "מילון מונחים", icon: BookMarked },
];

function SectionTitle({ id, icon, children }: { id: string; icon: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold text-navy mt-16 mb-2 scroll-mt-24 flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      {children}
    </h2>
  );
}

function SectionIntro({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-600 text-sm leading-relaxed mb-6 pb-4 border-b border-gray-100">{children}</p>;
}

function Callout({ type, children }: { type: "warning" | "tip" | "info"; children: React.ReactNode }) {
  const config = {
    warning: { bg: "bg-red-50", border: "border-red-400", icon: AlertTriangle, iconColor: "text-red-500", label: "שים לב" },
    tip: { bg: "bg-yellow-50", border: "border-gold", icon: Lightbulb, iconColor: "text-yellow-600", label: "טיפ מהשטח" },
    info: { bg: "bg-blue-50", border: "border-navy", icon: Info, iconColor: "text-navy", label: "כדאי לדעת" },
  }[type];
  const Icon = config.icon;
  return (
    <div className={`${config.bg} border-r-4 ${config.border} p-4 rounded-sm my-5 flex gap-3`}>
      <Icon size={16} className={`${config.iconColor} flex-shrink-0 mt-0.5`} />
      <div className="text-sm leading-relaxed text-gray-700">{children}</div>
    </div>
  );
}

function StatCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="bg-surface border border-gray-200 rounded-lg p-4 text-center">
      <p className="text-2xl font-extrabold text-navy mb-0.5">{value}</p>
      <p className="text-xs font-semibold text-gray-600">{label}</p>
      {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
    </div>
  );
}

function DocCard({ icon, title, required, items }: { icon: string; title: string; required: "always" | "sometimes"; items: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-navy hover:shadow-sm transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <p className="font-bold text-navy text-sm">{title}</p>
        </div>
        <span className={`text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 ${
          required === "always" ? "bg-navy text-white" : "bg-yellow-100 text-yellow-800"
        }`}>
          {required === "always" ? "חובה" : "לפעמים"}
        </span>
      </div>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
            <span className="w-1 h-1 rounded-full bg-gold mt-1.5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FuelPolicyCard({ title, subtitle, tag, desc, highlighted }: { title: string; subtitle: string; tag: string; desc: string; highlighted?: boolean }) {
  return (
    <div className={`rounded-lg p-4 border-2 transition-all ${
      highlighted ? "border-navy bg-navy text-white" : "border-gray-200 bg-white"
    }`}>
      <span className={`text-xs font-bold px-2 py-0.5 rounded mb-2 inline-block ${
        highlighted ? "bg-gold text-navy" : "bg-gray-100 text-gray-600"
      }`}>{tag}</span>
      <p className={`font-bold text-sm mb-0.5 ${highlighted ? "text-white" : "text-navy"}`}>{title}</p>
      <p className={`text-xs mb-1.5 ${highlighted ? "text-slate-400" : "text-gray-400"}`}>{subtitle}</p>
      <p className={`text-xs leading-relaxed ${highlighted ? "text-slate-300" : "text-gray-500"}`}>{desc}</p>
    </div>
  );
}

function FineStep({ num, text }: { num: number; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
          {num}
        </div>
        {num < 4 && <div className="w-0.5 h-8 bg-gray-200 mt-1" />}
      </div>
      <p className="text-sm text-gray-700 leading-relaxed pt-1">{text}</p>
    </div>
  );
}

export default function GuidePage() {
  return (
    <>
      <Header />

      {/* Guide Hero */}
      <div className="relative bg-navy py-14 overflow-hidden">
        <Image
          src="/hero-bg-banner.avif"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f3c]/90 via-navy/80 to-[#0a1628]/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="text-gold text-sm font-semibold mb-2">המדריך המלא</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            המדריך המלא להשכרת רכב בחו״ל
          </h1>
          <p className="text-slate-300 leading-relaxed max-w-2xl mb-3">
            מסמכים, ביטוח, פיקדון, דלק, קנסות ועוד. כל מה שצריך לדעת, בסדר הנכון.
          </p>
          <p className="text-slate-500 text-xs">⏱ זמן קריאה משוער: כ-15 דקות</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex gap-8 xl:gap-12 items-start">

          {/* Sticky TOC desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-24">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">תוכן עניינים</p>
            <TableOfContents items={tocItems.map(({ id, label }) => ({ id, label }))} />
          </aside>

          {/* Main content */}
          <article className="flex-1 min-w-0">

            {/* INTRO */}
            <div id="intro" className="mb-2 scroll-mt-24">
              <p className="text-xs font-bold text-gold uppercase tracking-widest mb-8">
                מדבר אליך בגובה העיניים. כדי שלא תדבר אלי בלחץ מהדלפק.
              </p>

              <p className="text-gray-800 text-lg font-semibold leading-relaxed mb-5">
                לפני הכל, הרגע הטוב.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                רכב שכור בחו״ל זה לא סתם כלי תחבורה. זה חופש אמיתי. אתה קם בבוקר, אין לך לוח זמנים, אין תחנות, אין לחכות לאף אחד. אתה פשוט יוצא. מגיע למקומות שהאוטובוס לא מכיר. עוצר כשבא לך. זו הגמישות שאין ביישום של ממשלה, ולא בשום אפליקציית הסעות.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                אני אוהב את זה. תמיד אהבתי. ואני יכול להגיד לך בביטחון מלא שמי שמגיע מוכן? נהנה ממנה עד הסוף.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                הבעיה? רוב האנשים לא מגיעים מוכנים. לא כי הם לא חכמים, תאמין לי. כי המידע הנכון פשוט לא היה שם בצורה ישרה ופשוטה. עד עכשיו.
              </p>

              <div className="w-full h-px bg-gray-200 mb-6" />

              <p className="text-gray-800 text-lg font-semibold leading-relaxed mb-4">
                אז תשמע, בוא נדבר ישר.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                עשר שנים בתוך התחום הזה. לא כתייר שנסע פעמיים ורשם פוסט. ממש בפנים. מהצד שרוב האנשים לא רואים.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                ראיתי הכל. באמת הכל.
              </p>

              {/* Career timeline */}
              <AccordionItem title="הדרך שעשיתי, ולמה היא רלוונטית בשבילך" icon="🪪" headerImage={{ src: "/samuel.avif", alt: "סמואל פרץ" }} headerName="סמואל פרץ" headerSubtitle="מומחה השכרת רכב בינלאומית · 10 שנות ניסיון" expandLabel="קרא עוד">
              <div className="bg-surface rounded-xl p-1 mb-2">
                <div className="hidden lg:flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gold">
                    <Image
                      src="/samuel.avif"
                      alt="מומחה השכרת רכב"
                      fill
                      className="object-cover object-top"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-navy text-base">סמואל פרץ</p>
                    <p className="text-xs text-gray-500 mt-0.5">מומחה השכרת רכב בינלאומית · 10 שנות ניסיון</p>
                  </div>
                </div>

                <div className="space-y-0">
                  {[
                    {
                      role: "סוכן הזמנות",
                      desc: "משם התחלתי. לוקח הזמנות, עונה על שאלות. ותוך חודשים ספורים הבנתי: אותם אנשים, אותן שאלות, אותם פרטים שתמיד מפספסים. שוב ושוב. הבנתי שיש פה בעיה של מידע, לא של אנשים.",
                    },
                    {
                      role: "נציג ומנהל אופרציה",
                      desc: "האופרציה היא הלב של כל ברוקר השכרת רכב. שם מחליטים על כל הזמנה: לאשר, לדחות, להתאים. הייתי בקשר ישיר ויומיומי עם חברות ההשכרה. לא כלקוח. כשותף עסקי. זה נתן לי הבנה של המוצר ושל התהליכים שלא מגיעה משום מקום אחר. הבנתי איך חברות ההשכרה חושבות, מה מניע אותם, ואיפה הגמישות שלהם מסתיימת.",
                    },
                    {
                      role: "סופרוויזור מוקד",
                      desc: "ניהלתי צוות שטיפל בלקוחות כל יום. שמעתי תרחישים שלא הייתי מאמין שקורים בפועל. ופגשתי שוב ושוב את אותו פער: מה האדם חשב שהזמין, לבין מה שכתוב בחוזה. זה הפער שמעצבן אותי עד היום.",
                    },
                    {
                      role: "מנהל שיווק שותפים",
                      desc: "ואז ראיתי את התחום מבחוץ. הבנתי איך הוא נמכר, מה אנשים מחפשים, ואיפה כל המידע ברשת פשוט לא עונה על מה שבאמת צריך לדעת לפני שנוסעים.",
                    },
                  ].map((item, i, arr) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-gold border-2 border-white shadow mt-1.5" />
                        {i < arr.length - 1 && <div className="w-px bg-gray-200 my-1" style={{ minHeight: "2.5rem" }} />}
                      </div>
                      <div className="pb-6">
                        <p className="font-bold text-navy text-sm mb-1">{item.role}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </AccordionItem>

              <p className="text-gray-800 leading-relaxed mb-4">
                אני מכיר את חברות ההשכרה. אני מכיר את החוזים. אני יודע מה הנציג לא יגיד לך מיוזמתו, ולמה בדיוק הוא לא יגיד. אני יודע מה כתוב בשורות הקטנות שאיש לא קורא, ומה קורה כשמגלים אותן בדלפק.
              </p>

              <p className="text-gray-800 leading-relaxed mb-6">
                מאות מקרים טיפלתי בהם ישירות. אלפי שיחות. ואני יכול להגיד לך בדיוק מה גורם לאנשים לעמוד בדלפק בלי רכב, לשלם פיקדון שלא ציפו אליו, לגלות שהביטוח לא מכסה מה שחשבו.
              </p>

              <div className="border-r-4 border-gold bg-yellow-50/60 pr-5 py-5 rounded-sm mb-6">
                <p className="text-gray-700 leading-relaxed text-sm italic mb-3">
                  תמיד יוצא אותו משפט. מאנשים חכמים, מסודרים, כאלה שהכינו הכל מראש:
                </p>
                <p className="text-navy font-extrabold text-lg">"אם הייתי יודע..."</p>
              </div>

              <p className="text-xl font-extrabold text-navy mb-3">אז עכשיו אתה יודע.</p>

              <p className="text-gray-600 leading-relaxed mb-2">
                המדריך הזה לא נכתב מגוגל. לא מפוסטים. הוא נכתב ממה שראיתי קורה, ממה שטיפלתי בו, ממה שלמדתי עשר שנים. כל נקודה כאן יצאה ממקרה אמיתי.
              </p>

              <p className="text-gray-700 font-medium leading-relaxed">
                תקרא אותו לפני שנוסעים. תחזור אליו כשאתה לא בטוח. הוא כתוב בשבילך.
              </p>

              <div className="border-t border-gray-100 mt-10" />
            </div>

            {/* Mobile disclaimer */}
            <div className="lg:hidden bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-xs font-bold text-yellow-800 mb-1.5">⚠️ שים לב</p>
              <p className="text-xs text-yellow-900 leading-relaxed">
                המדריך מבוסס על ניסיון אישי. כל חברת השכרה קובעת את תנאיה בעצמה: סכומי פיקדון, ביטוח, גיל מינימום ודרישות נוספות יכולים להיות שונים. תמיד תבדוק את תנאי חברת ההשכרה שלך לפני שנוסעים.
              </p>
            </div>

            {/* ─── IMPORTANT NOTICE ─────────────────────────────── */}
            <div className="bg-navy rounded-xl p-6 mb-10">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">לפני שמתחילים: הכי חשוב</p>
              <p className="text-white font-bold text-base mb-3 leading-snug">
                תנאי ההשכרה של חברת ההשכרה שלך. קרא אותם. כולם.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                המדריך הזה נותן לך את הבסיס, את הלוגיקה, את מה שרוב האנשים לא יודעים. אבל כל חברת השכרה כותבת את החוזה שלה בעצמה. הסכום של הפיקדון, איזה ביטוח כלול, מה קורה עם נזק לשמשה, האם יש הגבלת קילומטרז׳, מינימום גיל נהג. כל אלה משתנים מחברה לחברה, ולפעמים גם בין מדינות של אותו חברת השכרה.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                הטעות הכי נפוצה שראיתי? אנשים שמניחים שאם ידעו אחד כך, כולם כאלה. לא. תפתח את תנאי ההזמנה שלך, תקרא אותם מהתחלה עד הסוף, ותשתמש במדריך הזה כדי להבין מה שקראת. זו הצורה הנכונה להשתמש בו.
              </p>
            </div>

            {/* ─── 1. DOCUMENTS ─────────────────────────────────── */}
            <SectionTitle id="documents" icon="📋">מסמכים נדרשים</SectionTitle>
            <SectionIntro>
              כאן אין יצירתיות. יש כללים. חסר מסמך אחד? הדלפק לא ממציא פתרונות, הוא לא "יעשה חריג". הוא פשוט לא ייתן לך את הרכב.
            </SectionIntro>

            <DocTiles />

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 text-sm text-gray-600 leading-relaxed">
              <span className="font-bold text-gray-700">✈️ כרטיס עלייה למטוס:</span> לא תמיד נדרש, אבל יש חברות השכרה שמבקשות אותו בנקודת האיסוף. בעיקר בארה״ב ובמדינות מסוימות באירופה. שמור אותו נגיש, גם כרטיס הטיסה חזור. אם לא תצטרך, מעולה. אם יבקשו ולא יהיה לך, תצא להדפיס.
            </div>

            <Callout type="tip">
              רישיון בינלאומי מוציאים בנקודות מורשות של משרד התחבורה. לא לוקח הרבה זמן, לא עולה הרבה כסף. מי שמוותר עליו מהמר. אני פחות בקטע של הימורים בחופשה.{" "}
              <Link href="/posts/international-driving-license" className="font-semibold underline underline-offset-2 hover:opacity-75">
                כל הפרטים על איך מוציאים רישיון בינלאומי ←
              </Link>
            </Callout>

            {/* Accordion: name matching */}
            <AccordionItem title="התאמת שמות: הנקודה שישראלים מפספסים" icon="⚠️">
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                בישראל אנחנו אלופי עולם בשחק עם שמות באנגלית. פעם שם נעורים, פעם קיצור, פעם איות שונה. בארץ? מסתדרים.
                בחו״ל? המערכת לא מבינה "למה התכוונת", והנציג לא מנחש.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-red-500 font-bold flex-shrink-0">✗</span> שם נעורים שונה מהדרכון</li>
                <li className="flex gap-2"><span className="text-red-500 font-bold flex-shrink-0">✗</span> קיצור שנראה לך זניח</li>
                <li className="flex gap-2"><span className="text-red-500 font-bold flex-shrink-0">✗</span> איות שונה בין הזמנה לדרכון</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold flex-shrink-0">✓</span> שם זהה לחלוטין בכל המסמכים ובהזמנה</li>
              </ul>
              <p className="text-xs text-gray-500 leading-relaxed mt-4 border-t border-gray-100 pt-3">
                יש מקרים שבהם הפקיד מקבל איות שונה במקצת, אם ברור שמדובר באותו אדם. אבל זה לפי שיקול דעתו באותו רגע, ולא זכות. אני לא הייתי בונה על זה.
              </p>
            </AccordionItem>

            <AccordionItem title="השם בהזמנה = הנהג. לא מי שמשלם, לא מי שבא לאסוף" icon="👤">
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                מי שמופיע בהזמנה הוא זה שחייב להציג את כל המסמכים בדלפק. אם מישהו אחר רוצה לנהוג, יש שתי אפשרויות:
              </p>
              <ul className="space-y-3 mb-4 text-sm text-gray-600">
                <li className="flex gap-2 items-start">
                  <span className="font-bold text-navy flex-shrink-0">1.</span>
                  <span><strong className="text-gray-800">נהג נוסף:</strong> אפשר להוסיף נהג נוסף בדלפק בזמן האיסוף. הוא חייב להיות נוכח פיזית, עם רישיון ישראלי ורישיון בינלאומי בתוקף. זה כרוך בתוספת תשלום יומית.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="font-bold text-navy flex-shrink-0">2.</span>
                  <span><strong className="text-gray-800">נהג ראשי אחר:</strong> אם מישהו אחר הוא הנהג הראשי, שמו צריך להיות בהזמנה, הכרטיס אשראי על שמו, וכל המסמכים שלו. שינוי שם לאחר ההזמנה יכול לאפס אותה לחלוטין.</span>
                </li>
              </ul>
              <div className="bg-red-50 border border-red-200 rounded p-3 text-xs text-red-700">
                <strong>שינוי שם ברגע האחרון:</strong> בהרבה מקרים מאפס את ההזמנה במערכת. המחיר קופץ למחיר היום, הזמינות נעלמת. שם בהזמנה זה לא פרט טכני.
              </div>
            </AccordionItem>

            {/* ─── 2. DEPOSIT ───────────────────────────────────── */}
            <SectionTitle id="deposit" icon="💳">פיקדון</SectionTitle>
            <SectionIntro>
              דיברנו כבר על כרטיס האשראי בחלק המסמכים. כאן נדבר על מה שעושים איתו בדלפק. הפיקדון הוא חובה. הוא לא מחיר נוסף, הוא לא קנס. הוא בטחון שחברת ההשכרה חוסמת על הכרטיס שלך עד שתחזיר את הרכב. בלי כרטיס אשראי פעיל על שם הנהג הראשי, הפיקדון לא עובר, והרכב לא יוצא.
            </SectionIntro>

            {/* Deposit visual */}
            <div className="bg-navy rounded-xl p-5 mb-5 text-white">
              <p className="text-xs text-slate-400 mb-3 font-semibold uppercase tracking-widest">מה זה פיקדון בפועל</p>
              <div className="grid grid-cols-3 gap-3 text-center mb-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-gold font-bold text-lg">300-3,000€</p>
                  <p className="text-xs text-slate-300 mt-1">סכום נחסם</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-gold font-bold text-lg">לא חיוב</p>
                  <p className="text-xs text-slate-300 mt-1">חסימת מסגרת</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-gold font-bold text-lg">משתחרר</p>
                  <p className="text-xs text-slate-300 mt-1">אחרי החזרת הרכב</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                הסכום משתנה לפי חברת ההשכרה, מדינה, קטגוריית רכב וסוג ביטוח. ברכבי פרימיום, יותר.
              </p>
            </div>

            <Callout type="info">
              גם עם ביטוח ללא השתתפות עצמית, הפיקדון עדיין נדרש. הוא לא רק לנזקים. גם לדלק חסר, לדמי טיפול מנהליים על דוחות, לנזקים שהביטוח לא מכסה, ולכל חריגה אחרת מהחוזה.
            </Callout>

            <AccordionItem title="מה קורה אם אין מסגרת פנויה בכרטיס?" icon="❓">
              <p className="text-sm text-gray-600 leading-relaxed">
                אין מסגרת פנויה בגובה הפיקדון? אין רכב. לא גחמה, לא אישי. המערכת לא עובדת אחרת.
                לפני שמגיעים לדלפק, כדאי לוודא שיש מסגרת פנויה. ברכבי פרימיום, חלק מחברות ההשכרה דורשות אפילו שני כרטיסים, שניהם על שם הנהג הראשי.
              </p>
            </AccordionItem>

            {/* ─── 3. CATEGORY ──────────────────────────────────── */}
            <SectionTitle id="category" icon="🚗">קטגוריית הרכב</SectionTitle>
            <SectionIntro>
              בעולם השכרת הרכב לא מזמינים רכב ספציפי. מזמינים קטגוריה. זה אחד הדברים הבסיסיים שהרבה אנשים לא יודעים, ושמפתיע אותם בדלפק.
            </SectionIntro>

            <div className="bg-surface border border-gray-200 rounded-xl p-5 mb-5 text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                כל רכב בתחום ההשכרה משויך לקטגוריה שמוגדרת לפי קוד <strong className="text-navy">ACRISS</strong>, מערכת תקן בינלאומית שמתארת את סוג הרכב, גודלו, סוג ההילוכים והמיזוג. הרכב שמוצג בהזמנה או בהצעת המחיר הוא <strong className="text-navy">רכב כדגם מייצג בלבד</strong>. לא הבטחה.
              </p>
              <p>
                בפועל, חברת ההשכרה יכולה לתת לך כל רכב אחר שנכנס לאותה קטגוריה. אם הזמנת קטגוריה C וקיבלת רכב שונה ממה שראית בתמונה, אבל הוא באותה קטגוריה, זה חוקי לחלוטין.
              </p>
            </div>

            <AccordionItem title="מה קורה כשחברת ההשכרה לא יכולה לחברת ההשכרה את הקטגוריה שהוזמנה" icon="⬆️">
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <div className="flex gap-3">
                  <span className="text-lg flex-shrink-0">⬆️</span>
                  <p><strong className="text-gray-800">שדרוג ללא תשלום.</strong> אם חברת ההשכרה לא יכולה לחברת ההשכרה את הקטגוריה שהוזמנה, הוא מחויב להציע את הקטגוריה הזמינה הבאה מעליה, ללא תוספת תשלום. זה לא טובה שלו, זו חובתה.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-lg flex-shrink-0">❌</span>
                  <p><strong className="text-gray-800">אין רכב בכלל.</strong> אם חברת ההשכרה לא יכולה לחברת ההשכרה רכב, ההזמנה יכולה להיות מבוטלת ללא דמי ביטול או קנס על אי-לקיחת הרכב.</p>
                </div>
                <div className="flex gap-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <span className="text-lg flex-shrink-0">🧾</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">תבקש פיצוי על הנזק שנגרם.</p>
                    <p>אם בגלל חוסר הרכב נגרמו לך הוצאות נוספות, כגון הסדר חלופי, נסיעות, אכסניה, שמור את כל הקבלות. אפשר לתבוע פיצוי על ההוצאות האלה, לעיתים גם דרך הברוקר שדרכו הזמנת.</p>
                  </div>
                </div>
              </div>
            </AccordionItem>

            <Callout type="info">
              קוד ACRISS מורכב מ-4 אותיות: קטגוריה, סוג מרכב, הילוכים, ודלק/מיזוג. לא חייב לשנן אותו, אבל כדאי לדעת שהוא קיים ולבדוק שהקטגוריה שמופיעה בהזמנה שלך תואמת את מה שציפית לקבל.
            </Callout>

            <AccordionItem title="טבלת קודי ACRISS המלאה" icon="📊">
              <AcrissTable />
            </AccordionItem>

            {/* ─── 4. INSURANCE ─────────────────────────────────── */}
            <SectionTitle id="insurance" icon="🛡️">ביטוח</SectionTitle>
            <SectionIntro>
              ביטוח הוא הנושא שהכי קל לחשוב שמבינים אותו לפני הנסיעה. ובדלפק, הוא הנושא שהכי גורם להפתעות. המינוח לבד כבר מספיק לבלבל. כאן תמצא הסבר לכל סוג, כדי שתדע בדיוק מה קנית לפני שצריך להשתמש בזה.
            </SectionIntro>

            <InsuranceTabs />

            <Callout type="tip">
              <strong>טיפ שעשוי לחסוך לך הרבה כסף:</strong> לפני שיוצאים עם הרכב מהחניון, תבדוק את דוח הנזק שהנציג מילא. הוא צריך לשקף את מצב הרכב בפועל. אם יש שריטה שלא מסומנת, תדרוש שיוסיפו אותה. ואחרי שסיימת עם הדוח, תצלם את הרכב מארבעת הצדדים ותצלם סרטון קצר סביבו. אותו דבר בהחזרה. הצילומים עם חותמת שעה הם הראיה שלך אם ינסו לחייב אותך על נזק שלא עשית.
            </Callout>

            <AccordionItem title="מה לא מכוסה — חשוב לדעת לפני שיוצאים" icon="🚫">
              <div className="space-y-6">

                {/* ── Category 1: Not covered by default, but may be with add-on ── */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-base">⚠️</span>
                    <p className="font-bold text-orange-700 text-sm">לא מכוסה בדרך הביטוח הבסיסי</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                    הפריטים הבאים <strong>אינם כלולים בביטוח הבסיסי</strong>. בדרך כלל מכוסים דרך כיסויים משלימים, אבל לא תמיד. בדוק את התנאים לפני ההשכרה.
                  </p>
                  <div className="space-y-2">
                    {[
                      { icon: "🪟", title: "שמשות ומראות", sub: "שבירה, סדקים, נזק ממכה" },
                      { icon: "🔧", title: "צמיגים", sub: "פנצ׳ר, קרע, נזק מדרך" },
                      { icon: "🚗", title: "מרכב תחתון", sub: "נזק לתחתית הרכב, סף תחתון" },
                      { icon: "⚙️", title: "מצמד ומצבר", sub: "כשל מכני, בלאי, שימוש לא נכון" },
                      { icon: "🔑", title: "אובדן מפתחות", sub: "אובדן או גניבת מפתח הרכב" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-lg px-3 py-2.5">
                        <span className="text-base flex-shrink-0">{item.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                          <p className="text-xs text-gray-500">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Category 2: Never covered, ever ── */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-base">🚫</span>
                    <p className="font-bold text-red-700 text-sm">לא מכוסה בשום מקרה, עם שום ביטוח או כיסוי</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                    הפריטים הבאים <strong>לא מכוסים על ידי אף ביטוח</strong>, לא של חברת ההשכרה ולא של כרטיס האשראי. לא קיימת חבילה שמכסה אותם. אם קרה, אתה משלם.
                  </p>
                  <div className="space-y-2">
                    {[
                      { icon: "🍺", title: "אלכוהול או סמים", sub: "נהיגה תחת השפעה — ביטול מלא של כל הכיסויים" },
                      { icon: "🏜️", title: "שטח לא סלול", sub: "כביש עפר, שביל, חוף ים, שטח פתוח" },
                      { icon: "🪑", title: "ריפודים פנימיים וגג", sub: "נזק פנימי לרכב, כתמים, קרעים, תקרה" },
                      { icon: "⚖️", title: "רשלנות מוכחת", sub: "נזק שנגרם בכוונה או באי זהירות חמורה" },
                      { icon: "🌊", title: "אסון טבע", sub: "שיטפון, ברד, רעידת אדמה" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-3 py-2.5">
                        <span className="text-base flex-shrink-0">{item.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                          <p className="text-xs text-gray-500">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </AccordionItem>

            <div className="flex items-center justify-between bg-surface border border-gray-200 rounded-xl px-5 py-4 my-6">
              <div>
                <p className="text-sm font-bold text-navy mb-0.5">עכשיו שאתה מבין את הביטוח:</p>
                <p className="text-xs text-gray-500">תקרא את ההשוואה שלנו בין הפלטפורמות</p>
              </div>
              <a href="/posts/rental-platforms" className="btn-gold text-xs py-2 px-5 flex-shrink-0">איפה להזמין? ←</a>
            </div>

            {/* ─── 5. DRIVER AGE ────────────────────────────────── */}
            <SectionTitle id="young-driver" icon="🧑">גיל הנהג</SectionTitle>
            <SectionIntro>
              גיל הנהג משפיע על זמינות הרכב, על המחיר, ולפעמים על האפשרות לשכור בכלל. זה נכון לשני הכיוונים.
            </SectionIntro>

            {/* Age range visual */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <StatCard value="21" label="גיל מינימום" sub="ברוב חברות ההשכרה" />
              <StatCard value="23-25" label="נהג צעיר" sub="תוספת יומית" />
              <StatCard value="70+" label="נהג בכיר" sub="בחלק מהמדינות" />
              <StatCard value="80-85" label="גיל מקסימום" sub="ברוב חברות ההשכרה" />
            </div>

            <AccordionItem title="נהג צעיר: מה זה אומר בפועל" icon="🟡" defaultOpen={false}>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                ברוב החברות אפשר לשכור מגיל 21. אבל עד גיל מסוים, חברת ההשכרה מגדירה אותך כ"נהג צעיר" ומוסיף תוספת יומית. הגבול הזה משתנה: חלק עוצרים ב-23, חלק ב-25, יש שמגיעים ל-26. ברכבי פרימיום, לעיתים גיל המינימום עצמו עולה.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-700 mb-1.5">בדרך כלל זמין</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>מיני / סיטי קאר</li>
                    <li>קטנה / קומפקט</li>
                    <li>אסטייט קטן</li>
                    <li>מנוע עד 1.6</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-700 mb-1.5">בדרך כלל לא זמין</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>SUV בינוני וגדול</li>
                    <li>מיניוואן / 7 מקומות</li>
                    <li>רכב פרימיום / ספורט</li>
                    <li>קבריולה</li>
                    <li>מנוע 2.0 ומעלה</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                בנוסף לגיל, צריך <strong>ותק רישיון</strong>: שנה עד שנתיים לרכב רגיל, שלוש ומעלה לרכבים גדולים או יוקרתיים. גיל מתאים בלי ותק מספיק? אין רכב.
              </p>
            </AccordionItem>

            <AccordionItem title="נהג בכיר: מה שרוב האנשים לא בודקים" icon="🔵" defaultOpen={false}>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                זה לא נפוץ, ופחות ופחות חברות השכרה מיישמים את זה בפועל. אבל זה עדיין קיים אצל חלק מהם, בעיקר ביעדים מסוימים. הגבול המקובל הוא גיל <strong className="text-navy">70</strong>, אבל יש חברות השכרה שמגדירים אותו גבוה יותר. אם אתה בטווח הזה, כדאי לבדוק את מדיניות חברת ההשכרה לפני שמזמינים.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-3">
                <li className="flex gap-2 items-start"><span className="text-gold font-bold flex-shrink-0">·</span> תוספת יומית, בדומה לנהג צעיר</li>
                <li className="flex gap-2 items-start"><span className="text-gold font-bold flex-shrink-0">·</span> הגבלה על קטגוריות רכב מסוימות</li>
              </ul>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-600 leading-relaxed">
                גיל מקסימום ברוב חברות ההשכרה הוא בין <strong className="text-navy">80 ל-85</strong>. מעבר לכך, ברוב המקרים ההשכרה לא אפשרית. לפני שמזמינים, תבדוק את המדיניות של חברת ההשכרה הספציפי.
              </div>
            </AccordionItem>

            {/* ─── 6. PICKUP ────────────────────────────────────── */}
            <SectionTitle id="pickup" icon="📍">איסוף והחזרה</SectionTitle>
            <SectionIntro>
              לדעת איפה לאסוף, מתי לאסוף ואיך להחזיר זה חלק מהתכנון. לגלות את זה בדקה האחרונה זה חלק מהבעיות.
            </SectionIntro>

            {/* Location types */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { icon: "🏢", title: "בתוך הטרמינל", desc: "התחנה בתוך הטרמינל. יוצאים מהמטוס ומגיעים ישר לדלפק." },
                { icon: "🚌", title: "מחוץ לשדה", desc: "תחנה בסמוך לשדה. שאטל חינמי מהטרמינל לתחנה." },
                { icon: "🙋", title: "נציג ממתין", desc: "נציג ממתין באולם הנוסעים בנקודה מוסכמת מראש." },
              ].map((t) => (
                <div key={t.title} className="bg-surface border border-gray-200 rounded-lg p-3 text-center">
                  <span className="text-2xl block mb-1">{t.icon}</span>
                  <p className="text-xs font-bold text-navy mb-1">{t.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            <Callout type="info">
              תבדוק מראש איזה סוג תחנה יש לחברת ההשכרה שלך. בזמן האיסוף, תשאל את הנציג היכן ואיך להחזיר. בשדה תעופה, עקוב בכניסה אחרי שלטי Car Rental Return ואחר כך חפש את חברת ההשכרה שלך.
            </Callout>

            {/* Time accordion */}
            <AccordionItem title="שעת האיסוף: מה מותר, מה מסוכן" icon="🕐">
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <div className="flex gap-3">
                  <span className="text-lg flex-shrink-0">⏱️</span>
                  <p><strong className="text-gray-800">גמישות של שעה לכל כיוון.</strong> לרוב חברות ההשכרה יש מרווח עד שעה לפני ועד שעה אחרי שעת האיסוף הרשומה, בכפוף לזמינות. מחוץ לטווח הזה, אין ערובה שהרכב יחכה.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-lg flex-shrink-0">✈️</span>
                  <p><strong className="text-gray-800">איסוף בשדה עם מספר טיסה.</strong> חברת ההשכרה עוקבת אחרי הלוחות של חברת התעופה ומתאים את עצמו. איחור? הם רואים את זה ומחכים. תמיד תציין מספר טיסה. זה לא פרט אופציונלי.</p>
                </div>
                <div className="flex gap-3 bg-red-50 border border-red-200 rounded-lg p-3">
                  <span className="text-lg flex-shrink-0">⚠️</span>
                  <p><strong className="text-red-700">בלי מספר טיסה.</strong> חברת ההשכרה לא יודעת אם אתה מאחר או לא מגיע. אחרי שעת האיסוף, היא רשאית לבטל. אין לה חובה לחכות.</p>
                </div>
                <div className="flex gap-3 bg-red-50 border border-red-200 rounded-lg p-3">
                  <span className="text-lg flex-shrink-0">🕐</span>
                  <p><strong className="text-red-700">איחור של יותר משעה.</strong> צור קשר עם חברת ההשכרה או הברוקר מיידית. אם האיחור מעביר אותך אחרי שעות הפעילות: יש שירות מחוץ לשעות? יחייבו. אין? תחזור למחרת ותקווה שההזמנה לא בוטלה.</p>
                </div>
              </div>
            </AccordionItem>

            {/* Return accordion */}
            <AccordionItem title="איסוף והחזרה מחוץ לשעות הפעילות" icon="🔑">
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <div className="flex gap-3">
                  <span className="text-lg flex-shrink-0">🔑</span>
                  <p><strong className="text-gray-800">תיבת מפתחות להחזרה בלבד.</strong> חלק מחברות ההשכרה מציעות תיבת מפתחות שמאפשרת להחזיר את הרכב בכל שעה, גם כשהסניף סגור. משאירים את המפתח בתיבה, הרכב בחניון, וזהו. שים לב: זה פתרון להחזרה בלבד, לא לאיסוף.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-lg flex-shrink-0">🕙</span>
                  <p><strong className="text-gray-800">שירות מחוץ לשעות הפעילות.</strong> יש חברות השכרה שמציעות שירות איסוף או החזרה מחוץ לשעות הרגילות, עם נציג שמגיע במיוחד. זה קיים, אבל בתשלום נוסף ולא אצל כולם.</p>
                </div>
                <div className="flex gap-3 bg-red-50 border border-red-200 rounded-lg p-3">
                  <span className="text-lg flex-shrink-0">⚠️</span>
                  <div>
                    <p className="text-red-700 font-bold mb-1">שינוי שעה לאחר שעות הפעילות: אין פתרון.</p>
                    <p className="mb-2">שינית שעת איסוף או החזרה לשעה שמחוץ לשעות הפעילות של הסניף? אם לחברת ההשכרה אין תיבת מפתחות ואין שירות After Hours, השינוי הזה פשוט לא יתאפשר. לא תוכל לאסוף את הרכב או להחזיר אותו בשעה החדשה.</p>
                    <p>במצב כזה חייבים להישאר בתוך שעות הפעילות של הסניף. אין פתרון אחר. אם לא עשית זאת מראש, תצטרך לחזור ולבדוק מחדש.</p>
                  </div>
                </div>
              </div>
            </AccordionItem>

            <Callout type="warning">
              לפני שמסיימים הזמנה, תבדוק את שעות הפעילות של הסניף ואם יש שירות מחוץ לשעות הרגילות או תיבת מפתחות. אם האיסוף או ההחזרה מתוכננים מחוץ לשעות האלה ואין פתרון, ההשכרה לא תתאפשר.
            </Callout>

            <AccordionItem title="החזרה במקום אחר: דמי החזרה (One-Way Fee)" icon="↩️">
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <p>
                  רוצה לאסוף את הרכב בפריז ולהחזיר ברומא? זה אפשרי. זה נקרא <strong className="text-navy">השכרה חד-כיוונית (One-Way)</strong>, ויש לו מחיר.
                </p>
                <p>
                  <strong className="text-gray-800">מה זה דמי החזרה?</strong> תוספת תשלום שמחויבת כי חברת ההשכרה צריכה להחזיר את הרכב למקום האיסוף המקורי. זה לוגיסטיקה, ואתה משלם עליה. הסכום יכול לנוע בין כמה עשרות יורו לכמה מאות, תלוי במרחק, במדינה ובחברת השכרה.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 space-y-2">
                  <p className="text-xs font-bold text-yellow-800">מה חשוב לדעת לפני שמזמינים:</p>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0 mt-1.5" />
                      דמי ההחזרה לא תמיד מוצגים בבירור בהשוואת המחירים. תחפש אותם בתנאים לפני אישור.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0 mt-1.5" />
                      גם בין ערים באותה מדינה יכולים להיות דמי החזרה, תלוי בחברת ההשכרה ובמרחק. בין מדינות כמעט תמיד יש תוספת.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0 mt-1.5" />
                      יש חברות השכרה שלא מאפשרות One-Way בכלל לחלק מהמדינות. תבדוק זמינות לפני שבונים על זה.
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

            {/* ─── 7. TOLLS ─────────────────────────────────────── */}
            <SectionTitle id="tolls" icon="🛣️">כבישי אגרה</SectionTitle>
            <SectionIntro>
              לא כל כביש מהיר חינמי. חלק מהמדינות גובות תשלום ישיר בכניסה לכביש, חלק דורשות מכשיר אלקטרוני ברכב, וחלק פועלות עם תו תקופתי שנרכש מראש. חשוב לדעת איזה מנגנון פועל במדינה שאתה נוסע אליה לפני שיוצאים לדרך.
            </SectionIntro>

            <div className="space-y-3 mb-6">
              <div className="bg-surface border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-bold text-navy mb-1">💳 תשלום ישיר בכניסה לנתיב</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  תחנות גבייה פיזיות על הכביש. משלמים בכל מעבר. מקבלות מזומן, כרטיס אשראי, ולפעמים רק מזומן. חלק מהתחנות מקבלות רק כרטיסים מקומיים. לפני שיוצאים, בדוק אם קיימת כניסה לכביש המהיר בדרך שלך וודא שיש לך אמצעי תשלום מתאים.
                </p>
              </div>

              <div className="bg-surface border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-bold text-navy mb-1">📡 טרנספוסנדר / אוטו-פס</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  מכשיר אלקטרוני מותקן ברכב שמאפשר מעבר בנתיב מהיר ייעודי בלי לעצור. הגבייה אוטומטית. במדינות מסוימות חברת ההשכרה מציעה אותו בעת איסוף הרכב בתשלום יומי נוסף. לא כל תחנה מציעה את השירות הזה.
                </p>
                <Callout type="warning">
                  אם עברת בנתיב מהיר <strong>בלי טרנספוסנדר</strong>, האגרה תגיע לחברת ההשכרה בדיעבד. תחויב על האגרה עצמה <strong>ועוד דמי טיפול</strong> שיכולים להגיע לכמה עשרות יורו לכל מעבר. ודא שיש לך פתרון מתאים לפני שנכנסים לנתיב הלא נכון.
                </Callout>
              </div>

              <div className="bg-surface border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-bold text-navy mb-1">🪟 ויניט (Vignette): תו תקופתי</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  מדינות מסוימות גובות אגרה לא לפי מעבר אלא לפי תקופה: שבוע, חודש, שנה. הויניט הוא התו שמעיד על התשלום, בצורת מדבקה פיזית או רישום דיגיטלי.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="font-bold text-green-700 mb-1">כשמשכירים במדינה שדורשת ויניט</p>
                    <p className="text-gray-600 leading-relaxed">הויניט כלול בדרך כלל בהשכרה. חברת ההשכרה מחויבת לעמוד בחוק המקומי. עם זאת, יש תחנות שגובות אותו בנפרד בעת האיסוף. תבדוק מראש.</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <p className="font-bold text-orange-700 mb-1">כשנוסעים אליה ממדינה אחרת</p>
                    <p className="text-gray-600 leading-relaxed">האחריות עליך. לא בדקת, לא שילמת? קנס. ניתן לרכוש דיגיטלית דרך האתר הרשמי של כל מדינה לפני הנסיעה.</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed border-t border-gray-100 pt-2">
                  מחיר, זמינות ואופן השימוש באוטו-פס או בויניט משתנים לפי מדינה וחברת השכרה. תמיד כדאי לבדוק מראש לפני הנסיעה.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-sm font-bold text-navy mb-1">🚫 ZTL באיטליה: אזורי כניסה מוגבלת</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  ערים רבות באיטליה (רומא, פירנצה, בולוניה ועוד) מפעילות אזורי <strong>ZTL</strong> (Zona a Traffico Limitato): אזורי כניסה מוגבלת לרכבים פרטיים. הכניסה נשלטת על ידי מצלמות. אם נכנסת בלי אישור, הקנס מגיע לחברת ההשכרה בדיעבד ומועבר אליך בתוספת דמי טיפול. הקנסות האיטלקיים לא זולים, ודמי הטיפול מכפילים את הכאב.
                </p>
                <p className="text-xs text-gray-500 mt-2">לפני שנכנסים לאזור עירוני באיטליה: בדוק אם קיים ZTL בעיר שאתה מבקר בה ומה שעות הפעילות שלו.</p>
              </div>
            </div>

            {/* ─── 8. CROSS-BORDER ──────────────────────────────── */}
            <SectionTitle id="crossborder" icon="🌍">חציית גבול עם רכב שכור</SectionTitle>
            <SectionIntro>
              נסיעה עם רכב שכור למדינה אחרת היא לא עניין שמסדרים בדרך. זה משהו שצריך להצהיר עליו בהזמנה. לא לקחת כמובן מאליו.
            </SectionIntro>

            <div className="bg-surface border border-gray-200 rounded-xl p-5 mb-5 text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                ברוב החוזים, <strong className="text-navy">נסיעה מחוץ למדינת ההשכרה אסורה ללא אישור מראש בכתב</strong>. זה לא שורה בעדינה. זה סעיף שחברות ההשכרה מחילות. מי שנוסע בלי אישור ונגרם נזק? עלול למצוא את עצמו ללא כיסוי ביטוחי כלל.
              </p>
              <p>
                הדבר הנכון לעשות: <strong className="text-navy">להצהיר על הנסיעה כבר בשלב ההזמנה</strong>. ברוב אתרי ההשוואה ואצל רוב חברות ההשכרה יש שדה ייעודי לכך. אם אין, פנה ישירות לחברת ההשכרה ותאשר בכתב.
              </p>
            </div>

            <Callout type="tip">
              <strong>חשוב לציין את היציאה כבר בשלב ההזמנה.</strong> לא כל הרכבים מורשים לנסיעה מחוץ למדינת ההשכרה. כשמסמנים את המדינות היעד בעת ההזמנה, התוצאות מסוננות אוטומטית לרכבים מורשים בלבד. רכב שלא הוצהר עליו מראש, גם אם השכרתו כבר, עלול שלא לקבל אישור בפועל.
            </Callout>

            <AccordionItem title="תוספת ביטוח לחציית גבול" icon="🛡️">
              <p className="text-sm text-gray-600 leading-relaxed">
                הביטוח שכלול בהשכרה (CDW, TP, SCDW) תקף בדרך כלל רק במדינת ההשכרה. כשיוצאים למדינה אחרת, חלק מחברות ההשכרה דורשות תוספת ביטוח. תבדוק בתנאי ההזמנה אם יש חיוב נוסף עבור המדינות שאתה מתכנן לבקר בהן, ואשר את הכיסוי מראש בכתב.
              </p>
            </AccordionItem>

            <AccordionItem title="ויניט (Vignette): כשנוסעים למדינה אחרת" icon="🪟">
              <p className="text-sm text-gray-600 leading-relaxed">
                כשמשכירים רכב במדינה שדורשת ויניט, הוא כלול בדרך כלל בהשכרה. כשנוסעים ממדינה אחרת לתוכה, האחריות עליך. לא בדקת, לא שילמת? קנס. פרטים מלאים על ויניט ואוטו-פס בסעיף כבישי אגרה למעלה.
              </p>
            </AccordionItem>

            <Callout type="tip">
              נוסעים למדינה אחרת? שלושה דברים לסדר מראש: להצהיר בהזמנה, לאשר כיסוי ביטוחי, ולבדוק אם נדרש ויניט. פרטים על ויניט וכבישי אגרה בסעיף כבישי אגרה למעלה.
            </Callout>

            {/* ─── WINTER EQUIPMENT ────────────────────────────── */}
            <SectionTitle id="winter" icon="❄️">ציוד חורף</SectionTitle>
            <SectionIntro>
              במדינות ואזורים רבים באירופה, נסיעה בחורף ללא ציוד מתאים היא עבירה. לא המלצה. חוק.
            </SectionIntro>

            <div className="bg-surface border border-gray-200 rounded-xl p-5 mb-5 text-sm text-gray-700 leading-relaxed space-y-4">
              <p className="font-semibold text-navy text-xs uppercase tracking-wide">סוגי ציוד חורף:</p>

              <div className="space-y-3">
                <div className="border-r-2 border-navy pr-3">
                  <p className="font-semibold text-navy text-sm mb-0.5">❄️ צמיגי חורף ייעודיים</p>
                  <p className="text-xs text-gray-600 leading-relaxed">מיועדים לטמפרטורות נמוכות, כבישים רטובים, שלג קל וקרח דק. אינם מיועדים לנסיעה בשלג עמוק או קרח כבד. לכך נועדות השרשראות.</p>
                </div>

                <div className="border-r-2 border-blue-400 pr-3">
                  <p className="font-semibold text-navy text-sm mb-0.5">🔵 צמיגי רב-עונתיים עם סימון 3PMSF</p>
                  <p className="text-xs text-gray-600 leading-relaxed">צמיגים המיועדים לכל השנה, שעומדים בתקן החורפי האירופי (סמל הפתית על הצמיג). מתאימים לקור, גשם, ושלג קל. כשהשלג מתעמק או הקרח מתגבש, גם הם מגיעים לגבול שלהם. צריך שרשראות.</p>
                </div>

                <div className="border-r-2 border-gray-400 pr-3">
                  <p className="font-semibold text-navy text-sm mb-0.5">⛓️ שרשראות שלג / גרביוני שלג</p>
                  <p className="text-xs text-gray-600 leading-relaxed">מתקינים על הגלגלים כשהכביש מכוסה שלג עמוק או קרח. שרשראות ממתכת וגרביוני שלג מטקסטיל, שתי הגרסאות מיועדות לאותה מטרה. חלק מהמדינות מחייבות לשאת אותן ברכב בחורף גם אם לא נדרשת ההתקנה בפועל.</p>
                </div>
              </div>

              <div className="pt-1 border-t border-gray-200 space-y-2">
                <p className="font-semibold text-navy text-xs uppercase tracking-wide">מה החוק אומר vs. מה הבטיחות דורשת:</p>
                <div className="flex flex-col gap-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-xs font-bold text-blue-700 mb-1.5">מה החוק מחייב</p>
                    <p className="text-xs text-gray-600 leading-relaxed">יש מדינות שמחייבות <strong>צמיגי חורף / רב-עונתיים (3PMSF)</strong> בכל רחבי המדינה בחורף (אוסטריה, פינלנד, נורווגיה). יש שמחייבות גם <strong>שרשראות</strong> בנוסף. ויש כמו צרפת ואיטליה שבהן החובה חלה רק <strong>על אזורים ספציפיים</strong>: אלפים, פירנאים, אזורי הרים.</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="text-xs font-bold text-amber-700 mb-1.5">מה הבטיחות דורשת</p>
                    <p className="text-xs text-gray-600 leading-relaxed">גם במדינות שמחייבות רק צמיגי חורף / רב-עונתיים: על כביש מושלג או מקפיא, <strong>בלי שרשראות לא תוכלו לנסוע</strong>. הרכב יחליק, יתקע, ולא ינוע. זה לא עניין של המלצה. זו מציאות פיזית. לאזור סקי או כביש הררי בחורף? שרשראות הן ציוד חובה בטיחותי, גם אם החוק לא מחייב.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-1 border-t border-gray-200">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-700 mb-1.5">השכרה במדינה שבה חובה</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">חברת ההשכרה מחויבת לעמוד בחוק, אבל <strong>רק הציוד שהחוק מחייב</strong> יהיה כלול: בדרך כלל צמיגי חורף / רב-עונתיים <em>או</em> שרשראות. לא בהכרח שניהם.</p>
                  <ul className="text-xs text-gray-600 leading-relaxed space-y-1">
                    <li>• ציוד נוסף (למשל שרשראות כשיש רק חובת צמיגים): <strong>יש להזמין בנפרד ומראש</strong>.</li>
                    <li>• גם ציוד שהחוק מחייב לא תמיד כלול במחיר ההשכרה. <strong>בחלק מהמקרים זה תוספת תשלום</strong>. כדאי לבדוק בעת ההזמנה.</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-700 mb-1.5">השכרה במדינה שבה אין חובה</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">נוסעים לאזור הרים, אתר סקי, או מדינה עם חובת ציוד חורף? <strong>האחריות עליך לחלוטין.</strong> שתי אפשרויות:</p>
                  <ul className="text-xs text-gray-600 leading-relaxed space-y-1.5">
                    <li><strong>• דרך חברת ההשכרה:</strong> חלק מחברות ההשכרה מציעות קטגוריות עם צמיגי חורף / רב-עונתיים, ואפשרות להזמין שרשראות כתוסף. אבל זה לא זמין בכל תחנה, בדרך כלל רק בתחנות שמשרתות יעדי חורף מוכרים (ליון, ז׳נבה, אינסברוק ועוד). <strong>חייבים להזמין מראש.</strong> בדלפק לא תמצאו.</li>
                    <li><strong>• ברכישה עצמאית:</strong> שרשראות ניתן לרכוש בחנויות ציוד רכב לאורך הדרך. פתרון טוב אם לא הזמנתם מראש, אך לא מחכים לרגע האחרון.</li>
                  </ul>
                </div>
              </div>
            </div>

            <Callout type="tip">
              <Link href="/posts/winter-equipment" className="font-semibold underline underline-offset-2 hover:opacity-75">
                טבלת חובות ציוד חורף לפי מדינה: המדריך המלא ←
              </Link>
            </Callout>

            {/* ─── EXTRAS / PRE-BOOK ITEMS ──────────────────────── */}
            <SectionTitle id="extras" icon="🧳">כיסאות וציוד משלים</SectionTitle>
            <SectionIntro>
              ציוד כמו כיסאות בטיחות, GPS וציוד חורף ניתן להזמין מראש או לבקש בעת האיסוף בהתאם לזמינות. התשלום תמיד מתבצע במקום, בעת קבלת הרכב. לא בהזמנה המקורית.
            </SectionIntro>

            <div className="space-y-3 mb-6">

              {/* Child seats */}
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide pt-1">כיסאות בטיחות</p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-sm font-bold text-navy mb-2">👶 Infant Seat — כיסאון לתינוק</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  לתינוקות עד כ-13 ק"ג (בערך עד גיל שנה). פונה לאחור בלבד. הכיסא הקריטי ביותר לתינוקות צעירים.
                </p>
                <p className="text-xs font-semibold text-red-700">לא כל התחנות מציעות כיסא תואם לתינוקות מתחת לגיל שנה. אם הילד שלך מתחת לגיל שנה, אשר זמינות ישירות מול חברת ההשכרה לפני ההזמנה. אל תניח שיהיה.</p>
              </div>

              <div className="bg-surface border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-bold text-navy mb-2">🐣 Baby Seat — כיסא לפעוט</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  לילדים בין כ-9 ל-18 ק"ג (בערך גיל 9 חודשים עד 4 שנים). יכול להיות פונה קדימה או אחורה לפי מודל הכיסא. בדוק תאימות לפי משקל, לא רק לפי גיל.
                </p>
              </div>

              <div className="bg-surface border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-bold text-navy mb-2">🧒 Child Seat — כיסא ילדים</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  לילדים בין כ-15 ל-36 ק"ג (בערך גיל 3 עד 10 שנים). פונה קדימה, עם חגורת בטיחות של הרכב. מתאים לילדים שיצאו מכיסא עם שקת.
                </p>
              </div>

              <div className="bg-surface border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-bold text-navy mb-2">🪑 Booster Seat — מושב הגבהה</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  לילדים מעל כ-22 ק"ג (בערך גיל 6 ומעלה). מגביה את הילד כך שחגורת הרכב תפגע בנקודה הנכונה. אין שקת, הילד כבר מאובטח עם חגורת הרכב עצמה.
                </p>
              </div>

              <Callout type="info">
                תמיד בדוק תאימות לפי משקל הילד, לא רק לפי גיל. כיסא לא תואם הוא לא כיסא בטוח.
              </Callout>

              {/* Other equipment */}
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide pt-2">ציוד נוסף</p>

              <div className="bg-surface border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-bold text-navy mb-1">🎿 גגון סקי / תיבת גג</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  לנוסעים לאתרי סקי או עם מטען גדול. גגון סקי מאפשר קיבוע סקיות וסנובורד מחוץ לרכב. תיבת גג מוסיפה נפח אחסון. לא כל הרכבים מגיעים מוכנים לגגון, ולא כל התחנות מציעות את הציוד. הזמן מראש ואשר זמינות.
                </p>
              </div>

              <div className="bg-surface border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-bold text-navy mb-1">🗺️ GPS / ניווט</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  חלק מהרכבים כוללים ניווט מובנה. במקרים אחרים ניתן לשכור מכשיר GPS נפרד מחברת ההשכרה. בפועל, רוב הנוסעים משתמשים בנייד. אם מסתמכים על GPS של חברת ההשכרה, בדוק זמינות וודא שהמפות מעודכנות למדינות היעד.
                </p>
              </div>

              <div className="bg-surface border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-bold text-navy mb-1">❄️ צמיגי חורף, שרשראות שלג וגרביוני שלג</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  פרטים מלאים בסעיף ציוד חורף למעלה.
                </p>
              </div>

            </div>

            <Callout type="tip">
              מזמינים מראש? הזמינות גבוהה יותר ומחיר זהה. מחכים לרגע האחרון? אפשרי, אבל בעונות שיא הציוד עשוי להיגמר. כיסאות בטיחות לתינוקות צעירים במיוחד, כדאי לא לקחת סיכון.
            </Callout>

            {/* ─── 8. FUEL ──────────────────────────────────────── */}
            <SectionTitle id="fuel" icon="⛽">דלק</SectionTitle>
            <SectionIntro>
              כולם חושבים שהם מבינים דלק. "ממלאים, מחזירים, יאללה". ואז מגיע החיוב. ואז מגיעים העצבים. אז בוא נעשה סדר.
            </SectionIntro>

            {/* Fuel policy tiles */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <FuelPolicyCard
                tag="הכי נפוץ"
                title="מלא למלא"
                subtitle="Full to Full"
                desc="מקבל מלא, מחזיר מלא. הכי פשוט, הכי צודק."
                highlighted
              />
              <FuelPolicyCard
                tag="פחות נפוץ"
                title="דלק משולם מראש"
                subtitle="Prepaid Fuel"
                desc="משלמים מראש, מחזירים ריק. פחות משתלם לרוב."
              />
              <FuelPolicyCard
                tag="נדיר"
                title="אחד לאחד"
                subtitle="Same to Same"
                desc="מקבל עם X, מחזיר עם X. פשוט על הנייר."
              />
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 flex gap-3">
              <span className="text-2xl flex-shrink-0">⚠️</span>
              <p className="text-sm text-gray-700">
                <strong className="text-red-700">"כמעט מלא" זה לא מלא.</strong> קו אחד חסר? מבחינת חברת ההשכרה זה לא עומד בתנאים. אין בדלק מושג שנקרא "בערך".
              </p>
            </div>

            <Callout type="tip">
              <strong>בקבלת הרכב:</strong> תוודא שהנציג רשם בחוזה את מפלס הדלק כפי שהוא בפועל. ואז תצלם את לוח המחוונים בחניון התחנה לפני שזזים. <strong>בהחזרה:</strong> מלא קרוב לנקודת ההחזרה, שמור קבלה, וצלם שוב את הדשבורד. חותמת השעה על התמונות היא הראיה שלך אם ינסו לחייב על דלק חסר שלא חסר.
            </Callout>

            {/* ─── 6. MILEAGE ───────────────────────────────────── */}
            <SectionTitle id="mileage" icon="🗺️">קילומטרז׳</SectionTitle>
            <SectionIntro>
              הנחת המוצא של רוב האנשים: "ברור שהק״מ חופשי". ברוב המקרים? נכון. אבל ברוב זה לא בכולם.
            </SectionIntro>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Unlimited Mileage</p>
                <p className="text-sm font-bold text-navy mb-2">ק״מ חופשי</p>
                <p className="text-xs text-gray-600 leading-relaxed">כמה שרוצים, בלי ספירה. חייב להיות כתוב <strong>במפורש</strong> בתנאי ההשכרה. לא כתוב? לא קיים.</p>
              </div>
              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
                <p className="text-xs font-bold text-orange-700 mb-1 uppercase tracking-wide">Limited Mileage</p>
                <p className="text-sm font-bold text-navy mb-2">ק״מ מוגבל</p>
                <p className="text-xs text-gray-600 leading-relaxed">מכסה יומית או לכל התקופה. כל ק״מ מעבר מחויב בנפרד. מה שנראה זול בהתחלה, יכול להיות יקר בסוף.</p>
              </div>
            </div>

            <Callout type="tip">
              לפני שמאשרים הזמנה, בדוק מה מדיניות הק״מ. שורה אחת בתנאים. שווה את הדקה.
            </Callout>

            {/* ─── 7. FINES ─────────────────────────────────────── */}
            <SectionTitle id="fines" icon="📨">קנסות ודוחות</SectionTitle>
            <SectionIntro>
              אף אחד לא יוצא לחו״ל כדי לקבל דוח. אבל דוחות לא שואלים אותך מה התוכניות שלך. והם לא מגיעים תמיד מיד.
            </SectionIntro>

            {/* Fine timeline */}
            <div className="bg-surface rounded-xl p-5 mb-5 border border-gray-200">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">איך דוח מוצא אותך</p>
              <div className="space-y-1">
                <FineStep num={1} text="המצלמה / הנציג מנפיק את הדוח על שם הרכב. לא על שמך." />
                <FineStep num={2} text="חברת ההשכרה מקבלת את הדוח, מזהה מי ניהג, ומעבירה את הפרטים שלך לרשות." />
                <FineStep num={3} text="חברת ההשכרה גובה דמי טיפול אדמיניסטרטיביים: 20 עד 50 יורו לדוח. גם אם אתה מתכנן לערער." />
                <FineStep num={4} text="הקנס עצמו מגיע ישירות ממך לרשות המקומית. חברת ההשכרה לא מעורבת בזה יותר." />
              </div>
            </div>

            <AccordionItem title="לא צריך שוטר כדי לקבל דוח באירופה" icon="📷">
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                מצלמות מהירות, אזורי ZTL, נתיבי תחבורה ציבורית, חניה אסורה. הכל מצולם אוטומטית.
                לא עצרו אותך? לא אמרו לך כלום? לא משנה. הדוח מגיע בדואר, לפעמים חודשים אחרי שחזרת הביתה.
              </p>
              <div className="bg-blue-50 rounded p-3 text-xs text-navy">
                <strong>ZTL באיטליה:</strong> אזורי כניסה מוגבלת במרכזי ערים. ישראלים נופלים על זה הרבה. יש שלט, אבל הוא לא תמיד בולט.
              </div>
            </AccordionItem>

            <Callout type="tip">
              קיבלת דוח? בדוק אם יש הנחה לתשלום מוקדם. בהרבה מדינות זה 30 עד 50 אחוז פחות. מי שמחכה, משלם יותר. תמיד.
            </Callout>

            {/* ─── CANCELLATION ─────────────────────────────────── */}
            <SectionTitle id="cancellation" icon="📅">דמי ביטול ואי הגעה</SectionTitle>
            <SectionIntro>
              מדיניות הביטול משתנה לפי חברת ההשכרה, הקטגוריה והזמן שנותר עד לאיסוף. כדאי לבדוק את התנאים לפני שמאשרים הזמנה.
            </SectionIntro>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-sm font-bold text-green-800 mb-2">ביטול מעל 48 שעות לפני האיסוף</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  ברוב המקרים ללא עלות, או עם דמי ביטול סמליים בלבד. חלק מהחברות מחזירים את מלוא הסכום ללא שאלות.
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <p className="text-sm font-bold text-orange-800 mb-2">ביטול בתוך 48 שעות לפני האיסוף</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  דמי הביטול גדלים משמעותית. הסכום משתנה לפי חברת ההשכרה, הקטגוריה ומדינת ההשכרה. בדרך כלל בין <strong>30 ל-100 דולר</strong>.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-5">
              <p className="text-sm font-bold text-red-800 mb-2">No-Show: לא ביטלת ולא הגעת</p>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                אם לא הגעת לאסוף את הרכב ולא ביטלת מראש, בין אם בגלל שינוי תוכנית, מסמך חסר שמנע את האיסוף, או כל סיבה אחרת, חברת ההשכרה תחייב דמי No-Show. הסכום עומד בדרך כלל על <strong>50 עד 200 דולר</strong> ומשתנה לפי חברה וקטגוריה.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                חשוב: גם אם הסיבה לאי-ההגעה היתה מחוץ לשליטתך, החיוב מבוסס על התנאים שאישרת בהזמנה ולא על הנסיבות.
              </p>
            </div>

            <Callout type="tip">
              לפני שמאשרים הזמנה: בדוק את מדיניות הביטול וה-No-Show בתנאים. זה שורה אחת שיכולה לחסוך עד 200 דולר.
            </Callout>

            {/* ─── EMERGENCY: ACCIDENT & BREAKDOWN ─────────────── */}
            <SectionTitle id="emergency" icon="🚨">תאונה ותקלה מכנית</SectionTitle>
            <SectionIntro>
              שני מצבים שאף אחד לא מתכנן אליהם. כדאי לדעת מה עושים לפני שיוצאים לדרך. הפרוצדורה משתנה לפי חברת ההשכרה, המדינה וסוג הבעיה.
            </SectionIntro>

            <div className="space-y-3 mb-6">

              <div className="bg-surface border border-gray-200 rounded-xl p-5">
                <p className="text-sm font-bold text-navy mb-3">🔧 תקלה מכנית</p>
                <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                  <p>
                    הצעד הראשון: <strong className="text-navy">לפנות לשירות הדרכים (Roadside Assistance)</strong> של חברת ההשכרה. הם יעריכו את הבעיה ויתנו הוראות מדויקות לפי הסיטואציה.
                  </p>
                  <div className="space-y-2 text-xs mt-2">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="font-bold text-blue-800 mb-1">אם הרכב מושבת לחלוטין</p>
                      <p className="text-gray-600 leading-relaxed">פנה לשירות הדרכים. הם ישלחו גרר וינחו אותך מה הלאה. אל תנסה להגיע לתחנה בכוחות עצמך. שמור את המיקום שלך ואת פרטי הרכב נגישים.</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="font-bold text-blue-800 mb-1">תקלה קלה (פנצ׳ר, שמן, נוזל)</p>
                      <p className="text-gray-600 leading-relaxed">פנה לשירות הדרכים לקבלת הוראות. אם מדובר בנזק שכיסוי משלים מכסה (שמשה, צמיג וכו׳), יש שתי אפשרויות: לתקן עצמאית ולשמור קבלות לצורך החזר, או לתקן דרך שירות הדרכים ולקבל החזר מהכיסוי על מה שחויבת. בכל מקרה, שמור את כל הקבלות.</p>
                    </div>
                  </div>
                </div>
                <Callout type="warning">
                  אם הרכב נגרר, חברת ההשכרה <strong>לא תמיד מחויבת לספק רכב חלופי</strong>. בדרך כלל יש החלפה, אבל אם אין זמינות בתחנה הקרובה, זה לא בהתחייבות. תמיד שאל ישירות.
                </Callout>
              </div>

              <div className="bg-surface border border-gray-200 rounded-xl p-5">
                <p className="text-sm font-bold text-navy mb-3">💥 תאונה</p>
                <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                  <p>
                    שני דברים במקביל, מיד לאחר התאונה:
                  </p>
                  <div className="space-y-2">
                    {[
                      { step: "1", title: "משטרה", text: "פנה לרשויות לקבלת דוח תאונה רשמי (Constat / Police Report). ללא דוח, חברת ההשכרה עלולה לסרב לכיסוי הנזק." },
                      { step: "2", title: "חברת ההשכרה / שירות הדרכים", text: "פנה לתחנה או לשירות הדרכים לקבלת הוראות מדויקות. הם יקבעו אם שולח גרר, רכב חלופי, או שניתן להמשיך בנסיעה." },
                      { step: "3", title: "תיעוד", text: "צלם את כל הנזקים, מיקום הרכבים, שלטי רחוב, רישיון ופרטי הצד השני אם מעורב." },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{s.step}</span>
                        <div>
                          <p className="font-semibold text-navy text-xs mb-0.5">{s.title}</p>
                          <p className="text-xs text-gray-600 leading-relaxed">{s.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <Callout type="info">
              מספר שירות הדרכים נמצא בדרך כלל בחוזה ההשכרה או על מדבקה בתוך הרכב. שמור אותו בטלפון לפני שיוצאים לדרך.
            </Callout>

            {/* ─── SUMMARY ──────────────────────────────────────── */}
            <SectionTitle id="summary" icon="✅">השורה התחתונה</SectionTitle>
            <p className="text-gray-700 leading-relaxed mb-6">
              השכרת רכב היא לא מוקש. היא רק לא סולחת. מי שמגיע מוכן נוסע רגוע. מי שמניח שיסתדר, לומד בדרך הקשה.
              הנה הרשימה שתציל אותך מרוב הסיפורים:
            </p>

            <div className="bg-surface rounded-xl border border-gray-200 overflow-hidden mb-8">
              {[
                { icon: "🚗", text: "לא מזמינים רכב ספציפי, מזמינים קטגוריה. הרכב בתמונה הוא דגם מייצג בלבד. לא יכלו לתת את הקטגוריה? מגיע לך שדרוג ללא תשלום." },
                { icon: "🪪", text: "רישיון ישראלי ובינלאומי פיזיים ובתוקף. דרכון אצלך. כרטיס אשראי על שם הנהג הראשי. כולם עם אותו שם." },
                { icon: "💳", text: "פיקדון נחסם על הכרטיס. תוודא שיש מסגרת פנויה. דביט ופרה-פייד לא מתקבלים." },
                { icon: "📍", text: "בדוק מראש היכן התחנה, שעות הפעילות, ואם יש תיבת מפתחות או שירות מחוץ לשעות לפי הצורך." },
                { icon: "🕐", text: "איסוף בשדה תעופה? תציין מספר טיסה. בלי מספר טיסה, חברת ההשכרה לא חייבת לחכות." },
                { icon: "🛡️", text: "קרא את תנאי הביטוח לפני. CDW עם השתתפות עצמית זה לא אותו דבר כמו SCDW. תדע מה כלול." },
                { icon: "📋", text: "בדוק את דוח הנזק בקבלת הרכב. צלם את הרכב מארבעת הצדדים ואת הדשבורד לפני ובהחזרה." },
                { icon: "🧑", text: "נהג צעיר או בכיר? תבדוק גיל, ותק וקטגוריית רכב מראש. לא בדלפק." },
                { icon: "⛽", text: "Full to Full: מקבל מלא, מחזיר מלא. צלם דשבורד בקבלה ובהחזרה. שמור קבלת דלק." },
                { icon: "🗺️", text: "בדוק מדיניות קילומטרז׳ לפני שמאשרים. ק״מ חופשי חייב להיות כתוב במפורש." },
                { icon: "📨", text: "קיבלת דוח? טפל בו מהר. לרוב יש הנחה לתשלום מוקדם. הוא לא נעלם מעצמו." },
                { icon: "🛣️", text: "חוצה גבול או נוסע למדינה עם ויניט? בדוק אם הרכב מצויד. כניסה לאיטליה? למד מה זה ZTL לפני." },
                { icon: "👶", text: "צריך כיסא ילדים? הזמן מראש עם ההשכרה. אל תניח שיהיה זמין בתחנה." },
                { icon: "📅", text: "בדוק את מדיניות הביטול וה-No-Show לפני שמאשרים הזמנה. ביטול ב-48 שעות לפני יכול לעלות 30 עד 100 דולר." },
                { icon: "🚨", text: "שמור את מספר שירות הדרכים בטלפון לפני שיוצאים לדרך. הוא בחוזה ההשכרה או על מדבקה בתוך הרכב." },
              ].map((item, i, arr) => (
                <div key={i} className={`flex items-start gap-4 px-5 py-4 ${i < arr.length - 1 ? "border-b border-gray-200" : ""}`}>
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* ─── LEXICON ──────────────────────────────────────── */}
            <SectionTitle id="lexicon" icon="📖">מילון מונחים</SectionTitle>
            <SectionIntro>
              כל המונחים באנגלית שתיתקל בהם בהזמנה, בחוזה, או בדלפק. עם תרגום והסבר קצר.
            </SectionIntro>

            <AccordionItem title="פתח את המילון המלא" icon="📖">
              <LexiconSection />
            </AccordionItem>

            <div className="p-6 bg-navy rounded-xl text-center mt-10">
              <p className="text-white font-bold text-lg mb-2">מוכן להשכיר?</p>
              <p className="text-slate-300 text-sm mb-5">עכשיו שאתה יודע מה אתה עושה — תקרא איפה הכי כדאי להזמין.</p>
              <a href="/posts/rental-platforms" className="btn-gold text-sm px-8 py-2.5">איפה הכי כדאי להזמין? השוואה מלאה ←</a>
            </div>
          </article>

          {/* Left gutter disclaimer + CTA */}
          <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-24 space-y-4">
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src="/samuel.avif"
                  alt="סמואל פרץ"
                  width={44}
                  height={44}
                  className="rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-xs font-bold text-navy leading-tight">סמואל פרץ</p>
                  <p className="text-xs text-gray-400 leading-tight">10+ שנות ניסיון בתעשייה</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                עשר שנים בתעשיית השכרת הרכב: תפעול, ניהול ושירות לקוחות מהצד של חברת ההשכרה. המדריך הזה מבוסס על מה שראיתי בשטח.
              </p>
              <a href="/about" className="text-xs text-navy font-semibold hover:underline">קרא עלי ←</a>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs font-bold text-yellow-800 mb-2">⚠️ שים לב</p>
              <p className="text-xs text-yellow-900 leading-relaxed">
                המדריך הזה מבוסס על ניסיון אישי ומקרים מהשטח. הוא מדריך, לא חוזה. כל חברת השכרה קובעת את תנאיה בעצמה. סכומי פיקדון, דרישות ביטוח, גיל מינימום, רשימת מסמכים. כל אלה יכולים להיות שונים ממה שכתוב כאן. תמיד תבדוק את תנאי חברת ההשכרה שלך לפני שנוסעים.
              </p>
            </div>
            <div className="p-4 bg-surface rounded-lg border border-gray-100">
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">מוכן להזמין? קרא קודם איפה כדאי.</p>
              <a href="/posts/rental-platforms" className="btn-gold text-xs py-2 px-4 w-full text-center block">איפה להזמין? ←</a>
            </div>
          </aside>

        </div>
      </div>

      <MobileFloatingCTA />
      <MobileTOC items={tocItems.map(({ id, label }) => ({ id, label }))} />
      <BackToTop />
      <Footer />
    </>
  );
}
