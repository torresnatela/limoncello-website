import type { Metadata, Viewport } from "next";
import { Archivo, Cinzel, EB_Garamond } from "next/font/google";
import { SITE_URL } from "@/lib/config";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel", display: "swap" });
const garamond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap" });

const description =
  "Limoncello artesanal brasileiro, feito a partir de uma receita encontrada em Positano. Licor fino de limão siciliano, 30% vol. Peça pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ritorno alle Origini",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Ritorno alle Origini",
    title: "Ritorno alle Origini · Limoncello",
    description: "O gosto de uma tarde na Costa Amalfitana. Licor fino de limão siciliano, 30% vol.",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#152340",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${garamond.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
