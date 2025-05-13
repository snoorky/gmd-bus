import type { Metadata } from "next";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";

const font = Bebas_Neue({
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "GMD Bus - Transporte de Qualidade",
  description:
    "Soluções de transporte confiáveis e eficientes para sua empresa",
  keywords: [
    "transporte",
    "ônibus",
    "fretamento",
    "mobilidade",
    "transporte corporativo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased ${font.className}`}>{children}</body>
    </html>
  );
}
