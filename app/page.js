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

  return {
    title: `${config.pageTitle} – CashSum`,
    description: `${config.description} ${config.searchTerm}`,
    alternates: {
      canonical: `https://cashsum.app/${currency}`,
    },
    openGraph: {
      title: `${config.pageTitle} – CashSum`,
      description: config.description,
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
