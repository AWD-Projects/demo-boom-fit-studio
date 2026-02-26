import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boomfitstudio.com"),
  title: "BOOM Fitness Studio | Narvarte, CDMX",
  description:
    "Not here to blend. In here to BOOM. Fitness studio en Narvarte con 4 disciplinas: Funcional, Fuerza, Hot-Mat Pilates y Hot-Barre.",
  keywords: [
    "BOOM",
    "fitness studio",
    "Narvarte",
    "CDMX",
    "funcional",
    "fuerza",
    "hot pilates",
    "barre",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://boomfitstudio.com",
    title: "BOOM Fitness Studio | Narvarte, CDMX",
    description: "Not here to blend. In here to BOOM.",
    siteName: "BOOM Fitness Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOOM Fitness Studio | Narvarte, CDMX",
    description: "Not here to blend. In here to BOOM.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2255E8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
