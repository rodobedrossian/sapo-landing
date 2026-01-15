import type { Metadata } from "next";
import { Inter, Syne, Permanent_Marker } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const marker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sapo | Caffeine & Cuisine",
  description: "Caffeine & Cuisine. El sapo sabe lo que es bueno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${syne.variable} ${marker.variable} antialiased selection:bg-sapo-pink selection:text-black`}
      >
        <div className="fixed inset-0 grain-texture z-[9999]" />
        {children}
      </body>
    </html>
  );
}
