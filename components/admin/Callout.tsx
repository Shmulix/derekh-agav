// (server) Boites info / tip / danger, meme palette que le site public.
import { AlertTriangle, Info, Lightbulb } from "lucide-react";
import { renderInline } from "./inline";

const VARIANTS = {
  info: {
    container: "border-navy/30 bg-[#f0f4ff]",
    icon: Info,
    iconColor: "text-navy",
  },
  tip: {
    container: "border-gold bg-[#fffbea]",
    icon: Lightbulb,
    iconColor: "text-[#8a6d0f]",
  },
  danger: {
    container: "border-[#e53e3e] bg-[#fff3f3]",
    icon: AlertTriangle,
    iconColor: "text-[#c53030]",
  },
} as const;

export default function Callout({
  variant,
  title,
  text,
}: {
  variant: keyof typeof VARIANTS;
  title?: string;
  text: string;
}) {
  const config = VARIANTS[variant];
  const Icon = config.icon;
  return (
    <div className={`flex gap-3 rounded-xl border-r-4 p-4 ${config.container}`}>
      <Icon aria-hidden className={`mt-0.5 h-5 w-5 shrink-0 ${config.iconColor}`} />
      <div className="text-sm leading-relaxed text-text-main">
        {title ? <p className="mb-1 font-bold">{title}</p> : null}
        <p>{renderInline(text)}</p>
      </div>
    </div>
  );
}
