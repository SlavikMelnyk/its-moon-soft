import MoonLogo from "../moon-logo/MoonLogo";
import Link from "next/link";

const Logo = ({ onClick }) => (
  <Link
    href="/"
    onClick={onClick}
    className="flex items-center gap-3 group shrink-0"
  >
    <div className="transition-transform duration-500 ease-out group-hover:scale-105 self-center">
      <MoonLogo />
    </div>

    <span
      className="font-semibold text-sm tracking-wide leading-none"
      style={{
        background:
          "linear-gradient(90deg, #ac6aff 0%, #858dff 35%, #ffc876 65%, #ff98e2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      It'sMoonSoft
    </span>
  </Link>
);

export default Logo;
