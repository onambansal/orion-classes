import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orion Classes — Abacus & Vedic Maths for Kids | Sector 79, Noida",
  description:
    "Orion Classes offers Abacus training, Vedic Mathematics, Brain Development, Personality Development and Rubik's Cube programs for children aged 4–15 in Sector 79, Noida. Online classes available across India. Book a free trial today!",
  keywords:
    "abacus classes noida, vedic maths for kids, abacus training sector 79, brain development kids noida, mental maths noida, kids tuition noida, orion classes",
  openGraph: {
    title: "Orion Classes — Abacus & Vedic Maths for Kids | Noida",
    description:
      "Helping children aged 4–15 build concentration, memory, confidence and mental maths skills through structured programs. Home tuition & online classes available.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
