import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const font = localFont({
  src: "./fonts/BebasNeue.ttf",
});

export const metadata: Metadata = {
  title: "GMD Bus - Comércio e Serviços para Ônibus",
  description: "Especialistas em compra, venda, troca, financiamento e manutenção de ônibus. Mais de 15 anos de experiência no setor.",
  keywords: [
    "ônibus",
    "compra de ônibus",
    "venda de ônibus",
    "micro-ônibus",
    "financiamento de ônibus",
    "troca de ônibus",
    "manutenção de ônibus",
    "GMD Bus",
    "avaliar ônibus",
    "funilaria de ônibus",
    "ar-condicionado ônibus",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T662KWJS0K"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T662KWJS0K');
          `}
        </Script>
      </head>
      <body className={`antialiased ${font.className}`}>
        {children}
        <Link
          href="https://api.whatsapp.com/send?phone=5515996183121&text=Oi!+Vi+o+site+da+GMD+e+quero+falar+com+um+atendente.+Pode+me+chamar?"
          target="_blank"
          className="z-1 fixed bottom-2 right-2"
        >
          <Image
            src="/whatsapp.png"
            width={60}
            height={60}
            alt="ícone do WhatsApp para entrar em contato"
          />
        </Link>
      </body>
    </html>
  );
}
