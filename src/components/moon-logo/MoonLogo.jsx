import { useEffect, useRef, useState } from "react";
import moonImg from "../../assets/svg/full-moon.jpg";

const SIZE = 36;

export default function MoonLogo() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    let active = true;

    const tick = () => {
      if (!active) return;
      const ease = 0.07;
      currentRef.current.x +=
        (targetRef.current.x - currentRef.current.x) * ease;
      currentRef.current.y +=
        (targetRef.current.y - currentRef.current.y) * ease;

      const dx = Math.abs(currentRef.current.x - targetRef.current.x);
      const dy = Math.abs(currentRef.current.y - targetRef.current.y);
      if (dx > 0.002 || dy > 0.002) {
        setPos({ x: currentRef.current.x, y: currentRef.current.y });
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const handleMouseMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      targetRef.current.x = Math.max(-1, Math.min(1, nx));
      targetRef.current.y = Math.max(-1, Math.min(1, ny));
    };

    const handleMouseLeave = () => {
      targetRef.current.x = 0;
      targetRef.current.y = 0.4;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      active = false;
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Bright spot follows the cursor
  const dist = Math.sqrt(pos.x * pos.x + pos.y * pos.y);
  const brightX = 50 + pos.x * 45; // знак змінено
  const brightY = 50 + pos.y * 45; // знак змінено

  // Crescent gets thinner as cursor moves further from center
  const spread = 25 - dist * 12;

  return (
    <div
      ref={containerRef}
      className="relative cursor-pointer"
      style={{ width: SIZE, height: SIZE, flexShrink: 0, marginTop: 10 }}
    >
      {/* Moon container — clips everything inside to circle */}
      <div
        style={{
          width: SIZE,
          height: SIZE,
          borderRadius: "50%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Moon image */}
        <img
          src={moonImg}
          alt="Moon logo"
          width={SIZE}
          height={SIZE}
          style={{
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Dark overlay with bright cutout */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${brightX}% ${brightY}%, transparent ${spread}%, rgba(0,0,0,0.4) ${
              spread + 12
            }%, rgba(0,0,0,0.85) ${spread + 25}%, #000 ${spread + 40}%)`,
          }}
        />
      </div>
    </div>
  );
}
