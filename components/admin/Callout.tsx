// (server) Boites info / tip / danger : exactement le meme langage que les
// Callout du guide public (bg-*-50, filet droit 4px, coins carres).
import { AlertTriangle, Info, Lightbulb } from "lucide-react";
import { renderInline } from "./inline";

const VARIANTS = {
  info: {
    container: "border-navy bg-blue-50",
    icon: Info,
    iconColor: "text-navy",
  },
  tip: {
    container: "border-gold bg-yellow-50",
    icon: Lightbulb,
    iconColor: "text-yellow-600",
  },
  danger: {
    container: "border-red-400 bg-red-50",
    icon: AlertTriangle,
    iconColor: "text-red-500",
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
    <div className={`flex gap-3 rounded-none border-r-4 p-4 ${config.container}`}>
      <Icon size={16} aria-hidden className={`mt-0.5 shrink-0 ${config.iconColor}`} />
      <div className="text-sm leading-relaxed text-gray-700">
        {title ? <p className="mb-1 font-bold text-text-main">{title}</p> : null}
        <p>{renderInline(text)}</p>
      </div>
    </div>
  );
}
