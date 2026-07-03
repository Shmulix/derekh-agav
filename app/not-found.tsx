import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "העמוד לא נמצא",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md text-center py-24">
        <p className="text-7xl font-black text-navy mb-2" dir="ltr">404</p>
        <div className="w-10 h-1 bg-gold mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-navy mb-3">
          העמוד הזה לא קיים.
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          יכול להיות שהקישור השתנה, או שפשוט הגעת לכתובת שלא הייתה קיימת מעולם.
          מה שבטוח: המידע שחיפשת נמצא במדריך.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/guide"
            className="inline-flex items-center justify-center bg-gold text-navy font-bold px-6 py-3 hover:opacity-90 transition-opacity"
          >
            למדריך המלא ←
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-navy text-navy font-semibold px-6 py-3 hover:bg-navy hover:text-white transition-colors"
          >
            לדף הבית
          </Link>
        </div>
      </div>
    </main>
  );
}
