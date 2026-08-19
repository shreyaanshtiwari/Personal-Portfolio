import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Shreyansh Kumar Tiwari — Full Stack Vibe Coder & Founder of SwadDesh",
  description:
    "Personal digital portfolio and systems showcase of Shreyansh Kumar Tiwari. Full Stack Vibe Coder, Product Engineer, and Founder of SwadDesh. Engineering where technology meets Indian roots.",
  keywords: [
    "Shreyansh Kumar Tiwari",
    "Shreyansh Tiwari",
    "SwadDesh",
    "Founder",
    "Full Stack Vibe Coder",
    "Full Stack Developer",
    "Flutter",
    "Dart",
    "Java",
    "Spring Boot",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "Supabase",
    "B.Tech CSE",
    "Awwwards Portfolio",
  ],
  authors: [{ name: "Shreyansh Kumar Tiwari", url: "https://github.com/shreyaanshtiwari" }],
  creator: "Shreyansh Kumar Tiwari",
  openGraph: {
    title: "Shreyansh Kumar Tiwari — Full Stack Vibe Coder & Founder of SwadDesh",
    description:
      "Technical mind. Cultural soul. Explore the products, systems, and journey of Shreyansh Kumar Tiwari.",
    type: "website",
    locale: "en_US",
    siteName: "Shreyansh Kumar Tiwari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyansh Kumar Tiwari — Full Stack Vibe Coder & Founder of SwadDesh",
    description:
      "Technical mind. Cultural soul. Building ideas into scalable production systems.",
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '256x256', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '256x256', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0709",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth lenis">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-[#0C0709] text-[#FAF7F2] antialiased selection:bg-[#5A0F1C] selection:text-[#F3E5AB]`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
