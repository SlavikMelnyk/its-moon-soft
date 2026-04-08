import "../src/index.css";

const siteUrl = "https://itsmoonsoft.com";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "It'sMoonSoft",
  url: siteUrl,
  description:
    "Digital studio that designs, builds, and scales high-performance digital products for founders and growing teams.",
  logo: `${siteUrl}/apple-touch-icon.png`,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "It'sMoonSoft",
  url: siteUrl,
  description:
    "Design, build, and scale digital products — UI/UX, web, mobile, and brand.",
  publisher: {
    "@type": "Organization",
    name: "It'sMoonSoft",
    url: siteUrl,
  },
};

export const metadata = {
  title: {
    default: "It'sMoonSoft — Digital Studio | Design, Build & Scale",
    template: "%s | It'sMoonSoft",
  },
  description:
    "It'sMoonSoft is a digital studio that designs, builds, and scales high-performance digital products for ambitious founders and growing teams. UI/UX, web, mobile, and brand — from first wireframe to final deployment.",
  keywords: [
    "digital studio",
    "web development",
    "UI/UX design",
    "mobile development",
    "mobile apps",
    "brand identity",
    "product strategy",
    "SaaS",
    "FinTech",
    "eCommerce",
    "React",
    "Next.js",
    "It's Moon Soft",
  ],
  authors: [{ name: "It'sMoonSoft" }],
  creator: "It'sMoonSoft",
  publisher: "It'sMoonSoft",
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
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
