import type { Metadata } from "next";
import "./globals.css";
import { Oxanium, Outfit, Sawarabi_Gothic } from "next/font/google";

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const sawarabi = Sawarabi_Gothic({
  subsets: ["latin"],
  variable: "--font-sawarabi",
  weight: "400",
});

export const metadata: Metadata = {
  title: "med-000 Portofolio",
  description: "This is med-000's Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body
        className={`${oxanium.variable} ${outfit.variable} ${sawarabi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
