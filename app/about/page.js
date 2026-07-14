import { getAboutContent } from "@/lib/aboutFaqContent";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const content = getAboutContent(params?.lang);
  return {
    title: `${content.title} – CashSum`,
    description: content.paragraphs[0],
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

export default async function AboutPage({ searchParams }) {
  const params = await searchParams;
  const content = getAboutContent(params?.lang);

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
          {content.paragraphs.map((p, i) => (
            <p
              key={i}
              style={i === content.paragraphs.length - 1 ? { marginBottom: 0 } : undefined}
            >
              {p}
            </p>
          ))}
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
          {content.backToCalculator}
        </a>
      </div>
    </div>
  );
}
