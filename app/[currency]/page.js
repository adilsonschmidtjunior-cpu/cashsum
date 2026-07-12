import { notFound } from "next/navigation";
import { getCurrencySlugs, getCurrency } from "@/lib/currencies";
import CashSumApp from "@/components/CashSumApp";

export function generateStaticParams() {
  return getCurrencySlugs().map((currency) => ({ currency }));
}

export function generateMetadata({ params }) {
  const config = getCurrency(params.currency);
  if (!config) return {};

  return {
    title: `${config.pageTitle} – CashSum`,
    description: `${config.description} ${config.searchTerm}`,
    alternates: {
      canonical: `https://cashsum.app/${params.currency}`,
    },
    openGraph: {
      title: `${config.pageTitle} – CashSum`,
      description: config.description,
      url: `https://cashsum.app/${params.currency}`,
      siteName: "CashSum",
    },
  };
}

export default function CurrencyPage({ params }) {
  const config = getCurrency(params.currency);
  if (!config) notFound();

  return <CashSumApp slug={params.currency} />;
}
