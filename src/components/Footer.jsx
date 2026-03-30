import { footerLinks } from "../constants";

const Footer = () => (
  <footer className="border-t border-n-6">
    <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
      <a
        href="#hero"
        className="text-n-1 font-semibold text-sm tracking-wide hover:text-color-1 transition-colors duration-200"
      >
        It'sMoonSoft
      </a>

      <nav className="flex items-center gap-6">
        {footerLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="font-code text-xs font-semibold uppercase text-n-1/40 hover:text-n-1 transition-colors duration-200"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </div>

    <div className="border-t border-n-6">
      <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-n-5 text-xs">
          © {new Date().getFullYear()} It'sMoonSoft. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
