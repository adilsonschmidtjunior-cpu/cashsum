export const metadata = {
  title: "About – CashSum",
  description:
    "CashSum is a free, no-signup cash counter for notes and coins in multiple currencies.",
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

export default function AboutPage() {
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
            About CashSum
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: "24px auto 0", padding: "0 24px 60px" }}>
        <div
          style={{
            background: COLORS.card,
            borderRadius: 20,
            padding: 24,
            border: `1.5px solid ${COLORS.cardBorder}`,
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: 15,
            lineHeight: 1.7,
            color: COLORS.sub,
          }}
        >
          <p>
            CashSum started from a simple need: counting physical cash quickly,
            without hassle. It's built for anyone who works with a till, handles
            currency exchange, or just wants to know how much is sitting in their
            wallet or drawer.
          </p>
          <p>
            The calculator is available in multiple currencies, and several of
            them come with their own local-language version too. There's no
            account to create and nothing to install — you open the page and it
            works.
          </p>
          <p>
            Everything runs directly in your browser. The amounts you type in
            are never sent to or stored on our servers, so there's nothing to
            worry about in terms of privacy.
          </p>
          <p style={{ marginBottom: 0 }}>
            CashSum is a small, independent project. If you spot something
            wrong, or there's a currency you'd like to see added, feedback is
            always welcome.
          </p>
        </div>

        <a
          href="/eur"
          style={{
            display: "inline-block",
            marginTop: 20,
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
