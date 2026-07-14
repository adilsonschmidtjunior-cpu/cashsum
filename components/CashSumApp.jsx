"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const EURO_LANGS = [
  { slug: "eur", label: "English", abbr: "EN" },
  { slug: "euro-de", label: "Deutsch", abbr: "DE" },
  { slug: "euro-fr", label: "Français", abbr: "FR" },
  { slug: "euro-es", label: "Español", abbr: "ES" },
  { slug: "euro-it", label: "Italiano", abbr: "IT" },
  { slug: "euro-nl", label: "Nederlands", abbr: "NL" },
  { slug: "euro-pt", label: "Português", abbr: "PT" },
  { slug: "euro-el", label: "Ελληνικά", abbr: "EL" },
  { slug: "euro-fi", label: "Suomi", abbr: "FI" },
  { slug: "euro-sk", label: "Slovenčina", abbr: "SK" },
  { slug: "euro-sl", label: "Slovenščina", abbr: "SL" },
  { slug: "euro-hr", label: "Hrvatski", abbr: "HR" },
  { slug: "euro-et", label: "Eesti", abbr: "ET" },
  { slug: "euro-lv", label: "Latviešu", abbr: "LV" },
  { slug: "euro-lt", label: "Lietuvių", abbr: "LT" },
  { slug: "euro-bg", label: "Български", abbr: "BG" },
];
import { CURRENCIES } from "@/lib/currencies";

const COLORS = {
  bg: "#FFFDB4",
  card: "#FFFFFF",
  cardBorder: "#E3D9A0",
  ink: "#23003F",
  sub: "#5A3E78",
  subDim: "#8B7AA0",
  red: "#F94500",
  indigo: "#23003F",
  purple: "#BCACCE",
};

function formatMoeda(v, simbolo) {
  return `${simbolo} ${v.toLocaleString("pt-PT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function AdSlot({ label, height }) {
  return (
    <div
      style={{
        width: "100%",
        height,
        background:
          "repeating-linear-gradient(45deg, #F1EA9A, #F1EA9A 10px, #E3D9A0 10px, #E3D9A0 20px)",
        border: `1.5px dashed ${COLORS.subDim}`,
        borderRadius: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: 12,
        fontWeight: 700,
        color: COLORS.sub,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </div>
  );
}

function LinhaDenominacao({ valor, simbolo, quantidade, onChange }) {
  const subtotal = valor * quantidade;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 0",
        borderBottom: `1px solid ${COLORS.cardBorder}`,
      }}
    >
      <div
        style={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 700,
          fontSize: 13,
          color: COLORS.ink,
          width: 64,
          flexShrink: 0,
        }}
      >
        {formatMoeda(valor, simbolo)}
      </div>
      <input
        type="number"
        min={0}
        inputMode="numeric"
        value={quantidade === 0 ? "" : quantidade}
        placeholder="0"
        onChange={(e) => onChange(parseInt(e.target.value) || 0)}
        style={{
          width: 52,
          flexShrink: 0,
          padding: "8px 6px",
          fontSize: 14,
          borderRadius: 10,
          border: `1.5px solid ${COLORS.cardBorder}`,
          background: "#FFFFFF",
          color: COLORS.ink,
          fontFamily: "Inter, system-ui, sans-serif",
          textAlign: "center",
          outline: "none",
        }}
      />
      <div
        style={{
          marginLeft: "auto",
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: 13,
          fontWeight: 700,
          color: subtotal > 0 ? COLORS.red : COLORS.subDim,
          textAlign: "right",
          whiteSpace: "nowrap",
        }}
      >
        {formatMoeda(subtotal, simbolo)}
      </div>
    </div>
  );
}

export default function CashSumApp({ slug }) {
  const router = useRouter();
  const config = CURRENCIES[slug];
  const [qtdNotas, setQtdNotas] = useState({});
  const [qtdMoedas, setQtdMoedas] = useState({});
  const [showAllCurrencies, setShowAllCurrencies] = useState(false);

  const totalNotas = useMemo(
    () => config.notas.reduce((acc, v) => acc + v * (qtdNotas[v] || 0), 0),
    [config, qtdNotas]
  );
  const totalMoedas = useMemo(
    () => config.moedas.reduce((acc, v) => acc + v * (qtdMoedas[v] || 0), 0),
    [config, qtdMoedas]
  );
  const total = totalNotas + totalMoedas;

  function limpar() {
    setQtdNotas({});
    setQtdMoedas({});
  }

  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, color: COLORS.ink }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');
        .cs-layout { display: flex; justify-content: center; gap: 20px; align-items: flex-start; }
        .cs-rail { display: none; }
        .cs-cols { display: block; }
        @media (min-width: 1100px) {
          .cs-rail { display: block; width: 160px; position: sticky; top: 24px; }
        }
        @media (min-width: 640px) {
          .cs-cols { display: flex; gap: 20px; }
          .cs-cols > div { flex: 1; }
        }
      `}</style>

      {/* Header */}
      <div
        style={{
          background: COLORS.indigo,
          padding: "26px 24px 30px",
          position: "relative",
        }}
      >
        {config.simbolo === "€" && (
          <select
            value={slug}
            onChange={(e) => router.push(`/${e.target.value}`)}
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              padding: "6px 10px",
              borderRadius: 999,
              border: "none",
              background: COLORS.red,
              color: "#FFFFFF",
              cursor: "pointer",
            }}
          >
            {EURO_LANGS.map((l) => (
              <option key={l.slug} value={l.slug}>
                🌐 {l.abbr}
              </option>
            ))}
          </select>
        )}
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: 40,
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
              fontSize: 14,
              fontWeight: 600,
              color: COLORS.red,
              marginTop: 6,
              maxWidth: 440,
            }}
          >
            {config.tagline}
          </p>
          <p
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: 14,
              color: "#DCEAE0",
              marginTop: 4,
              maxWidth: 440,
            }}
          >
            {config.description}
          </p>
        </div>
      </div>

      <div className="cs-layout" style={{ maxWidth: 1000, margin: "24px auto 0", padding: "0 24px" }}>
        <div style={{ maxWidth: 640, width: "100%", minWidth: 0, flexShrink: 1 }}>
          {/* Currency selector */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {Object.entries(CURRENCIES)
              .filter(([k, m]) => !m.hidden)
              .slice(0, showAllCurrencies ? undefined : 8)
              .map(([k, m]) => {
                const active = k === slug;
                return (
                  <React.Fragment key={k}>
                    <Link
                      href={`/${k}`}
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: 14,
                        padding: "10px 16px",
                        borderRadius: 999,
                        border: active ? "none" : `1.5px solid ${COLORS.cardBorder}`,
                        background: active ? COLORS.purple : COLORS.card,
                        color: COLORS.ink,
                        textDecoration: "none",
                        boxShadow: active ? "0 6px 16px rgba(188,172,206,0.6)" : "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <img
                        src={`https://flagcdn.com/24x18/${m.flagCode}.png`}
                        alt=""
                        width="20"
                        height="15"
                        style={{ borderRadius: 2, flexShrink: 0 }}
                      />
                      {m.nome}
                    </Link>
                  </React.Fragment>
                );
              })}
            {Object.entries(CURRENCIES).filter(([k, m]) => !m.hidden).length > 8 && (
              <button
                onClick={() => setShowAllCurrencies((v) => !v)}
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "10px 16px",
                  borderRadius: 999,
                  border: `1.5px dashed ${COLORS.subDim}`,
                  background: "transparent",
                  color: COLORS.sub,
                  cursor: "pointer",
                }}
              >
                {showAllCurrencies ? "− Show less" : "+ More currencies"}
              </button>
            )}
          </div>

          {/* Total */}
          <div
            style={{
              background: COLORS.card,
              borderRadius: 20,
              padding: "26px 28px",
              marginBottom: 20,
              border: `1.5px solid ${COLORS.cardBorder}`,
              boxShadow: "0 10px 30px rgba(35,0,63,0.10)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: 13,
                  color: COLORS.sub,
                  margin: "0 0 6px",
                  fontWeight: 700,
                }}
              >
                {config.ui.total}
              </p>
              <div
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: 46,
                  fontWeight: 800,
                  lineHeight: 1,
                  color: COLORS.red,
                }}
              >
                {formatMoeda(total, config.simbolo)}
              </div>
            </div>
            <button
              onClick={limpar}
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 13,
                padding: "10px 16px",
                borderRadius: 10,
                border: `1.5px solid ${COLORS.cardBorder}`,
                background: "#FFFFFF",
                color: COLORS.ink,
                cursor: "pointer",
              }}
            >
              {config.ui.clear}
            </button>
          </div>

          {/* Coins + Notes side by side */}
          <div className="cs-cols" style={{ marginBottom: 20 }}>
            <div
              style={{
                background: COLORS.card,
                borderRadius: 20,
                padding: 18,
                border: `1.5px solid ${COLORS.cardBorder}`,
                marginBottom: 20,
              }}
            >
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  margin: "0 0 8px",
                  color: COLORS.indigo,
                }}
              >
                🪙 {config.ui.coins}
              </h2>
              {config.moedas.map((v) => (
                <LinhaDenominacao
                  key={v}
                  valor={v}
                  simbolo={config.simbolo}
                  quantidade={qtdMoedas[v] || 0}
                  onChange={(q) => setQtdMoedas((s) => ({ ...s, [v]: q }))}
                />
              ))}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: 12,
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: COLORS.ink,
                }}
              >
                <span>{config.ui.coinsSub}</span>
                <span>{formatMoeda(totalMoedas, config.simbolo)}</span>
              </div>
            </div>

            <div
              style={{
                background: COLORS.card,
                borderRadius: 20,
                padding: 18,
                border: `1.5px solid ${COLORS.cardBorder}`,
                marginBottom: 20,
              }}
            >
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  margin: "0 0 8px",
                  color: COLORS.indigo,
                }}
              >
                💵 {config.ui.notes}
              </h2>
              {config.notas.map((v) => (
                <LinhaDenominacao
                  key={v}
                  valor={v}
                  simbolo={config.simbolo}
                  quantidade={qtdNotas[v] || 0}
                  onChange={(q) => setQtdNotas((s) => ({ ...s, [v]: q }))}
                />
              ))}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: 12,
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: COLORS.ink,
                }}
              >
                <span>{config.ui.notesSub}</span>
                <span>{formatMoeda(totalNotas, config.simbolo)}</span>
              </div>
            </div>
          </div>

          {config.article && (
            <div
              style={{
                background: COLORS.card,
                borderRadius: 20,
                padding: 24,
                border: `1.5px solid ${COLORS.cardBorder}`,
                marginBottom: 20,
              }}
            >
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  margin: "0 0 12px",
                  color: COLORS.indigo,
                }}
              >
                {config.article.heading}
              </h2>
              {config.article.paragraphs.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: COLORS.sub,
                    marginBottom: 12,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          )}
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
        CashSum © {new Date().getFullYear()} · {config.ui.footer}
        <div style={{ marginTop: 6 }}>
          <Link href="/about" style={{ color: COLORS.subDim, textDecoration: "underline" }}>
            About
          </Link>
          {" · "}
          <Link href="/faq" style={{ color: COLORS.subDim, textDecoration: "underline" }}>
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
