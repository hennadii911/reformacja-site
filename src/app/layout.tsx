import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReFormacja | Premium Renowacja Wnętrz Jachtów i Samochodów",
  description: "Skóra, soft-touch, drewno, ceramika i PVC. Mobilne atelier. Gdynia · Sopot · Gdańsk.",
  keywords: "renowacja, skóra, soft-touch, drewno, PVC, ceramika, samochód, jacht, Gdynia, Gdańsk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">{children}</body>
    </html>
  );
}