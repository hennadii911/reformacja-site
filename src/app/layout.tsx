import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReFormacja - Renowacja Wnętrz",
  description: "Premium renowacja skóry, soft-touch, drewna, ceramiki i PVC. Gdynia, Sopot, Gdańsk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}