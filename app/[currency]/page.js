import { notFound } from "next/navigation";
import { getCurrencySlugs, getCurrency } from "@/lib/currencies";
import CashSumApp from "@/components/CashSumApp";

export function generateStaticParams() {
  return getCurrencySlugs().map((currency) => ({ currency }));
}

export async function generateMetadata({ params }) {
  const { currency } = await params;
  const config = getCurrency(currency);
  if (!config) return {};

  const metaDescription = config.metaDescription || config.description;

  return {
    title: `${config.pageTitle} – CashSum`,
    description: metaDescription,
    alternates: {
      canonical: `https://cashsum.app/${currency}`,
    },
    robots: config.hidden
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title: `${config.pageTitle} – CashSum`,
      description: metaDescription,
      url: `https://cashsum.app/${currency}`,
      siteName: "CashSum",
    },
  };
}

export default async function CurrencyPage({ params }) {
  const { currency } = await params;
  const config = getCurrency(currency);
  if (!config) notFound();

  return <CashSumApp slug={currency} />;
}
