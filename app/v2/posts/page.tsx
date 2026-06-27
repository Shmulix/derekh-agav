import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HeaderV2 from "@/components/v2/HeaderV2";
import FooterV2 from "@/components/v2/FooterV2";
import LaneDash from "@/components/v2/LaneDash";
import Reveal from "@/components/Reveal";
import { allPostsSorted, postHref } from "@/lib/posts";

const mono = "[font-family:var(--font-mono-v2)]";

export default function V2Posts() {
  const posts = allPostsSorted;

  return (
    <>
      <HeaderV2 />
      <main className="bg-white min-h-screen">

        {/* Page header */}
        <section className="bg-[#0b1730]">
          <div className="max-w-5xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20">
            <Reveal>
              <p className={`text-[11px] font-semibold tracking-[0.25em] text-gold uppercase ${mono}`}>Journal</p>
              <h1 className="text-white font-black tracking-tight text-4xl md:text-6xl mt-4 leading-[1.0]">מאמרים ומדריכים</h1>
              <LaneDash className="mt-7 max-w-[160px]" />
              <p className="text-slate-300 text-lg mt-7 max-w-xl leading-relaxed">
                טיפים מעשיים, השוואות ומידע שלא תקבל בדלפק. כתוב מניסיון אמיתי של יותר מעשר שנים.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Editorial index */}
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="border-t border-[#e7e9f0]">
            {posts.map((post, i) => {
              const soon = post.date === "בקרוב";
              const Row = (
                <div className="group flex flex-col sm:flex-row gap-5 sm:gap-7 py-8 border-b border-[#e7e9f0]">
                  {/* index */}
                  <span className={`hidden sm:block text-sm font-semibold text-gold pt-1 ${mono}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* thumb */}
                  <div className="relative w-full sm:w-44 h-40 sm:h-28 flex-shrink-0 overflow-hidden bg-[#f7f8fb] border border-[#e7e9f0]">
                    {post.image ? (
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center text-3xl opacity-15">📄</span>
                    )}
                  </div>
                  {/* content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] tracking-wide text-[#9aa3b5] font-medium">
                      {post.tag} · {post.date} · {post.readTime}
                    </p>
                    <h2 className={`text-xl md:text-2xl font-bold tracking-tight mt-2 leading-snug transition-colors ${soon ? "text-[#9aa3b5]" : "text-navy group-hover:text-gold"}`}>
                      {post.title}
                    </h2>
                    <p className="text-[#5b6377] text-sm leading-relaxed mt-2 line-clamp-2 max-w-2xl">{post.excerpt}</p>
                    {soon ? (
                      <span className={`inline-block mt-3 text-[11px] font-semibold tracking-[0.15em] text-[#9aa3b5] ${mono}`}>COMING SOON</span>
                    ) : (
                      <span className="inline-flex items-center gap-2 mt-3 text-gold text-sm font-semibold">
                        קרא <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                      </span>
                    )}
                  </div>
                </div>
              );
              return (
                <Reveal key={post.slug} delay={Math.min(i, 5) * 60}>
                  {soon ? <div className="cursor-default">{Row}</div> : <Link href={postHref(post)} className="block">{Row}</Link>}
                </Reveal>
              );
            })}
          </div>

          {/* Guide CTA */}
          <Reveal>
            <div className="mt-16 bg-[#0e1a30] p-10 md:p-12">
              <p className={`text-[11px] font-semibold tracking-[0.2em] text-gold uppercase ${mono}`}>The Field Manual</p>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mt-3">רוצה את הכל במקום אחד?</h2>
              <p className="text-slate-400 mt-3 max-w-lg leading-relaxed">
                המדריך המלא מכסה מסמכים, ביטוח, פיקדון, דלק, קנסות ועוד. 18 פרקים, בסדר הנכון.
              </p>
              <Link href="/guide" className="inline-flex items-center gap-2 bg-gold text-navy text-sm font-bold px-7 py-3.5 rounded-none hover:bg-[#b8941f] transition-colors mt-7">
                למדריך המלא <ArrowLeft size={16} />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <FooterV2 />
    </>
  );
}
