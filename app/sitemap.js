import { getCurrencySlugs } from "@/lib/currencies";

export default function sitemap() {
  const base = "https://cashsum.app";
  const now = new Date();

  const currencyUrls = getCurrencySlugs().map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...currencyUrls,
  ];
}
