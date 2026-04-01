import MoonLogo from "../moon-logo/MoonLogo";

const Logo = ({ onClick }) => (
  <a
    href="#hero"
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
      It's Moon Soft
    </span>
  </a>
);

export default Logo;
