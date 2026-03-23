import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Оксана Назаренко — Врач-невролог | Магадан",
  description:
    "Частная неврологическая практика в Магадане. Консультация невролога, лечение головной боли, мигрени, болей в спине. Индивидуальный подход. Без очередей. Запись онлайн.",
  keywords: [
    "невролог Магадан",
    "частный невролог",
    "консультация невролога",
    "лечение мигрени Магадан",
    "боли в спине Магадан",
    "Назаренко невролог",
  ],
  openGraph: {
    title: "Оксана Назаренко — Врач-невролог | Магадан",
    description: "Частная неврологическая практика. Без очередей. Индивидуальный подход.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
