const baseUrl = "https://itsmoonsoft.com";

const routes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.85 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/teams", changeFrequency: "monthly", priority: 0.75 },
];

/** @returns {import("next").MetadataRoute.Sitemap} */
export default function sitemap() {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path || "/"}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
