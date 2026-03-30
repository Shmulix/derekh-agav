"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const terms = [
  {
    term: "CDW",
    full: "Collision Damage Waiver",
    he: "ביטוח נזקי תאונה",
    desc: "כיסוי לנזקי התנגשות לרכב השכור. כמעט תמיד כולל השתתפות עצמית — הסכום שתשלם מכיסך במקרה נזק.",
  },
  {
    term: "TP",
    full: "Theft Protection",
    he: "ביטוח גניבה",
    desc: "כיסוי במקרה של גניבת הרכב. גם כאן בדרך כלל יש השתתפות עצמית. לרוב מגיע יחד עם CDW.",
  },
  {
    term: "LDW",
    full: "Loss Damage Waiver",
    he: "ביטוח נזק ואובדן",
    desc: "המקבילה האמריקאית ל-CDW+TP יחד. שם של כיסוי אחד שמאחד הכל. אותם חריגים, אותה השתתפות עצמית.",
  },
  {
    term: "SCDW",
    full: "Super CDW / Super TP",
    he: "ביטוח ללא השתתפות עצמית",
    desc: "שדרוג ל-CDW/TP שמבטל את ההשתתפות העצמית. במקרה נזק תשלם רק דמי טיפול — בדרך כלל 40–60 יורו.",
  },
  {
    term: "Excess",
    full: "Excess / Deductible",
    he: "השתתפות עצמית",
    desc: "הסכום שאתה נושא בעצמך במקרה של נזק. יכול לנוע בין 300 ל-3,000 יורו. SCDW מבטל אותו.",
  },
  {
    term: "Full to Full",
    full: "Fuel Policy",
    he: "מלא למלא",
    desc: "המדיניות הנפוצה ביותר: מקבל רכב עם מיכל מלא, מחזיר מלא. הכי פשוטה ושקופה.",
  },
  {
    term: "Prepaid Fuel",
    full: "Fuel Policy",
    he: "דלק משולם מראש",
    desc: "משלמים מראש עבור מיכל מלא ומחזירים ריק. לרוב יקר יותר ולא כדאי אלא אם נוסעים הרבה.",
  },
  {
    term: "Same to Same",
    full: "Fuel Policy",
    he: "אחד לאחד",
    desc: "מקבל עם כמות X ומחזיר עם אותה כמות. קשה לדייק — מדיניות שמובילה לאי-הבנות בהחזרה.",
  },
  {
    term: "One-Way",
    full: "One-Way Rental",
    he: "השכרה חד-כיוונית",
    desc: "איסוף ברשות אחת, החזרה ברשות אחרת. בדרך כלל כרוך בדמי החזרה נוספים — Drop-off Fee.",
  },
  {
    term: "Drop-off Fee",
    full: "One-Way / Drop Fee",
    he: "דמי החזרה",
    desc: "תוספת תשלום על החזרת רכב בתחנה שונה מנקודת האיסוף. יכולה להיות גבוהה משמעותית.",
  },
  {
    term: "ACRISS",
    full: "Association of Car Rental Industry Systems Standards",
    he: "קוד סיווג רכב",
    desc: "מערכת קודים בינלאומית של 4 אותיות שמתארת קטגוריה, סוג מרכב, הילוכים וסוג דלק. לדוגמה: CDMR.",
  },
  {
    term: "Young Driver",
    full: "Young Driver Surcharge",
    he: "תוספת נהג צעיר",
    desc: "חיוב יומי נוסף לנהגים מתחת לגיל 25 (לפעמים 23). גובה התוספת משתנה בין ספקים.",
  },
  {
    term: "Senior Driver",
    full: "Senior Driver Fee",
    he: "תוספת נהג בכיר",
    desc: "חיוב נוסף לנהגים מעל גיל מסוים (בדרך כלל 70+). נפוץ פחות מהצעיר, אבל עדיין קיים.",
  },
  {
    term: "Additional Driver",
    full: "Extra Driver",
    he: "נהג נוסף",
    desc: "כל מי שנוסע ברכב מעבר לנהג הראשי חייב להיות רשום בחוזה. יש חיוב נוסף לכל נהג נוסף.",
  },
  {
    term: "Unlimited Mileage",
    full: "Free Mileage",
    he: "קילומטרז׳ חופשי",
    desc: "ללא הגבלת ק״מ — נוסעים כמה שרוצים ללא תשלום נוסף. חייב להיות כתוב במפורש בחוזה.",
  },
  {
    term: "Voucher",
    full: "Booking Voucher",
    he: "שובר הזמנה",
    desc: "מסמך ההזמנה שמציגים בדלפק. מכיל את פרטי ההשכרה, מה כלול ומה לא. שמרו עליו.",
  },
  {
    term: "No-Show",
    full: "No-Show Policy",
    he: "אי-הגעה",
    desc: "לא הגעת לאסוף את הרכב ולא ביטלת. בדרך כלל גורר חיוב מלא ואי-החזרת כספים.",
  },
  {
    term: "Grace Period",
    full: "Late Return Grace",
    he: "חלון גמישות",
    desc: "פרק זמן קצר שהספק מאפשר לאחר שעת ההחזרה (לרוב 29–59 דקות) לפני שמחייבים שעה נוספת.",
  },
  {
    term: "Broker",
    full: "Rental Broker / Aggregator",
    he: "ברוקר / אתר השוואה",
    desc: "חברה שמשווה מחירים ומוכרת הזמנות בשם ספקים רבים. לא הם מספקים את הרכב — הספק מספק.",
  },
  {
    term: "Supplier",
    full: "Car Rental Supplier",
    he: "ספק / חברת ההשכרה",
    desc: "החברה שמחזיקה בפועל את הרכבים ומנהלת את הדלפק. Hertz, Avis, Europcar — אלה ספקים.",
  },
  {
    term: "Damage Report",
    full: "Vehicle Inspection Report",
    he: "דוח נזק / פרוטוקול קבלה",
    desc: "מסמך שמתעד את מצב הרכב בקבלה ובהחזרה. חובה לחתום עליו ולוודא שכל נזק קיים מסומן.",
  },
  {
    term: "Cross-Border",
    full: "Cross-Border Fee",
    he: "נסיעה חוצת גבול",
    desc: "נסיעה עם הרכב למדינה אחרת. לרוב אסורה ללא אישור מראש בכתב מהספק. כרוכה לעיתים בתוספת תשלום.",
  },
  {
    term: "In-Terminal",
    full: "Airport In-Terminal",
    he: "בתוך הטרמינל",
    desc: "תחנת ההשכרה ממוקמת פיזית בתוך הטרמינל. נגישה ישירות — ללא שאטל ו ללא זמן נסיעה.",
  },
  {
    term: "Off-Airport",
    full: "Off-Airport Location",
    he: "מחוץ לשדה התעופה",
    desc: "תחנה בסמוך לשדה אך לא בתוכו. מגיעים אליה בשאטל חינמי. לרוב זול יותר.",
  },
  {
    term: "Meet & Greet",
    full: "Meet and Greet Service",
    he: "שירות פגישה אישית",
    desc: "נציג פוגש אותך בטרמינל עם הרכב. שירות פרימיום — נפוץ בהשכרות עסקיות ותחנות ללא דלפק.",
  },
  {
    term: "Winter Tires",
    full: "Winter / Snow Tires",
    he: "צמיגי חורף",
    desc: "צמיגים המיועדים לתנאי חורף: קור, גשם, שלג קל וקרח דק. מחויבים בחוק במדינות רבות באירופה בחודשי החורף.",
  },
  {
    term: "All-Season Tires",
    full: "All-Season / Four-Season Tires",
    he: "צמיגי רב-עונתיים",
    desc: "צמיגים המיועדים לכל השנה. כשנושאים סימון 3PMSF (הפתית), הם מוכרים חוקית ברוב המדינות כשווי ערך לצמיגי חורף.",
  },
  {
    term: "3PMSF",
    full: "Three-Peak Mountain Snowflake",
    he: "תקן חורף אירופי",
    desc: "סימון על גבי הצמיג בדמות פתית שלג בתוך הר משולש. מעיד שהצמיג עומד בתקן הביצועים לתנאי חורף. נדרש להכרה חוקית כצמיג חורף במרבית מדינות אירופה.",
  },
  {
    term: "Snow Chains",
    full: "Snow / Tire Chains",
    he: "שרשראות שלג",
    desc: "שרשראות ממתכת המתקינות על הגלגלים לשיפור האחיזה בשלג עמוק וקרח. נדרשות בחלק מהאזורים ההרריים בנוסף לצמיגי חורף.",
  },
  {
    term: "Snow Socks",
    full: "Textile Snow Socks",
    he: "גרביוני שלג",
    desc: "גרסת טקסטיל של שרשראות השלג — כיסוי בד שמתלבש על הגלגל. קלים יותר להתקנה. מוכרים חוקית באותן מדינות שמאפשרות שרשראות.",
  },
  {
    term: "Vignette",
    full: "Road Vignette / Toll Sticker",
    he: "ויניט / מדבקת כביש",
    desc: "מדבקה או אישור דיגיטלי לשימוש בכביש מהיר. חובה במדינות כמו אוסטריה, שווייץ, צ׳כיה, הונגריה ועוד. ספק שמשכיר לך רכב בדרך כלל מספק אותה, אך לנסיעה חוצת גבול צריך לבדוק.",
  },
  {
    term: "Green Card",
    full: "International Insurance Certificate",
    he: "כרטיס ירוק",
    desc: "תעודת ביטוח בינלאומית המוכיחה שיש לרכב כיסוי ביטוחי בחו״ל. נדרשת בחלק מהמדינות שאינן באיחוד האירופי. ניתן לבקש מהספק לפני נסיעה חוצת גבול.",
  },
  {
    term: "After Hours",
    full: "After Hours / Out of Hours Return",
    he: "החזרה מחוץ לשעות פעילות",
    desc: "החזרת רכב כשהתחנה סגורה. בדרך כלל מפקידים את המפתח בתיבת מפתחות ייעודית. חשוב לבדוק מראש — הספק עשוי לשנות את שעות האיסוף/החזרה ולא להודיע.",
  },
  {
    term: "Liability",
    full: "Third Party Liability",
    he: "ביטוח צד שלישי",
    desc: "ביטוח חובה המכסה נזקים שגרמת לצד שלישי — רכב אחר, נכס, אדם. כלול בכל השכרה כחוק, אך רמת הכיסוי משתנה.",
  },
  {
    term: "PAI",
    full: "Personal Accident Insurance",
    he: "ביטוח תאונות אישיות",
    desc: "כיסוי לנזקי גוף לנהג ולנוסעים ברכב השכור. לרוב מוצע כתוספת תשלום. כדאי לבדוק אם ביטוח הנסיעות שלך כבר מכסה זאת.",
  },
  {
    term: "Road Fund",
    full: "Road Assistance / Roadside Assistance",
    he: "סיוע בדרכים",
    desc: "שירות חירום בדרכים — פנצ׳ר, תקלת מנוע, מצבר מת. בדרך כלל כלול בהשכרה, אבל כדאי לוודא ולשמור את מספר החירום של הספק בטלפון.",
  },
];

export default function LexiconSection() {
  const [openTerm, setOpenTerm] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 items-start">
      {terms.map(({ term, full, he, desc }) => {
        const isOpen = openTerm === term;
        return (
          <div
            key={term}
            className={`border rounded-lg overflow-hidden transition-all ${
              isOpen ? "border-navy/30 shadow-sm" : "border-gray-200"
            }`}
          >
            <button
              onClick={() => setOpenTerm(isOpen ? null : term)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-surface transition-colors text-right"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-extrabold text-navy text-sm flex-shrink-0">{term}</span>
                <span className="text-xs text-gold font-semibold truncate">{he}</span>
              </div>
              <ChevronDown
                size={14}
                className={`text-gray-400 flex-shrink-0 transition-transform duration-200 mr-2 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 pt-1 bg-surface border-t border-gray-100">
                <p className="text-xs text-gray-400 italic mb-2">{full}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
