import { useState } from "react";

const GlowCard = ({
  accent,
  accentRgb,
  title,
  text,
  tag,
  icon,
  background = "rgba(255,255,255,0.03)",
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-default"
      style={{
        background,
        border: `1px solid ${
          hovered ? `rgba(${accentRgb},0.3)` : "rgba(255,255,255,0.07)"
        }`,
        transition: "border-color 0.35s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(270px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${accentRgb},0.10), transparent 70%)`,
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `linear-gradient(90deg, transparent, rgba(${accentRgb},0.65), transparent)`,
        }}
      />

      <div className="relative z-10 flex flex-col gap-4 p-8">
        {icon && (
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: hovered
                ? `rgba(${accentRgb},0.12)`
                : "rgba(255,255,255,0.05)",
              color: hovered ? accent : "rgba(255,255,255,0.4)",
              border: `1px solid ${
                hovered ? `rgba(${accentRgb},0.25)` : "rgba(255,255,255,0.08)"
              }`,
            }}
          >
            {icon}
          </div>
        )}

        <div
          className="self-start px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300"
          style={{
            background: hovered
              ? `rgba(${accentRgb},0.15)`
              : "rgba(255,255,255,0.05)",
            color: hovered ? accent : "rgba(255,255,255,0.35)",
            border: `1px solid ${
              hovered ? `rgba(${accentRgb},0.3)` : "rgba(255,255,255,0.08)"
            }`,
            transition: "all 0.35s ease",
          }}
        >
          {tag}
        </div>

        <h3
          className="font-semibold text-[1.05rem] leading-snug transition-colors duration-300"
          style={{ color: hovered ? "#ffffff" : "#cac6dd" }}
        >
          {title}
        </h3>

        <p
          className="text-sm leading-relaxed transition-colors duration-300"
          style={{
            color: hovered ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.3)",
          }}
        >
          {text}
        </p>
      </div>

      <div
        className="absolute bottom-5 right-5 w-[5px] h-[5px] rounded-full transition-all duration-300"
        style={{
          background: accent,
          opacity: hovered ? 1 : 0.22,
          boxShadow: hovered ? `0 0 8px 2px rgba(${accentRgb},0.55)` : "none",
        }}
      />
    </div>
  );
};

export default GlowCard;
