import Image from "next/image";
import { author } from "@/lib/site-config";

// Avatar de l'auteur : photo (normal) ou pastille d'initiales générique (anonyme).
// dark = posé sur fond sombre (hero).
export default function AuthorAvatar({
  size = 40,
  dark = false,
}: {
  size?: number;
  dark?: boolean;
}) {
  if (author.image) {
    return (
      <Image
        src={author.image}
        alt={author.name}
        width={size}
        height={size}
        className={`rounded-full object-cover flex-shrink-0 ${dark ? "border-2 border-white/30" : "border-2 border-gold/40"}`}
      />
    );
  }
  return (
    <span
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center flex-shrink-0 rounded-full font-bold ${dark ? "bg-white/10 text-gold" : "bg-navy text-gold"}`}
    >
      {author.initials}
    </span>
  );
}
