import { CURRENCIES } from "@/lib/currencies";

export async function GET() {
  const base = "https://cashsum.app";
  const now = new Date().toISOString();

  const staticUrls = [
    { loc: base, lastmod: now, changefreq: "monthly", priority: "1.0" },
    { loc: `${base}/about`, lastmod: now, changefreq: "yearly", priority: "0.3" },
    { loc: `${base}/faq`, lastmod: now, changefreq: "yearly", priority: "0.3" },
  ];

  const currencyUrls = Object.entries(CURRENCIES)
    .filter(([, config]) => !config.hidden)
    .map(([slug]) => ({
      loc: `${base}/${slug}`,
      lastmod: now,
      changefreq: "monthly",
      priority: "0.8",
    }));

  const allUrls = [...staticUrls, ...currencyUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
