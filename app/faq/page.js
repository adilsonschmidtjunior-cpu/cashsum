import { getFaqContent } from "@/lib/aboutFaqContent";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const content = getFaqContent(params?.lang);
  return {
    title: `${content.title} – CashSum`,
    description: content.items[0]?.a || "",
  };
}

const COLORS = {
  bg: "#FFFDB4",
  card: "#FFFFFF",
  cardBorder: "#E3D9A0",
  ink: "#23003F",
  sub: "#5A3E78",
  red: "#F94500",
  indigo: "#23003F",
};

export default async function FaqPage({ searchParams }) {
  const params = await searchParams;
  const content = getFaqContent(params?.lang);

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
            {content.title}
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: "24px auto 0", padding: "0 24px 60px" }}>
        {content.items.map((item, i) => (
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
          {content.backToCalculator}
        </a>
      </div>
    </div>
  );
}
