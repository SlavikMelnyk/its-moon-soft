"use client";

import { usePathname, useRouter } from "next/navigation";
import { footerLinks } from "../constants";
import Link from "next/link";

const PENDING_SECTION_KEY = "pending-scroll-section";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }
    element.scrollIntoView({ behavior: "smooth" });
  };

  const handleFooterLinkClick = ({ event, sectionId }) => {
    event.preventDefault();

    if (pathname !== "/") {
      sessionStorage.setItem(PENDING_SECTION_KEY, sectionId);
      router.push("/");
      return;
    }

    handleScrollToSection(sectionId);
  };

  return (
    <footer className="border-t border-n-6">
      <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          href="/"
          className="text-n-1 font-semibold text-sm tracking-wide hover:text-color-1 transition-colors duration-200 cursor-pointer"
        >
          It'sMoonSoft
        </Link>

        <nav className="flex items-center gap-6">
          {footerLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(event) =>
                handleFooterLinkClick({ event, sectionId: item.sectionId })
              }
              className="font-code text-xs font-semibold uppercase text-n-1/40 hover:text-n-1 transition-colors duration-200 cursor-pointer"
            >
              {item.label}
            </Link>
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
};

export default Footer;
