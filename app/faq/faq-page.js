export const metadata = {
  title: "FAQ – CashSum",
  description:
    "Frequently asked questions about CashSum, the free online cash and coin counter.",
};

const COLORS = {
  bg: "#FFFDB4",
  card: "#FFFFFF",
  cardBorder: "#E3D9A0",
  ink: "#23003F",
  sub: "#5A3E78",
  red: "#F94500",
  indigo: "#23003F",
};

const FAQS = [
  {
    q: "Does CashSum store my data?",
    a: "No. The amounts you enter stay only in your browser — nothing is sent to or saved on our servers.",
  },
  {
    q: "Does it work without an internet connection?",
    a: "Once the page has fully loaded, yes — the calculator itself runs locally in your browser.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. CashSum is completely free to use and doesn't require any sign-up.",
  },
  {
    q: "Which currencies are supported?",
    a: "CashSum currently supports more than a dozen currencies, including the Euro, US Dollar, British Pound, Brazilian Real, Japanese Yen, and several others — with local-language versions available for a number of them.",
  },
  {
    q: "Is the information about each currency accurate?",
    a: "We do our best to keep denominations and historical facts up to date and correct, but if a specific detail matters for your situation, it's always worth double-checking against an official source.",
  },
  {
    q: "Can I use CashSum on my phone?",
    a: "Yes, the calculator is designed to work well on both desktop and mobile browsers.",
  },
];

export default function FaqPage() {
  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, color: COLORS.ink }}>
      <div style={{ background: COLORS.indigo, padding: "26px 24px 30px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: 32,
              fontWeight: 800,
              color: COLORS.bg,
              margin: 0,
            }}
          >
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: "24px auto 0", padding: "0 24px 60px" }}>
        {FAQS.map((item, i) => (
          <div
            key={i}
            style={{
              background: COLORS.card,
              borderRadius: 20,
              padding: 20,
              border: `1.5px solid ${COLORS.cardBorder}`,
              marginBottom: 14,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            <h2
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: 16,
                fontWeight: 700,
                margin: "0 0 8px",
                color: COLORS.indigo,
              }}
            >
              {item.q}
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: COLORS.sub, margin: 0 }}>
              {item.a}
            </p>
          </div>
        ))}

        <a
          href="/eur"
          style={{
            display: "inline-block",
            marginTop: 10,
            fontFamily: "Inter, system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: COLORS.red,
            textDecoration: "none",
          }}
        >
          ← Back to the calculator
        </a>
      </div>
    </div>
  );
}
