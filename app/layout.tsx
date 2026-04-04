import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anbagam — Restoring Dignity, Transforming Lives",
  description: "Support Anbagam NGO — donate a daily meal for our 370+ residents across 3 care centers in Chennai. An initiative by TERDOD.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
