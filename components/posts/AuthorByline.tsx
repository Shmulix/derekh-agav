import Image from "next/image";
import { author } from "@/lib/site-config";

// Ligne auteur (avatar + nom + ancienneté) des cartes auteur des posts.
// Suit automatiquement le mode anonyme via lib/site-config.
export default function AuthorByline({ note }: { note?: string }) {
  return (
    <>
      <div className="flex items-center gap-3">
        <Image
          src={author.image}
          alt={author.name}
          width={44}
          height={44}
          className="rounded-full border-2 border-gold/40 flex-shrink-0"
        />
        <div>
          <p className="font-bold text-navy text-sm leading-tight">{author.name}</p>
          <p className="text-xs text-gold font-semibold mt-0.5">10+ שנות ניסיון בתחום</p>
        </div>
      </div>
      {note && <p className="text-xs text-gray-500 leading-relaxed mt-3">{note}</p>}
    </>
  );
}
