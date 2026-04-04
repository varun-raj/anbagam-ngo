import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anbagam — Nourishing Lives",
  description: "Support Anbagam NGO by donating a meal for our 370+ residents across 3 care centers in Chennai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-stone-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
