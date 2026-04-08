import "../src/index.css";

export const metadata = {
  title: "It'sMoonSoft — Digital Studio | Design, Build & Scale",
  description:
    "It'sMoonSoft is a digital studio that designs, builds, and scales high-performance digital products for ambitious founders and growing teams. UI/UX, web, mobile, and brand — from first wireframe to final deployment.",
  keywords: [
    "digital studio",
    "web development",
    "UI/UX design",
    "mobile development",
    "brand identity",
    "product strategy",
    "SaaS",
    "FinTech",
    "eCommerce",
    "React",
    "Next.js",
  ],
  authors: [{ name: "It'sMoonSoft" }],
  creator: "It'sMoonSoft",
  metadataBase: new URL("https://itsmoonsoft.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "It'sMoonSoft — Digital Studio | Design, Build & Scale",
    description:
      "We design, build, and scale digital products that drive real business results. Partner with us from the first wireframe to the final deployment.",
    siteName: "It'sMoonSoft",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "It'sMoonSoft — Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "It'sMoonSoft — Digital Studio | Design, Build & Scale",
    description:
      "We design, build, and scale digital products that drive real business results. Partner with us from the first wireframe to the final deployment.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
