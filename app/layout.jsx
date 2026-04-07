import "../src/index.css";

export const metadata = {
  title: "Its Moon Soft",
  description: "Moon Soft website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
