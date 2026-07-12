export const metadata = {
  title: "CashSum",
  description: "Count your notes and coins in seconds.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
