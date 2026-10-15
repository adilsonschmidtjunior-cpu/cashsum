export const metadata = {
  title: "Privacy Policy – CashSum",
  description:
    "How CashSum handles your data: amounts you enter never leave your browser. This page explains the analytics and advertising cookies used on the site.",
  alternates: {
    canonical: "https://cashsum.app/privacy",
  },
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

const CONTACT_EMAIL = "hello@cashsum.app";
const LAST_UPDATED = "15 October 2026";

const linkStyle = { color: COLORS.red, fontWeight: 600 };

const SECTIONS = [
  {
    h: "Who we are",
    body: (
      <>
        <p>
          CashSum (cashsum.app) is a free, independent web tool for counting banknotes and coins in
          several currencies. If you have any question about this policy or your data, write to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    h: "The amounts you enter",
    body: (
      <>
        <p>
          The calculator runs entirely in your browser. The number of notes and coins you type, and
          the totals shown, are never sent to our servers, never stored by us and disappear when you
          close or reload the page. You don&apos;t need an account, and we never ask for your name,
          email or any other personal detail to use the tool.
        </p>
      </>
    ),
  },
  {
    h: "Analytics",
    body: (
      <>
        <p>
          We use Google Analytics to understand how the site is used in aggregate — for example,
          which currency pages are visited most and from which countries. Google Analytics uses
          cookies and collects information such as pages viewed, approximate location, device and
          browser type. It does not receive the amounts you type into the calculator.
        </p>
        <p>
          You can learn how Google uses this information at{" "}
          <a href="https://policies.google.com/technologies/partner-sites" style={linkStyle}>
            policies.google.com/technologies/partner-sites
          </a>{" "}
          and opt out with the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" style={linkStyle}>
            Google Analytics opt-out browser add-on
          </a>
          .
        </p>
      </>
    ),
  },
  {
    h: "Advertising",
    body: (
      <>
        <p>
          CashSum is free because it shows ads served by Google AdSense. Third-party vendors,
          including Google, use cookies to serve ads based on your previous visits to this website
          or other websites. Google&apos;s use of advertising cookies enables it and its partners to
          serve ads to you based on your visits to this site and/or other sites on the internet.
        </p>
        <p>
          You can opt out of personalised advertising in{" "}
          <a href="https://adssettings.google.com" style={linkStyle}>
            Google Ads Settings
          </a>
          , or opt out of some third-party vendors&apos; use of cookies for personalised advertising
          at{" "}
          <a href="https://www.aboutads.info/choices" style={linkStyle}>
            aboutads.info/choices
          </a>
          . More details are available in{" "}
          <a href="https://policies.google.com/technologies/ads" style={linkStyle}>
            Google&apos;s advertising policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    h: "Your consent",
    body: (
      <>
        <p>
          Visitors from the European Economic Area, the United Kingdom and Switzerland see a consent
          message on their first visit. Analytics and personalised advertising cookies are only used
          according to the choice you make there. If you decline, you may still see ads, but they
          will not be personalised. You can change your choice at any time from the privacy link
          shown by the consent message, or by clearing this site&apos;s cookies in your browser.
        </p>
      </>
    ),
  },
  {
    h: "Other services",
    body: (
      <>
        <p>
          The site is hosted by Vercel, which, like any web host, processes technical data such as
          IP addresses to deliver pages and protect against abuse. Flag images are loaded from
          flagcdn.com and fonts from Google Fonts, so those services also receive the technical data
          needed to send them to your browser.
        </p>
      </>
    ),
  },
  {
    h: "Your rights",
    body: (
      <>
        <p>
          Depending on where you live, you may have the right to access, correct or delete personal
          data, or to object to its processing. Since CashSum itself does not store personal data,
          most requests are best directed to the services above through the links provided. For
          anything else, contact{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    h: "Children",
    body: (
      <>
        <p>CashSum is a general-audience tool and is not directed at children under 13.</p>
      </>
    ),
  },
  {
    h: "Changes to this policy",
    body: (
      <>
        <p>
          If this policy changes, the updated version will be published on this page with a new
          date below.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, color: COLORS.ink }}>
      <style>{`.pp-body p{margin:0 0 10px}.pp-body p:last-child{margin-bottom:0}`}</style>
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
            Privacy Policy
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: "24px auto 0", padding: "0 24px 60px" }}>
        {SECTIONS.map((s, i) => (
          <div
            key={i}
            style={{
              background: COLORS.card,
              borderRadius: 20,
              padding: 20,
              border: `1.5px solid ${COLORS.cardBorder}`,
              marginBottom: 14,
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: 14,
              lineHeight: 1.7,
              color: COLORS.sub,
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
              {s.h}
            </h2>
            <div className="pp-body">{s.body}</div>
          </div>
        ))}

        <p
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: 12,
            color: COLORS.sub,
            marginTop: 20,
          }}
        >
          Last updated: {LAST_UPDATED}
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: 8,
            fontFamily: "Inter, system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: COLORS.red,
            textDecoration: "none",
          }}
        >
          ← Back to CashSum
        </a>
      </div>
    </div>
  );
}
