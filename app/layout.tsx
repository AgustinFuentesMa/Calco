import type { Metadata } from "next";
import { Roboto_Slab, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-roboto-slab",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
});

export const metadata: Metadata = {
  title: "Calco Argentina",
  description:
    "Calco Argentina produce el 100% de lo que envasa: arroz, avena, legumbres y maíz, desde Tucumán bajo las marcas Campo Lindo, Don Apiro y Super Omega.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${robotoSlab.variable} ${inter.variable} ${jbMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
