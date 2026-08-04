import Script from "next/script";

export const metadata = {
  title: "CashSum",
  description: "Count your notes and coins in seconds.",
  icons: {
    icon: "/favicon-source.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1120468337160701"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
