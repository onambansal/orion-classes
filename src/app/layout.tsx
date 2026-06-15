import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orion Classes — Abacus & Vedic Maths for Kids | Noida",
  description:
    "Orion Classes offers Abacus training, Vedic Mathematics, Maths Wizard and Rubik's Cube programs for children aged 4–15. Online classes available across India. Book a free trial today!",
  keywords:
    "abacus classes noida, vedic maths for kids, abacus training noida, brain development kids noida, mental maths noida, kids tuition noida, orion classes",
  metadataBase: new URL("https://orionclasses.in"),
  openGraph: {
    title: "Orion Classes — Abacus & Vedic Maths for Kids | Noida",
    description:
      "Helping children aged 4–15 build concentration, memory, confidence and mental maths skills through structured programs. Offline & online classes available.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Orion Classes — Abacus & Vedic Maths for Kids",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://orionclasses.in",
      name: "Orion Classes",
      description:
        "Abacus training, Vedic Mathematics, Maths Wizard and Rubik's Cube programs for children aged 4–15. Online classes available across India.",
      url: "https://orionclasses.in",
      telephone: "+918800093436",
      email: "sonambansal.sb@gmail.com",
      founder: {
        "@type": "Person",
        name: "Sonam Bansal",
      },
      openingHours: "Mo-Sa 09:00-20:00",
      priceRange: "₹₹",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "50",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Programs",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Abacus Training" } },
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Vedic Mathematics" } },
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Maths Wizard" } },
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Rubik's Cube" } },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
