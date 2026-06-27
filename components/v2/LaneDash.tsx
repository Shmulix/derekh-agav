// Signature : filet doré en pointillés, type marquage routier (דרך = route).
export default function LaneDash({
  className = "",
  color = "#c9a227",
  thickness = 2,
}: {
  className?: string;
  color?: string;
  thickness?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`w-full ${className}`}
      style={{
        height: thickness,
        background: `repeating-linear-gradient(to left, ${color} 0 14px, transparent 14px 28px)`,
      }}
    />
  );
}
