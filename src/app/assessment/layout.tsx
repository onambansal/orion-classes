import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Maths Assessment for Kids — Orion Classes",
  description:
    "Take our free 5-minute Maths Assessment to discover where your child stands in mental calculation, concentration and problem-solving. Instant results, no sign-up needed.",
  keywords:
    "free maths assessment kids, maths test for children, abacus assessment, mental maths test, orion classes assessment",
  metadataBase: new URL("https://orionclasses.in"),
  openGraph: {
    title: "Free Maths Assessment for Kids — Orion Classes",
    description:
      "Discover your child's maths level in just 5 minutes. Free, instant results — no sign-up needed. By Orion Classes, Noida.",
    type: "website",
    locale: "en_IN",
    url: "https://orionclasses.in/assessment",
    siteName: "Orion Classes",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Free Maths Assessment — Orion Classes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Maths Assessment for Kids — Orion Classes",
    description:
      "Discover your child's maths level in just 5 minutes. Free, instant results — no sign-up needed.",
    images: ["/logo/logo.png"],
  },
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
