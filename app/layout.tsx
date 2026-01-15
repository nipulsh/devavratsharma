import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SNAP VIBE - AI Emotion Detection",
  description:
    "SNAP VIBE is an innovative AI-powered emotion detection system using computer vision and machine learning to recognize human emotions through webcam and uploaded photos. Trained with Google Teachable Machine.",
  keywords: [
    "AI",
    "emotion detection",
    "computer vision",
    "machine learning",
    "facial recognition",
    "mood recognition",
  ],
};

import Footer from "./components/Footer";

// ... existing code ...

import Navigation from "./components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <Navigation />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
