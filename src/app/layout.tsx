import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const space = Manrope({
  variable: "--font-space",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Анара Битебаева — Казахстанская ассоциация Даму",
  description:
    "Исполнительный директор ОЮЛ «Казахстанская ассоциация Даму». 48 социально значимых проектов в 20 регионах Казахстана.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${space.variable}`}>
      <body>{children}</body>
    </html>
  );
}
