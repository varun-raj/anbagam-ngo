import type { Metadata } from "next";
import Script from "next/script";
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
        <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
        />
      </body>
    </html>
  );
}
