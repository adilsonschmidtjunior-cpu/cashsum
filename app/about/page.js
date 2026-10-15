import { getAboutContent } from "@/lib/aboutFaqContent";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const content = getAboutContent(params?.lang);
  return {
    title: `${content.title} – CashSum`,
    alternates: {
      canonical: "https://cashsum.app/about",
    },
    description: content.paragraphs[0],
  };
}

const CONTACT_EMAIL = "hello@cashsum.app";

const CONTACT_LABELS = {
  en: "Contact",
  "pt-BR": "Contato",
  "pt-PT": "Contacto",
  de: "Kontakt",
  fr: "Contact",
  es: "Contacto",
  it: "Contatti",
  nl: "Contact",
};

const PRIVACY_LABELS = {
  en: "Privacy Policy",
  "pt-BR": "Política de Privacidade",
  "pt-PT": "Política de Privacidade",
  de: "Datenschutzerklärung",
  fr: "Politique de confidentialité",
  es: "Política de privacidad",
  it: "Informativa sulla privacy",
  nl: "Privacybeleid",
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

export default async function AboutPage({ searchParams }) {
  const params = await searchParams;
  const content = getAboutContent(params?.lang);
  const backHref = params?.from ? `/${params.from}` : "/eur";

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
          <p style={{ marginTop: 16, marginBottom: 0 }}>
            <strong style={{ color: COLORS.ink }}>
              {CONTACT_LABELS[params?.lang] || "Contact"}:
            </strong>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: COLORS.red, fontWeight: 600 }}>
              {CONTACT_EMAIL}
            </a>
          </p>
          <p style={{ marginTop: 6, marginBottom: 0 }}>
            <a href="/privacy" style={{ color: COLORS.red, fontWeight: 600 }}>
              {PRIVACY_LABELS[params?.lang] || "Privacy Policy"}
            </a>
          </p>
        </div>

        <a
          href={backHref}
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
