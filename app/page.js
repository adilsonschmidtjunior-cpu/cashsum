import { headers } from "next/headers";
import CashSumApp from "@/components/CashSumApp";
import { DEFAULT_CURRENCY } from "@/lib/currencies";

const COUNTRY_TO_CURRENCY = {
  US: "usd",
  BR: "real",
  GB: "libra",
  JP: "jpy",
  MX: "peso",
  IN: "rupee",
  CA: "cad",
  PH: "php",
  AR: "ars",
  NG: "ngn",
  CN: "yuan",
  ID: "rupiah",
  KR: "won",
  TR: "lira",
  VN: "dong",
  AT: "eur",
  BE: "eur",
  CY: "eur",
  EE: "eur",
  FI: "eur",
  FR: "eur",
  DE: "eur",
  GR: "eur",
  IE: "eur",
  IT: "eur",
  LV: "eur",
  LT: "eur",
  LU: "eur",
  MT: "eur",
  NL: "eur",
  PT: "eur",
  SK: "eur",
  SI: "eur",
  ES: "eur",
  HR: "eur",
  BG: "eur",
};

export const metadata = {
  title: "CashSum – Cash & Coin Counter for Any Currency",
  description:
    "Count your notes and coins in seconds, in any currency. Pick from 16 currencies and see your total instantly.",
  alternates: {
    canonical: "https://cashsum.app",
  },
  openGraph: {
    title: "CashSum – Cash & Coin Counter for Any Currency",
    description: "Count your notes and coins in seconds, in any currency.",
    url: "https://cashsum.app",
    siteName: "CashSum",
  },
};

export default async function Home() {
  const headersList = await headers();
  const country = headersList.get("x-vercel-ip-country");
  const slug = COUNTRY_TO_CURRENCY[country] || DEFAULT_CURRENCY;

  return <CashSumApp slug={slug} />;
}
