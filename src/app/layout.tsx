import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NFC Card - Seu Negócio na Palma da Mão",
  description: "Cartões NFC inteligentes para o seu negócio. Conecte seus clientes com um toque.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">{children}</body>
    </html>
  );
}
