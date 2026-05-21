import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allPostsSorted, postHref } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מאמרים ומדריכים | דרך אגב",
  description:
    "מאמרים מעשיים על השכרת רכב בחו״ל. ביטוח, מסמכים, יעדים, חיסכון וטיפים שלא תקבל בדלפק.",
  alternates: {
    canonical: "https://derekh-agav.vercel.app/posts",
  },
  openGraph: {
    title: "מאמרים ומדריכים | דרך אגב",
    description: "כל הכתבות על השכרת רכב בחו״ל לישראלים.",
    url: "https://derekh-agav.vercel.app/posts",
    type: "website",
  },
};

const allPosts = allPostsSorted;

export default function PostsArchive() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Page header */}
        <section className="bg-navy py-14">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-gold text-sm font-semibold mb-2">דרך אגב</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">מאמרים ומדריכים</h1>
            <p className="text-slate-300 text-base">
              טיפים מעשיים, השוואות ומידע שלא תקבל בדלפק. כתוב מניסיון אמיתי של יותר מ-10 שנים בתחום.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col"
              >
                {post.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded ${post.tagColor}`}>
                      {post.tag}
                    </span>
                  </div>
                ) : (
                  <div className="h-48 bg-surface flex items-center justify-center">
                    <span className="text-4xl opacity-20">📄</span>
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col">
                  {!post.image && (
                    <span className={`inline-block text-xs font-bold px-2 py-1 rounded mb-3 w-fit ${post.tagColor}`}>
                      {post.tag}
                    </span>
                  )}
                  <h2 className="text-navy font-bold text-base leading-snug mb-2">{post.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{post.date} · {post.readTime}</span>
                    {post.date === "בקרוב" ? (
                      <span className="text-gray-400 text-xs font-semibold">בקרוב</span>
                    ) : (
                      <Link href={postHref(post)} className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors">
                        קרא ←
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Guide CTA */}
          <div className="mt-14 bg-navy rounded-xl p-7 text-center">
            <p className="text-white font-bold text-lg mb-2">רוצה את כל המידע במקום אחד?</p>
            <p className="text-slate-300 text-sm mb-4">המדריך המלא מכסה מסמכים, ביטוח, פיקדון, דלק, קנסות ועוד. הכל בדף אחד.</p>
            <Link href="/guide" className="btn-gold text-sm px-8 py-2.5">
              למדריך המלא ←
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
