import Script from "next/script";

export const metadata = {
  title: "CashSum",
  description: "Count your notes and coins in seconds.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0BK72152P5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0BK72152P5');
          `}
        </Script>
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
