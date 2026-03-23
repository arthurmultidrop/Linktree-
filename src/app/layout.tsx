import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TopFind — Cartão NFC Inteligente para seu Negócio",
  description:
    "Transforme seu cartão de visita em uma experiência digital. Páginas personalizadas acessíveis com um toque NFC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neutral-950 text-neutral-100">{children}</body>
    </html>
  );
}
