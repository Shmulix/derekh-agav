import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/10">
          <div>
            <div className="mb-2">
              <div className="inline-block bg-white rounded-md px-3 py-1.5">
                <img src="/logo.svg" alt="דרך אגב" width={100} height={32} />
              </div>
            </div>
            <p className="text-gray-400 text-sm">כי מי שיודע — לא מחכה לדלפק</p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {[
              { href: "/", label: "דף הבית" },
              { href: "/guide", label: "המדריך המלא" },
              { href: "/posts", label: "מאמרים" },
              { href: "/about", label: "אודות" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Disclaimer */}
        <p className="text-gray-500 text-xs leading-relaxed mb-6 max-w-2xl">
          האתר מכיל קישורי שותפות. בעת הזמנה דרך הקישורים, האתר עשוי לקבל עמלה — ללא עלות נוספת עבורך.
          המידע באתר מובא לצורכי מידע כללי בלבד ואינו מהווה ייעוץ משפטי או מקצועי.
        </p>

        {/* Copyright */}
        <p className="text-gray-600 text-xs text-center">
          © {new Date().getFullYear()} דרך אגב — כל הזכויות שמורות
        </p>
      </div>
    </footer>
  );
}
