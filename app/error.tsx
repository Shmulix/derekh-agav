"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md text-center py-24">
        <p className="text-5xl mb-4">🚧</p>
        <h1 className="text-2xl font-bold text-navy mb-3">משהו השתבש.</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          קרתה תקלה זמנית בטעינת העמוד. לחיצה אחת ובדרך כלל זה מסתדר.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center bg-gold text-navy font-bold px-6 py-3 hover:opacity-90 transition-opacity"
        >
          נסה שוב
        </button>
      </div>
    </main>
  );
}
