import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reformacja - Premium Renowacja Wnętrz Jachtów i Samochodów",
  description: "Mobilna renowacja skór, drewna i elementów soft-touch w Trójmieście. Jachty, samochody klasyczne, meble.",
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