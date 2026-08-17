import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { CURRENCIES } from "@/lib/currencies";
import AdSlot from "@/components/AdSlot";

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

const DISPLAY_ORDER = [
  "eur", "usd", "won", "cad", "peso", "real", "rupiah", "jpy",
  "libra", "lira", "yuan", "rupee", "ngn", "php", "ars", "dong",
];

const COLORS = {
  bg: "#FFFDB4",
  card: "#FFFFFF",
  cardBorder: "#E3D9A0",
  ink: "#23003F",
  sub: "#5A3E78",
  subDim: "#8B7AA0",
  red: "#F94500",
  indigo: "#23003F",
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
  const target = country ? COUNTRY_TO_CURRENCY[country] : null;

  // Redirect real (HTTP), não render disfarçado — isso é o que evita a
  // duplicação de conteúdo entre "/" e "/eur" que confundiu o Google.
  if (target) {
    redirect(`/${target}`);
  }

  const visibleCurrencies = Object.entries(CURRENCIES)
    .filter(([, m]) => !m.hidden)
    .sort((a, b) => DISPLAY_ORDER.indexOf(a[0]) - DISPLAY_ORDER.indexOf(b[0]));

  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, color: COLORS.ink }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Header */}
      <div
        style={{
          background: COLORS.indigo,
          padding: "40px 24px 44px",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: 44,
              fontWeight: 800,
              color: COLORS.bg,
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            CashSum
          </h1>
          <p
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: COLORS.red,
              marginTop: 10,
              maxWidth: 480,
            }}
          >
            Count your notes and coins in seconds
          </p>
          <p
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: 14,
              color: "#DCEAE0",
              marginTop: 6,
              maxWidth: 480,
            }}
          >
            Pick a currency below and see your total instantly.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "28px auto 0", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: 12,
            marginBottom: 24,
          }}
        >
          {visibleCurrencies.map(([k, m]) => (
            <Link
              key={k}
              href={`/${k}`}
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 14,
                padding: "14px 16px",
                borderRadius: 16,
                border: `1.5px solid ${COLORS.cardBorder}`,
                background: COLORS.card,
                color: COLORS.ink,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "0 4px 12px rgba(35,0,63,0.06)",
              }}
            >
              <img
                src={`https://flagcdn.com/24x18/${m.flagCode}.png`}
                alt=""
                width="24"
                height="18"
                style={{ borderRadius: 3, flexShrink: 0 }}
              />
              {m.nome}
            </Link>
          ))}
        </div>

        <div style={{ marginBottom: 20 }}>
          <AdSlot slot="3789125205" format="horizontal" style={{ minHeight: 90 }} />
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: 12,
          color: COLORS.subDim,
          padding: "32px 0 40px",
        }}
      >
        CashSum © {new Date().getFullYear()}
        <div style={{ marginTop: 8 }}>
          <Link href="/about" style={{ color: COLORS.red, fontWeight: 700, textDecoration: "underline" }}>
            About
          </Link>
          {" · "}
          <Link href="/faq" style={{ color: COLORS.red, fontWeight: 700, textDecoration: "underline" }}>
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
